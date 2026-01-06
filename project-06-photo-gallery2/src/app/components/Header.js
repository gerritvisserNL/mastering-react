import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1 className="header__heading">NASA</h1>
      <h2 className="header__heading-sub">Astronomy Picture of the Day</h2>
      <nav className="nav">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/favorites">Favorites</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
