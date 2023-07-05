import * as express from "express";
const router = express.Router();
import { deleteColumn } from "../controllers/columnController";

// Route for adding a column to the Sales table
router.delete("/", deleteColumn);

export default router;
