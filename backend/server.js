const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes 
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// Connect to MongoDB 
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/e-site");
    console.log("MongoDB connected locally");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

// Route to serve the main page
app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to e-site!</h1><p>MongoDB is connected successfully!</p>"
  );
});

// Start the server after connecting to MongoDB
const startServer = async () => {
  await connectDB();

  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();
