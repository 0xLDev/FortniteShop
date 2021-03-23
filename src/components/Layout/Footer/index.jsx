import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer green lighten-4">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/0xLDev/FortniteShop"
            rel="noreferrer"
            target="_blank"
          >
            Репозиторий
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
