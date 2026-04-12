import type { DesignToken } from "../data/globalDesignTokens";

export function GlobalDemoContent({ ds }: { ds: DesignToken }) {
  return (
    <div style={{ background: "var(--ds-bg)" }}>
      {/* Navigation */}
      <nav className="ds-nav px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="font-bold text-base tracking-tight">TaskFlow</span>
          <div className="hidden sm:flex items-center gap-4 text-xs opacity-80">
            <span>Features</span>
            <span>Pricing</span>
            <span>Customers</span>
            <span>Contact</span>
          </div>
        </div>
        <button
          className="ds-btn-primary"
          style={{ fontSize: "13px", padding: "6px 16px" }}
        >
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section
        className="px-6 sm:px-12 py-16 sm:py-24 text-center"
        style={{ background: "var(--ds-bg-secondary)" }}
      >
        <h1
          style={{
            fontSize: "var(--ds-heading-size)",
            fontWeight: "var(--ds-heading-weight)" as unknown as number,
            lineHeight: "var(--ds-heading-lh)",
            letterSpacing: "var(--ds-heading-ls)",
          }}
        >
          Ship faster.
          <br />
          Build better.
        </h1>
        <p
          className="mt-4 max-w-lg mx-auto"
          style={{ color: "var(--ds-text-secondary)" }}
        >
          TaskFlow is the modern project management tool that helps your team
          move faster. Intuitive interface, powerful features, zero friction.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="ds-btn-primary">Start Free Trial</button>
          <a
            href="#"
            className="ds-link text-sm inline-flex items-center gap-1"
          >
            Learn more →
          </a>
        </div>
      </section>

      {/* 3-Column Feature Cards */}
      <section className="px-6 sm:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              emoji: "⚡",
              title: "Lightning Fast Tasks",
              body: "Drag-and-drop task management with real-time sync. See priorities, deadlines, and progress at a glance with customizable kanban boards.",
            },
            {
              emoji: "🤝",
              title: "Real-time Collaboration",
              body: "Edit documents together in real-time. Changes sync instantly across your team, reducing communication overhead and keeping everyone aligned.",
            },
            {
              emoji: "📈",
              title: "Advanced Analytics",
              body: "Visualize project health with interactive dashboards. Spot bottlenecks early and make data-driven decisions to keep your team on track.",
            },
          ].map((card) => (
            <div key={card.title} className="ds-card p-6">
              <div className="text-2xl mb-3">{card.emoji}</div>
              <h3
                className="mb-2"
                style={{
                  fontSize: "calc(var(--ds-heading-size) * 0.5)",
                  fontWeight: "var(--ds-heading-weight)" as unknown as number,
                  lineHeight: "var(--ds-heading-lh)",
                }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--ds-text-secondary)" }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section
        className="px-6 sm:px-12 py-12 sm:py-16"
        style={{ background: "var(--ds-bg-secondary)" }}
      >
        <h2
          className="text-center mb-8"
          style={{
            fontSize: "calc(var(--ds-heading-size) * 0.7)",
            fontWeight: "var(--ds-heading-weight)" as unknown as number,
            lineHeight: "var(--ds-heading-lh)",
          }}
        >
          Get in Touch
        </h2>
        <div className="max-w-md mx-auto space-y-4">
          <div>
            <label
              className="block text-sm mb-1"
              style={{ color: "var(--ds-text-secondary)" }}
            >
              Name
            </label>
            <input type="text" className="ds-input" placeholder="John Doe" />
          </div>
          <div>
            <label
              className="block text-sm mb-1"
              style={{ color: "var(--ds-text-secondary)" }}
            >
              Email
            </label>
            <input
              type="email"
              className="ds-input"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label
              className="block text-sm mb-1"
              style={{ color: "var(--ds-text-secondary)" }}
            >
              Message
            </label>
            <textarea
              className="ds-textarea"
              placeholder="How can we help?"
            />
          </div>
          <button className="ds-btn-primary w-full text-center">
            Send Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-6 sm:px-12 py-6 text-center text-xs"
        style={{
          borderTop: `1px solid var(--ds-border)`,
          color: "var(--ds-text-secondary)",
        }}
      >
        <p>&copy; 2026 TaskFlow Inc. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <span className="ds-link cursor-pointer">Privacy Policy</span>
          <span className="ds-link cursor-pointer">Terms of Service</span>
          <span className="ds-link cursor-pointer">About Us</span>
        </div>
      </footer>
    </div>
  );
}
