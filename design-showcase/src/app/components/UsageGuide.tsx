export function UsageGuide() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-6 sm:px-10 py-10 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          DESIGN.md を使って Web アプリを作る方法
        </h2>
        <p className="text-sm text-gray-500 mb-10 leading-relaxed">
          DESIGN.md はWebサイトのデザイン仕様をMarkdownで記述したファイルです。
          AIコーディングエージェント（Claude Code, Cursor等）のコンテキストとして渡すことで、
          フォント・色・余白が仕様通りに生成されます。
        </p>

        {/* Step 1 */}
        <Step number={1} title="DESIGN.md を入手する">
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            awesome-design-md-jp リポジトリをクローンするか、テンプレートをコピーして自社サービス用に作成します。
          </p>
          <CodeBlock>{`git clone https://github.com/kzhrknt/awesome-design-md-jp.git

# または、テンプレートをコピーして編集
cp awesome-design-md-jp/template/DESIGN.md ./my-project/DESIGN.md`}</CodeBlock>
        </Step>

        {/* Step 2 */}
        <Step number={2} title="プロジェクトに DESIGN.md を配置する">
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            プロジェクトルートに DESIGN.md と AGENTS.md を並べて配置します。
            Claude Code や Cursor はルートのMarkdownファイルを自動的にコンテキストとして認識します。
          </p>
          <CodeBlock>{`my-project/
├── AGENTS.md        ← ビルド手順
├── DESIGN.md        ← デザイン仕様（★これ）
├── src/
│   ├── app/
│   └── styles/
└── package.json`}</CodeBlock>
        </Step>

        {/* Step 3 */}
        <Step number={3} title="Claude Code に読み込ませる">
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            Claude Code のプロンプトで DESIGN.md を参照するように指示します。
            DESIGN.md がコンテキストとして渡されることで、フォント・色・余白が仕様通りに生成されます。
          </p>
          <CodeBlock language="prompt">{`DESIGN.md を読んで、そのデザインシステムに従って
トップページを作ってください。

- ヒーローセクション（大見出し + CTA）
- 3カラムの特徴カード
- お問い合わせフォーム
- フッター

フォント・色・余白・ボタンスタイルは全て
DESIGN.md の指定に従ってください。`}</CodeBlock>
        </Step>

        {/* Step 4 */}
        <Step number={4} title="CSS カスタムプロパティに変換する">
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            DESIGN.md のトークン値を CSS 変数に変換し、globals.css にまとめます。
          </p>
          <CodeBlock language="css">{`/* globals.css */
:root {
  /* Typography */
  --font-family: "Noto Sans JP", sans-serif;
  --body-size: 16px;
  --body-line-height: 1.5;
  --heading-weight: 500;

  /* Colors */
  --color-primary: #2864f0;
  --color-text: #323232;
  --color-text-secondary: #595959;
  --color-bg: #ffffff;
  --color-border: #e9e7e7;

  /* Components */
  --btn-radius: 8px;
  --card-radius: 12px;
  --card-shadow: 0 0 1rem rgba(0,0,0,0.1),
                 0 0.125rem 0.25rem rgba(0,0,0,0.2);
}`}</CodeBlock>
        </Step>

        {/* Step 5 */}
        <Step number={5} title="コンポーネントに適用する">
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            変換した CSS 変数を実際のコンポーネントで使います。
          </p>
          <CodeBlock language="tsx">{`function Button({ children, variant = "primary" }) {
  const base = "font-medium transition-opacity hover:opacity-85";

  if (variant === "primary") {
    return (
      <button
        className={base}
        style={{
          background: "var(--color-primary)",
          color: "#fff",
          borderRadius: "var(--btn-radius)",
          padding: "10px 24px",
          fontSize: "var(--body-size)",
        }}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={base}
      style={{
        background: "transparent",
        color: "var(--color-primary)",
        border: "1px solid var(--color-primary)",
        borderRadius: "var(--btn-radius)",
        padding: "10px 24px",
      }}
    >
      {children}
    </button>
  );
}`}</CodeBlock>
        </Step>
      </div>
    </div>
  );
}

function Step({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10 last:mb-0">
      <div className="flex items-center gap-3 mb-3">
        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-bold">
          {number}
        </span>
        <h3 className="text-base font-bold text-gray-900">{title}</h3>
      </div>
      <div className="ml-10">{children}</div>
    </div>
  );
}

function CodeBlock({
  children,
  language,
}: {
  children: string;
  language?: string;
}) {
  return (
    <div className="relative">
      {language && (
        <span className="absolute top-2 right-3 text-[10px] text-gray-500 uppercase font-mono">
          {language}
        </span>
      )}
      <pre className="code-block text-[13px] leading-relaxed overflow-x-auto">
        <code>{children}</code>
      </pre>
    </div>
  );
}
