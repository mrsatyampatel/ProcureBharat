import { useState } from "react";
import {
  BarChart2,
  ShieldCheck,
  Copy,
  Check,
  Sparkles,
  Scale
} from "lucide-react";
import { SAMPLE_TENDERS } from "../../data/standardsDataset";
export const GapAnalysisView = ({ onRunAudit }) => {
  const [selectedSample, setSelectedSample] = useState("sample-led");
  const [customText, setCustomText] = useState("");
  const [copiedId, setCopiedId] = useState(null);
  const sampleTender = SAMPLE_TENDERS.find((s) => s.id === selectedSample) || SAMPLE_TENDERS[0];
  const commonGaps = [
    {
      id: "gap-1",
      title: "Missing Photobiological & Blue Light Safety Norm",
      standard: "IS 16108:2012 / IEC 62471",
      severity: "Critical",
      description: "Tender specification misses photobiological eye safety risk group classification (RG0/RG1). Public lighting tenders must specify non-hazardous exposure limits.",
      suggestedClause: "The LED luminaires shall comply with photobiological safety requirements as per IS 16108:2012 / IEC 62471, classified as Risk Group 0 (Exempt) or Risk Group 1 (Low Risk)."
    },
    {
      id: "gap-2",
      title: "Omission of Surge Protection Immunity Class",
      standard: "IS 10322 (Part 5/Sec 3):2012",
      severity: "High",
      description: "Indian grid conditions mandate 10 kV/5 kA external surge protection device (SPD) testing to prevent pre-mature driver failures.",
      suggestedClause: "The luminaire shall be equipped with internal and external Surge Protection Device (SPD) rated for minimum 10 kV / 5 kA withstand capacity in accordance with IS 10322 (Part 5/Sec 3)."
    },
    {
      id: "gap-3",
      title: "Lack of Ingress Protection & Dust Infiltration Testing",
      standard: "IS 12063:1987 (IP66)",
      severity: "High",
      description: "Failure to specify laboratory IP66 test protocol enables substandard gaskets leading to moisture ingress in monsoon conditions.",
      suggestedClause: "Complete luminaire fitting including optical compartment and control gear cavity shall possess IP66 Ingress Protection certified under IS 12063:1987."
    },
    {
      id: "gap-4",
      title: "Missing Mandatory QCO Registration Clause",
      standard: "BIS CRS Scheme (Order S.O. 2357(E))",
      severity: "Critical",
      description: "Under Ministry Quality Control Orders, LED products cannot be supplied without valid BIS Compulsory Registration Scheme (CRS) R-number.",
      suggestedClause: "The offered model must possess active BIS Compulsory Registration Scheme (CRS) license under IS 10322 (Part 5/Sec 3):2012 with valid R-number marked on the product body."
    }
  ];
  const handleCopy = (clause, id) => {
    navigator.clipboard.writeText(clause);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2e3);
  };
  const handleStartScan = () => {
    const textToScan = customText.trim() || sampleTender.text;
    onRunAudit(textToScan);
  };
  return <div className="space-y-6 animate-in fade-in pb-12 max-w-7xl mx-auto">
      
      {
    /* Header Banner */
  }
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-700 text-[11px] font-bold tracking-wide uppercase border border-purple-200 flex items-center gap-1">
            <BarChart2 className="w-3.5 h-3.5" />
            <span>Tender & Specification Gap Scanner</span>
          </span>
          <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>GFR Rule 144 Compliant</span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
          AI Specification Gap & Dispute Risk Analyzer
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          Audit procurement drafts against official Bureau of Indian Standards baselines. Identify omitted safety tests, missing quality control orders, and non-neutral proprietary clauses before floating public tenders.
        </p>
      </div>

      {
    /* Input / Scanner Section */
  }
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {
    /* Left 8 cols: Live Gap Auditor Form */
  }
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <h2 className="text-sm font-bold text-[#0f172a]">
                Select Pre-Loaded Tender Sample or Paste Your Specification
              </h2>

              {
    /* Sample Selector */
  }
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                {SAMPLE_TENDERS.slice(0, 4).map((sample) => <button
    key={sample.id}
    onClick={() => {
      setSelectedSample(sample.id);
      setCustomText("");
    }}
    className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap cursor-pointer transition-all ${selectedSample === sample.id && !customText ? "bg-[#1d4ed8] text-white shadow-2xs" : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"}`}
  >
                    {sample.title.split(" ")[0]} {sample.title.split(" ")[1] || ""}
                  </button>)}
              </div>
            </div>

            {
    /* Textarea */
  }
            <div className="space-y-2">
              <textarea
    value={customText || sampleTender.text}
    onChange={(e) => setCustomText(e.target.value)}
    rows={6}
    placeholder="Paste tender specifications, requirements or bill of materials..."
    className="w-full p-4 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 bg-slate-50 font-mono leading-relaxed"
  />
            </div>

            {
    /* Run Button */
  }
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-500 font-medium">
                Audits against 24 Product Groups & 22,000+ Indian Standards
              </span>

              <button
    onClick={handleStartScan}
    className="px-6 py-2.5 rounded-xl bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold text-xs flex items-center gap-2 shadow-sm cursor-pointer transition-all"
  >
                <Sparkles className="w-4 h-4" />
                <span>Run Complete AI Gap Audit</span>
              </button>
            </div>

          </div>

          {
    /* Benchmark Gaps List */
  }
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-[#0f172a]">
              Common Benchmark Gaps Detected in Public Tenders
            </h2>

            <div className="grid grid-cols-1 gap-3">
              {commonGaps.map((gap) => <div
    key={gap.id}
    className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3"
  >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${gap.severity === "Critical" ? "bg-rose-100 text-rose-800 border border-rose-200" : "bg-amber-100 text-amber-800 border border-amber-200"}`}>
                        {gap.severity} Risk
                      </span>
                      <h4 className="text-sm font-bold text-[#0f172a]">{gap.title}</h4>
                    </div>

                    <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {gap.standard}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {gap.description}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                        Standardized Clause to Insert:
                      </span>
                      <button
    onClick={() => handleCopy(gap.suggestedClause, gap.id)}
    className="text-xs font-bold text-[#1d4ed8] hover:underline flex items-center gap-1 cursor-pointer"
  >
                        {copiedId === gap.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedId === gap.id ? "Copied" : "Copy Clause"}</span>
                      </button>
                    </div>
                    <p className="text-xs font-mono text-slate-800 bg-white p-2.5 rounded-lg border border-slate-200 leading-snug">
                      "{gap.suggestedClause}"
                    </p>
                  </div>

                </div>)}
            </div>

          </div>

        </div>

        {
    /* Right 4 cols: Audit Benefits & GFR Anti-Rigging Check */
  }
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 text-[#0f172a]">
              <Scale className="w-4 h-4 text-[#1d4ed8]" />
              <h3 className="text-xs font-bold uppercase tracking-wider">
                GFR 2017 Anti-Rigging Rules
              </h3>
            </div>
            
            <p className="text-xs text-slate-600 leading-relaxed">
              Rule 144 of the General Financial Rules (GFR) 2017 prohibits restrictive technical specifications that tailor tenders towards particular vendors.
            </p>

            <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 space-y-1">
              <div className="font-bold">Automated Neutrality Checks:</div>
              <ul className="space-y-1 list-disc list-inside text-[11px] text-blue-800 pt-1">
                <li>Detects proprietary dimensions favoring single OEMs</li>
                <li>Converts brand trademarks to BIS performance norms</li>
                <li>Validates non-discriminatory test lab requirements</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-[#0f172a]">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <h3 className="text-xs font-bold uppercase tracking-wider">
                Prevented Dispute Statistics
              </h3>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Total Audits Conducted:</span>
                <span className="font-bold text-slate-900">2,341</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Tender Disputes Averted:</span>
                <span className="font-bold text-emerald-600">387 Cases</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Average Completeness Gain:</span>
                <span className="font-bold text-[#1d4ed8]">+34% Coverage</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>;
};
