<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HeliosX SRM Platform</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Segoe UI',system-ui,sans-serif;background:#f1f5f9;min-height:100vh}
.wrap{max-width:1200px;margin:0 auto;padding:16px}
.header{background:linear-gradient(135deg,#1e3a5f 0%,#2563eb 100%);border-radius:12px;padding:20px;margin-bottom:16px;color:#fff;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}
.header h1{font-size:22px;font-weight:800}
.header p{opacity:0.8;font-size:13px;margin-top:4px}
.header-right{display:flex;gap:8px;align-items:center}
.lang-select{padding:6px 12px;border-radius:6px;border:1px solid rgba(255,255,255,0.3);background:rgba(255,255,255,0.15);color:#fff;font-size:12px;font-weight:600;cursor:pointer}
.lang-select option{color:#000}
.btn-onboard{padding:8px 16px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-weight:700;cursor:pointer;font-size:12px}
.btn-onboard:hover{background:#16a34a}
.kpi-row{display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap}
.kpi{background:#fff;border-radius:10px;padding:16px;flex:1;min-width:140px}
.kpi-label{font-size:11px;color:#64748b;text-transform:uppercase;font-weight:600}
.kpi-val{font-size:28px;font-weight:800;margin-top:4px}
.kpi-sub{font-size:11px;color:#94a3b8;margin-top:2px}
.tabs{display:flex;gap:4px;margin-bottom:16px;flex-wrap:wrap;background:#fff;border-radius:10px;padding:6px}
.tab-btn{padding:8px 14px;border-radius:8px;border:none;background:transparent;color:#64748b;font-weight:600;cursor:pointer;font-size:12px;transition:all 0.2s}
.tab-btn.active{background:#1e3a5f;color:#fff}
.tab-btn:hover:not(.active){background:#f1f5f9}
.content{background:#fff;border-radius:12px;padding:20px;margin-bottom:16px;box-shadow:0 1px 3px rgba(0,0,0,0.08)}
.search{width:100%;padding:10px 14px;border:1px solid #e2e8f0;border-radius:8px;margin-bottom:16px;font-size:13px}
table{width:100%;border-collapse:collapse;font-size:12px}
th{padding:10px 12px;border-bottom:2px solid #e2e8f0;font-weight:700;color:#475569;text-align:left;background:#f8fafc}
td{padding:10px 12px;border-bottom:1px solid #f1f5f9}
.badge{padding:3px 10px;border-radius:20px;font-weight:600;font-size:11px;display:inline-block}
.perf-bar{background:#e2e8f0;border-radius:4px;height:8px;width:80px;display:inline-block;vertical-align:middle}
.perf-fill{border-radius:4px;height:8px;display:block}
.btn-sm{padding:4px 10px;border-radius:6px;border:1px solid #e2e8f0;background:#f8fafc;cursor:pointer;font-size:11px;margin-right:4px}
.btn-sm-blue{padding:4px 10px;border-radius:6px;border:1px solid #3b82f6;background:#eff6ff;color:#3b82f6;cursor:pointer;font-size:11px}
.comp-row{display:flex;justify-content:space-between;align-items:center;padding:12px;border-bottom:1px solid #f1f5f9;flex-wrap:wrap;gap:8px}
.cert-tag{padding:2px 8px;border-radius:12px;font-size:10px;font-weight:600;display:inline-block;margin:2px}
.cert-ok{background:#dcfce7;color:#16a34a}
.cert-warn{background:#fef2f2;color:#ef4444}
.contract-card{background:#f8fafc;border-radius:10px;padding:14px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px}
.fin-row{display:flex;justify-content:space-between;align-items:center;padding:12px;border-bottom:1px solid #f1f5f9;flex-wrap:wrap;gap:8px}
.fin-metric{text-align:center;min-width:60px}
.fin-metric-label{font-size:10px;color:#64748b}
.npd-card{background:#f8fafc;border-radius:10px;padding:14px;margin-bottom:8px}
.npd-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:8px}
.progress-bar{background:#e2e8f0;border-radius:4px;height:8px;width:100%}
.progress-fill{border-radius:4px;height:8px;transition:width 0.5s}
.exec-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-bottom:20px}
.exec-card{border-radius:10px;padding:16px;color:#fff}
.exec-label{font-size:11px;opacity:0.8}
.exec-val{font-size:32px;font-weight:800}
.exec-sub{font-size:11px;opacity:0.7}
.action-item{padding:8px 12px;border-left:3px solid;margin-bottom:6px;background:#fff;border-radius:0 6px 6px 0;font-size:12px}
.erp-layer{border-radius:10px;padding:14px;margin-bottom:8px}
.erp-title{font-weight:700;margin-bottom:8px;font-size:13px}
.erp-tags{display:flex;gap:8px;flex-wrap:wrap}
.erp-tag{border-radius:6px;padding:4px 10px;font-size:11px;font-weight:600}
.biz-case{background:#1e3a5f;border-radius:10px;padding:16px;color:#fff}
.biz-row{display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:12px}
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:999;padding:16px}
.modal{background:#fff;border-radius:12px;padding:24px;max-width:480px;width:100%;max-height:80vh;overflow:auto}
.modal-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
.modal-close{background:none;border:none;font-size:20px;cursor:pointer}
.steps{display:flex;gap:4px;margin-bottom:16px}
.step{flex:1;height:4px;border-radius:2px;background:#e2e8f0}
.step.active{background:#3b82f6}
.form-label{display:block;font-size:12px;font-weight:600;margin-bottom:6px;color:#374151}
.form-input{width:100%;padding:8px 12px;border:1px solid #d1d5db;border-radius:6px;font-size:13px;margin-bottom:16px}
.form-select{width:100%;padding:8px 12px;border:1px solid #d1d5db;border-radius:6px;font-size:13px;background:#fff;margin-bottom:16px}
.form-btns{display:flex;gap:8px}
.btn-prev{flex:1;padding:10px 16px;border-radius:6px;border:1px solid #d1d5db;background:#fff;font-weight:600;font-size:13px;cursor:pointer}
.btn-prev:disabled{opacity:0.5;cursor:not-allowed}
.btn-next{flex:1;padding:10px 16px;border-radius:6px;border:none;background:#3b82f6;color:#fff;font-weight:600;font-size:13px;cursor:pointer}
.btn-submit{flex:1;padding:10px 16px;border-radius:6px;border:none;background:#22c55e;color:#fff;font-weight:600;font-size:13px;cursor:pointer}
.footer{text-align:center;padding:20px 0;font-size:11px;color:#94a3b8}
.hidden{display:none}
</style>
</head>
<body>
<div class="wrap">
  <!-- HEADER -->
  <div class="header">
    <div><h1 id="hTitle">HeliosX SRM Platform</h1><p id="hSub">Supplier Relationship Management</p></div>
    <div class="header-right">
      <select class="lang-select" id="langSelect" onchange="changeLang(this.value)">
        <option value="en">🇬🇧 EN</option><option value="ro">🇷🇴 RO</option><option value="fr">🇫🇷 FR</option><option value="es">🇪🇸 ES</option><option value="de">🇩🇪 DE</option>
      </select>
      <button class="btn-onboard" id="btnOnboard" onclick="openForm()">+ Onboard Supplier</button>
    </div>
  </div>

  <!-- KPIs -->
  <div class="kpi-row">
    <div class="kpi" style="border-left:4px solid #3b82f6"><div class="kpi-label">TOTAL SUPPLIERS</div><div class="kpi-val" style="color:#3b82f6">531</div><div class="kpi-sub">Across 5 brands</div></div>
    <div class="kpi" style="border-left:4px solid #22c55e"><div class="kpi-label">COMPLIANCE</div><div class="kpi-val" style="color:#22c55e">94%</div><div class="kpi-sub" id="kpiComp">4 Non-Compliant</div></div>
    <div class="kpi" style="border-left:4px solid #f59e0b"><div class="kpi-label">AVG PERFORMANCE</div><div class="kpi-val" style="color:#f59e0b">75%</div><div class="kpi-sub">Target: 85%</div></div>
    <div class="kpi" style="border-left:4px solid #6366f1"><div class="kpi-label">ACTIVE CONTRACTS</div><div class="kpi-val" style="color:#6366f1">7</div><div class="kpi-sub">£5.2M total value</div></div>
    <div class="kpi" style="border-left:4px solid #ef4444"><div class="kpi-label">⚠ NON-COMPLIANT</div><div class="kpi-val" style="color:#ef4444">2</div><div class="kpi-sub">Action required</div></div>
  </div>

  <!-- TABS -->
  <div class="tabs" id="tabBar"></div>

  <!-- CONTENT -->
  <div class="content" id="tabContent"></div>

  <div class="footer" id="footerText">Built by Elena Nutu | HeliosX Operations | Proof of Concept for Kodiak Hub Evaluation</div>
</div>

<!-- MODAL -->
<div class="modal-overlay hidden" id="formModal">
  <div class="modal">
    <div class="modal-header"><h3 id="formTitle">New Supplier Onboarding</h3><button class="modal-close" onclick="closeForm()">✕</button></div>
    <div class="steps" id="formSteps"></div>
    <div id="formContent"></div>
    <div class="form-btns">
      <button class="btn-prev" id="btnPrev" onclick="prevStep()">Previous</button>
      <button class="btn-next" id="btnNext" onclick="nextStep()">Next</button>
    </div>
  </div>
</div>

<script>
const T={
  en:{title:"HeliosX SRM Platform",subtitle:"Supplier Relationship Management",portfolio:"Supplier Portfolio",compliance:"Compliance",contracts:"Contracts",financial:"Financial Health",npd:"NPD",operations:"Operations",executive:"Executive",erp:"ERP & Architecture",onboard:"+ Onboard Supplier",search:"Search suppliers...",name:"Supplier Name",country:"Country",tier:"Tier",status:"Status",risk:"Risk",credit:"Credit",perf:"Performance",actions:"Actions",view:"View",edit:"Edit",compTitle:"Compliance Overview",compDesc:"Track supplier certifications, audits, and regulatory status",certified:"Certified",nonComp:"Non-Compliant",expiring:"Expiring Soon",underReview:"Under Review",contTitle:"Contract Management",contDesc:"Active contracts across all supplier tiers",active:"Active",renewal:"Up for Renewal",expired:"Expired",draft:"Draft",finTitle:"Financial Health Monitor",finDesc:"Credit scores, payment history, and financial risk indicators",opsTitle:"Operations Dashboard",opsDesc:"Delivery performance, quality metrics, and SLA tracking",npdTitle:"New Product Development",npdDesc:"Supplier involvement in product pipeline and innovation",execTitle:"Executive Summary",execDesc:"High-level KPIs and strategic supplier insights",erpTitle:"ERP Integration Architecture",erpDesc:"How SRM connects with Sage X3, Snowflake, and Metabase",bizCase:"Business Case Summary",formTitle:"New Supplier Onboarding",company:"Company Name",email:"Contact Email",category:"Category",pubLiab:"Public Liability Insurance",payTerms:"Payment Terms",prev:"Previous",next:"Next",submit:"Submit Application",footer:"Built by Elena Nutu | HeliosX Operations | Proof of Concept"},
  ro:{title:"Platforma SRM HeliosX",subtitle:"Managementul Relațiilor cu Furnizorii",portfolio:"Portofoliu Furnizori",compliance:"Conformitate",contracts:"Contracte",financial:"Sănătate Financiară",npd:"DNP",operations:"Operațiuni",executive:"Executiv",erp:"ERP & Arhitectură",onboard:"+ Adaugă Furnizor",search:"Caută furnizori...",name:"Nume Furnizor",country:"Țara",tier:"Nivel",status:"Status",risk:"Risc",credit:"Credit",perf:"Performanță",actions:"Acțiuni",view:"Vezi",edit:"Editează",compTitle:"Prezentare Conformitate",compDesc:"Urmăriți certificările, auditurile și statusul reglementar",certified:"Certificat",nonComp:"Neconform",expiring:"Expiră Curând",underReview:"Sub Revizuire",contTitle:"Management Contracte",contDesc:"Contracte active pentru toate nivelurile de furnizori",active:"Activ",renewal:"De Reînnoit",expired:"Expirat",draft:"Ciornă",finTitle:"Monitor Sănătate Financiară",finDesc:"Scoruri de credit, istoric plăți și indicatori de risc",opsTitle:"Tablou Operațiuni",opsDesc:"Performanță livrare, metrici calitate și urmărire SLA",npdTitle:"Dezvoltare Produse Noi",npdDesc:"Implicarea furnizorilor în pipeline-ul de produse",execTitle:"Rezumat Executiv",execDesc:"KPI-uri de nivel înalt și perspective strategice",erpTitle:"Arhitectură Integrare ERP",erpDesc:"Cum se conectează SRM cu Sage X3, Snowflake și Metabase",bizCase:"Rezumat Caz de Afaceri",formTitle:"Înregistrare Furnizor Nou",company:"Numele Companiei",email:"Email Contact",category:"Categorie",pubLiab:"Asigurare Răspundere Publică",payTerms:"Termeni de Plată",prev:"Anterior",next:"Următor",submit:"Trimite Aplicația",footer:"Construit de Elena Nutu | Operațiuni HeliosX | Proof of Concept"},
  fr:{title:"Plateforme SRM HeliosX",subtitle:"Gestion des Relations Fournisseurs",portfolio:"Portefeuille",compliance:"Conformité",contracts:"Contrats",financial:"Santé Financière",npd:"DNP",operations:"Opérations",executive:"Exécutif",erp:"ERP & Architecture",onboard:"+ Ajouter Fournisseur",search:"Rechercher...",name:"Nom",country:"Pays",tier:"Niveau",status:"Statut",risk:"Risque",credit:"Crédit",perf:"Performance",actions:"Actions",view:"Voir",edit:"Modifier",compTitle:"Vue Conformité",compDesc:"Suivez les certifications et le statut réglementaire",certified:"Certifié",nonComp:"Non Conforme",expiring:"Expire Bientôt",underReview:"En Revue",contTitle:"Gestion des Contrats",contDesc:"Contrats actifs pour tous les niveaux",active:"Actif",renewal:"À Renouveler",expired:"Expiré",draft:"Brouillon",finTitle:"Santé Financière",finDesc:"Scores de crédit et indicateurs de risque",opsTitle:"Tableau des Opérations",opsDesc:"Performance de livraison et suivi SLA",npdTitle:"Développement Nouveaux Produits",npdDesc:"Implication fournisseurs dans le pipeline",execTitle:"Résumé Exécutif",execDesc:"KPI de haut niveau",erpTitle:"Architecture ERP",erpDesc:"Connexion SRM avec Sage X3, Snowflake et Metabase",bizCase:"Résumé Business Case",formTitle:"Nouveau Fournisseur",company:"Nom Entreprise",email:"Email",category:"Catégorie",pubLiab:"Assurance RC",payTerms:"Conditions de Paiement",prev:"Précédent",next:"Suivant",submit:"Soumettre",footer:"Construit par Elena Nutu | Opérations HeliosX | Proof of Concept"},
  es:{title:"Plataforma SRM HeliosX",subtitle:"Gestión de Relaciones con Proveedores",portfolio:"Cartera",compliance:"Cumplimiento",contracts:"Contratos",financial:"Salud Financiera",npd:"DNP",operations:"Operaciones",executive:"Ejecutivo",erp:"ERP & Arquitectura",onboard:"+ Agregar Proveedor",search:"Buscar...",name:"Nombre",country:"País",tier:"Nivel",status:"Estado",risk:"Riesgo",credit:"Crédito",perf:"Rendimiento",actions:"Acciones",view:"Ver",edit:"Editar",compTitle:"Resumen Cumplimiento",compDesc:"Seguimiento de certificaciones y auditorías",certified:"Certificado",nonComp:"No Conforme",expiring:"Por Vencer",underReview:"En Revisión",contTitle:"Gestión de Contratos",contDesc:"Contratos activos",active:"Activo",renewal:"Renovación",expired:"Vencido",draft:"Borrador",finTitle:"Monitor Financiero",finDesc:"Puntuaciones de crédito e indicadores",opsTitle:"Panel Operaciones",opsDesc:"Rendimiento de entrega y calidad",npdTitle:"Nuevos Productos",npdDesc:"Participación proveedores en innovación",execTitle:"Resumen Ejecutivo",execDesc:"KPIs de alto nivel",erpTitle:"Arquitectura ERP",erpDesc:"Conexión con Sage X3, Snowflake y Metabase",bizCase:"Resumen Business Case",formTitle:"Nuevo Proveedor",company:"Nombre Empresa",email:"Email",category:"Categoría",pubLiab:"Seguro RC",payTerms:"Términos de Pago",prev:"Anterior",next:"Siguiente",submit:"Enviar",footer:"Construido por Elena Nutu | Operaciones HeliosX | Proof of Concept"},
  de:{title:"HeliosX SRM-Plattform",subtitle:"Lieferantenbeziehungsmanagement",portfolio:"Lieferanten",compliance:"Compliance",contracts:"Verträge",financial:"Finanzstatus",npd:"NPE",operations:"Betrieb",executive:"Führung",erp:"ERP & Architektur",onboard:"+ Lieferant hinzufügen",search:"Suchen...",name:"Name",country:"Land",tier:"Stufe",status:"Status",risk:"Risiko",credit:"Kredit",perf:"Leistung",actions:"Aktionen",view:"Ansehen",edit:"Bearbeiten",compTitle:"Compliance-Übersicht",compDesc:"Zertifizierungen und Auditstatus verfolgen",certified:"Zertifiziert",nonComp:"Nicht Konform",expiring:"Läuft Ab",underReview:"In Prüfung",contTitle:"Vertragsmanagement",contDesc:"Aktive Verträge",active:"Aktiv",renewal:"Verlängerung",expired:"Abgelaufen",draft:"Entwurf",finTitle:"Finanzstatus-Monitor",finDesc:"Kreditscores und Risikoindikatoren",opsTitle:"Betriebs-Dashboard",opsDesc:"Lieferleistung und Qualität",npdTitle:"Neue Produkte",npdDesc:"Lieferantenbeteiligung an Innovation",execTitle:"Zusammenfassung",execDesc:"KPIs auf höchster Ebene",erpTitle:"ERP-Architektur",erpDesc:"SRM-Verbindung mit Sage X3, Snowflake und Metabase",bizCase:"Business Case",formTitle:"Neuer Lieferant",company:"Firmenname",email:"E-Mail",category:"Kategorie",pubLiab:"Haftpflicht",payTerms:"Zahlungsbedingungen",prev:"Zurück",next:"Weiter",submit:"Absenden",footer:"Erstellt von Elena Nutu | HeliosX Operations | Proof of Concept"}
};

const suppliers=[
  {id:1,name:"PharmaCorp UK",country:"UK",flag:"🇬🇧",tier:"Strategic",status:"Approved",risk:"Low",credit:"AA",perf:94,certs:["ISO 9001","GMP","GDP"],insurance:"2026-08-15",contracts:2,contractVal:"£1.2M",spend:"£890K"},
  {id:2,name:"MedSupply Deutschland",country:"Germany",flag:"🇩🇪",tier:"Strategic",status:"Approved",risk:"Low",credit:"A+",perf:91,certs:["ISO 9001","ISO 14001"],insurance:"2026-06-30",contracts:1,contractVal:"€750K",spend:"€620K"},
  {id:3,name:"LogiTrans Express",country:"UK",flag:"🇬🇧",tier:"Preferred",status:"Approved",risk:"Medium",credit:"A",perf:87,certs:["ISO 9001","GDP"],insurance:"2026-03-20",contracts:1,contractVal:"£340K",spend:"£310K"},
  {id:4,name:"Apollo International",country:"New Zealand",flag:"🇳🇿",tier:"Tactical",status:"Audit Failed",risk:"High",credit:"CCC",perf:41,certs:[],insurance:"2025-12-01",contracts:0,contractVal:"—",spend:"$45K"},
  {id:5,name:"Beijing Bolts & Bits",country:"China",flag:"🇨🇳",tier:"Tactical",status:"Pending",risk:"High",credit:"B",perf:45,certs:[],insurance:"2025-09-30",contracts:0,contractVal:"—",spend:"¥280K"},
  {id:6,name:"US Pharma Direct",country:"USA",flag:"🇺🇸",tier:"Preferred",status:"Approved",risk:"Low",credit:"AA",perf:92,certs:["FDA","GMP","ISO 9001"],insurance:"2026-11-01",contracts:3,contractVal:"$2.1M",spend:"$1.8M"}
];

let lang="en",activeTab="portfolio",formStep=0,searchVal="";
const t=()=>T[lang];
const tabKeys=["portfolio","compliance","contracts","financial","npd","operations","executive","erp"];
const tabLabels=k=>({portfolio:t().portfolio,compliance:t().compliance,contracts:t().contracts,financial:t().financial,npd:t().npd,operations:t().operations,executive:t().executive,erp:t().erp}[k]);
const riskC=r=>r==="Low"?"#22c55e":r==="Medium"?"#f59e0b":"#ef4444";
const statusC=s=>s==="Approved"?"#22c55e":s==="Pending"?"#f59e0b":"#ef4444";
const tierC=t=>t==="Strategic"?"#6366f1":t==="Preferred"?"#3b82f6":"#94a3b8";
const perfC=p=>p>80?"#22c55e":p>60?"#f59e0b":"#ef4444";
const creditC=c=>c.startsWith("A")?"#22c55e":c.startsWith("B")?"#f59e0b":"#ef4444";

function changeLang(v){lang=v;render();}
function setTab(k){activeTab=k;render();}
function render(){
  document.getElementById("hTitle").textContent=t().title;
  document.getElementById("hSub").textContent=t().subtitle;
  document.getElementById("btnOnboard").textContent=t().onboard;
  document.getElementById("footerText").textContent=t().footer;
  // tabs
  let tb="";
  tabKeys.forEach(k=>{tb+=`<button class="tab-btn ${activeTab===k?'active':''}" onclick="setTab('${k}')">${tabLabels(k)}</button>`;});
  document.getElementById("tabBar").innerHTML=tb;
  // content
  document.getElementById("tabContent").innerHTML=renderTab();
}

function renderTab(){
  const f=suppliers.filter(s=>s.name.toLowerCase().includes(searchVal)||s.country.toLowerCase().includes(searchVal));
  switch(activeTab){
    case "portfolio": return renderPortfolio(f);
    case "compliance": return renderCompliance();
    case "contracts": return renderContracts();
    case "financial": return renderFinancial();
    case "npd": return renderNPD();
    case "operations": return renderOperations();
    case "executive": return renderExecutive();
    case "erp": return renderERP();
    default: return "";
  }
}

function renderPortfolio(f){
  let rows=f.map(s=>`<tr>
    <td style="font-weight:600">${s.flag} ${s.name}</td><td>${s.country}</td>
    <td><span class="badge" style="background:${tierC(s.tier)}15;color:${tierC(s.tier)}">${s.tier}</span></td>
    <td><span class="badge" style="background:${statusC(s.status)}15;color:${statusC(s.status)}">${s.status}</span></td>
    <td><span style="color:${riskC(s.risk)};font-weight:700">● ${s.risk}</span></td>
    <td style="font-weight:700">${s.credit}</td>
    <td><div class="perf-bar"><span class="perf-fill" style="width:${s.perf}%;background:${perfC(s.perf)}"></span></div> <span style="font-size:10px;color:#64748b">${s.perf}%</span></td>
    <td><button class="btn-sm">${t().view}</button><button class="btn-sm-blue">${t().edit}</button></td>
  </tr>`).join("");
  return `<input class="search" placeholder="${t().search}" oninput="searchVal=this.value.toLowerCase();render()" value="${searchVal}">
  <div style="overflow-x:auto"><table><thead><tr>${[t().name,t().country,t().tier,t().status,t().risk,t().credit,t().perf,t().actions].map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${rows}</tbody></table></div>`;
}

function kpi(label,val,color,sub){return `<div class="kpi" style="border-left:4px solid ${color}"><div class="kpi-label">${label}</div><div class="kpi-val" style="color:${color}">${val}</div>${sub?`<div class="kpi-sub">${sub}</div>`:""}</div>`;}

function renderCompliance(){
  let rows=suppliers.map(s=>{
    let certs=s.certs.length>0?s.certs.map(c=>`<span class="cert-tag cert-ok">✓ ${c}</span>`).join(""):`<span class="cert-tag cert-warn">⚠ No certifications</span>`;
    return `<div class="comp-row"><div><div style="font-weight:700;font-size:13px">${s.flag} ${s.name}</div><div style="font-size:11px;color:#64748b">Insurance expires: ${s.insurance}</div></div><div>${certs}</div><span class="badge" style="background:${statusC(s.status)}15;color:${statusC(s.status)}">${s.status}</span></div>`;
  }).join("");
  return `<h3>${t().compTitle}</h3><p style="color:#64748b;font-size:13px;margin-bottom:16px">${t().compDesc}</p>
  <div class="kpi-row">${kpi(t().certified,"4","#22c55e")}${kpi(t().nonComp,"2","#ef4444")}${kpi(t().expiring,"1","#f59e0b")}${kpi(t().underReview,"1","#3b82f6")}</div>${rows}`;
}

function renderContracts(){
  let cards=suppliers.filter(s=>s.contracts>0).map(s=>`<div class="contract-card"><div><div style="font-weight:700;font-size:13px">${s.flag} ${s.name}</div><div style="font-size:11px;color:#64748b">${s.contracts} contract(s) · Value: ${s.contractVal}</div></div><div style="display:flex;gap:8px;align-items:center"><span style="font-size:12px;color:#64748b">Spend: ${s.spend}</span><span class="badge" style="background:#dcfce7;color:#16a34a">${t().active}</span></div></div>`).join("");
  return `<h3>${t().contTitle}</h3><p style="color:#64748b;font-size:13px;margin-bottom:16px">${t().contDesc}</p>
  <div class="kpi-row">${kpi(t().active,"7","#22c55e")}${kpi(t().renewal,"2","#f59e0b")}${kpi(t().expired,"1","#ef4444")}${kpi(t().draft,"1","#94a3b8")}</div>${cards}`;
}

function renderFinancial(){
  let rows=suppliers.map(s=>`<div class="fin-row"><div style="font-weight:700;font-size:13px">${s.flag} ${s.name}</div><div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap">
    <div class="fin-metric"><div class="fin-metric-label">${t().credit}</div><div style="font-size:16px;font-weight:800;color:${creditC(s.credit)}">${s.credit}</div></div>
    <div class="fin-metric"><div class="fin-metric-label">Spend</div><div style="font-size:13px;font-weight:700">${s.spend}</div></div>
    <div class="fin-metric"><div class="fin-metric-label">${t().risk}</div><span style="color:${riskC(s.risk)};font-weight:700;font-size:13px">● ${s.risk}</span></div>
  </div></div>`).join("");
  return `<h3>${t().finTitle}</h3><p style="color:#64748b;font-size:13px;margin-bottom:16px">${t().finDesc}</p>${rows}`;
}

function renderNPD(){
  const projects=[{name:"Mounjaro Expansion",brand:"MedExpress",supplier:"PharmaCorp UK",stage:"Phase 3 - Clinical",pct:75,color:"#3b82f6"},{name:"New Derma Line",brand:"Dermatica",supplier:"MedSupply Deutschland",stage:"Phase 2 - Formulation",pct:45,color:"#f59e0b"},{name:"US Market Entry",brand:"ZipHealth",supplier:"US Pharma Direct",stage:"Phase 4 - Launch Prep",pct:90,color:"#22c55e"}];
  let cards=projects.map(p=>`<div class="npd-card"><div class="npd-header"><div><div style="font-weight:700;font-size:14px">${p.name}</div><div style="font-size:11px;color:#64748b">${p.brand} · Supplier: ${p.supplier}</div></div><span class="badge" style="background:#eff6ff;color:#3b82f6">${p.stage}</span></div><div class="progress-bar"><div class="progress-fill" style="width:${p.pct}%;background:${p.color}"></div></div><div style="font-size:10px;color:#64748b;margin-top:4px">${p.pct}% complete</div></div>`).join("");
  return `<h3>${t().npdTitle}</h3><p style="color:#64748b;font-size:13px;margin-bottom:16px">${t().npdDesc}</p>${cards}`;
}

function renderOperations(){
  let rows=suppliers.map(s=>`<div class="fin-row"><div style="font-weight:700;font-size:13px">${s.flag} ${s.name}</div><div style="display:flex;gap:12px;align-items:center"><div class="fin-metric"><div class="fin-metric-label">${t().perf}</div><div style="font-size:16px;font-weight:800;color:${perfC(s.perf)}">${s.perf}%</div></div><div class="perf-bar" style="width:80px"><span class="perf-fill" style="width:${s.perf}%;background:${perfC(s.perf)}"></span></div></div></div>`).join("");
  return `<h3>${t().opsTitle}</h3><p style="color:#64748b;font-size:13px;margin-bottom:16px">${t().opsDesc}</p>
  <div class="kpi-row">${kpi("On-Time Delivery","91%","#22c55e","Target: 95%")}${kpi("Quality Score","96%","#22c55e","Target: 95%")}${kpi("Response Time","4.2h","#f59e0b","Target: <4h")}${kpi("Returns Rate","2.1%","#22c55e","Target: <3%")}</div>${rows}`;
}

function renderExecutive(){
  const actions=[{t:"Apollo International — Audit failed, review required",c:"#ef4444"},{t:"Beijing Bolts & Bits — Audit pending approval",c:"#ef4444"},{t:"LogiTrans Express — Insurance expiring 20 Mar 2026",c:"#f59e0b"},{t:"2 contracts up for renewal in Q2 2026",c:"#3b82f6"}];
  return `<h3>${t().execTitle}</h3><p style="color:#64748b;font-size:13px;margin-bottom:16px">${t().execDesc}</p>
  <div class="exec-grid">
    <div class="exec-card" style="background:linear-gradient(135deg,#1e3a5f,#2563eb)"><div class="exec-label">Total Supplier Base</div><div class="exec-val">531</div><div class="exec-sub">Across UK, US, DE, CN, NZ</div></div>
    <div class="exec-card" style="background:linear-gradient(135deg,#059669,#10b981)"><div class="exec-label">Total Contract Value</div><div class="exec-val">£5.2M</div><div class="exec-sub">7 active contracts</div></div>
    <div class="exec-card" style="background:linear-gradient(135deg,#d97706,#f59e0b)"><div class="exec-label">Cost Savings Target</div><div class="exec-val">7-10%</div><div class="exec-sub">On total annual spend</div></div>
    <div class="exec-card" style="background:linear-gradient(135deg,#7c3aed,#8b5cf6)"><div class="exec-label">Time Saving</div><div class="exec-val">10h/wk</div><div class="exec-sub">~£34K/year efficiency</div></div>
  </div>
  <div style="background:#f8fafc;border-radius:10px;padding:16px"><h4 style="margin-bottom:8px">Actions Required</h4>${actions.map(a=>`<div class="action-item" style="border-color:${a.c}">⚠ ${a.t}</div>`).join("")}</div>`;
}

function renderERP(){
  const layers=[["🔷 SRM Layer (NEW)","#1e40af",["Supplier Profiles","Risk & Compliance","Performance Scorecards","Contract Lifecycle","Onboarding"]],["🔗 Middleware — API","#6366f1",["Vendor Master Sync","PO & Invoice Data","Spend Analytics Feed","Compliance Push"]],["🏦 ERP — Sage X3","#059669",["Purchase Orders","Invoices & Payments","Vendor Master","Spend Ledger"]],["📊 Data & Analytics","#71717a",["Snowflake","Metabase","Hex"]]];
  let html=`<h3>${t().erpTitle}</h3><p style="color:#64748b;font-size:13px;margin-bottom:16px">${t().erpDesc}</p>`;
  layers.forEach(([title,color,items])=>{
    html+=`<div class="erp-layer" style="border:2px solid ${color}40;border-left:6px solid ${color}"><div class="erp-title" style="color:${color}">${title}</div><div class="erp-tags">${items.map(i=>`<span class="erp-tag" style="background:${color}10;border:1px solid ${color}20">${i}</span>`).join("")}</div></div>`;
  });
  html+=`<div class="biz-case"><div style="font-weight:700;margin-bottom:10px">💬 ${t().bizCase}</div>`;
  [["Annual Platform Cost","~£37.5k (SRM Platform)"],["Suppliers Covered","531 across 5 brands"],["Est. Time Saving","10 hrs/wk · ~£34k/yr"],["Compliance Risk Reduction","High — currently manual"],["ERP Integration","Sage X3 → push/pull via API"]].forEach(([k,v])=>{
    html+=`<div class="biz-row"><span style="color:#93c5fd">${k}</span><span style="font-weight:700">${v}</span></div>`;
  });
  html+=`</div>`;
  return html;
}

// FORM
const formFields=[
  {label:"company",type:"text",ph:"Acme Ltd"},
  {label:"email",type:"email",ph:"contact@supplier.com"},
  {label:"category",type:"select",opts:["","Pharmaceutical / API","Packaging","Logistics / Distribution","IT / Professional Services","Raw Materials"]},
  {label:"pubLiab",type:"text",ph:"£5,000,000"},
  {label:"payTerms",type:"select",opts:["","Net 30","Net 45","Net 60"]}
];

function openForm(){formStep=0;renderForm();document.getElementById("formModal").classList.remove("hidden");}
function closeForm(){document.getElementById("formModal").classList.add("hidden");}
function prevStep(){if(formStep>0){formStep--;renderForm();}}
function nextStep(){if(formStep<4){formStep++;renderForm();}else{alert("Supplier application submitted successfully!");closeForm();}}

function renderForm(){
  document.getElementById("formTitle").textContent=t().formTitle;
  let steps="";for(let i=0;i<5;i++)steps+=`<div class="step ${i<=formStep?'active':''}"></div>`;
  document.getElementById("formSteps").innerHTML=steps;
  const f=formFields[formStep];
  const label=t()[f.label]||f.label;
  let html=`<label class="form-label">${label}</label>`;
  if(f.type==="select"){
    html+=`<select class="form-select">${f.opts.map(o=>`<option value="${o}">${o||"Select..."}</option>`).join("")}</select>`;
  }else{
    html+=`<input class="form-input" type="${f.type}" placeholder="${f.ph||""}">`;
  }
  document.getElementById("formContent").innerHTML=html;
  document.getElementById("btnPrev").textContent=t().prev;
  document.getElementById("btnPrev").disabled=formStep===0;
  const btnNext=document.getElementById("btnNext");
  if(formStep<4){btnNext.textContent=t().next;btnNext.className="btn-next";}
  else{btnNext.textContent="✅ "+t().submit;btnNext.className="btn-submit";}
}

// INIT
render();
</script>
</body>
</html>
