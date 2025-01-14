"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center text-gray-800">
      {/* Hero Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-blue-500">eSite</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Discover amazing products and shop effortlessly with our beautifully
          designed platform.
        </p>
      </motion.div>

      {/* Call to Action Buttons */}
      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
      >
        <Link href="/products" className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-all">
          Shop Now
        </Link>
        <Link href="/about" className="bg-gray-200 text-gray-800 py-2 px-6 rounded-lg shadow-lg hover:bg-gray-300 transition-all">
          Learn More
        </Link>
      </motion.div>

      {/* Animated Background Element */}
      <motion.div
        className="absolute top-10 right-10 bg-blue-100 h-20 w-20 rounded-full"
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 bg-blue-300 h-32 w-32 rounded-full"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 20, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default HomePage;

