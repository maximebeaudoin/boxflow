// Boxflow — Sample data (all FR, Québec)

const MEMBERS = [
  { id: 1, name: "Mathieu Paquet", email: "m.paquet@hey.com", plan: "Illimité", status: "actif", mrr: 189, joined: "2024-03-14", last: "Il y a 2h", streak: 14 },
  { id: 2, name: "Sophie Tremblay", email: "sophie.t@gmail.com", plan: "Illimité", status: "actif", mrr: 189, joined: "2023-11-02", last: "Hier", streak: 42 },
  { id: 3, name: "Félix Bouchard", email: "felix.b@protonmail.ch", plan: "3x / sem", status: "actif", mrr: 139, joined: "2025-01-20", last: "Il y a 4h", streak: 7 },
  { id: 4, name: "Ariane Lévesque", email: "ariane.lv@outlook.com", plan: "Illimité", status: "pause", mrr: 0, joined: "2023-06-12", last: "Il y a 9 jours", streak: 0 },
  { id: 5, name: "Gabriel Roy", email: "groy@me.com", plan: "Drop-in", status: "actif", mrr: 0, joined: "2026-04-10", last: "Hier", streak: 2 },
  { id: 6, name: "Camille Lapointe", email: "camille.lap@gmail.com", plan: "Illimité", status: "actif", mrr: 189, joined: "2024-09-01", last: "Il y a 30min", streak: 21 },
  { id: 7, name: "Nicolas Dubé", email: "n.dube@hey.com", plan: "2x / sem", status: "échec paiement", mrr: 119, joined: "2024-02-18", last: "Il y a 5 jours", streak: 0 },
  { id: 8, name: "Élodie Fortin", email: "elodie.fortin@gmail.com", plan: "Illimité", status: "actif", mrr: 189, joined: "2025-08-22", last: "Il y a 1h", streak: 9 },
  { id: 9, name: "Samuel Cormier", email: "scormier@icloud.com", plan: "Illimité", status: "actif", mrr: 189, joined: "2023-04-03", last: "Aujourd'hui", streak: 56 },
  { id: 10, name: "Isabelle Girard", email: "i.girard@gmail.com", plan: "3x / sem", status: "actif", mrr: 139, joined: "2025-05-17", last: "Hier", streak: 11 },
  { id: 11, name: "Thomas Beaulieu", email: "t.beaulieu@proton.me", plan: "Illimité", status: "actif", mrr: 189, joined: "2024-11-28", last: "Il y a 3h", streak: 18 },
  { id: 12, name: "Laurence Côté", email: "l.cote@hey.com", plan: "Illimité", status: "actif", mrr: 189, joined: "2024-07-05", last: "Aujourd'hui", streak: 33 },
];

const CLASSES_WEEK = [
  // Lundi
  { day: 0, start: 6, end: 7, name: "WOD AM", coach: "Alex", booked: 18, cap: 20 },
  { day: 0, start: 12, end: 13, name: "WOD Midi", coach: "Janie", booked: 14, cap: 20 },
  { day: 0, start: 17, end: 18, name: "WOD PM", coach: "Alex", booked: 20, cap: 20, full: true },
  { day: 0, start: 18, end: 19, name: "WOD PM", coach: "Alex", booked: 20, cap: 20, full: true },
  { day: 0, start: 19, end: 20, name: "Open Gym", coach: "—", booked: 6, cap: 15, empty: true },
  // Mardi
  { day: 1, start: 6, end: 7, name: "WOD AM", coach: "Janie", booked: 16, cap: 20 },
  { day: 1, start: 12, end: 13, name: "Haltéro", coach: "Marc", booked: 10, cap: 12 },
  { day: 1, start: 17, end: 18, name: "WOD PM", coach: "Alex", booked: 19, cap: 20 },
  { day: 1, start: 18, end: 19, name: "WOD PM", coach: "Alex", booked: 20, cap: 20, full: true },
  // Mercredi
  { day: 2, start: 6, end: 7, name: "WOD AM", coach: "Alex", booked: 12, cap: 20 },
  { day: 2, start: 12, end: 13, name: "WOD Midi", coach: "Janie", booked: 15, cap: 20 },
  { day: 2, start: 17, end: 18, name: "WOD PM", coach: "Marc", booked: 20, cap: 20, full: true },
  { day: 2, start: 18, end: 19, name: "WOD PM", coach: "Alex", booked: 17, cap: 20 },
  // Jeudi
  { day: 3, start: 6, end: 7, name: "WOD AM", coach: "Janie", booked: 14, cap: 20 },
  { day: 3, start: 12, end: 13, name: "Gym", coach: "Marc", booked: 9, cap: 15, empty: true },
  { day: 3, start: 17, end: 18, name: "WOD PM", coach: "Alex", booked: 20, cap: 20, full: true },
  { day: 3, start: 18, end: 19, name: "WOD PM", coach: "Alex", booked: 20, cap: 20, full: true },
  // Vendredi
  { day: 4, start: 6, end: 7, name: "WOD AM", coach: "Alex", booked: 17, cap: 20 },
  { day: 4, start: 12, end: 13, name: "WOD Midi", coach: "Janie", booked: 13, cap: 20 },
  { day: 4, start: 17, end: 18, name: "Bring-a-friend", coach: "Alex", booked: 20, cap: 20, full: true },
  // Samedi
  { day: 5, start: 9, end: 10, name: "Team WOD", coach: "Alex", booked: 24, cap: 24, full: true },
  { day: 5, start: 10, end: 11, name: "Team WOD", coach: "Janie", booked: 18, cap: 24 },
  // Dimanche
  { day: 6, start: 10, end: 11, name: "Open Gym", coach: "—", booked: 8, cap: 15, empty: true },
];

