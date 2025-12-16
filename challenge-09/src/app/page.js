import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Use Client Example</h1>
      <Link href={"/counter"}>to Counter</Link>
    </main>
  );
}
