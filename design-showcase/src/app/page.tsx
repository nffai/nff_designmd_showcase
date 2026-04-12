"use client";

import { useState, useCallback } from "react";
import { designSystems } from "./data/designTokens";
import type { DesignSystem } from "./data/designTokens";
import { DemoContent } from "./components/DemoContent";
import { TokenTable } from "./components/TokenTable";
import { UsageGuide } from "./components/UsageGuide";
import Link from "next/link";

const tabs = designSystems.map((ds) => ({ id: ds.id, name: ds.name }));

export default function Home() {
  const [activeId, setActiveId] = useState("apple");
  const [transitionKey, setTransitionKey] = useState(0);

  const activeDS = designSystems.find((ds) => ds.id === activeId)!;

  const handleTabChange = useCallback((id: string) => {
    setActiveId(id);
    setTransitionKey((k) => k + 1);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Page Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-gray-600 font-medium">
              JP Edition
            </span>
            <span className="text-xs text-gray-300">/</span>
            <Link
              href="/global"
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              Global Edition (59 companies) →
            </Link>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            DESIGN.md Showcase
          </h1>
          <p className="text-base sm:text-lg text-gray-500 mt-2">
            日本語デザインシステム比較
          </p>
          <p className="text-sm text-gray-400 mt-3 max-w-2xl leading-relaxed">
            <a
              href="https://github.com/kzhrknt/awesome-design-md-jp"
              className="text-blue-500 hover:text-blue-600 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              awesome-design-md-jp
            </a>{" "}
            の DESIGN.md ファイルから抽出したデザイントークンを、同一のデモコンテンツに適用して比較します。
            DESIGN.md とは、Webサイトのデザイン仕様（色、フォント、余白、コンポーネントスタイル等）を
            Markdown 形式で記述したファイルです。
          </p>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <nav
            className="flex gap-1 overflow-x-auto py-2 scrollbar-hide"
            role="tablist"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeId === tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeId === tab.id
                    ? "bg-gray-900 text-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Section 1: Demo Content */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Section 1
          </span>
          <span className="text-sm font-medium text-gray-700">
            デモコンテンツ — {activeDS.name} のデザインシステム適用
          </span>
        </div>

        <div
          data-theme={activeId}
          key={transitionKey}
          className="demo-area demo-transition-enter rounded-xl border border-gray-200 shadow-sm overflow-hidden"
        >
          <DemoContent ds={activeDS} />
        </div>
      </section>

      {/* Section 2: Token Comparison Table */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Section 2
          </span>
          <span className="text-sm font-medium text-gray-700">
            デザイントークン比較テーブル
          </span>
        </div>
        <TokenTable activeId={activeId} systems={designSystems} />
      </section>

      {/* Section 3: Usage Guide */}
      <section className="max-w-6xl mx-auto px-4 py-8 pb-20">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Section 3
          </span>
          <span className="text-sm font-medium text-gray-700">
            DESIGN.md の使い方ガイド
          </span>
        </div>
        <UsageGuide />
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-400 leading-relaxed max-w-xl mx-auto">
            本ページは各社の公式サイトではありません。公開CSSから抽出されたデザイントークンの比較・学習目的です。
            各デザインシステムの著作権はそれぞれの権利者に帰属します。
          </p>
          <div className="flex justify-center gap-4 mt-4 text-xs text-gray-400">
            <span>プライバシーポリシー</span>
            <span>利用規約</span>
            <span>会社概要</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
