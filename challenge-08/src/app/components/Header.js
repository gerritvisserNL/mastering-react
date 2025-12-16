"use client";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header>
      <button className="backBtn" onClick={() => router.back()}>
        &lt;
      </button>
      <p>HEADER</p>
      <button className="forwardBtn" onClick={() => router.forward()}>
        &gt;
      </button>
    </header>
  );
}
