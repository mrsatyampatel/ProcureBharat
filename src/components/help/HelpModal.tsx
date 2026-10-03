import React from 'react';
import { 
  X, 
  HelpCircle, 
  ShieldCheck, 
  Compass, 
  Layers, 
  BookOpen, 
  Award, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

interface HelpModalProps {
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-xl border border-slate-200 shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-4 px-5 bg-[#0f172a] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#3b82f6]" />
            <span className="font-bold text-sm text-white">
              StandardsAI User & Regulatory Guidelines
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-5 text-xs text-slate-700 leading-relaxed flex-1">
          
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1e40af]">
              Department of Consumer Affairs (DoCA) • Problem Statement ID #26108
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong>Objective:</strong> Develop an AI-powered recommendation engine that helps government departments, PSUs, procurement agencies, and private organizations identify the most relevant Indian Standards (IS) while preparing procurement and tender specifications.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-bold text-[#0f172a]">1. Standards Taxonomy & Categorization</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <strong className="text-[#1e40af] block">Primary Standards:</strong>
                <span>Directly defines product physical, electrical, and performance baselines.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <strong className="text-indigo-700 block">Allied Standards:</strong>
                <span>Covers efficiency, environmental durability, and complementary sub-assemblies.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <strong className="text-slate-800 block">Normative References:</strong>
                <span>Underlying standards called out inside the text of the primary standard.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <strong className="text-emerald-700 block">Test Methods:</strong>
                <span>Prescribed laboratory inspection routines (NABL accreditation requirements).</span>
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <h4 className="text-sm font-bold text-[#0f172a]">2. Mandatory Certification Framework (QCO)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Under Section 16 of the Bureau of Indian Standards Act 2016, Central Ministries notify mandatory Quality Control Orders (QCOs). Public procurement officials are legally required to verify that vendors possess either a valid <strong>BIS ISI Mark (Scheme I)</strong> or <strong>CRS Registration (Scheme II)</strong>.
            </p>
          </div>

          <div className="space-y-1.5">
            <h4 className="text-sm font-bold text-[#0f172a]">3. GFR 2017 Rule 144 Compliance</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              General Financial Rules (GFR) 2017 dictate that technical specifications shall meet essential quality and performance requirements without being vendor-biased. Recommending official Indian Standards ensures non-discriminatory and legally robust tender dossiers.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-slate-100 border border-slate-200 text-slate-500 text-[11px]">
            <strong>Note:</strong> This prototype is built for demonstration purposes. All AI-generated standards and tender clauses should be cross-referenced with latest BIS Gazette notifications prior to live contract awarding.
          </div>

        </div>

        {/* Footer */}
        <div className="p-3.5 px-5 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-1.5 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white font-bold text-xs cursor-pointer shadow-2xs"
          >
            Got it
          </button>
        </div>

      </div>
    </div>
  );
};
