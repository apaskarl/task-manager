import { Button, TextInput } from "@mantine/core";
import { Metadata } from "next";
import { Icon } from "@iconify/react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Log In",
};

export default function LogIn() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <h1>LOG IN</h1>
    </div>
  );
}
