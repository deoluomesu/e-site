import "./globals.css";
import Navbar from "../components/Navbar";
import { CartProvider } from "./context/CartContext.js";
import { AuthProvider } from "@/components/AuthProvider";

export const metadata = {
  title: "E-Site App",
  description: "A beautiful e-commerce platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-100 min-h-screen">
        <AuthProvider>
          <CartProvider>
            <Navbar />
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
