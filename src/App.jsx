import React, { useState } from 'react';

const translations = {
  en: { title:"HeliosX SRM Platform", subtitle:"Supplier Relationship Management", portfolio:"Supplier Portfolio", compliance:"Compliance", contracts:"Contracts", financial:"Financial Health", npd:"NPD", operations:"Operations", executive:"Executive", erp:"ERP & Architecture", onboard:"+ Onboard Supplier", search:"Search suppliers...", name:"Supplier Name", country:"Country", tier:"Tier", status:"Status", risk:"Risk", credit:"Credit", perf:"Performance", actions:"Actions", view:"View", edit:"Edit", strategic:"Strategic", preferred:"Preferred", tactical:"Tactical", approved:"Approved", pending:"Pending", auditFailed:"Audit Failed", low:"Low", medium:"Medium", high:"High", critical:"Critical", compTitle:"Compliance Overview", compDesc:"Track supplier certifications, audits, and regulatory status", certified:"Certified", nonCompliant:"Non-Compliant", expiringSoon:"Expiring Soon", underReview:"Under Review", contTitle:"Contract Management", contDesc:"Active contracts across all supplier tiers", active:"Active", renewal:"Up for Renewal", expired:"Expired", draft:"Draft", finTitle:"Financial Health Monitor", finDesc:"Credit scores, payment history, and financial risk indicators", opsTitle:"Operations Dashboard", opsDesc:"Delivery performance, quality metrics, and SLA tracking", npdTitle:"New Product Development", npdDesc:"Supplier involvement in product pipeline and innovation", execTitle:"Executive Summary", execDesc:"High-level KPIs and strategic supplier insights", erpTitle:"ERP Integration Architecture", erpDesc:"How SRM connects with Sage X3, Snowflake, and Metabase", bizCase:"Business Case Summary", formTitle:"New Supplier Onboarding", companyName:"Company Name", contactEmail:"Contact Email", contactPhone:"Phone", category:"Category", pubLiability:"Public Liability Insurance", payTerms:"Payment Terms", previous:"Previous", next:"Next", submit:"Submit Application", builtBy:"Built by Elena Nutu | HeliosX Operations | Proof of Concept for Kodiak Hub Evaluation" },
  ro: { title:"Platforma SRM HeliosX", subtitle:"Managementul Relațiilor cu Furnizorii", portfolio:"Portofoliu Furnizori", compliance:"Conformitate", contracts:"Contracte", financial:"Sănătate Financiară", npd:"DNP", operations:"Operațiuni", executive:"Executiv", erp:"ERP & Arhitectură", onboard:"+ Adaugă Furnizor", search:"Caută furnizori...", name:"Nume Furnizor", country:"Țara", tier:"Nivel", status:"Status", risk:"Risc", credit:"Credit", perf:"Performanță", actions:"Acțiuni", view:"Vezi", edit:"Editează", strategic:"Strategic", preferred:"Preferat", tactical:"Tactic", approved:"Aprobat", pending:"În așteptare", auditFailed:"Audit Eșuat", low:"Scăzut", medium:"Mediu", high:"Ridicat", critical:"Critic", compTitle:"Prezentare Conformitate", compDesc:"Urmăriți certificările, auditurile și statusul reglementar", certified:"Certificat", nonCompliant:"Neconform", expiringSoon:"Expiră Curând", underReview:"Sub Revizuire", contTitle:"Management Contracte", contDesc:"Contracte active pentru toate nivelurile de furnizori", active:"Activ", renewal:"De Reînnoit", expired:"Expirat", draft:"Ciornă", finTitle:"Monitor Sănătate Financiară", finDesc:"Scoruri de credit, istoric plăți și indicatori de risc", opsTitle:"Tablou Operațiuni", opsDesc:"Performanță livrare, metrici calitate și urmărire SLA", npdTitle:"Dezvoltare Produse Noi", npdDesc:"Implicarea furnizorilor în pipeline-ul de produse", execTitle:"Rezumat Executiv", execDesc:"KPI-uri de nivel înalt și perspective strategice", erpTitle:"Arhitectură Integrare ERP", erpDesc:"Cum se conectează SRM cu Sage X3, Snowflake și Metabase", bizCase:"Rezumat Caz de Afaceri", formTitle:"Înregistrare Furnizor Nou", companyName:"Numele Companiei", contactEmail:"Email Contact", contactPhone:"Telefon", category:"Categorie", pubLiability:"Asigurare Răspundere Publică", payTerms:"Termeni de Plată", previous:"Anterior", next:"Următor", submit:"Trimite Aplicația", builtBy:"Construit de Elena Nutu | Operațiuni HeliosX | Concept pentru Evaluare Kodiak Hub" },
  fr: { title:"Plateforme SRM HeliosX", subtitle:"Gestion des Relations Fournisseurs", portfolio:"Portefeuille Fournisseurs", compliance:"Conformité", contracts:"Contrats", financial:"Santé Financière", npd:"DNP", operations:"Opérations", executive:"Exécutif", erp:"ERP & Architecture", onboard:"+ Ajouter Fournisseur", search:"Rechercher...", name:"Nom Fournisseur", country:"Pays", tier:"Niveau", status:"Statut", risk:"Risque", credit:"Crédit", perf:"Performance", actions:"Actions", view:"Voir", edit:"Modifier", strategic:"Stratégique", preferred:"Préféré", tactical:"Tactique", approved:"Approuvé", pending:"En attente", auditFailed:"Audit Échoué", low:"Faible", medium:"Moyen", high:"Élevé", critical:"Critique", compTitle:"Vue Conformité", compDesc:"Suivez les certifications et le statut réglementaire", certified:"Certifié", nonCompliant:"Non Conforme", expiringSoon:"Expire Bientôt", underReview:"En Revue", contTitle:"Gestion des Contrats", contDesc:"Contrats actifs pour tous les niveaux", active:"Actif", renewal:"À Renouveler", expired:"Expiré", draft:"Brouillon", finTitle:"Santé Financière", finDesc:"Scores de crédit et indicateurs de risque", opsTitle:"Tableau des Opérations", opsDesc:"Performance de livraison et suivi SLA", npdTitle:"Développement Nouveaux Produits", npdDesc:"Implication des fournisseurs dans le pipeline", execTitle:"Résumé Exécutif", execDesc:"KPI de haut niveau", erpTitle:"Architecture ERP", erpDesc:"Connexion SRM avec Sage X3, Snowflake et Metabase", bizCase:"Résumé Business Case", formTitle:"Nouveau Fournisseur", companyName:"Nom de l'Entreprise", contactEmail:"Email", contactPhone:"Téléphone", category:"Catégorie", pubLiability:"Assurance RC", payTerms:"Conditions de Paiement", previous:"Précédent", next:"Suivant", submit:"Soumettre", builtBy:"Construit par Elena Nutu | Opérations HeliosX | Preuve de Concept Kodiak Hub" },
  es: { title:"Plataforma SRM HeliosX", subtitle:"Gestión de Relaciones con Proveedores", portfolio:"Cartera de Proveedores", compliance:"Cumplimiento", contracts:"Contratos", financial:"Salud Financiera", npd:"DNP", operations:"Operaciones", executive:"Ejecutivo", erp:"ERP & Arquitectura", onboard:"+ Agregar Proveedor", search:"Buscar...", name:"Nombre", country:"País", tier:"Nivel", status:"Estado", risk:"Riesgo", credit:"Crédito", perf:"Rendimiento", actions:"Acciones", view:"Ver", edit:"Editar", strategic:"Estratégico", preferred:"Preferido", tactical:"Táctico", approved:"Aprobado", pending:"Pendiente", auditFailed:"Auditoría Fallida", low:"Bajo", medium:"Medio", high:"Alto", critical:"Crítico", compTitle:"Resumen de Cumplimiento", compDesc:"Seguimiento de certificaciones y auditorías", certified:"Certificado", nonCompliant:"No Conforme", expiringSoon:"Por Vencer", underReview:"En Revisión", contTitle:"Gestión de Contratos", contDesc:"Contratos activos", active:"Activo", renewal:"Renovación", expired:"Vencido", draft:"Borrador", finTitle:"Monitor Financiero", finDesc:"Puntuaciones de crédito e indicadores de riesgo", opsTitle:"Panel de Operaciones", opsDesc:"Rendimiento de entrega y métricas de calidad", npdTitle:"Desarrollo de Nuevos Productos", npdDesc:"Participación de proveedores en innovación", execTitle:"Resumen Ejecutivo", execDesc:"KPIs de alto nivel", erpTitle:"Arquitectura ERP", erpDesc:"Conexión con Sage X3, Snowflake y Metabase", bizCase:"Resumen Business Case", formTitle:"Nuevo Proveedor", companyName:"Nombre de Empresa", contactEmail:"Email", contactPhone:"Teléfono", category:"Categoría", pubLiability:"Seguro RC", payTerms:"Términos de Pago", previous:"Anterior", next:"Siguiente", submit:"Enviar", builtBy:"Construido por Elena Nutu | Operaciones HeliosX | Prueba de Concepto Kodiak Hub" },
  de: { title:"HeliosX SRM-Plattform", subtitle:"Lieferantenbeziehungsmanagement", portfolio:"Lieferantenportfolio", compliance:"Compliance", contracts:"Verträge", financial:"Finanzstatus", npd:"NPE", operations:"Betrieb", executive:"Führungsebene", erp:"ERP & Architektur", onboard:"+ Lieferant hinzufügen", search:"Suchen...", name:"Lieferantenname", country:"Land", tier:"Stufe", status:"Status", risk:"Risiko", credit:"Kredit", perf:"Leistung", actions:"Aktionen", view:"Ansehen", edit:"Bearbeiten", strategic:"Strategisch", preferred:"Bevorzugt", tactical:"Taktisch", approved:"Genehmigt", pending:"Ausstehend", auditFailed:"Audit Fehlgeschlagen", low:"Niedrig", medium:"Mittel", high:"Hoch", critical:"Kritisch", compTitle:"Compliance-Übersicht", compDesc:"Zertifizierungen und Auditstatus verfolgen", certified:"Zertifiziert", nonCompliant:"Nicht Konform", expiringSoon:"Läuft Bald Ab", underReview:"In Prüfung", contTitle:"Vertragsmanagement", contDesc:"Aktive Verträge", active:"Aktiv", renewal:"Zur Verlängerung", expired:"Abgelaufen", draft:"Entwurf", finTitle:"Finanzstatus-Monitor", finDesc:"Kreditscores und Risikoindikatoren", opsTitle:"Betriebs-Dashboard", opsDesc:"Lieferleistung und Qualitätskennzahlen", npdTitle:"Neue Produktentwicklung", npdDesc:"Lieferantenbeteiligung an Innovation", execTitle:"Zusammenfassung", execDesc:"KPIs auf höchster Ebene", erpTitle:"ERP-Architektur", erpDesc:"SRM-Verbindung mit Sage X3, Snowflake und Metabase", bizCase:"Business Case Zusammenfassung", formTitle:"Neuer Lieferant", companyName:"Firmenname", contactEmail:"E-Mail", contactPhone:"Telefon", category:"Kategorie", pubLiability:"Haftpflichtversicherung", payTerms:"Zahlungsbedingungen", previous:"Zurück", next:"Weiter", submit:"Absenden", builtBy:"Erstellt von Elena Nutu | HeliosX Operations | Proof of Concept für Kodiak Hub" }
};

