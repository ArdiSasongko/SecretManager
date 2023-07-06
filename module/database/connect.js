const { Sequelize } = require("sequelize")
// const  { SecretManagerServiceClient } = require("@google-cloud/secret-manager")

// const Client = SecretManagerServiceClient()
// const [version] = await Client.accessSecretVersion({
//     name: `projects/885281433299/secrets/user_db/versions/1`
// })
// const payload = version.payload.data.toString()
// const secret = JSON.parse(payload)

const sequelize = new Sequelize("db_latihan", "root", " ",{
    host : "127.0.0.1",
    port : "3306",
    dialect : "mysql"
})

module.exports = sequelize