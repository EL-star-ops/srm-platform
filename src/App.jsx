import { useState } from "react";

const T = {
  en: { dashboard: "Dashboard", suppliers: "Suppliers", onboarding: "Onboarding", performance: "Performance", contracts: "Contracts", compliance: "Compliance", templates: "Templates", intelligence: "Intelligence", flywheel: "Flywheel", erp: "ERP & Architecture", title: "HeliosX SRM Platform", subtitle: "Supplier Relationship Management", totalSuppliers: "Total Suppliers", totalSpend: "Total Spend", avgPerf: "Avg Performance", nonCompliant: "Non-Compliant", active: "Active", annual: "Annual", across: "Across all suppliers", reqAction: "Require action", supplierOverview: "Supplier Overview", segBreak: "Segment Breakdown", actionsReq: "Actions Required", auditFailed: "Audit failed – review required", auditPending: "Audit pending approval", compGap: "Compliance gap identified", strategic: "Strategic", leverage: "Leverage", tactical: "Tactical", supplierPortfolio: "Supplier Portfolio", back: "← Back to all suppliers", details: "Details", annSpend: "Annual Spend", lastAudit: "Last Audit", onTimeDelivery: "On-Time Delivery", insExpiry: "Insurance Expiry", certs: "Certifications", noCerts: "No certifications on file", pipeline: "Pipeline", selfReg: "Self-Registration", campaigns: "Campaigns", invited: "Invited", registration: "Registration", underReview: "Under Review", approved: "Approved", rejected: "Rejected", recentActivity: "Recent Onboarding Activity", regPortal: "Digital Self-Registration Portal", regDesc: "Suppliers complete an online form with validation, replacing manual email-based onboarding.", regSections: "Registration Form Sections", features: "Features", assessCamp: "Assessment Campaigns", campDesc: "Bulk outreach to existing suppliers for data collection, compliance checks, and re-qualification.", sent: "Sent", responded: "Responded", rate: "Rate", deadline: "Deadline", scorecards: "Scorecards", benchmark: "Benchmark", trends: "Trends", overall: "Overall Score", supplierBench: "Supplier Benchmarking", perfTrends: "Performance Trends", activeContracts: "Active Contracts", expiringSoon: "Expiring Soon", expired: "Expired", totalValue: "Total Value", contractReg: "Contract Register", compliant: "Compliant", certsExpiring: "Certs Expiring", totalCertsTracked: "Total Certs Tracked", compStatus: "Compliance Status by Supplier", templatesTitle: "Templates & Playbooks", templatesDesc: "Standardised documents for supplier assessment, auditing, and sourcing.", keyInsights: "Key Insights", recommendations: "Recommendations", spendAnalytics: "Spend Analytics", marketIntel: "Market Intelligence", aiReadiness: "AI Readiness Assessment", flywheelTitle: "Strategic Sourcing Flywheel", flywheelDesc: "6-step continuous improvement cycle", erpTitle: "ERP & SRM Architecture", erpDesc: "How SRM complements your ERP — and why HeliosX needs both layers", bizCase: "Business Case Summary", builtBy: "Built by Elena Nutu, Operations Analyst · HeliosX Group · February 2026", registerNew: "Register as New Supplier", companyName: "Company Legal Name", tradingName: "Trading Name", regNumber: "Registration Number", vatNumber: "VAT Number", country: "Country", address: "Address", contactName: "Contact Name", contactEmail: "Email", contactPhone: "Phone", website: "Website", category: "Supplier Category", payTerms: "Payment Terms", currency: "Currency", bankName: "Bank Name", submit: "Submit Registration", formSuccess: "Registration submitted successfully! Our team will review your application.", required: "Required", selectCategory: "Select a category", pharmaceutical: "Pharmaceutical / API", packaging: "Packaging", itServices: "IT / Professional Services", logistics: "Logistics", rawMaterials: "Raw Materials", components: "Components", other: "Other", mhraLicense: "MHRA License Number", gdpCert: "GDP/GMP Certification", coldChain: "Cold Chain Capability", iso27001: "ISO 27001 Certified", cyberEss: "Cyber Essentials", gdprCompliant: "GDPR Compliant", yes: "Yes", no: "No", pubLiability: "Public Liability Insurance", profIndemnity: "Professional Indemnity", empLiability: "Employers Liability", isoStandards: "ISO Certifications Held", companyInfo: "Company Information", contactInfo: "Contact Information", categoryInfo: "Supplier Category & Compliance", financialInfo: "Financial Information", insuranceInfo: "Insurance & Compliance", section: "Section", of: "of", next: "Next", previous: "Previous", overview: "Overview", spend: "Spend", market: "Market", progress: "Progress" },
  de: { dashboard: "Dashboard", suppliers: "Lieferanten", onboarding: "Onboarding", performance: "Leistung", contracts: "Verträge", compliance: "Compliance", templates: "Vorlagen", intelligence: "Intelligenz", flywheel: "Schwungrad", erp: "ERP & Architektur", title: "HeliosX SRM-Plattform", subtitle: "Lieferantenbeziehungsmanagement", totalSuppliers: "Lieferanten gesamt", totalSpend: "Gesamtausgaben", avgPerf: "Durchschn. Leistung", nonCompliant: "Nicht konform", active: "Aktiv", annual: "Jährlich", across: "Über alle Lieferanten", reqAction: "Maßnahmen erforderlich", supplierOverview: "Lieferantenübersicht", segBreak: "Segmentaufschlüsselung", actionsReq: "Maßnahmen erforderlich", auditFailed: "Audit fehlgeschlagen", auditPending: "Audit ausstehend", compGap: "Compliance-Lücke", strategic: "Strategisch", leverage: "Hebel", tactical: "Taktisch", supplierPortfolio: "Lieferantenportfolio", back: "← Zurück", details: "Details", annSpend: "Jahresausgaben", lastAudit: "Letztes Audit", onTimeDelivery: "Pünktliche Lieferung", insExpiry: "Versicherungsablauf", certs: "Zertifizierungen", noCerts: "Keine Zertifizierungen", pipeline: "Pipeline", selfReg: "Selbstregistrierung", campaigns: "Kampagnen", invited: "Eingeladen", registration: "Registrierung", underReview: "In Prüfung", approved: "Genehmigt", rejected: "Abgelehnt", recentActivity: "Letzte Onboarding-Aktivität", regPortal: "Digitales Selbstregistrierungsportal", regDesc: "Lieferanten füllen ein Online-Formular mit Validierung aus.", regSections: "Formularabschnitte", features: "Funktionen", assessCamp: "Bewertungskampagnen", campDesc: "Massen-Outreach für Datenerfassung und Compliance.", sent: "Gesendet", responded: "Beantwortet", rate: "Quote", deadline: "Frist", scorecards: "Scorecards", benchmark: "Benchmark", trends: "Trends", overall: "Gesamtbewertung", supplierBench: "Lieferanten-Benchmarking", perfTrends: "Leistungstrends", activeContracts: "Aktive Verträge", expiringSoon: "Bald ablaufend", expired: "Abgelaufen", totalValue: "Gesamtwert", contractReg: "Vertragsregister", compliant: "Konform", certsExpiring: "Zert. ablaufend", totalCertsTracked: "Zert. gesamt", compStatus: "Compliance-Status", templatesTitle: "Vorlagen & Handbücher", templatesDesc: "Standardisierte Dokumente für Lieferantenbewertung.", keyInsights: "Wichtige Erkenntnisse", recommendations: "Empfehlungen", spendAnalytics: "Ausgabenanalyse", marketIntel: "Marktintelligenz", aiReadiness: "KI-Bereitschaft", flywheelTitle: "Strategisches Beschaffungs-Schwungrad", flywheelDesc: "6-Schritte-Verbesserungszyklus", erpTitle: "ERP & SRM-Architektur", erpDesc: "Wie SRM Ihr ERP ergänzt", bizCase: "Business Case Zusammenfassung", builtBy: "Erstellt von Elena Nutu · HeliosX Group · Februar 2026", registerNew: "Als neuer Lieferant registrieren", companyName: "Firmenname", tradingName: "Handelsname", regNumber: "Registrierungsnummer", vatNumber: "USt-IdNr.", country: "Land", address: "Adresse", contactName: "Kontaktname", contactEmail: "E-Mail", contactPhone: "Telefon", website: "Webseite", category: "Lieferantenkategorie", payTerms: "Zahlungsbedingungen", currency: "Währung", bankName: "Bankname", submit: "Registrierung absenden", formSuccess: "Registrierung erfolgreich eingereicht!", required: "Pflichtfeld", selectCategory: "Kategorie wählen", pharmaceutical: "Pharmazeutisch / API", packaging: "Verpackung", itServices: "IT / Dienstleistungen", logistics: "Logistik", rawMaterials: "Rohstoffe", components: "Komponenten", other: "Sonstige", mhraLicense: "MHRA-Lizenznummer", gdpCert: "GDP/GMP-Zertifizierung", coldChain: "Kühlkettenfähigkeit", iso27001: "ISO 27001 zertifiziert", cyberEss: "Cyber Essentials", gdprCompliant: "DSGVO-konform", yes: "Ja", no: "Nein", pubLiability: "Betriebshaftpflicht", profIndemnity: "Berufshaftpflicht", empLiability: "Arbeitgeberhaftpflicht", isoStandards: "ISO-Zertifizierungen", companyInfo: "Firmeninformationen", contactInfo: "Kontaktinformationen", categoryInfo: "Kategorie & Compliance", financialInfo: "Finanzinformationen", insuranceInfo: "Versicherung & Compliance", section: "Abschnitt", of: "von", next: "Weiter", previous: "Zurück", overview: "Übersicht", spend: "Ausgaben", market: "Markt", progress: "Fortschritt" },
  nl: { dashboard: "Dashboard", suppliers: "Leveranciers", onboarding: "Onboarding", performance: "Prestaties", contracts: "Contracten", compliance: "Compliance", templates: "Sjablonen", intelligence: "Intelligentie", flywheel: "Vliegwiel", erp: "ERP & Architectuur", title: "HeliosX SRM-Platform", subtitle: "Leveranciersrelatiebeheer", totalSuppliers: "Totaal leveranciers", totalSpend: "Totale uitgaven", avgPerf: "Gem. prestatie", nonCompliant: "Niet-conform", active: "Actief", annual: "Jaarlijks", across: "Over alle leveranciers", reqAction: "Actie vereist", supplierOverview: "Leveranciersoverzicht", segBreak: "Segmentverdeling", actionsReq: "Acties vereist", auditFailed: "Audit mislukt", auditPending: "Audit in afwachting", compGap: "Compliance-gap", strategic: "Strategisch", leverage: "Hefboom", tactical: "Tactisch", supplierPortfolio: "Leveranciersportfolio", back: "← Terug", details: "Details", annSpend: "Jaarlijkse uitgaven", lastAudit: "Laatste audit", onTimeDelivery: "Tijdige levering", insExpiry: "Verzekering vervaldatum", certs: "Certificeringen", noCerts: "Geen certificeringen", pipeline: "Pipeline", selfReg: "Zelfregistratie", campaigns: "Campagnes", invited: "Uitgenodigd", registration: "Registratie", underReview: "In beoordeling", approved: "Goedgekeurd", rejected: "Afgewezen", recentActivity: "Recente activiteit", regPortal: "Digitaal zelfregistratieportaal", regDesc: "Leveranciers vullen een online formulier in met validatie.", regSections: "Formuliersecties", features: "Functies", assessCamp: "Beoordelingscampagnes", campDesc: "Massa-outreach voor gegevensverzameling en compliance.", sent: "Verzonden", responded: "Beantwoord", rate: "Percentage", deadline: "Deadline", scorecards: "Scorecards", benchmark: "Benchmark", trends: "Trends", overall: "Totaalscore", supplierBench: "Leveranciersbenchmarking", perfTrends: "Prestatietrends", activeContracts: "Actieve contracten", expiringSoon: "Bijna verlopen", expired: "Verlopen", totalValue: "Totale waarde", contractReg: "Contractregister", compliant: "Conform", certsExpiring: "Cert. verlopen", totalCertsTracked: "Totaal cert.", compStatus: "Compliance-status", templatesTitle: "Sjablonen & Handboeken", templatesDesc: "Gestandaardiseerde documenten.", keyInsights: "Belangrijkste inzichten", recommendations: "Aanbevelingen", spendAnalytics: "Uitgavenanalyse", marketIntel: "Marktintelligentie", aiReadiness: "AI-gereedheid", flywheelTitle: "Strategisch inkoopvliegwiel", flywheelDesc: "6-stappen verbeteringscyclus", erpTitle: "ERP & SRM-Architectuur", erpDesc: "Hoe SRM uw ERP aanvult", bizCase: "Business Case Samenvatting", builtBy: "Gebouwd door Elena Nutu · HeliosX Group · Februari 2026", registerNew: "Registreer als nieuwe leverancier", companyName: "Bedrijfsnaam", tradingName: "Handelsnaam", regNumber: "Registratienummer", vatNumber: "BTW-nummer", country: "Land", address: "Adres", contactName: "Contactnaam", contactEmail: "E-mail", contactPhone: "Telefoon", website: "Website", category: "Leverancierscategorie", payTerms: "Betalingsvoorwaarden", currency: "Valuta", bankName: "Banknaam", submit: "Registratie indienen", formSuccess: "Registratie succesvol ingediend!", required: "Verplicht", selectCategory: "Selecteer categorie", pharmaceutical: "Farmaceutisch / API", packaging: "Verpakking", itServices: "IT / Diensten", logistics: "Logistiek", rawMaterials: "Grondstoffen", components: "Componenten", other: "Overig", mhraLicense: "MHRA-licentie", gdpCert: "GDP/GMP-certificering", coldChain: "Koudeketen", iso27001: "ISO 27001", cyberEss: "Cyber Essentials", gdprCompliant: "AVG-conform", yes: "Ja", no: "Nee", pubLiability: "Aansprakelijkheid", profIndemnity: "Beroepsaansprakelijkheid", empLiability: "Werkgeversaansprakelijkheid", isoStandards: "ISO-certificeringen", companyInfo: "Bedrijfsinformatie", contactInfo: "Contactinformatie", categoryInfo: "Categorie & Compliance", financialInfo: "Financiële informatie", insuranceInfo: "Verzekering & Compliance", section: "Sectie", of: "van", next: "Volgende", previous: "Vorige", overview: "Overzicht", spend: "Uitgaven", market: "Markt", progress: "Voortgang" },
  fr: { dashboard: "Tableau de bord", suppliers: "Fournisseurs", onboarding: "Intégration", performance: "Performance", contracts: "Contrats", compliance: "Conformité", templates: "Modèles", intelligence: "Intelligence", flywheel: "Volant", erp: "ERP & Architecture", title: "Plateforme SRM HeliosX", subtitle: "Gestion des Relations Fournisseurs", totalSuppliers: "Fournisseurs totaux", totalSpend: "Dépenses totales", avgPerf: "Perf. moyenne", nonCompliant: "Non conforme", active: "Actif", annual: "Annuel", across: "Tous fournisseurs", reqAction: "Action requise", supplierOverview: "Aperçu des fournisseurs", segBreak: "Répartition par segment", actionsReq: "Actions requises", auditFailed: "Audit échoué", auditPending: "Audit en attente", compGap: "Écart de conformité", strategic: "Stratégique", leverage: "Levier", tactical: "Tactique", supplierPortfolio: "Portefeuille fournisseurs", back: "← Retour", details: "Détails", annSpend: "Dépenses annuelles", lastAudit: "Dernier audit", onTimeDelivery: "Livraison ponctuelle", insExpiry: "Expiration assurance", certs: "Certifications", noCerts: "Aucune certification", pipeline: "Pipeline", selfReg: "Auto-inscription", campaigns: "Campagnes", invited: "Invité", registration: "Inscription", underReview: "En révision", approved: "Approuvé", rejected: "Rejeté", recentActivity: "Activité récente", regPortal: "Portail d'auto-inscription numérique", regDesc: "Les fournisseurs remplissent un formulaire en ligne avec validation.", regSections: "Sections du formulaire", features: "Fonctionnalités", assessCamp: "Campagnes d'évaluation", campDesc: "Contact groupé pour collecte et conformité.", sent: "Envoyé", responded: "Répondu", rate: "Taux", deadline: "Date limite", scorecards: "Scorecards", benchmark: "Benchmark", trends: "Tendances", overall: "Score global", supplierBench: "Benchmarking fournisseurs", perfTrends: "Tendances de performance", activeContracts: "Contrats actifs", expiringSoon: "Expiration proche", expired: "Expiré", totalValue: "Valeur totale", contractReg: "Registre des contrats", compliant: "Conforme", certsExpiring: "Cert. expirant", totalCertsTracked: "Cert. totaux", compStatus: "Statut de conformité", templatesTitle: "Modèles & Guides", templatesDesc: "Documents standardisés pour l'évaluation.", keyInsights: "Insights clés", recommendations: "Recommandations", spendAnalytics: "Analyse des dépenses", marketIntel: "Intelligence de marché", aiReadiness: "Préparation IA", flywheelTitle: "Volant d'approvisionnement stratégique", flywheelDesc: "Cycle d'amélioration en 6 étapes", erpTitle: "Architecture ERP & SRM", erpDesc: "Comment le SRM complète votre ERP", bizCase: "Résumé du Business Case", builtBy: "Créé par Elena Nutu · HeliosX Group · Février 2026", registerNew: "S'inscrire comme nouveau fournisseur", companyName: "Raison sociale", tradingName: "Nom commercial", regNumber: "Numéro d'enregistrement", vatNumber: "Numéro de TVA", country: "Pays", address: "Adresse", contactName: "Nom du contact", contactEmail: "E-mail", contactPhone: "Téléphone", website: "Site web", category: "Catégorie fournisseur", payTerms: "Conditions de paiement", currency: "Devise", bankName: "Nom de la banque", submit: "Soumettre l'inscription", formSuccess: "Inscription soumise avec succès!", required: "Obligatoire", selectCategory: "Sélectionner une catégorie", pharmaceutical: "Pharmaceutique / API", packaging: "Emballage", itServices: "IT / Services", logistics: "Logistique", rawMaterials: "Matières premières", components: "Composants", other: "Autre", mhraLicense: "Licence MHRA", gdpCert: "Certification GDP/GMP", coldChain: "Chaîne du froid", iso27001: "ISO 27001", cyberEss: "Cyber Essentials", gdprCompliant: "Conforme RGPD", yes: "Oui", no: "Non", pubLiability: "Responsabilité civile", profIndemnity: "Responsabilité professionnelle", empLiability: "Responsabilité employeur", isoStandards: "Certifications ISO", companyInfo: "Informations entreprise", contactInfo: "Informations de contact", categoryInfo: "Catégorie & Conformité", financialInfo: "Informations financières", insuranceInfo: "Assurance & Conformité", section: "Section", of: "de", next: "Suivant", previous: "Précédent", overview: "Aperçu", spend: "Dépenses", market: "Marché", progress: "Progrès" },
  es: { dashboard: "Panel", suppliers: "Proveedores", onboarding: "Incorporación", performance: "Rendimiento", contracts: "Contratos", compliance: "Cumplimiento", templates: "Plantillas", intelligence: "Inteligencia", flywheel: "Volante", erp: "ERP & Arquitectura", title: "Plataforma SRM HeliosX", subtitle: "Gestión de Relaciones con Proveedores", totalSuppliers: "Proveedores totales", totalSpend: "Gasto total", avgPerf: "Rend. promedio", nonCompliant: "No conforme", active: "Activo", annual: "Anual", across: "Todos los proveedores", reqAction: "Acción requerida", supplierOverview: "Resumen de proveedores", segBreak: "Desglose por segmento", actionsReq: "Acciones requeridas", auditFailed: "Auditoría fallida", auditPending: "Auditoría pendiente", compGap: "Brecha de cumplimiento", strategic: "Estratégico", leverage: "Apalancamiento", tactical: "Táctico", supplierPortfolio: "Portafolio de proveedores", back: "← Volver", details: "Detalles", annSpend: "Gasto anual", lastAudit: "Última auditoría", onTimeDelivery: "Entrega puntual", insExpiry: "Vencimiento seguro", certs: "Certificaciones", noCerts: "Sin certificaciones", pipeline: "Pipeline", selfReg: "Autoregistro", campaigns: "Campañas", invited: "Invitado", registration: "Registro", underReview: "En revisión", approved: "Aprobado", rejected: "Rechazado", recentActivity: "Actividad reciente", regPortal: "Portal de autoregistro digital", regDesc: "Los proveedores completan un formulario en línea con validación.", regSections: "Secciones del formulario", features: "Características", assessCamp: "Campañas de evaluación", campDesc: "Contacto masivo para recopilación de datos y cumplimiento.", sent: "Enviado", responded: "Respondido", rate: "Tasa", deadline: "Fecha límite", scorecards: "Scorecards", benchmark: "Benchmark", trends: "Tendencias", overall: "Puntuación global", supplierBench: "Benchmarking de proveedores", perfTrends: "Tendencias de rendimiento", activeContracts: "Contratos activos", expiringSoon: "Por vencer", expired: "Vencido", totalValue: "Valor total", contractReg: "Registro de contratos", compliant: "Conforme", certsExpiring: "Cert. por vencer", totalCertsTracked: "Cert. totales", compStatus: "Estado de cumplimiento", templatesTitle: "Plantillas y Guías", templatesDesc: "Documentos estandarizados para evaluación.", keyInsights: "Ideas clave", recommendations: "Recomendaciones", spendAnalytics: "Análisis de gastos", marketIntel: "Inteligencia de mercado", aiReadiness: "Preparación IA", flywheelTitle: "Volante de abastecimiento estratégico", flywheelDesc: "Ciclo de mejora de 6 pasos", erpTitle: "Arquitectura ERP & SRM", erpDesc: "Cómo el SRM complementa su ERP", bizCase: "Resumen del Business Case", builtBy: "Creado por Elena Nutu · HeliosX Group · Febrero 2026", registerNew: "Registrarse como nuevo proveedor", companyName: "Razón social", tradingName: "Nombre comercial", regNumber: "Número de registro", vatNumber: "Número de IVA", country: "País", address: "Dirección", contactName: "Nombre de contacto", contactEmail: "Correo electrónico", contactPhone: "Teléfono", website: "Sitio web", category: "Categoría del proveedor", payTerms: "Condiciones de pago", currency: "Moneda", bankName: "Nombre del banco", submit: "Enviar registro", formSuccess: "¡Registro enviado con éxito!", required: "Obligatorio", selectCategory: "Seleccionar categoría", pharmaceutical: "Farmacéutico / API", packaging: "Embalaje", itServices: "IT / Servicios", logistics: "Logística", rawMaterials: "Materias primas", components: "Componentes", other: "Otro", mhraLicense: "Licencia MHRA", gdpCert: "Certificación GDP/GMP", coldChain: "Cadena de frío", iso27001: "ISO 27001", cyberEss: "Cyber Essentials", gdprCompliant: "Conforme RGPD", yes: "Sí", no: "No", pubLiability: "Responsabilidad civil", profIndemnity: "Responsabilidad profesional", empLiability: "Responsabilidad del empleador", isoStandards: "Certificaciones ISO", companyInfo: "Información de la empresa", contactInfo: "Información de contacto", categoryInfo: "Categoría y Cumplimiento", financialInfo: "Información financiera", insuranceInfo: "Seguros y Cumplimiento", section: "Sección", of: "de", next: "Siguiente", previous: "Anterior", overview: "Resumen", spend: "Gastos", market: "Mercado", progress: "Progreso" }
};

