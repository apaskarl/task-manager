import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function InputField({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password" | "email";
  error?: boolean;
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordType = type === "password";
  const inputType = isPasswordType && showPassword ? "text" : type;

  return (
    <div className="relative">
      <div className="relative">
        <label
          htmlFor={id}
          className="text-subtext absolute top-[-8px] left-2 bg-white px-2 text-xs"
        >
          {label} <span className="text-red">*</span>
        </label>

        {isPasswordType && (
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="text-subtext absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer p-4 duration-300 hover:opacity-50"
          >
            <Icon
              icon={showPassword ? "lucide-eye-off" : "lucide-eye"}
              className="size-5"
            />
          </span>
        )}

        <input
          id={id}
          type={inputType}
          className={`${error ? "border-red" : "border-border"} w-full rounded-xl border px-4 py-3`}
          value={value}
          onChange={onChange}
        />
      </div>

      {error && <p className="text-red mt-1 text-xs">This field is required</p>}
    </div>
  );
}
