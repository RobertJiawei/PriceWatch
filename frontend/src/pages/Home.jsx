import axios from "axios";
import { TextInput } from "flowbite-react";
import { useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [formData, setFormData] = useState("");
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleClick = async (product) => {
    try {
      const res = await axios.post("/product/add", product);
      console.log("product add successfully", res.data);
    } catch (error) {
      console.log(`product add failed: ${error}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await axios.post("/product/search", { query: formData });
      const data = res.data;
      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className=" m-3 p-3 flex flex-col max-w-6xl mx-auto min-h-72">
      <h1 className="uppercase text-3xl my-3 font-semibold text-center mt-8">
        Search a Product
      </h1>
      <form
        className="flex flex-row mt-6 justify-center gap-4 items-center"
        onSubmit={handleSubmit}
      >
        <div className="">
          <TextInput
            type="text"
            placeholder="Search a product"
            required
            id="search"
            className="flex-1"
            onChange={handleChange}
          />
        </div>
        <div className="p-2">
          <button className=" rounded-lg border p-2 hover:bg-gray-200">
            Search
          </button>
        </div>
      </form>
      <section className="mt-8">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                handleClick={handleClick}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-4">
            No products found. Try searching for something else.
          </p>
        )}
      </section>
    </main>
  );
};
export default Home;
