export default function Header() {
  return (
    <header>
      <h1>The Movie Gallery</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">Favorite</li>
          <li className="nav-item">About</li>
        </ul>
      </nav>
    </header>
  );
}
