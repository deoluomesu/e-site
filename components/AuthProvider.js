"use client";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check if a token exists in localStorage
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
    }, []);

    const logout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
