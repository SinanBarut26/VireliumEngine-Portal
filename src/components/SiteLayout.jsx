import React from "react";

function current(path, routePaths) {
  return routePaths.includes(path);
}

export function SiteLayout({ currentPath, children }) {
  return (
    <>
      <header className="site-header">
        <a className="logo" href="/">
          Virelium<span>Engine</span>
        </a>
        <nav>
          <a href="/" aria-current={current(currentPath, ["/", "/index.html"]) ? "page" : undefined}>
            Landing
          </a>
          <a
            href="/terms"
            aria-current={current(currentPath, ["/terms", "/terms.html"]) ? "page" : undefined}
          >
            Terms
          </a>
          <a
            href="/privacy"
            aria-current={current(currentPath, ["/privacy", "/privacy.html"]) ? "page" : undefined}
          >
            Privacy
          </a>
        </nav>
      </header>

      {children}

      <footer className="site-footer">
        <p>© 2026 VireliumEngine Portal</p>
        <div>
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
        </div>
      </footer>
    </>
  );
}
