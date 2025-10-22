import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ addToCart }) => {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        setIsLoading(false);
      });
  }, [productId]);

  if (isLoading) return <p>loading....</p>;
  if (!productData) return <p>Product not found</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img
            src={productData.image}
            alt={productData.title}
            className="w-full h-96 object-contain bg-white p-4 rounded-lg shadow"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800">
            {productData.title}
          </h1>
          <p className="text-2xl font-bold text-blue-600 my-4">
            ${productData.price}
          </p>
          <p className="text-gray-600 mb-6">{productData.description}</p>

          <div className="flex items-center mb-6">
            <span className="text-yellow-400">★★★★★</span>
            <span className="ml-2 text-gray-600">
              {productData.rating.rate} ({productData.rating.count} reviews)
            </span>
          </div>

          <button
            onClick={() => {
              addToCart(productData);
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-lg font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
