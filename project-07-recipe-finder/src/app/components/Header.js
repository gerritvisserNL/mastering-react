"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <h1>Recipe finder</h1>
      <nav>
        <ul>
          <li>
            <Link href="/" className={pathname === "/" ? "active-link" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/favorites"
              className={pathname === "/favorites" ? "active-link" : ""}
            >
              Favorites
            </Link>
          </li>
          <li>
            <Link
              href="/custom"
              className={pathname === "/custom" ? "active-link" : ""}
            >
              Custom
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
