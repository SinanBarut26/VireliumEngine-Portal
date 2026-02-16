export function LandingPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-layout">
          <div>
            <p className="eyebrow">VireliumEngine Content Factory</p>
            <h1>Build, validate, and deliver weekly content at production speed.</h1>
            <p className="hero-text">
              VireliumEngine Portal converts structured weekly plans into platform-ready outputs
              with deterministic job orchestration, quality gates, and idempotent delivery.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href="/terms">
                Read Terms
              </a>
              <a className="btn btn-ghost" href="/privacy">
                Read Privacy
              </a>
            </div>
          </div>
          <aside className="hero-panel" aria-label="Platform summary">
            <h2>Pipeline Snapshot</h2>
            <ul>
              <li>
                <span>6 stages</span> from ingest to delivery
              </li>
              <li>
                <span>3 QC outcomes</span> pass, warn, fail
              </li>
              <li>
                <span>Idempotent</span> duplicate-safe delivery keying
              </li>
              <li>
                <span>Traceable</span> media plus metadata chain
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="kpi-row" aria-label="Performance indicators">
        <article className="kpi-card">
          <p>Planning Input</p>
          <h2>JSON-first</h2>
          <span>Expandable to YAML and free text</span>
        </article>
        <article className="kpi-card">
          <p>Job Chain</p>
          <h2>4 core jobs</h2>
          <span>Generate, Overlay, QC, Deliver</span>
        </article>
        <article className="kpi-card">
          <p>Delivery Format</p>
          <h2>2-part thread</h2>
          <span>Media post + metadata reply</span>
        </article>
        <article className="kpi-card">
          <p>Reliability Model</p>
          <h2>At-least-once</h2>
          <span>Safe retries with dead-letter strategy</span>
        </article>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">How It Works</p>
          <h2>A deterministic content pipeline for weekly operations</h2>
        </div>
        <div className="steps">
          <article className="card">
            <p className="step-index">01</p>
            <h3>Ingest Plan</h3>
            <p>Import weekly plan payloads and validate post-level requirements.</p>
          </article>
          <article className="card">
            <p className="step-index">02</p>
            <h3>Normalize</h3>
            <p>Convert each post into platform-specific specifications and executable jobs.</p>
          </article>
          <article className="card">
            <p className="step-index">03</p>
            <h3>Generate Media</h3>
            <p>
              Produce visual assets through deterministic local generation or AI provider
              pathways.
            </p>
          </article>
          <article className="card">
            <p className="step-index">04</p>
            <h3>Apply Overlay</h3>
            <p>
              Render anchor and ghost text with timing and safe-area-aware placement rules.
            </p>
          </article>
          <article className="card">
            <p className="step-index">05</p>
            <h3>Run QC</h3>
            <p>
              Enforce aspect ratio, duration, readability, and format checks with
              pass/warn/fail outcomes.
            </p>
          </article>
          <article className="card">
            <p className="step-index">06</p>
            <h3>Deliver</h3>
            <p>Send media and metadata in a linked delivery thread without duplicate sends.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">Capabilities</p>
          <h2>Core modules built for repeatable execution</h2>
        </div>
        <div className="feature-grid">
          <article className="card">
            <h3>Plan Parsing</h3>
            <p>Structured import with guardrails against malformed payloads.</p>
          </article>
          <article className="card">
            <h3>Job Orchestration</h3>
            <p>Post-level dependency flow with retry and claim-processing logic.</p>
          </article>
          <article className="card">
            <h3>Artifact Registry</h3>
            <p>Track generated media and overlay outputs with metadata integrity.</p>
          </article>
          <article className="card">
            <h3>Overlay Composer</h3>
            <p>Anchor and ghost rendering tuned for readability and placement.</p>
          </article>
          <article className="card">
            <h3>Quality Policies</h3>
            <p>Codified checks for codec, FPS, dimensions, and content safety.</p>
          </article>
          <article className="card">
            <h3>Delivery Gateways</h3>
            <p>Idempotent dispatch adapters with receipt and attempt tracking.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">Platform Coverage</p>
          <h2>Specification-aware outputs by channel</h2>
        </div>
        <div className="platform-grid">
          <article className="platform-card">
            <h3>TikTok</h3>
            <p>Fast hook density, short beat pacing, and aggressive retention focus.</p>
          </article>
          <article className="platform-card">
            <h3>Instagram</h3>
            <p>Visual clarity, overlay balance, and feed-consistent brand delivery.</p>
          </article>
          <article className="platform-card">
            <h3>YouTube Shorts</h3>
            <p>Segment legibility, runtime control, and message continuity.</p>
          </article>
        </div>
      </section>

      <section className="section two-col">
        <article className="card">
          <h2>Operational Principles</h2>
          <ul className="principles">
            <li>Domain-first architecture for predictable behavior boundaries.</li>
            <li>Idempotency as a default for all external communication points.</li>
            <li>Observability through plan, post, and job correlation tracking.</li>
            <li>Policy-driven QC to reduce subjective release decisions.</li>
          </ul>
        </article>
        <article className="card">
          <h2>Use Cases</h2>
          <ul className="principles">
            <li>Creator teams running weekly batch pipelines.</li>
            <li>Agency operations with multi-platform output requirements.</li>
            <li>Growth teams needing reproducible production and handoff flows.</li>
            <li>Internal media teams standardizing quality across channels.</li>
          </ul>
        </article>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">FAQ</p>
          <h2>Common questions</h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>Does VireliumEngine publish directly to social platforms?</summary>
            <p>
              The current scope focuses on deterministic production and delivery. Direct
              scheduler-style publishing is intentionally out of scope.
            </p>
          </details>
          <details>
            <summary>How does it prevent duplicate deliveries?</summary>
            <p>
              Each delivery attempt is protected by deterministic idempotency keys derived
              from plan, post, and final artifact identity.
            </p>
          </details>
          <details>
            <summary>Can the workflow tolerate failed jobs?</summary>
            <p>
              Yes. Workers use retry with backoff and move terminal failures to dead-letter
              handling when attempts are exhausted.
            </p>
          </details>
        </div>
      </section>

      <section className="cta-block">
        <p className="eyebrow">Start With Confidence</p>
        <h2>Use VireliumEngine Portal as your production operating layer.</h2>
        <p>
          Ship consistent, traceable, and policy-validated content pipelines from one
          operational center.
        </p>
        <div className="actions">
          <a className="btn btn-primary" href="/terms">
            View Terms of Service
          </a>
          <a className="btn btn-ghost" href="/privacy">
            View Privacy Policy
          </a>
        </div>
      </section>
    </main>
  );
}
