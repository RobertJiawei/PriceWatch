import Product from "../models/product.model.js";
import { sendEmail } from "./emailService.js";

const parsePrice = (priceString) => parseFloat(priceString.replace("$", ""));
const price = "$1000.00";

export const checkPriceChange = async () => {
  const products = await Product.find({});
  for (const product of products) {
    const currentPrice = parsePrice(product.product_price);
    const newPrice = parsePrice(price);

    if (currentPrice !== newPrice) {
      product.product_price = `$${newPrice.toFixed(2)}`;
      await product.save();

      await sendEmail("rafael.beahan46@ethereal.email ", product);
    } else {
      console.log("price no change");
    }
  }
};
