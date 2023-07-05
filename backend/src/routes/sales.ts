import express, { Request } from "express";
import {
  getAllSales,
  recordNewSale,
  deleteSale,
} from "../controllers/salesController";
const router = express.Router();

router.route("/").get(getAllSales).post(recordNewSale);

router.delete("/:id", deleteSale);

export default router;
