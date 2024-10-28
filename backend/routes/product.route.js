import express from "express";
import {
  addProductToTrack,
  searchProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/search", searchProduct);
router.post("/add", addProductToTrack);

export default router;
