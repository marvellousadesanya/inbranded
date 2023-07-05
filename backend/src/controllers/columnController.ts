import Sale from "../models/Sale";
import sequelize from "../config/db";
import { QueryTypes } from "sequelize";

const addColumn = async (req, res) => {
  const { columnName, columnType } = req.body; // Assuming you pass the column name and type in the request body

  try {
    // Add the new column using Sequelize query

    /* Used Queries here cos I found them easier to work with here */
    await sequelize.query(
      `ALTER TABLE sales ADD COLUMN ${columnName} ${columnType}`,
      {
        type: QueryTypes.RAW,
      }
    );

    res.status(200).json({ message: "Column added successfully" });
  } catch (error) {
    console.error("Error adding column:", error);
    res.status(500).json({ message: "Failed to add column" });
  }
};

const renameColumn = async (req, res) => {
  const { columnName, columnType } = req.body;

  try {
    // Add the new column using Sequelize query
    await sequelize.query(
      `ALTER TABLE sales ADD COLUMN ${columnName} ${columnType}`,
      {
        type: QueryTypes.RAW,
      }
    );

    res.status(200).json({ message: "Column added successfully" });
  } catch (error) {
    console.error("Error adding column:", error);
    res.status(500).json({ message: "Failed to add column" });
  }
};

const deleteColumn = async (req, res) => {
  const { columnName } = req.body;

  try {
    // Delete column using raw query
    await sequelize.query(`ALTER TABLE Sales DROP COLUMN ${columnName};`);

    res.status(200).json({ message: "Column deleted successfully" });
  } catch (error) {
    console.error("Error deleting column:", error);
  }
};

export { addColumn, renameColumn, deleteColumn };
