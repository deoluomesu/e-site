"use client";
import React, { useState, useEffect } from "react";
import useCart from "../context/CartContext";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const { addToCart } = useCart();

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");

        // Check if the response is okay
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setProducts(data); // Update state with fetched products
      } catch (err) {
        setError(err.message); // Set error message if fetch fails
      }
    };

    fetchProducts();
  }, []);

  // Handle product deletion (example)
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Failed to delete product: ${response.statusText}`);
      }

      // Filter out deleted product from state
      setProducts(products.filter((product) => product._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-16 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>

      {/* Display error if fetch fails */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Show loading message if no products yet */}
      {products.length === 0 && !error ? (
        <p className="text-center text-gray-500">No products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-lg p-4 transform hover:scale-105 transition-transform duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {product.description}
              </p>
              <p className="text-green-500 font-bold text-lg">
                ${product.price}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Add to Cart
              </button>
              <button
                onClick={() => handleDelete(product._id)}
                className="mt-2 w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
