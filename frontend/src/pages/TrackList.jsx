import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const TrackList = () => {
  const [trackList, setTrackList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getList = async () => {
      try {
        const res = await axios.get("/product/get");
        setTrackList(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getList();
  }, []);

  return (
    <main className="m-3 p-3 flex flex-col max-w-6xl mx-auto min-h-72">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <section className="mt-8">
          {trackList.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trackList.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  // handleClick={handleClick}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 mt-4">
              No products found. Try searching for something else.
            </p>
          )}
        </section>
      )}
    </main>
  );
};

export default TrackList;
