import dotenv from "dotenv";
import mongoose from "mongoose";
import { checkPriceChange } from "./utility/priceCheck.js";

dotenv.config({ path: "../.env" });

mongoose
  .connect(process.env.databaseURL)
  .then(() => {
    console.log("App connected to database");
    checkPriceChange();
  })
  .catch((error) => {
    console.log(error);
  });
