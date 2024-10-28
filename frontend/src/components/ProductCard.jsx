const ProductCard = ({ product, handleClick }) => {
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
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-yellow-500 rounded-full"></div>
          ))}
          <span className="text-xs text-gray-500">
            {product.product_star_rating}
          </span>
        </div>
        <a href={`${product.product_url}`}>
          <button className="py-2 px-4 bg-gray-200 text-black rounded-full hover:bg-gray-300 font-semibold">
            View Product
          </button>
        </a>
        <div>
          <button
            className="py-2 px-4 bg-blue-400 text-white rounded-full font-semibold"
            onClick={() => handleClick(product)}
          >
            Track this product
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
