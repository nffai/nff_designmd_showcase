# DESIGN.md Showcase

DESIGN.md ファイルから抽出したデザイントークンを、同一のデモコンテンツに適用して各社のデザインシステムを比較する Web アプリです。

- **JP Edition** — 日本企業 24 社のデザインシステム比較（[awesome-design-md-jp](https://github.com/kzhrknt/awesome-design-md-jp) ベース）
- **Global Edition** — グローバル企業 59 社のデザインシステム比較（[awesome-design-md](https://github.com/VoltAgent/awesome-design-md) ベース）

## Tech Stack

- Next.js 16 / React 19 / TypeScript
- Tailwind CSS 4
- CSS Custom Properties によるテーマ切替

## Getting Started

```bash
cd design-showcase
npm install
npm run dev
```

http://localhost:3000 で開きます。

## Structure

```
design-showcase/
├── src/app/
│   ├── page.tsx              # JP Edition
│   ├── global/page.tsx       # Global Edition
│   ├── components/           # 共通コンポーネント
│   ├── data/                 # デザイントークンデータ
│   ├── globals.css           # JP テーマ CSS 変数
│   └── global-themes.css     # Global テーマ CSS 変数
├── awesome-design-md/        # Global DESIGN.md ソース
├── awesome-design-md-jp/     # JP DESIGN.md ソース
└── designTokens.ts           # 全トークン統合データ
```
