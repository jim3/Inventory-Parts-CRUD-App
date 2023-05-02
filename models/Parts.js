import sequelize from "../db.js";
import { Sequelize } from "sequelize";

const Parts = sequelize.define("Parts", {
    partName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    partType: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

const db = { Parts, sequelize, Sequelize };
export default db; // module.exports = db;
