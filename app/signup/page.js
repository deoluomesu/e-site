"use client";
import { useState } from "react";
import Link from "next/link";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/users/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                alert("Signup Successful!");
                localStorage.setItem("token", data.token); // Save token locally
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error("Error registering:", error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
            <form
                className="bg-white p-8 rounded shadow-md w-80"
                onSubmit={handleSignUp}
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                <input
                    type="email"
                    placeholder="Email"
                    className="block w-full p-2 mb-4 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Name"
                    className="block w-full p-2 mb-4 border rounded"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="block w-full p-2 mb-6 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Sign Up
                </button>
                <div className="mx-auto flex flex-col p-2 py-3 items-center">
                    <p>Or</p>
                    <Link href="/signin" className="underline text-blue-600">have account already? Sign in here</Link>
                </div>
            </form>
        </div>
    );
}
