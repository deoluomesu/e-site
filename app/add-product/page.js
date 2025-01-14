"use client";
import { useState } from "react";

export default function AddProduct() {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/products/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Failed to add product");
            alert("Product added successfully!");
            setFormData({ name: "", price: "", description: "" }); // Clear form
        } catch (error) {
            console.error(error.message);
            alert("Failed to add product");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Add Product</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Product Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Product Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            placeholder="Enter product name"
                            required
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label
                            htmlFor="price"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Price ($)
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            placeholder="Enter product price"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label
                            htmlFor="description"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            placeholder="Enter product description"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 shadow-lg transition duration-300"
                        >
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
