import express from "express";
import {
  addProductToTrack,
  deleteProduct,
  getTrackList,
  searchProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/search", searchProduct);
router.post("/add", addProductToTrack);
router.get("/get", getTrackList);
router.delete("/delete", deleteProduct);

export default router;
