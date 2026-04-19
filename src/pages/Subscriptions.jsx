// Boxflow — Abonnements & plans
import React from "react";
import Icon from "../Icon.jsx";
import { DATA } from "../data.jsx";

export default function Subscriptions() {
  const { PLANS } = DATA;
  const totalMembers = PLANS.reduce((s, p) => s + p.members, 0);
  const mrr = PLANS.reduce((s, p) => s + (p.interval === "mois" ? p.price * p.members : 0), 0);

  return (
    <div className="content">
      <div className="page-head">
        <div>
          <h1>Abonnements</h1>
          <div className="sub">4 plans actifs · {totalMembers} abonnés · {mrr.toLocaleString("fr-CA")} $ MRR</div>
        </div>
        <div className="actions">
          <button className="btn"><Icon name="external" />Ouvrir Stripe Billing</button>
          <button className="btn primary"><Icon name="plus" />Nouveau plan</button>
        </div>
      </div>

      <div className="grid-4" style={{ marginBottom: "var(--sp-6)" }}>
        {PLANS.map((p, i) => (
          <div key={i} className="card" style={{ position: "relative" }}>
            {i === 0 && (
              <div style={{ position: "absolute", top: 12, right: 12 }}>
                <span className="badge accent">Populaire</span>
              </div>
            )}
            <div className="card-body">
              <div style={{ fontSize: "var(--fs-sm)", color: "var(--text-3)", fontWeight: 500, marginBottom: 6 }}>{p.name}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
                <span style={{ fontSize: "var(--fs-3xl)", fontWeight: 500, letterSpacing: "-0.02em", fontFamily: "var(--font-display)" }} className="num">{p.price}</span>
                <span style={{ fontSize: "var(--fs-lg)", color: "var(--text-3)" }}>$</span>
                <span style={{ color: "var(--text-4)", fontSize: "var(--fs-sm)" }}>/ {p.interval}</span>
              </div>
              <div className="muted" style={{ fontSize: "var(--fs-sm)", minHeight: 36, marginBottom: 14 }}>{p.desc}</div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--fs-sm)", borderTop: "1px solid var(--border)", paddingTop: 12 }}>
                <span className="muted">Abonnés actifs</span>
                <span className="num" style={{ fontWeight: 600 }}>{p.members}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--fs-sm)", borderTop: "1px solid var(--border)", paddingTop: 10, marginTop: 10 }}>
                <span className="muted">MRR</span>
                <span className="num" style={{ fontWeight: 600 }}>
                  {p.interval === "mois" ? `${(p.price * p.members).toLocaleString("fr-CA")} $` : "—"}
                </span>
              </div>
              <button className="btn" style={{ width: "100%", marginTop: 14 }}>Modifier</button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "var(--sp-5)" }}>
        <div className="card">
          <div className="card-head">
            <div>
              <h3>Abonnements actifs</h3>
              <div className="sub">Derniers changements · Stripe Billing</div>
            </div>
            <button className="btn sm ghost">Voir tout <Icon name="chevronRight" size={12} /></button>
          </div>
          <div className="card-body flush">
            <table className="table">
              <thead>
                <tr>
                  <th>Membre</th>
                  <th>Plan</th>
                  <th>Statut</th>
                  <th>Prochaine facture</th>
                  <th style={{ textAlign: "right" }}>Montant</th>
                </tr>
              </thead>
              <tbody>
                {DATA.MEMBERS.slice(0, 8).map((m) => {
                  const initials = m.name.split(" ").map((n) => n[0]).join("").slice(0, 2);
                  return (
                    <tr key={m.id}>
                      <td>
                        <div className="member-cell">
                          <div className="avatar">{initials}</div>
                          <div>
                            <div className="name">{m.name}</div>
                            <div className="mono dim" style={{ fontSize: "var(--fs-xs)" }}>sub_1NkQ{m.id}W2Pz</div>
                          </div>
                        </div>
                      </td>
                      <td>{m.plan}</td>
                      <td>
                        {m.status === "actif" && <span className="badge success"><span className="dot" />En cours</span>}
                        {m.status === "pause" && <span className="badge warning"><span className="dot" />Pause</span>}
                        {m.status === "échec paiement" && <span className="badge danger"><span className="dot" />Échec</span>}
                      </td>
                      <td className="muted">{m.status === "pause" ? "—" : `1 mai 2026`}</td>
                      <td className="num" style={{ textAlign: "right", fontWeight: 500 }}>
                        {m.mrr > 0 ? `${m.mrr},00 $` : "—"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card-head"><h3>Revenus récurrents</h3></div>
          <div className="card-body">
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
              <span style={{ fontSize: "var(--fs-3xl)", fontWeight: 500, fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }} className="num">
                {mrr.toLocaleString("fr-CA")}
              </span>
              <span style={{ fontSize: "var(--fs-xl)", color: "var(--text-3)" }}>$ / mois</span>
            </div>
            <div className="delta up" style={{ fontSize: "var(--fs-sm)", marginBottom: 20 }}>
              <Icon name="arrowUp" size={12} /> +1 628 $ vs mois dernier
            </div>

            <svg viewBox="0 0 300 100" style={{ width: "100%", height: 100, display: "block" }}>
              {[0,1,2,3,4,5,6,7,8,9,10,11].map((i) => {
                const v = 28 + i * 0.9 + Math.sin(i) * 1.2;
                const h = v * 2.8;
                const barW = 18;
                const gap = 6;
                const x = i * (barW + gap) + 8;
                const isLast = i === 11;
                return (
                  <g key={i}>
                    <rect x={x} y={100 - h} width={barW} height={h} rx="1"
                      fill={isLast ? "var(--accent)" : "var(--border-strong)"} />
                  </g>
                );
              })}
              <line x1="0" y1="99.5" x2="300" y2="99.5" stroke="var(--border)" strokeWidth="1" />
            </svg>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--fs-xs)", color: "var(--text-4)", marginTop: 6, fontFamily: "var(--font-mono)" }}>
              <span>Mai 25</span>
              <span>Avr 26</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid var(--border)", marginTop: 20, paddingTop: 16 }}>
              <div>
                <div className="muted" style={{ fontSize: "var(--fs-sm)" }}>Churn mensuel</div>
                <div className="num" style={{ fontWeight: 500, fontSize: "var(--fs-lg)" }}>2,1 %</div>
              </div>
              <div>
                <div className="muted" style={{ fontSize: "var(--fs-sm)" }}>LTV moyen</div>
                <div className="num" style={{ fontWeight: 500, fontSize: "var(--fs-lg)" }}>4 280 $</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
