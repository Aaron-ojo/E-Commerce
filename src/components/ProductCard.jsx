import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();

  return (
    <div
      className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center bg-white"
      onClick={() => {
        navigate(`products/${product.id}`);
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-40 object-contain mb-4"
      />
      <h2 className="font-semibold text-center text-sm mb-2">
        {product.title}
      </h2>
      <p className="text-blue-600 font-bold mb-2">${product.price}</p>
      <button
        onClick={() => {
          console.log("BUTTON CLICKED!", product.title);
          addToCart(product);
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
