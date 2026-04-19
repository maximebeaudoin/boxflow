// Boxflow — Membres
import React from "react";
import Icon from "../Icon.jsx";
import { DATA } from "../data.jsx";

export default function Members() {
  const { MEMBERS } = DATA;
  const [filter, setFilter] = React.useState("tous");
  const [selected, setSelected] = React.useState(2); // Sophie

  const filtered = MEMBERS.filter((m) => {
    if (filter === "tous") return true;
    if (filter === "actifs") return m.status === "actif";
    if (filter === "pause") return m.status === "pause";
    if (filter === "echec") return m.status === "échec paiement";
    return true;
  });

  const sel = MEMBERS.find((m) => m.id === selected);

  return (
    <div className="content">
      <div className="page-head">
        <div>
          <h1>Membres</h1>
          <div className="sub">247 membres actifs · 12 nouveaux ce mois · 3 en pause</div>
        </div>
        <div className="actions">
          <button className="btn"><Icon name="download" />Exporter CSV</button>
          <button className="btn primary"><Icon name="plus" />Nouveau membre</button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "var(--sp-5)" }}>
        <div className="card">
          <div className="card-head" style={{ padding: "10px 14px", gap: 8 }}>
            <div className="seg" style={{ background: "var(--bg-sunken)" }}>
              {["tous","actifs","pause","echec"].map((f) => (
                <button key={f} className={filter === f ? "active" : ""} onClick={() => setFilter(f)}>
                  {f === "tous" ? "Tous" : f === "actifs" ? "Actifs" : f === "pause" ? "En pause" : "Échec paiement"}
                  <span className="muted" style={{ marginLeft: 6, fontVariantNumeric: "tabular-nums" }}>
                    {f === "tous" ? MEMBERS.length : MEMBERS.filter((m) => {
                      if (f === "actifs") return m.status === "actif";
                      if (f === "pause") return m.status === "pause";
                      if (f === "echec") return m.status === "échec paiement";
                    }).length}
                  </span>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }} />
            <button className="btn sm ghost"><Icon name="filter" size={12} />Filtres</button>
          </div>
          <div className="card-body flush" style={{ maxHeight: "calc(100vh - 260px)", overflow: "auto" }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Membre</th>
                  <th>Plan</th>
                  <th>Statut</th>
                  <th style={{ textAlign: "right" }}>MRR</th>
                  <th>Dernière visite</th>
                  <th>Série</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((m) => {
                  const initials = m.name.split(" ").map((n) => n[0]).join("").slice(0, 2);
                  return (
                    <tr key={m.id} onClick={() => setSelected(m.id)} style={{ cursor: "pointer", background: selected === m.id ? "var(--surface-2)" : "" }}>
                      <td>
                        <div className="member-cell">
                          <div className="avatar">{initials}</div>
                          <div>
                            <div className="name">{m.name}</div>
                            <div className="email">{m.email}</div>
                          </div>
                        </div>
                      </td>
                      <td>{m.plan}</td>
                      <td>
                        {m.status === "actif" && <span className="badge success"><span className="dot" />Actif</span>}
                        {m.status === "pause" && <span className="badge warning"><span className="dot" />En pause</span>}
                        {m.status === "échec paiement" && <span className="badge danger"><span className="dot" />Échec</span>}
                      </td>
                      <td className="num" style={{ textAlign: "right" }}>{m.mrr > 0 ? `${m.mrr},00 $` : "—"}</td>
                      <td className="muted">{m.last}</td>
                      <td className="num">{m.streak > 0 ? `${m.streak} j` : "—"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detail panel */}
        {sel && (
          <div className="card" style={{ alignSelf: "start", position: "sticky", top: 0 }}>
            <div className="card-body" style={{ paddingBottom: 16 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
                <div className="avatar lg" style={{ background: "var(--accent-soft)", color: "var(--accent-text)", borderColor: "transparent" }}>
                  {sel.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "var(--fs-lg)", fontWeight: 600, letterSpacing: "-0.01em" }}>{sel.name}</div>
                  <div className="muted mono" style={{ fontSize: "var(--fs-sm)" }}>{sel.email}</div>
                </div>
                <button className="btn sm ghost icon-only"><Icon name="more" /></button>
              </div>

              <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
                {sel.status === "actif" && <span className="badge success"><span className="dot" />Actif</span>}
                {sel.status === "pause" && <span className="badge warning"><span className="dot" />En pause</span>}
                {sel.status === "échec paiement" && <span className="badge danger"><span className="dot" />Échec paiement</span>}
                <span className="badge">{sel.plan}</span>
                {sel.streak > 20 && <span className="badge accent">🔥 Série {sel.streak} j</span>}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: "1px solid var(--border)", borderRadius: "var(--r-2)", overflow: "hidden", marginBottom: 16 }}>
                <div style={{ padding: 12, borderRight: "1px solid var(--border)" }}>
                  <div className="muted" style={{ fontSize: "var(--fs-xs)" }}>Membre depuis</div>
                  <div style={{ fontWeight: 500, marginTop: 2 }}>{sel.joined}</div>
                </div>
                <div style={{ padding: 12 }}>
                  <div className="muted" style={{ fontSize: "var(--fs-xs)" }}>Visites (30j)</div>
                  <div style={{ fontWeight: 500, marginTop: 2 }} className="num">18</div>
                </div>
                <div style={{ padding: 12, borderRight: "1px solid var(--border)", borderTop: "1px solid var(--border)" }}>
                  <div className="muted" style={{ fontSize: "var(--fs-xs)" }}>MRR</div>
                  <div style={{ fontWeight: 500, marginTop: 2 }} className="num">{sel.mrr},00 $</div>
                </div>
                <div style={{ padding: 12, borderTop: "1px solid var(--border)" }}>
                  <div className="muted" style={{ fontSize: "var(--fs-xs)" }}>LTV</div>
                  <div style={{ fontWeight: 500, marginTop: 2 }} className="num">4 728 $</div>
                </div>
              </div>

              <div className="section-title">Records personnels</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
                {[
                  { n: "Back Squat", v: "145 kg", d: "il y a 12 j" },
                  { n: "Deadlift", v: "170 kg", d: "il y a 3 sem" },
                  { n: "Fran", v: "3:42", d: "il y a 2 mois" },
                ].map((pr, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--fs-sm)", padding: "6px 10px", background: "var(--bg-sunken)", borderRadius: "var(--r-2)" }}>
                    <span>{pr.n}</span>
                    <span><span className="num" style={{ fontWeight: 600 }}>{pr.v}</span> <span className="dim">{pr.d}</span></span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 6 }}>
                <button className="btn" style={{ flex: 1 }}><Icon name="mail" size={12} />Message</button>
                <button className="btn" style={{ flex: 1 }}>Voir le profil</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
