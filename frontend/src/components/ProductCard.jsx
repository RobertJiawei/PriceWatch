const ProductCard = ({ product, handleClick, type }) => {
  return (
    <div className="relative flex flex-col sm:flex-row justify-between items-stretch box-border border p-4 rounded-lg shadow-md gap-2 sm:flex-grow">
      <section className="flex-grow flex flex-col gap-4 p-2">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-500">{product.asin}</span>
          <h2 className="text-lg font-semibold text-gray-900">
            {product.product_title}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold">{product.product_price}</span>
        </div>
        <a href={`${product.product_url}`}>
          <button className="py-2 px-4 bg-gray-200 text-black rounded-full hover:bg-gray-300 font-semibold w-2/3">
            View Product
          </button>
        </a>
        <div>
          <button
            className="py-2 px-4 w-2/3 bg-blue-400 text-white rounded-full font-semibold"
            onClick={() => handleClick(product)}
          >
            {type === "add" ? "Track this product" : "Remove from track list"}
          </button>
        </div>
      </section>
      <div className="h-full flex">
        <img
          src={product.product_photo}
          alt={product.product_title}
          className="object-scale-down max-w-[180px] max-h-[280px]:"
        />
      </div>
    </div>
  );
};

export default ProductCard;
