"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useFavorites from "../hooks/useFavorites";

export default function Header() {
  const pathname = usePathname();

  const { favorites } = useFavorites();

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
            <div className="favorites-wrapper">
              <Link
                href="/favorites"
                className={pathname === "/favorites" ? "active-link" : ""}
              >
                Favorites
                <span className="favorites-counter">{favorites.length}</span>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
