import { useState } from "react";

const T = {
  en: { dashboard: "Dashboard", suppliers: "Suppliers", onboarding: "Onboarding", performance: "Performance", contracts: "Contracts", compliance: "Compliance", templates: "Templates", intelligence: "Intelligence", flywheel: "Flywheel", erp: "ERP & Architecture", title: "HeliosX Supplier SRM", subtitle: "Supplier Relationship Management Platform", totalSuppliers: "Total Suppliers", totalSpend: "Total Spend", avgPerf: "Avg Performance", nonCompliant: "Non-Compliant", active: "Active", annual: "Annual", back: "← Back", details: "Details", annSpend: "Annual Spend", lastAudit: "Last Audit", onTimeDelivery: "On-Time Delivery", insExpiry: "Insurance Expiry", certs: "Certifications", noCerts: "No certifications on file", compliant: "Compliant", certsExpiring: "Certs Expiring", totalCertsTracked: "Total Certs Tracked", compStatus: "Compliance Status", templatesTitle: "Templates & Playbooks", templatesDesc: "Standardised documents for supplier assessment, auditing, and sourcing", keyInsights: "Key Insights", recommendations: "Recommendations", spendAnalytics: "Spend Analytics", marketIntel: "Market Intelligence", aiReadiness: "AI Readiness Assessment", flywheelTitle: "Strategic Sourcing Flywheel", flywheelDesc: "6-step continuous improvement cycle", erpTitle: "ERP & SRM Architecture", erpDesc: "How SRM complements your ERP", registerNew: "Register as New Supplier", companyName: "Company Legal Name", tradingName: "Trading Name", regNumber: "Registration Number", vatNumber: "VAT Number", country: "Country", contactName: "Contact Name", contactEmail: "Email", contactPhone: "Phone", category: "Supplier Category", payTerms: "Payment Terms", currency: "Currency", bankName: "Bank Name", submit: "Submit Registration", required: "Required", selectCategory: "Select a category", pharmaceutical: "Pharmaceutical / API", packaging: "Packaging", itServices: "IT / Professional Services", logistics: "Logistics", components: "Components", other: "Other", pubLiability: "Public Liability Insurance", profIndemnity: "Professional Indemnity", empLiability: "Employers Liability", section: "Section", of: "of", next: "Next", previous: "Previous", overview: "Overview", spend: "Spend", market: "Market", progress: "Progress", inviteMgmt: "Invitation Management", sendInvite: "Send Invite", invitesSent: "Invites Sent", portalAccess: "Portal Access", submissionRate: "Submission Rate", engagementMetrics: "Engagement Metrics", copyLink: "Copy Link", copied: "Copied!", sharePortal: "Share this link with your supplier", pending: "Pending Invite", accessedPortal: "Portal Accessed", submitted: "Submitted", cancel: "Cancel", overall: "Overall Score", supplierPortfolio: "Supplier Portfolio", contractReg: "Contract Register", activeContracts: "Active Contracts", expiringSoon: "Expiring Soon", expired: "Expired", totalValue: "Total Value", complianceGap: "Compliance Gaps", auditFailed: "Audit Failed", auditPending: "Audit Pending", preview: "Preview", edit: "Edit", export: "Export", send: "Send", delete: "Delete", riskAssess: "Risk Assessment", supplier: "Supplier", quarterly: "Quarterly Performance", benchmarking: "Benchmarking", trends: "Trends", recentActivity: "Recent Onboarding Activity", engagementStatus: "Engagement Status", dataCompleteness: "Data Completeness", digitalMaturity: "Digital Maturity", integrationReadiness: "Integration Readiness", processStandardisation: "Process Standardisation", estimatedSaving: "Estimated Saving", businessCaseInfo: "Business Case Summary", builtBy: "Built by Elena Nutu, Operations Analyst · HeliosX Group · February 2026", success: "Success", loading: "Loading..." },
  fr: { dashboard: "Tableau de bord", suppliers: "Fournisseurs", onboarding: "Intégration", performance: "Performance", contracts: "Contrats", compliance: "Conformité", templates: "Modèles", intelligence: "Intelligence", flywheel: "Volant", erp: "ERP & Architecture", title: "HeliosX Supplier SRM", subtitle: "Plateforme de Gestion des Relations Fournisseurs", totalSuppliers: "Fournisseurs totaux", totalSpend: "Dépenses totales", avgPerf: "Perf. moyenne", nonCompliant: "Non conforme", active: "Actif", annual: "Annuel", back: "← Retour", details: "Détails", annSpend: "Dépenses annuelles", lastAudit: "Dernier audit", onTimeDelivery: "Livraison ponctuelle", insExpiry: "Expiration assurance", certs: "Certifications", noCerts: "Aucune certification", compliant: "Conforme", certsExpiring: "Cert. expirant", totalCertsTracked: "Cert. totaux", compStatus: "Statut de conformité", templatesTitle: "Modèles et Guides", templatesDesc: "Documents standardisés pour l'évaluation des fournisseurs", keyInsights: "Insights clés", recommendations: "Recommandations", spendAnalytics: "Analyse des dépenses", marketIntel: "Intelligence de marché", aiReadiness: "Préparation IA", flywheelTitle: "Volant d'approvisionnement stratégique", flywheelDesc: "Cycle d'amélioration en 6 étapes", erpTitle: "Architecture ERP & SRM", erpDesc: "Comment le SRM complète votre ERP", registerNew: "S'inscrire comme nouveau fournisseur", companyName: "Raison sociale", tradingName: "Nom commercial", regNumber: "Numéro d'enregistrement", vatNumber: "Numéro de TVA", country: "Pays", contactName: "Nom du contact", contactEmail: "E-mail", contactPhone: "Téléphone", category: "Catégorie fournisseur", payTerms: "Conditions de paiement", currency: "Devise", bankName: "Nom de la banque", submit: "Soumettre l'inscription", required: "Obligatoire", selectCategory: "Sélectionner une catégorie", pharmaceutical: "Pharmaceutique / API", packaging: "Emballage", itServices: "IT / Services", logistics: "Logistique", components: "Composants", other: "Autre", pubLiability: "Responsabilité civile", profIndemnity: "Responsabilité professionnelle", empLiability: "Responsabilité employeur", section: "Section", of: "de", next: "Suivant", previous: "Précédent", overview: "Aperçu", spend: "Dépenses", market: "Marché", progress: "Progrès", inviteMgmt: "Gestion des invitations", sendInvite: "Envoyer une invitation", invitesSent: "Invitations envoyées", portalAccess: "Accès au portail", submissionRate: "Taux de soumission", engagementMetrics: "Métriques d'engagement", copyLink: "Copier le lien", copied: "Copié!", sharePortal: "Partager ce lien avec votre fournisseur", pending: "Invitation en attente", accessedPortal: "Portail consulté", submitted: "Soumis", cancel: "Annuler", overall: "Score global", supplierPortfolio: "Portefeuille de fournisseurs", contractReg: "Registre des contrats", activeContracts: "Contrats actifs", expiringSoon: "Expiration proche", expired: "Expiré", totalValue: "Valeur totale", complianceGap: "Lacunes de conformité", auditFailed: "Audit échoué", auditPending: "Audit en attente", preview: "Aperçu", edit: "Modifier", export: "Exporter", send: "Envoyer", delete: "Supprimer", riskAssess: "Évaluation des risques", supplier: "Fournisseur", quarterly: "Performance trimestrielle", benchmarking: "Benchmarking", trends: "Tendances", recentActivity: "Activité récente", engagementStatus: "Statut d'engagement", dataCompleteness: "Complétude des données", digitalMaturity: "Maturité numérique", integrationReadiness: "Disponibilité pour l'intégration", processStandardisation: "Standardisation des processus", estimatedSaving: "Économies estimées", businessCaseInfo: "Résumé du Business Case", builtBy: "Créé par Elena Nutu · HeliosX Group · Février 2026", success: "Succès", loading: "Chargement..." },
  de: { dashboard: "Dashboard", suppliers: "Lieferanten", onboarding: "Onboarding", performance: "Leistung", contracts: "Verträge", compliance: "Compliance", templates: "Vorlagen", intelligence: "Intelligenz", flywheel: "Schwungrad", erp: "ERP & Architektur", title: "HeliosX Supplier SRM", subtitle: "Lieferantenbeziehungsmanagementsystem", totalSuppliers: "Lieferanten gesamt", totalSpend: "Gesamtausgaben", avgPerf: "Durchschn. Leistung", nonCompliant: "Nicht konform", active: "Aktiv", annual: "Jährlich", back: "← Zurück", details: "Details", annSpend: "Jahresausgaben", lastAudit: "Letztes Audit", onTimeDelivery: "Pünktliche Lieferung", insExpiry: "Versicherungsablauf", certs: "Zertifizierungen", noCerts: "Keine Zertifizierungen", compliant: "Konform", certsExpiring: "Zert. ablaufend", totalCertsTracked: "Zert. gesamt", compStatus: "Compliance-Status", templatesTitle: "Vorlagen & Handbücher", templatesDesc: "Standardisierte Dokumente für Lieferantenbewertung", keyInsights: "Wichtige Erkenntnisse", recommendations: "Empfehlungen", spendAnalytics: "Ausgabenanalyse", marketIntel: "Marktintelligenz", aiReadiness: "KI-Bereitschaft", flywheelTitle: "Strategisches Beschaffungs-Schwungrad", flywheelDesc: "6-Schritte-Verbesserungszyklus", erpTitle: "ERP & SRM-Architektur", erpDesc: "Wie SRM Ihr ERP ergänzt", registerNew: "Als neuer Lieferant registrieren", companyName: "Firmenname", tradingName: "Handelsname", regNumber: "Registrierungsnummer", vatNumber: "USt-IdNr.", country: "Land", contactName: "Kontaktname", contactEmail: "E-Mail", contactPhone: "Telefon", category: "Lieferantenkategorie", payTerms: "Zahlungsbedingungen", currency: "Währung", bankName: "Bankname", submit: "Registrierung absenden", required: "Pflichtfeld", selectCategory: "Kategorie wählen", pharmaceutical: "Pharmazeutisch / API", packaging: "Verpackung", itServices: "IT / Dienstleistungen", logistics: "Logistik", components: "Komponenten", other: "Sonstige", pubLiability: "Betriebshaftpflicht", profIndemnity: "Berufshaftpflicht", empLiability: "Arbeitgeberhaftpflicht", section: "Abschnitt", of: "von", next: "Weiter", previous: "Zurück", overview: "Übersicht", spend: "Ausgaben", market: "Markt", progress: "Fortschritt", inviteMgmt: "Einladungsverwaltung", sendInvite: "Einladung senden", invitesSent: "Einladungen gesendet", portalAccess: "Portal-Zugriff", submissionRate: "Einreichungsquote", engagementMetrics: "Engagement-Metriken", copyLink: "Link kopieren", copied: "Kopiert!", sharePortal: "Diesen Link mit Ihrem Lieferanten teilen", pending: "Einladung ausstehend", accessedPortal: "Portal aufgerufen", submitted: "Eingereicht", cancel: "Abbrechen", overall: "Gesamtbewertung", supplierPortfolio: "Lieferantenportfolio", contractReg: "Vertragsregister", activeContracts: "Aktive Verträge", expiringSoon: "Bald ablaufend", expired: "Abgelaufen", totalValue: "Gesamtwert", complianceGap: "Compliance-Lücken", auditFailed: "Audit fehlgeschlagen", auditPending: "Audit ausstehend", preview: "Vorschau", edit: "Bearbeiten", export: "Exportieren", send: "Senden", delete: "Löschen", riskAssess: "Risikobewertung", supplier: "Lieferant", quarterly: "Vierteljährliche Leistung", benchmarking: "Benchmarking", trends: "Trends", recentActivity: "Letzte Aktivität", engagementStatus: "Engagement-Status", dataCompleteness: "Datenvollständigkeit", digitalMaturity: "Digitale Reife", integrationReadiness: "Integrationsvorbereitung", processStandardisation: "Prozessstandardisierung", estimatedSaving: "Geschätzte Einsparungen", businessCaseInfo: "Business Case Zusammenfassung", builtBy: "Erstellt von Elena Nutu · HeliosX Group · Februar 2026", success: "Erfolg", loading: "Lädt..." },
  nl: { dashboard: "Dashboard", suppliers: "Leveranciers", onboarding: "Onboarding", performance: "Prestaties", contracts: "Contracten", compliance: "Naleving", templates: "Sjablonen", intelligence: "Intelligentie", flywheel: "Vliegwiel", erp: "ERP & Architectuur", title: "HeliosX Supplier SRM", subtitle: "Leveranciersrelatiebeheerplatform", totalSuppliers: "Totaal leveranciers", totalSpend: "Totale uitgaven", avgPerf: "Gem. prestatie", nonCompliant: "Niet-conform", active: "Actief", annual: "Jaarlijks", back: "← Terug", details: "Details", annSpend: "Jaarlijkse uitgaven", lastAudit: "Laatste audit", onTimeDelivery: "Tijdige levering", insExpiry: "Verzekeringsverloop", certs: "Certificeringen", noCerts: "Geen certificeringen", compliant: "Conform", certsExpiring: "Cert. vervalt", totalCertsTracked: "Totaal cert.", compStatus: "Nalevingsstatus", templatesTitle: "Sjablonen & Handleidingen", templatesDesc: "Gestandaardiseerde documenten voor leveranciersevaluatie", keyInsights: "Belangrijkste inzichten", recommendations: "Aanbevelingen", spendAnalytics: "Uitgavenanalyse", marketIntel: "Marktintelligentie", aiReadiness: "AI-gereedheid", flywheelTitle: "Strategisch inkoopvliegwiel", flywheelDesc: "6-stappen verbeteringscyclus", erpTitle: "ERP & SRM-Architectuur", erpDesc: "Hoe SRM uw ERP aanvult", registerNew: "Registreer als nieuwe leverancier", companyName: "Bedrijfsnaam", tradingName: "Handelsnaam", regNumber: "Registratienummer", vatNumber: "BTW-nummer", country: "Land", contactName: "Contactnaam", contactEmail: "E-mail", contactPhone: "Telefoon", category: "Leverancierscategorie", payTerms: "Betalingsvoorwaarden", currency: "Valuta", bankName: "Banknaam", submit: "Registratie indienen", required: "Vereist", selectCategory: "Selecteer categorie", pharmaceutical: "Farmaceutisch / API", packaging: "Verpakking", itServices: "IT / Diensten", logistics: "Logistiek", components: "Componenten", other: "Overig", pubLiability: "Aansprakelijkheid", profIndemnity: "Beroepsaansprakelijkheid", empLiability: "Werkgeversaansprakelijkheid", section: "Sectie", of: "van", next: "Volgende", previous: "Vorige", overview: "Overzicht", spend: "Uitgaven", market: "Markt", progress: "Voortgang", inviteMgmt: "Uitnodigingenbeheer", sendInvite: "Uitnodiging versturen", invitesSent: "Uitnodigingen verzonden", portalAccess: "Portaaltoegang", submissionRate: "Inzendpercentage", engagementMetrics: "Betrokkenheidsmetrics", copyLink: "Link kopiëren", copied: "Gekopieerd!", sharePortal: "Deel deze link met uw leverancier", pending: "Uitnodiging in afwachting", accessedPortal: "Portaal geopend", submitted: "Ingediend", cancel: "Annuleren", overall: "Totaalscore", supplierPortfolio: "Leveranciersportefeuille", contractReg: "Contractregister", activeContracts: "Actieve contracten", expiringSoon: "Bijna verlopen", expired: "Verlopen", totalValue: "Totale waarde", complianceGap: "Nalevingsgaten", auditFailed: "Audit mislukt", auditPending: "Audit in afwachting", preview: "Voorbeeld", edit: "Bewerken", export: "Exporteren", send: "Verzenden", delete: "Verwijderen", riskAssess: "Risicobeoordeling", supplier: "Leverancier", quarterly: "Driemaandelijkse prestatie", benchmarking: "Benchmarking", trends: "Trends", recentActivity: "Recente activiteit", engagementStatus: "Betrokkenheidsstatus", dataCompleteness: "Gegevensvolledigheid", digitalMaturity: "Digitale rijpheid", integrationReadiness: "Integratieparaatheid", processStandardisation: "Processstandardisatie", estimatedSaving: "Geschatte besparing", businessCaseInfo: "Business Case Samenvatting", builtBy: "Gebouwd door Elena Nutu · HeliosX Group · Februari 2026", success: "Succes", loading: "Laden..." },
  pt: { dashboard: "Painel", suppliers: "Fornecedores", onboarding: "Integração", performance: "Desempenho", contracts: "Contratos", compliance: "Conformidade", templates: "Modelos", intelligence: "Inteligência", flywheel: "Volante", erp: "ERP & Arquitetura", title: "HeliosX Supplier SRM", subtitle: "Plataforma de Gestão de Relacionamento com Fornecedores", totalSuppliers: "Total de Fornecedores", totalSpend: "Gastos Totais", avgPerf: "Desempenho Médio", nonCompliant: "Não Conforme", active: "Ativo", annual: "Anual", back: "← Voltar", details: "Detalhes", annSpend: "Despesas Anuais", lastAudit: "Última Auditoria", onTimeDelivery: "Entrega no Prazo", insExpiry: "Vencimento do Seguro", certs: "Certificações", noCerts: "Sem certificações", compliant: "Conforme", certsExpiring: "Cert. Vencendo", totalCertsTracked: "Cert. Total", compStatus: "Status de Conformidade", templatesTitle: "Modelos e Guias", templatesDesc: "Documentos padronizados para avaliação de fornecedores", keyInsights: "Principais Insights", recommendations: "Recomendações", spendAnalytics: "Análise de Gastos", marketIntel: "Inteligência de Mercado", aiReadiness: "Preparação para IA", flywheelTitle: "Volante de Abastecimento Estratégico", flywheelDesc: "Ciclo de melhoria em 6 etapas", erpTitle: "Arquitetura ERP & SRM", erpDesc: "Como o SRM complementa seu ERP", registerNew: "Registre-se como Novo Fornecedor", companyName: "Razão Social", tradingName: "Nome Comercial", regNumber: "Número de Registro", vatNumber: "Número de CNPJ/CPF", country: "País", contactName: "Nome do Contato", contactEmail: "E-mail", contactPhone: "Telefone", category: "Categoria do Fornecedor", payTerms: "Condições de Pagamento", currency: "Moeda", bankName: "Nome do Banco", submit: "Enviar Registro", required: "Obrigatório", selectCategory: "Selecionar categoria", pharmaceutical: "Farmacêutico / API", packaging: "Embalagem", itServices: "TI / Serviços", logistics: "Logística", components: "Componentes", other: "Outro", pubLiability: "Responsabilidade Civil", profIndemnity: "Responsabilidade Profissional", empLiability: "Responsabilidade do Empregador", section: "Seção", of: "de", next: "Próximo", previous: "Anterior", overview: "Visão Geral", spend: "Gastos", market: "Mercado", progress: "Progresso", inviteMgmt: "Gerenciamento de Convites", sendInvite: "Enviar Convite", invitesSent: "Convites Enviados", portalAccess: "Acesso ao Portal", submissionRate: "Taxa de Envio", engagementMetrics: "Métricas de Engajamento", copyLink: "Copiar Link", copied: "Copiado!", sharePortal: "Compartilhe este link com seu fornecedor", pending: "Convite Pendente", accessedPortal: "Portal Acessado", submitted: "Enviado", cancel: "Cancelar", overall: "Pontuação Geral", supplierPortfolio: "Portfólio de Fornecedores", contractReg: "Registro de Contratos", activeContracts: "Contratos Ativos", expiringSoon: "Vencendo em Breve", expired: "Expirado", totalValue: "Valor Total", complianceGap: "Lacunas de Conformidade", auditFailed: "Auditoria Falhada", auditPending: "Auditoria Pendente", preview: "Pré-visualização", edit: "Editar", export: "Exportar", send: "Enviar", delete: "Deletar", riskAssess: "Avaliação de Risco", supplier: "Fornecedor", quarterly: "Desempenho Trimestral", benchmarking: "Benchmarking", trends: "Tendências", recentActivity: "Atividade Recente", engagementStatus: "Status de Engajamento", dataCompleteness: "Completude dos Dados", digitalMaturity: "Maturidade Digital", integrationReadiness: "Prontidão para Integração", processStandardisation: "Padronização de Processos", estimatedSaving: "Economia Estimada", businessCaseInfo: "Resumo do Business Case", builtBy: "Criado por Elena Nutu · HeliosX Group · Fevereiro 2026", success: "Sucesso", loading: "Carregando..." }
};

