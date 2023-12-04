const { DataTypes } = require('sequelize')

const db = require('../database/connection')

const Companie = require('./Companie')

const Message = db.define('Message', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        require: true,
        type: DataTypes.INTEGER
    },
    message: {
        allowNull: false,
        require: true,
        type: DataTypes.STRING
    },
    email: {
        allowNull: false,
        require: true,
        type: DataTypes.STRING
    }
})

// Message.belongsTo(Companie, { foreignKey: 'companieId' })

module.exports = Message