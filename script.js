// UA text lives in index.html (default). Only EN translations are stored here.
const EN = {
  name: "Oleksandr Zhabitenko",
  role: "Junior Python Developer · Backend & Automation",
  intro: "I build Python backends with FastAPI, work with PostgreSQL, deploy services in Docker and set up CI/CD. I also create Telegram bots and automate business processes. Currently working on a commercial project: server side, database, automated deployment and mass messaging.",
  loc: "📍 Kryvyi Rih, Ukraine",
  open: "● Open to work",
  remote: "Remote / Hybrid",
  btnProj: "View projects",
  btnContact: "Contact me",
  hAbout: "About me",
  about1: "I study Software Engineering at Kryvyi Rih Professional College (specialty 121). My main focus is <b>Python backend</b>: FastAPI, plain SQL, Docker, process automation and integrations with external APIs (Telegram, Binance).",
  about2: "Besides pet projects, I'm working on a <b>commercial project</b> (under contract): server, database, CI/CD, Docker, and a Telegram bot with mass messaging and flexible settings. The code is under NDA, but I'm happy to discuss the architecture and decisions in an interview.",
  dtGoal: "Goal", ddGoal: "Junior Python Developer (Backend / Automation)",
  dtExp: "Experience", ddExp: "Commercial project (contract, ongoing) + pet projects on GitHub",
  dtEdu: "Education", ddEdu: "Professional Junior Bachelor, 2023 — 2027 (expected)",
  dtLang: "Languages", ddLang: "Ukrainian C1 · Russian C2 · English B1",
  hSkills: "Skills",
  sDb: "Databases", sAuto: "Automation", sData: "Data", sOther: "Other",
  soft: '<span class="tag">soft:</span> analytical thinking · fast learner · self-driven · attention to detail',
  hProj: "Projects",
  p1t: "🔒 Commercial project — server platform + Telegram bot",
  p1n: "Built under contract, code is under NDA. Details available in an interview.",
  p1d: "Python server with an SQL database, Docker deployment on a server, CI/CD with automated deploys, a Telegram bot with flexible settings and mass messaging, and automation of the client's routine processes.",
  p2t: "⚡ Binance Trading Terminal — Futures trading platform",
  p2d: "A tool for my own manual trading: opening/closing positions with a risk/reward check, automatic position size and leverage calculation based on risk, a trade journal (PnL, entry/exit reasons), a live order book via WebSocket, and position/balance monitoring. Strategy backtesting on historical data using indicators; signals are sent to Telegram, with no automatic order entry. Architecture: Python backend + C# (WinForms) desktop UI connected via a JSON bridge.",
  p3t: "Web-table — an Excel-style mini CRM",
  p3d: "Sign-up/login; each user gets their own PostgreSQL schema with real SQL tables (not EAV/JSON). Tables and columns are created on the fly, cells are edited by double-click. Auth via httpOnly cookies with CSRF protection. Docker + devcontainer: runs in GitHub Codespaces with no manual setup.",
  p4t: "Tenlyx — message mailing from Excel templates",
  p4d: "Loads contacts from Excel, a message template engine, SMS sending; GitHub Actions workflow configured.",
  p5t: "Data parser & structurer",
  p5d: "Collects data via direct HTTP requests where possible and Selenium where browser emulation is needed; cleans and structures data for analysis.",
  hContact: "Contact",
  cText: "Open to Junior Python Developer offers (backend, automation, Telegram bots)."
};

const nodes = [...document.querySelectorAll("[data-i18n]")];
const UA = {};
nodes.forEach(n => (UA[n.dataset.i18n] = n.innerHTML));

const btn = document.getElementById("lang");
let lang = "uk";

function apply(l) {
  lang = l;
  const dict = l === "en" ? EN : UA;
  nodes.forEach(n => { n.innerHTML = dict[n.dataset.i18n]; });
  document.documentElement.lang = l === "en" ? "en" : "uk";
  document.title = l === "en"
    ? "Oleksandr Zhabitenko — Python Developer / Backend & Automation"
    : "Олександр Жабітенко — Python Developer / Backend & Automation";
  btn.textContent = l === "en" ? "UA" : "EN";
  try { localStorage.setItem("lang", l); } catch (e) {}
}

btn.addEventListener("click", () => apply(lang === "uk" ? "en" : "uk"));

let saved = null;
try { saved = localStorage.getItem("lang"); } catch (e) {}
const guess = (navigator.language || "").toLowerCase().startsWith("uk") || (navigator.language || "").toLowerCase().startsWith("ru") ? "uk" : "en";
apply(saved || guess);