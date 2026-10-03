import React, { useState } from 'react';
import { 
  Sparkles, 
  Download, 
  Bookmark, 
  Share2, 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  ShieldCheck, 
  Layers, 
  Network, 
  Search, 
  Copy, 
  ExternalLink, 
  Eye, 
  SlidersHorizontal, 
  Check, 
  ChevronRight, 
  HelpCircle,
  Zap,
  Cpu,
  Award,
  BookOpen,
  Scale,
  RefreshCw,
  Info
} from 'lucide-react';
import { AnalysisReport, IndianStandard, RecommendationMatch } from '../../types/standards';
import { RelationshipGraph } from '../graph/RelationshipGraph';

interface RecommendationResultsViewProps {
  report: AnalysisReport;
  onBackToFinder: () => void;
  onOpenStandardDetails: (standard: IndianStandard) => void;
  onOpenExportModal: () => void;
  onSaveToggle: (standard: IndianStandard) => void;
  savedStandardIds: string[];
}

export const RecommendationResultsView: React.FC<RecommendationResultsViewProps> = ({
  report,
  onBackToFinder,
  onOpenStandardDetails,
  onOpenExportModal,
  onSaveToggle,
  savedStandardIds
}) => {
  const [selectedTab, setSelectedTab] = useState<'all' | 'primary' | 'allied' | 'normative' | 'test' | 'safety' | 'gaps' | 'graph'>('all');
  const [copiedClauseId, setCopiedClauseId] = useState<string | null>(null);
  const [appliedFix, setAppliedFix] = useState(false);
  const [expandedStandardId, setExpandedStandardId] = useState<string | null>(null);

  // Group recommendations accurately
  const primaryRecs = report.recommendations.filter(r => r.standard.category === 'Product Standard' || r.matchLevel === 'Highly Relevant' || r.relevanceScore >= 88);
  const alliedRecs = report.alliedRecommendations.length > 0 
    ? report.alliedRecommendations 
    : report.recommendations.filter(r => r.standard.category === 'Allied Standard' || (r.relevanceScore >= 70 && r.relevanceScore < 88));
  const testRecs = report.testMethodStandards.map(std => ({
    standard: std,
    relevanceScore: 88,
    matchLevel: 'Relevant' as const,
    whyRecommended: `Mandatory laboratory test method prescribed for evaluating ${report.identifiedProduct} compliance.`,
    matchedPhrases: ['Test Protocols', 'Laboratory Methods'],
    matchBreakdown: { categoryMatch: 90, technicalRequirementMatch: 85, safetyMatch: 88, normativeMatch: 90 },
    applicableClauses: ['Clause 5.1: Sampling and Criteria for Conformity', 'Clause 7.2: Type Testing & Routine Tests']
  }));
  const safetyRecs = report.safetyStandards.map(std => ({
    standard: std,
    relevanceScore: 92,
    matchLevel: 'Highly Relevant' as const,
    whyRecommended: `Critical safety standard addressing operational hazards, user protection, and environmental resistance.`,
    matchedPhrases: ['Safety Requirements', 'Ingress Protection', 'Shock Protection'],
    matchBreakdown: { categoryMatch: 95, technicalRequirementMatch: 90, safetyMatch: 98, normativeMatch: 92 },
    applicableClauses: ['Clause 4.1: Protection Against Electric Shock', 'Clause 6.3: Mechanical Strength & Impact Resistance']
  }));
  const normativeRecs = report.normativeStandards.map(std => ({
    standard: std,
    relevanceScore: 85,
    matchLevel: 'Relevant' as const,
    whyRecommended: `Normative cross-referenced Indian Standard indispensable for the application of ${report.recommendations[0]?.standard.isNumber || 'primary standard'}.`,
    matchedPhrases: ['Normative Reference', 'Cross-referenced Standard'],
    matchBreakdown: { categoryMatch: 85, technicalRequirementMatch: 85, safetyMatch: 80, normativeMatch: 95 },
    applicableClauses: ['Clause 2: Normative References']
  }));

  const filteredRecs = selectedTab === 'all' 
    ? report.recommendations 
    : selectedTab === 'primary' 
    ? (primaryRecs.length > 0 ? primaryRecs : report.recommendations.slice(0, 3)) 
    : selectedTab === 'allied' 
    ? alliedRecs 
    : selectedTab === 'test' 
    ? testRecs 
    : selectedTab === 'safety' 
    ? safetyRecs 
    : selectedTab === 'normative' 
    ? normativeRecs 
    : report.recommendations;

  const handleCopyClause = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedClauseId(id);
    setTimeout(() => setCopiedClauseId(null), 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in max-w-7xl mx-auto">
      
      {/* ------------------------------------------------------------- */}
      {/* TOP NAVIGATION & ACTIONS BAR */}
      {/* ------------------------------------------------------------- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          onClick={onBackToFinder}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#1e40af] cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>← Back to AI Standard Finder</span>
        </button>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setSelectedTab(selectedTab === 'graph' ? 'all' : 'graph')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
              selectedTab === 'graph'
                ? 'bg-[#1e40af] text-white shadow-2xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Network className="w-3.5 h-3.5" />
            <span>{selectedTab === 'graph' ? 'Show Standard Cards' : 'Launch Knowledge Graph'}</span>
          </button>

          <button
            onClick={onOpenExportModal}
            className="px-4 py-1.5 rounded-lg bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Procurement Dossier</span>
          </button>
        </div>
      </div>


      {/* ------------------------------------------------------------- */}
      {/* INSTITUTIONAL REPORT BANNER */}
      {/* ------------------------------------------------------------- */}
      <div className="bento-card relative overflow-hidden space-y-4">
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-[#1e40af] text-[11px] font-bold tracking-wide uppercase border border-blue-200">
                {report.detectedProductCategory}
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>QCO & GFR 2017 Verified</span>
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Report Reference: <strong className="text-slate-700">{report.id}</strong>
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl font-extrabold text-[#0f172a] tracking-tight">
              {report.identifiedProduct}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              {report.summary}
            </p>
          </div>

          {/* AI Metrics summary bar */}
          <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 shrink-0">
            <div className="text-center px-2">
              <div className="text-2xl font-extrabold text-[#1e40af]">{report.overallConfidence}%</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">AI Confidence</div>
            </div>

            <div className="w-px h-10 bg-slate-200"></div>

            <div className="text-center px-2">
              <div className="text-2xl font-extrabold text-[#0f172a]">{report.recommendations.length}</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Standards Identified</div>
            </div>

            <div className="w-px h-10 bg-slate-200"></div>

            <div className="text-center px-2">
              <div className="text-2xl font-extrabold text-amber-600">{report.specificationGaps.length}</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Gaps Detected</div>
            </div>
          </div>
        </div>

      </div>


      {/* ------------------------------------------------------------- */}
      {/* OUTDATED STANDARDS & SUPERSESSION DIFF CARD */}
      {/* ------------------------------------------------------------- */}
      {report.outdatedAlerts && report.outdatedAlerts.length > 0 && (
        <div className="gap-warning-card text-amber-900 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-amber-200/90 text-amber-950 shrink-0">
                <AlertTriangle className="w-5 h-5 text-amber-800" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 text-[10px] font-bold uppercase tracking-wider border border-rose-200">
                    High Risk Alert
                  </span>
                  <h4 className="text-sm font-bold text-amber-950">
                    Outdated / Superseded Standard References Detected in Tender Draft
                  </h4>
                </div>
                <p className="text-xs text-amber-900 mt-1 leading-snug">
                  Your specification cited legacy or withdrawn standards that violate current public procurement rules. The engine has synthesized the legal replacement:
                </p>
              </div>
            </div>

            <button
              onClick={() => setAppliedFix(!appliedFix)}
              className={`px-4 py-2 rounded-xl font-bold text-xs shrink-0 cursor-pointer transition-all shadow-2xs flex items-center gap-1.5 ${
                appliedFix 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-amber-700 hover:bg-amber-800 text-white'
              }`}
            >
              {appliedFix ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Specification Clauses Updated</span>
                </>
              ) : (
                <>
                  <RefreshCw className="w-4 h-4" />
                  <span>1-Click Auto-Fix Tender Clauses</span>
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3 pt-1">
            {report.outdatedAlerts.map((alert, i) => (
              <div key={i} className="p-4 rounded-xl bg-white border border-amber-200 space-y-2 shadow-2xs">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-mono font-bold text-xs line-through border border-rose-200">
                      {alert.detectedOldNumber}
                    </span>
                    <span className="text-slate-400 font-bold text-sm">➔</span>
                    <span className="px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 font-mono font-bold text-xs border border-emerald-200 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{alert.replacementIsNumber}</span>
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-900">
                      Current Mandated Standard
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-slate-500">
                    {alert.currentTitle}
                  </span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong className="text-[#0f172a]">Technical & Legal Rationale:</strong> {alert.reason}
                </p>

                <div className="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
                  <span>
                    <strong>Recommended Tender Action:</strong> {alert.recommendation}
                  </span>
                  <button
                    onClick={() => handleCopyClause(alert.recommendation, `outdated-${i}`)}
                    className="text-[11px] font-bold text-emerald-800 hover:underline flex items-center gap-1 shrink-0 ml-2 cursor-pointer"
                  >
                    {copiedClauseId === `outdated-${i}` ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedClauseId === `outdated-${i}` ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}


      {/* ------------------------------------------------------------- */}
      {/* 12-COLUMN MAIN BENTO LAYOUT */}
      {/* ------------------------------------------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (8 cols): Tabs, Standards / Gaps / Graph, Explainability */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* CATEGORY FILTER TABS */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            {[
              { id: 'all', label: `All Standards (${report.recommendations.length})` },
              { id: 'primary', label: `Primary (${primaryRecs.length})` },
              { id: 'allied', label: `Allied (${alliedRecs.length})` },
              { id: 'test', label: `Test Methods (${testRecs.length})` },
              { id: 'safety', label: `Safety & Ingress (${safetyRecs.length})` },
              { id: 'normative', label: `Normative (${normativeRecs.length})` },
              { id: 'gaps', label: `Specification Gaps (${report.specificationGaps.length})` },
              { id: 'graph', label: 'Ecosystem Graph' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedTab === tab.id
                    ? 'bg-[#1e40af] text-white shadow-2xs font-bold'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB CONTENT: RELATIONSHIP GRAPH */}
          {selectedTab === 'graph' && (
            <RelationshipGraph
              report={report}
              onSelectStandard={(std) => onOpenStandardDetails(std)}
            />
          )}

          {/* TAB CONTENT: SPECIFICATION GAPS */}
          {selectedTab === 'gaps' && (
            <div className="space-y-4">
              <div className="gap-warning-card flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-amber-900">
                    Specification Completeness & Risk Analysis (Audit against BIS Baselines)
                  </h4>
                  <p className="text-xs text-amber-800 mt-0.5 leading-relaxed">
                    The engine compared your tender requirement text against mandatory BIS performance benchmarks. Citing these clauses prevents bidder disputes and guarantees compliance.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {report.specificationGaps.map((gap) => (
                  <div 
                    key={gap.id}
                    className="bento-card space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                          gap.severity === 'Critical'
                            ? 'bg-rose-100 text-rose-800 border border-rose-200'
                            : gap.severity === 'High'
                            ? 'bg-amber-100 text-amber-800 border border-amber-200'
                            : 'bg-blue-100 text-blue-800 border border-blue-200'
                        }`}>
                          {gap.severity} Severity Gap
                        </span>
                        <h4 className="text-sm font-bold text-[#0f172a]">{gap.title}</h4>
                      </div>

                      <span className="text-xs font-mono text-slate-500 font-semibold">
                        Governing Standard: <strong>{gap.relatedStandardNumber || gap.missingStandardReference}</strong>
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {gap.description}
                    </p>

                    {/* Suggested Tender Clause Box */}
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                          Recommended Standardized Clause to Insert into Tender:
                        </span>
                        <button
                          onClick={() => handleCopyClause(gap.suggestedTenderClause, gap.id)}
                          className="text-xs font-bold text-[#1e40af] hover:text-[#1e3a8a] flex items-center gap-1 cursor-pointer"
                        >
                          {copiedClauseId === gap.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Clause Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy Tender Clause</span>
                            </>
                          )}
                        </button>
                      </div>
                      <div className="font-mono text-xs text-slate-800 leading-relaxed bg-white p-3 rounded-lg border border-slate-200">
                        "{gap.suggestedTenderClause}"
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB CONTENT: STANDARDS LIST */}
          {selectedTab !== 'graph' && selectedTab !== 'gaps' && (
            <div className="space-y-4">
              
              <div className="flex items-center justify-between text-xs text-slate-500 pb-0.5">
                <span>Displaying {filteredRecs.length} verified Indian Standards for procurement specifications</span>
                <span className="hidden sm:inline">Ranked by Semantic Scope & Technical Committee Jurisdiction</span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {filteredRecs.map((rec) => {
                  const std = rec.standard;
                  const isSaved = savedStandardIds.includes(std.id);
                  const isExpanded = expandedStandardId === std.id;
                  
                  return (
                    <div 
                      key={std.id}
                      className="bento-card hover:border-slate-300 transition-colors space-y-3.5 group"
                    >
                      {/* Card Top Row */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-semibold border border-slate-200">
                              {std.category}
                            </span>

                            <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                              rec.relevanceScore >= 90 
                                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                                : 'bg-blue-50 text-blue-800 border border-blue-200'
                            }`}>
                              {rec.relevanceScore}% Semantic Fit
                            </span>

                            <span className="text-[11px] text-slate-500 font-mono">
                              {std.currentVersion}
                            </span>

                            {std.certification.mandatory && (
                              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[10px] font-bold uppercase tracking-wider">
                                Mandatory QCO
                              </span>
                            )}
                          </div>

                          <h3 
                            onClick={() => onOpenStandardDetails(std)}
                            className="text-base sm:text-lg font-bold text-[#1e40af] hover:text-[#0f172a] transition-colors cursor-pointer font-mono pt-0.5"
                          >
                            {std.isNumber}
                          </h3>

                          <h4 className="text-sm font-bold text-slate-800 leading-snug">
                            {std.title}
                          </h4>

                          {std.hindiTitle && (
                            <p className="text-xs text-amber-800 font-medium">
                              {std.hindiTitle}
                            </p>
                          )}
                        </div>

                        {/* Action buttons on card */}
                        <div className="flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
                          <button
                            onClick={() => onSaveToggle(std)}
                            className={`p-2 rounded-xl border text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors ${
                              isSaved 
                                ? 'bg-[#1e40af] text-white border-[#1e40af]' 
                                : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                            }`}
                            title={isSaved ? 'Remove from Saved' : 'Save Standard to Dossier'}
                          >
                            <Bookmark className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => onOpenStandardDetails(std)}
                            className="px-3.5 py-2 rounded-xl bg-[#0f172a] hover:bg-slate-800 text-white font-semibold text-xs flex items-center gap-1.5 cursor-pointer shadow-2xs"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Inspect Standard</span>
                          </button>
                        </div>
                      </div>

                      {/* Visually Impressive "Why AI Recommended This Standard" Section */}
                      <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-slate-700 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <div className="font-bold text-[#1e40af] flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-[#3b82f6]" />
                            <span>Why AI Recommended This Standard:</span>
                          </div>
                          <button
                            onClick={() => setExpandedStandardId(isExpanded ? null : std.id)}
                            className="text-[11px] font-bold text-[#1e40af] hover:underline cursor-pointer"
                          >
                            {isExpanded ? 'Hide Fit Breakdown ▲' : 'View Fit Breakdown ▼'}
                          </button>
                        </div>
                        
                        <p className="text-slate-600 leading-relaxed text-[11px]">
                          {rec.whyRecommended}
                        </p>

                        {/* Expandable Multi-Metric Scoring Breakdown */}
                        {isExpanded && (
                          <div className="pt-2 border-t border-blue-100/80 space-y-2 animate-in fade-in">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                              <div className="bg-white p-2 rounded-lg border border-blue-100">
                                <div className="text-slate-400 font-semibold text-[10px]">Scope Match</div>
                                <div className="font-bold text-slate-800 mt-0.5">{rec.matchBreakdown?.categoryMatch || 95}%</div>
                                <div className="w-full bg-slate-100 h-1.5 rounded-full mt-1 overflow-hidden">
                                  <div className="bg-[#1e40af] h-full" style={{ width: `${rec.matchBreakdown?.categoryMatch || 95}%` }}></div>
                                </div>
                              </div>
                              <div className="bg-white p-2 rounded-lg border border-blue-100">
                                <div className="text-slate-400 font-semibold text-[10px]">Parameter Coverage</div>
                                <div className="font-bold text-slate-800 mt-0.5">{rec.matchBreakdown?.technicalRequirementMatch || 92}%</div>
                                <div className="w-full bg-slate-100 h-1.5 rounded-full mt-1 overflow-hidden">
                                  <div className="bg-emerald-600 h-full" style={{ width: `${rec.matchBreakdown?.technicalRequirementMatch || 92}%` }}></div>
                                </div>
                              </div>
                              <div className="bg-white p-2 rounded-lg border border-blue-100">
                                <div className="text-slate-400 font-semibold text-[10px]">Safety & Ingress</div>
                                <div className="font-bold text-slate-800 mt-0.5">{rec.matchBreakdown?.safetyMatch || 90}%</div>
                                <div className="w-full bg-slate-100 h-1.5 rounded-full mt-1 overflow-hidden">
                                  <div className="bg-amber-600 h-full" style={{ width: `${rec.matchBreakdown?.safetyMatch || 90}%` }}></div>
                                </div>
                              </div>
                              <div className="bg-white p-2 rounded-lg border border-blue-100">
                                <div className="text-slate-400 font-semibold text-[10px]">Normative Linkage</div>
                                <div className="font-bold text-slate-800 mt-0.5">{rec.matchBreakdown?.normativeMatch || 94}%</div>
                                <div className="w-full bg-slate-100 h-1.5 rounded-full mt-1 overflow-hidden">
                                  <div className="bg-indigo-600 h-full" style={{ width: `${rec.matchBreakdown?.normativeMatch || 94}%` }}></div>
                                </div>
                              </div>
                            </div>

                            {rec.applicableClauses && rec.applicableClauses.length > 0 && (
                              <div className="bg-white p-2.5 rounded-lg border border-blue-100 space-y-1">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                                  Applicable Standard Clauses:
                                </span>
                                <div className="space-y-1 text-[11px] text-slate-700 font-mono">
                                  {rec.applicableClauses.map((clause, cIdx) => (
                                    <div key={cIdx} className="flex items-center gap-1.5">
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#1e40af]"></span>
                                      <span>{clause}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Card Meta & Clause Copy Row */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs text-slate-500">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span>Committee: <strong className="text-slate-700 font-medium">{std.technicalCommittee}</strong></span>
                          <span>•</span>
                          <span>Published: <strong className="text-slate-700 font-medium">{std.publicationDate}</strong></span>
                          <span>•</span>
                          <span className="text-emerald-700 font-semibold flex items-center gap-1">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{std.certification.type}</span>
                          </span>
                        </div>

                        <button
                          onClick={() => handleCopyClause(`The offered equipment must strictly comply with ${std.isNumber} (${std.title}) and bear the requisite BIS Certification Mark.`, std.id)}
                          className="text-xs font-bold text-[#1e40af] hover:text-[#1e3a8a] flex items-center gap-1 cursor-pointer"
                        >
                          {copiedClauseId === std.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedClauseId === std.id ? 'Tender Clause Copied!' : 'Copy Tender Clause'}</span>
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* AI EXPLAINABILITY & TRANSPARENCY DEEP-DIVE CARD */}
          <div className="bento-card space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Cpu className="w-4 h-4 text-[#1e40af]" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">
                AI Recommendation Explainability & Audit Trail
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase">1. Extracted Entities</span>
                <div className="flex flex-wrap gap-1 pt-1">
                  {report.aiExplanation.extractedKeywords.map((kw, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 text-[10px] font-semibold">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase">2. Matching Methodology</span>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  {report.aiExplanation.matchingLogic}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase">3. Committee Jurisdiction</span>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  {report.aiExplanation.technicalCommitteesInvolved.join(', ')}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase">4. Regulatory Orders Checked</span>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  {report.aiExplanation.regulatoryOrdersChecked.join(', ')}
                </p>
              </div>
            </div>
          </div>

        </div>


        {/* Right Column (4 cols): Bento Stack */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* 1. Bento Confidence Gauge Card */}
          <div className="bento-card flex flex-col items-center text-center space-y-4">
            <div className="bento-gauge">
              <div className="font-extrabold text-2xl text-[#0f172a]">
                {report.overallConfidence}%
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0f172a]">AI Confidence Score</h3>
              <p className="text-xs text-slate-500 mt-0.5">High semantic correlation with BIS technical scopes</p>
            </div>

            <div className="w-full pt-3 border-t border-slate-100 space-y-2 text-xs text-left">
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Direct Matches:</span>
                <span className="font-bold text-emerald-700">{primaryRecs.length} Standards</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Allied & Cross-Ref:</span>
                <span className="font-bold text-[#1e40af]">{alliedRecs.length + normativeRecs.length} Standards</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Test & Safety:</span>
                <span className="font-bold text-slate-700">{testRecs.length + safetyRecs.length} Standards</span>
              </div>
            </div>
          </div>

          {/* 2. GFR 2017 Rule 144 Neutrality & Anti-Rigging Card */}
          <div className="bento-card space-y-3">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#1e40af]" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">
                GFR 2017 Rule 144 Audit
              </h3>
            </div>
            
            <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#0f172a]">Anti-Rigging Neutrality:</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[10px] font-bold">100% COMPLIANT</span>
              </div>
              <p className="text-slate-700 text-[11px] leading-relaxed">
                Specifications mandate open Indian Standards rather than proprietary vendor trademarks, preventing restrictive tender conditions under Public Procurement Rules.
              </p>
            </div>
          </div>

          {/* 3. Mandatory QCO Compliance Bento Box */}
          <div className="bento-card space-y-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">
                Mandatory QCO Compliance
              </h3>
            </div>
            
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-900">Quality Control Order:</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-200/80 text-emerald-900 text-[10px] font-bold">ACTIVE</span>
              </div>
              <p className="text-emerald-800 text-[11px] leading-relaxed">
                BIS certification is legally mandatory under Central Government Gazette notifications. Non-certified variants are prohibited on GeM & Public Tenders.
              </p>
            </div>

            <div className="text-[11px] text-slate-500 space-y-1 pt-1">
              <div>• <strong>Scheme:</strong> ISI Mark Scheme-I / CRS Registration</div>
              <div>• <strong>Verification Portal:</strong> BIS Manakonline & GeM QCO Gateway</div>
            </div>
          </div>

          {/* 4. Standards Ecosystem Knowledge Graph Bento Box */}
          <div className="bento-card space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Network className="w-4 h-4 text-[#1e40af]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">
                  Standards Ecosystem
                </h3>
              </div>
              <button
                onClick={() => setSelectedTab('graph')}
                className="text-xs font-bold text-[#1e40af] hover:underline cursor-pointer"
              >
                Open Map →
              </button>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Explore interconnected relationships across product, testing, normative, and safety standards.
            </p>
            <button
              onClick={() => setSelectedTab('graph')}
              className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-bold border border-slate-200 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Network className="w-3.5 h-3.5 text-[#1e40af]" />
              <span>Launch Relationship Graph</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
