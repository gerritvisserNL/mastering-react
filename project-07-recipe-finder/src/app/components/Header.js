import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>Recipe finder</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/favorites">Favorites</Link>
          </li>
          <li>
            <Link href="/custom">Custom</Link>
          </li>
        </ul>
      </nav>
      <input></input>
    </header>
  );
}
