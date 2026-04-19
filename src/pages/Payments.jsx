// Boxflow — Paiements / Facturation
import React from "react";
import Icon from "../Icon.jsx";
import { DATA } from "../data.jsx";

export default function Payments() {
  const { PAYMENTS } = DATA;

  return (
    <div className="content">
      <div className="page-head">
        <div>
          <h1>Paiements</h1>
          <div className="sub">Connecté à Stripe · acct_1NkQ…W2Pz · versements quotidiens</div>
        </div>
        <div className="actions">
          <button className="btn"><Icon name="external" />Tableau de bord Stripe</button>
          <button className="btn"><Icon name="download" />Exporter</button>
          <button className="btn primary"><Icon name="plus" />Nouveau paiement</button>
        </div>
      </div>

      <div className="grid-4" style={{ marginBottom: "var(--sp-6)" }}>
        <div className="card">
          <div className="stat">
            <div className="label">Volume (30j)</div>
            <div className="value">42 318 <span style={{ fontSize: "var(--fs-lg)", color: "var(--text-3)" }}>$</span></div>
            <div className="delta up"><Icon name="arrowUp" size={12} />+8,1 %</div>
          </div>
        </div>
        <div className="card">
          <div className="stat">
            <div className="label">Solde Stripe</div>
            <div className="value">14 228 <span style={{ fontSize: "var(--fs-lg)", color: "var(--text-3)" }}>$</span></div>
            <div className="delta muted">Versement lun 20 avr</div>
          </div>
        </div>
        <div className="card">
          <div className="stat">
            <div className="label">Taux de succès</div>
            <div className="value">98,2 <span style={{ fontSize: "var(--fs-xl)", color: "var(--text-3)" }}>%</span></div>
            <div className="delta up"><Icon name="arrowUp" size={12} />+0,4 pt</div>
          </div>
        </div>
        <div className="card">
          <div className="stat">
            <div className="label">Frais Stripe (30j)</div>
            <div className="value">1 284 <span style={{ fontSize: "var(--fs-lg)", color: "var(--text-3)" }}>$</span></div>
            <div className="delta muted">2,9% + 0,30 $ / trx</div>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "var(--sp-5)" }}>
        <div className="card">
          <div className="card-head" style={{ padding: "10px 14px", gap: 8 }}>
            <div className="seg" style={{ background: "var(--bg-sunken)" }}>
              <button className="active">Tous</button>
              <button>Réussis</button>
              <button>En attente</button>
              <button>Échoués</button>
              <button>Remboursés</button>
            </div>
            <div style={{ flex: 1 }} />
            <button className="btn sm ghost"><Icon name="filter" size={12} />Avril 2026</button>
          </div>
          <div className="card-body flush">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Membre</th>
                  <th>Plan</th>
                  <th>Carte</th>
                  <th>Statut</th>
                  <th>Date</th>
                  <th style={{ textAlign: "right" }}>Montant</th>
                </tr>
              </thead>
              <tbody>
                {PAYMENTS.map((p) => {
                  const initials = p.member.split(" ").map((n) => n[0]).join("").slice(0, 2);
                  return (
                    <tr key={p.id}>
                      <td className="mono dim" style={{ fontSize: "var(--fs-xs)" }}>{p.id}</td>
                      <td>
                        <div className="member-cell">
                          <div className="avatar" style={{ width: 22, height: 22, fontSize: 9 }}>{initials}</div>
                          <span style={{ fontWeight: 500 }}>{p.member}</span>
                        </div>
                      </td>
                      <td className="muted">{p.plan}</td>
                      <td className="mono" style={{ fontSize: "var(--fs-xs)", color: "var(--text-3)" }}>{p.card}</td>
                      <td>
                        {p.status === "réussi" && <span className="badge success"><span className="dot" />Réussi</span>}
                        {p.status === "échoué" && <span className="badge danger"><span className="dot" />Échoué</span>}
                        {p.status === "en attente" && <span className="badge warning"><span className="dot" />En attente</span>}
                      </td>
                      <td className="muted mono" style={{ fontSize: "var(--fs-sm)" }}>{p.date}</td>
                      <td className="num" style={{ textAlign: "right", fontWeight: 500 }}>{p.amount.toFixed(2)} $</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div style={{ padding: 12, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "var(--fs-sm)" }}>
            <span className="muted">Affichage de 8 sur 428 paiements</span>
            <div className="row" style={{ gap: 4 }}>
              <button className="btn sm ghost icon-only"><Icon name="chevronLeft" size={14} /></button>
              <button className="btn sm ghost icon-only"><Icon name="chevronRight" size={14} /></button>
            </div>
          </div>
        </div>

        {/* Payout panel */}
        <div className="card" style={{ alignSelf: "start" }}>
          <div className="card-head">
            <div>
              <h3>Prochain versement</h3>
              <div className="sub">Lundi 20 avril</div>
            </div>
          </div>
          <div className="card-body">
            <div style={{ fontSize: "var(--fs-3xl)", fontWeight: 500, fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }} className="num">
              14 228,42 <span style={{ fontSize: "var(--fs-lg)", color: "var(--text-3)" }}>$</span>
            </div>
            <div className="muted" style={{ fontSize: "var(--fs-sm)", marginTop: 2 }}>Vers le compte ••• 8842 · Desjardins</div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--border)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--fs-sm)" }}>
                <span className="muted">Volume brut</span>
                <span className="num">14 728,20 $</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--fs-sm)" }}>
                <span className="muted">Frais Stripe</span>
                <span className="num">− 427,14 $</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--fs-sm)" }}>
                <span className="muted">Frais Boxflow (1%)</span>
                <span className="num">− 72,64 $</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--fs-sm)", paddingTop: 8, borderTop: "1px dashed var(--border)" }}>
                <span style={{ fontWeight: 600 }}>Net au versement</span>
                <span className="num" style={{ fontWeight: 600 }}>14 228,42 $</span>
              </div>
            </div>

            <button className="btn" style={{ width: "100%", marginTop: 16 }}>
              Voir sur Stripe <Icon name="external" size={12} />
            </button>

            <div style={{
              marginTop: 16, padding: 12,
              background: "var(--info-soft)", borderRadius: "var(--r-2)",
              fontSize: "var(--fs-sm)", color: "var(--text-2)", lineHeight: 1.5,
            }}>
              <div style={{ fontWeight: 600, marginBottom: 4, color: "var(--info)" }}>
                <Icon name="sparkle" size={12} /> Votre compte, vos données
              </div>
              Les paiements sont versés directement sur votre compte Stripe — Boxflow ne détient jamais vos fonds.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
