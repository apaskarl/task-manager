import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="flex font-bold">Hello, World!</h1>
      <Link href="/auth/register">register</Link>
    </div>
  );
}
