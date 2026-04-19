// Boxflow — Espace membre web (parallèle à l'app iOS)
// Un layout à part du dashboard admin: header minimal, contenu centré.
import React from "react";
import Icon from "../Icon.jsx";
import { DATA } from "../data.jsx";

export function MemberShell({ page, onNav, children }) {
  const nav = [
    { id: "m-home", label: "Accueil" },
    { id: "m-book", label: "Réserver" },
    { id: "m-bookings", label: "Mes cours" },
    { id: "m-prs", label: "Mes records" },
    { id: "m-billing", label: "Abonnement" },
  ];
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", display: "flex", flexDirection: "column" }}>
      <div style={{ borderBottom: "1px solid var(--border)", background: "var(--bg)", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "14px 32px", display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 600 }}>
            <div style={{ width: 22, height: 22, borderRadius: "var(--r-2)", background: "var(--accent)", color: "#fff", display: "grid", placeItems: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13 }}>B</div>
            <span>Boxflow</span>
            <span className="dim" style={{ fontSize: 13, marginLeft: 4 }}>· CrossFit Québec</span>
          </div>
          <div style={{ display: "flex", gap: 4, marginLeft: 20 }}>
            {nav.map((n) => (
              <div key={n.id}
                onClick={() => onNav(n.id)}
                style={{
                  padding: "6px 12px",
                  borderRadius: "var(--r-2)",
                  fontSize: 14,
                  cursor: "pointer",
                  fontWeight: page === n.id ? 500 : 400,
                  color: page === n.id ? "var(--text)" : "var(--text-3)",
                  background: page === n.id ? "var(--surface-2)" : "transparent",
                }}>
                {n.label}
              </div>
            ))}
          </div>
          <div style={{ flex: 1 }} />
          <button className="btn ghost icon-only"><Icon name="bell" /></button>
          <div className="avatar" style={{ background: "var(--accent-soft)", color: "var(--accent-text)", borderColor: "transparent" }}>MP</div>
          <button className="btn sm ghost" onClick={() => onNav("__back")}><Icon name="chevronLeft" size={12} /> Admin</button>
        </div>
      </div>
      <div style={{ flex: 1, maxWidth: 1160, width: "100%", margin: "0 auto", padding: "40px 32px 80px" }}>
        {children}
      </div>
    </div>
  );
}

