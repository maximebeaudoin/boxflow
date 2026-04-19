// Boxflow — Détail d'un cours (admin) + Log de score (membre)
import React from "react";
import Icon from "../Icon.jsx";
import { Field, Input } from "./Onboarding.jsx";

export function ClassDetail({ onBack }) {
  const attendees = [
    { name: "Mathieu Paquet", status: "confirmé", plan: "Illimité", note: "Premier cours du mois" },
    { name: "Sophie Tremblay", status: "confirmé", plan: "Illimité" },
    { name: "Camille Lapointe", status: "check-in", plan: "Illimité" },
    { name: "Samuel Cormier", status: "check-in", plan: "Illimité" },
    { name: "Félix Bouchard", status: "confirmé", plan: "3x / sem" },
    { name: "Élodie Fortin", status: "confirmé", plan: "Illimité" },
    { name: "Thomas Beaulieu", status: "confirmé", plan: "Illimité" },
    { name: "Laurence Côté", status: "confirmé", plan: "Illimité" },
    { name: "Isabelle Girard", status: "confirmé", plan: "3x / sem" },
    { name: "Ariane Lévesque", status: "annulé", plan: "Illimité" },
  ];
  const waitlist = [
    { name: "Julien Dion", time: "il y a 34 min" },
    { name: "Maude Roy", time: "il y a 12 min" },
    { name: "Rémi Martel", time: "il y a 4 min" },
  ];

  return (
    <div className="content">
      <div style={{ marginBottom: 16 }}>
        <button className="btn sm ghost" onClick={onBack}><Icon name="chevronLeft" size={12} /> Retour au calendrier</button>
      </div>
      <div className="page-head">
        <div>
          <div className="muted mono" style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em" }}>Vendredi 17 avril · 17h00 → 18h00</div>
          <h1 style={{ display: "flex", alignItems: "center", gap: 12 }}>
            WOD PM
            <span className="badge accent">Dans 2h</span>
          </h1>
          <div className="sub">Coach Alex · 20 / 20 places · 3 en liste d'attente</div>
        </div>
        <div className="actions">
          <button className="btn"><Icon name="megaphone" size={12} />Message groupé</button>
          <button className="btn"><Icon name="download" size={12} />QR check-in</button>
          <button className="btn"><Icon name="more" size={12} /></button>
        </div>
      </div>

      <div className="grid-4" style={{ marginBottom: 24 }}>
        <div className="card"><div className="stat"><div className="label">Réservations</div><div className="value">20<span style={{ fontSize: 18, color: "var(--text-4)" }}>/20</span></div><div className="delta muted">Complet</div></div></div>
        <div className="card"><div className="stat"><div className="label">Présents (check-in)</div><div className="value">2</div><div className="delta muted">18 à venir</div></div></div>
        <div className="card"><div className="stat"><div className="label">Liste d'attente</div><div className="value">3</div><div className="delta muted">Notifiés auto</div></div></div>
        <div className="card"><div className="stat"><div className="label">Taux de présence 30j</div><div className="value">96<span style={{ fontSize: 18, color: "var(--text-4)" }}>%</span></div><div className="delta up"><Icon name="arrowUp" size={12} />+2 pt</div></div></div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 20 }}>
        <div className="card">
          <div className="card-head">
            <h3>Inscrits (20)</h3>
            <div className="seg">
              <button className="active">Tous</button>
              <button>Check-in</button>
              <button>En attente</button>
            </div>
          </div>
          <div className="card-body flush">
            <table className="table">
              <thead><tr><th></th><th>Membre</th><th>Plan</th><th>Statut</th><th>Note</th><th></th></tr></thead>
              <tbody>
                {attendees.map((a, i) => {
                  const initials = a.name.split(" ").map((n) => n[0]).join("").slice(0,2);
                  return (
                    <tr key={i}>
                      <td><input type="checkbox" checked={a.status === "check-in"} readOnly /></td>
                      <td>
                        <div className="member-cell">
                          <div className="avatar">{initials}</div>
                          <div className="name">{a.name}</div>
                        </div>
                      </td>
                      <td className="muted">{a.plan}</td>
                      <td>
                        {a.status === "check-in" && <span className="badge success"><Icon name="check" size={10} />Présent</span>}
                        {a.status === "confirmé" && <span className="badge">Confirmé</span>}
                        {a.status === "annulé" && <span className="badge danger">Annulé</span>}
                      </td>
                      <td className="muted" style={{ fontSize: 12 }}>{a.note || "—"}</td>
                      <td style={{ textAlign: "right" }}>
                        <button className="btn sm ghost icon-only"><Icon name="more" size={14} /></button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="card" style={{ marginBottom: 16 }}>
            <div className="card-head"><h3>Liste d'attente</h3></div>
            <div className="card-body flush">
              {waitlist.map((w, i) => (
                <div key={i} style={{ padding: "12px 20px", borderBottom: i < waitlist.length - 1 ? "1px solid var(--border)" : 0, display: "flex", alignItems: "center", gap: 10 }}>
                  <div className="num mono" style={{ fontSize: 12, color: "var(--text-4)", width: 20 }}>#{i+1}</div>
                  <div className="avatar">{w.name.split(" ").map((n) => n[0]).join("").slice(0,2)}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 500 }}>{w.name}</div>
                    <div className="dim" style={{ fontSize: 12 }}>{w.time}</div>
                  </div>
                  <button className="btn sm">Ajouter</button>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-head"><h3>Programmation du jour</h3></div>
            <div className="card-body">
              <div style={{ fontSize: 13, lineHeight: 1.6 }}>
                <div style={{ fontWeight: 600 }}>Diane</div>
                <div className="muted">21-15-9 for time · 10 min cap</div>
                <div style={{ marginTop: 8, color: "var(--text-2)" }}>Deadlift 102/70 kg · HSPU</div>
              </div>
              <button className="btn" style={{ width: "100%", marginTop: 12 }}>Voir le WOD complet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== LogScore modal ====================
export function LogScore({ onClose }) {
  const [scale, setScale] = React.useState("Rx");
  const [time, setTime] = React.useState("6:09");
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 2000, display: "grid", placeItems: "center", padding: 20 }}>
      <div style={{ background: "var(--surface)", borderRadius: "var(--r-4)", width: "100%", maxWidth: 480, overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
        <div style={{ padding: "18px 22px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div className="muted mono" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em" }}>Enregistrer mon score</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 2 }}>Diane · 21-15-9</div>
          </div>
          <button className="btn sm ghost icon-only" onClick={onClose}><Icon name="x" size={14} /></button>
        </div>
        <div style={{ padding: 22 }}>
          <Field label="Niveau de charge">
            <div className="seg">
              {["Rx", "Intermédiaire", "Débutant"].map((s) => (
                <button key={s} className={scale === s ? "active" : ""} onClick={() => setScale(s)}>{s}</button>
              ))}
            </div>
            <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>
              {scale === "Rx" && "Deadlift 102 kg · HSPU strict"}
              {scale === "Intermédiaire" && "Deadlift 84 kg · HSPU abmat"}
              {scale === "Débutant" && "Deadlift 60 kg · pike push-up"}
            </div>
          </Field>

          <Field label="Temps (mm:ss)">
            <Input defaultValue={time} />
          </Field>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <Field label="Fini avant time cap">
              <div className="seg">
                <button className="active">Oui</button>
                <button>Non (reps)</button>
              </div>
            </Field>
            <Field label="PR personnel ?">
              <div className="seg">
                <button className="active">Non</button>
                <button>Oui 🎉</button>
              </div>
            </Field>
          </div>

          <Field label="Notes (facultatif)">
            <textarea placeholder="Unbroken sur les 21, coupé 8/7 sur les 15… " style={{ width: "100%", padding: "10px 12px", fontSize: 14, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-2)", outline: "none", minHeight: 72, color: "var(--text)", resize: "vertical", fontFamily: "inherit" }} />
          </Field>

          <div style={{ padding: 12, background: "var(--accent-soft)", borderRadius: "var(--r-2)", fontSize: 13, marginTop: 4 }}>
            Votre meilleure Diane : <strong>5:12</strong> (août 2025) · score actuel : <strong>6:09</strong> → <span className="muted">+57 s</span>
          </div>
        </div>
        <div style={{ padding: "14px 22px", borderTop: "1px solid var(--border)", display: "flex", gap: 10, justifyContent: "flex-end" }}>
          <button className="btn" onClick={onClose}>Annuler</button>
          <button className="btn primary" onClick={onClose}>Enregistrer le score</button>
        </div>
      </div>
    </div>
  );
}

