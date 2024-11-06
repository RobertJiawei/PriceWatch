import axios from "axios";
import Product from "../models/product.model.js";

export const searchProduct = async (req, res) => {
  const { query } = req.body;
  const options = {
    method: "GET",
    url: "https://real-time-amazon-data.p.rapidapi.com/search",
    params: {
      query: query,
      page: "1",
      country: "US",
      sort_by: "RELEVANCE",
      product_condition: "ALL",
      is_prime: "false",
      deals_and_discounts: "NONE",
    },
    headers: {
      "x-rapidapi-key": process.env.rapidapikey,
      "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    const products = response.data.data.products;
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching data:", error.message || error);
    res.status(500).send({ message: "Failed to fetch products from API" });
  }
};

export const addProductToTrack = async (req, res) => {
  const {
    asin,
    product_title,
    product_price,
    product_original_price,
    product_star_rating,
    product_url,
    product_photo,
  } = req.body;

  const trackedProduct = new Product({
    asin,
    product_title,
    product_price,
    product_original_price,
    product_star_rating,
    product_url,
    product_photo,
  });

  try {
    const savedProduct = await trackedProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).send({ message: "Failed to save product" });
  }
};

export const getTrackList = async (req, res) => {
  try {
    const lists = await Product.find({});
    res.status(200).json(lists);
  } catch (error) {
    console.error("Error fetching track list:", error);
    res.status(500).send({ message: "Failed to retrieve track list" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { _id } = req.body;

    if (!_id) {
      return res.status(400).send({ message: "Product ID is required" });
    }
    const deletedProduct = await Product.findByIdAndDelete(_id);
    if (!deletedProduct) {
      return res.status(404).send({ message: "Product not found" });
    }
    res.status(200).send({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Deletion error:", error);
    res.status(500).send({ message: "Server error" });
  }
};
