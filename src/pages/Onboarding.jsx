// Boxflow — Onboarding Stripe Connect (tunnel 5 étapes)
import React from "react";
import Icon from "../Icon.jsx";

export default function Onboarding({ onDone }) {
  const [step, setStep] = React.useState(1);
  const steps = [
    { n: 1, t: "Votre box" },
    { n: 2, t: "Horaires" },
    { n: 3, t: "Stripe Connect" },
    { n: 4, t: "Premier plan" },
    { n: 5, t: "Import membres" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-sunken)", display: "flex", flexDirection: "column" }}>
      {/* Top */}
      <div style={{ borderBottom: "1px solid var(--border)", background: "var(--bg)", padding: "14px 32px", display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 600 }}>
          <div style={{ width: 22, height: 22, borderRadius: "var(--r-2)", background: "var(--accent)", color: "#fff", display: "grid", placeItems: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13 }}>B</div>
          Boxflow
        </div>
        <span className="dim" style={{ fontSize: 13 }}>· Configuration initiale</span>
        <div style={{ flex: 1 }} />
        <button className="btn ghost sm" onClick={onDone}>Quitter l'onboarding</button>
      </div>

      {/* Progress */}
      <div style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)", padding: "20px 32px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", display: "flex", gap: 0 }}>
          {steps.map((s, i) => {
            const done = s.n < step;
            const active = s.n === step;
            return (
              <React.Fragment key={s.n}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, position: "relative" }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: 999,
                    background: done || active ? "var(--accent)" : "var(--surface-2)",
                    color: done || active ? "#fff" : "var(--text-3)",
                    display: "grid", placeItems: "center",
                    fontSize: 12, fontWeight: 600,
                    border: active ? "3px solid var(--accent-soft)" : "0",
                  }}>
                    {done ? <Icon name="check" size={14} /> : s.n}
                  </div>
                  <div style={{ fontSize: 12, marginTop: 8, fontWeight: active ? 600 : 400, color: active ? "var(--text)" : "var(--text-3)" }}>{s.t}</div>
                </div>
                {i < steps.length - 1 && (
                  <div style={{ flex: 1, height: 2, background: done ? "var(--accent)" : "var(--border)", marginTop: 13 }} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "40px 32px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
          {step === 5 && <Step5 />}
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "16px 32px", display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: 680, width: "100%", display: "flex", justifyContent: "space-between" }}>
          <button className="btn" disabled={step === 1} style={{ opacity: step === 1 ? 0.4 : 1 }} onClick={() => setStep(Math.max(1, step - 1))}>
            <Icon name="chevronLeft" size={12} /> Retour
          </button>
          <div className="muted" style={{ fontSize: 13, alignSelf: "center" }}>Étape {step} sur 5</div>
          {step < 5 ? (
            <button className="btn primary" onClick={() => setStep(step + 1)}>Continuer <Icon name="chevronRight" size={12} /></button>
          ) : (
            <button className="btn primary" onClick={onDone}>Terminer <Icon name="check" size={12} /></button>
          )}
        </div>
      </div>
    </div>
  );
}

export function Field({ label, hint, children }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 6 }}>{label}</div>
      {children}
      {hint && <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>{hint}</div>}
    </div>
  );
}

export function Input({ defaultValue, placeholder, suffix, type = "text" }) {
  return (
    <div style={{ position: "relative" }}>
      <input type={type} defaultValue={defaultValue} placeholder={placeholder}
        style={{
          width: "100%",
          padding: "10px 12px",
          fontSize: 14,
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--r-2)",
          outline: "none",
          color: "var(--text)",
          paddingRight: suffix ? 50 : 12,
        }} />
      {suffix && <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "var(--text-4)", fontSize: 13 }}>{suffix}</span>}
    </div>
  );
}

function Step1() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="muted mono" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Étape 1 / 5</div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 6px" }}>Parlez-nous de votre box</h2>
        <div className="muted" style={{ marginBottom: 24 }}>On utilise ces infos pour votre page publique et vos factures.</div>

        <Field label="Nom du box"><Input defaultValue="CrossFit Québec" /></Field>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 14 }}>
          <Field label="Adresse"><Input defaultValue="1234 rue Saint-Vallier Est" /></Field>
          <Field label="Ville"><Input defaultValue="Québec" /></Field>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <Field label="Province"><Input defaultValue="Québec (QC)" /></Field>
          <Field label="Code postal"><Input defaultValue="G1K 3P4" /></Field>
        </div>
        <Field label="Capacité par cours (par défaut)" hint="Modifiable par cours ensuite."><Input defaultValue="20" suffix="membres" /></Field>
        <Field label="Numéros de taxes" hint="Facultatif. Stripe Tax peut les gérer automatiquement.">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <Input placeholder="TPS · 9 chiffres RT0001" />
            <Input placeholder="TVQ · 10 chiffres TQ0001" />
          </div>
        </Field>
      </div>
    </div>
  );
}

