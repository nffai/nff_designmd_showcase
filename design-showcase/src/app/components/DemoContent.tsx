import type { DesignSystem } from "../data/designTokens";

export function DemoContent({ ds }: { ds: DesignSystem }) {
  return (
    <div style={{ background: "var(--ds-bg)" }}>
      {/* Navigation */}
      <nav className="ds-nav px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="font-bold text-base tracking-tight">
            タスクフロー
          </span>
          <div className="hidden sm:flex items-center gap-4 text-xs opacity-80">
            <span>機能</span>
            <span>料金</span>
            <span>導入事例</span>
            <span>お問い合わせ</span>
          </div>
        </div>
        <button className="ds-btn-primary" style={{ fontSize: "13px", padding: "6px 16px" }}>
          無料で始める
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
          チームの生産性を
          <br />
          もっとシンプルに。
        </h1>
        <p
          className="mt-4 max-w-lg mx-auto"
          style={{ color: "var(--ds-text-secondary)" }}
        >
          タスクフローは、プロジェクト管理をシンプルにするSaaSツールです。直感的なUIで、チーム全員がすぐに使いこなせます。
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="ds-btn-primary">
            無料トライアルを始める
          </button>
          <a
            href="#"
            className="ds-link text-sm inline-flex items-center gap-1"
          >
            詳しく見る →
          </a>
        </div>
      </section>

      {/* 3-Column Feature Cards */}
      <section className="px-6 sm:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {[
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
          お問い合わせ
        </h2>
        <div className="max-w-md mx-auto space-y-4">
          <div>
            <label className="block text-sm mb-1" style={{ color: "var(--ds-text-secondary)" }}>
              お名前
            </label>
            <input
              type="text"
              className="ds-input"
              placeholder="山田 太郎"
            />
          </div>
          <div>
            <label className="block text-sm mb-1" style={{ color: "var(--ds-text-secondary)" }}>
              メールアドレス
            </label>
            <input
              type="email"
              className="ds-input"
              placeholder="taro@example.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-1" style={{ color: "var(--ds-text-secondary)" }}>
              お問い合わせ内容
            </label>
            <textarea
              className="ds-textarea"
              placeholder="お気軽にお問い合わせください"
            />
          </div>
          <button className="ds-btn-primary w-full text-center">
            送信する
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
        <p>&copy; 2026 タスクフロー Inc. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <span className="ds-link cursor-pointer">プライバシーポリシー</span>
          <span className="ds-link cursor-pointer">利用規約</span>
          <span className="ds-link cursor-pointer">会社概要</span>
        </div>
      </footer>
    </div>
  );
}
