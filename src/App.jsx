// Boxflow — main app
import React from "react";
import { Sidebar, Topbar } from "./Shell.jsx";
import Tweaks from "./Tweaks.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Members from "./pages/Members.jsx";
import Calendar from "./pages/Calendar.jsx";
import Subscriptions from "./pages/Subscriptions.jsx";
import Wod from "./pages/Wod.jsx";
import Payments from "./pages/Payments.jsx";
import Landing, { MemberApp } from "./pages/Landing.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import {
  MemberShell,
  MemberHome,
  MemberBook,
  MemberBookings,
  MemberPrs,
  MemberBilling,
} from "./pages/MemberSpace.jsx";
import { ClassDetail, LogScore } from "./pages/ClassAndScore.jsx";
import WodEditor from "./pages/WodEditor.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import ThemeSwitcher from "./ThemeSwitcher.jsx";

export default function App() {
  const [state, setState] = React.useState(() => {
    try {
      const saved = localStorage.getItem("boxflow.state");
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {
      direction: "a",
      theme: "light",
      density: "normal",
      radius: "normal",
      lang: "fr",
      system: "boxflow",
    };
  });
  const [page, setPage] = React.useState(() => localStorage.getItem("boxflow.page") || "landing");
  const [memberPage, setMemberPage] = React.useState("m-home");
  const [tweaksOpen, setTweaksOpen] = React.useState(false);
  const [logScoreOpen, setLogScoreOpen] = React.useState(false);
  const [wodEditorOpen, setWodEditorOpen] = React.useState(false);

  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-direction", state.direction);
    root.setAttribute("data-theme", state.theme);
    root.setAttribute("data-density", state.density);
    root.setAttribute("data-radius", state.radius);
    root.setAttribute("data-system", state.system || "boxflow");
    localStorage.setItem("boxflow.state", JSON.stringify(state));
  }, [state]);

  React.useEffect(() => {
    localStorage.setItem("boxflow.page", page);
  }, [page]);

  // Edit-mode plumbing
  React.useEffect(() => {
    const handler = (e) => {
      if (!e.data || typeof e.data !== "object") return;
      if (e.data.type === "__activate_edit_mode") setTweaksOpen(true);
      if (e.data.type === "__deactivate_edit_mode") setTweaksOpen(false);
    };
    window.addEventListener("message", handler);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", handler);
  }, []);

  const switcher = (
    <ThemeSwitcher system={state.system} onChange={(s) => setState({ ...state, system: s })} />
  );

  if (page === "member") {
    const handleNav = (p) => {
      if (p === "__back") return setPage("dashboard");
      if (p === "m-wod") return setMemberPage("m-home");
      setMemberPage(p);
    };
    return (
      <>
        <MemberShell page={memberPage} onNav={handleNav}>
          {memberPage === "m-home" && <MemberHome onNav={handleNav} />}
          {memberPage === "m-book" && <MemberBook />}
          {memberPage === "m-bookings" && <MemberBookings />}
          {memberPage === "m-prs" && <MemberPrs />}
          {memberPage === "m-billing" && <MemberBilling />}
        </MemberShell>
        {tweaksOpen && <Tweaks state={state} onChange={setState} onClose={() => setTweaksOpen(false)} />}
        {switcher}
      </>
    );
  }

  if (page === "landing") {
    return (
      <>
        <Landing onEnter={() => setPage("dashboard")} />
        {tweaksOpen && <Tweaks state={state} onChange={setState} onClose={() => setTweaksOpen(false)} />}
        {switcher}
      </>
    );
  }

  if (page === "onboarding") {
    return (
      <>
        <Onboarding onDone={() => setPage("dashboard")} />
        {tweaksOpen && <Tweaks state={state} onChange={setState} onClose={() => setTweaksOpen(false)} />}
        {switcher}
      </>
    );
  }

  const crumbs = {
    dashboard: ["CrossFit Québec", "Vue d'ensemble"],
    membres: ["CrossFit Québec", "Membres"],
    calendrier: ["CrossFit Québec", "Calendrier"],
    abonnements: ["CrossFit Québec", "Revenus", "Abonnements"],
    paiements: ["CrossFit Québec", "Revenus", "Paiements"],
    wod: ["CrossFit Québec", "WOD du jour"],
    app: ["CrossFit Québec", "App membre"],
    "class-detail": ["CrossFit Québec", "Calendrier", "WOD PM · vendredi 17 avril"],
  }[page] || ["CrossFit Québec"];

  return (
    <div className="app" data-screen-label={page}>
      <Sidebar active={page === "class-detail" ? "calendrier" : page} onNav={(p) => {
        if (p === "rapports") return setPage("paiements");
        if (p === "marketing") return setPage("landing");
        if (p === "reglages") return setPage("app");
        if (p === "member") return setPage("member");
        if (p === "onboarding") return setPage("onboarding");
        if (p === "roadmap") return setPage("roadmap");
        setPage(p);
      }} />
      <div className="main">
        <Topbar crumbs={crumbs} />
        {page === "dashboard" && <Dashboard onGoOnboarding={() => setPage("onboarding")} />}
        {page === "membres" && <Members />}
        {page === "calendrier" && <Calendar onOpenClass={() => setPage("class-detail")} />}
        {page === "class-detail" && <ClassDetail onBack={() => setPage("calendrier")} />}
        {page === "abonnements" && <Subscriptions />}
        {page === "paiements" && <Payments />}
        {page === "wod" && <Wod onLogScore={() => setLogScoreOpen(true)} onEdit={() => setWodEditorOpen(true)} />}
        {page === "app" && <MemberApp />}
        {page === "roadmap" && <Roadmap />}
      </div>
      {tweaksOpen && <Tweaks state={state} onChange={setState} onClose={() => setTweaksOpen(false)} />}
      {logScoreOpen && <LogScore onClose={() => setLogScoreOpen(false)} />}
      {wodEditorOpen && <WodEditor onClose={() => setWodEditorOpen(false)} />}
      {switcher}
    </div>
  );
}