const langs = [["en","🇬🇧 EN"],["de","🇩🇪 DE"],["nl","🇳🇱 NL"],["fr","🇫🇷 FR"],["es","🇪🇸 ES"]];

const suppliers = [
  { id:1, name:"ABC Packaging Limited", country:"Germany", segment:"Strategic", risk:"Low Risk", auditStatus:"Approved", creditScore:"AAA", creditNum:87, performance:68, sustainability:71, contracts:3, spend:124000, lastAudit:"2025-01-10", compliance:true, delivery:94, quality:88, responsiveness:72, onTime:96, certifications:["ISO 9001","ISO 14001"], insuranceExpiry:"2026-08-15", category:"Packaging" },
  { id:2, name:"Astrid Speed Control BV", country:"Netherlands", segment:"Leverage", risk:"Medium Risk", auditStatus:"Pending", creditScore:"BBB", creditNum:62, performance:54, sustainability:60, contracts:1, spend:45000, lastAudit:"2024-11-05", compliance:true, delivery:78, quality:65, responsiveness:58, onTime:72, certifications:["ISO 9001"], insuranceExpiry:"2026-03-20", category:"Engineering" },
  { id:3, name:"Apollo International", country:"New Zealand", segment:"Tactical", risk:"High Risk", auditStatus:"Failed", creditScore:"CCC", creditNum:34, performance:41, sustainability:38, contracts:2, spend:18000, lastAudit:"2024-09-20", compliance:false, delivery:52, quality:45, responsiveness:35, onTime:48, certifications:[], insuranceExpiry:"2025-12-01", category:"Raw Materials" },
  { id:4, name:"Buyse Supplies", country:"Belgium", segment:"Strategic", risk:"Low Risk", auditStatus:"Approved", creditScore:"AA", creditNum:80, performance:76, sustainability:82, contracts:5, spend:210000, lastAudit:"2025-02-01", compliance:true, delivery:92, quality:90, responsiveness:85, onTime:94, certifications:["ISO 9001","ISO 14001","ISO 27001"], insuranceExpiry:"2027-01-30", category:"Pharmaceutical" },
  { id:5, name:"Carpe Diem LLC", country:"USA", segment:"Leverage", risk:"Low Risk", auditStatus:"Approved", creditScore:"A", creditNum:74, performance:70, sustainability:65, contracts:2, spend:67000, lastAudit:"2024-12-15", compliance:true, delivery:88, quality:82, responsiveness:76, onTime:90, certifications:["ISO 9001","Cyber Essentials"], insuranceExpiry:"2026-06-10", category:"IT Services" },
  { id:6, name:"Beijing Bolts & Bits", country:"China", segment:"Tactical", risk:"High Risk", auditStatus:"Pending", creditScore:"B", creditNum:48, performance:45, sustainability:30, contracts:1, spend:22000, lastAudit:"2024-08-10", compliance:false, delivery:60, quality:55, responsiveness:40, onTime:58, certifications:[], insuranceExpiry:"2025-09-30", category:"Components" },
];

