import Product from "../models/product.model.js";
import NotificationService from "./notificationService.js";

const parsePrice = (priceString) => parseFloat(priceString.replace("$", ""));

export const checkPriceChange = async () => {
  const products = await Product.find({});
  for (const product of products) {
    const currentPrice = parsePrice(product.product_price);
    const newPrice = parsePrice("$10.00");

    if (currentPrice !== newPrice) {
      product.product_price = `$${newPrice.toFixed(2)}`;
      await product.save();

      // Send email notification
      NotificationService.sendNotification("email", {
        email: "rafael.beahan46@ethereal.email",
        product,
      });

      NotificationService.sendNotification("web", {
        message: `Price dropped for ${
          product.product_title
        } to $${newPrice.toFixed(2)}`,
      });
    } else {
      console.log("Price no change for", product.product_title);
    }
  }
};
