import React from "react";

export function TermsPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <p className="eyebrow">Legal</p>
        <h1>Terms of Service</h1>
        <p>Effective date: February 16, 2026</p>
      </section>

      <section className="legal-content">
        <h2>1. Service Scope</h2>
        <p>
          VireliumEngine Portal provides a content factory workflow that ingests weekly
          plans, generates media, applies overlays, runs quality checks, and delivers
          outputs with metadata.
        </p>

        <h2>2. User Obligations</h2>
        <p>
          Users are responsible for ensuring that content entered into the system complies
          with applicable law, is accurate, and does not violate third-party rights.
        </p>

        <h2>3. Account Security</h2>
        <p>
          Users are responsible for maintaining the confidentiality of account credentials.
          Any unauthorized access must be reported to support without delay.
        </p>

        <h2>4. Intellectual Property</h2>
        <p>
          The platform software, interface, and brand assets belong to VireliumEngine.
          Unauthorized copying, reverse engineering, or redistribution is prohibited.
        </p>

        <h2>5. Service Changes</h2>
        <p>
          VireliumEngine may update features with prior notice for service improvement,
          reliability, or security reasons.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          The service is provided on an "as is" basis to the fullest extent permitted by
          law. Liability for indirect damages is excluded.
        </p>

        <h2>7. Contact</h2>
        <p>For legal matters: legal@virelium.example</p>
      </section>
    </main>
  );
}
