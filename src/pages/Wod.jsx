// Boxflow — WOD du jour
import React from "react";
import Icon from "../Icon.jsx";
import { DATA } from "../data.jsx";

export default function Wod({ onLogScore, onEdit }) {
  const { WOD_TODAY } = DATA;

  return (
    <div className="content">
      <div className="page-head">
        <div>
          <div className="muted mono" style={{ fontSize: "var(--fs-sm)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            {WOD_TODAY.date}
          </div>
          <h1 style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span>{WOD_TODAY.title}</span>
            <span className="badge accent">Benchmark</span>
          </h1>
          <div className="sub">{WOD_TODAY.subtitle} · Publié à 05:32 · 28 scores enregistrés</div>
        </div>
        <div className="actions">
          <button className="btn"><Icon name="download" />PDF</button>
          <button className="btn" onClick={onEdit}><Icon name="settings" size={12} />Éditer le WOD</button>
          <button className="btn primary" onClick={onLogScore}><Icon name="plus" />Enregistrer un score</button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "var(--sp-5)" }}>
        <div>
          {/* Programmation */}
          <div className="card" style={{ marginBottom: "var(--sp-5)" }}>
            <div className="card-head">
              <h3>Programmation</h3>
              <button className="btn sm ghost">Modifier</button>
            </div>
            <div className="card-body" style={{ paddingTop: 8, paddingBottom: 8 }}>
              {WOD_TODAY.parts.map((part, i) => (
                <div key={i} style={{
                  padding: "16px 0",
                  borderBottom: i < WOD_TODAY.parts.length - 1 ? "1px solid var(--border)" : 0,
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  gap: 16,
                }}>
                  <div>
                    <div className="mono" style={{ fontSize: 10, letterSpacing: "0.1em", color: "var(--text-4)", textTransform: "uppercase", fontWeight: 600 }}>
                      Bloc {String(i + 1).padStart(2, "0")}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: "var(--fs-md)", marginTop: 4, letterSpacing: "-0.01em" }}>{part.label}</div>
                    <div className="muted mono" style={{ fontSize: "var(--fs-xs)", marginTop: 2 }}>{part.time}</div>
                  </div>
                  <div style={{ fontSize: "var(--fs-base)", lineHeight: 1.65 }}>
                    {part.items.map((it, j) => (
                      <div key={j} style={{ display: "flex", gap: 8 }}>
                        <span style={{ color: "var(--text-4)" }}>—</span>
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scaling */}
          <div className="card">
            <div className="card-head">
              <h3>Niveaux de charge</h3>
              <div className="muted" style={{ fontSize: "var(--fs-sm)" }}>À choisir par le membre avant le cours</div>
            </div>
            <div className="card-body flush">
              {WOD_TODAY.scaling.map((s, i) => (
                <div key={i} style={{
                  padding: "14px 20px",
                  borderBottom: i < WOD_TODAY.scaling.length - 1 ? "1px solid var(--border)" : 0,
                  display: "grid",
                  gridTemplateColumns: "120px 1fr auto",
                  alignItems: "center",
                  gap: 12,
                }}>
                  <div>
                    <span className={`badge ${i === 0 ? "accent" : i === 1 ? "info" : ""}`}>{s.label}</span>
                  </div>
                  <div className="muted" style={{ fontSize: "var(--fs-sm)" }}>{s.note}</div>
                  <div className="num muted" style={{ fontSize: "var(--fs-sm)" }}>
                    {i === 0 ? "11" : i === 1 ? "14" : "3"} athlètes
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          {/* Leaderboard */}
          <div className="card" style={{ marginBottom: "var(--sp-5)" }}>
            <div className="card-head">
              <div>
                <h3>Leaderboard du jour</h3>
                <div className="sub">28 scores · mis à jour il y a 4 min</div>
              </div>
              <div className="seg" style={{ fontSize: 11 }}>
                <button className="active">Tous</button>
                <button>Rx</button>
                <button>Int.</button>
              </div>
            </div>
            <div className="card-body flush">
              {WOD_TODAY.leaderboard.map((r, i) => (
                <div key={i} style={{
                  padding: "10px 16px",
                  borderBottom: i < WOD_TODAY.leaderboard.length - 1 ? "1px solid var(--border)" : 0,
                  display: "grid",
                  gridTemplateColumns: "28px 1fr auto auto",
                  gap: 12,
                  alignItems: "center",
                  background: i === 0 ? "var(--accent-soft)" : "",
                }}>
                  <div className="mono" style={{
                    fontSize: "var(--fs-sm)",
                    fontWeight: 600,
                    color: i === 0 ? "var(--accent-text)" : "var(--text-4)",
                    textAlign: "center",
                  }}>
                    {i + 1}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div className="avatar" style={{ width: 22, height: 22, fontSize: 9 }}>
                      {r.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <span style={{ fontWeight: 500, fontSize: "var(--fs-sm)" }}>{r.name}</span>
                    {r.pr && <span className="badge accent" style={{ fontSize: 9 }}>PR</span>}
                  </div>
                  <span className="badge" style={{ fontSize: 10 }}>{r.scale}</span>
                  <span className="num" style={{ fontWeight: 600, fontSize: "var(--fs-md)", minWidth: 50, textAlign: "right" }}>
                    {r.score}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="card">
            <div className="card-head"><h3>Aperçu du WOD</h3></div>
            <div className="card-body">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: "1px solid var(--border)", borderRadius: "var(--r-2)", overflow: "hidden" }}>
                <div style={{ padding: 14, borderRight: "1px solid var(--border)" }}>
                  <div className="muted" style={{ fontSize: "var(--fs-xs)" }}>Meilleur temps (aujourd'hui)</div>
                  <div className="num" style={{ fontWeight: 600, fontSize: "var(--fs-xl)", marginTop: 2 }}>4:12</div>
                </div>
                <div style={{ padding: 14 }}>
                  <div className="muted" style={{ fontSize: "var(--fs-xs)" }}>Temps moyen</div>
                  <div className="num" style={{ fontWeight: 600, fontSize: "var(--fs-xl)", marginTop: 2 }}>5:47</div>
                </div>
                <div style={{ padding: 14, borderRight: "1px solid var(--border)", borderTop: "1px solid var(--border)" }}>
                  <div className="muted" style={{ fontSize: "var(--fs-xs)" }}>Record du box (tous temps)</div>
                  <div className="num" style={{ fontWeight: 600, fontSize: "var(--fs-xl)", marginTop: 2 }}>3:58</div>
                  <div className="dim" style={{ fontSize: "var(--fs-xs)" }}>Sam. Cormier, nov. 2025</div>
                </div>
                <div style={{ padding: 14, borderTop: "1px solid var(--border)" }}>
                  <div className="muted" style={{ fontSize: "var(--fs-xs)" }}>Scores Rx / Int. / Déb.</div>
                  <div className="num" style={{ fontWeight: 600, fontSize: "var(--fs-xl)", marginTop: 2 }}>11 / 14 / 3</div>
                </div>
              </div>

              <div style={{ marginTop: 16 }}>
                <div className="section-title">Notes du coach</div>
                <div style={{ background: "var(--bg-sunken)", padding: 12, borderRadius: "var(--r-2)", fontSize: "var(--fs-sm)", color: "var(--text-2)", lineHeight: 1.6 }}>
                  Diane est un benchmark classique. Objectif du jour : unbroken sur les 21 et 15, respiration contrôlée sur les HSPU. Scaler la hauteur avant le poids.
                  <div className="dim" style={{ fontSize: "var(--fs-xs)", marginTop: 6, fontStyle: "italic" }}>— Alex, coach principal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
