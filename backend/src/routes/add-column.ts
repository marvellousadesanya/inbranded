import * as express from "express";
const router = express.Router();
import { addColumn } from "../controllers/columnController";

// Route for adding a column to the Sales table
router.post("/", addColumn);

module.exports = router;
