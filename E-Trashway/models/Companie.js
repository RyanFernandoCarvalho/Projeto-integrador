const { DataTypes } = require('sequelize')

const db = require('../database/connection')

const Companie = db.define('Companie', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        require: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        require: true,
        type: DataTypes.STRING
    },
    image: {
        allowNull: false,
        require: true,
        type: DataTypes.STRING
    },
    phone: {
        allowNull: false,
        require: true,
        type: DataTypes.STRING
    },
    functionTime: {
        allowNull: false,
        require: true,
        type: DataTypes.STRING
    },
    status: {
        allowNull: false,
        require: true,
        type: DataTypes.STRING
    }
})

module.exports = Companie