const { DataTypes } = require('sequelize')

const db = require('../database/connection')

const Point = db.define('Point', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        require: true,
        type: DataTypes.INTEGER
    },
    points: {
        type: DataTypes.INTEGER,
        allowNull: false,
        require: true,
    }
})

module.exports = Point