// ================= HOME =================
export function MemberHome({ onNav }) {
  const { WOD_TODAY } = DATA;
  return (
    <>
      <div style={{ marginBottom: 32 }}>
        <div className="muted mono" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Vendredi 17 avril</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 44, fontWeight: 500, letterSpacing: "-0.03em", margin: "0 0 8px" }}>
          Salut Mathieu 👋
        </h1>
        <div className="muted" style={{ fontSize: 16 }}>14 jours d'affilée 🔥 · prochain cours à 17h</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 20, marginBottom: 20 }}>
        {/* WOD card - big */}
        <div style={{ background: "#111", color: "#fff", borderRadius: "var(--r-4)", padding: 32, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 80% 20%, color-mix(in oklch, var(--accent) 40%, transparent), transparent 60%)", pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <div style={{ fontSize: 11, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700 }}>WOD du jour · Benchmark</div>
            <div style={{ fontSize: 64, fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "-0.035em", marginTop: 8, lineHeight: 1 }}>Diane</div>
            <div style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>21-15-9 · Deadlift 102 kg / HSPU · 10 min cap</div>

            <div style={{ display: "flex", gap: 24, marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Meilleur temps</div>
                <div className="num" style={{ fontSize: 22, fontWeight: 600, marginTop: 2 }}>4:12</div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Votre dernier</div>
                <div className="num" style={{ fontSize: 22, fontWeight: 600, marginTop: 2 }}>6:09</div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Ma dernière Diane</div>
                <div className="num" style={{ fontSize: 22, fontWeight: 600, marginTop: 2 }}>il y a 8 mois</div>
              </div>
            </div>
            <button className="btn primary" style={{ marginTop: 24 }} onClick={() => onNav("m-wod")}>
              Voir le WOD complet <Icon name="arrowRight" size={12} />
            </button>
          </div>
        </div>

        {/* Next class */}
        <div className="card">
          <div className="card-head"><h3>Votre prochain cours</h3></div>
          <div className="card-body">
            <div className="mono" style={{ fontSize: 11, color: "var(--text-4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Aujourd'hui</div>
            <div style={{ fontSize: 28, fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "-0.02em", marginTop: 4 }}>17:00 · WOD PM</div>
            <div className="muted" style={{ fontSize: 14, marginTop: 2 }}>Coach Alex · 20/20 places (complet)</div>
            <div style={{ marginTop: 14, padding: 10, background: "var(--warning-soft)", color: "var(--warning)", borderRadius: "var(--r-2)", fontSize: 13 }}>
              Vous êtes confirmé · annulation gratuite jusqu'à 15:00
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
              <button className="btn" style={{ flex: 1 }}>Annuler</button>
              <button className="btn" style={{ flex: 1 }} onClick={() => onNav("m-bookings")}>Toutes mes réservations</button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
        <div className="card">
          <div className="card-head"><h3>Ma série</h3></div>
          <div className="card-body">
            <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
              <span className="num" style={{ fontSize: 40, fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "-0.02em" }}>14</span>
              <span className="muted">jours</span>
            </div>
            <div className="muted" style={{ fontSize: 13 }}>record perso : 32 jours</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(14, 1fr)", gap: 3, marginTop: 14 }}>
              {Array.from({ length: 14 }).map((_, i) => (
                <div key={i} style={{ aspectRatio: "1", borderRadius: 3, background: i === 13 ? "var(--accent)" : "var(--accent-soft)" }} />
              ))}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-head"><h3>Visites ce mois</h3></div>
          <div className="card-body">
            <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
              <span className="num" style={{ fontSize: 40, fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "-0.02em" }}>18</span>
              <span className="muted">/ objectif 20</span>
            </div>
            <div className="muted" style={{ fontSize: 13 }}>+4 vs mois dernier</div>
            <div className="progress" style={{ marginTop: 14 }}>
              <div style={{ width: "90%" }} />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-head"><h3>Prochain paiement</h3></div>
          <div className="card-body">
            <div style={{ fontSize: 22, fontWeight: 600 }} className="num">189,00 $</div>
            <div className="muted" style={{ fontSize: 13 }}>le 1 mai · visa •• 4242</div>
            <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
              <button className="btn sm" style={{ flex: 1 }} onClick={() => onNav("m-billing")}>Gérer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ================= BOOK =================
export function MemberBook() {
  const [day, setDay] = React.useState(4);
  const hours = [6, 7, 9, 12, 17, 18, 19];
  const days = [
    { d: "Lun", n: 13 },{ d: "Mar", n: 14 },{ d: "Mer", n: 15 },{ d: "Jeu", n: 16 },
    { d: "Ven", n: 17 },{ d: "Sam", n: 18 },{ d: "Dim", n: 19 },
  ];

  const classesToday = DATA.CLASSES_WEEK.filter((c) => c.day === day).sort((a,b) => a.start - b.start);
  const [bookedIds, setBookedIds] = React.useState(new Set());

  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 500, letterSpacing: "-0.03em", margin: "0 0 6px" }}>Réserver un cours</h1>
        <div className="muted">Avril 2026 · annulation gratuite jusqu'à 2h avant</div>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 24, overflowX: "auto", paddingBottom: 4 }}>
        {days.map((d, i) => {
          const active = i === day;
          return (
            <button key={i} onClick={() => setDay(i)} style={{
              border: "1px solid var(--border)",
              background: active ? "var(--text)" : "var(--surface)",
              color: active ? "var(--bg)" : "var(--text)",
              borderRadius: "var(--r-3)",
              padding: "12px 0",
              width: 80,
              cursor: "pointer",
              textAlign: "center",
              flexShrink: 0,
            }}>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", opacity: 0.7, fontWeight: 600 }}>{d.d}</div>
              <div style={{ fontSize: 22, fontFamily: "var(--font-display)", fontWeight: 500, marginTop: 2 }}>{d.n}</div>
            </button>
          );
        })}
      </div>

      <div className="card">
        <div className="card-body flush">
          {classesToday.length === 0 && (
            <div style={{ padding: 40, textAlign: "center", color: "var(--text-3)" }}>Aucun cours programmé ce jour.</div>
          )}
          {classesToday.map((c, i) => {
            const id = `${c.day}-${c.start}`;
            const mine = bookedIds.has(id);
            const pct = (c.booked / c.cap) * 100;
            return (
              <div key={i} style={{
                padding: "20px 24px",
                borderBottom: i < classesToday.length - 1 ? "1px solid var(--border)" : 0,
                display: "grid",
                gridTemplateColumns: "90px 1fr 140px 140px",
                alignItems: "center",
                gap: 20,
              }}>
                <div>
                  <div className="num" style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.01em" }}>
                    {String(c.start).padStart(2, "0")}:00
                  </div>
                  <div className="muted" style={{ fontSize: 12 }}>1h</div>
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 500, display: "flex", alignItems: "center", gap: 8 }}>
                    {c.name}
                    {c.full && <span className="badge warning">complet</span>}
                    {mine && <span className="badge accent"><Icon name="check" size={10} />Réservé</span>}
                  </div>
                  <div className="muted" style={{ fontSize: 13, marginTop: 2 }}>Coach {c.coach}</div>
                </div>
                <div>
                  <div className="progress" style={{ marginBottom: 4 }}>
                    <div style={{ width: `${pct}%`, background: c.full ? "var(--warning)" : "var(--accent)" }} />
                  </div>
                  <div className="num muted" style={{ fontSize: 12 }}>{c.booked}/{c.cap} réservations</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  {mine ? (
                    <button className="btn" onClick={() => {
                      const s = new Set(bookedIds); s.delete(id); setBookedIds(s);
                    }}>Annuler</button>
                  ) : c.full ? (
                    <button className="btn" onClick={() => {
                      const s = new Set(bookedIds); s.add(id); setBookedIds(s);
                    }}>Liste d'attente</button>
                  ) : (
                    <button className="btn primary" onClick={() => {
                      const s = new Set(bookedIds); s.add(id); setBookedIds(s);
                    }}>Réserver</button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// ================= BOOKINGS =================
export function MemberBookings() {
  const upcoming = [
    { date: "Aujourd'hui · 17:00", name: "WOD PM", coach: "Alex", status: "confirmé" },
    { date: "Sam 18 avr · 09:00", name: "Team WOD", coach: "Alex", status: "confirmé" },
    { date: "Lun 20 avr · 12:00", name: "WOD Midi", coach: "Janie", status: "liste d'attente", waitPos: 2 },
  ];
  const history = [
    { date: "Jeu 16 avr · 18:00", name: "WOD PM", coach: "Alex", status: "présent" },
    { date: "Mer 15 avr · 17:00", name: "WOD PM", coach: "Marc", status: "présent" },
    { date: "Mar 14 avr · 06:00", name: "WOD AM", coach: "Janie", status: "présent" },
    { date: "Dim 12 avr · 10:00", name: "Open Gym", coach: "—", status: "no-show" },
    { date: "Ven 10 avr · 17:00", name: "WOD PM", coach: "Alex", status: "présent" },
  ];

  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 500, letterSpacing: "-0.03em", margin: "0 0 6px" }}>Mes cours</h1>
        <div className="muted">3 réservations à venir · 42 cours ce trimestre</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 20 }}>
        <div className="card">
          <div className="card-head"><h3>À venir</h3></div>
          <div className="card-body flush">
            {upcoming.map((b, i) => (
              <div key={i} style={{ padding: "16px 20px", borderBottom: i < upcoming.length - 1 ? "1px solid var(--border)" : 0, display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: "var(--r-2)", background: b.status === "liste d'attente" ? "var(--warning-soft)" : "var(--accent-soft)", color: b.status === "liste d'attente" ? "var(--warning)" : "var(--accent-text)", display: "grid", placeItems: "center" }}>
                  <Icon name="calendar" size={16} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 500 }}>{b.name}</div>
                  <div className="muted" style={{ fontSize: 13 }}>{b.date} · coach {b.coach}</div>
                </div>
                {b.status === "liste d'attente"
                  ? <span className="badge warning">Attente · #{b.waitPos}</span>
                  : <span className="badge success"><Icon name="check" size={10} />Confirmé</span>}
                <button className="btn sm ghost">Annuler</button>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-head"><h3>Résumé 30 jours</h3></div>
          <div className="card-body">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: "1px solid var(--border)", borderRadius: "var(--r-2)", overflow: "hidden" }}>
              <div style={{ padding: 14, borderRight: "1px solid var(--border)" }}>
                <div className="muted" style={{ fontSize: 12 }}>Présences</div>
                <div className="num" style={{ fontSize: 24, fontWeight: 600 }}>18</div>
              </div>
              <div style={{ padding: 14 }}>
                <div className="muted" style={{ fontSize: 12 }}>No-shows</div>
                <div className="num" style={{ fontSize: 24, fontWeight: 600 }}>1</div>
              </div>
              <div style={{ padding: 14, borderRight: "1px solid var(--border)", borderTop: "1px solid var(--border)" }}>
                <div className="muted" style={{ fontSize: 12 }}>Heures</div>
                <div className="num" style={{ fontSize: 24, fontWeight: 600 }}>19h</div>
              </div>
              <div style={{ padding: 14, borderTop: "1px solid var(--border)" }}>
                <div className="muted" style={{ fontSize: 12 }}>Coach favori</div>
                <div style={{ fontSize: 16, fontWeight: 500, marginTop: 4 }}>Alex</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 20 }}>
        <div className="card-head"><h3>Historique</h3></div>
        <div className="card-body flush">
          <table className="table">
            <thead><tr><th>Cours</th><th>Quand</th><th>Coach</th><th>Statut</th></tr></thead>
            <tbody>
              {history.map((h, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 500 }}>{h.name}</td>
                  <td className="muted">{h.date}</td>
                  <td className="muted">{h.coach}</td>
                  <td>
                    {h.status === "présent" && <span className="badge success"><Icon name="check" size={10} />Présent</span>}
                    {h.status === "no-show" && <span className="badge danger">No-show</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

// ================= PRS =================
export function MemberPrs() {
  const prs = [
    { name: "Back Squat", best: "145 kg", date: "12 avr", hist: [120,125,130,132,138,140,142,145] },
    { name: "Deadlift", best: "170 kg", date: "28 mars", hist: [140,150,155,158,162,165,168,170] },
    { name: "Clean & Jerk", best: "95 kg", date: "02 avr", hist: [75,80,82,85,88,90,92,95] },
    { name: "Snatch", best: "72 kg", date: "19 mars", hist: [55,60,62,65,68,70,71,72] },
    { name: "Fran", best: "3:42", date: "14 fév" },
    { name: "Grace", best: "2:58", date: "08 mars" },
    { name: "Murph", best: "42:18", date: "26 mai 25" },
    { name: "Diane", best: "5:12", date: "9 août 25" },
  ];

  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 500, letterSpacing: "-0.03em", margin: "0 0 6px" }}>Mes records</h1>
        <div className="muted">12 mouvements suivis · 3 nouveaux records ce mois</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 20 }}>
        {prs.slice(0, 4).map((p, i) => {
          const max = p.hist ? Math.max(...p.hist) : 100;
          const min = p.hist ? Math.min(...p.hist) : 0;
          const range = max - min || 1;
          return (
            <div key={i} className="card">
              <div className="card-body">
                <div className="muted" style={{ fontSize: 12, fontWeight: 500 }}>{p.name}</div>
                <div className="num" style={{ fontSize: 30, fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "-0.02em", marginTop: 4 }}>{p.best}</div>
                <div className="dim" style={{ fontSize: 12 }}>le {p.date}</div>
                {p.hist && (
                  <svg viewBox="0 0 100 30" style={{ width: "100%", height: 30, marginTop: 10, display: "block" }}>
                    <polyline fill="none" stroke="var(--accent)" strokeWidth="1.5"
                      points={p.hist.map((v, j) => `${(j/(p.hist.length-1))*100},${30 - ((v-min)/range)*26 - 2}`).join(" ")} />
                    <circle cx="100" cy={30 - ((p.hist[p.hist.length-1]-min)/range)*26 - 2} r="2" fill="var(--accent)" />
                  </svg>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="card">
        <div className="card-head"><h3>Tous les mouvements</h3></div>
        <div className="card-body flush">
          <table className="table">
            <thead><tr><th>Mouvement</th><th>Record</th><th>Date</th><th>Progression 90j</th></tr></thead>
            <tbody>
              {prs.map((p, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 500 }}>{p.name}</td>
                  <td className="num" style={{ fontWeight: 600 }}>{p.best}</td>
                  <td className="muted">{p.date}</td>
                  <td>
                    {p.hist ? (
                      <span className="delta up" style={{ fontSize: 12 }}>
                        <Icon name="arrowUp" size={10} /> +{p.hist[p.hist.length-1] - p.hist[0]} kg
                      </span>
                    ) : <span className="dim">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

// ================= BILLING =================
export function MemberBilling() {
  const invoices = [
    { d: "1 avr 2026", a: 189, s: "payée" },
    { d: "1 mars 2026", a: 189, s: "payée" },
    { d: "1 fév 2026", a: 189, s: "payée" },
    { d: "1 janv 2026", a: 189, s: "payée" },
    { d: "1 déc 2025", a: 189, s: "payée" },
  ];
  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 500, letterSpacing: "-0.03em", margin: "0 0 6px" }}>Mon abonnement</h1>
        <div className="muted">Géré directement via Stripe · vous pouvez mettre en pause à tout moment</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 20 }}>
        <div className="card">
          <div className="card-body">
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
              <div style={{ flex: 1 }}>
                <span className="badge accent">Plan actif</span>
                <div style={{ fontSize: 28, fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "-0.02em", marginTop: 8 }}>Illimité</div>
                <div className="muted" style={{ fontSize: 14, marginTop: 2 }}>Accès illimité à tous les cours et au gym ouvert</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 16 }}>
                  <span className="num" style={{ fontSize: 36, fontWeight: 500, fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>189</span>
                  <span className="muted">$ / mois · renouvelé le 1 mai</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 180 }}>
                <button className="btn">Changer de plan</button>
                <button className="btn">Mettre en pause</button>
                <button className="btn ghost" style={{ color: "var(--danger)" }}>Annuler</button>
              </div>
            </div>

            <div style={{ marginTop: 20, padding: 14, background: "var(--bg-sunken)", borderRadius: "var(--r-2)", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 38, height: 28, borderRadius: 4, background: "linear-gradient(135deg, #1a1f71 0%, #1a1f71 50%, #f79e1b 50%, #f79e1b 100%)" }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500 }} className="mono">Visa ••• 4242</div>
                <div className="muted" style={{ fontSize: 12 }}>Expire 12/28</div>
              </div>
              <button className="btn sm">Changer</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-head"><h3>Ce mois-ci</h3></div>
          <div className="card-body">
            <div style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 4 }}>Coût par visite à ce jour</div>
            <div className="num" style={{ fontSize: 30, fontWeight: 500, fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>10,50 $</div>
            <div className="muted" style={{ fontSize: 13 }}>189 $ ÷ 18 visites</div>
            <div style={{ marginTop: 20, padding: 12, background: "var(--success-soft)", color: "var(--success)", borderRadius: "var(--r-2)", fontSize: 13, lineHeight: 1.5 }}>
              Vous économisez ~260 $ / mois vs. tarif drop-in. Continuez comme ça !
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 20 }}>
        <div className="card-head">
          <h3>Historique des factures</h3>
          <button className="btn sm ghost"><Icon name="external" size={12} />Portail Stripe</button>
        </div>
        <div className="card-body flush">
          <table className="table">
            <thead><tr><th>Date</th><th>Description</th><th>Statut</th><th style={{ textAlign: "right" }}>Montant</th><th></th></tr></thead>
            <tbody>
              {invoices.map((inv, i) => (
                <tr key={i}>
                  <td>{inv.d}</td>
                  <td className="muted">Abonnement Illimité · mensuel</td>
                  <td><span className="badge success"><Icon name="check" size={10} />Payée</span></td>
                  <td className="num" style={{ textAlign: "right", fontWeight: 500 }}>{inv.a},00 $</td>
                  <td style={{ textAlign: "right" }}>
                    <button className="btn sm ghost"><Icon name="download" size={12} />PDF</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

