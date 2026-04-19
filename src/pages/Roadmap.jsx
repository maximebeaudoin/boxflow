// Boxflow — Roadmap (inspiré de hustleup.app)
import React from "react";
import Icon from "../Icon.jsx";

export default function Roadmap() {
  const navRef = React.useRef(null);

  React.useEffect(() => {
    const chapters = Array.from(document.querySelectorAll("[data-chapter]"));
    const dots = Array.from(document.querySelectorAll(".cn-dot[data-year]"));
    const scroller = document.querySelector(".content.rm-wrap") || window;

    function getActive() {
      const mid = window.innerHeight * 0.5;
      let best = null, bestDist = Infinity;
      chapters.forEach((ch) => {
        const r = ch.getBoundingClientRect();
        const dist = Math.abs(r.top + r.height / 2 - mid);
        if (dist < bestDist) { bestDist = dist; best = ch; }
      });
      return best ? best.dataset.chapter : null;
    }
    function update() {
      const active = getActive();
      let found = false;
      dots.forEach((d) => {
        const y = d.dataset.year;
        if (y === active) { d.classList.add("active"); d.classList.remove("visited"); found = true; }
        else if (!found) { d.classList.add("visited"); d.classList.remove("active"); }
        else { d.classList.remove("active", "visited"); }
      });
    }

    // Reveal
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(".rm-card, .rm-milestone").forEach((el) => obs.observe(el));

    let ticking = false;
    function onScroll() {
      if (!ticking) { requestAnimationFrame(() => { update(); ticking = false; }); ticking = true; }
    }
    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const years = [
    { y: "2026", c: "var(--accent)", label: "2026" },
    { y: "2025", c: "oklch(68% 0.14 80)", label: "2025" },
    { y: "2024", c: "oklch(60% 0.13 240)", label: "2024" },
    { y: "2023", c: "oklch(58% 0.12 300)", label: "2023" },
    { y: "2022", c: "oklch(55% 0.10 180)", label: "2022" },
  ];

  return (
    <div className="content flush rm-wrap">
      {/* Sticky chapter nav */}
      <div className="chapter-nav" ref={navRef}>
        <div className="chapter-nav-inner">
          {years.map((y, i) => (
            <React.Fragment key={y.y}>
              <a href={`#y${y.y}`} className="cn-dot" data-year={y.y} style={{ "--rc": y.c }}>
                <span>{y.label}</span>
              </a>
              {i < years.length - 1 && <div className="cn-line" style={{ background: `color-mix(in oklch, ${y.c} 30%, transparent)` }} />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="rm-hero">
        <div className="rm-hero-bg-text">ROADMAP</div>
        <div className="rm-hero-inner">
          <div>
            <span className="rm-hero-badge">
              <Icon name="sparkle" size={12} /> Produit · Vision
            </span>
            <h1 className="rm-hero-title">D'un outil pour une box<br/><em>à la plateforme des box québécoises</em></h1>
            <p className="rm-hero-sub">Ce qu'on construit, ce qu'on a livré, et où on s'en va. Transparence totale.</p>
          </div>
          <div className="rm-hero-kpis">
            <div className="rm-kpi"><span className="rm-kpi-n">v0.4</span><span className="rm-kpi-l">actuelle</span></div>
            <div className="rm-kpi"><span className="rm-kpi-n">14</span><span className="rm-kpi-l">box partenaires</span></div>
            <div className="rm-kpi"><span className="rm-kpi-n">2</span><span className="rm-kpi-l">langues (FR / EN)</span></div>
            <div className="rm-kpi"><span className="rm-kpi-n">100%</span><span className="rm-kpi-l">Stripe direct</span></div>
          </div>
        </div>
      </section>

      {/* 2026 */}
      <section className="rm-chapter rm-chapter-alt" id="y2026" data-chapter="2026" style={{ "--rc": "var(--accent)" }}>
        <div className="rm-chapter-wm">2026</div>
        <div className="rm-chapter-inner">
          <header className="rm-chapter-head">
            <div className="rm-chapter-label rm-label-current"><span className="rm-label-pulse" /> En cours</div>
            <h2 className="rm-chapter-title">Le lancement</h2>
            <p className="rm-chapter-desc">Ce sur quoi on travaille maintenant — admin solide, espace membre humain, paiements Stripe directs.</p>
          </header>
          <div className="rm-grid">
            <Card q="T2" year="2026" icon="box" title="MVP admin" done
              desc="Dashboard, membres, calendrier, abonnements, paiements et WOD du jour. La base pour qu'une box puisse tout gérer depuis Boxflow."
              tags={["Admin", "Dashboard", "Stripe Connect"]} />
            <Card q="T2" year="2026" icon="heart" title="Espace membre" done
              desc="Page d'accueil, réservations, historique de WOD et PR, profil, factures. L'expérience que vos membres voient."
              tags={["Membre", "Mobile-ready"]} />
            <Card q="T2" year="2026" icon="stripe" title="Onboarding Stripe" done
              desc="Flow en 5 étapes : box, horaires, KYC Stripe, premier plan, import membres. Votre argent va directement sur votre compte."
              tags={["Onboarding", "KYC"]} />
            <Card q="T2" year="2026" icon="zap" title="Éditeur de WOD" done
              desc="Édition par blocs (warm-up, skill, metcon, cool-down), bibliothèque benchmarks, scaling Rx/Int/Déb, aperçu app en direct."
              tags={["WOD", "Programmation"]} />
            <Card q="T3" year="2026" icon="calendar" title="Détail de cours" live
              desc="Vue complète d'une séance : inscrits, check-in, liste d'attente, programmation du jour et coach assigné."
              tags={["Calendrier", "Check-in"]} />
            <Card q="T3" year="2026" icon="megaphone" title="Communications" current
              desc="Annonces par push, SMS (Twilio) et email. Segmentation par statut, relances automatiques d'échecs de paiement."
              tags={["Notifications", "Twilio"]} />
            <Card q="T4" year="2026" icon="chart" title="Rapports avancés" planned
              desc="Cohortes de rétention, churn par plan, LTV et revenu par coach. Export Excel et PDF prêt pour votre comptable."
              tags={["Analytics", "Export"]} />
            <Card q="T4" year="2026" icon="settings" title="Réglages du box" planned
              desc="Marque (logo, couleurs), politiques (annulation, no-show), taxes québécoises (TPS/TVQ), waivers numériques."
              tags={["Config", "Québec"]} />
          </div>
        </div>
      </section>

      {/* 2025 */}
      <section className="rm-chapter rm-chapter-dark" id="y2025" data-chapter="2025" style={{ "--rc": "oklch(68% 0.14 80)" }}>
        <div className="rm-chapter-wm rm-chapter-wm-dark">2025</div>
        <div className="rm-chapter-inner">
          <header className="rm-chapter-head">
            <div className="rm-chapter-label rm-label-done">Terminé</div>
            <h2 className="rm-chapter-title rm-title-light">Beta fermée</h2>
            <p className="rm-chapter-desc rm-desc-light">3 box pilotes à Québec et Montréal. Feedback brut qui a façonné le produit.</p>
          </header>
          <div className="rm-grid">
            <Card dark q="T3" year="2025" icon="users" title="Beta avec 3 box" done
              desc="CrossFit Québec, Box du Plateau et CrossFit Limoilou testent le produit en conditions réelles. 400 membres réels sur Boxflow."
              tags={["Beta", "Feedback terrain"]} />
            <Card dark q="T3" year="2025" icon="card" title="Paiements Stripe" done
              desc="Intégration Stripe Connect Standard — le gérant garde son compte, nous facilitons. Prélèvements mensuels, cartes canadiennes."
              tags={["Stripe", "SEPA", "Carte"]} />
            <Card dark q="T4" year="2025" icon="calendar" title="Réservations" done
              desc="Système de booking avec liste d'attente, annulations, règles de cancel et crédits non-show par membre."
              tags={["Réservations", "Waitlist"]} />
            <Card dark q="T4" year="2025" icon="globe" title="Bilingue FR/EN" done
              desc="Traductions complètes de l'admin et de l'espace membre. Formats de dates et devises québécois par défaut."
              tags={["i18n", "FR", "EN"]} />
          </div>
        </div>
      </section>

      {/* 2024 */}
      <section className="rm-chapter rm-chapter-light" id="y2024" data-chapter="2024" style={{ "--rc": "oklch(60% 0.13 240)" }}>
        <div className="rm-chapter-wm">2024</div>
        <div className="rm-chapter-inner">
          <header className="rm-chapter-head">
            <div className="rm-chapter-label rm-label-done">Terminé</div>
            <h2 className="rm-chapter-title">Le prototype</h2>
            <p className="rm-chapter-desc">Première version testée avec CrossFit Québec. Pas jolie, mais fonctionnelle.</p>
          </header>
          <div className="rm-grid">
            <Card q="T1" year="2024" icon="zap" title="Prototype v0.1" done
              desc="Spreadsheet + Zapier + Stripe. Une box gère 80 membres sans Wodify. Preuve que le problème vaut la peine d'être résolu."
              tags={["No-code", "Preuve"]} />
            <Card q="T3" year="2024" icon="dumbbell" title="Premier WOD du jour" done
              desc="Les coachs peuvent publier le WOD depuis un formulaire et les membres le voient sur leur téléphone. Ça marche."
              tags={["WOD", "Mobile"]} />
            <Card q="T4" year="2024" icon="chart" title="100 membres réels" done
              desc="Cap franchi. Le système tient la charge, les paiements passent, les membres s'auto-servent. On peut construire pour de vrai."
              tags={["Milestone", "100 membres"]} />
          </div>
          <div className="rm-milestone-card">
            <div>
              <div className="rm-milestone-eyebrow"><Icon name="sparkle" size={12} /> Milestone · T4 2024</div>
              <h3 className="rm-milestone-title">CrossFit Québec passe de Wodify à Boxflow</h3>
              <p className="rm-milestone-text">Migration complète en 2 semaines. 80 membres importés, 100 % des abonnements actifs reconnectés à Stripe. Le début d'une vraie aventure.</p>
            </div>
            <div className="rm-milestone-number">80</div>
          </div>
        </div>
      </section>

      {/* 2023 */}
      <section className="rm-chapter rm-chapter-dark" id="y2023" data-chapter="2023" style={{ "--rc": "oklch(58% 0.12 300)" }}>
        <div className="rm-chapter-wm rm-chapter-wm-dark">2023</div>
        <div className="rm-chapter-inner">
          <header className="rm-chapter-head">
            <div className="rm-chapter-label rm-label-done">Terminé</div>
            <h2 className="rm-chapter-title rm-title-light">La recherche</h2>
            <p className="rm-chapter-desc rm-desc-light">Discussions avec 22 box au Québec. L'idée prend forme.</p>
          </header>
          <div className="rm-grid">
            <Card dark q="T2" year="2023" icon="search" title="22 entrevues" done
              desc="Deux mois à faire le tour des box québécoises. Les mêmes douleurs reviennent : Wodify trop cher, mal traduit, pas adapté au Canada."
              tags={["Discovery", "Québec"]} />
            <Card dark q="T4" year="2023" icon="box" title="La thèse" done
              desc="Un outil conçu ici, en français, intégré à Stripe Canada, avec du vrai support humain. Pas du SaaS anonyme — du service."
              tags={["Vision", "Produit"]} />
          </div>
        </div>
      </section>

      {/* 2022 */}
      <section className="rm-chapter rm-chapter-light" id="y2022" data-chapter="2022" style={{ "--rc": "oklch(55% 0.10 180)" }}>
        <div className="rm-chapter-wm">2022</div>
        <div className="rm-chapter-inner">
          <header className="rm-chapter-head">
            <div className="rm-chapter-label rm-label-done">Terminé</div>
            <h2 className="rm-chapter-title">L'origine</h2>
            <p className="rm-chapter-desc">Une frustration personnelle.</p>
          </header>
          <div className="rm-grid">
            <Card q="2022" year="" icon="heart" title="Le déclic" done
              desc="Coach à mi-temps dans une box du Plateau. Un soir, le logiciel plante pendant un 18h. Aucun inscrit visible. 32 personnes qui attendent. L'idée naît là."
              tags={["Origine", "Histoire vraie"]} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rm-cta">
        <div className="rm-cta-inner">
          <h2>Envie d'influencer<br/>la prochaine version ?</h2>
          <p>La roadmap est construite avec nos box partenaires. Venez discuter.</p>
          <div className="rm-cta-btns">
            <button className="btn primary lg"><Icon name="mail" size={12} />Contactez-nous</button>
            <button className="btn lg"><Icon name="calendar" size={12} />Demander une démo</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({ q, year, icon, title, desc, tags = [], done, current, live, planned, dark }) {
  let statusClass = "rm-status-planned";
  let statusLabel = "Planifié";
  if (done) { statusClass = "rm-status-done"; statusLabel = "Livré"; }
  if (current) { statusClass = "rm-status-current"; statusLabel = "En cours"; }
  if (live) { statusClass = "rm-status-live"; statusLabel = "Actuel"; }

  return (
    <div className={`rm-card ${dark ? "rm-card-on-dark" : ""}`}>
      <div className="rm-card-top" />
      <div className="rm-card-body">
        <div className="rm-card-meta">
          <span className={`rm-badge ${statusClass}`}>{q}</span>
          {year && <span className="rm-quarter">{year}</span>}
          <span style={{ flex: 1 }} />
          <span className={`rm-status-pill ${statusClass}`}>{current && <span className="rm-label-pulse" />}{statusLabel}</span>
        </div>
        <div className="rm-icon-wrap"><Icon name={icon} size={18} /></div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="rm-tags">{tags.map((t, i) => <span key={i}>{t}</span>)}</div>
      </div>
    </div>
  );
}

