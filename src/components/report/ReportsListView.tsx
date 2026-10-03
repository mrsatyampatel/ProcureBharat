import React from 'react';
import { 
  FileSpreadsheet, 
  Download, 
  FileText, 
  Calendar, 
  ShieldCheck, 
  ExternalLink, 
  Search, 
  Sparkles,
  ChevronRight,
  Eye
} from 'lucide-react';
import { AnalysisReport } from '../../types/standards';

interface ReportsListViewProps {
  reports: AnalysisReport[];
  onOpenReport: (report: AnalysisReport) => void;
  onOpenExportModal: (report: AnalysisReport) => void;
  onNavigateToFinder: () => void;
}

export const ReportsListView: React.FC<ReportsListViewProps> = ({
  reports,
  onOpenReport,
  onOpenExportModal,
  onNavigateToFinder
}) => {
  return (
    <div className="space-y-6 animate-in fade-in pb-12 max-w-7xl mx-auto">
      
      {/* Header Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-3">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-700 text-[11px] font-bold tracking-wide uppercase border border-amber-200 flex items-center gap-1">
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span>Procurement Dossiers & Audit Archives</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Standard Compliance Reports & Export Dossiers
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              Export comprehensive technical dossiers, GFR Rule 144 neutrality certifications, and standard cross-reference tables in PDF, Word, or CSV format for GeM and public tender packages.
            </p>
          </div>

          <button
            onClick={onNavigateToFinder}
            className="px-5 py-2.5 rounded-xl bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold text-xs flex items-center gap-2 shadow-sm cursor-pointer transition-all shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>Generate New Report</span>
          </button>
        </div>
      </div>

      {/* Reports Table / List */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-sm font-bold text-[#0f172a]">
            Archived Procurement Reports ({reports.length})
          </h2>
          <span className="text-xs text-slate-400">
            Certified compliant with CVC & GFR public procurement guidelines
          </span>
        </div>

        {reports.length === 0 ? (
          <div className="p-12 text-center space-y-3">
            <FileText className="w-10 h-10 text-slate-300 mx-auto" />
            <p className="text-xs text-slate-500">No reports generated yet.</p>
            <button
              onClick={onNavigateToFinder}
              className="px-4 py-2 bg-[#1d4ed8] text-white text-xs font-bold rounded-xl cursor-pointer"
            >
              Analyze a Specification
            </button>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {reports.map((rep) => (
              <div 
                key={rep.id}
                className="p-5 hover:bg-slate-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-[#1d4ed8] font-mono text-[10px] font-bold border border-blue-100">
                      {rep.id}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>{rep.overallConfidence}% Match</span>
                    </span>
                    <span className="text-slate-400 text-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(rep.generatedAt).toLocaleDateString()}</span>
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {rep.identifiedProduct}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-1 leading-relaxed">
                    {rep.summary}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => onOpenReport(rep)}
                    className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Report</span>
                  </button>

                  <button
                    onClick={() => onOpenExportModal(rep)}
                    className="px-4 py-2 rounded-xl bg-[#1d4ed8] hover:bg-[#1e40af] text-white text-xs font-bold flex items-center gap-1.5 shadow-2xs cursor-pointer transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export Dossier</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
