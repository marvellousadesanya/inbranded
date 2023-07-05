import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db";

class Sale extends Model {
  public id!: number;
  public date!: Date;
  public customer_name!: string;
  public item_sold!: string;
  public quantity!: number;
  public unit_price!: number;

  // Add any additional methods or associations here

  // This method is required for TypeScript to infer the correct types for Sequelize models
  static associate(models: any) {}
}

Sale.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    date: {
      type: DataTypes.TIME,
    },
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_sold: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    unit_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Sale",
    tableName: "sales", // optional, specify the table name if different from the model name
  }
);

export default Sale;

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
