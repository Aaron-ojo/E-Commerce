import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
