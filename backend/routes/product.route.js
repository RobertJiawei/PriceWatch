import express from "express";
import {
  addProductToTrack,
  getTrackList,
  searchProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/search", searchProduct);
router.post("/add", addProductToTrack);
router.get("/get", getTrackList);

export default router;
