"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header>
      <button onClick={() => router.back()}>&lt;</button>
      <p>HEADER</p>
      <button onClick={() => router.forward()}>&gt;</button>
    </header>
  );
}
