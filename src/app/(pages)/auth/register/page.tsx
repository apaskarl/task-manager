"use client";

import FormButton from "@/components/buttons/FormButton";
import InputField from "@/components/inputs/InputField";
import Logo from "@/components/Logo";
import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !username || !email || !password || !confirmPassword) {
      setError(
        "Please complete all required fields before submitting the form.",
      );
      return;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password and Confirm Password do not match");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post("/api/auth/register", {
        name,
        username,
        email,
        password,
      });

      console.log(response.data);
      alert("Registration successful!");
      router.push("/auth/login");
    } catch (error: any) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid min-h-screen md:grid-cols-2">
      <div className="p-10">
        <Logo />

        <div className="mt-14 space-y-10 self-center md:px-20">
          <div>
            <h1 className="mb-2 text-lg font-bold">Register an account</h1>
            <p className="text-subtext text-sm">
              Sign up to manage your tasks and stay organized
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {error && (
              <p className="text-red bg-red/5 rounded-xl p-3 text-xs">
                {error}
              </p>
            )}

            <InputField
              id="name"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={!name && !!error}
            />
            <InputField
              id="username"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={!username && !!error}
            />
            <InputField
              id="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!email && !!error}
            />
            <InputField
              id="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!password && !!error}
              type="password"
            />
            <InputField
              id="confirmPassword"
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={!confirmPassword && !!error}
              type="password"
            />
            <FormButton
              type="submit"
              label="Register"
              onClick={handleRegister}
              loading={loading}
            />

            <div className="flex items-center gap-x-5">
              <div className="bg-border h-[1px] flex-1" />
              <p className="text-subtext text-sm">or</p>
              <div className="bg-border h-[1px] flex-1" />
            </div>

            <button className="border-border flex w-full cursor-pointer items-center justify-center gap-x-3 rounded-xl border py-3 font-semibold duration-300 hover:opacity-50">
              <Icon icon="logos:google-icon" /> Sign up with Google
            </button>
          </form>

          <p className="text-subtext text-center text-sm">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-primary font-semibold">
              Log in
            </Link>
          </p>
        </div>
      </div>

      <div className="bg-primary hidden">
        <img src="/assets/images/wallpaper.jpg" className="h-full opacity-90" />
      </div>
    </div>
  );
}
