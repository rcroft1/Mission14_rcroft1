export default function Navbar() {
  return (
    // this makes the navbar
    <nav className="nav">
      <a href="/" className="site-title">
        Home
      </a>
      <ul>
        <li>
          <a href="/Movies">Movie Collection</a>
        </li>
        <li>
          <a href="podcast">Bacon Sale</a>
        </li>
      </ul>
    </nav>
  );
}
