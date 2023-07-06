const { Sequelize } = require("sequelize");
const { SecretManagerServiceClient } = require("@google-cloud/secret-manager");

async function getSecret() {
  const client = new SecretManagerServiceClient();
  const [version] = await client.accessSecretVersion({
    name: `projects/885281433299/secrets/user_db/versions/1`,
  });
  const payload = version.payload.data.toString();
  const secret = JSON.parse(payload);
  return secret;
}

async function connectToDatabase() {
  const secret = await getSecret();

  const sequelize = new Sequelize("db_latihan", secret.username, "", {
    host: "127.0.0.1",
    port: "3306",
    dialect: "mysql",
  });

  try {
    await sequelize.authenticate();
    console.log("Connection to the database has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = {
  sequelize,
  connectToDatabase
};
