import { Icon } from "@iconify/react/dist/iconify.js";

type FormButtonProps = {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
};

export default function FormButton({
  label,
  onClick,
  type = "button",
  loading,
}: FormButtonProps) {
  return (
    <button
      type={type}
      className={`${loading ? "bg-subtext" : "bg-primary hover:opacity-50"} relative flex w-full cursor-pointer justify-center rounded-xl py-3 font-semibold text-white duration-300`}
      onClick={onClick}
      disabled={loading}
    >
      <span className={loading ? "invisible" : "visible"}>{label}</span>

      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Icon icon="line-md:loading-loop" className="size-5" />
        </span>
      )}
    </button>
  );
}
