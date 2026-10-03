import { useState } from "react";
import {
  Bookmark,
  Trash2,
  Eye,
  FileSpreadsheet,
  Copy,
  Check,
  Search,
  ArrowRight
} from "lucide-react";
export const SavedStandardsView = ({
  savedStandards,
  onRemove,
  onOpenDetails,
  onNavigateToFinder,
  onAddSampleBatch
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedAll, setCopiedAll] = useState(false);
  const filtered = savedStandards.filter(
    (s) => s.isNumber.toLowerCase().includes(searchQuery.toLowerCase()) || s.title.toLowerCase().includes(searchQuery.toLowerCase()) || s.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleCopyAll = () => {
    const text = savedStandards.map((s) => `${s.isNumber}: ${s.title} (${s.currentVersion}) - ${s.certification.type}`).join("\n");
    navigator.clipboard.writeText(text);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2e3);
  };
  const handleExportCSV = () => {
    const rows = [
      ["IS Number", "Title", "Category", "Version", "Certification", "Technical Committee"],
      ...savedStandards.map((s) => [
        `"${s.isNumber}"`,
        `"${s.title.replace(/"/g, '""')}"`,
        `"${s.category}"`,
        `"${s.currentVersion}"`,
        `"${s.certification.type}"`,
        `"${s.technicalCommittee}"`
      ])
    ];
    const csvContent = "data:text/csv;charset=utf-8," + rows.map((e) => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `StandardsAI_Saved_Library_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return <div className="space-y-6 animate-in fade-in max-w-5xl mx-auto">
      
      {
    /* Header */
  }
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-blue-50 text-[#1e40af]">
              <Bookmark className="w-5 h-5" />
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-[#0f172a] tracking-tight">
              Saved Standards Library
            </h1>
          </div>
          <p className="text-xs text-slate-500">
            Bookmarked Indian Standards for active tender specifications and procurement drafting.
          </p>
        </div>

        {savedStandards.length > 0 && <div className="flex items-center gap-2">
            <button
    onClick={handleCopyAll}
    className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-2xs transition-colors"
  >
              {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedAll ? "Copied All" : "Copy All References"}</span>
            </button>

            <button
    onClick={handleExportCSV}
    className="px-4 py-1.5 rounded-lg bg-[#1e40af] hover:bg-[#1e3a8a] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-2xs transition-colors"
  >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>}
      </div>

      {savedStandards.length === 0 ? (
    /* Empty State */
    <div className="bento-card p-12 text-center max-w-lg mx-auto space-y-4 shadow-sm">
          <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#1e40af] flex items-center justify-center mx-auto">
            <Bookmark className="w-7 h-7" />
          </div>

          <div className="space-y-1">
            <h3 className="text-base font-bold text-[#0f172a]">
              No saved standards in your library yet
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              You can bookmark any Indian Standard from the AI Finder or search results for quick reference while drafting procurement clauses.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
            <button
      onClick={onNavigateToFinder}
      className="px-4 py-2 rounded-lg bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-2xs"
    >
              <span>Explore AI Standard Finder</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
      onClick={onAddSampleBatch}
      className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
    >
              Add Standard Lighting & Power Bundle
            </button>
          </div>
        </div>
  ) : (
    /* Saved List */
    <div className="space-y-3">
          <div className="bento-card py-3 flex items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <input
      type="text"
      placeholder="Search within saved standards..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:bg-white"
    />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5 pointer-events-none" />
            </div>

            <div className="text-xs font-semibold text-slate-500">
              {filtered.length} of {savedStandards.length} saved
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {filtered.map((std) => <div
      key={std.id}
      className="bento-card flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-slate-300 transition-colors"
    >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200">
                      {std.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-medium">
                      {std.currentVersion}
                    </span>
                  </div>

                  <h3
      onClick={() => onOpenDetails(std)}
      className="text-base font-bold text-[#1e40af] hover:text-[#0f172a] font-mono transition-colors cursor-pointer"
    >
                    {std.isNumber}
                  </h3>

                  <p className="text-xs font-medium text-slate-700 leading-snug">
                    {std.title}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-slate-500 pt-1">
                    <span>Committee: <strong className="text-slate-700">{std.technicalCommittee}</strong></span>
                    <span>•</span>
                    <span className="text-emerald-700 font-semibold">{std.certification.type}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
      onClick={() => onOpenDetails(std)}
      className="px-3.5 py-1.5 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-2xs"
    >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Details</span>
                  </button>

                  <button
      onClick={() => onRemove(std.id)}
      className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-rose-600 hover:border-rose-200 hover:bg-rose-50 transition-colors cursor-pointer"
      title="Remove standard"
    >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>)}
          </div>
        </div>
  )}

    </div>;
};