const langs = [["en","🇬🇧 EN"],["fr","🇫🇷 FR"],["de","🇩🇪 DE"],["nl","🇳🇱 NL"],["pt","🇵🇹 PT"]];

const initialSuppliers = [
  { id:1, name:"ABC Packaging Limited", country:"Germany", segment:"Strategic", risk:"Low Risk", auditStatus:"Approved", performance:68, spend:124000, lastAudit:"2025-01-10", compliance:true, delivery:94, quality:88, responsiveness:72, onTime:96, certifications:["ISO 9001","ISO 14001"], insuranceExpiry:"2026-08-15", category:"Packaging", inviteStatus: "submitted", inviteSent: "2026-02-10", portalAccessed: "2026-02-11", submitted: "2026-02-15" },
  { id:2, name:"Astrid Speed Control BV", country:"Netherlands", segment:"Leverage", risk:"Medium Risk", auditStatus:"Pending", performance:54, spend:45000, lastAudit:"2024-11-05", compliance:true, delivery:78, quality:65, responsiveness:58, onTime:72, certifications:["ISO 9001"], insuranceExpiry:"2026-03-20", category:"Engineering", inviteStatus: "accessedPortal", inviteSent: "2026-02-12", portalAccessed: "2026-02-13" },
  { id:3, name:"Apollo International", country:"New Zealand", segment:"Tactical", risk:"High Risk", auditStatus:"Failed", performance:41, spend:18000, lastAudit:"2024-09-20", compliance:false, delivery:52, quality:45, responsiveness:35, onTime:48, certifications:[], insuranceExpiry:"2025-12-01", category:"Raw Materials", inviteStatus: "invited", inviteSent: "2026-02-14" },
  { id:4, name:"Buyse Supplies", country:"Belgium", segment:"Strategic", risk:"Low Risk", auditStatus:"Approved", performance:76, spend:210000, lastAudit:"2025-02-01", compliance:true, delivery:92, quality:90, responsiveness:85, onTime:94, certifications:["ISO 9001","ISO 14001","ISO 27001"], insuranceExpiry:"2027-01-30", category:"Pharmaceutical", inviteStatus: "submitted", inviteSent: "2026-02-08", portalAccessed: "2026-02-09", submitted: "2026-02-12" },
  { id:5, name:"Carpe Diem LLC", country:"USA", segment:"Leverage", risk:"Low Risk", auditStatus:"Approved", performance:70, spend:67000, lastAudit:"2024-12-15", compliance:true, delivery:88, quality:82, responsiveness:76, onTime:90, certifications:["ISO 9001","Cyber Essentials"], insuranceExpiry:"2026-06-10", category:"IT Services", inviteStatus: "submitted", inviteSent: "2026-02-06", portalAccessed: "2026-02-07", submitted: "2026-02-09" },
  { id:6, name:"Beijing Bolts & Bits", country:"China", segment:"Tactical", risk:"High Risk", auditStatus:"Pending", performance:45, spend:22000, lastAudit:"2024-08-10", compliance:false, delivery:60, quality:55, responsiveness:40, onTime:58, certifications:[], insuranceExpiry:"2025-09-30", category:"Components", inviteStatus: "pending", inviteSent: null },
];

