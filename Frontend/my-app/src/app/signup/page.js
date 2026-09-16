"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    function handleSignup(e) {
        e.preventDefault();

        setError("");

        if (!name || !email || !password || !confirmPassword) {
            setError("Please fill all fields");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        const existingUser = localStorage.getItem("user");
        const Euser =  existingUser? JSON.parse(existingUser) :[]
        const userExists = Euser.some(user=>user.email === email);


        if (userExists) {
      
                setError("An account already exists. Please login.");
        
        }

        const user = {
            name,
            email,
            password,
        };

        Euser.push(user)

        localStorage.setItem("user", JSON.stringify(Euser));

        // document.cookie = "loggedIn=true; path=/";

        router.push("/login");
    }

    return (
        <main className="min-h-screen flex items-center justify-center">
            <form
                onSubmit={handleSignup}
                className="w-full max-w-md p-8 border rounded-xl"
            >
                <h1 className="text-3xl font-bold mb-6">
                    Sign Up
                </h1>

                {error && (
                    <p className="text-red-500 mb-4">
                        {error}
                    </p>
                )}

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border p-3 rounded mb-4"
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border p-3 rounded mb-4"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border p-3 rounded mb-4"
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full border p-3 rounded mb-4"
                />

                <button
                    type="submit"
                    className="w-full bg-[#7763F9] text-white p-3 rounded"
                >
                    Sign Up
                </button>

                <p className="mt-4 text-center">
                    Already have an account?{" "}
                    <button
                        type="button"
                        onClick={() => router.push("/login")}
                        className="text-[#7763F9]"
                    >
                        Login
                    </button>
                </p>
            </form>
        </main>
    );
}