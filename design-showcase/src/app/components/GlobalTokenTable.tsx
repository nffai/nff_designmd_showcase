import type { DesignToken } from "../data/globalDesignTokens";

function ColorSwatch({ color }: { color: string }) {
  return (
    <span
      className="inline-block w-4 h-4 rounded border border-gray-300 align-middle mr-1.5 flex-shrink-0"
      style={{ background: color }}
    />
  );
}

interface Row {
  label: string;
  getValue: (ds: DesignToken) => string;
  renderColor?: (ds: DesignToken) => string | null;
}

const rows: Row[] = [
  { label: "Font Family", getValue: (ds) => ds.fontFamily.length > 50 ? ds.fontFamily.slice(0, 50) + "…" : ds.fontFamily },
  { label: "Body Size", getValue: (ds) => ds.typography.bodySize },
  { label: "Body line-height", getValue: (ds) => ds.typography.bodyLineHeight },
  { label: "Body letter-spacing", getValue: (ds) => ds.typography.bodyLetterSpacing },
  { label: "Heading Size", getValue: (ds) => ds.typography.headingSize },
  { label: "Heading Weight", getValue: (ds) => String(ds.typography.headingWeight) },
  { label: "Primary Color", getValue: (ds) => ds.colors.primary, renderColor: (ds) => ds.colors.primary },
  { label: "Text Color", getValue: (ds) => ds.colors.textPrimary, renderColor: (ds) => ds.colors.textPrimary },
  { label: "Background", getValue: (ds) => ds.colors.background, renderColor: (ds) => ds.colors.background },
  { label: "Button Radius", getValue: (ds) => ds.button.borderRadius },
  { label: "Card Radius", getValue: (ds) => ds.card.borderRadius },
];

export function GlobalTokenTable({
  activeId,
  systems,
}: {
  activeId: string;
  systems: DesignToken[];
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-4 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wider whitespace-nowrap sticky left-0 bg-gray-50 z-10 min-w-[140px]">
                Token
              </th>
              {systems.map((ds) => (
                <th
                  key={ds.id}
                  className={`px-4 py-3 font-semibold text-xs uppercase tracking-wider whitespace-nowrap min-w-[150px] ${
                    ds.id === activeId
                      ? "bg-gray-900 text-white"
                      : "text-gray-600"
                  }`}
                >
                  {ds.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.label}
                className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
              >
                <td className="px-4 py-2.5 font-medium text-gray-700 whitespace-nowrap sticky left-0 z-10 bg-inherit border-r border-gray-100">
                  {row.label}
                </td>
                {systems.map((ds) => {
                  const value = row.getValue(ds);
                  const color = row.renderColor?.(ds);
                  return (
                    <td
                      key={ds.id}
                      className={`px-4 py-2.5 text-gray-600 ${
                        ds.id === activeId
                          ? "bg-blue-50/50 font-medium text-gray-900"
                          : ""
                      }`}
                    >
                      <div className="flex items-center">
                        {color && <ColorSwatch color={color} />}
                        <span className="font-mono text-xs break-all">
                          {value}
                        </span>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
