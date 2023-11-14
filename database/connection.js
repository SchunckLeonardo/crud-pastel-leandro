const Sequelize = require('sequelize')
const connection = new Sequelize("pastel_feira", "root", "Leo123nar456!", {
    host: "localhost",
    dialect: "mysql",
    logging: false
})

module.exports = connection