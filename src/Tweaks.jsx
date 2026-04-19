// Boxflow — Tweaks panel
import React from "react";
import Icon from "./Icon.jsx";

export default function Tweaks({ state, onChange, onClose }) {
  const set = (k, v) => onChange({ ...state, [k]: v });

  return (
    <div className="tweaks">
      <div className="tweaks-head">
        <span className="title">Tweaks</span>
        <button className="btn sm ghost icon-only" onClick={onClose}><Icon name="x" size={14} /></button>
      </div>
      <div className="tweaks-body">
        <div className="tweak-row">
          <div className="label">Direction</div>
          <div className="seg">
            <button className={state.direction === "a" ? "active" : ""} onClick={() => set("direction", "a")}>A · Atelier</button>
            <button className={state.direction === "b" ? "active" : ""} onClick={() => set("direction", "b")}>B · Opérateur</button>
          </div>
          <div style={{ fontSize: 11, color: "var(--text-4)", marginTop: 2 }}>
            {state.direction === "a"
              ? "Neutre chaud, orange brûlé, serif éditorial"
              : "Neutre froid, vert forêt, sans-serif géométrique"}
          </div>
        </div>

        <div className="tweak-row">
          <div className="label">Thème</div>
          <div className="seg">
            <button className={state.theme === "light" ? "active" : ""} onClick={() => set("theme", "light")}>Clair</button>
            <button className={state.theme === "dark" ? "active" : ""} onClick={() => set("theme", "dark")}>Sombre</button>
          </div>
        </div>

        <div className="tweak-row">
          <div className="label">Densité</div>
          <div className="seg">
            <button className={state.density === "compact" ? "active" : ""} onClick={() => set("density", "compact")}>Compact</button>
            <button className={state.density === "normal" ? "active" : ""} onClick={() => set("density", "normal")}>Normal</button>
            <button className={state.density === "cozy" ? "active" : ""} onClick={() => set("density", "cozy")}>Confortable</button>
          </div>
        </div>

        <div className="tweak-row">
          <div className="label">Rayons</div>
          <div className="seg">
            <button className={state.radius === "sharp" ? "active" : ""} onClick={() => set("radius", "sharp")}>Carré</button>
            <button className={state.radius === "normal" ? "active" : ""} onClick={() => set("radius", "normal")}>Normal</button>
            <button className={state.radius === "round" ? "active" : ""} onClick={() => set("radius", "round")}>Arrondi</button>
          </div>
        </div>

        <div className="tweak-row">
          <div className="label">Langue</div>
          <div className="seg">
            <button className={state.lang === "fr" ? "active" : ""} onClick={() => set("lang", "fr")}>FR</button>
            <button className={state.lang === "en" ? "active" : ""} onClick={() => set("lang", "en")}>EN</button>
          </div>
        </div>
      </div>
    </div>
  );
}
