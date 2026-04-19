// Boxflow — Éditeur de WOD par blocs
import React from "react";
import Icon from "../Icon.jsx";
import { Input } from "./Onboarding.jsx";

export default function WodEditor({ onClose }) {
  const [blocks, setBlocks] = React.useState([
    {
      id: 1, kind: "warmup", title: "Warm-up",
      duration: 10,
      content: "3 rounds, not for time:\n200 m row\n10 PVC pass-throughs\n10 air squats\n5 inchworms",
    },
    {
      id: 2, kind: "skill", title: "Skill / Strength",
      duration: 15,
      content: "Handstand push-up\n3 x 5 strict, reposo 2 min\nFocus: ligne hollow, coudes serrés",
    },
    {
      id: 3, kind: "metcon", title: "Metcon · Diane",
      duration: 12,
      benchmark: "Diane",
      content: "21-15-9 for time\nDeadlift 102/70 kg\nHandstand push-up\nTime cap: 10 min",
      scaling: {
        int: "Deadlift 84/60 kg · HSPU abmat",
        deb: "Deadlift 60/40 kg · pike push-up",
      },
    },
    {
      id: 4, kind: "cooldown", title: "Cool-down",
      duration: 5,
      content: "Étirement hanches 2 min/côté\nMobilité épaules PVC\nRespiration 4-7-8",
    },
  ]);
  const [selected, setSelected] = React.useState(3);
  const [libOpen, setLibOpen] = React.useState(false);
  const [publishAt, setPublishAt] = React.useState("Maintenant");

  const current = blocks.find((b) => b.id === selected);
  const totalDuration = blocks.reduce((s, b) => s + b.duration, 0);

  const addBlock = (kind) => {
    const defaults = {
      warmup: { title: "Warm-up", duration: 10, content: "" },
      skill: { title: "Skill / Strength", duration: 15, content: "" },
      metcon: { title: "Metcon", duration: 12, content: "" },
      accessory: { title: "Accessoire", duration: 10, content: "" },
      cooldown: { title: "Cool-down", duration: 5, content: "" },
    };
    const id = Math.max(...blocks.map((b) => b.id)) + 1;
    const nb = { id, kind, ...defaults[kind] };
    setBlocks([...blocks, nb]);
    setSelected(id);
  };

  const insertBenchmark = (bench) => {
    const id = Math.max(...blocks.map((b) => b.id), 0) + 1;
    setBlocks([...blocks, { id, kind: "metcon", title: `Metcon · ${bench.name}`, duration: bench.duration, benchmark: bench.name, content: bench.content }]);
    setSelected(id);
    setLibOpen(false);
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "var(--bg-sunken)", zIndex: 2000, display: "flex", flexDirection: "column" }}>
      {/* Top bar */}
      <div style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)", padding: "12px 24px", display: "flex", alignItems: "center", gap: 16 }}>
        <button className="btn sm ghost" onClick={onClose}><Icon name="chevronLeft" size={12} /> Fermer</button>
        <div style={{ width: 1, height: 22, background: "var(--border)" }} />
        <div>
          <div className="muted mono" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em" }}>Éditeur · vendredi 17 avril</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 500, letterSpacing: "-0.02em", marginTop: -2 }}>
            <input defaultValue="WOD PM — Diane" style={{ background: "transparent", border: 0, outline: 0, color: "var(--text)", fontFamily: "inherit", fontSize: "inherit", fontWeight: "inherit", letterSpacing: "inherit", width: 280 }} />
          </div>
        </div>
        <div style={{ flex: 1 }} />
        <span className="badge"><span className="dot" style={{ background: "var(--warning)" }} />Brouillon</span>
        <span className="muted mono" style={{ fontSize: 12 }}>Sauvegardé il y a 3 s</span>
        <button className="btn sm"><Icon name="download" size={12} />PDF whiteboard</button>
        <button className="btn sm"><Icon name="external" size={12} />Aperçu app</button>
        <button className="btn sm primary"><Icon name="check" size={12} />Publier</button>
      </div>

      {/* 3-panel layout */}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "280px 1fr 340px", minHeight: 0 }}>

        {/* Left — block list */}
        <div style={{ borderRight: "1px solid var(--border)", background: "var(--bg)", display: "flex", flexDirection: "column", minHeight: 0 }}>
          <div style={{ padding: "16px 16px 8px" }}>
            <div className="muted mono" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Structure</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div style={{ fontWeight: 500 }}>{blocks.length} blocs</div>
              <div className="mono" style={{ fontSize: 12, color: "var(--text-3)" }}>{totalDuration} min total</div>
            </div>
            <div style={{ height: 4, background: "var(--bg-sunken)", borderRadius: 999, marginTop: 8, display: "flex", overflow: "hidden" }}>
              {blocks.map((b) => (
                <div key={b.id} style={{ flex: b.duration, background: blockColor(b.kind) }} />
              ))}
            </div>
          </div>

          <div style={{ flex: 1, overflow: "auto", padding: "8px 8px 16px" }}>
            {blocks.map((b, i) => (
              <div key={b.id}
                onClick={() => setSelected(b.id)}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "10px 10px", marginBottom: 4,
                  borderRadius: "var(--r-2)", cursor: "pointer",
                  background: selected === b.id ? "var(--accent-soft)" : "transparent",
                  border: selected === b.id ? "1px solid var(--accent)" : "1px solid transparent",
                }}>
                <div className="mono" style={{ fontSize: 11, color: "var(--text-4)", width: 18 }}>{String(i + 1).padStart(2, "0")}</div>
                <div style={{ width: 3, height: 28, background: blockColor(b.kind), borderRadius: 2 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{b.title}</div>
                  <div className="muted" style={{ fontSize: 11 }}>{kindLabel(b.kind)} · {b.duration} min</div>
                </div>
                <Icon name="more" size={14} style={{ color: "var(--text-4)" }} />
              </div>
            ))}

            <div style={{ marginTop: 16, padding: "0 6px" }}>
              <div className="muted mono" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Ajouter un bloc</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                {[
                  { k: "warmup", l: "Warm-up" },
                  { k: "skill", l: "Skill" },
                  { k: "metcon", l: "Metcon" },
                  { k: "accessory", l: "Accessoire" },
                  { k: "cooldown", l: "Cool-down" },
                ].map((o) => (
                  <button key={o.k} className="btn sm" style={{ justifyContent: "flex-start" }} onClick={() => addBlock(o.k)}>
                    <div style={{ width: 6, height: 6, borderRadius: 2, background: blockColor(o.k) }} />
                    {o.l}
                  </button>
                ))}
                <button className="btn sm" style={{ gridColumn: "1 / -1", justifyContent: "center" }} onClick={() => setLibOpen(true)}>
                  <Icon name="search" size={12} />Bibliothèque benchmarks
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Center — editor */}
        <div style={{ overflow: "auto", padding: "28px 40px" }}>
          {current && (
            <div style={{ maxWidth: 680, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: blockColor(current.kind) }} />
                <div className="muted mono" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em" }}>{kindLabel(current.kind)}</div>
                {current.benchmark && <span className="badge accent">{current.benchmark}</span>}
              </div>

              <input defaultValue={current.title}
                style={{ width: "100%", fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 500, letterSpacing: "-0.02em", background: "transparent", border: 0, outline: 0, color: "var(--text)", padding: 0, marginBottom: 14 }} />

              <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
                <div className="card" style={{ padding: "6px 12px", display: "flex", alignItems: "center", gap: 8 }}>
                  <Icon name="clock" size={14} style={{ color: "var(--text-4)" }} />
                  <input defaultValue={current.duration} style={{ width: 32, background: "transparent", border: 0, outline: 0, color: "var(--text)", fontFamily: "inherit", fontSize: 13, textAlign: "right" }} />
                  <span className="muted" style={{ fontSize: 13 }}>min</span>
                </div>
                <div className="card" style={{ padding: "6px 12px", display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 999, background: "var(--success)" }} />
                  <span style={{ fontSize: 13 }}>For time</span>
                  <Icon name="chevronDown" size={12} style={{ color: "var(--text-4)" }} />
                </div>
                <div className="card" style={{ padding: "6px 12px", display: "flex", alignItems: "center", gap: 8 }}>
                  <Icon name="zap" size={14} style={{ color: "var(--text-4)" }} />
                  <span style={{ fontSize: 13 }}>Stimulus : haute intensité</span>
                </div>
              </div>

              <div style={{ marginBottom: 8, display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--text-3)" }}>
                <span className="mono" style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}>Programmation</span>
                <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
                <button className="btn sm ghost" style={{ height: 24 }}><Icon name="sparkle" size={11} />Suggérer</button>
              </div>

              <textarea defaultValue={current.content}
                style={{
                  width: "100%", minHeight: 160,
                  fontFamily: "var(--font-mono)", fontSize: 15, lineHeight: 1.7,
                  background: "var(--surface)", border: "1px solid var(--border)",
                  borderRadius: "var(--r-2)", padding: 16, color: "var(--text)",
                  outline: "none", resize: "vertical",
                }} />

              {current.kind === "metcon" && (
                <div style={{ marginTop: 24 }}>
                  <div className="muted mono" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Scaling</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div style={{ padding: 14, border: "1px solid var(--border)", borderRadius: "var(--r-2)", background: "var(--surface)" }}>
                      <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 6, color: "var(--warning)" }}>Intermédiaire</div>
                      <textarea defaultValue={current.scaling?.int || ""}
                        style={{ width: "100%", minHeight: 60, fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: 1.6, background: "transparent", border: 0, outline: 0, color: "var(--text)", resize: "vertical" }} />
                    </div>
                    <div style={{ padding: 14, border: "1px solid var(--border)", borderRadius: "var(--r-2)", background: "var(--surface)" }}>
                      <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 6, color: "var(--info)" }}>Débutant</div>
                      <textarea defaultValue={current.scaling?.deb || ""}
                        style={{ width: "100%", minHeight: 60, fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: 1.6, background: "transparent", border: 0, outline: 0, color: "var(--text)", resize: "vertical" }} />
                    </div>
                  </div>
                </div>
              )}

              <div style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--text-4)" }}>
                <Icon name="sparkle" size={12} />
                <em>Astuce : tapez <span className="mono" style={{ color: "var(--text-2)" }}>/bench</span> pour insérer un benchmark.</em>
              </div>
            </div>
          )}
        </div>

        {/* Right — publish + preview */}
        <div style={{ borderLeft: "1px solid var(--border)", background: "var(--bg)", overflow: "auto" }}>
          <div style={{ padding: 20, borderBottom: "1px solid var(--border)" }}>
            <div className="muted mono" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Publication</div>

            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 500, marginBottom: 6 }}>Date du WOD</div>
              <Input defaultValue="Vendredi 17 avril 2026" />
            </div>

            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 500, marginBottom: 6 }}>Visible par</div>
              <div className="seg">
                <button className="active">Tous les membres</button>
                <button>Staff</button>
              </div>
            </div>

            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 500, marginBottom: 6 }}>Publier</div>
              <div className="seg">
                {["Maintenant", "05:00", "Planifier"].map((o) => (
                  <button key={o} className={publishAt === o ? "active" : ""} onClick={() => setPublishAt(o)}>{o}</button>
                ))}
              </div>
            </div>

            <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, padding: "8px 0" }}>
              <input type="checkbox" defaultChecked /> Notification push aux membres
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, padding: "4px 0" }}>
              <input type="checkbox" defaultChecked /> Imprimer sur le whiteboard
            </label>
          </div>

          <div style={{ padding: 20 }}>
            <div className="muted mono" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Aperçu app</div>

            <div style={{ background: "#0a0a0a", borderRadius: 18, padding: 14, color: "#fff", boxShadow: "var(--shadow-md)" }}>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Ven. 17 avril</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 2 }}>Diane</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>21-15-9 · 10 min cap</div>
              <div style={{ height: 1, background: "rgba(255,255,255,0.12)", margin: "12px -14px" }} />
              {blocks.slice(0, 3).map((b, i) => (
                <div key={b.id} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 2, background: blockColor(b.kind), borderRadius: 2, flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{kindLabel(b.kind)} · {b.duration}'</div>
                    <div style={{ fontSize: 11, marginTop: 1, whiteSpace: "pre-wrap", lineHeight: 1.5, fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.85)" }}>
                      {b.content.split("\n").slice(0, 2).join("\n")}
                      {b.content.split("\n").length > 2 && "…"}
                    </div>
                  </div>
                </div>
              ))}
              <div style={{ display: "flex", gap: 6, marginTop: 12 }}>
                <div style={{ flex: 1, padding: "8px 0", textAlign: "center", background: "#fff", color: "#000", borderRadius: 8, fontSize: 11, fontWeight: 600 }}>Enregistrer mon score</div>
              </div>
            </div>

            <div style={{ marginTop: 16, padding: 12, background: "var(--bg-sunken)", borderRadius: "var(--r-2)", fontSize: 12, color: "var(--text-3)", lineHeight: 1.5 }}>
              Les membres recevront une notification à l'heure de publication. Ils pourront consulter le WOD, voir leur historique sur ce benchmark et enregistrer un score.
            </div>
          </div>
        </div>
      </div>

      {libOpen && <BenchmarkLibrary onPick={insertBenchmark} onClose={() => setLibOpen(false)} />}
    </div>
  );
}

