import { useState } from "react";

const suppliers = [
  { id: 1, name: "ABC Packaging Limited", country: "Germany", segment: "Strategic", risk: "Low Risk", auditStatus: "Approved", creditScore: "AAA", creditNum: 87, performance: 68, sustainability: 71, contracts: 3, spend: 124000, lastAudit: "2025-01-10", compliance: true },
  { id: 2, name: "Astrid Speed Control BV", country: "Netherlands", segment: "Leverage", risk: "Medium Risk", auditStatus: "Pending", creditScore: "BBB", creditNum: 62, performance: 54, sustainability: 60, contracts: 1, spend: 45000, lastAudit: "2024-11-05", compliance: true },
  { id: 3, name: "Apollo International", country: "New Zealand", segment: "Tactical", risk: "High Risk", auditStatus: "Failed", creditScore: "CCC", creditNum: 34, performance: 41, sustainability: 38, contracts: 2, spend: 18000, lastAudit: "2024-09-20", compliance: false },
  { id: 4, name: "Buyse Supplies", country: "Belgium", segment: "Strategic", risk: "Low Risk", auditStatus: "Approved", creditScore: "AA", creditNum: 80, performance: 76, sustainability: 82, contracts: 5, spend: 210000, lastAudit: "2025-02-01", compliance: true },
  { id: 5, name: "Carpe Diem LLC", country: "USA", segment: "Leverage", risk: "Low Risk", auditStatus: "Approved", creditScore: "A", creditNum: 74, performance: 70, sustainability: 65, contracts: 2, spend: 67000, lastAudit: "2024-12-15", compliance: true },
  { id: 6, name: "Beijing Bolts & Bits", country: "China", segment: "Tactical", risk: "High Risk", auditStatus: "Pending", creditScore: "B", creditNum: 48, performance: 45, sustainability: 30, contracts: 1, spend: 22000, lastAudit: "2024-08-10", compliance: false },
];

const scoreColor = (v) => v >= 75 ? "#22c55e" : v >= 50 ? "#f59e0b" : "#ef4444";
const creditColor = (s) => ["AAA","AA","A"].includes(s) ? "#22c55e" : ["BBB","BB"].includes(s) ? "#f59e0b" : "#ef4444";
const riskColor = (r) => r === "Low Risk" ? "#22c55e" : r === "Medium Risk" ? "#f59e0b" : "#ef4444";
const auditColor = (a) => a === "Approved" ? "#22c55e" : a === "Pending" ? "#f59e0b" : "#ef4444";

const Arc = ({ value, color, size = 80 }) => {
  const r = size / 2 - 8;
  const circ = Math.PI * r;
  const offset = circ - (value / 100) * circ;
  const cx = size / 2, cy = size / 2;
  return (
    <svg width={size} height={size / 2 + 10} viewBox={`0 0 ${size} ${size / 2 + 10}`}>
      <path d={`M 8 ${cy} A ${r} ${r} 0 0 1 ${size - 8} ${cy}`} fill="none" stroke="#e5e7eb" strokeWidth="8" strokeLinecap="round" />
      <path d={`M 8 ${cy} A ${r} ${r} 0 0 1 ${size - 8} ${cy}`} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round"
        strokeDasharray={circ} strokeDashoffset={offset} />
      <text x={cx} y={cy + 2} textAnchor="middle" fontSize="13" fontWeight="bold" fill={color}>{value}</text>
    </svg>
  );
};

const Badge = ({ label, color }) => (
  <span style={{ background: color + "20", color, border: `1px solid ${color}40`, borderRadius: 12, padding: "2px 10px", fontSize: 11, fontWeight: 600 }}>{label}</span>
);

const tabs = ["Dashboard", "Suppliers", "Onboarding", "Performance", "Contracts", "Compliance", "Templates", "Intelligence", "Flywheel", "ERP & Architecture"];

