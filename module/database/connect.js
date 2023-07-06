const mysql = require("mysql2");
const { SecretManagerServiceClient } = require("@google-cloud/secret-manager");

const client = new SecretManagerServiceClient();

async function getSecret() {
  const [version] = await client.accessSecretVersion({
    name: `projects/885281433299/secrets/user_db/versions/1`,
  });
  const payload = version.payload.data.toString();
  const secret = JSON.parse(payload);
  return secret;
}

async function connectToDatabase() {
  try {
    const secret = await getSecret();

    const pool = mysql.createPool({
        host: '127.0.0.1',
        user: secret,
        password: '',
        database: 'latihan_db'
    });

    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Error connecting to database:", err);
      } else {
        console.log("Connected to database!");
        connection.release();
      }
    });

    const query = (sql, values) => {
      return new Promise((resolve, reject) => {
        pool.query(sql, values, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });
    };

    return query;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    throw error;
  }
}

module.exports = {
  connectToDatabase,
};
