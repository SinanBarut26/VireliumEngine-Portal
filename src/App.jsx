import { useEffect, useMemo } from "react";
import { SiteLayout } from "./components/SiteLayout";
import { LandingPage } from "./pages/LandingPage";
import { TermsPage } from "./pages/TermsPage";
import { PrivacyPage } from "./pages/PrivacyPage";

const routeTable = {
  "/": { component: LandingPage, title: "VireliumEngine Portal | Content Factory" },
  "/index.html": { component: LandingPage, title: "VireliumEngine Portal | Content Factory" },
  "/terms": { component: TermsPage, title: "Terms of Service | VireliumEngine Portal" },
  "/terms.html": { component: TermsPage, title: "Terms of Service | VireliumEngine Portal" },
  "/privacy": { component: PrivacyPage, title: "Privacy Policy | VireliumEngine Portal" },
  "/privacy.html": { component: PrivacyPage, title: "Privacy Policy | VireliumEngine Portal" }
};

function normalizePath(pathname) {
  if (!pathname || pathname === "") {
    return "/";
  }

  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

function resolveRoute(pathname) {
  const normalized = normalizePath(pathname);
  return routeTable[normalized] ?? null;
}

export function App() {
  const path = useMemo(() => normalizePath(window.location.pathname), []);
  const route = useMemo(() => resolveRoute(path), [path]);
  const pageTitle = route
    ? route.title
    : "Page Not Found | VireliumEngine Portal";

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  if (!route) {
    return (
      <SiteLayout currentPath={path}>
        <main className="not-found">
          <p className="eyebrow">404</p>
          <h1>Page not found.</h1>
          <p className="hero-text">This route does not exist in VireliumEngine Portal.</p>
          <div className="actions">
            <a className="btn btn-primary" href="/">
              Back to Landing
            </a>
            <a className="btn btn-ghost" href="/terms">
              Terms of Service
            </a>
          </div>
        </main>
      </SiteLayout>
    );
  }

  const Page = route.component;

  return (
    <SiteLayout currentPath={path}>
      <Page />
    </SiteLayout>
  );
}
