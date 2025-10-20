import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading)
    return <p className="text-center mt-10">Loading products...</p>;

  function addToCart(product) {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);

      if (found) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  }

  function removeFromCart(productID) {
    setCart((prev) => [...prev.filter((item) => item.id !== productID)]);
  }

  const incrementQty = (productId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  function decrementQty(productID) {
    setCart((prev) =>
      prev.map((item) =>
        item.quantity === productID && item.quantity > 1
          ? { ...item, quantity: quantity - 1 }
          : item
      )
    );
  }

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <ProductList
        products={products}
        isLoading={isLoading}
        addToCart={addToCart}
      />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        incrementQty={incrementQty}
        decrementQty={decrementQty}
      />
      <Footer />
    </div>
  );
}

export default App;
