import { useState } from "react";
import {
  Share2,
  Copy,
  Check,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { SAMPLE_TENDERS } from "../../data/standardsDataset";
export const IntegrationView = ({ onRunTenderAudit }) => {
  const [tenderIdInput, setTenderIdInput] = useState("GEM/2026/B/4901823");
  const [copiedGeMJSON, setCopiedGeMJSON] = useState(false);
  const gemCategories = [
    {
      gemCode: "GEM-CAT-LED-889",
      name: "LED Street Lighting Luminaires (Outdoor)",
      primaryIS: "IS 10322 (Part 5/Sec 3):2012",
      qcoMandate: "MeitY CRS Order 2021",
      goldenParameters: "Efficacy \u2265 120 lm/W, THD < 10%, IP66, 10kV Surge"
    },
    {
      gemCode: "GEM-CAT-TR-102",
      name: "Distribution Transformers (11kV / 433V)",
      primaryIS: "IS 1180 (Part 1):2014",
      qcoMandate: "MoP Quality Order & BEE Star Rating",
      goldenParameters: "Copper Winding, Max Loss Level 2, Mineral Oil to IS 335"
    },
    {
      gemCode: "GEM-CAT-PPE-450",
      name: "Industrial Safety Helmets (Non-Metallic)",
      primaryIS: "IS 2925:1984",
      qcoMandate: "DPIIT PPE QCO 2021 (ISI Mark Mandatory)",
      goldenParameters: "5kN Impact Absorption, 2000V Dielectric Resistance"
    },
    {
      gemCode: "GEM-CAT-CEM-991",
      name: "Ordinary Portland Cement (53 Grade)",
      primaryIS: "IS 269:2015",
      qcoMandate: "DPIIT Cement QCO 2003 (ISI Mark Mandatory)",
      goldenParameters: "28-day Compressive Strength \u2265 53 MPa, Le-Chatelier < 10mm"
    }
  ];
  const sampleGeMIntegrationPayload = {
    gemTenderId: tenderIdInput,
    validationEngine: "StandardsAI - DoCA BIS Intelligence",
    complianceScore: "100%",
    mandatoryClauses: [
      {
        parameter: "Product Standard",
        mandatoryValue: "IS 10322 (Part 5/Sec 3):2012 with Amendment 2",
        verificationDocument: "BIS CRS License & NABL Lab Test Report"
      },
      {
        parameter: "Driver & Safety Standard",
        mandatoryValue: "IS 15885 (Part 2/Sec 13):2012",
        verificationDocument: "BIS Registration Certificate"
      },
      {
        parameter: "Ingress Protection",
        mandatoryValue: "IP66 as per IS 12063:1987 (IEC 60529)",
        verificationDocument: "Government/NABL Accredited Test Certificate"
      }
    ]
  };
  const handleCopyGeMPayload = () => {
    navigator.clipboard.writeText(JSON.stringify(sampleGeMIntegrationPayload, null, 2));
    setCopiedGeMJSON(true);
    setTimeout(() => setCopiedGeMJSON(false), 2e3);
  };
  return <div className="space-y-6 animate-in fade-in max-w-5xl mx-auto">
      
      {
    /* Header */
  }
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-blue-50 text-[#1e40af]">
            <Share2 className="w-5 h-5" />
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-[#0f172a] tracking-tight">
            Government e-Marketplace (GeM) & CPPP Tender Integration
          </h1>
        </div>
        <p className="text-xs text-slate-500">
          Seamlessly validate tender parameters against GeM Golden Parameters and BIS Quality Control Orders to prevent specification rigging and legal disputes.
        </p>
      </div>

      {
    /* GeM Tender Validator Card */
  }
      <div className="bento-card space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-[#0f172a]">
              Audit GeM Bid or CPPP Tender Document
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Enter a GeM Bid Number or paste tender specification text to audit compliance
            </p>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
            GeM API Ready
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <input
    type="text"
    value={tenderIdInput}
    onChange={(e) => setTenderIdInput(e.target.value)}
    placeholder="e.g. GEM/2026/B/4901823"
    className="w-full px-3.5 py-2 text-xs sm:text-sm font-mono bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:bg-white"
  />
          </div>

          <button
    onClick={() => onRunTenderAudit(SAMPLE_TENDERS[0].text)}
    className="px-5 py-2 rounded-lg bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-2xs cursor-pointer shrink-0"
  >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Audit Bid Specifications</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {
    /* Integration JSON Output */
  }
        <div className="p-4 rounded-lg bg-[#0f172a] text-slate-200 font-mono text-xs space-y-2 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
            <span className="text-[11px] font-bold">GeM Technical Evaluation Criteria Payload</span>
            <button
    onClick={handleCopyGeMPayload}
    className="text-[11px] text-[#3b82f6] hover:text-blue-300 flex items-center gap-1 cursor-pointer font-sans"
  >
              {copiedGeMJSON ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedGeMJSON ? "Copied JSON" : "Copy JSON Payload"}</span>
            </button>
          </div>
          <pre className="text-[11px] text-emerald-400 overflow-x-auto p-2 bg-slate-950 rounded">
            {JSON.stringify(sampleGeMIntegrationPayload, null, 2)}
          </pre>
        </div>
      </div>

      {
    /* GeM Product Category & Golden Parameters Table */
  }
      <div className="space-y-3">
        <h3 className="text-base font-bold text-[#0f172a]">
          GeM Product Category & Indian Standards Alignment Matrix
        </h3>
        
        <div className="grid grid-cols-1 gap-3">
          {gemCategories.map((cat, i) => <div key={i} className="bento-card p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                    {cat.gemCode}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0f172a]">
                    {cat.name}
                  </h4>
                </div>

                <div className="text-xs text-slate-600 pt-0.5">
                  <strong>Mandated BIS Standard:</strong> <code className="font-mono text-[#1e40af] font-bold bg-blue-50 px-1.5 py-0.5 rounded">{cat.primaryIS}</code>
                </div>

                <p className="text-[11px] text-slate-500">
                  <strong>Golden Parameters:</strong> {cat.goldenParameters}
                </p>
              </div>

              <div className="text-left sm:text-right shrink-0">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 inline-block">
                  {cat.qcoMandate}
                </span>
              </div>
            </div>)}
        </div>
      </div>

    </div>;
};
