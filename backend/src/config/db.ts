import mysql from "mysql2";
const Sequelize = require("sequelize");

const sequelize = new Sequelize("developer_challenge", "root", "marve007", {
  dialect: "mysql",
  host: "localhost",
});

// module.exports = sequelize;
export default sequelize;