const suppliers = [
  { id:1, name:"PharmaCorp UK", country:"UK", flag:"🇬🇧", tier:"Strategic", status:"Approved", risk:"Low", credit:"AA", perf:94, certs:["ISO 9001","GMP","GDP"], insurance:"2026-08-15", contracts:2, contractVal:"£1.2M", spend:"£890K" },
  { id:2, name:"MedSupply Deutschland", country:"Germany", flag:"🇩🇪", tier:"Strategic", status:"Approved", risk:"Low", credit:"A+", perf:91, certs:["ISO 9001","ISO 14001"], insurance:"2026-06-30", contracts:1, contractVal:"€750K", spend:"€620K" },
  { id:3, name:"LogiTrans Express", country:"UK", flag:"🇬🇧", tier:"Preferred", status:"Approved", risk:"Medium", credit:"A", perf:87, certs:["ISO 9001","GDP"], insurance:"2026-03-20", contracts:1, contractVal:"£340K", spend:"£310K" },
  { id:4, name:"Apollo International", country:"New Zealand", flag:"🇳🇿", tier:"Tactical", status:"Audit Failed", risk:"High", credit:"CCC", perf:41, certs:[], insurance:"2025-12-01", contracts:0, contractVal:"—", spend:"$45K" },
  { id:5, name:"Beijing Bolts & Bits", country:"China", flag:"🇨🇳", tier:"Tactical", status:"Pending", risk:"High", credit:"B", perf:45, certs:[], insurance:"2025-09-30", contracts:0, contractVal:"—", spend:"¥280K" },
  { id:6, name:"US Pharma Direct", country:"USA", flag:"🇺🇸", tier:"Preferred", status:"Approved", risk:"Low", credit:"AA", perf:92, certs:["FDA","GMP","ISO 9001"], insurance:"2026-11-01", contracts:3, contractVal:"$2.1M", spend:"$1.8M" }
];

