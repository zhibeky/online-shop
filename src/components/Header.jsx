function Header() {
  return (
    <nav className="#7986cb indigo lighten-2">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/zhibeky/online-shop"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
