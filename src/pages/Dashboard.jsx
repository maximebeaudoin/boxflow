// Boxflow — Dashboard page
import React from "react";
import Icon, { ICONS } from "../Icon.jsx";
import { DATA } from "../data.jsx";

export function Sparkline({ data, color = "var(--accent)", width = 120, height = 32 }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = width / (data.length - 1);
  const points = data.map((v, i) => `${i * step},${height - ((v - min) / range) * (height - 4) - 2}`).join(" ");
  return (
    <svg width={width} height={height} style={{ display: "block" }}>
      <polyline fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" points={points} />
      <circle cx={width} cy={height - ((data[data.length - 1] - min) / range) * (height - 4) - 2} r="2.5" fill={color} />
    </svg>
  );
}

export default function Dashboard({ onGoOnboarding }) {
  const { ACTIVITY, CLASSES_WEEK } = DATA;
  const todayClasses = CLASSES_WEEK.filter((c) => c.day === 4).sort((a, b) => a.start - b.start);

  return (
    <div className="content">
      <div className="page-head">
        <div>
          <div className="muted" style={{ fontSize: "var(--fs-sm)", marginBottom: 4 }}>Vendredi 17 avril 2026</div>
          <h1>Bonjour, Marie-Pier</h1>
          <div className="sub">Voici ce qui se passe à CrossFit Québec aujourd'hui.</div>
        </div>
        <div className="actions">
          <button className="btn" onClick={onGoOnboarding}><Icon name="sparkle" size={12} />Relancer l'onboarding</button>
          <button className="btn"><Icon name="download" />Exporter</button>
          <button className="btn primary"><Icon name="plus" />Nouveau membre</button>
        </div>
      </div>

      <div className="stat-row" style={{ marginBottom: "var(--sp-6)" }}>
        <div className="stat">
          <div className="label">Revenu récurrent (MRR)</div>
          <div className="value">38 412 <span style={{ fontSize: "var(--fs-xl)", color: "var(--text-3)" }}>$</span></div>
          <div className="delta up"><Icon name="arrowUp" size={12} />4,2% ce mois</div>
          <div className="spark"><Sparkline data={[32,33,34,35,34,36,37,38,38.4]} color="var(--success)" /></div>
        </div>
        <div className="stat">
          <div className="label">Membres actifs</div>
          <div className="value">247</div>
          <div className="delta up"><Icon name="arrowUp" size={12} />+12 ce mois</div>
          <div className="spark"><Sparkline data={[220,225,228,230,233,238,242,245,247]} /></div>
        </div>
        <div className="stat">
          <div className="label">Réservations aujourd'hui</div>
          <div className="value">94<span style={{ fontSize: "var(--fs-lg)", color: "var(--text-4)" }}>/105</span></div>
          <div className="delta muted">89% de capacité</div>
          <div className="spark"><Sparkline data={[65,78,82,75,88,92,94]} color="var(--info)" /></div>
        </div>
        <div className="stat">
          <div className="label">Taux de rétention</div>
          <div className="value">94,3<span style={{ fontSize: "var(--fs-xl)", color: "var(--text-3)" }}>%</span></div>
          <div className="delta up"><Icon name="arrowUp" size={12} />+0,8 pt</div>
          <div className="spark"><Sparkline data={[92,92.5,93,93.2,93.5,93.8,94,94.1,94.3]} color="var(--success)" /></div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "var(--sp-5)" }}>
        <div className="card">
          <div className="card-head">
            <div>
              <h3>Cours du jour</h3>
              <div className="sub">Vendredi 17 avril • 5 cours programmés</div>
            </div>
            <button className="btn sm ghost">Voir le calendrier <Icon name="chevronRight" size={12} /></button>
          </div>
          <div className="card-body flush">
            {todayClasses.map((c, i) => {
              const pct = (c.booked / c.cap) * 100;
              const now = 12; // fake current hour
              const isPast = c.end <= now;
              const isNow = c.start <= now && c.end > now;
              return (
                <div key={i} style={{
                  display: "grid",
                  gridTemplateColumns: "60px 1fr auto auto",
                  alignItems: "center",
                  gap: "var(--sp-4)",
                  padding: "14px 20px",
                  borderBottom: i < todayClasses.length - 1 ? "1px solid var(--border)" : 0,
                  opacity: isPast ? 0.55 : 1,
                }}>
                  <div className="mono" style={{ fontSize: "var(--fs-sm)", color: "var(--text-3)", fontVariantNumeric: "tabular-nums" }}>
                    {String(c.start).padStart(2,"0")}:00
                  </div>
                  <div>
                    <div style={{ fontWeight: 500, display: "flex", alignItems: "center", gap: 8 }}>
                      {c.name}
                      {isNow && <span className="badge accent"><span className="dot" />en cours</span>}
                      {c.full && <span className="badge warning">complet</span>}
                    </div>
                    <div className="muted" style={{ fontSize: "var(--fs-sm)" }}>Coach {c.coach}</div>
                  </div>
                  <div style={{ width: 120 }}>
                    <div className="progress" style={{ marginBottom: 4 }}>
                      <div style={{ width: `${pct}%`, background: c.full ? "var(--warning)" : "var(--accent)" }} />
                    </div>
                    <div className="num" style={{ fontSize: "var(--fs-sm)", color: "var(--text-3)", textAlign: "right" }}>
                      {c.booked}/{c.cap}
                    </div>
                  </div>
                  <button className="btn sm ghost icon-only"><Icon name="chevronRight" size={14} /></button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="card">
          <div className="card-head">
            <div>
              <h3>Activité</h3>
              <div className="sub">Temps réel • 2 dernières heures</div>
            </div>
            <button className="btn sm ghost icon-only"><Icon name="more" size={14} /></button>
          </div>
          <div className="card-body" style={{ paddingTop: 8, paddingBottom: 8 }}>
            {ACTIVITY.map((a, i) => {
              const col = {
                pay: "var(--success)", fail: "var(--danger)", pr: "var(--accent)",
                join: "var(--info)", book: "var(--text-2)", pause: "var(--warning)",
              }[a.type];
              const bg = {
                pay: "var(--success-soft)", fail: "var(--danger-soft)", pr: "var(--accent-soft)",
                join: "var(--info-soft)", book: "var(--surface-2)", pause: "var(--warning-soft)",
              }[a.type];
              return (
                <div key={i} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: i < ACTIVITY.length - 1 ? "1px solid var(--border)" : 0 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "var(--r-2)", background: bg, color: col, display: "grid", placeItems: "center", flexShrink: 0 }}>
                    <Icon name={a.icon} size={14} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "var(--fs-base)", fontWeight: 500, lineHeight: 1.3 }}>{a.text}</div>
                    <div className="muted" style={{ fontSize: "var(--fs-sm)", lineHeight: 1.3 }}>{a.meta}</div>
                  </div>
                  <div className="dim" style={{ fontSize: "var(--fs-xs)", whiteSpace: "nowrap" }}>{a.time}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "var(--sp-5)", marginTop: "var(--sp-5)" }}>
        <div className="card">
          <div className="card-head"><h3>Prochains paiements</h3></div>
          <div className="card-body" style={{ paddingTop: 0 }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--border)" }}>
              <div>
                <div style={{ fontWeight: 500 }}>Lundi 20 avril</div>
                <div className="muted" style={{ fontSize: "var(--fs-sm)" }}>Renouvellements mensuels</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div className="num" style={{ fontWeight: 600 }}>12 480 $</div>
                <div className="muted" style={{ fontSize: "var(--fs-sm)" }}>68 membres</div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--border)" }}>
              <div>
                <div style={{ fontWeight: 500 }}>Mardi 21 avril</div>
                <div className="muted" style={{ fontSize: "var(--fs-sm)" }}>Renouvellements mensuels</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div className="num" style={{ fontWeight: 600 }}>8 317 $</div>
                <div className="muted" style={{ fontSize: "var(--fs-sm)" }}>44 membres</div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0" }}>
              <div>
                <div style={{ fontWeight: 500, display: "flex", alignItems: "center", gap: 6 }}>
                  1 carte expirée
                  <span className="badge danger">action requise</span>
                </div>
                <div className="muted" style={{ fontSize: "var(--fs-sm)" }}>Nicolas Dubé</div>
              </div>
              <button className="btn sm">Voir</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-head"><h3>Répartition des plans</h3></div>
          <div className="card-body">
            {DATA.PLANS.map((p, i) => {
              const total = DATA.PLANS.reduce((s, x) => s + x.members, 0);
              const pct = (p.members / total) * 100;
              return (
                <div key={i} style={{ marginBottom: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--fs-sm)", marginBottom: 4 }}>
                    <span style={{ fontWeight: 500 }}>{p.name}</span>
                    <span className="num muted">{p.members} • {pct.toFixed(0)}%</span>
                  </div>
                  <div className="progress">
                    <div style={{ width: `${pct}%`, background: i === 0 ? "var(--accent)" : i === 1 ? "var(--info)" : i === 2 ? "var(--text-3)" : "var(--warning)" }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="card">
          <div className="card-head"><h3>Statut Stripe</h3></div>
          <div className="card-body">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: "var(--r-2)", background: "oklch(48% 0.2 275)", color: "#fff", display: "grid", placeItems: "center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={ICONS.stripe} /></svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500 }}>Votre compte</div>
                <div className="muted" style={{ fontSize: "var(--fs-sm)" }}>acct_1NkQ…W2Pz</div>
              </div>
              <span className="badge success"><span className="dot" />actif</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderTop: "1px solid var(--border)", fontSize: "var(--fs-sm)" }}>
              <span className="muted">Solde disponible</span>
              <span className="num" style={{ fontWeight: 500 }}>14 228,42 $</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderTop: "1px solid var(--border)", fontSize: "var(--fs-sm)" }}>
              <span className="muted">Prochain versement</span>
              <span style={{ fontWeight: 500 }}>Lundi 20 avril</span>
            </div>
            <button className="btn" style={{ width: "100%", marginTop: 12 }}>
              Ouvrir Stripe <Icon name="external" size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
