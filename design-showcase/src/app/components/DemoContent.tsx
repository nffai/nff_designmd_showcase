interface DemoTexts {
  brand: string;
  nav: string[];
  cta: string;
  heroTitle: string;
  heroSub: string;
  heroCta: string;
  heroLink: string;
  cards: { emoji: string; title: string; body: string }[];
  formTitle: string;
  formLabels: { name: string; email: string; message: string };
  formPlaceholders: { name: string; email: string; message: string };
  formSubmit: string;
  footerCopy: string;
  footerLinks: string[];
}

const ja: DemoTexts = {
  brand: "タスクフロー",
  nav: ["機能", "料金", "導入事例", "お問い合わせ"],
  cta: "無料で始める",
  heroTitle: "チームの生産性を\nもっとシンプルに。",
  heroSub:
    "タスクフローは、プロジェクト管理をシンプルにするSaaSツールです。直感的なUIで、チーム全員がすぐに使いこなせます。",
  heroCta: "無料トライアルを始める",
  heroLink: "詳しく見る →",
  cards: [
    {
      emoji: "📋",
      title: "直感的なタスク管理",
      body: "ドラッグ＆ドロップで簡単にタスクを整理。優先度や期限を一目で把握できるカンバンビューを提供します。",
    },
    {
      emoji: "👥",
      title: "リアルタイム共同編集",
      body: "チームメンバーと同時にドキュメントを編集。変更はリアルタイムで反映され、コミュニケーションコストを削減します。",
    },
    {
      emoji: "📊",
      title: "高度な分析ダッシュボード",
      body: "プロジェクトの進捗状況をグラフで可視化。ボトルネックの発見と改善ポイントの特定を支援します。",
    },
  ],
  formTitle: "お問い合わせ",
  formLabels: { name: "お名前", email: "メールアドレス", message: "お問い合わせ内容" },
  formPlaceholders: {
    name: "山田 太郎",
    email: "taro@example.com",
    message: "お気軽にお問い合わせください",
  },
  formSubmit: "送信する",
  footerCopy: "© 2026 タスクフロー Inc. All rights reserved.",
  footerLinks: ["プライバシーポリシー", "利用規約", "会社概要"],
};

const en: DemoTexts = {
  brand: "TaskFlow",
  nav: ["Features", "Pricing", "Customers", "Contact"],
  cta: "Get Started",
  heroTitle: "Ship faster.\nBuild better.",
  heroSub:
    "TaskFlow is the modern project management tool that helps your team move faster. Intuitive interface, powerful features, zero friction.",
  heroCta: "Start Free Trial",
  heroLink: "Learn more →",
  cards: [
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
  ],
  formTitle: "Get in Touch",
  formLabels: { name: "Name", email: "Email", message: "Message" },
  formPlaceholders: {
    name: "John Doe",
    email: "john@example.com",
    message: "How can we help?",
  },
  formSubmit: "Send Message",
  footerCopy: "© 2026 TaskFlow Inc. All rights reserved.",
  footerLinks: ["Privacy Policy", "Terms of Service", "About Us"],
};

const textMap = { ja, en } as const;

export function DemoContent({ locale = "ja" }: { locale?: "ja" | "en" }) {
  const t = textMap[locale];

  return (
    <div style={{ background: "var(--ds-bg)" }}>
      {/* Navigation */}
      <nav className="ds-nav px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="font-bold text-base tracking-tight">{t.brand}</span>
          <div className="hidden sm:flex items-center gap-4 text-xs opacity-80">
            {t.nav.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <button
          className="ds-btn-primary"
          style={{ fontSize: "13px", padding: "6px 16px" }}
        >
          {t.cta}
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
            fontWeight: "var(--ds-heading-weight)",
            lineHeight: "var(--ds-heading-lh)",
            letterSpacing: "var(--ds-heading-ls)",
          } as React.CSSProperties}
        >
          {t.heroTitle.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h1>
        <p
          className="mt-4 max-w-lg mx-auto"
          style={{ color: "var(--ds-text-secondary)" }}
        >
          {t.heroSub}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="ds-btn-primary">{t.heroCta}</button>
          <a
            href="#"
            className="ds-link text-sm inline-flex items-center gap-1"
          >
            {t.heroLink}
          </a>
        </div>
      </section>

      {/* 3-Column Feature Cards */}
      <section className="px-6 sm:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {t.cards.map((card) => (
            <div key={card.title} className="ds-card p-6">
              <div className="text-2xl mb-3">{card.emoji}</div>
              <h3
                className="mb-2"
                style={{
                  fontSize: "calc(var(--ds-heading-size) * 0.5)",
                  fontWeight: "var(--ds-heading-weight)",
                  lineHeight: "var(--ds-heading-lh)",
                } as React.CSSProperties}
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
            fontWeight: "var(--ds-heading-weight)",
            lineHeight: "var(--ds-heading-lh)",
          } as React.CSSProperties}
        >
          {t.formTitle}
        </h2>
        <div className="max-w-md mx-auto space-y-4">
          <div>
            <label
              className="block text-sm mb-1"
              style={{ color: "var(--ds-text-secondary)" }}
            >
              {t.formLabels.name}
            </label>
            <input
              type="text"
              className="ds-input"
              placeholder={t.formPlaceholders.name}
            />
          </div>
          <div>
            <label
              className="block text-sm mb-1"
              style={{ color: "var(--ds-text-secondary)" }}
            >
              {t.formLabels.email}
            </label>
            <input
              type="email"
              className="ds-input"
              placeholder={t.formPlaceholders.email}
            />
          </div>
          <div>
            <label
              className="block text-sm mb-1"
              style={{ color: "var(--ds-text-secondary)" }}
            >
              {t.formLabels.message}
            </label>
            <textarea
              className="ds-textarea"
              placeholder={t.formPlaceholders.message}
            />
          </div>
          <button className="ds-btn-primary w-full text-center">
            {t.formSubmit}
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
        <p>{t.footerCopy}</p>
        <div className="mt-2 flex justify-center gap-4">
          {t.footerLinks.map((link) => (
            <span key={link} className="ds-link cursor-pointer">
              {link}
            </span>
          ))}
        </div>
      </footer>
    </div>
  );
}
