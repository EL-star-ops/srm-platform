# HeliosX SRM Platform

**Supplier Relationship Management Demo Application**

> Built by Elena Nutu (Operations Analyst) as an internal proof-of-concept to evaluate Kodiak Hub SRM capabilities.  
> Handed over to IT (Nick Faulkner) for hosting and deployment.

---

## 🎯 Overview

This is a fully functional React demo of the HeliosX SRM Platform — a supplier relationship management system built to showcase:

- **Supplier portfolio management** across 6 profiled suppliers (531 total in HeliosX)
- **Risk & compliance tracking** — audit status, credit scoring, certifications
- **Performance analytics** — KPI scorecards, benchmarking, stakeholder feedback
- **Supplier onboarding workflows** — self-registration & assessment campaigns
- **Contract lifecycle management** — renewals, expiries, status tracking
- **Strategic sourcing flywheel** — 6-step SRM process automation
- **ERP integration architecture** — how HeliosX sits above Sage X3

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v16+ ([download](https://nodejs.org/))
- **npm** (comes with Node)
- Git (for cloning the repo)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/heliosx-group/srm-platform.git
cd srm-platform
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

Your browser will open to `http://localhost:3000`. The app reloads on code changes.

---

## 📦 Build for Production

```bash
npm run build
```

This creates an optimised build in the `build/` folder, ready to deploy.

---

## 🌐 Deploy to the Web (Pick One)

### Option 1: Vercel (Recommended — 60 seconds)
```bash
npm install -g vercel
vercel
```
Follow prompts. Your app is now live at a public Vercel URL.

### Option 2: Netlify
1. Go to **netlify.com**
2. Click **Deploy** → Connect your GitHub repo
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Click **Deploy**

### Option 3: GitHub Pages (Free, if repo is public)
1. Go to repo **Settings** → **Pages**
2. Set source to `main` branch
3. Wait 2 minutes
4. Site lives at `https://heliosx-group.github.io/srm-platform`

---

## 📁 Project Structure

```
srm-platform/
├── public/
│   └── index.html           # HTML entry point
├── src/
│   ├── App.jsx              # Main React component (full SRM app)
│   └── index.js             # React root render
├── package.json             # Dependencies & scripts
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

---

## 🎯 Key Features

### Tabs in the App

| Tab | Purpose |
|-----|---------|
| **Dashboard** | Portfolio overview, KPI metrics, segment breakdown, actions required |
| **Suppliers** | Full supplier database with filtering, detail view, credit scoring |
| **Onboarding** | Self-registration sign-up links & assessment campaigns |
| **Performance** | KPI scorecards, benchmarking, stakeholder feedback, action tracking |
| **Contracts** | Contract lifecycle — MSAs, SLAs, NDAs, expiry tracking |
| **Compliance** | Risk status, audit results, compliance checklist |
| **Templates** | Assessment template builder (Quality, H&S, Environmental) |
| **Intelligence** | Portfolio analytics, spend distribution, risk intelligence |
| **Flywheel** | 6-step SRM process — segment → risk → onboard → audit → improve → harvest |
| **ERP & Architecture** | ERP vs SRM comparison, decision matrix, readiness checklist |

---

## 🔧 Technology Stack

- **React 18** — UI framework
- **React Scripts 5** — Build tooling (Create React App)
- **CSS-in-JS** — Inline styles (no external CSS files)
- **SVG** — Visualizations (charts, flywheel, matrices)

No external component libraries — everything is built from scratch for maximum customisation.

---

## 📊 Demo Data

The app comes pre-loaded with 6 suppliers for demo purposes:

1. **ABC Packaging Limited** (Germany) — Strategic, Low Risk, Approved
2. **Astrid Speed Control BV** (Netherlands) — Leverage, Medium Risk, Pending
3. **Apollo International** (New Zealand) — Tactical, High Risk, Failed
4. **Buyse Supplies** (Belgium) — Strategic, Low Risk, Approved
5. **Carpe Diem LLC** (USA) — Leverage, Low Risk, Approved
6. **Beijing Bolts & Bits** (China) — Tactical, High Risk, Pending

All data is stored in React state (in-memory). Changes don't persist on page reload.

---

## 🎬 Demo Script

See `DEMO_SCRIPT.md` for a 15-minute guided walkthrough of all features.

---

## 📝 Business Context

### Why HeliosX?

- **531 suppliers** across 5 brands (MedExpress, Dermatica, ZipHealth, RocketRx, Levity)
- **Fragmented data** across Sage X3, spreadsheets, email
- **Compliance gaps** — manual CHAS verification, missing certifications
- **No centralised performance tracking** — KPIs live in disparate systems
- **Contract renewal blindspots** — missed dates, no alerts

### Expected ROI

| Metric | Value |
|--------|-------|
| Annual platform cost | ~£37.5k |
| Time saving | 10 hrs/week (~£34k/yr) |
| Suppliers managed | 400+ |
| Estimated cost savings | 7–10% of supplier spend |
| Compliance risk reduction | High |

---

## 🔗 Integration with Sage X3

The SRM sits above Sage X3 as the operating system layer. Data flows:

```
External Sources (Credit, ESG, Media)
    ↓
HeliosX SRM Platform
    ↓
Snowflake Data Lake (normalisation)
    ↓
Sage X3 (ERP) ← → HeliosX (via API)
```

In production, HeliosX would:
- Pull vendor master data from Sage X3 POs & invoices
- Push supplier updates back to Sage X3
- Enrich ERP data with risk, performance, compliance insights

---

## ❓ FAQ

**Q: Is this production-ready?**  
A: No. This is a proof-of-concept demo. In production, you'd add:
- Backend API & authentication
- Real database (PostgreSQL/Snowflake)
- Integration with Sage X3
- Enhanced security & audit logging

**Q: Can I customise the suppliers?**  
A: Yes. Edit the `suppliers` array at the top of `src/App.jsx`. Changes will reflect immediately.

**Q: How do I add new tabs?**  
A: Add a new tab name to the `tabs` array, then add a conditional render block with your content.

**Q: Can I export data?**  
A: Currently, no. The demo is read-only. To add export, implement CSV/Excel export functions.

**Q: What about mobile?**  
A: The UI is responsive but optimised for desktop (1200px+). Mobile support would require additional work.

---

## 📞 Support

**Deployment questions?** Contact Nick Faulkner (IT)  
**Feature requests?** Contact Elena Nutu (Operations)  
**Business case?** See `BUSINESS_CASE.md` (in Confluence)

---

## 📄 Licence

Internal HeliosX Group use only. Not for external distribution without permission.

---

**Version:** 1.0.0  
**Last updated:** February 27, 2026  
**Built by:** Elena Nutu  
**Handed to IT:** Nick Faulkner
