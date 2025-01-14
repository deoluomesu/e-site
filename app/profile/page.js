"use client";

import { useContext, useEffect } from "react";
import { AuthContext } from "../components/AuthProvider";
import { useRouter } from "next/navigation";

export default function Profile() {
    const { isAuthenticated } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/signin");
        }
    }, [isAuthenticated, router]);

    return (
        <div>
            <h1 className="text-2xl font-bold">Your Profile</h1>
            <p>Welcome to your profile!</p>
        </div>
    );
}
