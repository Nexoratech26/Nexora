"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    // Get the account saved during signup
    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      setError("No account found. Please sign up first.");
      return;
    }

    const user = JSON.parse(savedUser);
      console.log(user)
    // Check email and password
    const correctData = user.some(user=>user.email === email && user.password === password)
    if (!correctData) {
      setError("Incorrect email or password");
      return;
    }

    // Login successful
    document.cookie = "loggedIn=true; path=/";

    router.push("/");
  }

  return (
    <main className="min-h-screen overflow-y-hidden flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md p-8 border rounded-xl"
      >
        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>

        {error && (
          <p className="text-red-500 mb-4">
            {error}
          </p>
        )}

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

        <button
          type="submit"
          className="w-full bg-[#7763F9] text-white p-3 rounded"
        >
          Login
        </button>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => router.push("/signup")}
            className="text-[#7763F9]"
          >
            Sign Up
          </button>
        </p>
      </form>
    </main>
  );
}