const sc = v => v >= 75 ? "#22c55e" : v >= 50 ? "#f59e0b" : "#ef4444";
const cc = s => ["AAA","AA","A"].includes(s) ? "#22c55e" : ["BBB","BB"].includes(s) ? "#f59e0b" : "#ef4444";
const rc = r => r === "Low Risk" ? "#22c55e" : r === "Medium Risk" ? "#f59e0b" : "#ef4444";
const acol = a => a === "Approved" ? "#22c55e" : a === "Pending" ? "#f59e0b" : "#ef4444";

const Arc = ({ value, color, size = 80 }) => {
  const r = size/2-8, circ = Math.PI*r, off = circ-(value/100)*circ, cx = size/2, cy = size/2;
  return (<svg width={size} height={size/2+10} viewBox={`0 0 ${size} ${size/2+10}`}><path d={`M 8 ${cy} A ${r} ${r} 0 0 1 ${size-8} ${cy}`} fill="none" stroke="#e2e8f0" strokeWidth="6"/><path d={`M 8 ${cy} A ${r} ${r} 0 0 1 ${size-8} ${cy}`} fill="none" stroke={color} strokeWidth="6" strokeDasharray={circ} strokeDashoffset={off}/><text x={cx} y={cy+2} textAnchor="middle" fontSize="14" fontWeight="700" fill={color}>{value}</text></svg>);
};

