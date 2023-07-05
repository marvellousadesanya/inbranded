"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteColumn = exports.renameColumn = exports.addColumn = void 0;
const db_1 = __importDefault(require("../config/db"));
const sequelize_1 = require("sequelize");
const addColumn = async (req, res) => {
    const { columnName, columnType } = req.body; // Assuming you pass the column name and type in the request body
    try {
        // Add the new column using Sequelize query
        /* Used Queries here cos I found them easier to work with here */
        await db_1.default.query(`ALTER TABLE sales ADD COLUMN ${columnName} ${columnType}`, {
            type: sequelize_1.QueryTypes.RAW,
        });
        res.status(200).json({ message: "Column added successfully" });
    }
    catch (error) {
        console.error("Error adding column:", error);
        res.status(500).json({ message: "Failed to add column" });
    }
};
exports.addColumn = addColumn;
const renameColumn = async (req, res) => {
    const { columnName, columnType } = req.body;
    try {
        // Add the new column using Sequelize query
        await db_1.default.query(`ALTER TABLE sales ADD COLUMN ${columnName} ${columnType}`, {
            type: sequelize_1.QueryTypes.RAW,
        });
        res.status(200).json({ message: "Column added successfully" });
    }
    catch (error) {
        console.error("Error adding column:", error);
        res.status(500).json({ message: "Failed to add column" });
    }
};
exports.renameColumn = renameColumn;
const deleteColumn = async (req, res) => {
    const { columnName } = req.body;
    try {
        // Delete column using raw query
        await db_1.default.query(`ALTER TABLE Sales DROP COLUMN ${columnName};`);
        res.status(200).json({ message: "Column deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting column:", error);
    }
};
exports.deleteColumn = deleteColumn;
//# sourceMappingURL=columnController.js.map