import { useState } from "react";
import {
  Sparkles,
  FileText,
  Upload,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Layers,
  ChevronRight,
  FileCheck
} from "lucide-react";
import { SAMPLE_TENDERS } from "../../data/standardsDataset";
export const DashboardView = ({
  onAnalyze,
  onOpenDocUpload,
  onViewRecentAnalysis,
  onNavigate
}) => {
  const [inputText, setInputText] = useState("");
  const [selectedExample, setSelectedExample] = useState("sample-led");
  const stats = [
    {
      label: "Specifications Analyzed",
      value: "1,248",
      change: "+18% this month",
      icon: FileCheck,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      label: "Standards Recommended",
      value: "4,862",
      change: "Covering 24 Product Groups",
      icon: Layers,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      label: "Compliance Checks",
      value: "2,341",
      change: "100% QCO Verified",
      icon: ShieldCheck,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      label: "Potential Gaps Detected",
      value: "387",
      change: "Tender Disputes Avoided",
      icon: AlertTriangle,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    }
  ];
  const recentAnalyses = [
    {
      id: "sample-led",
      product: "LED Street Lighting System (90W/120W)",
      tenderNo: "Tender #MCD-2024-LED-09",
      standardsFound: 12,
      confidence: 94,
      date: "Today, 10:45 AM",
      category: "Lighting & Electrical",
      qcoStatus: "CRS Mandatory"
    },
    {
      id: "sample-helmet",
      product: "Industrial Safety Helmets (Non-Metallic)",
      tenderNo: "Tender #DMRC-PPE-5000",
      standardsFound: 8,
      confidence: 91,
      date: "Yesterday, 04:20 PM",
      category: "Personal Protective Equipment",
      qcoStatus: "ISI Mark Mandatory"
    },
    {
      id: "sample-transformer",
      product: "1000 kVA 11kV/433V Oil Distribution Transformer",
      tenderNo: "Tender #NTPC-TR-1000-02",
      standardsFound: 14,
      confidence: 96,
      date: "28 Aug 2026",
      category: "Power & Distribution",
      qcoStatus: "ISI Mark Scheme I"
    },
    {
      id: "sample-cement",
      product: "Ordinary Portland Cement (OPC 53 Grade)",
      tenderNo: "Tender #NHAI-BRIDGE-CEMENT",
      standardsFound: 9,
      confidence: 89,
      date: "26 Aug 2026",
      category: "Civil & Construction",
      qcoStatus: "ISI Mark Mandatory"
    }
  ];
  const handleApplyExample = (sampleId) => {
    const found = SAMPLE_TENDERS.find((s) => s.id === sampleId);
    if (found) {
      setInputText(found.text);
      setSelectedExample(sampleId);
    }
  };
  const handleAnalyzeSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      onAnalyze(inputText);
    } else {
      const sample = SAMPLE_TENDERS.find((s) => s.id === "sample-led");
      onAnalyze(sample?.text || "Procurement of 1000 LED street lights with IP66 and 120 lm/W efficacy.");
    }
  };
  return <div className="space-y-8">
      
      {
    /* ------------------------------------------------------------- */
  }
      {
    /* TOP STATS ROW */
  }
      {
    /* ------------------------------------------------------------- */
  }
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
    const Icon = stat.icon;
    return <div
      key={i}
      className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-xs transition-shadow"
    >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">{stat.label}</span>
                <div className={`p-2 rounded-xl ${stat.bgColor} ${stat.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-3">
                <span className="text-2xl font-extrabold text-slate-900 tracking-tight">{stat.value}</span>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5 flex items-center gap-1">
                  <span className="text-emerald-600 font-bold">●</span> {stat.change}
                </div>
              </div>
            </div>;
  })}
      </div>


      {
    /* ------------------------------------------------------------- */
  }
      {
    /* CENTRAL BENTO HERO SEARCH / AI FINDER CARD */
  }
      {
    /* ------------------------------------------------------------- */
  }
      <div className="rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8 relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111c38] to-[#1e3a8a] text-white">
        
        <div className="max-w-4xl mx-auto space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-white/10 text-blue-300 border border-white/10">
                  <Sparkles className="w-5 h-5" />
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  What are you procuring?
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Enter product description, technical specifications, or tender requirements. Semantic AI matches Indian Standards (BIS) & compliance mandates.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-slate-300 font-medium hidden sm:inline">Preload Template:</span>
              <select
    value={selectedExample}
    onChange={(e) => handleApplyExample(e.target.value)}
    className="text-xs bg-white/10 border border-white/20 rounded-lg px-2.5 py-1.5 font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6] cursor-pointer"
  >
                {SAMPLE_TENDERS.map((s) => <option key={s.id} value={s.id} className="bg-slate-900 text-white">{s.title}</option>)}
              </select>
            </div>
          </div>

          {
    /* Text Input Area */
  }
          <form onSubmit={handleAnalyzeSubmit} className="space-y-4">
            <div className="relative">
              <textarea
    value={inputText}
    onChange={(e) => setInputText(e.target.value)}
    placeholder="Describe the product, service, or technical requirement... (e.g. Procurement of 1000 LED street lights with minimum 120 lm/W efficacy, IP66 protection, surge protection and outdoor installation requirements.)"
    rows={4}
    className="w-full p-4 text-xs sm:text-sm text-white bg-white/10 border border-white/20 rounded-xl placeholder:text-white/40 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent transition-all leading-relaxed"
  />
              
              {inputText.length > 0 && <button
    type="button"
    onClick={() => setInputText("")}
    className="absolute right-3 top-3 text-xs text-white/70 hover:text-white px-2 py-1 bg-white/10 rounded border border-white/20 cursor-pointer"
  >
                  Clear
                </button>}
            </div>

            {
    /* Prompt Suggestion Chips */
  }
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <span className="font-semibold text-white/70 text-[11px]">Popular searches:</span>
              <button
    type="button"
    onClick={() => handleApplyExample("sample-led")}
    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors cursor-pointer border border-white/10"
  >
                💡 LED Street Light
              </button>
              <button
    type="button"
    onClick={() => handleApplyExample("sample-helmet")}
    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors cursor-pointer border border-white/10"
  >
                ⛑️ Safety Helmet
              </button>
              <button
    type="button"
    onClick={() => handleApplyExample("sample-transformer")}
    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors cursor-pointer border border-white/10"
  >
                ⚡ Distribution Transformer
              </button>
              <button
    type="button"
    onClick={() => handleApplyExample("sample-cement")}
    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors cursor-pointer border border-white/10"
  >
                🏗️ OPC 53 Cement
              </button>
              <button
    type="button"
    onClick={() => handleApplyExample("sample-hindi-led")}
    className="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 font-medium transition-colors cursor-pointer border border-amber-400/30"
  >
                🇮🇳 हिन्दी इनपुट (Hindi)
              </button>
            </div>

            {
    /* Action Buttons */
  }
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Validates against 100+ BIS Gazette & QCO Orders</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
    type="button"
    onClick={onOpenDocUpload}
    className="w-1/2 sm:w-auto px-4 py-2.5 rounded-lg border border-white/20 hover:bg-white/10 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
  >
                  <Upload className="w-4 h-4 text-slate-300" />
                  <span>Upload Tender Document</span>
                </button>

                <button
    type="submit"
    className="w-1/2 sm:w-auto px-6 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-[#0f172a] text-xs font-black flex items-center justify-center gap-2 shadow-sm hover:scale-101 transition-all cursor-pointer"
  >
                  <Sparkles className="w-4 h-4 text-[#1e40af]" />
                  <span>Analyze with AI</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0f172a]" />
                </button>
              </div>
            </div>

          </form>

        </div>

      </div>


      {
    /* ------------------------------------------------------------- */
  }
      {
    /* RECENT ANALYSES & BENCHMARK DIRECTORY */
  }
      {
    /* ------------------------------------------------------------- */
  }
      <div className="space-y-4">
        
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-extrabold text-slate-900">Recent Procurement Analyses</h3>
            <p className="text-xs text-slate-500">Verified recommendations generated for active tenders</p>
          </div>
          
          <button
    onClick={() => onNavigate("history")}
    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
  >
            <span>View All Search History</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
          <div className="divide-y divide-slate-100">
            {recentAnalyses.map((item) => <div
    key={item.id}
    onClick={() => onViewRecentAnalysis(item.id)}
    className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-blue-50/40 transition-colors cursor-pointer group"
  >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-blue-100 group-hover:text-blue-700 text-slate-600 flex items-center justify-center shrink-0 transition-colors">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {item.product}
                      </h4>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {item.tenderNo}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500 mt-1 flex-wrap">
                      <span>Category: <strong className="text-slate-700 font-medium">{item.category}</strong></span>
                      <span>•</span>
                      <span>Analyzed: <strong className="text-slate-700 font-medium">{item.date}</strong></span>
                      <span>•</span>
                      <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded text-[10px] border border-emerald-200/60">
                        {item.qcoStatus}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <div className="text-left sm:text-right">
                    <div className="text-xs font-bold text-slate-900">
                      {item.standardsFound} standards found
                    </div>
                    <div className="text-[11px] text-blue-600 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>{item.confidence}% AI Confidence</span>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-slate-400 flex items-center justify-center transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

              </div>)}
          </div>
        </div>

      </div>

    </div>;
};
