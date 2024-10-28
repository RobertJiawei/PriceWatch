import Product from "../models/product.model.js";
import { testData } from "../testData.js";

export const searchProduct = async (req, res) => {
  const { query } = req.body;
  // const options = {
  //   method: "GET",
  //   url: "https://real-time-amazon-data.p.rapidapi.com/search",
  //   params: {
  //     query: query,
  //     page: "1",
  //     country: "US",
  //     sort_by: "RELEVANCE",
  //     product_condition: "ALL",
  //     is_prime: "false",
  //     deals_and_discounts: "NONE",
  //   },
  //   headers: {
  //     "x-rapidapi-key": process.env.rapidapikey,
  //     "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
  //   },
  // };
  try {
    // const response = await axios.request(options);
    // const data = testData.data?.data?.products;
    const data = testData.data.products;
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error.message || error);
    res.status(500).send("error");
  }
};

export const addProductToTrack = async (req, res) => {
  const trackedProduct = new Product({
    asin: req.body.asin,
    product_title: req.body.product_title,
    product_current_price: req.body.product_price,
    product_old_price: req.body.product_original_price,
  });

  try {
    const savedProduct = await trackedProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    console.log(error);
  }
};
