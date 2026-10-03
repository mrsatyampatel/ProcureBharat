import React, { useState } from 'react';
import { 
  Network, 
  ShieldCheck, 
  Cpu, 
  FileText, 
  Layers, 
  Zap, 
  Maximize2, 
  Info, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { AnalysisReport, GraphNode, IndianStandard } from '../../types/standards';
import { AiRecommendationEngine } from '../../services/aiRecommendationEngine';
import { INDIAN_STANDARDS_DATABASE } from '../../data/standardsDataset';

interface RelationshipGraphProps {
  report: AnalysisReport;
  onSelectStandard: (standard: IndianStandard) => void;
}

export const RelationshipGraph: React.FC<RelationshipGraphProps> = ({
  report,
  onSelectStandard
}) => {
  const { nodes, links } = AiRecommendationEngine.generateRelationshipGraph(report);
  const [selectedNodeId, setSelectedNodeId] = useState<string>(nodes[0]?.id || '');

  const getNodeColor = (type: GraphNode['type']) => {
    switch (type) {
      case 'primary':
        return {
          bg: 'bg-blue-600',
          text: 'text-white',
          border: 'border-blue-400',
          ring: 'ring-blue-200',
          badge: 'bg-blue-100 text-blue-800'
        };
      case 'safety':
        return {
          bg: 'bg-amber-600',
          text: 'text-white',
          border: 'border-amber-400',
          ring: 'ring-amber-200',
          badge: 'bg-amber-100 text-amber-800'
        };
      case 'test':
        return {
          bg: 'bg-indigo-600',
          text: 'text-white',
          border: 'border-indigo-400',
          ring: 'ring-indigo-200',
          badge: 'bg-indigo-100 text-indigo-800'
        };
      case 'normative':
        return {
          bg: 'bg-slate-700',
          text: 'text-white',
          border: 'border-slate-500',
          ring: 'ring-slate-200',
          badge: 'bg-slate-100 text-slate-800'
        };
      case 'allied':
        return {
          bg: 'bg-cyan-600',
          text: 'text-white',
          border: 'border-cyan-400',
          ring: 'ring-cyan-200',
          badge: 'bg-cyan-100 text-cyan-800'
        };
      case 'certification':
        return {
          bg: 'bg-emerald-600',
          text: 'text-white',
          border: 'border-emerald-400',
          ring: 'ring-emerald-200',
          badge: 'bg-emerald-100 text-emerald-800'
        };
      default:
        return {
          bg: 'bg-slate-600',
          text: 'text-white',
          border: 'border-slate-400',
          ring: 'ring-slate-200',
          badge: 'bg-slate-100 text-slate-800'
        };
    }
  };

  const activeNode = nodes.find(n => n.id === selectedNodeId) || nodes[0];
  const linkedStandard = INDIAN_STANDARDS_DATABASE.find(s => s.id === activeNode?.id || s.isNumber === activeNode?.isNumber);

  return (
    <div className="bento-card space-y-5">
      
      {/* Title Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3.5">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-blue-50 text-[#1e40af]">
              <Network className="w-4 h-4" />
            </span>
            <h3 className="text-sm sm:text-base font-bold text-[#0f172a]">
              Indian Standards Relationship & Cross-Reference Graph
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Interactive semantic relationship map connecting Primary Standard with Safety, Test Methods, Normative, and QCO nodes.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold text-slate-400">Click any node to inspect</span>
        </div>
      </div>

      {/* Interactive Visual Graph Canvas */}
      <div className="relative bg-[#0f172a] rounded-xl p-6 overflow-hidden min-h-[380px] flex items-center justify-center border border-slate-800">
        
        {/* Subtle background grid */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:20px_20px]"></div>

        {/* SVG Connector Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          {links.map((link, i) => {
            const src = nodes.find(n => n.id === link.source);
            const tgt = nodes.find(n => n.id === link.target);
            if (!src || !tgt) return null;
            return (
              <g key={i}>
                <line
                  x1={src.x || 400}
                  y1={src.y || 200}
                  x2={tgt.x || 400}
                  y2={tgt.y || 200}
                  stroke="url(#lineGrad)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="animate-pulse"
                />
              </g>
            );
          })}
        </svg>

        {/* Render Graph Nodes */}
        <div className="relative z-10 w-full max-w-2xl h-[320px] flex flex-wrap items-center justify-center gap-4">
          
          {/* Node Grid Layout */}
          <div className="w-full flex flex-col justify-between h-full py-2">
            
            {/* Top Row: Safety & Test Method Nodes */}
            <div className="flex items-center justify-around">
              {nodes.filter(n => n.type === 'safety' || n.type === 'test').map(node => {
                const colors = getNodeColor(node.type);
                const isSelected = selectedNodeId === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`px-3.5 py-2 rounded-lg border text-xs font-bold transition-all transform hover:scale-102 cursor-pointer shadow-sm flex items-center gap-2 ${
                      isSelected 
                        ? `${colors.bg} ${colors.text} ${colors.border} ring-2 ${colors.ring}` 
                        : 'bg-slate-800 text-slate-200 border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                    <div className="text-left">
                      <div className="text-[10px] text-slate-300 uppercase tracking-wider">{node.category}</div>
                      <div className="font-mono text-xs">{node.label}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Middle Row: Primary Standard Center Hub */}
            <div className="flex items-center justify-center">
              {nodes.filter(n => n.type === 'primary').map(node => {
                const colors = getNodeColor(node.type);
                const isSelected = selectedNodeId === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`px-6 py-3.5 rounded-xl border-2 text-sm font-bold transition-all transform hover:scale-102 cursor-pointer shadow-lg flex items-center gap-3 ${
                      isSelected 
                        ? `${colors.bg} ${colors.text} ${colors.border} ring-2 ${colors.ring}` 
                        : 'bg-[#1e40af] text-white border-blue-400'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/40 flex items-center justify-center text-white">
                      <Cpu className="w-6 h-6 text-cyan-300 animate-pulse" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] text-blue-200 uppercase font-bold tracking-widest">
                        PRIMARY INDIAN STANDARD
                      </div>
                      <div className="font-mono text-sm sm:text-base font-bold">{node.label}</div>
                      <div className="text-[11px] text-blue-200 font-medium">Relevance: {node.relevance}%</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Row: Normative, Allied & Certification */}
            <div className="flex items-center justify-around flex-wrap gap-2">
              {nodes.filter(n => n.type === 'normative' || n.type === 'allied' || n.type === 'certification').map(node => {
                const colors = getNodeColor(node.type);
                const isSelected = selectedNodeId === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all transform hover:scale-102 cursor-pointer shadow-sm flex items-center gap-2 ${
                      isSelected 
                        ? `${colors.bg} ${colors.text} ${colors.border} ring-2 ${colors.ring}` 
                        : 'bg-slate-800 text-slate-200 border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    {node.type === 'certification' ? (
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                    ) : (
                      <Layers className="w-3.5 h-3.5 text-blue-300" />
                    )}
                    <div className="text-left">
                      <div className="text-[9px] text-slate-400 uppercase tracking-wider">{node.category}</div>
                      <div className="font-mono text-xs">{node.label}</div>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

        </div>

      </div>

      {/* Selected Node Details Card */}
      {activeNode && (
        <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${getNodeColor(activeNode.type).badge}`}>
                {activeNode.category}
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-[#0f172a] font-mono">
                {activeNode.label}
              </h4>
            </div>
            <p className="text-xs text-slate-600">
              {linkedStandard?.title || 'Mandatory Regulatory and Quality Control Framework under BIS Act & Department of Consumer Affairs.'}
            </p>
          </div>

          {linkedStandard && (
            <button
              onClick={() => onSelectStandard(linkedStandard)}
              className="px-4 py-1.5 rounded-lg bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-bold text-xs flex items-center gap-1.5 shrink-0 shadow-2xs cursor-pointer"
            >
              <span>View Standard Details</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      )}

    </div>
  );
};