function Step2() {
  const days = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
  return (
    <div className="card">
      <div className="card-body">
        <div className="muted mono" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Étape 2 / 5</div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 6px" }}>Heures d'ouverture</h2>
        <div className="muted" style={{ marginBottom: 24 }}>On vous proposera un horaire de cours à partir de ça. Ajustable après.</div>

        {days.map((d, i) => (
          <div key={d} style={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr auto", gap: 12, alignItems: "center", padding: "10px 0", borderBottom: i < days.length - 1 ? "1px solid var(--border)" : 0 }}>
            <div style={{ fontWeight: 500 }}>{d}</div>
            <Input defaultValue={i < 5 ? "05:30" : "08:00"} />
            <Input defaultValue={i < 5 ? "20:30" : "12:00"} />
            <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--text-3)" }}>
              <input type="checkbox" defaultChecked={i < 6} /> Ouvert
            </label>
          </div>
        ))}

        <Field label="Politique d'annulation" hint="Délai avant lequel l'annulation est gratuite.">
          <div className="seg">
            <button>1h</button>
            <button className="active">2h</button>
            <button>4h</button>
            <button>12h</button>
            <button>24h</button>
          </div>
        </Field>
      </div>
    </div>
  );
}

function Step3() {
  const [connected, setConnected] = React.useState(false);
  return (
    <div>
      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-body">
          <div className="muted mono" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Étape 3 / 5</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 6px" }}>Connectez Stripe</h2>
          <div className="muted" style={{ marginBottom: 20 }}>
            Votre box aura son <strong>propre compte Stripe</strong>. Boxflow ne détient jamais vos fonds — ils vont directement de vos membres vers votre banque.
          </div>

          {!connected ? (
            <div style={{ border: "1px dashed var(--border-strong)", borderRadius: "var(--r-3)", padding: 24, textAlign: "center", background: "var(--bg-sunken)" }}>
              <div style={{ width: 48, height: 48, margin: "0 auto 12px", borderRadius: "var(--r-2)", background: "oklch(48% 0.2 275)", color: "#fff", display: "grid", placeItems: "center" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13.479 9.883c-1.626-.604-2.512-1.067-2.512-1.803 0-.622.511-.977 1.423-.977 1.667 0 3.379.642 4.558 1.22l.666-4.111c-.935-.446-2.847-1.182-5.49-1.182-1.861 0-3.41.489-4.517 1.401-1.151.957-1.746 2.338-1.746 4.005 0 3.023 1.849 4.315 4.86 5.406 1.938.701 2.588 1.2 2.588 1.954 0 .734-.628 1.156-1.763 1.156-1.412 0-3.733-.693-5.256-1.577l-.675 4.16c1.306.737 3.722 1.484 6.229 1.484 1.966 0 3.603-.465 4.71-1.346 1.237-.977 1.876-2.42 1.876-4.297 0-3.096-1.885-4.385-4.951-5.495z" /></svg>
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>Créer ou connecter votre compte Stripe</div>
              <div className="muted" style={{ fontSize: 13, marginBottom: 16, maxWidth: 420, margin: "0 auto 16px" }}>
                5 minutes : identité de l'entreprise, compte bancaire, représentant. KYC géré par Stripe.
              </div>
              <button className="btn primary" onClick={() => setConnected(true)}>Commencer avec Stripe <Icon name="external" size={12} /></button>
            </div>
          ) : (
            <div style={{ border: "1px solid var(--success)", borderRadius: "var(--r-3)", padding: 20, background: "var(--success-soft)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: 999, background: "var(--success)", color: "#fff", display: "grid", placeItems: "center" }}>
                  <Icon name="check" size={16} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600 }}>Compte Stripe connecté</div>
                  <div className="mono" style={{ fontSize: 12, color: "var(--text-3)" }}>acct_1NkQz2EfW2PzABcd</div>
                </div>
                <span className="badge success"><span className="dot" />Actif</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, marginTop: 16, background: "var(--surface)", borderRadius: "var(--r-2)", overflow: "hidden", border: "1px solid var(--border)" }}>
                <div style={{ padding: 12, borderRight: "1px solid var(--border)" }}>
                  <div className="muted" style={{ fontSize: 11 }}>Banque</div>
                  <div style={{ fontWeight: 500, fontSize: 13, marginTop: 2 }} className="mono">Desjardins ••• 8842</div>
                </div>
                <div style={{ padding: 12, borderRight: "1px solid var(--border)" }}>
                  <div className="muted" style={{ fontSize: 11 }}>Versements</div>
                  <div style={{ fontWeight: 500, fontSize: 13, marginTop: 2 }}>Quotidiens</div>
                </div>
                <div style={{ padding: 12 }}>
                  <div className="muted" style={{ fontSize: 11 }}>Frais Boxflow</div>
                  <div style={{ fontWeight: 500, fontSize: 13, marginTop: 2 }}>1 % par transaction</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div style={{ padding: 14, background: "var(--info-soft)", color: "var(--text-2)", borderRadius: "var(--r-2)", fontSize: 13, lineHeight: 1.6 }}>
        <strong style={{ color: "var(--info)" }}>Pourquoi Stripe en direct ?</strong> Parce que c'est <em>votre</em> argent. Vous gardez l'historique, vous pouvez quitter Boxflow sans perdre votre relation avec Stripe, et vous évitez les intermédiaires.
      </div>
    </div>
  );
}

function Step4() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="muted mono" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Étape 4 / 5</div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 6px" }}>Votre premier plan d'abonnement</h2>
        <div className="muted" style={{ marginBottom: 24 }}>Partez d'un gabarit, on ajustera ensemble.</div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 24 }}>
          {[
            { n: "Illimité", p: "189 $" },
            { n: "3x / sem", p: "139 $" },
            { n: "Drop-in", p: "25 $" },
          ].map((t, i) => (
            <div key={i} style={{
              padding: 16, borderRadius: "var(--r-2)",
              border: i === 0 ? "2px solid var(--accent)" : "1px solid var(--border)",
              background: i === 0 ? "var(--accent-soft)" : "var(--surface)",
              cursor: "pointer",
            }}>
              <div style={{ fontSize: 13, fontWeight: 500 }}>{t.n}</div>
              <div className="num" style={{ fontSize: 20, fontWeight: 600, marginTop: 4 }}>{t.p}</div>
              <div className="muted" style={{ fontSize: 11 }}>/ mois</div>
            </div>
          ))}
        </div>

        <Field label="Nom du plan"><Input defaultValue="Illimité" /></Field>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <Field label="Prix"><Input defaultValue="189" suffix="$ CAD" /></Field>
          <Field label="Fréquence">
            <div className="seg">
              <button className="active">Mensuel</button>
              <button>Annuel</button>
            </div>
          </Field>
        </div>
        <Field label="Essai gratuit" hint="Laissez vide pour aucune période d'essai."><Input defaultValue="7" suffix="jours" /></Field>
      </div>
    </div>
  );
}