const PLANS = [
  { name: "Illimité", price: 189, interval: "mois", members: 163, color: "accent", desc: "Accès illimité à tous les cours et au gym ouvert" },
  { name: "3x / semaine", price: 139, interval: "mois", members: 48, color: "info", desc: "3 cours par semaine, report 7 jours" },
  { name: "2x / semaine", price: 119, interval: "mois", members: 22, color: "info", desc: "2 cours par semaine" },
  { name: "Drop-in", price: 25, interval: "visite", members: 14, color: "warning", desc: "Visite ponctuelle, sans engagement" },
];

const PAYMENTS = [
  { id: "pi_3NkQz2", member: "Mathieu Paquet", amount: 189.00, status: "réussi", date: "2026-04-15", plan: "Illimité", card: "visa •• 4242" },
  { id: "pi_3NkQy8", member: "Sophie Tremblay", amount: 189.00, status: "réussi", date: "2026-04-15", plan: "Illimité", card: "mastercard •• 5521" },
  { id: "pi_3NkQx1", member: "Félix Bouchard", amount: 139.00, status: "réussi", date: "2026-04-14", plan: "3x / sem", card: "visa •• 0019" },
  { id: "pi_3NkQw7", member: "Camille Lapointe", amount: 189.00, status: "réussi", date: "2026-04-14", plan: "Illimité", card: "amex •• 1007" },
  { id: "pi_3NkQv4", member: "Nicolas Dubé", amount: 119.00, status: "échoué", date: "2026-04-13", plan: "2x / sem", card: "visa •• 8841" },
  { id: "pi_3NkQu2", member: "Élodie Fortin", amount: 189.00, status: "réussi", date: "2026-04-12", plan: "Illimité", card: "visa •• 3312" },
  { id: "pi_3NkQt9", member: "Samuel Cormier", amount: 189.00, status: "réussi", date: "2026-04-12", plan: "Illimité", card: "mastercard •• 7712" },
  { id: "pi_3NkQs3", member: "Isabelle Girard", amount: 139.00, status: "en attente", date: "2026-04-11", plan: "3x / sem", card: "visa •• 1129" },
];

const ACTIVITY = [
  { type: "join", text: "Léa Martineau a rejoint", meta: "Plan Illimité • carte 189$/mois", time: "Il y a 12 min", icon: "users" },
  { type: "pay", text: "Paiement réussi", meta: "Mathieu Paquet • 189,00 $", time: "Il y a 34 min", icon: "dollar" },
  { type: "book", text: "Cours complet : WOD 17h", meta: "Liste d'attente : 3 personnes", time: "Il y a 1h", icon: "calendar" },
  { type: "fail", text: "Échec de paiement", meta: "Nicolas Dubé • nouvelle tentative dans 3 jours", time: "Il y a 2h", icon: "card" },
  { type: "pr", text: "Nouveau record personnel", meta: "Samuel Cormier • Back Squat 165 kg", time: "Il y a 3h", icon: "trophy" },
  { type: "pause", text: "Abonnement en pause", meta: "Ariane Lévesque • jusqu'au 2 mai", time: "Hier", icon: "clock" },
];

const WOD_TODAY = {
  date: "Vendredi 17 avril",
  title: "Diane",
  subtitle: "Benchmark CrossFit — for time",
  parts: [
    { label: "Warm-up", time: "12 min", items: [
      "3 tours : 200 m jog, 10 air squats, 10 PVC pass-through",
      "Échelle spécifique : deadlift build-up à 60-70% du 1RM",
    ]},
    { label: "Strength", time: "15 min", items: [
      "Deadlift — 5x3 @ 75% (repos 2 min)",
    ]},
    { label: "Metcon — Diane", time: "10 min cap", items: [
      "21-15-9, for time :",
      "Deadlift 102 kg / 70 kg",
      "Handstand push-up",
    ]},
    { label: "Cooldown", time: "5 min", items: [
      "Étirements ischios + épaules",
    ]},
  ],
  scaling: [
    { label: "Rx", note: "102 kg / 70 kg • HSPU strict" },
    { label: "Intermédiaire", note: "84 kg / 57 kg • HSPU abmat" },
    { label: "Débutant", note: "60 kg / 40 kg • pike push-up" },
  ],
  leaderboard: [
    { name: "Samuel Cormier", score: "4:12", scale: "Rx", pr: true },
    { name: "Alex (coach)", score: "4:38", scale: "Rx" },
    { name: "Camille Lapointe", score: "5:02", scale: "Rx" },
    { name: "Sophie Tremblay", score: "5:41", scale: "Int." },
    { name: "Mathieu Paquet", score: "6:09", scale: "Int." },
    { name: "Thomas Beaulieu", score: "6:24", scale: "Int." },
    { name: "Laurence Côté", score: "7:18", scale: "Déb." },
  ],
};

export const DATA = { MEMBERS, CLASSES_WEEK, PLANS, PAYMENTS, ACTIVITY, WOD_TODAY };
