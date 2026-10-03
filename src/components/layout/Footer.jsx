import { Compass, ShieldCheck, ExternalLink, Award, FileText, CheckCircle } from "lucide-react";
export const Footer = ({ onNavigate }) => {
  return <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-xs mt-16">
      {
    /* Top Value Banner */
  }
      <div className="border-b border-slate-800 bg-slate-950/60 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-900/40 text-blue-400 flex items-center justify-center shrink-0 border border-blue-800/40">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-slate-200 font-bold text-xs">Bureau of Indian Standards</div>
              <div className="text-[11px] text-slate-400">Aligned with official BIS Gazette specifications</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-900/40 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-800/40">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-slate-200 font-bold text-xs">Quality Control Orders (QCO)</div>
              <div className="text-[11px] text-slate-400">Mandatory Scheme I & CRS certification checks</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-900/40 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-800/40">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-slate-200 font-bold text-xs">GeM & GFR 2017 Compliant</div>
              <div className="text-[11px] text-slate-400">Prevents tender disputes & ambiguity</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-900/40 text-amber-400 flex items-center justify-center shrink-0 border border-amber-800/40">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-slate-200 font-bold text-xs">Multilingual Semantic AI</div>
              <div className="text-[11px] text-slate-400">Supports Hindi, Hinglish & technical queries</div>
            </div>
          </div>
        </div>
      </div>

      {
    /* Main Footer Links */
  }
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Standards<span className="text-blue-400">AI</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4 max-w-sm">
              AI-Powered Indian Standards Intelligence Engine for identifying applicable BIS standards, allied references, latest amendments, test methods, and mandatory certifications for public and private procurement.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Department of Consumer Affairs (DoCA) • Problem ID 26108
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Capabilities</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onNavigate("ai-finder")} className="hover:text-white transition-colors cursor-pointer">AI Semantic Standard Finder</button></li>
              <li><button onClick={() => onNavigate("doc-analyzer")} className="hover:text-white transition-colors cursor-pointer">Tender Document Analyzer</button></li>
              <li><button onClick={() => onNavigate("compliance")} className="hover:text-white transition-colors cursor-pointer">Mandatory QCO Tracker</button></li>
              <li><button onClick={() => onNavigate("ai-finder")} className="hover:text-white transition-colors cursor-pointer">Outdated Standard Detection</button></li>
              <li><button onClick={() => onNavigate("ai-finder")} className="hover:text-white transition-colors cursor-pointer">Specification Gap Analysis</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Product Sectors</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="hover:text-white cursor-pointer">LED Lighting & Luminaires</span></li>
              <li><span className="hover:text-white cursor-pointer">Power & Distribution Transformers</span></li>
              <li><span className="hover:text-white cursor-pointer">Cement & Construction (OPC/PPC)</span></li>
              <li><span className="hover:text-white cursor-pointer">TMT Steel & Structural Bars</span></li>
              <li><span className="hover:text-white cursor-pointer">Solar PV Modules & Inverters</span></li>
              <li><span className="hover:text-white cursor-pointer">Personal Protective Equipment (PPE)</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Official Portals</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://www.services.bis.gov.in" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1">
                  BIS Portal (e-BIS) <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://gem.gov.in" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1">
                  Government e-Marketplace (GeM) <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://eprocure.gov.in" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1">
                  Central Public Procurement (CPPP) <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://consumeraffairs.nic.in" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1">
                  Dept of Consumer Affairs <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {
    /* Disclaimer Banner */
  }
        <div className="mt-8 pt-6 border-t border-slate-800 text-[11px] text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="leading-relaxed text-center md:text-left">
            <strong className="text-slate-400">Important Disclaimer:</strong> AI-generated recommendations are intended to assist procurement professionals and specification drafters. All recommendations should be verified against the latest official Bureau of Indian Standards (BIS) publications and Gazette notifications before final tender approval.
          </p>
          <div className="shrink-0 text-slate-400 font-medium">
            © 2026 StandardsAI • Smart Automation Hackathon Prototype
          </div>
        </div>

      </div>
    </footer>;
};