export default function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [selected, setSelected] = useState(null);
  const [segFilter, setSegFilter] = useState("All");
  const [riskFilter, setRiskFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [onboarding, setOnboarding] = useState({ name: "", email: "", country: "", category: "", spend: "" });
  const [submitted, setSubmitted] = useState(false);

  const filtered = suppliers.filter(s =>
    (segFilter === "All" || s.segment === segFilter) &&
    (riskFilter === "All" || s.risk === riskFilter) &&
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalSpend = suppliers.reduce((a, s) => a + s.spend, 0);
  const avgPerf = Math.round(suppliers.reduce((a, s) => a + s.performance, 0) / suppliers.length);
  const avgSust = Math.round(suppliers.reduce((a, s) => a + s.sustainability, 0) / suppliers.length);
  const nonCompliant = suppliers.filter(s => !s.compliance).length;

  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#f1f5f9", minHeight: "100vh", fontSize: 13 }}>
      {/* Header */}
      <div style={{ background: "#1e3a5f", color: "#fff", padding: "12px 24px", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 32, height: 32, background: "#3b82f6", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 16 }}>H</div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 15 }}>HeliosX SRM Platform</div>
          <div style={{ fontSize: 11, opacity: 0.7 }}>Supplier Relationship Management</div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <span style={{ background: "#ef444420", color: "#ef4444", border: "1px solid #ef444440", borderRadius: 12, padding: "3px 10px", fontSize: 11, fontWeight: 600 }}>
            ⚠ {nonCompliant} Non-Compliant
          </span>
        </div>
      </div>

      {/* Nav */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", display: "flex", padding: "0 24px", gap: 2 }}>
        {tabs.map(t => (
          <button key={t} onClick={() => { setActiveTab(t); setSelected(null); }}
            style={{ padding: "12px 16px", border: "none", background: "none", cursor: "pointer", fontWeight: activeTab === t ? 700 : 400,
              color: activeTab === t ? "#1e3a5f" : "#64748b", borderBottom: activeTab === t ? "3px solid #3b82f6" : "3px solid transparent", fontSize: 13 }}>
            {t}
          </button>
        ))}
      </div>

      <div style={{ padding: 20, maxWidth: 1200, margin: "0 auto" }}>

        {/* DASHBOARD */}
        {activeTab === "Dashboard" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 16 }}>
              {[
                { label: "Total Suppliers", value: suppliers.length, sub: "Active", color: "#3b82f6" },
                { label: "Total Spend", value: "£" + (totalSpend / 1000).toFixed(0) + "k", sub: "Annual", color: "#8b5cf6" },
                { label: "Avg Performance", value: avgPerf + "%", sub: "Across all suppliers", color: "#22c55e" },
                { label: "Non-Compliant", value: nonCompliant, sub: "Require action", color: "#ef4444" },
              ].map(c => (
                <div key={c.label} style={{ background: "#fff", borderRadius: 10, padding: 16, borderLeft: `4px solid ${c.color}` }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: c.color }}>{c.value}</div>
                  <div style={{ fontWeight: 600, color: "#1e293b" }}>{c.label}</div>
                  <div style={{ fontSize: 11, color: "#94a3b8" }}>{c.sub}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 12 }}>
              <div style={{ background: "#fff", borderRadius: 10, padding: 16 }}>
                <div style={{ fontWeight: 700, marginBottom: 12, color: "#1e3a5f" }}>Supplier Overview</div>
                {suppliers.map(s => (
                  <div key={s.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "1px solid #f1f5f9", cursor: "pointer" }}
                    onClick={() => { setSelected(s); setActiveTab("Suppliers"); }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#1e3a5f20", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#1e3a5f" }}>{s.name[0]}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600 }}>{s.name}</div>
                      <div style={{ fontSize: 11, color: "#94a3b8" }}>{s.country} · {s.segment}</div>
                    </div>
                    <div style={{ display: "flex", gap: 6 }}>
                      <Badge label={s.auditStatus} color={auditColor(s.auditStatus)} />
                      <Badge label={s.risk} color={riskColor(s.risk)} />
                      <span style={{ fontWeight: 700, color: creditColor(s.creditScore) }}>{s.creditScore}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ background: "#fff", borderRadius: 10, padding: 16 }}>
                  <div style={{ fontWeight: 700, marginBottom: 10, color: "#1e3a5f" }}>Segment Breakdown</div>
                  {["Strategic", "Leverage", "Tactical"].map(seg => {
                    const count = suppliers.filter(s => s.segment === seg).length;
                    const pct = Math.round(count / suppliers.length * 100);
                    const c = seg === "Strategic" ? "#3b82f6" : seg === "Leverage" ? "#8b5cf6" : "#f59e0b";
                    return (
                      <div key={seg} style={{ marginBottom: 8 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                          <span style={{ color: "#64748b" }}>{seg}</span>
                          <span style={{ fontWeight: 600 }}>{count}</span>
                        </div>
                        <div style={{ background: "#f1f5f9", borderRadius: 4, height: 6 }}>
                          <div style={{ width: pct + "%", background: c, borderRadius: 4, height: 6 }} />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div style={{ background: "#fff", borderRadius: 10, padding: 16 }}>
                  <div style={{ fontWeight: 700, marginBottom: 10, color: "#1e3a5f" }}>⚠ Actions Required</div>
                  {suppliers.filter(s => !s.compliance || s.auditStatus === "Pending" || s.auditStatus === "Failed").map(s => (
                    <div key={s.id} style={{ padding: "6px 0", borderBottom: "1px solid #f1f5f9", fontSize: 12 }}>
                      <div style={{ fontWeight: 600 }}>{s.name}</div>
                      <div style={{ color: "#ef4444" }}>{s.auditStatus === "Failed" ? "Audit failed - review required" : !s.compliance ? "Compliance gap identified" : "Audit pending approval"}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUPPLIERS */}
        {activeTab === "Suppliers" && !selected && (
          <div>
            <div style={{ display: "flex", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search suppliers..." style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #e2e8f0", flex: 1, minWidth: 180, fontSize: 13 }} />
              <select value={segFilter} onChange={e => setSegFilter(e.target.value)} style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 13 }}>
                <option>All</option><option>Strategic</option><option>Leverage</option><option>Tactical</option>
              </select>
              <select value={riskFilter} onChange={e => setRiskFilter(e.target.value)} style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 13 }}>
                <option>All</option><option>Low Risk</option><option>Medium Risk</option><option>High Risk</option>
              </select>
            </div>
            <div style={{ background: "#fff", borderRadius: 10, overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#1e3a5f", color: "#fff" }}>
                    {["Supplier", "Country", "Segment", "Risk", "Audit", "Credit", "Performance", "Spend"].map(h => (
                      <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontWeight: 600, fontSize: 12 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((s, i) => (
                    <tr key={s.id} onClick={() => setSelected(s)} style={{ background: i % 2 ? "#f8fafc" : "#fff", cursor: "pointer" }}
                      onMouseEnter={e => e.currentTarget.style.background = "#eff6ff"}
                      onMouseLeave={e => e.currentTarget.style.background = i % 2 ? "#f8fafc" : "#fff"}>
                      <td style={{ padding: "10px 12px", fontWeight: 600 }}>{s.name}</td>
                      <td style={{ padding: "10px 12px", color: "#64748b" }}>{s.country}</td>
                      <td style={{ padding: "10px 12px" }}><Badge label={s.segment} color="#3b82f6" /></td>
                      <td style={{ padding: "10px 12px" }}><Badge label={s.risk} color={riskColor(s.risk)} /></td>
                      <td style={{ padding: "10px 12px" }}><Badge label={s.auditStatus} color={auditColor(s.auditStatus)} /></td>
                      <td style={{ padding: "10px 12px", fontWeight: 700, color: creditColor(s.creditScore) }}>{s.creditScore}</td>
                      <td style={{ padding: "10px 12px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <div style={{ flex: 1, background: "#f1f5f9", borderRadius: 4, height: 6 }}>
                            <div style={{ width: s.performance + "%", background: scoreColor(s.performance), borderRadius: 4, height: 6 }} />
                          </div>
                          <span style={{ fontWeight: 600, color: scoreColor(s.performance) }}>{s.performance}%</span>
                        </div>
                      </td>
                      <td style={{ padding: "10px 12px", fontWeight: 600 }}>£{s.spend.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* SUPPLIER DETAIL */}
        {activeTab === "Suppliers" && selected && (
          <div>
            <button onClick={() => setSelected(null)} style={{ background: "none", border: "1px solid #e2e8f0", borderRadius: 8, padding: "6px 14px", cursor: "pointer", marginBottom: 14, color: "#1e3a5f", fontWeight: 600, fontSize: 13 }}>← Back</button>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ background: "#fff", borderRadius: 10, padding: 20 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#1e3a5f", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 20 }}>{selected.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 16 }}>{selected.name}</div>
                    <div style={{ color: "#64748b" }}>{selected.country}</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
                  <Badge label={selected.segment} color="#3b82f6" />
                  <Badge label={selected.risk} color={riskColor(selected.risk)} />
                  <Badge label={selected.auditStatus} color={auditColor(selected.auditStatus)} />
                  <Badge label={selected.compliance ? "Compliant" : "Non-Compliant"} color={selected.compliance ? "#22c55e" : "#ef4444"} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {[["Annual Spend", "£" + selected.spend.toLocaleString()], ["Active Contracts", selected.contracts], ["Last Audit", selected.lastAudit]].map(([k, v]) => (
                    <div key={k} style={{ background: "#f8fafc", borderRadius: 8, padding: 10 }}>
                      <div style={{ fontSize: 11, color: "#94a3b8" }}>{k}</div>
                      <div style={{ fontWeight: 700, color: "#1e293b" }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: "#fff", borderRadius: 10, padding: 20 }}>
                <div style={{ fontWeight: 700, marginBottom: 12, color: "#1e3a5f" }}>Performance Scorecard</div>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                  {[["Performance", selected.performance], ["Sustainability", selected.sustainability], ["Compliance", selected.compliance ? 90 : 35]].map(([label, val]) => (
                    <div key={label} style={{ textAlign: "center" }}>
                      <Arc value={val} color={scoreColor(val)} size={90} />
                      <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>{label}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 16, padding: 12, background: "#f8fafc", borderRadius: 8 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 600 }}>Credit Score (fin(SIGHT))</span>
                    <span style={{ fontSize: 24, fontWeight: 800, color: creditColor(selected.creditScore) }}>{selected.creditScore}</span>
                  </div>
                  <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 4 }}>Probability of default · Credit limit · Profitability · Solvency · Liquidity</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ONBOARDING */}
        {activeTab === "Onboarding" && (() => {
          const [obMode, setObMode] = useState("menu");
          const [insightStep, setInsightStep] = useState(1);
          const [signupLink] = useState("https://heliosx-srm.com/supplier-signup/hx2024");
          const [copied, setCopied] = useState(false);
          const campaigns = [
            { name: "Supplier Onboarding 2026", issued: 12, submitted: 5, pending: 4, notStarted: 3 },
            { name: "Annual Compliance Review", issued: 8, submitted: 6, pending: 1, notStarted: 1 },
          ];
          const pendingSuppliers = [
            { name: "New Supplier Co", sent: "2026-02-20", opened: true, progress: 42 },
            { name: "MedSupply GmbH", sent: "2026-02-18", opened: false, progress: 14 },
            { name: "PharmaLink Ltd", sent: "2026-02-15", opened: true, progress: 79 },
          ];

          if (obMode === "menu") return (
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4, color: "#1e3a5f" }}>Supplier Onboarding</div>
              <div style={{ color: "#64748b", fontSize: 12, marginBottom: 20 }}>Choose an onboarding method below</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ background: "#fff", borderRadius: 12, padding: 24, border: "2px solid #e2e8f0", cursor: "pointer" }} onClick={() => setObMode("signup")}>
                  <div style={{ fontSize: 32, marginBottom: 10 }}>🔗</div>
                  <div style={{ fontWeight: 800, fontSize: 15, color: "#1e3a5f", marginBottom: 6 }}>Option 1 — Self-Registration (Sign Up)</div>
                  <div style={{ color: "#64748b", fontSize: 12, lineHeight: 1.6 }}>
                    Generate a unique sign-up link that can be embedded on your website or sent via email. Suppliers fill in their own data and documentation. Submissions land as <strong>Pending Approval</strong> in the platform for review.
                  </div>
                  <div style={{ marginTop: 14, background: "#eff6ff", borderRadius: 8, padding: "8px 12px", fontSize: 12, color: "#3b82f6", fontWeight: 600 }}>
                    ✓ Unsolicited · ✓ No login required · ✓ Auto-notification on submission
                  </div>
                  <button style={{ marginTop: 14, background: "#1e3a5f", color: "#fff", border: "none", borderRadius: 8, padding: "9px 18px", cursor: "pointer", fontWeight: 600, fontSize: 13, width: "100%" }}>
                    Generate Sign-Up Link →
                  </button>
                </div>
                <div style={{ background: "#fff", borderRadius: 12, padding: 24, border: "2px solid #e2e8f0", cursor: "pointer" }} onClick={() => { setObMode("insight"); setInsightStep(1); }}>
                  <div style={{ fontSize: 32, marginBottom: 10 }}>📋</div>
                  <div style={{ fontWeight: 800, fontSize: 15, color: "#1e3a5f", marginBottom: 6 }}>Option 2 — User-Triggered Assessment (Insight)</div>
                  <div style={{ color: "#64748b", fontSize: 12, lineHeight: 1.6 }}>
                    Add a supplier manually and issue them a structured onboarding or self-assessment campaign. Track email opens, responses, and data submissions in real time via drip campaign scheduling.
                  </div>
                  <div style={{ marginTop: 14, background: "#f0fdf4", borderRadius: 8, padding: "8px 12px", fontSize: 12, color: "#16a34a", fontWeight: 600 }}>
                    ✓ Controlled · ✓ Template-driven · ✓ ERP integration-ready
                  </div>
                  <button style={{ marginTop: 14, background: "#1e3a5f", color: "#fff", border: "none", borderRadius: 8, padding: "9px 18px", cursor: "pointer", fontWeight: 600, fontSize: 13, width: "100%" }}>
                    Add Supplier & Issue Campaign →
                  </button>
                </div>
              </div>

              <div style={{ marginTop: 20, background: "#fff", borderRadius: 10, padding: 16 }}>
                <div style={{ fontWeight: 700, marginBottom: 12, color: "#1e3a5f" }}>Active Onboarding Campaigns</div>
                {campaigns.map(c => (
                  <div key={c.name} style={{ marginBottom: 14, padding: "10px 14px", background: "#f8fafc", borderRadius: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ fontWeight: 700 }}>{c.name}</span>
                      <span style={{ fontSize: 11, color: "#94a3b8" }}>{c.issued} suppliers issued</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, textAlign: "center" }}>
                      {[["Submitted", c.submitted, "#22c55e"], ["Pending", c.pending, "#f59e0b"], ["Not Started", c.notStarted, "#ef4444"]].map(([l, v, col]) => (
                        <div key={l} style={{ background: col + "15", borderRadius: 6, padding: "6px 0" }}>
                          <div style={{ fontWeight: 800, color: col, fontSize: 16 }}>{v}</div>
                          <div style={{ fontSize: 10, color: "#64748b" }}>{l}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 10 }}>
                      {pendingSuppliers.map(s => (
                        <div key={s.name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "5px 0", borderTop: "1px solid #f1f5f9" }}>
                          <div style={{ flex: 1 }}>
                            <span style={{ fontWeight: 600, fontSize: 12 }}>{s.name}</span>
                            <span style={{ fontSize: 11, color: "#94a3b8", marginLeft: 8 }}>Sent {s.sent}</span>
                            <span style={{ fontSize: 11, marginLeft: 8, color: s.opened ? "#22c55e" : "#94a3b8" }}>{s.opened ? "✓ Opened" : "Not opened"}</span>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: 6, width: 120 }}>
                            <div style={{ flex: 1, background: "#e2e8f0", borderRadius: 4, height: 5 }}>
                              <div style={{ width: s.progress + "%", background: scoreColor(s.progress), borderRadius: 4, height: 5 }} />
                            </div>
                            <span style={{ fontSize: 11, fontWeight: 600, color: scoreColor(s.progress) }}>{s.progress}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );

          if (obMode === "signup") return (
            <div>
              <button onClick={() => setObMode("menu")} style={{ background: "none", border: "1px solid #e2e8f0", borderRadius: 8, padding: "6px 14px", cursor: "pointer", marginBottom: 14, color: "#1e3a5f", fontWeight: 600, fontSize: 13 }}>← Back</button>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ background: "#fff", borderRadius: 10, padding: 20 }}>
                  <div style={{ fontWeight: 800, fontSize: 15, color: "#1e3a5f", marginBottom: 4 }}>🔗 Self-Registration Sign-Up Form</div>
                  <div style={{ color: "#64748b", fontSize: 12, marginBottom: 16 }}>Configure what suppliers must complete when they self-register. Share the link on your website or via email.</div>

                  <div style={{ marginBottom: 14 }}>
                    <div style={{ fontWeight: 600, fontSize: 12, marginBottom: 6, color: "#374151" }}>Required Data Fields</div>
                    {["Company Name", "Contact Email", "Country / Location", "Supplier Category", "Company Registration Number"].map(f => (
                      <label key={f} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, marginBottom: 5, cursor: "pointer" }}>
                        <input type="checkbox" defaultChecked /> {f}
                      </label>
                    ))}
                  </div>
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ fontWeight: 600, fontSize: 12, marginBottom: 6, color: "#374151" }}>Required Documents</div>
                    {["Insurance Certificate", "Health & Safety Policy", "ISO Certification", "Bank Details"].map(f => (
                      <label key={f} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, marginBottom: 5, cursor: "pointer" }}>
                        <input type="checkbox" defaultChecked /> {f}
                      </label>
                    ))}
                  </div>
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ fontWeight: 600, fontSize: 12, marginBottom: 6, color: "#374151" }}>On Submission — set status as</div>
                    <select style={{ width: "100%", padding: "8px 10px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 13 }}>
                      <option>Pending Approval</option><option>Unapproved</option><option>Auto-Approve</option>
                    </select>
                  </div>
                  <div style={{ background: "#f8fafc", borderRadius: 8, padding: 12, marginBottom: 14 }}>
                    <div style={{ fontWeight: 600, fontSize: 12, marginBottom: 6, color: "#374151" }}>Your Sign-Up Link</div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <input readOnly value={signupLink} style={{ flex: 1, padding: "7px 10px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 11, background: "#fff", color: "#64748b" }} />
                      <button onClick={() => { navigator.clipboard?.writeText(signupLink); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
                        style={{ background: copied ? "#22c55e" : "#1e3a5f", color: "#fff", border: "none", borderRadius: 8, padding: "7px 14px", cursor: "pointer", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap" }}>
                        {copied ? "✓ Copied!" : "Copy Link"}
                      </button>
                    </div>
                  </div>
                  <button style={{ width: "100%", background: "#1e3a5f", color: "#fff", border: "none", borderRadius: 8, padding: 10, cursor: "pointer", fontWeight: 600, fontSize: 13 }}>
                    Save & Publish Form
                  </button>
                </div>
                <div style={{ background: "#fff", borderRadius: 10, padding: 20 }}>
                  <div style={{ fontWeight: 700, marginBottom: 12, color: "#1e3a5f" }}>📥 Pending Approval Submissions</div>
                  {[{ name: "OmegaPharma Ltd", country: "Ireland", submitted: "2026-02-25", docs: 3 }, { name: "NordicMed AB", country: "Sweden", submitted: "2026-02-24", docs: 2 }, { name: "PackSmart GmbH", country: "Germany", submitted: "2026-02-22", docs: 4 }].map(s => (
                    <div key={s.name} style={{ padding: "10px 0", borderBottom: "1px solid #f1f5f9" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                        <span style={{ fontWeight: 700 }}>{s.name}</span>
                        <Badge label="Pending Approval" color="#f59e0b" />
                      </div>
                      <div style={{ fontSize: 11, color: "#94a3b8", marginBottom: 6 }}>{s.country} · Submitted {s.submitted} · {s.docs} documents uploaded</div>
                      <div style={{ display: "flex", gap: 6 }}>
                        <button style={{ background: "#22c55e", color: "#fff", border: "none", borderRadius: 6, padding: "4px 12px", cursor: "pointer", fontSize: 11, fontWeight: 600 }}>Approve</button>
                        <button style={{ background: "#ef444420", color: "#ef4444", border: "1px solid #ef444440", borderRadius: 6, padding: "4px 12px", cursor: "pointer", fontSize: 11, fontWeight: 600 }}>Reject</button>
                        <button style={{ background: "#f1f5f9", color: "#64748b", border: "none", borderRadius: 6, padding: "4px 12px", cursor: "pointer", fontSize: 11 }}>Review</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );

          if (obMode === "insight") return (
            <div>
              <button onClick={() => obMode === "confirm" ? setObMode("insight") : setObMode("menu")} style={{ background: "none", border: "1px solid #e2e8f0", borderRadius: 8, padding: "6px 14px", cursor: "pointer", marginBottom: 14, color: "#1e3a5f", fontWeight: 600, fontSize: 13 }}>← Back</button>
              <div style={{ background: "#fff", borderRadius: 10, padding: 20 }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: "#1e3a5f", marginBottom: 4 }}>📋 User-Triggered Onboarding (Insight Module)</div>
                <div style={{ color: "#64748b", fontSize: 12, marginBottom: 18 }}>Add a supplier and issue them a structured onboarding campaign with scheduling and tracking.</div>

                <div style={{ display: "flex", gap: 0, marginBottom: 24 }}>
                  {["Add Supplier", "Choose Campaign", "Schedule & Send"].map((s, i) => (
                    <div key={s} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
                        <div style={{ width: 26, height: 26, borderRadius: "50%", background: insightStep > i + 1 ? "#22c55e" : insightStep === i + 1 ? "#1e3a5f" : "#e2e8f0", color: insightStep >= i + 1 ? "#fff" : "#94a3b8", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12, flexShrink: 0 }}>{insightStep > i + 1 ? "✓" : i + 1}</div>
                        <span style={{ fontSize: 12, fontWeight: insightStep === i + 1 ? 700 : 400, color: insightStep === i + 1 ? "#1e3a5f" : "#94a3b8" }}>{s}</span>
                      </div>
                      {i < 2 && <div style={{ flex: 1, height: 2, background: insightStep > i + 1 ? "#22c55e" : "#e2e8f0", margin: "0 8px" }} />}
                    </div>
                  ))}
                </div>

                {insightStep === 1 && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {[["Contact Email *", "email", "email"], ["Supplier Name *", "name", "text"], ["Country *", "country", "text"], ["Supplier ID", "spend", "text"]].map(([label, key, type]) => (
                      <div key={key}>
                        <label style={{ display: "block", fontWeight: 600, fontSize: 12, marginBottom: 4, color: "#374151" }}>{label}</label>
                        <input type={type} placeholder={label.replace(" *", "")} value={onboarding[key]} onChange={e => setOnboarding(p => ({ ...p, [key]: e.target.value }))}
                          style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 13, boxSizing: "border-box" }} />
                      </div>
                    ))}
                    <div style={{ gridColumn: "span 2", background: "#fffbeb", borderRadius: 8, padding: 10, fontSize: 12, color: "#92400e" }}>
                      ℹ Supplier will be added as <strong>Unapproved</strong> until onboarding is complete and reviewed.
                    </div>
                    <button onClick={() => setInsightStep(2)} style={{ gridColumn: "span 2", background: "#1e3a5f", color: "#fff", border: "none", borderRadius: 8, padding: 10, cursor: "pointer", fontWeight: 600, fontSize: 13 }}>
                      Save & Continue →
                    </button>
                  </div>
                )}

                {insightStep === 2 && (
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 10, color: "#374151" }}>Select or create a campaign to enrol this supplier in:</div>
                    {[{ name: "Supplier Onboarding 2026", areas: "Quality, H&S, Environmental, GDPR", type: "Onboarding" }, { name: "Annual Compliance Review", areas: "Compliance, Governance, Human Rights", type: "Self-Assessment" }].map(c => (
                      <div key={c.name} onClick={() => setInsightStep(3)} style={{ padding: 14, border: "2px solid #e2e8f0", borderRadius: 10, marginBottom: 10, cursor: "pointer" }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = "#3b82f6"}
                        onMouseLeave={e => e.currentTarget.style.borderColor = "#e2e8f0"}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ fontWeight: 700 }}>{c.name}</span>
                          <Badge label={c.type} color="#3b82f6" />
                        </div>
                        <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 4 }}>Areas: {c.areas}</div>
                      </div>
                    ))}
                    <button onClick={() => setInsightStep(3)} style={{ width: "100%", background: "#f8fafc", color: "#1e3a5f", border: "2px dashed #e2e8f0", borderRadius: 10, padding: 12, cursor: "pointer", fontWeight: 600, fontSize: 13 }}>
                      + Create New Campaign
                    </button>
                  </div>
                )}

                {insightStep === 3 && (
                  submitted ? (
                    <div style={{ textAlign: "center", padding: 30 }}>
                      <div style={{ fontSize: 40 }}>✅</div>
                      <div style={{ fontWeight: 800, color: "#16a34a", fontSize: 16, marginTop: 10 }}>Campaign Issued!</div>
                      <div style={{ color: "#64748b", fontSize: 12, marginTop: 6 }}>{onboarding.name || "The supplier"} will receive their onboarding activity via email as scheduled.</div>
                      <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 16 }}>
                        <button onClick={() => { setSubmitted(false); setInsightStep(1); setOnboarding({ name: "", email: "", country: "", category: "", spend: "" }); }}
                          style={{ background: "#1e3a5f", color: "#fff", border: "none", borderRadius: 8, padding: "9px 18px", cursor: "pointer", fontSize: 13, fontWeight: 600 }}>New Onboarding</button>
                        <button onClick={() => setObMode("menu")} style={{ background: "#f1f5f9", color: "#1e3a5f", border: "none", borderRadius: 8, padding: "9px 18px", cursor: "pointer", fontSize: 13 }}>View Campaigns</button>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      <div>
                        <label style={{ display: "block", fontWeight: 600, fontSize: 12, marginBottom: 4, color: "#374151" }}>Send Date</label>
                        <input type="date" defaultValue="2026-03-05" style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 13, boxSizing: "border-box" }} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontWeight: 600, fontSize: 12, marginBottom: 4, color: "#374151" }}>Send Time</label>
                        <input type="time" defaultValue="09:00" style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 13, boxSizing: "border-box" }} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontWeight: 600, fontSize: 12, marginBottom: 4, color: "#374151" }}>Reminder Frequency</label>
                        <select style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 13 }}>
                          <option>Every 3 days</option><option>Weekly</option><option>No reminders</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ display: "block", fontWeight: 600, fontSize: 12, marginBottom: 4, color: "#374151" }}>Deadline</label>
                        <input type="date" defaultValue="2026-03-19" style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 13, boxSizing: "border-box" }} />
                      </div>
                      <div style={{ gridColumn: "span 2", background: "#f0fdf4", borderRadius: 8, padding: 10, fontSize: 12, color: "#166534" }}>
                        ✓ Supplier will receive a drip email campaign. You can track: email delivered, opened, assessment started, and submitted — in real time.
                      </div>
                      <button onClick={() => setSubmitted(true)} style={{ gridColumn: "span 2", background: "#1e3a5f", color: "#fff", border: "none", borderRadius: 8, padding: 10, cursor: "pointer", fontWeight: 700, fontSize: 13 }}>
                        🚀 Issue Onboarding Campaign
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
          );
        })()}

        {/* PERFORMANCE */}
        {activeTab === "Performance" && (() => {
          const [perfView, setPerfView] = useState("scorecard");
          const [selSupplier, setSelSupplier] = useState(suppliers[0]);
          const [actionOpen, setActionOpen] = useState(null);

          const kpiAreas = [
            { label: "Quality", icon: "🏆", key: "quality" },
            { label: "Delivery", icon: "🚚", key: "delivery" },
            { label: "Commercial", icon: "💰", key: "commercial" },
            { label: "Innovation", icon: "💡", key: "innovation" },
            { label: "Sustainability", icon: "🌱", key: "sustainability" },
            { label: "Compliance", icon: "✅", key: "compliance" },
          ];

          const kpiData = {
            1: { quality: 88, delivery: 82, commercial: 91, innovation: 72, sustainability: 71, compliance: 94 },
            2: { quality: 60, delivery: 55, commercial: 58, innovation: 40, sustainability: 60, compliance: 70 },
            3: { quality: 35, delivery: 40, commercial: 38, innovation: 30, sustainability: 38, compliance: 28 },
            4: { quality: 80, delivery: 78, commercial: 85, innovation: 68, sustainability: 82, compliance: 90 },
            5: { quality: 72, delivery: 74, commercial: 76, innovation: 60, sustainability: 65, compliance: 80 },
            6: { quality: 42, delivery: 48, commercial: 44, innovation: 35, sustainability: 30, compliance: 38 },
          };

          const stakeholderFeedback = [
            { name: "Jon Lodge", role: "Director", score: 78, comment: "Good delivery reliability, needs improvement on lead times." },
            { name: "Alastair Stewart", role: "Procurement", score: 85, comment: "Strong commercial terms, responsive account manager." },
            { name: "Sabina Marinescu", role: "Logistics", score: 71, comment: "Occasional packaging issues but good overall." },
          ];

          const actions = [
            { id: 1, title: "Improvement Proposal — Lead Times", type: "Improvement Proposal", status: "In Progress", supplier: "ABC Packaging Limited", due: "2026-03-15", subactions: ["Review current SLA", "Agree new KPIs"] },
            { id: 2, title: "Quality Audit Follow-Up", type: "Corrective Action", status: "Open", supplier: "Apollo International", due: "2026-03-01", subactions: ["Send audit report", "Supplier response due"] },
            { id: 3, title: "Q1 Collaborative Review", type: "Development Project", status: "Completed", supplier: "Buyse Supplies", due: "2026-02-28", subactions: [] },
          ];

          return (
            <div>
              <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                {[["scorecard","📊 Scorecard & KPIs"], ["benchmark","🔵 Benchmark Analysis"], ["actions","⚡ Actions & Collaboration"]].map(([v, l]) => (
                  <button key={v} onClick={() => setPerfView(v)}
                    style={{ padding: "8px 16px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: perfView === v ? 700 : 400,
                      background: perfView === v ? "#1e3a5f" : "#fff", color: perfView === v ? "#fff" : "#64748b", fontSize: 13 }}>
                    {l}
                  </button>
                ))}
              </div>

              {perfView === "scorecard" && (
                <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 14 }}>
                  <div style={{ background: "#fff", borderRadius: 10, padding: 12 }}>
                    <div style={{ fontWeight: 700, fontSize: 12, color: "#94a3b8", marginBottom: 8, textTransform: "uppercase" }}>Select Supplier</div>
                    {suppliers.map(s => (
                      <div key={s.id} onClick={() => setSelSupplier(s)}
                        style={{ padding: "8px 10px", borderRadius: 8, cursor: "pointer", marginBottom: 4,
                          background: selSupplier.id === s.id ? "#eff6ff" : "transparent",
                          borderLeft: selSupplier.id === s.id ? "3px solid #3b82f6" : "3px solid transparent" }}>
                        <div style={{ fontWeight: 600, fontSize: 12 }}>{s.name}</div>
                        <div style={{ fontSize: 11, color: "#94a3b8" }}>{s.country}</div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div style={{ background: "#fff", borderRadius: 10, padding: 16, marginBottom: 12 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                        <div>
                          <div style={{ fontWeight: 800, fontSize: 15, color: "#1e3a5f" }}>{selSupplier.name}</div>
                          <div style={{ fontSize: 12, color: "#64748b" }}>{selSupplier.country} · {selSupplier.segment}</div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <div style={{ fontSize: 28, fontWeight: 900, color: scoreColor(selSupplier.performance) }}>{selSupplier.performance}%</div>
                          <div style={{ fontSize: 11, color: "#94a3b8" }}>Overall Rating</div>
                        </div>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
                        {kpiAreas.map(kpi => {
                          const val = kpiData[selSupplier.id][kpi.key];
                          return (
                            <div key={kpi.key} style={{ background: "#f8fafc", borderRadius: 8, padding: 12 }}>
                              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                                <span style={{ fontSize: 12, fontWeight: 600 }}>{kpi.icon} {kpi.label}</span>
                                <span style={{ fontWeight: 800, color: scoreColor(val), fontSize: 13 }}>{val}%</span>
                              </div>
                              <div style={{ background: "#e2e8f0", borderRadius: 4, height: 6 }}>
                                <div style={{ width: val + "%", background: scoreColor(val), borderRadius: 4, height: 6, transition: "width 0.4s" }} />
                              </div>
                              <div style={{ fontSize: 10, color: "#94a3b8", marginTop: 4 }}>
                                {val >= 75 ? "Meeting target" : val >= 50 ? "Needs attention" : "⚠ Underperforming"}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div style={{ background: "#fff", borderRadius: 10, padding: 16 }}>
                      <div style={{ fontWeight: 700, marginBottom: 12, color: "#1e3a5f" }}>Stakeholder Evaluations</div>
                      {stakeholderFeedback.map(f => (
                        <div key={f.name} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: "1px solid #f1f5f9", alignItems: "flex-start" }}>
                          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#1e3a5f", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0 }}>{f.name[0]}</div>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                              <div>
                                <span style={{ fontWeight: 700, fontSize: 13 }}>{f.name}</span>
                                <span style={{ fontSize: 11, color: "#94a3b8", marginLeft: 6 }}>{f.role}</span>
                              </div>
                              <span style={{ fontWeight: 800, color: scoreColor(f.score), fontSize: 14 }}>{f.score}%</span>
                            </div>
                            <div style={{ fontSize: 12, color: "#64748b", marginTop: 3 }}>{f.comment}</div>
                          </div>
                        </div>
                      ))}
                      <div style={{ marginTop: 10, background: "#f8fafc", borderRadius: 8, padding: 10, display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontWeight: 700, fontSize: 13 }}>Aggregated Score</span>
                        <span style={{ fontWeight: 900, fontSize: 16, color: scoreColor(Math.round(stakeholderFeedback.reduce((a,f)=>a+f.score,0)/stakeholderFeedback.length)) }}>
                          {Math.round(stakeholderFeedback.reduce((a,f)=>a+f.score,0)/stakeholderFeedback.length)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {perfView === "benchmark" && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div style={{ background: "#fff", borderRadius: 10, padding: 16 }}>
                    <div style={{ fontWeight: 700, marginBottom: 4, color: "#1e3a5f" }}>Quality vs Commercial Performance</div>
                    <div style={{ fontSize: 11, color: "#94a3b8", marginBottom: 14 }}>Bubble size = annual spend. Identify underperforming high-spend suppliers.</div>
                    <svg viewBox="0 0 320 240" style={{ width: "100%", border: "1px solid #f1f5f9", borderRadius: 8, background: "#fafafa" }}>
                      {[0,25,50,75,100].map(v => (
                        <g key={v}>
                          <line x1={40} y1={220 - v*1.8} x2={310} y2={220 - v*1.8} stroke="#f1f5f9" strokeWidth="1" />
                          <line x1={40 + v*2.7} y1={20} x2={40 + v*2.7} y2={220} stroke="#f1f5f9" strokeWidth="1" />
                          <text x={32} y={224 - v*1.8} fontSize="8" fill="#94a3b8" textAnchor="end">{v}</text>
                          <text x={40 + v*2.7} y={232} fontSize="8" fill="#94a3b8" textAnchor="middle">{v}</text>
                        </g>
                      ))}
                      <text x={175} y={244} fontSize="9" fill="#64748b" textAnchor="middle">Commercial Performance →</text>
                      <text x={12} y={120} fontSize="9" fill="#64748b" textAnchor="middle" transform="rotate(-90,12,120)">Quality →</text>
                      <text x={72} y={36} fontSize="8" fill="#ef444460">Low Q / Low C</text>
                      <text x={195} y={36} fontSize="8" fill="#22c55e60">High Q / High C</text>
                      <text x={195} y={210} fontSize="8" fill="#f59e0b60">Low Q / High C</text>
                      <text x={72} y={210} fontSize="8" fill="#f59e0b60">High Q / Low C</text>
                      <line x1={175} y1={20} x2={175} y2={220} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4" />
                      <line x1={40} y1={120} x2={310} y2={120} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4" />
                      {suppliers.map(s => {
                        const kpis = kpiData[s.id];
                        const cx = 40 + kpis.commercial * 2.7;
                        const cy = 220 - kpis.quality * 1.8;
                        const r = 6 + (s.spend / 210000) * 18;
                        const col = scoreColor((kpis.quality + kpis.commercial) / 2);
                        return (
                          <g key={s.id}>
                            <circle cx={cx} cy={cy} r={r} fill={col} fillOpacity={0.3} stroke={col} strokeWidth={2} />
                            <text x={cx} y={cy + 3} fontSize="7" textAnchor="middle" fill={col} fontWeight="700">{s.name.split(" ")[0]}</text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>

                  <div style={{ background: "#fff", borderRadius: 10, padding: 16 }}>
                    <div style={{ fontWeight: 700, marginBottom: 12, color: "#1e3a5f" }}>KPI Benchmark — All Suppliers</div>
                    {kpiAreas.map(kpi => (
                      <div key={kpi.key} style={{ marginBottom: 12 }}>
                        <div style={{ fontWeight: 600, fontSize: 12, marginBottom: 6 }}>{kpi.icon} {kpi.label}</div>
                        {suppliers.map(s => {
                          const val = kpiData[s.id][kpi.key];
                          return (
                            <div key={s.id} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                              <div style={{ width: 110, fontSize: 10, color: "#64748b", textAlign: "right", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.name.split(" ")[0]}</div>
                              <div style={{ flex: 1, background: "#f1f5f9", borderRadius: 3, height: 8 }}>
                                <div style={{ width: val + "%", background: scoreColor(val), borderRadius: 3, height: 8 }} />
                              </div>
                              <div style={{ width: 28, fontSize: 10, fontWeight: 700, color: scoreColor(val) }}>{val}</div>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {perfView === "actions" && (
                <div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10, marginBottom: 14 }}>
                    {[["Open", actions.filter(a=>a.status==="Open").length, "#ef4444"],
                      ["In Progress", actions.filter(a=>a.status==="In Progress").length, "#f59e0b"],
                      ["Completed", actions.filter(a=>a.status==="Completed").length, "#22c55e"],
                      ["Total", actions.length, "#3b82f6"]].map(([l,v,c]) => (
                      <div key={l} style={{ background: "#fff", borderRadius: 8, padding: 12, borderLeft: `4px solid ${c}` }}>
                        <div style={{ fontSize: 22, fontWeight: 800, color: c }}>{v}</div>
                        <div style={{ fontSize: 12, color: "#64748b" }}>{l} Actions</div>
                      </div>
                    ))}
                  </div>

                  {actionOpen ? (
                    <div style={{ background: "#fff", borderRadius: 10, padding: 20 }}>
                      <button onClick={() => setActionOpen(null)} style={{ background: "none", border: "1px solid #e2e8f0", borderRadius: 8, padding: "5px 12px", cursor: "pointer", marginBottom: 14, color: "#1e3a5f", fontWeight: 600, fontSize: 12 }}>← Back to Actions</button>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                        <div>
                          <div style={{ fontWeight: 800, fontSize: 15, color: "#1e3a5f" }}>{actionOpen.title}</div>
                          <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>{actionOpen.supplier} · Due {actionOpen.due}</div>
                        </div>
                        <div style={{ display: "flex", gap: 8 }}>
                          <Badge label={actionOpen.type} color="#3b82f6" />
                          <Badge label={actionOpen.status} color={actionOpen.status === "Completed" ? "#22c55e" : actionOpen.status === "In Progress" ? "#f59e0b" : "#ef4444"} />
                        </div>
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                        <div>
                          <div style={{ fontWeight: 700, marginBottom: 8, fontSize: 13, color: "#374151" }}>Collaboration Chat</div>
                          <div style={{ background: "#f8fafc", borderRadius: 8, padding: 12, minHeight: 120, marginBottom: 8, fontSize: 12, color: "#64748b" }}>
                            <div style={{ marginBottom: 8 }}><strong style={{ color: "#1e3a5f" }}>You:</strong> We've identified delivery lead times exceeding SLA by 4 days on average over Q4. Please review and confirm corrective action plan.</div>
                            <div style={{ marginBottom: 8, background: "#eff6ff", borderRadius: 6, padding: 8 }}><strong style={{ color: "#3b82f6" }}>Supplier:</strong> Acknowledged. We are reviewing our warehouse scheduling and will respond within 5 business days.</div>
                          </div>
                          <div style={{ display: "flex", gap: 6 }}>
                            <input placeholder="Type a message..." style={{ flex: 1, padding: "7px 10px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }} />
                            <button style={{ background: "#1e3a5f", color: "#fff", border: "none", borderRadius: 8, padding: "7px 14px", cursor: "pointer", fontSize: 12 }}>Send</button>
                          </div>
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, marginBottom: 8, fontSize: 13, color: "#374151" }}>Sub-Actions</div>
                          {actionOpen.subactions.map((sa, i) => (
                            <label key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, cursor: "pointer", fontSize: 13 }}>
                              <input type="checkbox" /> {sa}
                            </label>
                          ))}
                          <button style={{ width: "100%", background: "#f8fafc", color: "#1e3a5f", border: "1px dashed #e2e8f0", borderRadius: 8, padding: 8, cursor: "pointer", fontSize: 12, marginTop: 4 }}>+ Add Sub-Action</button>

                          <div style={{ marginTop: 14 }}>
                            <div style={{ fontWeight: 700, marginBottom: 8, fontSize: 13, color: "#374151" }}>Stakeholders</div>
                            {[{ name: "Jon Lodge", side: "Internal" }, { name: "Supplier Contact", side: "Supplier" }].map(s => (
                              <div key={s.name} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, padding: "4px 0", borderBottom: "1px solid #f1f5f9" }}>
                                <span>{s.name}</span><Badge label={s.side} color={s.side === "Internal" ? "#3b82f6" : "#8b5cf6"} />
                              </div>
                            ))}
                          </div>
                          <button style={{ width: "100%", background: "#ef444420", color: "#ef4444", border: "1px solid #ef444430", borderRadius: 8, padding: 8, cursor: "pointer", fontSize: 12, marginTop: 14, fontWeight: 600 }}>Close & Archive Action</button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div style={{ background: "#fff", borderRadius: 10, overflow: "hidden" }}>
                      <div style={{ padding: "12px 16px", borderBottom: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontWeight: 700, color: "#1e3a5f" }}>Action Space</span>
                        <button style={{ background: "#1e3a5f", color: "#fff", border: "none", borderRadius: 8, padding: "6px 14px", cursor: "pointer", fontSize: 12, fontWeight: 600 }}>+ New Action</button>
                      </div>
                      {actions.map(a => (
                        <div key={a.id} onClick={() => setActionOpen(a)} style={{ padding: "14px 16px", borderBottom: "1px solid #f1f5f9", cursor: "pointer" }}
                          onMouseEnter={e => e.currentTarget.style.background = "#f8fafc"}
                          onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                            <span style={{ fontWeight: 700 }}>{a.title}</span>
                            <div style={{ display: "flex", gap: 6 }}>
                              <Badge label={a.type} color="#3b82f6" />
                              <Badge label={a.status} color={a.status === "Completed" ? "#22c55e" : a.status === "In Progress" ? "#f59e0b" : "#ef4444"} />
                            </div>
                          </div>
                          <div style={{ fontSize: 12, color: "#64748b" }}>{a.supplier} · Due {a.due} · {a.subactions.length} sub-actions</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })()}

        {/* CONTRACTS */}
        {activeTab === "Contracts" && (
          <div style={{ background: "#fff", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ padding: 16, borderBottom: "1px solid #f1f5f9", fontWeight: 700, color: "#1e3a5f" }}>Contract Management</div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  {["Supplier", "Contract Type", "Value", "Expiry", "Status", "Action"].map(h => (
                    <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontWeight: 600, fontSize: 12, color: "#64748b" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { s: "ABC Packaging Limited", type: "MSA", val: "£48,000", expiry: "2026-12-31", status: "Active" },
                  { s: "Buyse Supplies", type: "SLA", val: "£82,000", expiry: "2026-06-30", status: "Active" },
                  { s: "Carpe Diem LLC", type: "NDA", val: "—", expiry: "2026-04-15", status: "Renewal Due" },
                  { s: "Astrid Speed Control BV", type: "MSA", val: "£45,000", expiry: "2026-03-10", status: "Renewal Due" },
                  { s: "Apollo International", type: "SLA", val: "£18,000", expiry: "2025-11-01", status: "Expired" },
                  { s: "Beijing Bolts & Bits", type: "NDA", val: "—", expiry: "2025-09-30", status: "Expired" },
                ].map((c, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <td style={{ padding: "10px 12px", fontWeight: 600 }}>{c.s}</td>
                    <td style={{ padding: "10px 12px", color: "#64748b" }}>{c.type}</td>
                    <td style={{ padding: "10px 12px" }}>{c.val}</td>
                    <td style={{ padding: "10px 12px" }}>{c.expiry}</td>
                    <td style={{ padding: "10px 12px" }}>
                      <Badge label={c.status} color={c.status === "Active" ? "#22c55e" : c.status === "Renewal Due" ? "#f59e0b" : "#ef4444"} />
                    </td>
                    <td style={{ padding: "10px 12px" }}>
                      <button style={{ background: "#1e3a5f", color: "#fff", border: "none", borderRadius: 6, padding: "4px 10px", cursor: "pointer", fontSize: 12 }}>View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* COMPLIANCE */}
        {activeTab === "Compliance" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ background: "#fff", borderRadius: 10, padding: 16 }}>
                <div style={{ fontWeight: 700, marginBottom: 12, color: "#1e3a5f" }}>Risk & Compliance Status</div>
                {suppliers.map(s => (
                  <div key={s.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "1px solid #f1f5f9" }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.compliance ? "#22c55e" : "#ef4444", flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600 }}>{s.name}</div>
                      <div style={{ fontSize: 11, color: "#94a3b8" }}>{s.country}</div>
                    </div>
                    <div style={{ display: "flex", gap: 6 }}>
                      <Badge label={s.risk} color={riskColor(s.risk)} />
                      <Badge label={s.compliance ? "✓ Compliant" : "✗ Non-Compliant"} color={s.compliance ? "#22c55e" : "#ef4444"} />
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ background: "#fff", borderRadius: 10, padding: 16 }}>
                <div style={{ fontWeight: 700, marginBottom: 12, color: "#1e3a5f" }}>Compliance Checklist Areas</div>
                {[["Quality Management", true], ["Health & Safety", true], ["Environmental", true], ["Human Rights", false], ["Financial Credit", true], ["Insurance & Certifications", false], ["GDPR / Data Security", true], ["H&S Accreditation", false]].map(([area, ok]) => (
                  <div key={area} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid #f1f5f9", fontSize: 13 }}>
                    <span>{area}</span>
                    <span style={{ color: ok ? "#22c55e" : "#ef4444", fontWeight: 700 }}>{ok ? "✓" : "✗"}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TEMPLATES */}
        {activeTab === "Templates" && (() => {
          const [tmplView, setTmplView] = useState("list");
          const [editTmpl, setEditTmpl] = useState(null);
          const [sections, setSections] = useState([
            { id: 1, title: "Quality Management", weight: 25, criteria: [
              { id: 1, label: "ISO 9001 Certified", type: "Yes/No", acceptance: "Yes", weight: 40 },
              { id: 2, label: "Defect Rate (%)", type: "Numeric", acceptance: "< 2%", weight: 60 },
            ]},
            { id: 2, title: "Health & Safety", weight: 20, criteria: [
              { id: 3, label: "H&S Policy in place", type: "Yes/No", acceptance: "Yes", weight: 50 },
              { id: 4, label: "Incidents last 12 months", type: "Numeric", acceptance: "0", weight: 50 },
            ]},
            { id: 3, title: "Environmental", weight: 15, criteria: [
              { id: 5, label: "Carbon Reduction Target", type: "Yes/No", acceptance: "Yes", weight: 100 },
            ]},
          ]);

          const templates = [
            { id: 1, name: "Supplier Onboarding 2026", type: "Onboarding", sections: 8, issued: 12, lastEdited: "2026-02-10" },
            { id: 2, name: "Annual Compliance Review", type: "Self-Assessment", sections: 5, issued: 8, lastEdited: "2026-01-25" },
            { id: 3, name: "Quarterly Performance Evaluation", type: "Performance", sections: 6, issued: 4, lastEdited: "2026-02-01" },
          ];

          const typeColors = { Onboarding: "#3b82f6", "Self-Assessment": "#8b5cf6", Performance: "#22c55e" };
          const totalWeight = sections.reduce((a,s) => a + s.weight, 0);

          if (tmplView === "list") return (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14, alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 15, color: "#1e3a5f" }}>Template Builder</div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>Configure assessment templates with KPIs, acceptance criteria, and weightings</div>
                </div>
                <button style={{ background: "#1e3a5f", color: "#fff", border: "none", borderRadius: 8, padding: "9px 18px", cursor: "pointer", fontWeight: 600, fontSize: 13 }}>+ New Template</button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 16 }}>
                {templates.map(t => (
                  <div key={t.id} style={{ background: "#fff", borderRadius: 10, padding: 18, border: "1px solid #e2e8f0" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <Badge label={t.type} color={typeColors[t.type]} />
                      <span style={{ fontSize: 11, color: "#94a3b8" }}>Edited {t.lastEdited}</span>
                    </div>
                    <div style={{ fontWeight: 800, fontSize: 14, color: "#1e3a5f", marginBottom: 4 }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "#64748b", marginBottom: 12 }}>{t.sections} sections · {t.issued} campaigns issued</div>
                    <div style={{ display: "flex", gap: 6 }}>
                      <button onClick={() => { setEditTmpl(t); setTmplView("edit"); }}
                        style={{ flex: 1, background: "#1e3a5f", color: "#fff", border: "none", borderRadius: 7, padding: "7px", cursor: "pointer", fontSize: 12, fontWeight: 600 }}>Edit</button>
                      <button style={{ flex: 1, background: "#f1f5f9", color: "#64748b", border: "none", borderRadius: 7, padding: "7px", cursor: "pointer", fontSize: 12 }}>Duplicate</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );

          return (
            <div>
              <button onClick={() => setTmplView("list")} style={{ background: "none", border: "1px solid #e2e8f0", borderRadius: 8, padding: "6px 14px", cursor: "pointer", marginBottom: 14, color: "#1e3a5f", fontWeight: 600, fontSize: 13 }}>← Back to Templates</button>
              <div style={{ background: "#fff", borderRadius: 10, padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 15, color: "#1e3a5f" }}>{editTmpl?.name}</div>
                    <div style={{ fontSize: 12, color: "#64748b" }}>Configure sections, KPI criteria, acceptance criteria and weightings</div>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: totalWeight === 100 ? "#22c55e" : "#ef4444" }}>Total weight: {totalWeight}%</span>
                    <button style={{ background: "#22c55e", color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", cursor: "pointer", fontWeight: 600, fontSize: 13 }}>Save Template</button>
                  </div>
                </div>

                {sections.map((sec, si) => (
                  <div key={sec.id} style={{ border: "1px solid #e2e8f0", borderRadius: 10, marginBottom: 12, overflow: "hidden" }}>
                    <div style={{ background: "#f8fafc", padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                        <span style={{ fontWeight: 700, color: "#1e3a5f" }}>{sec.title}</span>
                        <span style={{ fontSize: 11, color: "#94a3b8" }}>{sec.criteria.length} criteria</span>
                      </div>
                      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <span style={{ fontSize: 12, color: "#64748b" }}>Section weight:</span>
                        <input type="number" value={sec.weight} onChange={e => setSections(s => s.map((x,i) => i===si ? {...x,weight:+e.target.value} : x))}
                          style={{ width: 54, padding: "4px 8px", borderRadius: 6, border: "1px solid #e2e8f0", fontSize: 13, textAlign: "center" }} />
                        <span style={{ fontSize: 12, color: "#64748b" }}>%</span>
                      </div>
                    </div>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                      <thead>
                        <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                          {["KPI / Criteria", "Input Type", "Acceptance Criteria", "Weight %"].map(h => (
                            <th key={h} style={{ padding: "8px 14px", textAlign: "left", fontSize: 11, color: "#94a3b8", fontWeight: 600 }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sec.criteria.map((c, ci) => (
                          <tr key={c.id} style={{ borderBottom: "1px solid #f8fafc" }}>
                            <td style={{ padding: "8px 14px" }}>
                              <input value={c.label} onChange={e => setSections(s => s.map((x,i) => i===si ? {...x, criteria: x.criteria.map((cc,j) => j===ci ? {...cc,label:e.target.value} : cc)} : x))}
                                style={{ border: "1px solid #e2e8f0", borderRadius: 6, padding: "5px 8px", fontSize: 12, width: "90%" }} />
                            </td>
                            <td style={{ padding: "8px 14px" }}>
                              <select value={c.type} onChange={e => setSections(s => s.map((x,i) => i===si ? {...x, criteria: x.criteria.map((cc,j) => j===ci ? {...cc,type:e.target.value} : cc)} : x))}
                                style={{ border: "1px solid #e2e8f0", borderRadius: 6, padding: "5px 8px", fontSize: 12 }}>
                                <option>Yes/No</option><option>Numeric</option><option>Text</option><option>Document Upload</option><option>Rating 1-5</option>
                              </select>
                            </td>
                            <td style={{ padding: "8px 14px" }}>
                              <input value={c.acceptance} onChange={e => setSections(s => s.map((x,i) => i===si ? {...x, criteria: x.criteria.map((cc,j) => j===ci ? {...cc,acceptance:e.target.value} : cc)} : x))}
                                style={{ border: "1px solid #e2e8f0", borderRadius: 6, padding: "5px 8px", fontSize: 12, width: "80%" }} />
                            </td>
                            <td style={{ padding: "8px 14px" }}>
                              <input type="number" value={c.weight} onChange={e => setSections(s => s.map((x,i) => i===si ? {...x, criteria: x.criteria.map((cc,j) => j===ci ? {...cc,weight:+e.target.value} : cc)} : x))}
                                style={{ border: "1px solid #e2e8f0", borderRadius: 6, padding: "5px 8px", fontSize: 12, width: 54, textAlign: "center" }} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div style={{ padding: "8px 14px" }}>
                      <button style={{ background: "none", border: "1px dashed #e2e8f0", borderRadius: 7, padding: "5px 12px", cursor: "pointer", fontSize: 12, color: "#3b82f6" }}>+ Add Criterion</button>
                    </div>
                  </div>
                ))}
                <button style={{ width: "100%", background: "#f8fafc", border: "2px dashed #e2e8f0", borderRadius: 10, padding: 12, cursor: "pointer", fontSize: 13, color: "#1e3a5f", fontWeight: 600 }}>+ Add Section</button>
              </div>
            </div>
          );
        })()}

        {/* INTELLIGENCE */}
        {activeTab === "Intelligence" && (() => {
          const [intView, setIntView] = useState("overview");
          const totalSpendI = suppliers.reduce((a,s)=>a+s.spend,0);

          const riskDist = [
            { label: "Low Risk", count: suppliers.filter(s=>s.risk==="Low Risk").length, color: "#22c55e" },
            { label: "Medium Risk", count: suppliers.filter(s=>s.risk==="Medium Risk").length, color: "#f59e0b" },
            { label: "High Risk", count: suppliers.filter(s=>s.risk==="High Risk").length, color: "#ef4444" },
          ];

          const spendBySegment = ["Strategic","Leverage","Tactical"].map(seg => ({
            seg, spend: suppliers.filter(s=>s.segment===seg).reduce((a,s)=>a+s.spend,0),
            count: suppliers.filter(s=>s.segment===seg).length,
            color: seg==="Strategic"?"#3b82f6":seg==="Leverage"?"#8b5cf6":"#f59e0b"
          }));

          const trendMonths = ["Aug","Sep","Oct","Nov","Dec","Jan","Feb"];
          const trendData = [62,65,64,68,71,69,73];
          const maxT = 100, minT = 0;
          const pts = trendData.map((v,i) => `${30+i*40},${120-(v/100)*100}`).join(" ");

          return (
            <div>
              <div style={{ fontWeight: 800, fontSize: 15, color: "#1e3a5f", marginBottom: 4 }}>Intelligence & Analytics</div>
              <div style={{ fontSize: 12, color: "#64748b", marginBottom: 16 }}>Portfolio-level insights across your entire supplier base</div>

              <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                {[["overview","🌐 Portfolio Overview"],["spend","💰 Spend Intelligence"],["risk","⚠ Risk Intelligence"]].map(([v,l]) => (
                  <button key={v} onClick={() => setIntView(v)}
                    style={{ padding: "8px 16px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: intView===v?700:400,
                      background: intView===v?"#1e3a5f":"#fff", color: intView===v?"#fff":"#64748b", fontSize: 13 }}>
                    {l}
                  </button>
                ))}
              </div>

              {intView === "overview" && (
                <div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 14 }}>
                    {[
                      { label: "Portfolio Coverage", value: "6 / 400", sub: "Suppliers profiled", color: "#3b82f6" },
                      { label: "Avg. Supplier Score", value: Math.round(suppliers.reduce((a,s)=>a+s.performance,0)/suppliers.length)+"%", sub: "Overall rating", color: "#22c55e" },
                      { label: "High Risk Suppliers", value: suppliers.filter(s=>s.risk==="High Risk").length, sub: "Require action", color: "#ef4444" },
                      { label: "Contract Renewals Due", value: 2, sub: "Next 60 days", color: "#f59e0b" },
                    ].map(c => (
                      <div key={c.label} style={{ background: "#fff", borderRadius: 10, padding: 14, borderLeft: `4px solid ${c.color}` }}>
                        <div style={{ fontSize: 22, fontWeight: 900, color: c.color }}>{c.value}</div>
                        <div style={{ fontWeight: 600, color: "#1e293b", fontSize: 13 }}>{c.label}</div>
                        <div style={{ fontSize: 11, color: "#94a3b8" }}>{c.sub}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 12 }}>
                    <div style={{ background: "#fff", borderRadius: 10, padding: 16 }}>
                      <div style={{ fontWeight: 700, marginBottom: 12, color: "#1e3a5f" }}>Portfolio Performance Trend</div>
                      <svg viewBox="0 0 310 140" style={{ width: "100%" }}>
                        {[0,25,50,75,100].map(v => (
                          <g key={v}>
                            <line x1={20} y1={120-(v/100)*100} x2={295} y2={120-(v/100)*100} stroke="#f1f5f9" strokeWidth="1" />
                            <text x={16} y={124-(v/100)*100} fontSize="8" fill="#94a3b8" textAnchor="end">{v}</text>
                          </g>
                        ))}
                        <polyline points={pts} fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinejoin="round" />
                        {trendData.map((v,i) => (
                          <g key={i}>
                            <circle cx={30+i*40} cy={120-(v/100)*100} r="4" fill="#3b82f6" />
                            <text x={30+i*40} y={135} fontSize="8" textAnchor="middle" fill="#94a3b8">{trendMonths[i]}</text>
                            <text x={30+i*40} y={112-(v/100)*100} fontSize="8" textAnchor="middle" fill="#3b82f6" fontWeight="700">{v}</text>
                          </g>
                        ))}
                        <polygon points={`30,120 ${pts} ${30+6*40},120`} fill="#3b82f650" />
                      </svg>
                    </div>

                    <div style={{ background: "#fff", borderRadius: 10, padding: 16 }}>
                      <div style={{ fontWeight: 700, marginBottom: 12, color: "#1e3a5f" }}>Risk Distribution</div>
                      <svg viewBox="0 0 160 160" style={{ width: "100%" }}>
                        {(() => {
                          let startAngle = -Math.PI/2;
                          const total = riskDist.reduce((a,r)=>a+r.count,0);
                          return riskDist.map(r => {
                            const angle = (r.count/total)*2*Math.PI;
                            const x1 = 80+60*Math.cos(startAngle), y1 = 80+60*Math.sin(startAngle);
                            const x2 = 80+60*Math.cos(startAngle+angle), y2 = 80+60*Math.sin(startAngle+angle);
                            const large = angle>Math.PI?1:0;
                            const d = `M80,80 L${x1},${y1} A60,60 0 ${large},1 ${x2},${y2}Z`;
                            const midA = startAngle+angle/2;
                            const lx = 80+35*Math.cos(midA), ly = 80+35*Math.sin(midA);
                            startAngle += angle;
                            return <g key={r.label}><path d={d} fill={r.color} fillOpacity={0.85}/><text x={lx} y={ly+4} fontSize="10" textAnchor="middle" fill="#fff" fontWeight="800">{r.count}</text></g>;
                          });
                        })()}
                        <circle cx={80} cy={80} r={30} fill="#fff"/>
                        <text x={80} y={77} fontSize="9" textAnchor="middle" fill="#64748b">Suppliers</text>
                        <text x={80} y={89} fontSize="13" textAnchor="middle" fill="#1e3a5f" fontWeight="900">{suppliers.length}</text>
                      </svg>
                      <div style={{ marginTop: 4 }}>
                        {riskDist.map(r => (
                          <div key={r.label} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, padding: "3px 0" }}>
                            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                              <span style={{ width: 10, height: 10, borderRadius: 2, background: r.color, display: "inline-block" }}/>
                              {r.label}
                            </span>
                            <span style={{ fontWeight: 700, color: r.color }}>{r.count}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {intView === "spend" && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div style={{ background: "#fff", borderRadius: 10, padding: 16 }}>
                    <div style={{ fontWeight: 700, marginBottom: 12, color: "#1e3a5f" }}>Spend by Segment</div>
                    {spendBySegment.map(s => {
                      const pct = Math.round(s.spend/totalSpendI*100);
                      return (
                        <div key={s.seg} style={{ marginBottom: 14 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                            <span style={{ fontWeight: 600 }}>{s.seg} <span style={{ fontSize: 11, color: "#94a3b8" }}>({s.count} suppliers)</span></span>
                            <span style={{ fontWeight: 700, color: s.color }}>£{(s.spend/1000).toFixed(0)}k · {pct}%</span>
                          </div>
                          <div style={{ background: "#f1f5f9", borderRadius: 6, height: 12 }}>
                            <div style={{ width: pct+"%", background: s.color, borderRadius: 6, height: 12 }}/>
                          </div>
                        </div>
                      );
                    })}
                    <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: 10, display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
                      <span>Total Portfolio Spend</span>
                      <span style={{ color: "#1e3a5f" }}>£{(totalSpendI/1000).toFixed(0)}k</span>
                    </div>
                  </div>

                  <div style={{ background: "#fff", borderRadius: 10, padding: 16 }}>
                    <div style={{ fontWeight: 700, marginBottom: 12, color: "#1e3a5f" }}>Top Suppliers by Spend vs Performance</div>
                    {[...suppliers].sort((a,b)=>b.spend-a.spend).map(s => (
                      <div key={s.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "1px solid #f8fafc" }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 600, fontSize: 12 }}>{s.name}</div>
                          <div style={{ fontSize: 11, color: "#94a3b8" }}>£{s.spend.toLocaleString()} · {s.segment}</div>
                        </div>
                        <div style={{ width: 80 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                            <span style={{ fontSize: 10, color: "#94a3b8" }}>Perf</span>
                            <span style={{ fontSize: 10, fontWeight: 700, color: scoreColor(s.performance) }}>{s.performance}%</span>
                          </div>
                          <div style={{ background: "#f1f5f9", borderRadius: 3, height: 5 }}>
                            <div style={{ width: s.performance+"%", background: scoreColor(s.performance), borderRadius: 3, height: 5 }}/>
                          </div>
                        </div>
                        {s.performance < 50 && s.spend > 30000 && (
                          <span title="High spend, low performance" style={{ color: "#ef4444", fontSize: 16 }}>⚠</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {intView === "risk" && (
                <div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 14 }}>
                    {[
                      { label: "Non-Compliant Suppliers", value: suppliers.filter(s=>!s.compliance).length, color: "#ef4444", icon: "✗" },
                      { label: "Pending Audits", value: suppliers.filter(s=>s.auditStatus==="Pending").length, color: "#f59e0b", icon: "⏳" },
                      { label: "Failed Audits", value: suppliers.filter(s=>s.auditStatus==="Failed").length, color: "#ef4444", icon: "✗" },
                    ].map(c => (
                      <div key={c.label} style={{ background: "#fff", borderRadius: 10, padding: 16, borderLeft: `4px solid ${c.color}` }}>
                        <div style={{ fontSize: 28, fontWeight: 900, color: c.color }}>{c.value}</div>
                        <div style={{ fontWeight: 600, color: "#1e293b", fontSize: 13 }}>{c.label}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: "#fff", borderRadius: 10, padding: 16 }}>
                    <div style={{ fontWeight: 700, marginBottom: 12, color: "#1e3a5f" }}>Supplier Risk Matrix</div>
                    {suppliers.map(s => {
                      const riskScore = s.risk==="Low Risk"?20:s.risk==="Medium Risk"?55:85;
                      const compScore = s.compliance?90:30;
                      return (
                        <div key={s.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid #f8fafc" }}>
                          <div style={{ width: 150, fontWeight: 600, fontSize: 12 }}>{s.name}</div>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", gap: 8 }}>
                              {[["Risk Level", s.risk, riskColor(s.risk)], ["Audit", s.auditStatus, auditColor(s.auditStatus)], ["Credit", s.creditScore, creditColor(s.creditScore)]].map(([l,v,c]) => (
                                <div key={l} style={{ textAlign: "center" }}>
                                  <div style={{ fontSize: 10, color: "#94a3b8", marginBottom: 2 }}>{l}</div>
                                  <Badge label={v} color={c} />
                                </div>
                              ))}
                            </div>
                          </div>
                          <div style={{ width: 120 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#94a3b8", marginBottom: 2 }}>
                              <span>Compliance score</span><span style={{ color: scoreColor(compScore), fontWeight: 700 }}>{compScore}%</span>
                            </div>
                            <div style={{ background: "#f1f5f9", borderRadius: 4, height: 6 }}>
                              <div style={{ width: compScore+"%", background: scoreColor(compScore), borderRadius: 4, height: 6 }}/>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })()}

        {/* FLYWHEEL */}
        {activeTab === "Flywheel" && (() => {
          const [activeStep, setActiveStep] = useState(null);

          const steps = [
            {
              id: 1, label: "Segment & Strategy", icon: "🎯", color: "#3b82f6",
              angle: -90,
              description: "Segment your supplier base by spend, criticality, risk, and growth potential. Set your category strategy aligned with business priorities.",
              tools: ["Kraljic Matrix segmentation", "Automated segment rules", "Category strategy builder"],
              kpis: ["Supplier coverage %", "Segment distribution", "Category spend"],
              heliosx: { done: 6, total: 531, status: "In Progress", note: "531 suppliers mapped across UK & US operations" },
            },
            {
              id: 2, label: "Risk & Due Diligence", icon: "🔍", color: "#8b5cf6",
              angle: -30,
              description: "Assess relevant financial, ESG, operational and geopolitical risk. Screen suppliers before negotiation and onboarding.",
              tools: ["Credit & financial screening", "ESG risk scores", "Geopolitical & reputational checks"],
              kpis: ["High risk suppliers", "Credit score distribution", "Non-compliant count"],
              heliosx: { done: 4, total: 6, status: "Active", note: `${suppliers.filter(s=>s.risk==="High Risk").length} high-risk suppliers flagged for review` },
            },
            {
              id: 3, label: "Onboard & Qualify", icon: "📋", color: "#06b6d4",
              angle: 30,
              description: "Integrate suppliers into your systems and processes. Run structured onboarding campaigns and multi-stakeholder approval flows.",
              tools: ["Self-registration sign-up", "Insight campaign module", "Drip email scheduling"],
              kpis: ["Onboarding completion rate", "Pending approvals", "Time to qualify"],
              heliosx: { done: 3, total: 8, status: "In Progress", note: "Onboarding form handed over to IT (Nick Faulkner) via GitHub & Confluence" },
            },
            {
              id: 4, label: "Audit & Performance", icon: "📊", color: "#22c55e",
              angle: 90,
              description: "Track KPIs across quality, delivery, commercial, innovation and sustainability. Combine hard ERP data with qualitative stakeholder evaluations.",
              tools: ["6-area KPI scorecards", "Stakeholder evaluations", "Benchmarking & bubble chart"],
              kpis: ["Avg performance score", "SLA adherence %", "On-time delivery"],
              heliosx: { done: Math.round(suppliers.reduce((a,s)=>a+s.performance,0)/suppliers.length), total: 100, status: "Active", note: `Avg supplier performance ${Math.round(suppliers.reduce((a,s)=>a+s.performance,0)/suppliers.length)}% across ${suppliers.length} profiled suppliers` },
            },
            {
              id: 5, label: "Correct, Develop & Innovate", icon: "⚡", color: "#f59e0b",
              angle: 150,
              description: "Issue corrective actions, improvement proposals and development projects. Collaborate directly with suppliers through tracked action spaces.",
              tools: ["Action space & chat", "Sub-action tracking", "Improvement proposals"],
              kpis: ["Open actions", "Actions closed on time", "Improvement ROI"],
              heliosx: { done: 2, total: 3, status: "Active", note: "2 active improvement actions open with strategic suppliers" },
            },
            {
              id: 6, label: "Harvest & Re-Segment", icon: "🔄", color: "#ef4444",
              angle: 210,
              description: "Use insights from performance and collaboration to re-evaluate segmentation. Reallocate spend, develop strategic partners, and close the flywheel.",
              tools: ["Spend vs performance matrix", "Segment re-classification", "Category strategy refresh"],
              kpis: ["Spend reallocation value", "Suppliers upgraded/downgraded", "Cost savings achieved"],
              heliosx: { done: 1, total: 2, status: "Planned", note: "Q2 category strategy review scheduled with Supply Chain & Procurement" },
            },
          ];

          const cx = 200, cy = 200, r = 130, btnR = 38;
          const toRad = deg => (deg * Math.PI) / 180;

          return (
            <div>
              <div style={{ fontWeight: 800, fontSize: 15, color: "#1e3a5f", marginBottom: 2 }}>Strategic Sourcing Flywheel</div>
              <div style={{ fontSize: 12, color: "#64748b", marginBottom: 16 }}>Based on the 6-step SRM flywheel — turning supplier relationships into results. Click any step to see HeliosX status.</div>

              <div style={{ display: "grid", gridTemplateColumns: "400px 1fr", gap: 16, alignItems: "start" }}>
                <div style={{ background: "#fff", borderRadius: 12, padding: 16 }}>
                  <svg viewBox="0 0 400 400" style={{ width: "100%" }}>
                    <circle cx={cx} cy={cy} r={r+btnR+8} fill="none" stroke="#f1f5f9" strokeWidth="3" strokeDasharray="6 4" />

                    {steps.map((step, i) => {
                      const next = steps[(i + 1) % steps.length];
                      const a1 = toRad(step.angle + 35);
                      const a2 = toRad(next.angle - 35);
                      const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
                      const x2 = cx + r * Math.cos(a2), y2 = cy + r * Math.sin(a2);
                      const mx = cx + (r + 18) * Math.cos(toRad((step.angle + next.angle) / 2));
                      const my = cy + (r + 18) * Math.sin(toRad((step.angle + next.angle) / 2));
                      return (
                        <path key={i} d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`}
                          fill="none" stroke={step.color} strokeWidth="2.5" strokeOpacity="0.5"
                          markerEnd={`url(#arrow-${step.id})`} />
                      );
                    })}

                    <defs>
                      {steps.map(s => (
                        <marker key={s.id} id={`arrow-${s.id}`} markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                          <path d="M0,0 L0,6 L6,3 z" fill={s.color} fillOpacity="0.7" />
                        </marker>
                      ))}
                    </defs>

                    <circle cx={cx} cy={cy} r={55} fill="#1e3a5f" />
                    <text x={cx} y={cy - 8} textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">HeliosX</text>
                    <text x={cx} y={cy + 6} textAnchor="middle" fill="#93c5fd" fontSize="9">SRM</text>
                    <text x={cx} y={cy + 18} textAnchor="middle" fill="#93c5fd" fontSize="9">Flywheel</text>

                    {steps.map(step => {
                      const rad = toRad(step.angle);
                      const bx = cx + r * Math.cos(rad);
                      const by = cy + r * Math.sin(rad);
                      const isActive = activeStep?.id === step.id;
                      return (
                        <g key={step.id} onClick={() => setActiveStep(isActive ? null : step)} style={{ cursor: "pointer" }}>
                          <circle cx={bx} cy={by} r={btnR + (isActive ? 4 : 0)} fill={step.color} fillOpacity={isActive ? 1 : 0.85}
                            stroke="#fff" strokeWidth={isActive ? 3 : 2} />
                          <text x={bx} y={by - 6} textAnchor="middle" fontSize="16">{step.icon}</text>
                          <text x={bx} y={by + 7} textAnchor="middle" fill="#fff" fontSize="7.5" fontWeight="700">
                            {step.label.split(" ").slice(0, 2).join(" ")}
                          </text>
                          <text x={bx} y={by + 17} textAnchor="middle" fill="#fff" fontSize="7" opacity="0.85">
                            {step.label.split(" ").slice(2).join(" ")}
                          </text>
                          <circle cx={bx + btnR - 4} cy={by - btnR + 4} r={9} fill="#fff" />
                          <text x={bx + btnR - 4} y={by - btnR + 8} textAnchor="middle" fontSize="9" fontWeight="900" fill={step.color}>{step.id}</text>
                        </g>
                      );
                    })}
                  </svg>
                  <div style={{ textAlign: "center", fontSize: 11, color: "#94a3b8", marginTop: 4 }}>Click a step to see detail & HeliosX status</div>
                </div>

                <div>
                  {!activeStep ? (
                    <div>
                      <div style={{ background: "#fff", borderRadius: 10, padding: 16, marginBottom: 12 }}>
                        <div style={{ fontWeight: 700, color: "#1e3a5f", marginBottom: 12 }}>HeliosX Flywheel Progress</div>
                        {steps.map(s => {
                          const pct = s.id === 4 ? s.heliosx.done : Math.round((s.heliosx.done / s.heliosx.total) * 100);
                          return (
                            <div key={s.id} onClick={() => setActiveStep(s)} style={{ marginBottom: 12, cursor: "pointer" }}>
                              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                                <span style={{ fontWeight: 600, fontSize: 13 }}>{s.icon} {s.label}</span>
                                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                                  <Badge label={s.heliosx.status} color={s.heliosx.status === "Active" ? "#22c55e" : s.heliosx.status === "In Progress" ? "#f59e0b" : "#94a3b8"} />
                                  <span style={{ fontSize: 12, fontWeight: 700, color: s.color }}>{s.id === 4 ? pct + "%" : `${s.heliosx.done}/${s.heliosx.total}`}</span>
                                </div>
                              </div>
                              <div style={{ background: "#f1f5f9", borderRadius: 6, height: 8 }}>
                                <div style={{ width: (s.id === 4 ? pct : Math.round((s.heliosx.done / s.heliosx.total) * 100)) + "%", background: s.color, borderRadius: 6, height: 8, transition: "width 0.4s" }} />
                              </div>
                              <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 3 }}>{s.heliosx.note}</div>
                            </div>
                          );
                        })}
                      </div>
                      <div style={{ background: "#eff6ff", borderRadius: 10, padding: 14, border: "1px solid #bfdbfe" }}>
                        <div style={{ fontWeight: 700, color: "#1e3a5f", marginBottom: 6 }}>💡 Flywheel Principle</div>
                        <div style={{ fontSize: 12, color: "#1e40af", lineHeight: 1.6 }}>
                          "In any great transformation, there is no single defining moment — no silver bullet. Momentum builds little by little, each step feeding the next in a self-propelling loop." — Jim Collins, <em>Turning the Flywheel</em>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div style={{ background: "#fff", borderRadius: 10, padding: 18, marginBottom: 12, borderTop: `4px solid ${activeStep.color}` }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                          <div>
                            <div style={{ fontSize: 26 }}>{activeStep.icon}</div>
                            <div style={{ fontWeight: 800, fontSize: 16, color: "#1e3a5f" }}>Step {activeStep.id}: {activeStep.label}</div>
                          </div>
                          <button onClick={() => setActiveStep(null)} style={{ background: "none", border: "1px solid #e2e8f0", borderRadius: 8, padding: "5px 12px", cursor: "pointer", fontSize: 12, color: "#64748b" }}>✕ Close</button>
                        </div>
                        <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.7, marginBottom: 14 }}>{activeStep.description}</p>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
                          <div style={{ background: "#f8fafc", borderRadius: 8, padding: 12 }}>
                            <div style={{ fontWeight: 700, fontSize: 12, color: "#1e3a5f", marginBottom: 8 }}>🔧 Platform Tools</div>
                            {activeStep.tools.map(t => (
                              <div key={t} style={{ fontSize: 12, color: "#374151", marginBottom: 4, display: "flex", gap: 6 }}>
                                <span style={{ color: activeStep.color }}>→</span> {t}
                              </div>
                            ))}
                          </div>
                          <div style={{ background: "#f8fafc", borderRadius: 8, padding: 12 }}>
                            <div style={{ fontWeight: 700, fontSize: 12, color: "#1e3a5f", marginBottom: 8 }}>📏 Key Metrics</div>
                            {activeStep.kpis.map(k => (
                              <div key={k} style={{ fontSize: 12, color: "#374151", marginBottom: 4, display: "flex", gap: 6 }}>
                                <span style={{ color: activeStep.color }}>→</span> {k}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div style={{ background: activeStep.color + "12", border: `1px solid ${activeStep.color}30`, borderRadius: 10, padding: 14 }}>
                          <div style={{ fontWeight: 700, fontSize: 13, color: activeStep.color, marginBottom: 6 }}>📍 HeliosX Status</div>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                            <Badge label={activeStep.heliosx.status} color={activeStep.heliosx.status === "Active" ? "#22c55e" : activeStep.heliosx.status === "In Progress" ? "#f59e0b" : "#94a3b8"} />
                            <span style={{ fontWeight: 800, color: activeStep.color }}>
                              {activeStep.id === 4 ? `${activeStep.heliosx.done}% avg` : `${activeStep.heliosx.done} / ${activeStep.heliosx.total}`}
                            </span>
                          </div>
                          <div style={{ background: "#f1f5f9", borderRadius: 6, height: 8, marginBottom: 8 }}>
                            <div style={{ width: (activeStep.id === 4 ? activeStep.heliosx.done : Math.round((activeStep.heliosx.done / activeStep.heliosx.total) * 100)) + "%", background: activeStep.color, borderRadius: 6, height: 8 }} />
                          </div>
                          <div style={{ fontSize: 12, color: "#374151" }}>{activeStep.heliosx.note}</div>
                        </div>
                      </div>

                      {(() => {
                        const next = steps[activeStep.id % steps.length];
                        return (
                          <div onClick={() => setActiveStep(next)} style={{ background: "#fff", borderRadius: 10, padding: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", border: `1px solid #e2e8f0` }}
                            onMouseEnter={e => e.currentTarget.style.borderColor = next.color}
                            onMouseLeave={e => e.currentTarget.style.borderColor = "#e2e8f0"}>
                            <div>
                              <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 600, textTransform: "uppercase" }}>Next step in the flywheel</div>
                              <div style={{ fontWeight: 700, color: "#1e3a5f" }}>{next.icon} Step {next.id}: {next.label}</div>
                            </div>
                            <span style={{ fontSize: 20, color: next.color }}>→</span>
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })()}

        {/* ERP & ARCHITECTURE */}
        {activeTab === "ERP & Architecture" && (() => {
          const [erpView, setErpView] = useState("architecture");
          const [matrixScores, setMatrixScores] = useState({
            suppliers: "mid", risk: "mid", audit: "low", performance: "low",
            scale: "mid", collaboration: "low", erp: "mid", data: "low"
          });

          const matrixItems = [
            { key: "suppliers", label: "100+ active suppliers to manage", low: "ERP sufficient", mid: "SRM adds value", high: "SRM essential" },
            { key: "risk", label: "Supplier risk / compliance pressure", low: "ERP sufficient", mid: "SRM adds value", high: "SRM essential" },
            { key: "audit", label: "Audit & quality management needs", low: "ERP sufficient", mid: "SRM adds value", high: "SRM essential" },
            { key: "performance", label: "Performance KPI tracking required", low: "ERP sufficient", mid: "SRM adds value", high: "SRM essential" },
            { key: "scale", label: "Organisation scale / global sites", low: "ERP sufficient", mid: "SRM adds value", high: "SRM essential" },
            { key: "collaboration", label: "Supplier collaboration & actions", low: "ERP sufficient", mid: "SRM adds value", high: "SRM essential" },
            { key: "erp", label: "ERP lacks vendor lifecycle insight", low: "ERP sufficient", mid: "SRM adds value", high: "SRM essential" },
            { key: "data", label: "Fragmented data across systems", low: "ERP sufficient", mid: "SRM adds value", high: "SRM essential" },
          ];

          const score = Object.values(matrixScores).filter(v => v === "high").length * 2 + Object.values(matrixScores).filter(v => v === "mid").length;
          const maxScore = matrixItems.length * 2;
          const readiness = score >= 10 ? "SRM Essential" : score >= 6 ? "SRM Recommended" : "ERP May Suffice";
          const readinessColor = score >= 10 ? "#22c55e" : score >= 6 ? "#f59e0b" : "#94a3b8";

          const heliosxChecks = [
            { label: "400+ suppliers across UK & US operations", checked: true },
            { label: "Multiple brands (MedExpress, Dermatica, ZipHealth, RocketRx, Levity)", checked: true },
            { label: "Fragmented data across Sage X3, spreadsheets, email", checked: true },
            { label: "Compliance gaps (CHAS, insurance, certifications)", checked: true },
            { label: "No centralised performance tracking", checked: true },
            { label: "Missed contract renewals & poor visibility", checked: true },
            { label: "Manual risk verification (labour-intensive)", checked: true },
          ];

          return (
            <div>
              <div style={{ fontWeight: 800, fontSize: 15, color: "#1e3a5f", marginBottom: 2 }}>ERP & SRM Architecture</div>
              <div style={{ fontSize: 12, color: "#64748b", marginBottom: 16 }}>How SRM complements your ERP — and why HeliosX needs both</div>

              <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                {[["architecture","🏗 Architecture Overview"],["matrix","✅ Decision Matrix"],["scorecard","📍 HeliosX Readiness"]].map(([v,l]) => (
                  <button key={v} onClick={() => setErpView(v)}
                    style={{ padding: "8px 16px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: erpView===v?700:400,
                      background: erpView===v?"#1e3a5f":"#fff", color: erpView===v?"#fff":"#64748b", fontSize: 13 }}>
                    {l}
                  </button>
                ))}
              </div>

              {erpView === "architecture" && (
                <div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 12, marginBottom: 16, alignItems: "center" }}>
                    <div style={{ background: "#fff", borderRadius: 10, padding: 18, borderTop: "4px solid #94a3b8" }}>
                      <div style={{ fontWeight: 800, fontSize: 14, color: "#374151", marginBottom: 10 }}>🏦 ERP (Sage X3)</div>
                      <div style={{ fontSize: 12, color: "#64748b", marginBottom: 10, fontStyle: "italic" }}>Transactional engine — your data foundation</div>
                      {["Purchase Orders & Receipts", "Invoices & Spend Ledger", "Vendor Master Data", "Financial Controls", "Transactional History"].map(i => (
                        <div key={i} style={{ fontSize: 12, padding: "5px 0", borderBottom: "1px solid #f8fafc", display: "flex", gap: 6 }}>
                          <span style={{ color: "#94a3b8" }}>→</span> {i}
                        </div>
                      ))}
                      <div style={{ marginTop: 10, background: "#fef3c7", borderRadius: 8, padding: 8, fontSize: 11, color: "#92400e" }}>
                        ⚠ ERP alone lacks lifecycle insight, collaboration, risk scoring, and performance management
                      </div>
                    </div>

                    <div style={{ textAlign: "center", padding: "0 8px" }}>
                      <div style={{ background: "#1e3a5f", color: "#fff", borderRadius: 10, padding: "10px 14px", fontSize: 11, fontWeight: 700, marginBottom: 8 }}>Push ↕ Pull</div>
                      <div style={{ fontSize: 10, color: "#94a3b8", lineHeight: 1.5 }}>Golden record<br/>sync via API<br/>or Data Lake</div>
                    </div>

                    <div style={{ background: "#fff", borderRadius: 10, padding: 18, borderTop: "4px solid #3b82f6" }}>
                      <div style={{ fontWeight: 800, fontSize: 14, color: "#1e3a5f", marginBottom: 10 }}>🔷 SRM (HeliosX Platform)</div>
                      <div style={{ fontSize: 12, color: "#64748b", marginBottom: 10, fontStyle: "italic" }}>Operating system & automation layer</div>
                      {["Supplier Onboarding & Qualification", "Risk, Compliance & ESG Screening", "Performance KPIs & Scorecards", "Corrective Actions & Collaboration", "Contract Lifecycle Management"].map(i => (
                        <div key={i} style={{ fontSize: 12, padding: "5px 0", borderBottom: "1px solid #f8fafc", display: "flex", gap: 6 }}>
                          <span style={{ color: "#3b82f6" }}>→</span> {i}
                        </div>
                      ))}
                      <div style={{ marginTop: 10, background: "#eff6ff", borderRadius: 8, padding: 8, fontSize: 11, color: "#1e40af" }}>
                        ✓ SRM surfaces qualitative insights that ERP cannot — turning data into supplier relationships
                      </div>
                    </div>
                  </div>

                  <div style={{ background: "#fff", borderRadius: 10, padding: 20 }}>
                    <div style={{ fontWeight: 700, color: "#1e3a5f", marginBottom: 16 }}>Modern Source-to-Pay Architecture</div>
                    <div style={{ position: "relative" }}>
                      {[
                        { label: "External Data Sources", color: "#f1f5f9", textColor: "#64748b", items: ["3rd Party Risk (Credit, Sanctions, Media)", "ESG & Regulatory Indices", "Supplier Self-Assessment Portals"] },
                        { label: "SRM Layer — HeliosX Platform", color: "#eff6ff", textColor: "#1e3a5f", items: ["Onboarding · Risk · Performance · Contracts · Compliance · Intelligence"] },
                        { label: "Normalisation / Data Lake (Snowflake)", color: "#f0fdf4", textColor: "#166534", items: ["Data normalisation · Golden records · Master data sync · Multi-ERP consolidation"] },
                        { label: "ERP Foundation (Sage X3)", color: "#fefce8", textColor: "#854d0e", items: ["Vendor master · POs · Invoices · Spend data · Financial controls"] },
                      ].map((layer, i) => (
                        <div key={i} style={{ background: layer.color, borderRadius: 8, padding: "12px 16px", marginBottom: 6, border: `1px solid ${layer.textColor}20` }}>
                          <div style={{ fontWeight: 700, color: layer.textColor, fontSize: 13, marginBottom: 4 }}>{layer.label}</div>
                          {layer.items.map(item => (
                            <div key={item} style={{ fontSize: 11, color: layer.textColor, opacity: 0.8 }}>· {item}</div>
                          ))}
                        </div>
                      ))}
                      {[0,1,2].map(i => (
                        <div key={i} style={{ textAlign: "center", fontSize: 16, color: "#94a3b8", margin: "-2px 0" }}>↕</div>
                      ))}
                    </div>
                    <div style={{ marginTop: 14, background: "#f8fafc", borderRadius: 8, padding: 12, fontSize: 12, color: "#374151", lineHeight: 1.7 }}>
                      <strong>HeliosX note:</strong> Data is currently fragmented across Sage X3, spreadsheets, and individual email records. Implementing SRM as the operating layer above Sage X3 — with Snowflake as the normalisation layer — would consolidate supplier data into a single source of truth across all brands and regions.
                    </div>
                  </div>
                </div>
              )}

              {erpView === "matrix" && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 14 }}>
                  <div style={{ background: "#fff", borderRadius: 10, padding: 18 }}>
                    <div style={{ fontWeight: 700, color: "#1e3a5f", marginBottom: 4 }}>SRM Decision-Making Matrix</div>
                    <div style={{ fontSize: 12, color: "#64748b", marginBottom: 16 }}>Rate your organisation against each attribute to see if SRM is right for you</div>
                    {matrixItems.map(item => (
                      <div key={item.key} style={{ marginBottom: 14, padding: "10px 12px", background: "#f8fafc", borderRadius: 8 }}>
                        <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 8 }}>{item.label}</div>
                        <div style={{ display: "flex", gap: 8 }}>
                          {[["low","Low","#94a3b8"],["mid","Medium","#f59e0b"],["high","High","#22c55e"]].map(([val, label, color]) => (
                            <button key={val} onClick={() => setMatrixScores(s => ({...s, [item.key]: val}))}
                              style={{ flex: 1, padding: "6px 0", borderRadius: 7, border: `2px solid ${matrixScores[item.key]===val ? color : "#e2e8f0"}`,
                                background: matrixScores[item.key]===val ? color+"20" : "#fff", cursor: "pointer",
                                fontWeight: matrixScores[item.key]===val ? 700 : 400, fontSize: 12,
                                color: matrixScores[item.key]===val ? color : "#64748b" }}>
                              {label}
                            </button>
                          ))}
                        </div>
                        <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 6 }}>
                          {item[matrixScores[item.key]]}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div style={{ background: "#fff", borderRadius: 10, padding: 18, marginBottom: 12, borderTop: `4px solid ${readinessColor}` }}>
                      <div style={{ fontWeight: 700, color: "#1e3a5f", marginBottom: 12 }}>Your Result</div>
                      <div style={{ textAlign: "center", padding: "16px 0" }}>
                        <div style={{ fontSize: 42, fontWeight: 900, color: readinessColor }}>{score}<span style={{ fontSize: 18, color: "#94a3b8" }}>/{maxScore}</span></div>
                        <div style={{ fontSize: 16, fontWeight: 800, color: readinessColor, marginTop: 4 }}>{readiness}</div>
                      </div>
                      <div style={{ background: "#f8fafc", borderRadius: 8, height: 10, marginBottom: 10 }}>
                        <div style={{ width: (score/maxScore*100)+"%", background: readinessColor, borderRadius: 8, height: 10, transition: "width 0.4s" }}/>
                      </div>
                      <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6 }}>
                        {score >= 10 ? "Your supplier base complexity, risk exposure, and data fragmentation make SRM essential for operational efficiency and visibility." :
                         score >= 6 ? "SRM would deliver significant ROI on top of your ERP, particularly for compliance, performance tracking, and supplier collaboration." :
                         "Your current ERP may be sufficient. Consider SRM as your supplier base or compliance requirements grow."}
                      </div>
                    </div>
                    <div style={{ background: "#1e3a5f", borderRadius: 10, padding: 16, color: "#fff" }}>
                      <div style={{ fontWeight: 700, marginBottom: 8, fontSize: 13 }}>If you score 5+ HIGH:</div>
                      <div style={{ fontSize: 11, lineHeight: 1.7, color: "#93c5fd" }}>SRM is essential and will deliver measurable ROI on top of your ERP for supplier lifecycle management.</div>
                      <div style={{ fontWeight: 700, marginTop: 10, marginBottom: 6, fontSize: 13 }}>Typical ROI drivers:</div>
                      {["7-10% avg cost savings on total spend","10 hrs/wk saved on manual SRM tasks","90% increase in supplier engagement","Reduced compliance risk & missed renewals"].map(r => (
                        <div key={r} style={{ fontSize: 11, color: "#86efac", marginBottom: 3 }}>✓ {r}</div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {erpView === "scorecard" && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div style={{ background: "#fff", borderRadius: 10, padding: 18 }}>
                    <div style={{ fontWeight: 700, color: "#1e3a5f", marginBottom: 4 }}>HeliosX SRM Readiness Checklist</div>
                    <div style={{ fontSize: 12, color: "#64748b", marginBottom: 16 }}>Based on Kodiak Hub's qualification criteria</div>
                    {heliosxChecks.map((c, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, padding: "10px 0", borderBottom: "1px solid #f8fafc", alignItems: "flex-start" }}>
                        <div style={{ width: 22, height: 22, borderRadius: "50%", background: c.checked ? "#22c55e" : "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                          <span style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>{c.checked ? "✓" : "—"}</span>
                        </div>
                        <div style={{ fontSize: 13, color: c.checked ? "#1e293b" : "#94a3b8" }}>{c.label}</div>
                      </div>
                    ))}
                    <div style={{ marginTop: 14, background: "#f0fdf4", borderRadius: 8, padding: 12 }}>
                      <div style={{ fontWeight: 700, color: "#16a34a", marginBottom: 4 }}>Result: {heliosxChecks.filter(c=>c.checked).length}/{heliosxChecks.length} criteria met</div>
                      <div style={{ fontSize: 12, color: "#166534" }}>HeliosX clearly meets the threshold for SRM adoption. The business case is strong based on supplier volume, data fragmentation, and compliance requirements alone.</div>
                    </div>
                  </div>

                  <div>
                    <div style={{ background: "#fff", borderRadius: 10, padding: 18, marginBottom: 12 }}>
                      <div style={{ fontWeight: 700, color: "#1e3a5f", marginBottom: 12 }}>Current State vs Future State</div>
                      {[
                        { area: "Supplier Data", current: "Fragmented across Sage X3, spreadsheets, email", future: "Single source of truth in SRM" },
                        { area: "Risk Management", current: "Manual verification, labour-intensive, no alerts", future: "Automated credit, ESG & compliance screening" },
                        { area: "Performance", current: "Informal KPIs, no consolidated dashboard", future: "6-area scorecards with stakeholder evaluations" },
                        { area: "Contracts", current: "Shared drives / email — missed renewals", future: "Lifecycle tracking with trigger date alerts" },
                        { area: "Onboarding", current: "Manual process, CHAS dependency removed", future: "Self-registration + assessment campaigns" },
                      ].map(r => (
                        <div key={r.area} style={{ marginBottom: 12, padding: "10px 12px", background: "#f8fafc", borderRadius: 8 }}>
                          <div style={{ fontWeight: 700, fontSize: 12, color: "#1e3a5f", marginBottom: 6 }}>{r.area}</div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                            <div style={{ fontSize: 11, color: "#ef4444" }}>❌ Now: {r.current}</div>
                            <div style={{ fontSize: 11, color: "#22c55e" }}>✓ SRM: {r.future}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{ background: "#1e3a5f", borderRadius: 10, padding: 16, color: "#fff" }}>
                      <div style={{ fontWeight: 700, marginBottom: 10 }}>💬 Business Case Summary</div>
                      {[
                        ["Annual Platform Cost", "~£37.5k (Kodiak Hub)"],
                        ["Suppliers covered", "400+ across 5 brands"],
                        ["Est. time saving", "10 hrs/wk · ~£34k/yr"],
                        ["Compliance risk reduction", "High — currently manual"],
                        ["ERP integration", "Sage X3 → push/pull via API"],
                      ].map(([k,v]) => (
                        <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid #ffffff15", fontSize: 12 }}>
                          <span style={{ color: "#93c5fd" }}>{k}</span>
                          <span style={{ fontWeight: 700, color: "#fff" }}>{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })()}

      </div>
    </div>
  );
}
