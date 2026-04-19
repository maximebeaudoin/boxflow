// Boxflow — Sidebar + Topbar
import React from "react";
import Icon from "./Icon.jsx";

export function Sidebar({ active, onNav }) {
  const nav = [
    { section: "Atelier", items: [
      { id: "dashboard", label: "Vue d'ensemble", icon: "home" },
      { id: "calendrier", label: "Calendrier", icon: "calendar", count: "12" },
      { id: "wod", label: "WOD du jour", icon: "dumbbell" },
      { id: "membres", label: "Membres", icon: "users", count: "247" },
    ]},
    { section: "Revenus", items: [
      { id: "abonnements", label: "Abonnements", icon: "card" },
      { id: "paiements", label: "Paiements", icon: "dollar" },
      { id: "rapports", label: "Rapports", icon: "chart" },
    ]},
    { section: "Box", items: [
      { id: "member", label: "Espace membre", icon: "users" },
      { id: "marketing", label: "Site public", icon: "globe" },
      { id: "roadmap", label: "Roadmap", icon: "map" },
      { id: "reglages", label: "App membre", icon: "settings" },
    ]},
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="logo-mark">B</div>
        <span>Boxflow</span>
        <span className="kbd" style={{ marginLeft: "auto" }}>⌘K</span>
      </div>

      <div className="sidebar-box-switcher">
        <div className="box-avatar">CFQ</div>
        <div className="box-name">
          <div className="name">CrossFit Québec</div>
          <div className="sub">Québec, QC</div>
        </div>
        <Icon name="chevronDown" size={14} style={{ color: "var(--text-4)" }} />
      </div>

      {nav.map((g) => (
        <div className="sidebar-section" key={g.section}>
          <div className="sidebar-label">{g.section}</div>
          {g.items.map((it) => (
            <div
              key={it.id}
              className={`nav-item ${active === it.id ? "active" : ""}`}
              onClick={() => onNav(it.id)}
            >
              <Icon name={it.icon} />
              <span>{it.label}</span>
              {it.count && <span className="count">{it.count}</span>}
            </div>
          ))}
        </div>
      ))}

      <div className="sidebar-footer">
        <div className="dot" />
        <span>Tous les systèmes opérationnels</span>
      </div>
    </aside>
  );
}

export function Topbar({ crumbs = [], right }) {
  return (
    <div className="topbar">
      <div className="crumbs">
        {crumbs.map((c, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span className="sep">/</span>}
            <span className={i === crumbs.length - 1 ? "current" : ""}>{c}</span>
          </React.Fragment>
        ))}
      </div>
      <div className="spacer" />
      <div className="search">
        <Icon name="search" size={14} className="search-icon" style={{ color: "var(--text-4)" }} />
        <input placeholder="Rechercher membres, cours, factures…" />
        <span className="kbd">/</span>
      </div>
      <button className="btn ghost icon-only" title="Notifications">
        <Icon name="bell" />
      </button>
      <div className="avatar" style={{ background: "var(--accent-soft)", color: "var(--accent-text)", borderColor: "transparent" }}>MP</div>
    </div>
  );
}
