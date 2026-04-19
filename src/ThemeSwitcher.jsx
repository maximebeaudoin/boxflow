// Boxflow — Theme switcher widget
// Floating button (bottom-right) that swaps [data-system] on <html>.
// Add a new theme: drop a CSS file in src/themes/, import it in index.css,
// then add one entry to THEMES below.
import React from "react";
import Icon from "./Icon.jsx";

export const THEMES = [
  {
    id: "boxflow",
    label: "Boxflow",
    desc: "Design original — orange brûlé / vert forêt",
    swatch: { bg: "#ffffff", accent: "#c75a1f", text: "#2a1d15" },
  },
  {
    id: "kinetic",
    label: "Kinetic",
    desc: "Industrial dark · lime éclatant",
    swatch: { bg: "#0e0e0e", accent: "#cffc00", text: "#f4f4f2" },
  },
];

export default function ThemeSwitcher({ system, onChange }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        zIndex: 1500,
        fontFamily: "var(--font-sans)",
      }}
    >
      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: 56,
            width: 280,
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "var(--r-3)",
            boxShadow: "var(--shadow-lg)",
            padding: 8,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <div
            style={{
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--text-4)",
              padding: "6px 10px 4px",
              fontFamily: "var(--font-mono)",
            }}
          >
            Design system
          </div>
          {THEMES.map((t) => {
            const active = t.id === system;
            return (
              <button
                key={t.id}
                onClick={() => {
                  onChange(t.id);
                  setOpen(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: 10,
                  borderRadius: "var(--r-2)",
                  border: active ? "1px solid var(--accent)" : "1px solid transparent",
                  background: active ? "var(--accent-soft)" : "transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "var(--t-fast)",
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.background = "var(--surface-2)";
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.background = "transparent";
                }}
              >
                <div
                  aria-hidden
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "var(--r-2)",
                    background: t.swatch.bg,
                    border: "1px solid var(--border)",
                    position: "relative",
                    flexShrink: 0,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 6,
                      borderRadius: 4,
                      background: t.swatch.accent,
                      clipPath: "polygon(0 0, 100% 0, 100% 55%, 0 55%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: 6,
                      right: 6,
                      bottom: 6,
                      height: 3,
                      borderRadius: 2,
                      background: t.swatch.text,
                      opacity: 0.5,
                    }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: 13,
                      color: "var(--text)",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    {t.label}
                    {active && <Icon name="check" size={12} />}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 2 }}>
                    {t.desc}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Changer de thème"
        style={{
          width: 44,
          height: 44,
          borderRadius: "var(--r-pill)",
          background: "var(--surface)",
          border: "1px solid var(--border-strong)",
          boxShadow: "var(--shadow-md)",
          cursor: "pointer",
          display: "grid",
          placeItems: "center",
          color: "var(--text)",
          transition: "var(--t-fast)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-strong)")}
      >
        <Icon name="palette" size={16} />
      </button>
    </div>
  );
}
