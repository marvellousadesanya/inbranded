"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSale = exports.recordNewSale = exports.getAllSales = void 0;
const Sale_1 = __importDefault(require("../models/Sale"));
const getAllSales = async (req, res) => {
    try {
        const sales = await Sale_1.default.findAll();
        console.log(sales);
        res.send(sales);
    }
    catch (error) {
        console.error("Error fetching sales:", error);
    }
};
exports.getAllSales = getAllSales;
const recordNewSale = async (req, res) => {
    try {
        const saleData = req.body;
        const newSale = await Sale_1.default.create(saleData);
        console.log("New sale added:", newSale);
        res.status(200).json(newSale);
    }
    catch (error) {
        console.error("Error adding new sale:", error);
        res
            .status(500)
            .json({ error: "An error occurred while adding the new sale" });
    }
};
exports.recordNewSale = recordNewSale;
const deleteSale = async (req, res) => {
    const saleId = req.params.id;
    try {
        // Find the sale by ID
        const sale = await Sale_1.default.findByPk(saleId);
        if (!sale) {
            return res.status(404).json({ error: "Sale not found" });
        }
        // Delete the sale
        await sale.destroy();
        res.status(200).json({ message: "Sale deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting sale:", error);
        res
            .status(500)
            .json({ error: "An error occurred while deleting the sale" });
    }
};
exports.deleteSale = deleteSale;
//# sourceMappingURL=salesController.js.map