const Bdg = ({ label, color }) => (<span style={{ background:color+"20", color, border:`1px solid ${color}40`, borderRadius:20, padding:"2px 10px", fontSize:11, fontWeight:600 }}>{label}</span>);

const Field = ({ label, required, children }) => (<div style={{ marginBottom: 12 }}><label style={{ display:"block", fontSize:12, fontWeight:600, marginBottom:4, color:"#374151" }}>{label} {required && <span style={{color:"#ef4444"}}>*</span>}</label>{children}</div>);

const Input = (props) => (<input {...props} style={{ width:"100%", padding:"8px 12px", border:"1px solid #d1d5db", borderRadius:6, fontSize:13, ...props.style }} />);

const Select = ({ options, ...props }) => (<select {...props} style={{ width:"100%", padding:"8px 12px", border:"1px solid #d1d5db", borderRadius:6, fontSize:13, background:"#fff" }}>{options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}</select>);

export default function App() {
  const [lang, setLang] = useState("en");
  const [tab, setTab] = useState("Dashboard");
  const [sel, setSel] = useState(null);
  const [obView, setObView] = useState("pipeline");
  const [pfView, setPfView] = useState("scorecards");
  const [tmEdit, setTmEdit] = useState(null);
  const [inView, setInView] = useState("overview");
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [formDone, setFormDone] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const t = T[lang];
  const nc = suppliers.filter(s => !s.compliance).length;
  const tabKeys = ["Dashboard","Suppliers","Onboarding","Performance","Contracts","Compliance","Templates","Intelligence","Flywheel","ERP & Architecture"];
  const tabLabels = [t.dashboard,t.suppliers,t.onboarding,t.performance,t.contracts,t.compliance,t.templates,t.intelligence,t.flywheel,t.erp];

  const updateForm = (k,v) => setFormData(p => ({...p, [k]: v}));

  const RegistrationForm = () => {
    const steps = [t.companyInfo, t.contactInfo, t.categoryInfo, t.insuranceInfo, t.financialInfo];
    const cats = [{ value:"", label:t.selectCategory },{ value:"pharmaceutical", label:t.pharmaceutical },{ value:"packaging", label:t.packaging },{ value:"it", label:t.itServices },{ value:"logistics", label:t.logistics },{ value:"rawmaterials", label:t.rawMaterials },{ value:"components", label:t.components },{ value:"other", label:t.other }];

    return (
      <div style={{ background:"#fff", borderRadius:10, padding:20 }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
          <div><h3 style={{ margin:0 }}>{t.registerNew}</h3><p style={{ color:"#64748b", fontSize:13, margin:0 }}>{t.section} {formStep+1} {t.of} 5: {steps[formStep]}</p></div>
          <button onClick={() => { setShowForm(false); setFormStep(0); setFormDone(false); }} style={{ background:"none", border:"none", fontSize:18, cursor:"pointer", color:"#64748b" }}>✕</button>
        </div>
        <div style={{ display:"flex", gap:4, marginBottom:20 }}>
          {steps.map((s,i) => (<div key={i} style={{ flex:1, height:6, borderRadius:3, background: i <= formStep ? "#3b82f6" : "#e2e8f0" }} />))}
        </div>

        {formStep === 0 && (<div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0 16px" }}>
          <Field label={t.companyName} required><Input value={formData.companyName||""} onChange={e=>updateForm("companyName",e.target.value)} /></Field>
          <Field label={t.tradingName}><Input value={formData.tradingName||""} onChange={e=>updateForm("tradingName",e.target.value)} /></Field>
          <Field label={t.regNumber} required><Input value={formData.regNumber||""} onChange={e=>updateForm("regNumber",e.target.value)} /></Field>
          <Field label={t.vatNumber}><Input value={formData.vatNumber||""} onChange={e=>updateForm("vatNumber",e.target.value)} /></Field>
          <Field label={t.country} required><Select options={[{value:"",label:"..."},{value:"UK",label:"United Kingdom"},{value:"US",label:"United States"},{value:"DE",label:"Germany"},{value:"NL",label:"Netherlands"},{value:"BE",label:"Belgium"},{value:"FR",label:"France"},{value:"ES",label:"Spain"},{value:"CN",label:"China"},{value:"NZ",label:"New Zealand"},{value:"Other",label:t.other}]} value={formData.country||""} onChange={e=>updateForm("country",e.target.value)} /></Field>
          <Field label={t.address}><Input value={formData.address||""} onChange={e=>updateForm("address",e.target.value)} /></Field>
        </div>)}

        {formStep === 1 && (<div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0 16px" }}>
          <Field label={t.contactName} required><Input value={formData.contactName||""} onChange={e=>updateForm("contactName",e.target.value)} /></Field>
          <Field label={t.contactEmail} required><Input type="email" value={formData.contactEmail||""} onChange={e=>updateForm("contactEmail",e.target.value)} /></Field>
          <Field label={t.contactPhone} required><Input value={formData.contactPhone||""} onChange={e=>updateForm("contactPhone",e.target.value)} /></Field>
          <Field label={t.website}><Input value={formData.website||""} onChange={e=>updateForm("website",e.target.value)} /></Field>
        </div>)}

        {formStep === 2 && (<div>
          <Field label={t.category} required><Select options={cats} value={formData.category||""} onChange={e=>updateForm("category",e.target.value)} /></Field>
          {formData.category === "pharmaceutical" && (<div style={{ padding:12, background:"#fef3c7", borderRadius:8, marginBottom:12 }}>
            <div style={{ fontWeight:700, fontSize:12, marginBottom:8 }}>🏥 Pharmaceutical Supplier Requirements</div>
            <Field label={t.mhraLicense}><Input value={formData.mhraLicense||""} onChange={e=>updateForm("mhraLicense",e.target.value)} /></Field>
            <Field label={t.gdpCert}><Select options={[{value:"",label:"..."},{value:"yes",label:t.yes},{value:"no",label:t.no}]} value={formData.gdpCert||""} onChange={e=>updateForm("gdpCert",e.target.value)} /></Field>
            <Field label={t.coldChain}><Select options={[{value:"",label:"..."},{value:"yes",label:t.yes},{value:"no",label:t.no}]} value={formData.coldChain||""} onChange={e=>updateForm("coldChain",e.target.value)} /></Field>
          </div>)}
          {formData.category === "it" && (<div style={{ padding:12, background:"#dbeafe", borderRadius:8, marginBottom:12 }}>
            <div style={{ fontWeight:700, fontSize:12, marginBottom:8 }}>💻 IT Supplier Requirements</div>
            <Field label={t.iso27001}><Select options={[{value:"",label:"..."},{value:"yes",label:t.yes},{value:"no",label:t.no}]} value={formData.iso27001||""} onChange={e=>updateForm("iso27001",e.target.value)} /></Field>
            <Field label={t.cyberEss}><Select options={[{value:"",label:"..."},{value:"yes",label:t.yes},{value:"no",label:t.no}]} value={formData.cyberEss||""} onChange={e=>updateForm("cyberEss",e.target.value)} /></Field>
            <Field label={t.gdprCompliant}><Select options={[{value:"",label:"..."},{value:"yes",label:t.yes},{value:"no",label:t.no}]} value={formData.gdprCompliant||""} onChange={e=>updateForm("gdprCompliant",e.target.value)} /></Field>
          </div>)}
        </div>)}

        {formStep === 3 && (<div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0 16px" }}>
          <Field label={t.pubLiability}><Input value={formData.pubLiability||""} onChange={e=>updateForm("pubLiability",e.target.value)} placeholder="£5,000,000" /></Field>
          <Field label={t.profIndemnity}><Input value={formData.profIndemnity||""} onChange={e=>updateForm("profIndemnity",e.target.value)} placeholder="£2,000,000" /></Field>
          <Field label={t.empLiability}><Input value={formData.empLiability||""} onChange={e=>updateForm("empLiability",e.target.value)} placeholder="£10,000,000" /></Field>
          <Field label={t.insExpiry}><Input type="date" value={formData.insDate||""} onChange={e=>updateForm("insDate",e.target.value)} /></Field>
          <div style={{ gridColumn:"1/-1" }}><Field label={t.isoStandards}><Input value={formData.isoStandards||""} onChange={e=>updateForm("isoStandards",e.target.value)} placeholder="ISO 9001, ISO 14001, ISO 27001" /></Field></div>
        </div>)}

        {formStep === 4 && (<div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0 16px" }}>
          <Field label={t.payTerms}><Select options={[{value:"",label:"..."},{value:"30",label:"Net 30"},{value:"45",label:"Net 45"},{value:"60",label:"Net 60"},{value:"90",label:"Net 90"}]} value={formData.payTerms||""} onChange={e=>updateForm("payTerms",e.target.value)} /></Field>
          <Field label={t.currency}><Select options={[{value:"",label:"..."},{value:"GBP",label:"GBP (£)"},{value:"USD",label:"USD ($)"},{value:"EUR",label:"EUR (€)"}]} value={formData.currency||""} onChange={e=>updateForm("currency",e.target.value)} /></Field>
          <Field label={t.bankName}><Input value={formData.bankName||""} onChange={e=>updateForm("bankName",e.target.value)} /></Field>
          <Field label="IBAN / Account Number"><Input value={formData.iban||""} onChange={e=>updateForm("iban",e.target.value)} /></Field>
          <Field label="Sort Code / SWIFT"><Input value={formData.sortCode||""} onChange={e=>updateForm("sortCode",e.target.value)} /></Field>
        </div>)}

        <div style={{ display:"flex", justifyContent:"space-between", marginTop:16 }}>
          <button onClick={() => setFormStep(Math.max(0,formStep-1))} disabled={formStep===0} style={{ padding:"8px 20px", borderRadius:6, border:"1px solid #d1d5db", background:"#fff", cursor:formStep===0?"default":"pointer", opacity:formStep===0?0.4:1, fontWeight:600, fontSize:13 }}>{t.previous}</button>
          {formStep < 4 ? (
            <button onClick={() => setFormStep(formStep+1)} style={{ padding:"8px 20px", borderRadius:6, border:"none", background:"#3b82f6", color:"#fff", cursor:"pointer", fontWeight:600, fontSize:13 }}>{t.next}</button>
          ) : (
            <button onClick={() => setFormDone(true)} style={{ padding:"8px 20px", borderRadius:6, border:"none", background:"#22c55e", color:"#fff", cursor:"pointer", fontWeight:600, fontSize:13 }}>{t.submit}</button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div style={{ minHeight:"100vh", background:"#f1f5f9", fontFamily:"'Segoe UI',system-ui,sans-serif" }}>
      <div style={{ background:"linear-gradient(135deg,#1e3a5f,#1e40af)", color:"#fff", padding:"10px 24px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <div><span style={{ fontWeight:800, fontSize:18 }}>H</span><span style={{ marginLeft:8, fontWeight:700, fontSize:16 }}>{t.title}</span><div style={{ fontSize:11, color:"#93c5fd" }}>{t.subtitle}</div></div>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <div style={{ display:"flex", gap:2 }}>
            {langs.map(([code,label]) => (<button key={code} onClick={() => setLang(code)} style={{ padding:"4px 8px", borderRadius:4, border: lang===code ? "2px solid #fff" : "1px solid #ffffff40", background: lang===code ? "#ffffff20" : "transparent", color:"#fff", cursor:"pointer", fontSize:11, fontWeight: lang===code ? 700 : 400 }}>{label}</button>))}
          </div>
          {nc > 0 && <Bdg label={`⚠ ${nc} ${t.nonCompliant}`} color="#ef4444" />}
        </div>
      </div>

      <div style={{ background:"#fff", borderBottom:"1px solid #e2e8f0", display:"flex", gap:0, overflowX:"auto" }}>
        {tabKeys.map((tk,i) => (<button key={tk} onClick={() => { setTab(tk); setSel(null); setShowForm(false); setFormDone(false); }} style={{ padding:"10px 14px", border:"none", borderBottom: tab===tk ? "3px solid #1e40af" : "3px solid transparent", background:"none", fontWeight: tab===tk ? 700 : 500, color: tab===tk ? "#1e40af" : "#64748b", cursor:"pointer", fontSize:12, whiteSpace:"nowrap" }}>{tabLabels[i]}</button>))}
      </div>

      <div style={{ padding:20, maxWidth:1200, margin:"0 auto" }}>

        {/* DASHBOARD */}
        {tab === "Dashboard" && (<div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12, marginBottom:16 }}>
            {[["6",t.totalSuppliers,t.active,"#3b82f6"],["£486k",t.totalSpend,t.annual,"#f59e0b"],[`${Math.round(suppliers.reduce((a,s)=>a+s.performance,0)/suppliers.length)}%`,t.avgPerf,t.across,"#22c55e"],[String(nc),t.nonCompliant,t.reqAction,"#ef4444"]].map(([v,l,s,c])=>(
              <div key={l} style={{ background:"#fff", borderRadius:10, padding:16, borderLeft:`4px solid ${c}` }}><div style={{ fontSize:28, fontWeight:800, color:c }}>{v}</div><div style={{ fontWeight:700, fontSize:13 }}>{l}</div><div style={{ fontSize:11, color:"#94a3b8" }}>{s}</div></div>
            ))}
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:12 }}>
            <div style={{ background:"#fff", borderRadius:10, padding:16 }}>
              <div style={{ fontWeight:700, marginBottom:12 }}>{t.supplierOverview}</div>
              {suppliers.map(s=>(<div key={s.id} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"8px 0", borderBottom:"1px solid #f1f5f9", cursor:"pointer" }} onClick={()=>{setTab("Suppliers");setSel(s);}}>
                <div style={{ display:"flex", alignItems:"center", gap:10 }}><div style={{ width:32, height:32, borderRadius:"50%", background:"#e0e7ff", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:700, fontSize:13, color:"#4338ca" }}>{s.name[0]}</div><div><div style={{ fontWeight:600, fontSize:13 }}>{s.name}</div><div style={{ fontSize:11, color:"#94a3b8" }}>{s.country} · {s.segment}</div></div></div>
                <div style={{ display:"flex", gap:6 }}><Bdg label={s.auditStatus} color={acol(s.auditStatus)} /><Bdg label={s.risk} color={rc(s.risk)} /><Bdg label={s.creditScore} color={cc(s.creditScore)} /></div>
              </div>))}
            </div>
            <div>
              <div style={{ background:"#fff", borderRadius:10, padding:16, marginBottom:12 }}>
                <div style={{ fontWeight:700, marginBottom:10 }}>{t.segBreak}</div>
                {[t.strategic,t.leverage,t.tactical].map((seg,i)=>{const segs=["Strategic","Leverage","Tactical"];const c=suppliers.filter(s=>s.segment===segs[i]).length;return(<div key={seg} style={{ marginBottom:8 }}><div style={{ display:"flex", justifyContent:"space-between", fontSize:12, marginBottom:4 }}><span>{seg}</span><span>{c}</span></div><div style={{ background:"#e2e8f0", borderRadius:4, height:8 }}><div style={{ width:`${(c/suppliers.length)*100}%`, background:i===0?"#3b82f6":i===1?"#f59e0b":"#94a3b8", borderRadius:4, height:8 }}/></div></div>);})}
              </div>
              <div style={{ background:"#fff", borderRadius:10, padding:16 }}>
                <div style={{ fontWeight:700, marginBottom:10 }}>⚠ {t.actionsReq}</div>
                {suppliers.filter(s=>!s.compliance||s.auditStatus!=="Approved").map(s=>(<div key={s.id} style={{ padding:"6px 0", borderBottom:"1px solid #f8fafc" }}><div style={{ fontWeight:600, fontSize:12 }}>{s.name}</div><div style={{ fontSize:11, color:s.auditStatus==="Failed"?"#ef4444":"#f59e0b" }}>{s.auditStatus==="Failed"?t.auditFailed:s.auditStatus==="Pending"?t.auditPending:t.compGap}</div></div>))}
              </div>
            </div>
          </div>
        </div>)}

        {/* SUPPLIERS */}
        {tab === "Suppliers" && (<div>
          {sel ? (<div>
            <button onClick={()=>setSel(null)} style={{ background:"none", border:"none", color:"#3b82f6", cursor:"pointer", marginBottom:12, fontSize:13 }}>{t.back}</button>
            <div style={{ background:"#fff", borderRadius:10, padding:20 }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:16 }}>
                <div><h2 style={{ margin:0, fontSize:20 }}>{sel.name}</h2><div style={{ color:"#64748b", fontSize:13 }}>{sel.country} · {sel.category} · {sel.segment}</div></div>
                <div style={{ display:"flex", gap:6 }}><Bdg label={sel.auditStatus} color={acol(sel.auditStatus)} /><Bdg label={sel.risk} color={rc(sel.risk)} /></div>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12, marginBottom:16 }}>
                {[["performance",sel.performance],["delivery",sel.delivery],["quality",sel.quality],["sustainability",sel.sustainability]].map(([l,v])=>(<div key={l} style={{ textAlign:"center" }}><Arc value={v} color={sc(v)} /><div style={{ fontSize:11, color:"#64748b", textTransform:"capitalize" }}>{l}</div></div>))}
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                <div style={{ background:"#f8fafc", borderRadius:8, padding:14 }}>
                  <div style={{ fontWeight:700, marginBottom:8, fontSize:13 }}>{t.details}</div>
                  {[[t.annSpend,`£${(sel.spend/1000).toFixed(0)}k`],[t.contracts,sel.contracts],[t.lastAudit,sel.lastAudit],[t.onTimeDelivery,`${sel.onTime}%`],[t.insExpiry,sel.insuranceExpiry]].map(([k,v])=>(<div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"4px 0", fontSize:12 }}><span style={{ color:"#64748b" }}>{k}</span><span style={{ fontWeight:600 }}>{v}</span></div>))}
                </div>
                <div style={{ background:"#f8fafc", borderRadius:8, padding:14 }}>
                  <div style={{ fontWeight:700, marginBottom:8, fontSize:13 }}>{t.certs}</div>
                  {sel.certifications.length > 0 ? sel.certifications.map(c=>(<div key={c} style={{ padding:"3px 0", fontSize:12 }}>✅ {c}</div>)) : <div style={{ fontSize:12, color:"#ef4444" }}>❌ {t.noCerts}</div>}
                </div>
              </div>
            </div>
          </div>) : (<div style={{ background:"#fff", borderRadius:10, padding:16 }}>
            <div style={{ fontWeight:700, fontSize:15, marginBottom:12 }}>{t.supplierPortfolio} — {suppliers.length} {t.suppliers}</div>
            {suppliers.map(s=>(<div key={s.id} onClick={()=>setSel(s)} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 8px", borderBottom:"1px solid #f1f5f9", cursor:"pointer" }}>
              <div style={{ display:"flex", alignItems:"center", gap:10 }}><div style={{ width:36, height:36, borderRadius:"50%", background:"#e0e7ff", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:700, color:"#4338ca" }}>{s.name[0]}</div><div><div style={{ fontWeight:600, fontSize:13 }}>{s.name}</div><div style={{ fontSize:11, color:"#94a3b8" }}>{s.country} · {s.category}</div></div></div>
              <div style={{ display:"flex", gap:6, alignItems:"center" }}><span style={{ fontSize:12, color:"#64748b" }}>£{(s.spend/1000).toFixed(0)}k</span><Bdg label={s.risk} color={rc(s.risk)} /><Bdg label={s.creditScore} color={cc(s.creditScore)} /></div>
            </div>))}
          </div>)}
        </div>)}

        {/* ONBOARDING */}
        {tab === "Onboarding" && (<div>
          {formDone ? (
            <div style={{ background:"#fff", borderRadius:10, padding:40, textAlign:"center" }}>
              <div style={{ fontSize:48, marginBottom:12 }}>✅</div>
              <h2 style={{ color:"#22c55e", marginBottom:8 }}>{t.formSuccess}</h2>
              <p style={{ color:"#64748b", marginBottom:20 }}>{formData.companyName} — {formData.contactEmail}</p>
              <button onClick={()=>{setFormDone(false);setShowForm(false);setFormStep(0);setFormData({});}} style={{ padding:"10px 24px", borderRadius:6, border:"none", background:"#3b82f6", color:"#fff", cursor:"pointer", fontWeight:600 }}>{t.back}</button>
            </div>
          ) : showForm ? <RegistrationForm /> : (<div>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
              <div style={{ display:"flex", gap:8 }}>
                {["pipeline","self-registration","campaigns"].map(v=>(<button key={v} onClick={()=>setObView(v)} style={{ padding:"8px 16px", borderRadius:6, border:obView===v?"2px solid #3b82f6":"1px solid #e2e8f0", background:obView===v?"#eff6ff":"#fff", fontWeight:600, fontSize:12, cursor:"pointer", color:obView===v?"#1e40af":"#64748b" }}>{v==="pipeline"?t.pipeline:v==="self-registration"?t.selfReg:t.campaigns}</button>))}
              </div>
              <button onClick={()=>{setShowForm(true);setFormStep(0);setFormData({});setFormDone(false);}} style={{ padding:"10px 20px", borderRadius:8, border:"none", background:"linear-gradient(135deg,#22c55e,#16a34a)", color:"#fff", cursor:"pointer", fontWeight:700, fontSize:13, boxShadow:"0 2px 8px rgba(34,197,94,0.3)" }}>➕ {t.registerNew}</button>
            </div>
            {obView === "pipeline" && (<div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:8, marginBottom:16 }}>
                {[[t.invited,12,"#94a3b8"],[t.registration,5,"#3b82f6"],[t.underReview,3,"#f59e0b"],[t.approved,28,"#22c55e"],[t.rejected,2,"#ef4444"]].map(([stage,count,color])=>(<div key={stage} style={{ background:"#fff", borderRadius:8, padding:14, borderTop:`4px solid ${color}`, textAlign:"center" }}><div style={{ fontSize:28, fontWeight:800, color }}>{count}</div><div style={{ fontSize:12, fontWeight:600, color:"#475569" }}>{stage}</div></div>))}
              </div>
              <div style={{ background:"#fff", borderRadius:10, padding:16 }}>
                <div style={{ fontWeight:700, marginBottom:12 }}>{t.recentActivity}</div>
                {[{name:"Nordic Pharma GmbH",stage:t.underReview,date:"25 Feb 2026",type:"Pharmaceutical"},{name:"TechBridge Solutions",stage:t.registration,date:"24 Feb 2026",type:"IT Services"},{name:"GreenPack Europe",stage:t.approved,date:"22 Feb 2026",type:"Packaging"},{name:"DataFlow Analytics",stage:t.invited,date:"21 Feb 2026",type:"IT Services"},{name:"Meridian Logistics",stage:t.underReview,date:"20 Feb 2026",type:"Logistics"},{name:"Apex Manufacturing",stage:t.rejected,date:"18 Feb 2026",type:"Components"}].map((item,i)=>(<div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"8px 0", borderBottom:"1px solid #f1f5f9" }}><div><div style={{ fontWeight:600, fontSize:13 }}>{item.name}</div><div style={{ fontSize:11, color:"#94a3b8" }}>{item.type} · {item.date}</div></div><Bdg label={item.stage} color={item.stage===t.approved?"#22c55e":item.stage===t.rejected?"#ef4444":item.stage===t.underReview?"#f59e0b":"#3b82f6"} /></div>))}
              </div>
            </div>)}
            {obView === "self-registration" && (<div style={{ background:"#fff", borderRadius:10, padding:20 }}>
              <h3 style={{ marginBottom:4 }}>{t.regPortal}</h3>
              <p style={{ color:"#64748b", fontSize:13, marginBottom:16 }}>{t.regDesc}</p>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
                <div>
                  <div style={{ fontWeight:700, marginBottom:10, fontSize:13 }}>{t.regSections}</div>
                  {["1. Company Information","2. Contact Information","3. Supplier Category (conditional logic)","4. Insurance & Compliance","5. Financial Information","6. Internal Use Fields"].map((s,i)=>(<div key={i} style={{ padding:"6px 0", fontSize:12, borderBottom:"1px solid #f8fafc" }}>✅ {s}</div>))}
                </div>
                <div>
                  <div style={{ fontWeight:700, marginBottom:10, fontSize:13 }}>{t.features}</div>
                  {["Multi-language (EN, DE, NL, FR, ES)","Built-in field validation","Smart conditional logic","MHRA/GDP/GMP for pharma","ISO 27001/Cyber Essentials for IT","Auto-submit to SRM platform"].map((f,i)=>(<div key={i} style={{ padding:"6px 0", fontSize:12, borderBottom:"1px solid #f8fafc" }}>🔷 {f}</div>))}
                  <button onClick={()=>{setShowForm(true);setFormStep(0);setFormData({});}} style={{ marginTop:12, padding:"10px 20px", borderRadius:6, border:"none", background:"#3b82f6", color:"#fff", cursor:"pointer", fontWeight:600, fontSize:13, width:"100%" }}>🚀 {t.registerNew}</button>
                </div>
              </div>
            </div>)}
            {obView === "campaigns" && (<div style={{ background:"#fff", borderRadius:10, padding:20 }}>
              <h3 style={{ marginBottom:4 }}>{t.assessCamp}</h3>
              <p style={{ color:"#64748b", fontSize:13, marginBottom:16 }}>{t.campDesc}</p>
              {[{name:"Q1 2026 Compliance Renewal",status:t.active,sent:120,responded:87,rate:"73%",deadline:"31 Mar 2026"},{name:"Pharma Supplier Re-Qualification",status:t.active,sent:45,responded:38,rate:"84%",deadline:"15 Mar 2026"},{name:"IT Vendor Security Assessment",status:"Planned",sent:0,responded:0,rate:"—",deadline:"30 Apr 2026"}].map((c,i)=>(<div key={i} style={{ padding:14, border:"1px solid #e2e8f0", borderRadius:8, marginBottom:8 }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}><div style={{ fontWeight:700, fontSize:14 }}>{c.name}</div><Bdg label={c.status} color={c.status===t.active?"#22c55e":"#3b82f6"} /></div>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8, fontSize:12 }}><div><span style={{ color:"#94a3b8" }}>{t.sent}:</span> <strong>{c.sent}</strong></div><div><span style={{ color:"#94a3b8" }}>{t.responded}:</span> <strong>{c.responded}</strong></div><div><span style={{ color:"#94a3b8" }}>{t.rate}:</span> <strong>{c.rate}</strong></div><div><span style={{ color:"#94a3b8" }}>{t.deadline}:</span> <strong>{c.deadline}</strong></div></div>
              </div>))}
            </div>)}
          </div>)}
        </div>)}

        {/* PERFORMANCE */}
        {tab === "Performance" && (<div>
          <div style={{ display:"flex", gap:8, marginBottom:16 }}>
            {[["scorecards",t.scorecards],["benchmark",t.benchmark],["trends",t.trends]].map(([v,l])=>(<button key={v} onClick={()=>setPfView(v)} style={{ padding:"8px 16px", borderRadius:6, border:pfView===v?"2px solid #3b82f6":"1px solid #e2e8f0", background:pfView===v?"#eff6ff":"#fff", fontWeight:600, fontSize:12, cursor:"pointer", color:pfView===v?"#1e40af":"#64748b" }}>{l}</button>))}
          </div>
          {pfView === "scorecards" && (<div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12 }}>
            {suppliers.map(s=>(<div key={s.id} style={{ background:"#fff", borderRadius:10, padding:16 }}>
              <div style={{ fontWeight:700, fontSize:14, marginBottom:2 }}>{s.name}</div>
              <div style={{ fontSize:11, color:"#94a3b8", marginBottom:12 }}>{s.country} · {s.segment}</div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:4 }}>
                {[["Delivery",s.delivery],["Quality",s.quality],["Responsiveness",s.responsiveness],["On-Time",s.onTime]].map(([l,v])=>(<div key={l} style={{ textAlign:"center" }}><Arc value={v} color={sc(v)} size={70} /><div style={{ fontSize:10, color:"#64748b" }}>{l}</div></div>))}
              </div>
              <div style={{ marginTop:10, textAlign:"center" }}><div style={{ fontSize:11, color:"#64748b" }}>{t.overall}</div><div style={{ fontSize:24, fontWeight:800, color:sc(s.performance) }}>{s.performance}%</div></div>
            </div>))}
          </div>)}
          {pfView === "benchmark" && (<div style={{ background:"#fff", borderRadius:10, padding:20 }}>
            <h3 style={{ marginBottom:12 }}>{t.supplierBench}</h3>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
              <thead><tr style={{ borderBottom:"2px solid #e2e8f0" }}>{[t.suppliers,"Delivery","Quality","Responsiveness","On-Time",t.overall].map(h=>(<th key={h} style={{ padding:"8px 6px", textAlign:"left", fontWeight:700 }}>{h}</th>))}</tr></thead>
              <tbody>{[...suppliers].sort((a,b)=>b.performance-a.performance).map((s,i)=>(<tr key={s.id} style={{ borderBottom:"1px solid #f1f5f9", background:i===0?"#f0fdf4":"transparent" }}><td style={{ padding:"8px 6px", fontWeight:600 }}>{i===0?"🏆 ":""}{s.name}</td>{[s.delivery,s.quality,s.responsiveness,s.onTime,s.performance].map((v,j)=>(<td key={j} style={{ padding:"8px 6px" }}><span style={{ color:sc(v), fontWeight:700 }}>{v}%</span></td>))}</tr>))}</tbody>
            </table>
          </div>)}
          {pfView === "trends" && (<div style={{ background:"#fff", borderRadius:10, padding:20 }}>
            <h3 style={{ marginBottom:16 }}>{t.perfTrends}</h3>
            {suppliers.slice(0,3).map(s=>(<div key={s.id} style={{ marginBottom:16, padding:14, border:"1px solid #e2e8f0", borderRadius:8 }}>
              <div style={{ fontWeight:700, marginBottom:8 }}>{s.name}</div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8 }}>
                {["Q1 2025","Q2 2025","Q3 2025","Q4 2025"].map((q,qi)=>{const v=Math.max(30,Math.min(98,s.performance+(qi-1)*5+Math.round(Math.sin(qi+s.id)*8)));return(<div key={q} style={{ textAlign:"center", padding:8, background:"#f8fafc", borderRadius:6 }}><div style={{ fontSize:10, color:"#94a3b8" }}>{q}</div><div style={{ fontSize:18, fontWeight:800, color:sc(v) }}>{v}%</div></div>);})}
              </div>
            </div>))}
          </div>)}
        </div>)}

        {/* CONTRACTS */}
        {tab === "Contracts" && (<div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12, marginBottom:16 }}>
            {[["14",t.activeContracts,"#3b82f6"],["3",t.expiringSoon,"#f59e0b"],["2",t.expired,"#ef4444"],["£486k",t.totalValue,"#22c55e"]].map(([v,l,c])=>(<div key={l} style={{ background:"#fff", borderRadius:8, padding:14, textAlign:"center", borderTop:`4px solid ${c}` }}><div style={{ fontSize:24, fontWeight:800, color:c }}>{v}</div><div style={{ fontSize:12, color:"#64748b" }}>{l}</div></div>))}
          </div>
          <div style={{ background:"#fff", borderRadius:10, padding:16 }}>
            <div style={{ fontWeight:700, marginBottom:12 }}>{t.contractReg}</div>
            {[{supplier:"Buyse Supplies",type:"Master Supply Agreement",start:"2024-01-15",end:"2027-01-14",value:"£210k",status:t.active},{supplier:"ABC Packaging Limited",type:"Framework Agreement",start:"2024-06-01",end:"2026-05-31",value:"£124k",status:t.active},{supplier:"Carpe Diem LLC",type:"Service Level Agreement",start:"2025-01-01",end:"2026-12-31",value:"£67k",status:t.active},{supplier:"Astrid Speed Control BV",type:"Purchase Agreement",start:"2025-03-01",end:"2026-03-31",value:"£45k",status:t.expiringSoon},{supplier:"Apollo International",type:"Supply Contract",start:"2023-09-01",end:"2025-08-31",value:"£18k",status:t.expired},{supplier:"Beijing Bolts & Bits",type:"PO Framework",start:"2024-02-01",end:"2025-12-31",value:"£22k",status:t.expiringSoon}].map((c,i)=>(<div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 0", borderBottom:"1px solid #f1f5f9" }}><div><div style={{ fontWeight:600, fontSize:13 }}>{c.supplier}</div><div style={{ fontSize:11, color:"#94a3b8" }}>{c.type} · {c.start} to {c.end}</div></div><div style={{ display:"flex", gap:8, alignItems:"center" }}><span style={{ fontWeight:700, fontSize:13 }}>{c.value}</span><Bdg label={c.status} color={c.status===t.active?"#22c55e":c.status===t.expiringSoon?"#f59e0b":"#ef4444"} /></div></div>))}
          </div>
        </div>)}

        {/* COMPLIANCE */}
        {tab === "Compliance" && (<div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12, marginBottom:16 }}>
            {[["4",t.compliant,"#22c55e"],["2",t.nonCompliant,"#ef4444"],["3",t.certsExpiring,"#f59e0b"],["8",t.totalCertsTracked,"#3b82f6"]].map(([v,l,c])=>(<div key={l} style={{ background:"#fff", borderRadius:8, padding:14, textAlign:"center", borderTop:`4px solid ${c}` }}><div style={{ fontSize:24, fontWeight:800, color:c }}>{v}</div><div style={{ fontSize:12, color:"#64748b" }}>{l}</div></div>))}
          </div>
          <div style={{ background:"#fff", borderRadius:10, padding:16 }}>
            <div style={{ fontWeight:700, marginBottom:12 }}>{t.compStatus}</div>
            {suppliers.map(s=>(<div key={s.id} style={{ padding:"10px 0", borderBottom:"1px solid #f1f5f9" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:6 }}><div style={{ fontWeight:600, fontSize:13 }}>{s.name}</div><Bdg label={s.compliance?t.compliant:t.nonCompliant} color={s.compliance?"#22c55e":"#ef4444"} /></div>
              <div style={{ display:"flex", gap:12, fontSize:11 }}><span style={{ color:"#64748b" }}>{t.insExpiry}: <strong style={{ color:new Date(s.insuranceExpiry)<new Date("2026-06-01")?"#f59e0b":"#22c55e" }}>{s.insuranceExpiry}</strong></span><span style={{ color:"#64748b" }}>{t.certs}: <strong>{s.certifications.length>0?s.certifications.join(", "):"None"}</strong></span></div>
            </div>))}
          </div>
        </div>)}

        {/* TEMPLATES */}
        {tab === "Templates" && (<div>
          <h3 style={{ marginBottom:4 }}>{t.templatesTitle}</h3>
          <p style={{ color:"#64748b", fontSize:13, marginBottom:16 }}>{t.templatesDesc}</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12 }}>
            {[{title:"Supplier Assessment Form",desc:"Comprehensive evaluation covering financial health, capability, and compliance",type:"Assessment",fields:42},{title:"Annual Audit Checklist",desc:"Step-by-step audit checklist with scoring criteria",type:"Audit",fields:35},{title:"RFQ Template",desc:"Request for Quotation with pricing tables and T&Cs",type:"Sourcing",fields:28},{title:"Supplier Scorecard",desc:"Quarterly performance scorecard with KPI benchmarks",type:"Performance",fields:18},{title:"Risk Assessment Matrix",desc:"Risk identification and mitigation template",type:"Risk",fields:24},{title:"Contract Review Checklist",desc:"Pre-signature review covering legal and compliance",type:"Contracts",fields:31}].map((tp,i)=>(<div key={i} style={{ background:"#fff", borderRadius:10, padding:16, cursor:"pointer", border:tmEdit===i?"2px solid #3b82f6":"1px solid #e2e8f0" }} onClick={()=>setTmEdit(tmEdit===i?null:i)}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}><div style={{ fontWeight:700, fontSize:14 }}>{tp.title}</div><Bdg label={tp.type} color="#3b82f6" /></div>
              <div style={{ fontSize:12, color:"#64748b", marginBottom:8, lineHeight:1.5 }}>{tp.desc}</div>
              <div style={{ fontSize:11, color:"#94a3b8" }}>{tp.fields} fields · Feb 2026</div>
              {tmEdit===i && (<div style={{ marginTop:10, padding:10, background:"#f8fafc", borderRadius:6, fontSize:12 }}><div style={{ display:"flex", gap:6 }}>{["📋 Preview","✏️ Edit","📤 Export","📧 Send"].map(a=>(<span key={a} style={{ padding:"4px 8px", background:"#e0e7ff", borderRadius:4, cursor:"pointer", fontSize:11 }}>{a}</span>))}</div></div>)}
            </div>))}
          </div>
        </div>)}

        {/* INTELLIGENCE */}
        {tab === "Intelligence" && (<div>
          <div style={{ display:"flex", gap:8, marginBottom:16 }}>
            {[["overview",t.overview],["spend",t.spend],["market",t.market],["ai-readiness",t.aiReadiness]].map(([v,l])=>(<button key={v} onClick={()=>setInView(v)} style={{ padding:"8px 16px", borderRadius:6, border:inView===v?"2px solid #3b82f6":"1px solid #e2e8f0", background:inView===v?"#eff6ff":"#fff", fontWeight:600, fontSize:12, cursor:"pointer", color:inView===v?"#1e40af":"#64748b" }}>{l}</button>))}
          </div>
          {inView === "overview" && (<div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <div style={{ background:"#fff", borderRadius:10, padding:16 }}><div style={{ fontWeight:700, marginBottom:12 }}>{t.keyInsights}</div>
              {["🔴 2 suppliers have no certifications — high compliance risk","🟡 3 insurance policies expiring within 6 months","🟢 Strategic suppliers averaging 72% performance","🔵 12 new suppliers invited this quarter","🟡 Beijing Bolts & Bits credit score declining","🟢 Buyse Supplies highest rated across all KPIs"].map((ins,i)=>(<div key={i} style={{ padding:"6px 0", fontSize:12, borderBottom:"1px solid #f8fafc", lineHeight:1.5 }}>{ins}</div>))}
            </div>
            <div style={{ background:"#fff", borderRadius:10, padding:16 }}><div style={{ fontWeight:700, marginBottom:12 }}>{t.recommendations}</div>
              {[{action:"Initiate audit for Apollo International",priority:"High"},{action:"Renew insurance for Astrid Speed Control BV",priority:"Medium"},{action:"Consolidate packaging suppliers",priority:"Low"},{action:"Request ISO 27001 from all IT vendors",priority:"Medium"}].map((r,i)=>(<div key={i} style={{ padding:"8px 0", borderBottom:"1px solid #f8fafc" }}><div style={{ display:"flex", justifyContent:"space-between" }}><span style={{ fontWeight:600, fontSize:12 }}>{r.action}</span><Bdg label={r.priority} color={r.priority==="High"?"#ef4444":r.priority==="Medium"?"#f59e0b":"#22c55e"} /></div></div>))}
            </div>
          </div>)}
          {inView === "spend" && (<div style={{ background:"#fff", borderRadius:10, padding:20 }}>
            <h3 style={{ marginBottom:12 }}>{t.spendAnalytics}</h3>
            {[...suppliers].sort((a,b)=>b.spend-a.spend).map(s=>(<div key={s.id} style={{ display:"flex", alignItems:"center", gap:12, padding:"8px 0", borderBottom:"1px solid #f1f5f9" }}><div style={{ width:140, fontWeight:600, fontSize:12 }}>{s.name}</div><div style={{ flex:1, background:"#e2e8f0", borderRadius:4, height:16 }}><div style={{ width:`${(s.spend/210000)*100}%`, background:s.segment==="Strategic"?"#3b82f6":s.segment==="Leverage"?"#f59e0b":"#94a3b8", borderRadius:4, height:16 }}/></div><div style={{ width:60, textAlign:"right", fontWeight:700, fontSize:12 }}>£{(s.spend/1000).toFixed(0)}k</div></div>))}
          </div>)}
          {inView === "market" && (<div style={{ background:"#fff", borderRadius:10, padding:20 }}>
            <h3 style={{ marginBottom:16 }}>{t.marketIntel}</h3>
            {[{alert:"Pharmaceutical API prices rising 12% in EU",impact:"High"},{alert:"New EU Due Diligence Directive from Q3 2026",impact:"Medium"},{alert:"Packaging material costs stabilising",impact:"Low"},{alert:"Cyber insurance requirements increasing for IT providers",impact:"Medium"}].map((m,i)=>(<div key={i} style={{ padding:12, border:"1px solid #e2e8f0", borderRadius:8, marginBottom:8 }}><div style={{ display:"flex", justifyContent:"space-between" }}><span style={{ fontWeight:600, fontSize:13 }}>{m.alert}</span><Bdg label={m.impact} color={m.impact==="High"?"#ef4444":m.impact==="Medium"?"#f59e0b":"#22c55e"} /></div></div>))}
          </div>)}
          {inView === "ai-readiness" && (<div style={{ background:"#fff", borderRadius:10, padding:20 }}>
            <h3 style={{ marginBottom:16 }}>{t.aiReadiness}</h3>
            {[["Data Completeness",65],["Digital Maturity",45],["Integration Readiness",55],["Process Standardisation",40]].map(([label,score])=>(<div key={label} style={{ marginBottom:14 }}><div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}><span style={{ fontWeight:600, fontSize:13 }}>{label}</span><span style={{ fontWeight:700, color:sc(score) }}>{score}%</span></div><div style={{ background:"#e2e8f0", borderRadius:4, height:10 }}><div style={{ width:`${score}%`, background:sc(score), borderRadius:4, height:10 }}/></div></div>))}
          </div>)}
        </div>)}

        {/* FLYWHEEL */}
        {tab === "Flywheel" && (<div style={{ background:"#fff", borderRadius:10, padding:20 }}>
          <h3 style={{ marginBottom:4 }}>{t.flywheelTitle}</h3>
          <p style={{ color:"#64748b", fontSize:13, marginBottom:16 }}>{t.flywheelDesc}</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12 }}>
            {[["1. Segment & Strategy","In Progress",4,531],["2. Risk & Due Diligence","Active",4,6],["3. Onboard & Qualify","In Progress",3,8],["4. Audit & Performance","Active",68,100],["5. Correct & Develop","Planned",0,6],["6. Harvest & Re-Segment","Planned",0,531]].map(([step,status,done,total])=>(<div key={step} style={{ padding:14, border:"1px solid #e2e8f0", borderRadius:10 }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}><span style={{ fontWeight:700, fontSize:13, color:"#1e3a5f" }}>{step}</span><Bdg label={status} color={status==="Active"?"#22c55e":status==="In Progress"?"#3b82f6":"#94a3b8"} /></div>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4, fontSize:11 }}><span>{t.progress}</span><span>{done}/{total}</span></div>
              <div style={{ background:"#e2e8f0", borderRadius:4, height:8 }}><div style={{ width:`${Math.max(2,(done/total)*100)}%`, background:"#3b82f6", borderRadius:4, height:8 }}/></div>
            </div>))}
          </div>
        </div>)}

        {/* ERP & ARCHITECTURE */}
        {tab === "ERP & Architecture" && (<div>
          <div style={{ background:"#fff", borderRadius:10, padding:20, marginBottom:12 }}>
            <h3 style={{ marginBottom:4 }}>{t.erpTitle}</h3>
            <p style={{ color:"#64748b", fontSize:13, marginBottom:16 }}>{t.erpDesc}</p>
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {[["🔷 SRM Layer (NEW)","#1e40af",["Supplier Profiles","Risk & Compliance","Performance Scorecards","Contract Lifecycle","Onboarding"]],["🔗 Middleware — API","#6366f1",["Vendor Master Sync","PO & Invoice Data","Spend Analytics Feed","Compliance Push"]],["🏦 ERP — Sage X3","#059669",["Purchase Orders","Invoices & Payments","Vendor Master","Spend Ledger"]],["📊 Data & Analytics","#71717a",["Snowflake","Metabase","Hex"]]].map(([title,color,items],i)=>(<div key={i} style={{ border:`2px solid ${color}40`, borderRadius:10, padding:14, borderLeft:`6px solid ${color}` }}><div style={{ fontWeight:700, color, marginBottom:8, fontSize:13 }}>{title}</div><div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>{items.map(item=>(<span key={item} style={{ background:`${color}10`, border:`1px solid ${color}20`, borderRadius:6, padding:"4px 10px", fontSize:11, fontWeight:600 }}>{item}</span>))}</div></div>))}
            </div>
          </div>
          <div style={{ background:"#1e3a5f", borderRadius:10, padding:16, color:"#fff" }}>
            <div style={{ fontWeight:700, marginBottom:10 }}>💬 {t.bizCase}</div>
            {[["Annual Platform Cost","~£37.5k (Kodiak Hub)"],["Suppliers Covered","531 across 5 brands"],["Est. Time Saving","10 hrs/wk · ~£34k/yr"],["Compliance Risk Reduction","High — currently manual"],["ERP Integration","Sage X3 → push/pull via API"]].map(([k,v])=>(<div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"5px 0", borderBottom:"1px solid #ffffff15", fontSize:12 }}><span style={{ color:"#93c5fd" }}>{k}</span><span style={{ fontWeight:700 }}>{v}</span></div>))}
          </div>
        </div>)}
      </div>

      <div style={{ textAlign:"center", padding:"20px 0", fontSize:11, color:"#94a3b8" }}>{t.builtBy}</div>
    </div>
  );
}
