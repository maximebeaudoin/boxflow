// Boxflow — Landing marketing (courte) + App membre mockup
import React from "react";
import Icon from "../Icon.jsx";

export default function Landing({ onEnter }) {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh", overflow: "auto" }}>
      {/* Nav */}
      <div style={{ display: "flex", alignItems: "center", padding: "20px 48px", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, background: "var(--bg)", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 600, fontSize: 16 }}>
          <div style={{ width: 24, height: 24, borderRadius: "var(--r-2)", background: "var(--accent)", color: "#fff", display: "grid", placeItems: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14 }}>B</div>
          Boxflow
        </div>
        <div style={{ display: "flex", gap: 28, marginLeft: 48, fontSize: 14, color: "var(--text-2)" }}>
          <span style={{ cursor: "pointer" }}>Fonctionnalités</span>
          <span style={{ cursor: "pointer" }}>Tarifs</span>
          <span style={{ cursor: "pointer" }}>App membre</span>
          <span style={{ cursor: "pointer" }}>Migration FLiiP</span>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span style={{ fontSize: 13, color: "var(--text-3)", marginRight: 8 }}>FR · EN</span>
          <button className="btn">Se connecter</button>
          <button className="btn primary" onClick={onEnter}>Ouvrir la démo <Icon name="arrowRight" size={12} /></button>
        </div>
      </div>

      {/* Hero */}
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "80px 48px 40px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 12px", border: "1px solid var(--border)", borderRadius: 999, fontSize: 12, color: "var(--text-3)", marginBottom: 24 }}>
          <span className="dot" style={{ width: 6, height: 6, borderRadius: 999, background: "var(--success)" }} />
          Conçu au Québec · bilingue FR / EN · sans contrat
        </div>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: 68,
          lineHeight: 1.02,
          letterSpacing: "-0.035em",
          fontWeight: 500,
          margin: "0 0 24px",
          maxWidth: 900,
        }}>
          Le logiciel de gestion conçu <em style={{ color: "var(--accent)", fontStyle: "italic" }}>par et pour</em> les boxes CrossFit du Québec.
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.5, color: "var(--text-2)", maxWidth: 680, margin: "0 0 32px" }}>
          Abonnements, calendrier, WODs, paiements Stripe en direct sur votre compte. Simple comme PushPress, spécialisé comme Wodify, mais en français, sans engagement.
        </p>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <button className="btn primary" style={{ height: 42, padding: "0 18px", fontSize: 14 }} onClick={onEnter}>
            Essayer la démo du dashboard <Icon name="arrowRight" size={14} />
          </button>
          <button className="btn" style={{ height: 42, padding: "0 18px", fontSize: 14 }}>
            Parler au fondateur
          </button>
          <span style={{ fontSize: 13, color: "var(--text-3)", marginLeft: 8 }}>
            Pas de carte · 30 jours gratuits
          </span>
        </div>
      </div>

      {/* Proof strip */}
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 48px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          {[
            { n: "79 $ CAD", l: "à partir de / mois" },
            { n: "100 %", l: "bilingue FR / EN" },
            { n: "0", l: "contrat d'engagement" },
            { n: "1 %", l: "frais sur transactions" },
          ].map((x, i) => (
            <div key={i} style={{ padding: "24px 20px", borderLeft: i > 0 ? "1px solid var(--border)" : "" }}>
              <div style={{ fontSize: 28, fontWeight: 500, fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }} className="num">{x.n}</div>
              <div style={{ fontSize: 13, color: "var(--text-3)", marginTop: 4 }}>{x.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature grid */}
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 48px 100px" }}>
        <div className="section-title" style={{ marginBottom: 12 }}>Le produit</div>
        <h2 style={{ fontSize: 36, fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "-0.025em", margin: "0 0 48px", maxWidth: 680 }}>
          Tout ce qu'il faut pour opérer un box. Rien de plus.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: "var(--r-3)", overflow: "hidden" }}>
          {[
            { icon: "calendar", t: "Calendrier & réservations", d: "Cours récurrents, capacités, liste d'attente automatique, check-in QR." },
            { icon: "card", t: "Abonnements Stripe", d: "Plans flexibles, pauses, essais gratuits, gestion automatique des cartes expirées." },
            { icon: "dumbbell", t: "WOD du jour", d: "Programmation, scaling, leaderboard et PRs — pensé pour le CrossFit." },
            { icon: "dollar", t: "Votre compte Stripe", d: "Paiements directs sur VOTRE compte. Boxflow ne détient jamais vos fonds." },
            { icon: "users", t: "Profils membres", d: "Historique, visites, records, notes privées pour les coachs." },
            { icon: "chart", t: "Rapports clairs", d: "MRR, rétention, remplissage des cours. En CAD, pas de conversion USD." },
          ].map((f, i) => (
            <div key={i} style={{ background: "var(--surface)", padding: 28 }}>
              <div style={{ width: 32, height: 32, borderRadius: "var(--r-2)", background: "var(--accent-soft)", color: "var(--accent-text)", display: "grid", placeItems: "center", marginBottom: 16 }}>
                <Icon name={f.icon} size={16} />
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 6, letterSpacing: "-0.01em" }}>{f.t}</div>
              <div style={{ fontSize: 14, color: "var(--text-3)", lineHeight: 1.55 }}>{f.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Compare */}
      <div style={{ background: "var(--bg-sunken)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "80px 48px" }}>
          <div className="section-title" style={{ marginBottom: 12 }}>Comparaison</div>
          <h2 style={{ fontSize: 36, fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "-0.025em", margin: "0 0 40px" }}>
            Pourquoi Boxflow plutôt qu'un autre ?
          </h2>
          <div className="card">
            <table className="table" style={{ fontSize: 14 }}>
              <thead>
                <tr>
                  <th style={{ width: "30%" }}></th>
                  <th>Boxflow</th>
                  <th className="muted">Concurrent A</th>
                  <th className="muted">Concurrent B</th>
                  <th className="muted">Concurrent C</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Prix de départ", "79 $ CAD / mois", "129 $ USD", "Gratuit*", "99 $ USD"],
                  ["Bilingue FR / EN", "Oui", "Oui", "Non", "Non"],
                  ["Stripe en direct", "Oui", "Non", "Sous-compte", "Oui"],
                  ["Features CrossFit", "Oui", "Non", "Oui", "Partiel"],
                  ["Sans contrat long terme", "Oui", "Non · 12 mois", "Oui", "Oui"],
                ].map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 500 }}>{row[0]}</td>
                    {row.slice(1).map((v, j) => (
                      <td key={j} style={{ fontWeight: j === 0 ? 600 : 400, color: j === 0 ? "var(--text)" : "var(--text-3)" }}>
                        {v === "Oui" ? <span className="badge success" style={{ fontSize: 11 }}><Icon name="check" size={10} />Oui</span>
                          : v === "Non" || v.startsWith("Non ") ? <span className="badge" style={{ fontSize: 11 }}>{v}</span>
                          : v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ fontSize: 12, color: "var(--text-4)", marginTop: 12, fontStyle: "italic" }}>
            * Plans gratuits souvent assortis de frais de transaction plus élevés.
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "100px 48px", textAlign: "center" }}>
        <h2 style={{ fontSize: 44, fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "-0.03em", margin: "0 0 16px", maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
          Prêt à voir votre box en action ?
        </h2>
        <p style={{ fontSize: 17, color: "var(--text-2)", margin: "0 auto 32px", maxWidth: 520 }}>
          Ouvrez la démo du dashboard — tout est chargé avec des données fictives d'un vrai box.
        </p>
        <button className="btn primary" style={{ height: 46, padding: "0 22px", fontSize: 15 }} onClick={onEnter}>
          Ouvrir la démo <Icon name="arrowRight" size={14} />
        </button>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid var(--border)", padding: "32px 48px", maxWidth: 1160, margin: "0 auto", display: "flex", alignItems: "center", gap: 16, fontSize: 13, color: "var(--text-3)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600, color: "var(--text)" }}>
          <div style={{ width: 18, height: 18, borderRadius: 4, background: "var(--accent)", color: "#fff", display: "grid", placeItems: "center", fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700 }}>B</div>
          Boxflow
        </div>
        <span>© 2026 · Québec, Canada</span>
        <div style={{ flex: 1 }} />
        <span>Confidentialité</span>
        <span>Conditions</span>
        <span>Statut</span>
      </div>
    </div>
  );
}

// ==================== App membre mockup (iPhone-ish) ====================
export function MemberApp() {
  return (
    <div className="content" style={{ background: "var(--bg-sunken)" }}>
      <div className="page-head">
        <div>
          <h1>App membre</h1>
          <div className="sub">Aperçu responsive · iOS natif SwiftUI en production · version web pour rétro-compatibilité</div>
        </div>
        <div className="actions">
          <button className="btn"><Icon name="download" />App Store</button>
          <button className="btn primary"><Icon name="megaphone" />Envoyer le lien</button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, justifyItems: "center" }}>
        {/* Phone 1 — Home */}
        <Phone title="Accueil">
          <div style={{ padding: "16px 18px 10px" }}>
            <div style={{ fontSize: 11, color: "#777", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>Vendredi 17 avril</div>
            <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.02em", marginTop: 4 }}>Salut Mathieu 👋</div>
          </div>
          <div style={{ margin: "0 14px", padding: 16, borderRadius: 14, background: "#111", color: "#fff" }}>
            <div style={{ fontSize: 10, color: "#d97757", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>WOD du jour</div>
            <div style={{ fontSize: 28, fontFamily: "var(--font-display)", fontWeight: 500, marginTop: 4 }}>Diane</div>
            <div style={{ fontSize: 12, color: "#999", marginTop: 2 }}>21-15-9 · DL + HSPU · 10 min cap</div>
            <button style={{ marginTop: 14, width: "100%", background: "#d97757", color: "#fff", border: 0, borderRadius: 10, padding: "10px 0", fontWeight: 600, fontSize: 13 }}>
              Voir le WOD →
            </button>
          </div>
          <div style={{ padding: "18px 18px 0" }}>
            <div style={{ fontSize: 11, color: "#777", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginBottom: 10 }}>Prochains cours</div>
            {[{ t: "17:00", n: "WOD PM", cap: "20/20", full: true }, { t: "18:00", n: "WOD PM", cap: "17/20" }].map((c, i) => (
              <div key={i} style={{ display: "flex", gap: 12, padding: "10px 0", borderTop: i === 0 ? "0" : "1px solid #eee" }}>
                <div style={{ fontSize: 14, fontWeight: 600, fontFamily: "var(--font-mono)", color: "#d97757", minWidth: 44 }}>{c.t}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{c.n}</div>
                  <div style={{ fontSize: 11, color: "#888" }}>Alex · {c.cap}</div>
                </div>
                {c.full
                  ? <span style={{ fontSize: 10, padding: "3px 8px", borderRadius: 999, background: "#fde7d7", color: "#b04b1a", fontWeight: 600 }}>Complet</span>
                  : <button style={{ fontSize: 11, padding: "4px 10px", borderRadius: 999, background: "#111", color: "#fff", border: 0, fontWeight: 600 }}>Réserver</button>
                }
              </div>
            ))}
          </div>
        </Phone>

        {/* Phone 2 — WOD */}
        <Phone title="WOD">
          <div style={{ padding: "16px 18px" }}>
            <div style={{ fontSize: 10, color: "#777", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>Benchmark</div>
            <div style={{ fontSize: 36, fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "-0.02em", marginTop: 4 }}>Diane</div>
            <div style={{ fontSize: 12, color: "#999", marginTop: 2 }}>21-15-9 · For time · 10 min cap</div>
          </div>
          <div style={{ margin: "0 14px", padding: 14, borderRadius: 12, background: "#f6f3ef", border: "1px solid #eee" }}>
            <div style={{ fontSize: 10, color: "#b04b1a", letterSpacing: "0.1em", fontWeight: 700, textTransform: "uppercase" }}>Rx</div>
            <div style={{ fontSize: 13, marginTop: 6, lineHeight: 1.6 }}>
              <div><span style={{ color: "#aaa" }}>—</span> Deadlift 102 kg</div>
              <div><span style={{ color: "#aaa" }}>—</span> Handstand push-up</div>
            </div>
          </div>
          <div style={{ padding: "14px 18px 0" }}>
            <div style={{ fontSize: 11, color: "#777", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginBottom: 10 }}>Top 3 aujourd'hui</div>
            {[
              { n: "Samuel C.", s: "4:12", pr: true },
              { n: "Alex (coach)", s: "4:38" },
              { n: "Camille L.", s: "5:02" },
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderTop: i === 0 ? 0 : "1px solid #eee" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#999", width: 16 }}>{i + 1}</span>
                <span style={{ flex: 1, fontSize: 13, fontWeight: 500 }}>{r.n}</span>
                {r.pr && <span style={{ fontSize: 9, padding: "2px 6px", background: "#d97757", color: "#fff", borderRadius: 4, fontWeight: 700 }}>PR</span>}
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600 }}>{r.s}</span>
              </div>
            ))}
          </div>
          <div style={{ padding: 18 }}>
            <button style={{ width: "100%", background: "#d97757", color: "#fff", border: 0, borderRadius: 10, padding: "12px 0", fontWeight: 600, fontSize: 13 }}>
              Enregistrer mon score
            </button>
          </div>
        </Phone>

        {/* Phone 3 — Profil */}
        <Phone title="Profil">
          <div style={{ padding: "20px 18px 10px", textAlign: "center" }}>
            <div style={{ width: 64, height: 64, borderRadius: 999, background: "#fde7d7", color: "#b04b1a", fontWeight: 700, fontSize: 22, display: "inline-grid", placeItems: "center", fontFamily: "var(--font-mono)" }}>MP</div>
            <div style={{ fontSize: 18, fontWeight: 600, marginTop: 10 }}>Mathieu Paquet</div>
            <div style={{ fontSize: 12, color: "#999" }}>Membre depuis mars 2024 · série 14 j 🔥</div>
          </div>
          <div style={{ margin: "12px 14px", display: "grid", gridTemplateColumns: "1fr 1fr", border: "1px solid #eee", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: 12, borderRight: "1px solid #eee" }}>
              <div style={{ fontSize: 10, color: "#999", textTransform: "uppercase" }}>Visites (30j)</div>
              <div style={{ fontSize: 20, fontWeight: 600, fontFamily: "var(--font-mono)" }}>18</div>
            </div>
            <div style={{ padding: 12 }}>
              <div style={{ fontSize: 10, color: "#999", textTransform: "uppercase" }}>PR ce mois</div>
              <div style={{ fontSize: 20, fontWeight: 600, fontFamily: "var(--font-mono)" }}>3</div>
            </div>
          </div>
          <div style={{ padding: "8px 18px" }}>
            <div style={{ fontSize: 11, color: "#777", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginBottom: 8 }}>Abonnement</div>
            <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 500 }}>Illimité</span>
                <span style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>189 $ / mois</span>
              </div>
              <div style={{ fontSize: 11, color: "#999", marginTop: 4 }}>Prochain paiement le 1 mai · visa •• 4242</div>
              <button style={{ marginTop: 10, width: "100%", background: "#f6f3ef", border: 0, borderRadius: 8, padding: "8px 0", fontSize: 12, fontWeight: 500 }}>
                Gérer l'abonnement
              </button>
            </div>
          </div>
        </Phone>
      </div>
    </div>
  );
}

function Phone({ title, children }) {
  return (
    <div>
      <div style={{ fontSize: 11, color: "var(--text-4)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, textAlign: "center", marginBottom: 12, fontFamily: "var(--font-mono)" }}>{title}</div>
      <div style={{
        width: 300, height: 600,
        background: "#fff",
        borderRadius: 40,
        border: "10px solid #1a1a1a",
        boxShadow: "0 30px 60px -20px rgba(0,0,0,0.3), 0 20px 40px -15px rgba(0,0,0,0.2)",
        overflow: "hidden",
        position: "relative",
        color: "#111",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 24px 0", fontSize: 11, fontWeight: 600, color: "#111" }}>
          <span>9:41</span>
          <span style={{ display: "flex", gap: 4 }}>
            <span>􀙇</span><span>􀛨</span><span>􀛪</span>
          </span>
        </div>
        <div style={{ paddingTop: 4 }}>{children}</div>
      </div>
    </div>
  );
}

