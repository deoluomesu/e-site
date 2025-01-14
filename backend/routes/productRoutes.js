const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch products" });
    }
});

// Get a single product by ID
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch product" });
    }
});

// Create a new product
router.post('/add', async (req, res) => {
    try {
        const { name, price, description } = req.body;

        if (!name || !price || !description) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newProduct = new Product({ name, price, description });
        await newProduct.save();

        res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } catch (error) {
        console.error('Error adding product:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});


// Update a product
router.put("/:id", async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedProduct)
            return res.status(404).json({ message: "Product not found" });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: "Failed to update product" });
    }
});

// Delete a product
router.delete("/:id", async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct)
            return res.status(404).json({ message: "Product not found" });
        res.status(200).json({ message: "Product deleted" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete product" });
    }
});

module.exports = router;
