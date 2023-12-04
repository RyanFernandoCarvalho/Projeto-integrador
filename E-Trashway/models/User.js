const { DataTypes } = require('sequelize')

const db = require('../database/connection')

const Point = require('./Point')
const Message = require('./Message')

const User = db.define('User', {
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
    email: {
        allowNull: false,
        require: true,
        type: DataTypes.STRING
    },
    password: {
        allowNull: false,
        require: true,
        type: DataTypes.STRING
    }
})

User.hasOne(Point, {foreignKey:'userId'})
User.hasMany(Message, {foreignKey:'userId'})

module.exports = User