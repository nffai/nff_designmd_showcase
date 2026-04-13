"use client";

import { useState, useCallback } from "react";
import { designTokens } from "../data/globalDesignTokens";
import { DemoContent } from "../components/DemoContent";
import { GlobalTokenTable } from "../components/GlobalTokenTable";
import { UsageGuide } from "../components/UsageGuide";
import Link from "next/link";

const tabs = designTokens.map((ds) => ({ id: ds.id, name: ds.name }));

export default function GlobalPage() {
  const [activeId, setActiveId] = useState("airbnb");
  const [transitionKey, setTransitionKey] = useState(0);

  const activeDS = designTokens.find((ds) => ds.id === activeId)!;

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
            <Link
              href="/"
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              JP Edition
            </Link>
            <span className="text-xs text-gray-300">/</span>
            <span className="text-xs text-gray-600 font-medium">
              Global Edition
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            DESIGN.md Showcase
          </h1>
          <p className="text-base sm:text-lg text-gray-500 mt-2">
            Global Design System Comparison
          </p>
          <p className="text-sm text-gray-400 mt-3 max-w-2xl leading-relaxed">
            Design tokens extracted from{" "}
            <a
              href="https://github.com/VoltAgent/awesome-design-md"
              className="text-blue-500 hover:text-blue-600 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              awesome-design-md
            </a>{" "}
            — applied to the same demo content so you can compare how each
            design system looks and feels in practice.
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
                className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
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
            Demo Content — {activeDS.name} Design System
          </span>
        </div>

        {/* Notes */}
        {activeDS.notes.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {activeDS.notes.map((note, i) => (
              <span
                key={i}
                className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
              >
                {note}
              </span>
            ))}
          </div>
        )}

        <div
          data-theme={activeId}
          key={transitionKey}
          className="demo-area demo-transition-enter rounded-xl border border-gray-200 shadow-sm overflow-hidden"
        >
          <DemoContent locale="en" />
        </div>
      </section>

      {/* Section 2: Token Comparison Table */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Section 2
          </span>
          <span className="text-sm font-medium text-gray-700">
            Design Token Comparison Table
          </span>
        </div>
        <GlobalTokenTable activeId={activeId} systems={designTokens} />
      </section>

      {/* Section 3: Usage Guide */}
      <section className="max-w-6xl mx-auto px-4 py-8 pb-20">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Section 3
          </span>
          <span className="text-sm font-medium text-gray-700">
            How to Use DESIGN.md
          </span>
        </div>
        <UsageGuide />
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-400 leading-relaxed max-w-xl mx-auto">
            This page is not affiliated with any of the companies shown. Design
            tokens are extracted from public CSS for comparison and educational
            purposes. All trademarks belong to their respective owners.
          </p>
          <div className="flex justify-center gap-4 mt-4 text-xs text-gray-400">
            <Link href="/" className="hover:text-gray-600">
              JP Edition (24 companies)
            </Link>
            <span>|</span>
            <span className="font-medium text-gray-600">
              Global Edition (59 companies)
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
