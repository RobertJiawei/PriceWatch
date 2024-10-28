import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    asin: {
      type: String,
      unique: true,
      required: true,
    },
    product_title: {
      type: String,
      required: true,
    },
    product_current_price: {
      type: String,
    },
    product_old_price: {
      type: String,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