function kindLabel(k) {
  return { warmup: "Warm-up", skill: "Skill", metcon: "Metcon", accessory: "Accessoire", cooldown: "Cool-down" }[k] || k;
}
function blockColor(k) {
  return {
    warmup: "oklch(68% 0.14 80)",    // amber
    skill: "oklch(60% 0.13 240)",    // blue
    metcon: "oklch(58% 0.18 48)",    // orange — accent
    accessory: "oklch(58% 0.12 300)",// purple
    cooldown: "oklch(55% 0.10 180)", // teal
  }[k] || "var(--text-4)";
}

function BenchmarkLibrary({ onPick, onClose }) {
  const [q, setQ] = React.useState("");
  const [filter, setFilter] = React.useState("Toutes");
  const benches = [
    { name: "Diane", cat: "The Girls", duration: 10, tag: "Deadlift · HSPU", content: "21-15-9 for time\nDeadlift 102/70 kg\nHandstand push-up" },
    { name: "Fran", cat: "The Girls", duration: 6, tag: "Thrusters · Pull-ups", content: "21-15-9 for time\nThrusters 43/29 kg\nPull-ups" },
    { name: "Grace", cat: "The Girls", duration: 5, tag: "Clean & Jerk", content: "30 clean & jerk for time\n61/43 kg" },
    { name: "Helen", cat: "The Girls", duration: 12, tag: "Run · KB · Pull-ups", content: "3 rounds for time\n400 m run\n21 KB swings 24/16\n12 pull-ups" },
    { name: "Murph", cat: "Hero", duration: 40, tag: "Run · Body weight", content: "For time, with vest 9/6 kg\n1 mile run\n100 pull-ups · 200 push-ups · 300 squats\n1 mile run" },
    { name: "DT", cat: "Hero", duration: 15, tag: "Deadlift · HPC · PJ", content: "5 rounds for time\n12 deadlift\n9 hang power clean\n6 push jerk · 70/47 kg" },
    { name: "Cindy", cat: "The Girls", duration: 20, tag: "AMRAP body weight", content: "AMRAP 20\n5 pull-ups · 10 push-ups · 15 squats" },
    { name: "Karen", cat: "The Girls", duration: 8, tag: "Wall balls", content: "150 wall balls for time\n9/6 kg" },
  ];
  const filtered = benches.filter((b) =>
    (filter === "Toutes" || b.cat === filter) &&
    (q === "" || b.name.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 3000, display: "grid", placeItems: "center", padding: 20 }} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "var(--surface)", borderRadius: "var(--r-4)", width: "100%", maxWidth: 720, maxHeight: "80vh", display: "flex", flexDirection: "column", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
        <div style={{ padding: "18px 22px", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div className="muted mono" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em" }}>Bibliothèque</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 2 }}>Benchmarks</div>
            </div>
            <button className="btn sm ghost icon-only" onClick={onClose}><Icon name="x" size={14} /></button>
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
            <div className="search" style={{ flex: 1 }}>
              <Icon name="search" size={14} className="search-icon" style={{ color: "var(--text-4)" }} />
              <input placeholder="Rechercher…" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
            <div className="seg">
              {["Toutes", "The Girls", "Hero"].map((c) => (
                <button key={c} className={filter === c ? "active" : ""} onClick={() => setFilter(c)}>{c}</button>
              ))}
            </div>
          </div>
        </div>
        <div style={{ flex: 1, overflow: "auto", padding: 12 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {filtered.map((b) => (
              <div key={b.name} onClick={() => onPick(b)}
                style={{
                  padding: 14, border: "1px solid var(--border)", borderRadius: "var(--r-2)",
                  background: "var(--bg)", cursor: "pointer",
                }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 500 }}>{b.name}</div>
                  <span className="muted mono" style={{ fontSize: 11 }}>~{b.duration} min</span>
                </div>
                <div className="muted" style={{ fontSize: 12, marginBottom: 8 }}>{b.cat} · {b.tag}</div>
                <pre style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-2)", lineHeight: 1.5, margin: 0, whiteSpace: "pre-wrap" }}>
                  {b.content.split("\n").slice(0, 3).join("\n")}
                </pre>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: "12px 22px", borderTop: "1px solid var(--border)", fontSize: 12, color: "var(--text-3)" }}>
          {filtered.length} benchmark{filtered.length > 1 ? "s" : ""} · Cliquez pour insérer comme bloc Metcon
        </div>
      </div>
    </div>
  );
}