const sc = v => v >= 75 ? "#22c55e" : v >= 50 ? "#f59e0b" : "#ef4444";

const Arc = ({ value, color, size = 80 }) => {
  const r = size/2-8, circ = Math.PI*r, off = circ-(value/100)*circ, cx = size/2, cy = size/2;
  return (<svg width={size} height={size/2+10} viewBox={`0 0 ${size} ${size/2+10}`}><path d={`M 8 ${cy} A ${r} ${r} 0 0 1 ${size-8} ${cy}`} fill="none" stroke="#e2e8f0" strokeWidth="6"/><path d={`M 8 ${cy} A ${r} ${r} 0 0 1 ${size-8} ${cy}`} fill="none" stroke={color} strokeWidth="6" strokeDasharray={circ} strokeDashoffset={off}/><text x={cx} y={cy+2} textAnchor="middle" fontSize="14" fontWeight="700" fill={color}>{value}</text></svg>);
};

const Bdg = ({ label, color, onClick }) => (<span onClick={onClick} style={{ background:color+"20", color, border:`1px solid ${color}40`, borderRadius:20, padding:"4px 12px", fontSize:11, fontWeight:600, cursor: onClick ? "pointer" : "default" }}>{label}</span>);

export default function App() {
  const [lang, setLang] = useState("en");
  const [tab, setTab] = useState("Dashboard");
  const [suppliers, setSuppliers] = useState(initialSuppliers);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [inviteModal, setInviteModal] = useState(null);
  const [registrationModal, setRegistrationModal] = useState(false);
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [copiedId, setCopiedId] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [tmEdit, setTmEdit] = useState(null);

  const t = T[lang];
  const nc = suppliers.filter(s => !s.compliance).length;
  const invitesSent = suppliers.filter(s => s.inviteStatus !== "pending").length;
  const portalAccessCount = suppliers.filter(s => ["accessedPortal", "submitted"].includes(s.inviteStatus)).length;
  const submittedCount = suppliers.filter(s => s.inviteStatus === "submitted").length;

  const tabKeys = ["Dashboard","Suppliers","Onboarding","Performance","Contracts","Compliance","Templates","Intelligence","Flywheel","ERP & Architecture"];
  const tabLabels = [t.dashboard,t.suppliers,t.onboarding,t.performance,t.contracts,t.compliance,t.templates,t.intelligence,t.flywheel,t.erp];

  const generateInviteLink = (supplierId) => `https://heliosx-supplier.app/register/${supplierId}`;

  const sendInvite = (supplierId) => {
    setSuppliers(suppliers.map(s => s.id === supplierId ? { ...s, inviteStatus: "invited", inviteSent: new Date().toISOString().split('T')[0] } : s));
    setInviteModal(null);
    setSuccessMessage(`✅ Invite sent to ${suppliers.find(s => s.id === supplierId).name}`);
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleFormSubmit = () => {
    if (formData.companyName && formData.regNumber && formData.contactName && formData.contactEmail) {
      setSuccessMessage(`✅ ${formData.companyName} registered successfully!`);
      setFormData({});
      setFormStep(0);
      setRegistrationModal(false);
      setTimeout(() => setSuccessMessage(null), 3000);
    }
  };

  const updateForm = (k, v) => setFormData(p => ({ ...p, [k]: v }));

  const inviteStatusLabel = (status) => {
    switch(status) {
      case "pending": return t.pending;
      case "invited": return t.invited;
      case "accessedPortal": return t.accessedPortal;
      case "submitted": return t.submitted;
      default: return status;
    }
  };

  const icol = i => i === "submitted" ? "#22c55e" : i === "accessedPortal" ? "#f59e0b" : i === "invited" ? "#3b82f6" : "#94a3b8";

  return (
    <div style={{ minHeight:"100vh", background:"#f1f5f9", fontFamily:"'Segoe UI',system-ui,sans-serif" }}>
      <div style={{ background:"linear-gradient(135deg,#1e3a5f,#1e40af)", color:"#fff", padding:"12px 24px", display:"flex", justifyContent:"space-between", alignItems:"center", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ cursor: "pointer" }} onClick={() => { setTab("Dashboard"); setSelectedSupplier(null); }}>
          <div style={{ fontWeight:800, fontSize:18 }}>H</div>
          <div style={{ fontWeight:700, fontSize:16, marginLeft:8 }}>{t.title}</div>
          <div style={{ fontSize:11, color:"#93c5fd" }}>{t.subtitle}</div>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          <div style={{ display:"flex", gap:4 }}>
            {langs.map(([code,label]) => (
              <button key={code} onClick={() => setLang(code)} style={{ padding:"6px 12px", borderRadius:4, border: lang===code ? "2px solid #fff" : "1px solid #ffffff40", background: lang===code ? "#ffffff20" : "transparent", color:"#fff", cursor:"pointer", fontSize:11, fontWeight: lang===code ? 700 : 400, transition: "all 0.2s" }}>
                {label}
              </button>
            ))}
          </div>
          {nc > 0 && <Bdg label={`⚠ ${nc} ${t.nonCompliant}`} color="#ef4444" />}
        </div>
      </div>

      {successMessage && (
        <div style={{ background:"#d1fae5", color:"#065f46", padding:"12px 24px", textAlign:"center", fontWeight:600 }}>
          {successMessage}
        </div>
      )}

      <div style={{ background:"#fff", borderBottom:"2px solid #e2e8f0", display:"flex", gap:0, overflowX:"auto", position: "sticky", top: successMessage ? 55 : 72, zIndex: 99 }}>
        {tabKeys.map((tk,i) => (
          <button key={tk} onClick={() => { setTab(tk); setSelectedSupplier(null); }} style={{ padding:"12px 16px", border:"none", borderBottom: tab===tk ? "3px solid #1e40af" : "3px solid transparent", background:"none", fontWeight: tab===tk ? 700 : 500, color: tab===tk ? "#1e40af" : "#64748b", cursor:"pointer", fontSize:13, whiteSpace:"nowrap", transition: "all 0.2s" }}>
            {tabLabels[i]}
          </button>
        ))}
      </div>

      <div style={{ padding:24, maxWidth:1400, margin:"0 auto" }}>

        {/* DASHBOARD */}
        {tab === "Dashboard" && (
          <div>
            <h2 style={{ marginBottom: 16, color: "#1e3a5f" }}>📊 {t.dashboard}</h2>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))", gap:16, marginBottom:24 }}>
              {[[suppliers.length, t.totalSuppliers, "#3b82f6"], [invitesSent, t.invitesSent, "#3b82f6"], [portalAccessCount, t.portalAccess, "#f59e0b"], [submittedCount, t.submissionRate, "#22c55e"], ["£486k", t.totalSpend, "#f59e0b"], [Math.round(suppliers.reduce((a,s)=>a+s.performance,0)/suppliers.length) + "%", t.avgPerf, "#22c55e"]].map(([v,l,c]) => (
                <div key={l} onClick={() => setTab("Suppliers")} style={{ background:"#fff", borderRadius:12, padding:20, borderLeft:`4px solid ${c}`, cursor: "pointer", transition: "all 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }} onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)"} onMouseLeave={e => e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)"}>
                  <div style={{ fontSize:32, fontWeight:800, color:c, marginBottom:8 }}>{v}</div>
                  <div style={{ fontWeight:700, fontSize:14, color:"#1e3a5f", marginBottom:4 }}>{l}</div>
                  <div style={{ fontSize:12, color:"#64748b" }}>Click to view details →</div>
                </div>
              ))}
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:16 }}>
              <div style={{ background:"#fff", borderRadius:12, padding:20, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                <h3 style={{ margin:"0 0 16px 0", color:"#1e3a5f" }}>👥 {t.supplierPortfolio}</h3>
                <div style={{ maxHeight: 400, overflowY: "auto" }}>
                  {suppliers.map(s => (
                    <div key={s.id} onClick={() => { setTab("Suppliers"); setSelectedSupplier(s); }} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 0", borderBottom:"1px solid #f1f5f9", cursor:"pointer" }} onMouseEnter={e => e.currentTarget.style.background = "#f8fafc"} onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                      <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                        <div style={{ width:40, height:40, borderRadius:"50%", background:"#e0e7ff", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:700, fontSize:14, color:"#4338ca" }}>{s.name[0]}</div>
                        <div>
                          <div style={{ fontWeight:600, fontSize:13, color:"#1e3a5f" }}>{s.name}</div>
                          <div style={{ fontSize:11, color:"#94a3b8" }}>{s.country}</div>
                        </div>
                      </div>
                      <Bdg label={inviteStatusLabel(s.inviteStatus)} color={icol(s.inviteStatus)} />
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background:"#fff", borderRadius:12, padding:20, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                <h3 style={{ margin:"0 0 16px 0", color:"#1e3a5f" }}>📈 {t.engagementMetrics}</h3>
                {[["Pending", suppliers.filter(s => s.inviteStatus === "pending").length, "#94a3b8"], ["Invited", suppliers.filter(s => s.inviteStatus === "invited").length, "#3b82f6"], ["Accessed", suppliers.filter(s => s.inviteStatus === "accessedPortal").length, "#f59e0b"], ["Submitted", suppliers.filter(s => s.inviteStatus === "submitted").length, "#22c55e"]].map(([label, count, color]) => (
                  <div key={label} style={{ marginBottom:16, padding:12, background: color + "10", borderRadius:8, cursor: "pointer" }} onClick={() => setTab("Onboarding")}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:6 }}>
                      <span style={{fontWeight:600, color:"#1e3a5f", fontSize:13}}>{label}</span>
                      <span style={{fontWeight:700, color, fontSize:16}}>{count}</span>
                    </div>
                    <div style={{ background:"#e2e8f0", borderRadius:4, height:6 }}>
                      <div style={{ width:`${(count/suppliers.length)*100}%`, background:color, height:"100%" }}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SUPPLIERS */}
        {tab === "Suppliers" && (
          <div>
            {selectedSupplier ? (
              <div>
                <button onClick={() => setSelectedSupplier(null)} style={{ background:"none", border:"none", color:"#1e40af", cursor:"pointer", marginBottom:16, fontSize:13, fontWeight:600 }}>{t.back}</button>
                <div style={{ background:"#fff", borderRadius:12, padding:24, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:20 }}>
                    <div>
                      <h2 style={{ margin:0, fontSize:24, color:"#1e3a5f", marginBottom:4 }}>{selectedSupplier.name}</h2>
                      <div style={{ color:"#64748b", fontSize:13 }}>{selectedSupplier.country} · {selectedSupplier.category}</div>
                    </div>
                    <Bdg label={inviteStatusLabel(selectedSupplier.inviteStatus)} color={icol(selectedSupplier.inviteStatus)} onClick={() => setInviteModal(selectedSupplier)} />
                  </div>

                  <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:16, marginBottom:20 }}>
                    {[["Performance", selectedSupplier.performance], ["Delivery", selectedSupplier.delivery], ["Quality", selectedSupplier.quality], ["On-Time", selectedSupplier.onTime]].map(([l,v]) => (
                      <div key={l} style={{ textAlign:"center", background:"#f8fafc", borderRadius:8, padding:16 }}>
                        <Arc value={v} color={sc(v)} size={70} />
                        <div style={{ fontSize:12, color:"#64748b", marginTop:8 }}>{l}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
                    <div style={{ background:"#f8fafc", borderRadius:8, padding:16 }}>
                      <h4 style={{ margin:"0 0 12px 0", color:"#1e3a5f" }}>{t.details}</h4>
                      {[["Annual Spend", `£${(selectedSupplier.spend/1000).toFixed(0)}k`], ["Last Audit", selectedSupplier.lastAudit], ["Insurance Expiry", selectedSupplier.insuranceExpiry], ["Compliance", selectedSupplier.compliance ? "✅ Compliant" : "❌ Non-Compliant"]].map(([k,v]) => (
                        <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"8px 0", borderBottom:"1px solid #e2e8f0", fontSize:12 }}>
                          <span style={{ color:"#64748b", fontWeight:500 }}>{k}</span>
                          <span style={{ fontWeight:600, color:"#1e3a5f" }}>{v}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ background:"#f8fafc", borderRadius:8, padding:16 }}>
                      <h4 style={{ margin:"0 0 12px 0", color:"#1e3a5f" }}>🏆 {t.certs}</h4>
                      {selectedSupplier.certifications.length > 0 ? selectedSupplier.certifications.map(c => <div key={c} style={{ padding:"6px 0", fontSize:12, color:"#22c55e" }}>✅ {c}</div>) : <div style={{ fontSize:12, color:"#ef4444" }}>❌ {t.noCerts}</div>}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h2 style={{ marginBottom: 16, color: "#1e3a5f" }}>👥 {t.supplierPortfolio}</h2>
                <div style={{ background:"#fff", borderRadius:12, padding:20 }}>
                  {suppliers.map(s => (
                    <div key={s.id} onClick={() => setSelectedSupplier(s)} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"14px 0", borderBottom:"1px solid #f1f5f9", cursor:"pointer" }} onMouseEnter={e => e.currentTarget.style.background = "#f8fafc"} onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                      <div style={{ display:"flex", alignItems:"center", gap:12, flex:1 }}>
                        <div style={{ width:44, height:44, borderRadius:"50%", background:"#e0e7ff", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:700, fontSize:14, color:"#4338ca" }}>{s.name[0]}</div>
                        <div>
                          <div style={{ fontWeight:600, fontSize:13, color:"#1e3a5f" }}>{s.name}</div>
                          <div style={{ fontSize:11, color:"#94a3b8" }}>{s.country}</div>
                        </div>
                      </div>
                      <Bdg label={inviteStatusLabel(s.inviteStatus)} color={icol(s.inviteStatus)} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ONBOARDING */}
        {tab === "Onboarding" && (
          <div>
            <h2 style={{ marginBottom: 16, color: "#1e3a5f" }}>📋 {t.onboarding}</h2>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:12, marginBottom:24 }}>
              {[["Pending", suppliers.filter(s => s.inviteStatus === "pending").length, "#94a3b8"], ["Invited", suppliers.filter(s => s.inviteStatus === "invited").length, "#3b82f6"], ["Accessed", suppliers.filter(s => s.inviteStatus === "accessedPortal").length, "#f59e0b"], ["Submitted", suppliers.filter(s => s.inviteStatus === "submitted").length, "#22c55e"]].map(([stage, count, color]) => (
                <div key={stage} style={{ background:"#fff", borderRadius:10, padding:16, borderTop:`4px solid ${color}`, textAlign:"center" }}>
                  <div style={{ fontSize:28, fontWeight:800, color }}>{count}</div>
                  <div style={{ fontSize:12, fontWeight:600, color:"#475569" }}>{stage}</div>
                </div>
              ))}
            </div>

            <div style={{ background:"#fff", borderRadius:12, padding:20, marginBottom:24 }}>
              <h3 style={{ margin:"0 0 16px 0", color:"#1e3a5f" }}>🚀 {t.recentActivity}</h3>
              {suppliers.filter(s => s.inviteStatus !== "pending").map(s => (
                <div key={s.id} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 0", borderBottom:"1px solid #f1f5f9" }}>
                  <div>
                    <div style={{ fontWeight:600, fontSize:13, color:"#1e3a5f" }}>{s.name}</div>
                    <div style={{ fontSize:11, color:"#94a3b8" }}>
                      {s.inviteStatus === "submitted" && `✅ ${t.submitted} ${s.submitted}`}
                      {s.inviteStatus === "accessedPortal" && `🔗 ${t.accessedPortal} ${s.portalAccessed}`}
                      {s.inviteStatus === "invited" && `📧 ${t.invited} ${s.inviteSent}`}
                    </div>
                  </div>
                  <Bdg label={inviteStatusLabel(s.inviteStatus)} color={icol(s.inviteStatus)} />
                </div>
              ))}
            </div>

            <button onClick={() => setRegistrationModal(true)} style={{ padding:"12px 24px", borderRadius:8, border:"none", background:"linear-gradient(135deg,#22c55e,#16a34a)", color:"#fff", cursor:"pointer", fontWeight:700, fontSize:13 }}>
              ➕ {t.registerNew}
            </button>
          </div>
        )}

        {/* PERFORMANCE */}
        {tab === "Performance" && (
          <div>
            <h2 style={{ marginBottom: 16, color: "#1e3a5f" }}>📊 {t.performance}</h2>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:16 }}>
              {suppliers.map(s => (
                <div key={s.id} style={{ background:"#fff", borderRadius:12, padding:16, cursor: "pointer" }} onClick={() => { setTab("Suppliers"); setSelectedSupplier(s); }}>
                  <div style={{ fontWeight:700, fontSize:14, marginBottom:4, color:"#1e3a5f" }}>{s.name}</div>
                  <div style={{ fontSize:11, color:"#94a3b8", marginBottom:12 }}>{s.country}</div>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
                    {[["Delivery", s.delivery], ["Quality", s.quality], ["Responsiveness", s.responsiveness], ["On-Time", s.onTime]].map(([l,v]) => (
                      <div key={l} style={{ textAlign:"center" }}>
                        <Arc value={v} color={sc(v)} size={60} />
                        <div style={{ fontSize:9, color:"#64748b", marginTop:4 }}>{l}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop:12, textAlign:"center", padding:"8px 0", background:"#f8fafc", borderRadius:6 }}>
                    <div style={{ fontSize:10, color:"#64748b" }}>{t.overall}</div>
                    <div style={{ fontSize:20, fontWeight:800, color:sc(s.performance) }}>{s.performance}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* COMPLIANCE */}
        {tab === "Compliance" && (
          <div>
            <h2 style={{ marginBottom: 16, color: "#1e3a5f" }}>✅ {t.compliance}</h2>
            <div style={{ background:"#fff", borderRadius:12, padding:20 }}>
              {suppliers.map(s => (
                <div key={s.id} style={{ padding:"16px 0", borderBottom:"1px solid #f1f5f9", cursor: "pointer" }} onClick={() => { setTab("Suppliers"); setSelectedSupplier(s); }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
                    <div style={{ fontWeight:600, fontSize:13, color:"#1e3a5f" }}>{s.name}</div>
                    <Bdg label={s.compliance ? t.compliant : t.nonCompliant} color={s.compliance ? "#22c55e" : "#ef4444"} />
                  </div>
                  <div style={{ display:"flex", gap:16, fontSize:11 }}>
                    <span style={{ color:"#64748b" }}>Insurance: <strong style={{ color: new Date(s.insuranceExpiry) < new Date("2026-06-01") ? "#f59e0b" : "#22c55e" }}>{s.insuranceExpiry}</strong></span>
                    <span style={{ color:"#64748b" }}>Certs: <strong>{s.certifications.length}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONTRACTS */}
        {tab === "Contracts" && (
          <div>
            <h2 style={{ marginBottom: 16, color: "#1e3a5f" }}>📝 {t.contracts}</h2>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:12, marginBottom:24 }}>
              {[["14", t.activeContracts, "#3b82f6"], ["3", t.expiringSoon, "#f59e0b"], ["2", t.expired, "#ef4444"], ["£486k", t.totalValue, "#22c55e"]].map(([v,l,c]) => (
                <div key={l} style={{ background:"#fff", borderRadius:10, padding:16, borderTop:`4px solid ${c}`, textAlign:"center" }}>
                  <div style={{ fontSize:24, fontWeight:800, color:c }}>{v}</div>
                  <div style={{ fontSize:12, color:"#64748b" }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ background:"#fff", borderRadius:12, padding:20 }}>
              <p style={{ color:"#64748b" }}>Contract management features with tracking, renewal dates, and obligations.</p>
            </div>
          </div>
        )}

        {/* TEMPLATES */}
        {tab === "Templates" && (
          <div>
            <h2 style={{ marginBottom: 16, color: "#1e3a5f" }}>📋 {t.templatesTitle}</h2>
            <p style={{ color:"#64748b", marginBottom:20 }}>{t.templatesDesc}</p>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:16 }}>
              {[{title:"Supplier Assessment Form", desc:"Comprehensive evaluation covering financial health, capability, and compliance", type:"Assessment", fields:42}, {title:"Annual Audit Checklist", desc:"Step-by-step audit checklist with scoring criteria", type:"Audit", fields:35}, {title:"RFQ Template", desc:"Request for Quotation with pricing tables", type:"Sourcing", fields:28}, {title:"Supplier Scorecard", desc:"Quarterly performance scorecard with KPI benchmarks", type:"Performance", fields:18}, {title:"Risk Assessment Matrix", desc:"Risk identification and mitigation template", type:"Risk", fields:24}, {title:"Contract Review Checklist", desc:"Pre-signature review covering legal and compliance", type:"Contracts", fields:31}].map((tp, i) => (
                <div key={i} style={{ background:"#fff", borderRadius:10, padding:16, border: tmEdit === i ? "2px solid #3b82f6" : "1px solid #e2e8f0", cursor:"pointer" }} onClick={() => setTmEdit(tmEdit === i ? null : i)}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
                    <div style={{ fontWeight:700, fontSize:14, color:"#1e3a5f" }}>{tp.title}</div>
                    <Bdg label={tp.type} color="#3b82f6" />
                  </div>
                  <div style={{ fontSize:12, color:"#64748b", marginBottom:8 }}>{tp.desc}</div>
                  <div style={{ fontSize:11, color:"#94a3b8" }}>{tp.fields} {t.section}</div>
                  {tmEdit === i && (<div style={{ marginTop:10, display:"flex", gap:6 }}>{[t.preview, t.edit, t.export, t.send].map(a => (<span key={a} style={{ padding:"4px 8px", background:"#e0e7ff", borderRadius:4, cursor:"pointer", fontSize:11 }}>{a}</span>))}</div>)}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* INTELLIGENCE */}
        {tab === "Intelligence" && (
          <div>
            <h2 style={{ marginBottom: 16, color: "#1e3a5f" }}>🧠 {t.intelligence}</h2>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
              <div style={{ background:"#fff", borderRadius:12, padding:20 }}>
                <h3 style={{ margin:"0 0 16px 0", color:"#1e3a5f" }}>{t.keyInsights}</h3>
                {["🔴 2 suppliers have no certifications", "🟡 3 insurance policies expiring within 6 months", "🟢 Strategic suppliers averaging 72% performance", "🔵 12 new suppliers invited this quarter", "🟡 Beijing Bolts declining credit score", "🟢 Buyse Supplies highest rated overall"].map((ins, i) => <div key={i} style={{ padding:"6px 0", fontSize:12, borderBottom:"1px solid #f1f5f9" }}>{ins}</div>)}
              </div>
              <div style={{ background:"#fff", borderRadius:12, padding:20 }}>
                <h3 style={{ margin:"0 0 16px 0", color:"#1e3a5f" }}>{t.recommendations}</h3>
                {[{action:"Initiate audit for Apollo International", priority:"High"}, {action:"Renew insurance for Astrid Speed Control BV", priority:"Medium"}, {action:"Consolidate packaging suppliers", priority:"Low"}, {action:"Request ISO 27001 from all IT vendors", priority:"Medium"}].map((r, i) => <div key={i} style={{ padding:"8px 0", borderBottom:"1px solid #f1f5f9", fontSize:12 }}><div style={{display:"flex", justifyContent:"space-between"}}><span style={{fontWeight:600}}>{r.action}</span><Bdg label={r.priority} color={r.priority === "High" ? "#ef4444" : r.priority === "Medium" ? "#f59e0b" : "#22c55e"} /></div></div>)}
              </div>
            </div>
          </div>
        )}

        {/* FLYWHEEL */}
        {tab === "Flywheel" && (
          <div>
            <h2 style={{ marginBottom: 16, color: "#1e3a5f" }}>🔄 {t.flywheelTitle}</h2>
            <p style={{ color:"#64748b", marginBottom:20 }}>{t.flywheelDesc}</p>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:12 }}>
              {[["1. Segment & Strategy", "In Progress", 4, 531], ["2. Risk & Due Diligence", "Active", 4, 6], ["3. Onboard & Qualify", "In Progress", 3, 8], ["4. Audit & Performance", "Active", 68, 100], ["5. Correct & Develop", "Planned", 0, 6], ["6. Harvest & Re-Segment", "Planned", 0, 531]].map(([step, status, done, total]) => (
                <div key={step} style={{ padding:14, border:"1px solid #e2e8f0", borderRadius:10, background:"#fff" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
                    <span style={{ fontWeight:700, fontSize:13, color:"#1e3a5f" }}>{step}</span>
                    <Bdg label={status} color={status === "Active" ? "#22c55e" : status === "In Progress" ? "#3b82f6" : "#94a3b8"} />
                  </div>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4, fontSize:11 }}><span>{t.progress}</span><span>{done}/{total}</span></div>
                  <div style={{ background:"#e2e8f0", borderRadius:4, height:8 }}>
                    <div style={{ width:`${Math.max(2, (done/total)*100)}%`, background:"#3b82f6", borderRadius:4, height:8 }}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ERP & ARCHITECTURE */}
        {tab === "ERP & Architecture" && (
          <div>
            <h2 style={{ marginBottom: 16, color: "#1e3a5f" }}>🏗️ {t.erpTitle}</h2>
            <p style={{ color:"#64748b", marginBottom:20 }}>{t.erpDesc}</p>
            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              {[["🔷 SRM Layer (CORE)", "#1e40af", ["Supplier Profiles", "Risk & Compliance", "Performance Scorecards", "Contract Lifecycle", "Onboarding & Invitations"]], ["🔗 Middleware — API", "#6366f1", ["Vendor Master Sync", "PO & Invoice Data", "Spend Analytics Feed", "Compliance Push"]], ["🏦 ERP — Sage X3", "#059669", ["Purchase Orders", "Invoices & Payments", "Vendor Master", "Spend Ledger"]], ["📊 Data & Analytics", "#71717a", ["Snowflake", "Metabase", "Hex"]]].map(([title, color, items], i) => (
                <div key={i} style={{ border:`2px solid ${color}40`, borderRadius:10, padding:14, borderLeft:`6px solid ${color}`, background:"#fff" }}>
                  <div style={{ fontWeight:700, color, marginBottom:8, fontSize:13 }}>{title}</div>
                  <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                    {items.map(item => (
                      <span key={item} style={{ background:`${color}10`, border:`1px solid ${color}20`, borderRadius:6, padding:"4px 10px", fontSize:11, fontWeight:600 }}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background:"#1e3a5f", borderRadius:10, padding:16, color:"#fff", marginTop:16 }}>
              <div style={{ fontWeight:700, marginBottom:10 }}>💰 {t.businessCaseInfo}</div>
              {[["Annual Platform Cost", "~£37.5k"], ["Suppliers Covered", "531 across 5 brands"], ["Est. Time Saving", "12 hrs/wk · ~£40k/yr"], ["Compliance Risk", "Reduced by automation"], ["ROI Period", "9 months"]].map(([k, v]) => (
                <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"5px 0", borderBottom:"1px solid #ffffff15", fontSize:12 }}>
                  <span style={{ color:"#93c5fd" }}>{k}</span>
                  <span style={{ fontWeight:700 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* INVITE MODAL */}
      {inviteModal && (
        <div style={{ position:"fixed", top:0, left:0, right:0, bottom:0, background:"rgba(0,0,0,0.5)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:1000 }}>
          <div style={{ background:"#fff", borderRadius:12, padding:24, maxWidth:500, boxShadow:"0 10px 40px rgba(0,0,0,0.3)" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
              <h3 style={{ margin:0, color:"#1e3a5f" }}>📧 {t.sendInvite}</h3>
              <button onClick={() => setInviteModal(null)} style={{ background:"none", border:"none", fontSize:20, cursor:"pointer", color:"#94a3b8" }}>✕</button>
            </div>
            <p style={{ color:"#64748b", marginBottom:16, fontSize:13 }}>Send invite to <strong>{inviteModal.name}</strong></p>
            <div style={{ background:"#f8fafc", borderRadius:8, padding:12, marginBottom:16 }}>
              <div style={{ fontSize:11, color:"#64748b", marginBottom:8, fontWeight:600 }}>{t.sharePortal}:</div>
              <div style={{ display:"flex", gap:8 }}>
                <input type="text" readOnly value={generateInviteLink(inviteModal.id)} style={{ flex:1, padding:"8px 12px", border:"1px solid #d1d5db", borderRadius:6, fontSize:11, fontFamily:"monospace", background:"#fff" }} />
                <button onClick={() => copyToClipboard(generateInviteLink(inviteModal.id), inviteModal.id)} style={{ padding:"8px 16px", borderRadius:6, border:"1px solid #d1d5db", background:"#fff", cursor:"pointer", fontWeight:600, fontSize:12 }}>
                  {copiedId === inviteModal.id ? "✓ " + t.copied : "📋 " + t.copyLink}
                </button>
              </div>
            </div>
            <div style={{ display:"flex", gap:8 }}>
              <button onClick={() => setInviteModal(null)} style={{ flex:1, padding:"10px 16px", borderRadius:6, border:"1px solid #d1d5db", background:"#fff", cursor:"pointer", fontWeight:600, fontSize:13 }}>
                {t.cancel}
              </button>
              <button onClick={() => sendInvite(inviteModal.id)} style={{ flex:1, padding:"10px 16px", borderRadius:6, border:"none", background:"#3b82f6", color:"#fff", cursor:"pointer", fontWeight:600, fontSize:13 }}>
                🚀 {t.sendInvite}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* REGISTRATION MODAL */}
      {registrationModal && (
        <div style={{ position:"fixed", top:0, left:0, right:0, bottom:0, background:"rgba(0,0,0,0.5)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:1000, overflowY:"auto" }}>
          <div style={{ background:"#fff", borderRadius:12, padding:24, maxWidth:600, margin:"20px auto", boxShadow:"0 10px 40px rgba(0,0,0,0.3)" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
              <h3 style={{ margin:0, color:"#1e3a5f" }}>{t.registerNew}</h3>
              <button onClick={() => { setRegistrationModal(false); setFormStep(0); setFormData({}); }} style={{ background:"none", border:"none", fontSize:20, cursor:"pointer", color:"#94a3b8" }}>✕</button>
            </div>
            <div style={{ marginBottom:20 }}>
              <div style={{ fontSize:11, color:"#64748b", marginBottom:8 }}>Step {formStep + 1} of 5</div>
              <div style={{ display:"flex", gap:4 }}>
                {[0,1,2,3,4].map(i => (
                  <div key={i} style={{ flex:1, height:6, borderRadius:3, background: i <= formStep ? "#3b82f6" : "#e2e8f0", cursor: "pointer" }} onClick={() => setFormStep(i)} />
                ))}
              </div>
            </div>

            {formStep === 0 && (
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:20 }}>
                <div>
                  <label style={{ display:"block", fontSize:12, fontWeight:600, marginBottom:6, color:"#374151" }}>{t.companyName} <span style={{color:"#ef4444"}}>*</span></label>
                  <input type="text" value={formData.companyName || ""} onChange={e => updateForm("companyName", e.target.value)} style={{ width:"100%", padding:"8px 12px", border:"1px solid #d1d5db", borderRadius:6, fontSize:13 }} />
                </div>
                <div>
                  <label style={{ display:"block", fontSize:12, fontWeight:600, marginBottom:6, color:"#374151" }}>{t.regNumber} <span style={{color:"#ef4444"}}>*</span></label>
                  <input type="text" value={formData.regNumber || ""} onChange={e => updateForm("regNumber", e.target.value)} style={{ width:"100%", padding:"8px 12px", border:"1px solid #d1d5db", borderRadius:6, fontSize:13 }} />
                </div>
              </div>
            )}

            {formStep === 1 && (
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:20 }}>
                <div>
                  <label style={{ display:"block", fontSize:12, fontWeight:600, marginBottom:6, color:"#374151" }}>{t.contactName} <span style={{color:"#ef4444"}}>*</span></label>
                  <input type="text" value={formData.contactName || ""} onChange={e => updateForm("contactName", e.target.value)} style={{ width:"100%", padding:"8px 12px", border:"1px solid #d1d5db", borderRadius:6, fontSize:13 }} />
                </div>
                <div>
                  <label style={{ display:"block", fontSize:12, fontWeight:600, marginBottom:6, color:"#374151" }}>{t.contactEmail} <span style={{color:"#ef4444"}}>*</span></label>
                  <input type="email" value={formData.contactEmail || ""} onChange={e => updateForm("contactEmail", e.target.value)} style={{ width:"100%", padding:"8px 12px", border:"1px solid #d1d5db", borderRadius:6, fontSize:13 }} />
                </div>
              </div>
            )}

            {formStep === 2 && (
              <div style={{ marginBottom:20 }}>
                <label style={{ display:"block", fontSize:12, fontWeight:600, marginBottom:6, color:"#374151" }}>{t.category} <span style={{color:"#ef4444"}}>*</span></label>
                <select value={formData.category || ""} onChange={e => updateForm("category", e.target.value)} style={{ width:"100%", padding:"8px 12px", border:"1px solid #d1d5db", borderRadius:6, fontSize:13, background:"#fff" }}>
                  <option value="">Select category...</option>
                  <option value="pharmaceutical">{t.pharmaceutical}</option>
                  <option value="packaging">{t.packaging}</option>
                  <option value="it">{t.itServices}</option>
                  <option value="logistics">{t.logistics}</option>
                  <option value="components">{t.components}</option>
                </select>
              </div>
            )}

            {formStep === 3 && (
              <div style={{ marginBottom:20 }}>
                <label style={{ display:"block", fontSize:12, fontWeight:600, marginBottom:6, color:"#374151" }}>{t.pubLiability}</label>
                <input type="text" value={formData.pubLiability || ""} onChange={e => updateForm("pubLiability", e.target.value)} placeholder="£5,000,000" style={{ width:"100%", padding:"8px 12px", border:"1px solid #d1d5db", borderRadius:6, fontSize:13 }} />
              </div>
            )}

            {formStep === 4 && (
              <div style={{ marginBottom:20 }}>
                <label style={{ display:"block", fontSize:12, fontWeight:600, marginBottom:6, color:"#374151" }}>{t.payTerms}</label>
                <select value={formData.payTerms || ""} onChange={e => updateForm("payTerms", e.target.value)} style={{ width:"100%", padding:"8px 12px", border:"1px solid #d1d5db", borderRadius:6, fontSize:13, background:"#fff" }}>
                  <option value="">Select terms...</option>
                  <option value="30">Net 30</option>
                  <option value="45">Net 45</option>
                  <option value="60">Net 60</option>
                </select>
              </div>
            )}

            <div style={{ display:"flex", gap:8 }}>
              <button onClick={() => setFormStep(Math.max(0, formStep - 1))} disabled={formStep === 0} style={{ flex:1, padding:"10px 16px", borderRadius:6, border:"1px solid #d1d5db", background:"#fff", cursor: formStep === 0 ? "not-allowed" : "pointer", fontWeight:600, fontSize:13, opacity: formStep === 0 ? 0.5 : 1 }}>
                {t.previous}
              </button>
              {formStep < 4 ? (
                <button onClick={() => setFormStep(formStep + 1)} style={{ flex:1, padding:"10px 16px", borderRadius:6, border:"none", background:"#3b82f6", color:"#fff", cursor:"pointer", fontWeight:600, fontSize:13 }}>
                  {t.next}
                </button>
              ) : (
                <button onClick={handleFormSubmit} style={{ flex:1, padding:"10px 16px", borderRadius:6, border:"none", background:"#22c55e", color:"#fff", cursor:"pointer", fontWeight:600, fontSize:13 }}>
                  ✅ {t.submit}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <div style={{ textAlign:"center", padding:"20px 0", fontSize:11, color:"#94a3b8" }}>{t.builtBy}</div>
    </div>
  );
}
