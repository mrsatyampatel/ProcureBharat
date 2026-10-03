import React, { useState } from 'react';
import { 
  History, 
  Search, 
  Trash2, 
  ArrowRight, 
  FileText, 
  Clock, 
  Sparkles, 
  CheckCircle2,
  Calendar,
  Layers
} from 'lucide-react';
import { AnalysisReport } from '../../types/standards';

interface HistoryViewProps {
  historyReports: AnalysisReport[];
  onSelectReport: (report: AnalysisReport) => void;
  onClearHistory: () => void;
  onDeleteReport: (id: string) => void;
  onNavigateToFinder: () => void;
}

export const HistoryView: React.FC<HistoryViewProps> = ({
  historyReports,
  onSelectReport,
  onClearHistory,
  onDeleteReport,
  onNavigateToFinder
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = historyReports.filter(r =>
    r.identifiedProduct.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.queryOrDocName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.detectedProductCategory.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-blue-50 text-[#1e40af]">
              <History className="w-5 h-5" />
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-[#0f172a] tracking-tight">
              Search & Analysis History
            </h1>
          </div>
          <p className="text-xs text-slate-500">
            Previously generated Indian Standards recommendation reports and tender analyses.
          </p>
        </div>

        {historyReports.length > 0 && (
          <button
            onClick={onClearHistory}
            className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 text-slate-600 text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-2xs transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear History</span>
          </button>
        )}
      </div>

      {historyReports.length === 0 ? (
        /* Empty State */
        <div className="bento-card p-12 text-center max-w-lg mx-auto space-y-4 shadow-sm">
          <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#1e40af] flex items-center justify-center mx-auto">
            <History className="w-7 h-7" />
          </div>

          <div className="space-y-1">
            <h3 className="text-base font-bold text-[#0f172a]">
              No previous analyses recorded
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Run an AI analysis on a procurement query or tender document to automatically store and review recommendations here.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={onNavigateToFinder}
              className="px-5 py-2 rounded-lg bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-bold text-xs flex items-center gap-2 mx-auto cursor-pointer shadow-2xs"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Start New Analysis</span>
            </button>
          </div>
        </div>
      ) : (
        /* History List */
        <div className="space-y-3">
          <div className="bento-card py-3 flex items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search history by product or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:bg-white"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5 pointer-events-none" />
            </div>

            <div className="text-xs font-semibold text-slate-500">
              {filtered.length} saved reports
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {filtered.map(report => (
              <div
                key={report.id}
                className="bento-card flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-slate-300 transition-colors group"
              >
                <div 
                  onClick={() => onSelectReport(report)}
                  className="space-y-1.5 flex-1 cursor-pointer"
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-[#1e40af] text-[10px] font-bold uppercase border border-blue-200">
                      {report.detectedProductCategory}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Report #{report.id}
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{new Date(report.timestamp).toLocaleString()}</span>
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#0f172a] group-hover:text-[#1e40af] transition-colors">
                    {report.identifiedProduct}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-1 italic font-mono text-[11px]">
                    "{report.queryOrDocName}"
                  </p>

                  <div className="flex items-center gap-3 text-xs text-slate-500 pt-0.5">
                    <span>Standards Found: <strong className="text-slate-800">{report.recommendations.length}</strong></span>
                    <span>•</span>
                    <span className="text-[#1e40af] font-semibold">{report.overallConfidence}% AI Confidence</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => onSelectReport(report)}
                    className="px-4 py-1.5 rounded-lg bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>View Report</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onDeleteReport(report.id)}
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                    title="Delete report"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
