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
    product_price: {
      type: String,
    },
    product_original_price: {
      type: String,
    },
    product_star_rating: {
      type: String,
    },
    product_url: {
      type: String,
    },
    product_photo: {
      type: String,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
