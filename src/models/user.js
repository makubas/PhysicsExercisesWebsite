const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../database.js");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    }
});

module.exports = User;