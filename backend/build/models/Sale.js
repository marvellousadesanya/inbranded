"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class Sale extends sequelize_1.Model {
    // Add any additional methods or associations here
    // This method is required for TypeScript to infer the correct types for Sequelize models
    static associate(models) { }
}
Sale.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    date: {
        type: sequelize_1.DataTypes.TIME,
    },
    customer_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    item_sold: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    unit_price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: db_1.default,
    modelName: "Sale",
    tableName: "sales", // optional, specify the table name if different from the model name
});
exports.default = Sale;
// const Sequelize = require("sequelize");
// import sequelize from "../config/db";
// const Sale = sequelize.define("Sale", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true,
//   },
//   date: {
//     type: Sequelize.TIME,
//   },
//   customer_name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   item_sold: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   quantity: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//   },
//   unit_price: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//   },
// });
// module.exports = Sale;
//# sourceMappingURL=Sale.js.map