const riskColor = r => r==="Low"?"#22c55e":r==="Medium"?"#f59e0b":r==="High"?"#ef4444":"#dc2626";
const statusColor = s => s==="Approved"?"#22c55e":s==="Pending"?"#f59e0b":"#ef4444";
const tierColor = t => t==="Strategic"?"#6366f1":t==="Preferred"?"#3b82f6":"#94a3b8";

function App() {
  const [lang, setLang] = useState("en");
  const [tab, setTab] = useState("Supplier Portfolio");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({});
  const t = translations[lang];

  const tabs = [
    { key:"Supplier Portfolio", label:t.portfolio },
    { key:"Compliance", label:t.compliance },
    { key:"Contracts", label:t.contracts },
    { key:"Financial Health", label:t.financial },
    { key:"NPD", label:t.npd },
    { key:"Operations", label:t.operations },
    { key:"Executive", label:t.executive },
    { key:"ERP & Architecture", label:t.erp }
  ];

  const filtered = suppliers.filter(s => s.name.toLowerCase().includes(search.toLowerCase()) || s.country.toLowerCase().includes(search.toLowerCase()));
  const updateForm = (k,v) => setFormData({...formData,[k]:v});
  const handleFormSubmit = () => { alert("Supplier application submitted successfully!"); setShowForm(false); setFormStep(0); setFormData({}); };

  const KPI = ({label,value,color,sub}) => (
    <div style={{background:"#fff",borderRadius:10,padding:16,borderLeft:`4px solid ${color||"#3b82f6"}`,flex:1,minWidth:140}}>
      <div style={{fontSize:11,color:"#64748b",textTransform:"uppercase",fontWeight:600}}>{label}</div>
      <div style={{fontSize:28,fontWeight:800,marginTop:4,color:color||"#1e293b"}}>{value}</div>
      {sub && <div style={{fontSize:11,color:"#94a3b8",marginTop:2}}>{sub}</div>}
    </div>
  );

  return (
    <div style={{maxWidth:1200,margin:"0 auto",padding:16,fontFamily:"'Segoe UI',system-ui,sans-serif",background:"#f1f5f9",minHeight:"100vh"}}>
      {/* Header */}
      <div style={{background:"linear-gradient(135deg,#1e3a5f 0%,#2563eb 100%)",borderRadius:12,padding:20,marginBottom:16,color:"#fff",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
        <div>
          <h1 style={{margin:0,fontSize:22,fontWeight:800}}>{t.title}</h1>
          <p style={{margin:"4px 0 0",opacity:0.8,fontSize:13}}>{t.subtitle}</p>
        </div>
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          <select value={lang} onChange={e=>setLang(e.target.value)} style={{padding:"6px 12px",borderRadius:6,border:"1px solid rgba(255,255,255,0.3)",background:"rgba(255,255,255,0.15)",color:"#fff",fontSize:12,fontWeight:600}}>
            <option value="en" style={{color:"#000"}}>🇬🇧 EN</option>
            <option value="ro" style={{color:"#000"}}>🇷🇴 RO</option>
            <option value="fr" style={{color:"#000"}}>🇫🇷 FR</option>
            <option value="es" style={{color:"#000"}}>🇪🇸 ES</option>
            <option value="de" style={{color:"#000"}}>🇩🇪 DE</option>
          </select>
          <button onClick={()=>setShowForm(true)} style={{padding:"8px 16px",borderRadius:8,border:"none",background:"#22c55e",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:12}}>{t.onboard}</button>
        </div>
      </div>

      {/* KPI Bar */}
      <div style={{display:"flex",gap:10,marginBottom:16,flexWrap:"wrap"}}>
        <KPI label="Total Suppliers" value="531" color="#3b82f6" sub="Across 5 brands"/>
        <KPI label={t.compliance} value="94%" color="#22c55e" sub="4 {t.nonCompliant}"/>
        <KPI label="Avg Performance" value="75%" color="#f59e0b" sub="Target: 85%"/>
        <KPI label="Active Contracts" value="7" color="#6366f1" sub="£5.2M total value"/>
        <KPI label="⚠ {t.nonCompliant}" value="2" color="#ef4444" sub="Action required"/>
      </div>

      {/* Tabs */}
      <div style={{display:"flex",gap:4,marginBottom:16,flexWrap:"wrap",background:"#fff",borderRadius:10,padding:6}}>
        {tabs.map(tb=>(
          <button key={tb.key} onClick={()=>setTab(tb.key)} style={{padding:"8px 14px",borderRadius:8,border:"none",background:tab===tb.key?"#1e3a5f":"transparent",color:tab===tb.key?"#fff":"#64748b",fontWeight:600,cursor:"pointer",fontSize:12,transition:"all 0.2s"}}>{tb.label}</button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{background:"#fff",borderRadius:12,padding:20,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.08)"}}>

        {/* SUPPLIER PORTFOLIO */}
        {tab==="Supplier Portfolio" && (<div>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder={t.search} style={{width:"100%",padding:"10px 14px",border:"1px solid #e2e8f0",borderRadius:8,marginBottom:16,fontSize:13}}/>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
              <thead>
                <tr style={{background:"#f8fafc",textAlign:"left"}}>
                  {[t.name,t.country,t.tier,t.status,t.risk,t.credit,t.perf,t.actions].map(h=><th key={h} style={{padding:"10px 12px",borderBottom:"2px solid #e2e8f0",fontWeight:700,color:"#475569"}}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {filtered.map(s=>(
                  <tr key={s.id} style={{borderBottom:"1px solid #f1f5f9"}}>
                    <td style={{padding:"10px 12px",fontWeight:600}}>{s.flag} {s.name}</td>
                    <td style={{padding:"10px 12px"}}>{s.country}</td>
                    <td style={{padding:"10px 12px"}}><span style={{background:`${tierColor(s.tier)}15`,color:tierColor(s.tier),padding:"3px 10px",borderRadius:20,fontWeight:600,fontSize:11}}>{s.tier}</span></td>
                    <td style={{padding:"10px 12px"}}><span style={{background:`${statusColor(s.status)}15`,color:statusColor(s.status),padding:"3px 10px",borderRadius:20,fontWeight:600,fontSize:11}}>{s.status}</span></td>
                    <td style={{padding:"10px 12px"}}><span style={{color:riskColor(s.risk),fontWeight:700}}>● {s.risk}</span></td>
                    <td style={{padding:"10px 12px",fontWeight:700}}>{s.credit}</td>
                    <td style={{padding:"10px 12px"}}>
                      <div style={{background:"#e2e8f0",borderRadius:4,height:8,width:80}}>
                        <div style={{width:`${s.perf}%`,background:s.perf>80?"#22c55e":s.perf>60?"#f59e0b":"#ef4444",borderRadius:4,height:8}}/>
                      </div>
                      <span style={{fontSize:10,color:"#64748b"}}>{s.perf}%</span>
                    </td>
                    <td style={{padding:"10px 12px"}}>
                      <button style={{padding:"4px 10px",borderRadius:6,border:"1px solid #e2e8f0",background:"#f8fafc",cursor:"pointer",fontSize:11,marginRight:4}}>{t.view}</button>
                      <button style={{padding:"4px 10px",borderRadius:6,border:"1px solid #3b82f6",background:"#eff6ff",color:"#3b82f6",cursor:"pointer",fontSize:11}}>{t.edit}</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>)}

        {/* COMPLIANCE */}
        {tab==="Compliance" && (<div>
          <h3 style={{marginBottom:4}}>{t.compTitle}</h3>
          <p style={{color:"#64748b",fontSize:13,marginBottom:16}}>{t.compDesc}</p>
          <div style={{display:"flex",gap:10,marginBottom:20,flexWrap:"wrap"}}>
            <KPI label={t.certified} value="4" color="#22c55e"/>
            <KPI label={t.nonCompliant} value="2" color="#ef4444"/>
            <KPI label={t.expiringSoon} value="1" color="#f59e0b"/>
            <KPI label={t.underReview} value="1" color="#3b82f6"/>
          </div>
          {suppliers.map(s=>(
            <div key={s.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:12,borderBottom:"1px solid #f1f5f9",flexWrap:"wrap",gap:8}}>
              <div>
                <div style={{fontWeight:700,fontSize:13}}>{s.flag} {s.name}</div>
                <div style={{fontSize:11,color:"#64748b"}}>Insurance expires: {s.insurance}</div>
              </div>
              <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                {s.certs.length>0 ? s.certs.map(c=><span key={c} style={{background:"#dcfce7",color:"#16a34a",padding:"2px 8px",borderRadius:12,fontSize:10,fontWeight:600}}>✓ {c}</span>) : <span style={{background:"#fef2f2",color:"#ef4444",padding:"2px 8px",borderRadius:12,fontSize:10,fontWeight:600}}>⚠ No certifications</span>}
              </div>
              <span style={{background:`${statusColor(s.status)}15`,color:statusColor(s.status),padding:"4px 12px",borderRadius:20,fontWeight:600,fontSize:11}}>{s.status}</span>
            </div>
          ))}
        </div>)}

        {/* CONTRACTS */}
        {tab==="Contracts" && (<div>
          <h3 style={{marginBottom:4}}>{t.contTitle}</h3>
          <p style={{color:"#64748b",fontSize:13,marginBottom:16}}>{t.contDesc}</p>
          <div style={{display:"flex",gap:10,marginBottom:20,flexWrap:"wrap"}}>
            <KPI label={t.active} value="7" color="#22c55e"/>
            <KPI label={t.renewal} value="2" color="#f59e0b"/>
            <KPI label={t.expired} value="1" color="#ef4444"/>
            <KPI label={t.draft} value="1" color="#94a3b8"/>
          </div>
          {suppliers.filter(s=>s.contracts>0).map(s=>(
            <div key={s.id} style={{background:"#f8fafc",borderRadius:10,padding:14,marginBottom:8,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8}}>
              <div>
                <div style={{fontWeight:700,fontSize:13}}>{s.flag} {s.name}</div>
                <div style={{fontSize:11,color:"#64748b"}}>{s.contracts} contract(s) · Value: {s.contractVal}</div>
              </div>
              <div style={{display:"flex",gap:8,alignItems:"center"}}>
                <span style={{fontSize:12,color:"#64748b"}}>Annual Spend: {s.spend}</span>
                <span style={{background:"#dcfce7",color:"#16a34a",padding:"4px 12px",borderRadius:20,fontSize:11,fontWeight:600}}>{t.active}</span>
              </div>
            </div>
          ))}
        </div>)}

        {/* FINANCIAL HEALTH */}
        {tab==="Financial Health" && (<div>
          <h3 style={{marginBottom:4}}>{t.finTitle}</h3>
          <p style={{color:"#64748b",fontSize:13,marginBottom:16}}>{t.finDesc}</p>
          {suppliers.map(s=>(
            <div key={s.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:12,borderBottom:"1px solid #f1f5f9",flexWrap:"wrap",gap:8}}>
              <div style={{fontWeight:700,fontSize:13}}>{s.flag} {s.name}</div>
              <div style={{display:"flex",gap:16,alignItems:"center",flexWrap:"wrap"}}>
                <div style={{textAlign:"center"}}>
                  <div style={{fontSize:10,color:"#64748b"}}>{t.credit}</div>
                  <div style={{fontSize:16,fontWeight:800,color:s.credit.startsWith("A")?"#22c55e":s.credit.startsWith("B")?"#f59e0b":"#ef4444"}}>{s.credit}</div>
                </div>
                <div style={{textAlign:"center"}}>
                  <div style={{fontSize:10,color:"#64748b"}}>Spend</div>
                  <div style={{fontSize:13,fontWeight:700}}>{s.spend}</div>
                </div>
                <div style={{textAlign:"center"}}>
                  <div style={{fontSize:10,color:"#64748b"}}>{t.risk}</div>
                  <span style={{color:riskColor(s.risk),fontWeight:700,fontSize:13}}>● {s.risk}</span>
                </div>
              </div>
            </div>
          ))}
        </div>)}

        {/* NPD */}
        {tab==="NPD" && (<div>
          <h3 style={{marginBottom:4}}>{t.npdTitle}</h3>
          <p style={{color:"#64748b",fontSize:13,marginBottom:16}}>{t.npdDesc}</p>
          {[{name:"Mounjaro Expansion",brand:"MedExpress",supplier:"PharmaCorp UK",stage:"Phase 3 - Clinical",pct:75},{name:"New Derma Line",brand:"Dermatica",supplier:"MedSupply Deutschland",stage:"Phase 2 - Formulation",pct:45},{name:"US Market Entry",brand:"ZipHealth",supplier:"US Pharma Direct",stage:"Phase 4 - Launch Prep",pct:90}].map((p,i)=>(<div key={i} style={{background:"#f8fafc",borderRadius:10,padding:14,marginBottom:8}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
              <div><div style={{fontWeight:700,fontSize:14}}>{p.name}</div><div style={{fontSize:11,color:"#64748b"}}>{p.brand} · Supplier: {p.supplier}</div></div>
              <span style={{background:"#eff6ff",color:"#3b82f6",padding:"4px 12px",borderRadius:20,fontSize:11,fontWeight:600}}>{p.stage}</span>
            </div>
            <div style={{background:"#e2e8f0",borderRadius:4,height:8}}>
              <div style={{width:`${p.pct}%`,background:p.pct>80?"#22c55e":p.pct>50?"#3b82f6":"#f59e0b",borderRadius:4,height:8,transition:"width 0.5s"}}/>
            </div>
            <div style={{fontSize:10,color:"#64748b",marginTop:4}}>{p.pct}% complete</div>
          </div>))}
        </div>)}

        {/* OPERATIONS */}
        {tab==="Operations" && (<div>
          <h3 style={{marginBottom:4}}>{t.opsTitle}</h3>
          <p style={{color:"#64748b",fontSize:13,marginBottom:16}}>{t.opsDesc}</p>
          <div style={{display:"flex",gap:10,marginBottom:20,flexWrap:"wrap"}}>
            <KPI label="On-Time Delivery" value="91%" color="#22c55e" sub="Target: 95%"/>
            <KPI label="Quality Score" value="96%" color="#22c55e" sub="Target: 95%"/>
            <KPI label="Response Time" value="4.2h" color="#f59e0b" sub="Target: <4h"/>
            <KPI label="Returns Rate" value="2.1%" color="#22c55e" sub="Target: <3%"/>
          </div>
          {suppliers.map(s=>(<div key={s.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:12,borderBottom:"1px solid #f1f5f9",flexWrap:"wrap",gap:8}}>
            <div style={{fontWeight:700,fontSize:13}}>{s.flag} {s.name}</div>
            <div style={{display:"flex",gap:12,alignItems:"center"}}>
              <div style={{textAlign:"center"}}><div style={{fontSize:10,color:"#64748b"}}>{t.perf}</div><div style={{fontSize:16,fontWeight:800,color:s.perf>80?"#22c55e":s.perf>60?"#f59e0b":"#ef4444"}}>{s.perf}%</div></div>
              <div style={{width:80,background:"#e2e8f0",borderRadius:4,height:8}}><div style={{width:`${s.perf}%`,background:s.perf>80?"#22c55e":s.perf>60?"#f59e0b":"#ef4444",borderRadius:4,height:8}}/></div>
            </div>
          </div>))}
        </div>)}

        {/* EXECUTIVE */}
        {tab==="Executive" && (<div>
          <h3 style={{marginBottom:4}}>{t.execTitle}</h3>
          <p style={{color:"#64748b",fontSize:13,marginBottom:16}}>{t.execDesc}</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:12,marginBottom:20}}>
            <div style={{background:"linear-gradient(135deg,#1e3a5f,#2563eb)",borderRadius:10,padding:16,color:"#fff"}}><div style={{fontSize:11,opacity:0.8}}>Total Supplier Base</div><div style={{fontSize:32,fontWeight:800}}>531</div><div style={{fontSize:11,opacity:0.7}}>Across UK, US, DE, CN, NZ</div></div>
            <div style={{background:"linear-gradient(135deg,#059669,#10b981)",borderRadius:10,padding:16,color:"#fff"}}><div style={{fontSize:11,opacity:0.8}}>Total Contract Value</div><div style={{fontSize:32,fontWeight:800}}>£5.2M</div><div style={{fontSize:11,opacity:0.7}}>7 active contracts</div></div>
            <div style={{background:"linear-gradient(135deg,#d97706,#f59e0b)",borderRadius:10,padding:16,color:"#fff"}}><div style={{fontSize:11,opacity:0.8}}>Cost Savings Target</div><div style={{fontSize:32,fontWeight:800}}>7-10%</div><div style={{fontSize:11,opacity:0.7}}>On total annual spend</div></div>
            <div style={{background:"linear-gradient(135deg,#7c3aed,#8b5cf6)",borderRadius:10,padding:16,color:"#fff"}}><div style={{fontSize:11,opacity:0.8}}>Time Saving</div><div style={{fontSize:32,fontWeight:800}}>10h/wk</div><div style={{fontSize:11,opacity:0.7}}>~£34K/year efficiency</div></div>
          </div>
          <div style={{background:"#f8fafc",borderRadius:10,padding:16}}>
            <h4 style={{marginBottom:8}}>Actions Required</h4>
            {[{text:"Apollo International — Audit failed, review required",color:"#ef4444"},{text:"Beijing Bolts & Bits — Audit pending approval",color:"#ef4444"},{text:"LogiTrans Express — Insurance expiring 20 Mar 2026",color:"#f59e0b"},{text:"2 contracts up for renewal in Q2 2026",color:"#3b82f6"}].map((a,i)=><div key={i} style={{padding:"8px 12px",borderLeft:`3px solid ${a.color}`,marginBottom:6,background:"#fff",borderRadius:"0 6px 6px 0",fontSize:12}}>⚠ {a.text}</div>)}
          </div>
        </div>)}

        {/* ERP & ARCHITECTURE */}
        {tab==="ERP & Architecture" && (<div>
          <h3 style={{marginBottom:4}}>{t.erpTitle}</h3>
          <p style={{color:"#64748b",fontSize:13,marginBottom:16}}>{t.erpDesc}</p>
          <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:20}}>
            {[["🔷 SRM Layer (NEW)","#1e40af",["Supplier Profiles","Risk & Compliance","Performance Scorecards","Contract Lifecycle","Onboarding"]],
              ["🔗 Middleware — API","#6366f1",["Vendor Master Sync","PO & Invoice Data","Spend Analytics Feed","Compliance Push"]],
              ["🏦 ERP — Sage X3","#059669",["Purchase Orders","Invoices & Payments","Vendor Master","Spend Ledger"]],
              ["📊 Data & Analytics","#71717a",["Snowflake","Metabase","Hex"]]
            ].map(([title,color,items],i)=>(<div key={i} style={{border:`2px solid ${color}40`,borderRadius:10,padding:14,borderLeft:`6px solid ${color}`}}>
              <div style={{fontWeight:700,color,marginBottom:8,fontSize:13}}>{title}</div>
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>{items.map(item=>(<span key={item} style={{background:`${color}10`,border:`1px solid ${color}20`,borderRadius:6,padding:"4px 10px",fontSize:11,fontWeight:600}}>{item}</span>))}</div>
            </div>))}
          </div>
          <div style={{background:"#1e3a5f",borderRadius:10,padding:16,color:"#fff"}}>
            <div style={{fontWeight:700,marginBottom:10}}>💬 {t.bizCase}</div>
            {[["Annual Platform Cost","~£37.5k (Kodiak Hub)"],["Suppliers Covered","531 across 5 brands"],["Est. Time Saving","10 hrs/wk · ~£34k/yr"],["Compliance Risk Reduction","High — currently manual"],["ERP Integration","Sage X3 → push/pull via API"]].map(([k,v])=>(<div key={k} style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:"1px solid #ffffff15",fontSize:12}}><span style={{color:"#93c5fd"}}>{k}</span><span style={{fontWeight:700}}>{v}</span></div>))}
          </div>
        </div>)}
      </div>

      {/* ONBOARDING FORM MODAL */}
      {showForm && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999,padding:16}}>
          <div style={{background:"#fff",borderRadius:12,padding:24,maxWidth:480,width:"100%",maxHeight:"80vh",overflow:"auto"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
              <h3 style={{margin:0}}>{t.formTitle}</h3>
              <button onClick={()=>{setShowForm(false);setFormStep(0);setFormData({});}} style={{background:"none",border:"none",fontSize:20,cursor:"pointer"}}>✕</button>
            </div>
            <div style={{display:"flex",gap:4,marginBottom:16}}>{[0,1,2,3,4].map(i=><div key={i} style={{flex:1,height:4,borderRadius:2,background:i<=formStep?"#3b82f6":"#e2e8f0"}}/>)}</div>
            
            {formStep===0 && (<div style={{marginBottom:20}}>
              <label style={{display:"block",fontSize:12,fontWeight:600,marginBottom:6,color:"#374151"}}>{t.companyName}</label>
              <input type="text" value={formData.company||""} onChange={e=>updateForm("company",e.target.value)} placeholder="Acme Ltd" style={{width:"100%",padding:"8px 12px",border:"1px solid #d1d5db",borderRadius:6,fontSize:13}}/>
            </div>)}
            {formStep===1 && (<div style={{marginBottom:20}}>
              <label style={{display:"block",fontSize:12,fontWeight:600,marginBottom:6,color:"#374151"}}>{t.contactEmail}</label>
              <input type="email" value={formData.email||""} onChange={e=>updateForm("email",e.target.value)} placeholder="contact@supplier.com" style={{width:"100%",padding:"8px 12px",border:"1px solid #d1d5db",borderRadius:6,fontSize:13}}/>
            </div>)}
            {formStep===2 && (<div style={{marginBottom:20}}>
              <label style={{display:"block",fontSize:12,fontWeight:600,marginBottom:6,color:"#374151"}}>{t.category}</label>
              <select value={formData.category||""} onChange={e=>updateForm("category",e.target.value)} style={{width:"100%",padding:"8px 12px",border:"1px solid #d1d5db",borderRadius:6,fontSize:13,background:"#fff"}}>
                <option value="">Select category...</option>
                <option value="pharma">Pharmaceutical / API</option>
                <option value="packaging">Packaging</option>
                <option value="logistics">Logistics / Distribution</option>
                <option value="it">IT / Professional Services</option>
                <option value="raw">Raw Materials</option>
              </select>
            </div>)}
            {formStep===3 && (<div style={{marginBottom:20}}>
              <label style={{display:"block",fontSize:12,fontWeight:600,marginBottom:6,color:"#374151"}}>{t.pubLiability}</label>
              <input type="text" value={formData.pubLiability||""} onChange={e=>updateForm("pubLiability",e.target.value)} placeholder="£5,000,000" style={{width:"100%",padding:"8px 12px",border:"1px solid #d1d5db",borderRadius:6,fontSize:13}}/>
            </div>)}
            {formStep===4 && (<div style={{marginBottom:20}}>
              <label style={{display:"block",fontSize:12,fontWeight:600,marginBottom:6,color:"#374151"}}>{t.payTerms}</label>
              <select value={formData.payTerms||""} onChange={e=>updateForm("payTerms",e.target.value)} style={{width:"100%",padding:"8px 12px",border:"1px solid #d1d5db",borderRadius:6,fontSize:13,background:"#fff"}}>
                <option value="">Select terms...</option>
                <option value="30">Net 30</option>
                <option value="45">Net 45</option>
                <option value="60">Net 60</option>
              </select>
            </div>)}

            <div style={{display:"flex",gap:8}}>
              <button onClick={()=>setFormStep(Math.max(0,formStep-1))} disabled={formStep===0} style={{flex:1,padding:"10px 16px",borderRadius:6,border:"1px solid #d1d5db",background:"#fff",cursor:formStep===0?"not-allowed":"pointer",fontWeight:600,fontSize:13,opacity:formStep===0?0.5:1}}>{t.previous}</button>
              {formStep<4 ? (
                <button onClick={()=>setFormStep(formStep+1)} style={{flex:1,padding:"10px 16px",borderRadius:6,border:"none",background:"#3b82f6",color:"#fff",cursor:"pointer",fontWeight:600,fontSize:13}}>{t.next}</button>
              ) : (
                <button onClick={handleFormSubmit} style={{flex:1,padding:"10px 16px",borderRadius:6,border:"none",background:"#22c55e",color:"#fff",cursor:"pointer",fontWeight:600,fontSize:13}}>✅ {t.submit}</button>
              )}
            </div>
          </div>
        </div>
      )}

      <div style={{textAlign:"center",padding:"20px 0",fontSize:11,color:"#94a3b8"}}>{t.builtBy}</div>
    </div>
  );
}

export default App;
