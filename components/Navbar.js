"use client";
import Link from "next/link";
import { useContext } from "react";
import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import { AuthContext } from "./AuthProvider";
import { useRouter } from "next/navigation";

export default function Navbar() {
    return (
        <SessionProvider>
            <NavbarContent />
        </SessionProvider>
    );
}

function NavbarContent() {
    const { data: session } = useSession();
    const { isAuthenticated, logout } = useContext(AuthContext);
    const router = useRouter

    const handleLogout = async () => {
        logout();
        router.push("/");
    };


    return (
        <nav className="bg-gray-800 text-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="text-2xl font-bold">
                        <Link href="/" className="hover:text-gray-300">
                            E-Site
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/products" className="hover:text-gray-300">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/cart" className="hover:text-gray-300">
                                Cart
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-gray-300">
                                About
                            </Link>
                        </li>
                        <div>
                            {!isAuthenticated ? (
                                <button
                                    onClick={() => router.push("/signin")}
                                    className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100"
                                >
                                    Sign In
                                </button>
                            ) : (
                                <div className="relative group">
                                    {/* <button className="flex items-center gap-2 bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">
                                        <img
                                            src="/account-icon.png"
                                            alt="Account Icon"
                                            className="w-6 h-6 rounded-full"
                                        />
                                        Account
                                    </button>
                                    <div className="absolute right-0 hidden group-hover:block bg-white text-black rounded shadow-lg mt-2">
                                        <button
                                            onClick={() => router.push("/profile")}
                                            className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                                        >
                                            Profile
                                        </button> */}
                                        <button
                                            onClick={handleLogout}
                                            className="block px-2 w-full hover:text-gray-300 text-left"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                // </div>
                            )}
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}