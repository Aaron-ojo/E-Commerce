import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Search from "./components/Search";
import ProductDetail from "./components/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const filteredProducts = products.filter((products) => {
    const matchSearch = products.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    let matchCategory;
    if (selectedCategory === "" || selectedCategory === "all") {
      matchCategory = true;
    } else {
      matchCategory = products.category === selectedCategory;
    }

    let matchPrice;
    if (priceRange.min === 0 && priceRange.max === 1000) {
      matchPrice = true;
    } else {
      matchPrice =
        products.price >= priceRange.min && products.price <= priceRange.max;
    }

    return matchSearch && matchPrice && matchCategory;
  });

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
        item.id === productID && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <Router>
      <div>
        <Navbar cartCount={cartCount} />
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <ProductList
                  products={filteredProducts}
                  isLoading={isLoading}
                  addToCart={addToCart}
                />
                <Cart
                  cart={cart}
                  removeFromCart={removeFromCart}
                  incrementQty={incrementQty}
                  decrementQty={decrementQty}
                  totalPrice={totalPrice}
                />
              </>
            }
          />
          <Route
            path="/products/:productId"
            element={<ProductDetail addToCart={addToCart} />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
