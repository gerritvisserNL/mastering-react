"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useFavorites from "../hooks/useFavorites";

export default function Header() {
  const pathname = usePathname();

  const { favorites } = useFavorites();

  return (
    <header>
      <h1>The Movie Gallery</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link href="/" className={pathname === "/" ? "active-link" : ""}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <div className="favorites-wrapper">
              <Link
                href="/favorites"
                className={pathname === "/favorites" ? "active-link" : ""}
              >
                Favorites{" "}
                <span className="favorites-counter">{favorites.length}</span>
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link
              href="/about"
              className={pathname === "/about" ? "active-link" : ""}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
