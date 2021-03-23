import React from "react";

const Header = () => {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          Fortnite Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/0xLDev/FortniteShop"
              target="_blank"
              rel="noreferrer"
            >
              Репозиторий
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Header };
