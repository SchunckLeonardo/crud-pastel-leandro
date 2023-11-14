const { Sequelize, DataTypes } = require('sequelize')
const connection = require('../database/connection')
let Pastel = connection.define("pastel", {
    pastel_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pastel_price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})

PastelModel.sync({force: false})
module.exports = Pastel