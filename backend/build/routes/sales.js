"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const salesController_1 = require("../controllers/salesController");
const router = express_1.default.Router();
router.route("/").get(salesController_1.getAllSales).post(salesController_1.recordNewSale);
router.delete("/:id", salesController_1.deleteSale);
exports.default = router;
//# sourceMappingURL=sales.js.map