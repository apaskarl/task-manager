"use client";

import FormButton from "@/components/buttons/FormButton";
import InputField from "@/components/inputs/InputField";
import Logo from "@/components/Logo";
import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogIn = () => {};

  return (
    <div className="relative flex">
      <div className="w-full p-5 md:w-1/2 md:p-8">
        <Logo />

        <div className="mt-10 space-y-10 self-center md:mt-14 md:px-20">
          <div>
            <h1 className="mb-2 text-lg font-bold">Log in to your account</h1>
            <p className="text-subtext text-sm">
              Please enter your details to continue.
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {error && (
              <p className="text-red bg-red/5 rounded-xl p-3 text-xs">
                {error}
              </p>
            )}

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

            <FormButton
              type="submit"
              label="Register"
              onClick={handleLogIn}
              loading={loading}
            />

            <div className="flex items-center gap-x-5">
              <div className="bg-border h-[1px] flex-1" />
              <p className="text-subtext text-sm">or</p>
              <div className="bg-border h-[1px] flex-1" />
            </div>

            <button className="border-border flex w-full cursor-pointer items-center justify-center gap-x-3 rounded-xl border py-3 font-semibold duration-300 hover:opacity-50">
              <Icon icon="logos:google-icon" /> Sign in with Google
            </button>
          </form>

          <p className="text-subtext text-center text-sm">
            No account?{" "}
            <Link
              href="/auth/register"
              className="text-primary font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>

      <div className="fixed right-0 hidden h-screen p-2 md:block md:w-1/2">
        <div className="bg-primary relative h-full w-full overflow-hidden rounded-3xl">
          <Image
            src="/assets/images/wallpaper.jpg"
            alt="Wallpaper"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>
      </div>
    </div>
  );
}
