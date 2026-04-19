// Boxflow — Calendrier / Cours (vue semaine)
import React from "react";
import Icon from "../Icon.jsx";
import { DATA } from "../data.jsx";

export default function Calendar({ onOpenClass }) {
  const { CLASSES_WEEK } = DATA;
  const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  const dates = [13, 14, 15, 16, 17, 18, 19];
  const hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const todayIdx = 4; // vendredi

  return (
    <div className="content">
      <div className="page-head">
        <div>
          <h1>Calendrier</h1>
          <div className="sub">Semaine du 13 au 19 avril · 23 cours programmés · 294 réservations</div>
        </div>
        <div className="actions">
          <button className="btn"><Icon name="download" />Exporter</button>
          <button className="btn"><Icon name="calendar" />Publier la programmation</button>
          <button className="btn primary"><Icon name="plus" />Nouveau cours</button>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <div className="row" style={{ gap: 4 }}>
          <button className="btn sm icon-only"><Icon name="chevronLeft" size={14} /></button>
          <button className="btn sm">Aujourd'hui</button>
          <button className="btn sm icon-only"><Icon name="chevronRight" size={14} /></button>
        </div>
        <div style={{ fontWeight: 600, fontSize: "var(--fs-md)", letterSpacing: "-0.01em" }}>Avril 2026</div>
        <div style={{ flex: 1 }} />
        <div className="seg">
          <button>Jour</button>
          <button className="active">Semaine</button>
          <button>Mois</button>
        </div>
        <div className="seg">
          <button className="active">Tous les coachs</button>
          <button>Alex</button>
          <button>Janie</button>
          <button>Marc</button>
        </div>
      </div>

      <div className="calendar" style={{ gridTemplateRows: `auto repeat(${hours.length}, 64px)` }}>
        <div className="cal-hcell" />
        {days.map((d, i) => (
          <div key={i} className="cal-hcell day" style={{ background: i === todayIdx ? "var(--accent-soft)" : "" }}>
            <span className="dow" style={{ color: i === todayIdx ? "var(--accent-text)" : "" }}>{d}</span>
            <span className={`date ${i === todayIdx ? "today" : ""}`}>{dates[i]}</span>
          </div>
        ))}
        {hours.map((h, hi) => (
          <React.Fragment key={h}>
            <div className="cal-time">{String(h).padStart(2, "0")}:00</div>
            {days.map((_, di) => {
              const cls = CLASSES_WEEK.find((c) => c.day === di && c.start === h);
              return (
                <div key={di} className="cal-cell" style={{ background: di === todayIdx ? "color-mix(in oklch, var(--accent-soft) 20%, transparent)" : "" }}>
                  {cls && (
                    <div onClick={onOpenClass} className={`cls-block ${cls.full ? "full" : ""} ${cls.empty ? "empty" : ""}`} style={{ top: 3, bottom: 3, cursor: "pointer" }}>
                      <div className="t">{String(cls.start).padStart(2, "0")}:00</div>
                      <div className="n">{cls.name}</div>
                      <div className="c">{cls.coach} · {cls.booked}/{cls.cap}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>

      <div style={{ display: "flex", gap: 20, marginTop: 16, fontSize: "var(--fs-sm)", color: "var(--text-3)" }}>
        <div className="row"><div style={{ width: 10, height: 10, borderLeft: "3px solid var(--accent)", background: "var(--accent-soft)" }} /> Places disponibles</div>
        <div className="row"><div style={{ width: 10, height: 10, borderLeft: "3px solid var(--warning)", background: "var(--warning-soft)" }} /> Complet · liste d'attente</div>
        <div className="row"><div style={{ width: 10, height: 10, borderLeft: "3px solid var(--text-4)", background: "var(--bg-sunken)" }} /> Faible affluence</div>
      </div>
    </div>
  );
}