function Step5() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="muted mono" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Étape 5 / 5</div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 6px" }}>Importez vos membres</h2>
        <div className="muted" style={{ marginBottom: 24 }}>Depuis FLiiP, Wodify ou un CSV générique. On fait la migration avec vous si besoin.</div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 20 }}>
          {[
            { n: "Export FLiiP", s: "CSV membres + abonnements" },
            { n: "Export Wodify", s: "CSV membres + historique" },
            { n: "CSV générique", s: "Nom, courriel, plan" },
          ].map((o, i) => (
            <div key={i} style={{
              padding: 14, borderRadius: "var(--r-2)",
              border: "1px solid var(--border)", background: "var(--surface)",
              cursor: "pointer",
            }}>
              <div style={{ fontSize: 13, fontWeight: 500 }}>{o.n}</div>
              <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>{o.s}</div>
            </div>
          ))}
        </div>

        <div style={{ border: "2px dashed var(--border-strong)", borderRadius: "var(--r-3)", padding: 32, textAlign: "center", background: "var(--bg-sunken)" }}>
          <Icon name="download" size={24} style={{ color: "var(--text-3)", transform: "rotate(180deg)" }} />
          <div style={{ fontWeight: 500, marginTop: 10 }}>Déposez votre CSV ici</div>
          <div className="muted" style={{ fontSize: 13, marginTop: 4 }}>ou <span style={{ color: "var(--accent)", cursor: "pointer", fontWeight: 500 }}>parcourez vos fichiers</span></div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 20, padding: 12, background: "var(--bg-sunken)", borderRadius: "var(--r-2)" }}>
          <div style={{ width: 28, height: 28, borderRadius: 999, background: "var(--accent-soft)", color: "var(--accent-text)", display: "grid", placeItems: "center" }}>
            <Icon name="sparkle" size={14} />
          </div>
          <div style={{ flex: 1, fontSize: 13 }}>
            <strong>Migration assistée offerte</strong> pour les 20 premiers box. On s'occupe du mapping.
          </div>
          <button className="btn sm">Planifier un appel</button>
        </div>
      </div>
    </div>
  );
}

