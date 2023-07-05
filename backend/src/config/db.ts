const Sequelize = require("sequelize");

const sequelize = new Sequelize("developer_challenge", "root", "marve007", {
  dialect: "mysql",
  host: "localhost",
});

export default sequelize;
