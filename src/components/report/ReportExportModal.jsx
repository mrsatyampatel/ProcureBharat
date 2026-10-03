import { useRef } from "react";
import {
  X,
  Printer,
  FileSpreadsheet,
  ShieldCheck,
  Compass
} from "lucide-react";
export const ReportExportModal = ({
  report,
  onClose
}) => {
  const printRef = useRef(null);
  const handlePrint = () => {
    window.print();
  };
  const handleExportCSV = () => {
    const rows = [
      ["IS Number", "Standard Title", "Category", "Relevance Score", "Status", "Mandatory Certification", "Why Recommended"],
      ...report.recommendations.map((r) => [
        `"${r.standard.isNumber}"`,
        `"${r.standard.title.replace(/"/g, '""')}"`,
        `"${r.standard.category}"`,
        `"${r.relevanceScore}%"`,
        `"${r.standard.status}"`,
        `"${r.standard.certification.type}"`,
        `"${r.whyRecommended.replace(/"/g, '""')}"`
      ])
    ];
    const csvContent = "data:text/csv;charset=utf-8," + rows.map((e) => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `StandardsAI_Recommendation_Report_${report.id}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden">
        
        {
    /* Modal Top Control Bar */
  }
        <div className="p-4 px-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-blue-400" />
            <span className="font-bold text-sm text-white">
              Official Recommendation Report Preview (Report ID: {report.id})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
    onClick={handleExportCSV}
    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
  >
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
              <span>Export CSV</span>
            </button>

            <button
    onClick={handlePrint}
    className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer"
  >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
    onClick={onClose}
    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white cursor-pointer"
  >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {
    /* Printable Report Document Sheet */
  }
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-100 flex-1">
          <div
    ref={printRef}
    className="bg-white max-w-3xl mx-auto p-8 sm:p-12 shadow-sm rounded-2xl border border-slate-200 text-slate-900 space-y-8 print:p-0 print:border-none print:shadow-none"
  >
            
            {
    /* Report Header */
  }
            <div className="border-b-2 border-slate-900 pb-6 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-slate-600 text-xs font-bold uppercase tracking-wider mb-1">
                  <span>Ministry of Consumer Affairs • Dept. of Consumer Affairs (DoCA)</span>
                </div>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight">
                  Standards<span className="text-blue-700">AI</span> Recommendation Report
                </h1>
                <p className="text-xs text-slate-500 mt-0.5">
                  AI-Powered Indian Standards Intelligence for Procurement Specifications
                </p>
              </div>

              <div className="text-right text-xs text-slate-500 font-mono shrink-0">
                <div><strong>Report ID:</strong> {report.id}</div>
                <div><strong>Date:</strong> {new Date(report.timestamp).toLocaleDateString()}</div>
                <div><strong>Confidence:</strong> <span className="text-blue-700 font-bold">{report.overallConfidence}%</span></div>
              </div>
            </div>

            {
    /* Procurement Scope Summary */
  }
            <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
              <div className="text-[11px] font-bold text-slate-400 uppercase">Analyzed Requirement</div>
              <div className="font-bold text-slate-900 text-sm">{report.identifiedProduct}</div>
              <p className="text-slate-600 leading-relaxed italic mt-1 font-mono text-[11px]">
                "{report.queryOrDocName}"
              </p>
              <div className="flex items-center gap-4 text-slate-500 pt-2 border-t border-slate-200 text-[11px]">
                <span>Category: <strong>{report.detectedProductCategory}</strong></span>
                <span>•</span>
                <span>Language: <strong>{report.inputLanguage}</strong></span>
                <span>•</span>
                <span>Format: <strong>{report.inputType}</strong></span>
              </div>
            </div>

            {
    /* Primary Recommended Standards */
  }
            <div className="space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                1. Applicable Primary Indian Standards (BIS)
              </h3>
              
              <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden text-xs">
                {report.recommendations.map((rec, i) => <div key={i} className="p-4 space-y-2 bg-white">
                    <div className="flex items-center justify-between">
                      <div className="font-mono font-bold text-blue-700 text-sm">
                        {rec.standard.isNumber}
                      </div>
                      <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {rec.relevanceScore}% Relevance ({rec.matchLevel})
                      </span>
                    </div>

                    <div className="font-bold text-slate-900">{rec.standard.title}</div>

                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      <strong>AI Justification:</strong> {rec.whyRecommended}
                    </p>

                    <div className="flex items-center gap-2 flex-wrap pt-1 text-[11px] text-slate-500">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        Status: <strong>{rec.standard.status}</strong>
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        Committee: <strong>{rec.standard.technicalCommittee}</strong>
                      </span>
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 font-semibold">
                        {rec.standard.certification.type}
                      </span>
                    </div>
                  </div>)}
              </div>
            </div>

            {
    /* Mandatory Certifications & QCO Orders */
  }
            <div className="space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                2. Mandatory Regulatory Orders & Quality Control (QCO)
              </h3>

              <div className="grid grid-cols-1 gap-2 text-xs">
                {report.mandatoryCertifications.map((cert, i) => <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="text-slate-900">{cert.title}</strong>
                        <span className="text-[10px] font-bold px-1.5 py-0.2 bg-emerald-100 text-emerald-800 rounded">
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-slate-600 text-[11px] mt-0.5">{cert.details}</p>
                    </div>
                  </div>)}
              </div>
            </div>

            {
    /* Potential Specification Gaps & Suggested Clauses */
  }
            {report.specificationGaps && report.specificationGaps.length > 0 && <div className="space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                  3. Specification Gap Analysis & Corrective Clauses
                </h3>

                <div className="space-y-2 text-xs">
                  {report.specificationGaps.map((gap) => <div key={gap.id} className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${gap.severity === "Critical" ? "bg-rose-100 text-rose-800" : "bg-amber-100 text-amber-800"}`}>
                          {gap.severity} GAP
                        </span>
                        <strong className="text-slate-900">{gap.title}</strong>
                      </div>
                      <p className="text-slate-600 text-[11px]">{gap.description}</p>
                      <div className="p-2.5 rounded-lg bg-white border border-amber-200 text-[11px] font-mono text-slate-800">
                        <strong>Suggested Tender Clause:</strong> {gap.suggestedTenderClause}
                      </div>
                    </div>)}
                </div>
              </div>}

            {
    /* Outdated Reference Alerts */
  }
            {report.outdatedAlerts && report.outdatedAlerts.length > 0 && <div className="space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-rose-800 border-b border-rose-200 pb-1">
                  4. Outdated Standard References Superseded
                </h3>
                <div className="space-y-2 text-xs">
                  {report.outdatedAlerts.map((alert, i) => <div key={i} className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 space-y-1">
                      <div className="font-bold">Superseded Reference: {alert.detectedOldNumber}</div>
                      <p className="text-[11px] text-rose-800">{alert.reason}</p>
                      <div className="text-[11px] font-semibold text-emerald-800">
                        Update to: {alert.replacementIsNumber}
                      </div>
                    </div>)}
                </div>
              </div>}

            {
    /* Official Report Disclaimer */
  }
            <div className="pt-6 border-t border-slate-200 text-[11px] text-slate-500 space-y-1 text-center">
              <p className="font-bold text-slate-700">
                Department of Consumer Affairs (DoCA) • AI Recommendation Prototype Demo
              </p>
              <p className="text-[10px]">
                AI-generated recommendations are intended to assist procurement professionals and specification drafters. All standards, amendments, and quality control orders must be verified against the latest official Bureau of Indian Standards publications prior to tender issuance.
              </p>
            </div>

          </div>
        </div>

        {
    /* Modal Bottom Footer */
  }
        <div className="p-4 px-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Export ready for Tender Specification Dossier & GeM uploading
          </span>
          <button
    onClick={onClose}
    className="px-6 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs cursor-pointer"
  >
            Close Preview
          </button>
        </div>

      </div>
    </div>;
};
