import { useState } from "react";
import {
  X,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Copy,
  Bookmark,
  Check
} from "lucide-react";
export const StandardDetailsModal = ({
  standard,
  onClose,
  onSaveToggle,
  isSaved
}) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [copiedClause, setCopiedClause] = useState(false);
  if (!standard) return null;
  const generatedTenderClause = `The supplied ${standard.title} shall strictly conform to Indian Standard ${standard.isNumber} (incorporating all published amendments). The manufacturer/bidder must hold a valid ${standard.certification.type} issued by the Bureau of Indian Standards (BIS) under the applicable Quality Control Order. Relevant test reports as per ${standard.testMethods[0]?.isNumber || "prescribed BIS procedures"} shall be furnished along with the technical bid.`;
  const handleCopyClause = () => {
    navigator.clipboard.writeText(generatedTenderClause);
    setCopiedClause(true);
    setTimeout(() => setCopiedClause(false), 2e3);
  };
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        
        {
    /* Modal Header */
  }
        <div className="p-5 bg-[#0f172a] text-white flex items-start justify-between gap-4 border-b border-slate-800">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-bold tracking-wider border border-blue-400/30 uppercase">
                {standard.category}
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                CURRENT VERSION (ACTIVE)
              </span>
              <span className="text-xs text-slate-400">
                ICS: <strong className="text-slate-200 font-mono">{standard.icsCode}</strong>
              </span>
            </div>
            
            <h2 className="text-base sm:text-lg font-bold text-white font-mono">
              {standard.isNumber}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-snug">
              {standard.title}
            </p>
            {standard.hindiTitle && <p className="text-xs text-amber-200/80 font-normal">
                {standard.hindiTitle}
              </p>}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
    onClick={() => onSaveToggle(standard)}
    className={`p-1.5 px-3 rounded-lg border text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors ${isSaved ? "bg-[#1e40af] text-white border-blue-500" : "bg-slate-800 text-slate-300 border-slate-700 hover:text-white hover:bg-slate-700"}`}
    title={isSaved ? "Remove from Saved" : "Save Standard"}
  >
              <Bookmark className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isSaved ? "Saved" : "Save"}</span>
            </button>

            <button
    onClick={onClose}
    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
  >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {
    /* Navigation Tabs */
  }
        <div className="flex items-center gap-1 px-5 border-b border-slate-200 bg-slate-50 overflow-x-auto scrollbar-none text-xs">
          {[
    { id: "overview", label: "Overview & Scope" },
    { id: "requirements", label: "Key Requirements" },
    { id: "safety", label: "Safety & Protection" },
    { id: "testing", label: "Test Methods" },
    { id: "references", label: "Normative References" },
    { id: "amendments", label: "Amendments & Timeline" },
    { id: "certification", label: "Mandatory QCO & Tender Clause" }
  ].map((tab) => <button
    key={tab.id}
    onClick={() => setActiveTab(tab.id)}
    className={`px-3 py-2.5 border-b-2 font-semibold whitespace-nowrap transition-colors cursor-pointer ${activeTab === tab.id ? "border-[#1e40af] text-[#1e40af] bg-white" : "border-transparent text-slate-600 hover:text-slate-900"}`}
  >
              {tab.label}
            </button>)}
        </div>

        {
    /* Modal Body Content */
  }
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm text-slate-700">
          
          {
    /* TAB 1: OVERVIEW & SCOPE */
  }
          {activeTab === "overview" && <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase">Technical Committee</div>
                  <div className="text-xs font-bold text-slate-900 mt-0.5">{standard.technicalCommittee}</div>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase">Publication Date</div>
                  <div className="text-xs font-bold text-slate-900 mt-0.5">{standard.publicationDate} (Orig: {standard.originalYear})</div>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase">Certification Status</div>
                  <div className="text-xs font-bold text-emerald-700 mt-0.5">{standard.certification.mandatory ? "Mandatory by QCO" : "Voluntary"}</div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  Standard Overview
                </h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  {standard.overview}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  Scope & Application
                </h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  {standard.scope}
                </p>
              </div>

              {standard.outdatedReplacements && standard.outdatedReplacements.length > 0 && <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-xs">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Supersedes Older / Legacy Indian Standards</span>
                  </div>
                  {standard.outdatedReplacements.map((old, i) => <div key={i} className="text-xs text-amber-800">
                      <strong>Replaces:</strong> <code className="font-mono bg-amber-100 px-1.5 py-0.5 rounded">{old.oldIsNumber}</code>
                      <p className="mt-0.5 text-[11px]">{old.reasonForSupersession}</p>
                    </div>)}
                </div>}
            </div>}

          {
    /* TAB 2: KEY REQUIREMENTS */
  }
          {activeTab === "requirements" && <div className="space-y-4">
              <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                Mandatory Technical & Performance Clauses
              </h3>
              <div className="space-y-2.5">
                {standard.keyRequirements.map((req, i) => <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-800 leading-relaxed">{req}</span>
                  </div>)}
              </div>
            </div>}

          {
    /* TAB 3: SAFETY & PROTECTION */
  }
          {activeTab === "safety" && <div className="space-y-4">
              <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                Safety, Shock & Environmental Protection Requirements
              </h3>
              <div className="space-y-2.5">
                {standard.safetyRequirements.map((req, i) => <div key={i} className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200 flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-800 leading-relaxed">{req}</span>
                  </div>)}
              </div>

              {standard.installationRequirements && standard.installationRequirements.length > 0 && <div className="pt-4 space-y-3">
                  <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                    Installation & Commissioning Guidelines
                  </h3>
                  <div className="space-y-2">
                    {standard.installationRequirements.map((inst, i) => <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                        {inst}
                      </div>)}
                  </div>
                </div>}
            </div>}

          {
    /* TAB 4: TEST METHODS */
  }
          {activeTab === "testing" && <div className="space-y-4">
              <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                Prescribed Laboratory Test Methods & Procedures
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {standard.testMethods.map((tm, i) => <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-xs text-blue-700">{tm.isNumber}</span>
                      <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-200 px-2 py-0.5 rounded">
                        Type Test / Acceptance Test
                      </span>
                    </div>
                    <div className="text-xs font-bold text-slate-900">{tm.name}</div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {tm.parameters.map((p, idx) => <span key={idx} className="text-[11px] font-medium bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600">
                          ✓ {p}
                        </span>)}
                    </div>
                  </div>)}
              </div>
            </div>}

          {
    /* TAB 5: NORMATIVE REFERENCES */
  }
          {activeTab === "references" && <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  Normative References (Cross-Referenced Standards)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {standard.normativeReferences.map((ref, i) => <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-slate-800">{ref}</span>
                      <span className="text-[10px] text-blue-600 font-semibold">Normative</span>
                    </div>)}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  Allied & Complementary Standards
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {standard.alliedStandards.map((ref, i) => <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-slate-800">{ref}</span>
                      <span className="text-[10px] text-indigo-600 font-semibold">Allied</span>
                    </div>)}
                </div>
              </div>
            </div>}

          {
    /* TAB 6: AMENDMENTS & TIMELINE */
  }
          {activeTab === "amendments" && <div className="space-y-6">
              <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                Publication, Reaffirmation & Amendments History
              </h3>

              <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-200">
                
                <div className="relative">
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-slate-400 ring-4 ring-white" />
                  <div className="text-xs font-bold text-slate-900">Original First Formulation</div>
                  <div className="text-[11px] text-slate-500 font-medium">Year {standard.originalYear} • Bureau of Indian Standards</div>
                </div>

                <div className="relative">
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-white" />
                  <div className="text-xs font-bold text-blue-700">Major Revision Publication</div>
                  <div className="text-[11px] text-slate-500 font-medium">{standard.publicationDate} • {standard.currentVersion}</div>
                </div>

                {standard.amendments.map((amd) => <div key={amd.number} className="relative">
                    <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-white" />
                    <div className="text-xs font-bold text-slate-900">
                      Amendment No. {amd.number} ({amd.status})
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">Gazetted on: {amd.date}</div>
                    <p className="text-xs text-slate-700 mt-1 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      {amd.description}
                    </p>
                  </div>)}

              </div>
            </div>}

          {
    /* TAB 7: MANDATORY CERTIFICATION & TENDER CLAUSE */
  }
          {activeTab === "certification" && <div className="space-y-6">
              
              {
    /* QCO Box */
  }
              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-950 text-white space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                    Regulatory Mandate
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">
                    {standard.certification.mandatory ? "Mandatory under Law" : "Voluntary Standard"}
                  </span>
                </div>

                <h4 className="text-base font-extrabold text-white">
                  {standard.certification.type}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {standard.certification.reason}
                </p>

                {standard.certification.qcoNotificationNumber && <div className="pt-2 border-t border-slate-800 text-[11px] text-blue-200">
                    <strong>Notification:</strong> {standard.certification.qcoNotificationNumber}
                  </div>}
              </div>

              {
    /* Ready-to-copy Tender Clause */
  }
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Recommended Model Tender Clause (GFR / GeM Ready):
                  </span>
                  <button
    onClick={handleCopyClause}
    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
  >
                    {copiedClause ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedClause ? "Copied to Clipboard!" : "Copy Clause"}</span>
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800 leading-relaxed">
                  {generatedTenderClause}
                </div>
              </div>

            </div>}

        </div>

        {
    /* Modal Footer */
  }
        <div className="p-4 px-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 hidden sm:inline">
            Bureau of Indian Standards • Ministry of Consumer Affairs
          </span>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
    onClick={handleCopyClause}
    className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 hover:bg-slate-100 transition-colors cursor-pointer"
  >
              {copiedClause ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedClause ? "Clause Copied" : "Copy Tender Clause"}</span>
            </button>

            <button
    onClick={onClose}
    className="px-6 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs cursor-pointer"
  >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>;
};
