"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const sequelize = new Sequelize("developer_challenge", "root", "marve007", {
    dialect: "mysql",
    host: "localhost",
});
// module.exports = sequelize;
exports.default = sequelize;
//# sourceMappingURL=db.js.map