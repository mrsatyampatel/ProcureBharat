import React from 'react';
import { 
  FileText, 
  ShieldCheck, 
  AlertTriangle, 
  Search, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  ChevronRight, 
  Clock, 
  Bookmark, 
  Layers, 
  Zap, 
  Lightbulb, 
  Box, 
  Sun, 
  Link2,
  FileCheck,
  Shield,
  ArrowRight,
  Sparkles,
  Check
} from 'lucide-react';
import { IndianStandard } from '../../types/standards';

interface HomeDashboardProps {
  onNavigate: (tab: string) => void;
  onSelectStandardByNumber?: (isNumber: string) => void;
  onRunSearch?: (query: string) => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  onNavigate,
  onSelectStandardByNumber,
  onRunSearch
}) => {

  const handleRecentClick = (query: string, isNumber: string) => {
    if (onRunSearch) {
      onRunSearch(query);
    } else if (onSelectStandardByNumber) {
      onSelectStandardByNumber(isNumber);
    } else {
      onNavigate('standards-search');
    }
  };

  const handleSavedClick = (isNumber: string) => {
    if (onSelectStandardByNumber) {
      onSelectStandardByNumber(isNumber);
    } else {
      onNavigate('saved');
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in pb-10">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO BANNER: "WELCOME TO STANDARDSSAI" (Matching Screenshot) */}
      {/* ------------------------------------------------------------- */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#eef4ff] via-[#e6effe] to-[#dbeafe] border border-blue-200/80 p-6 sm:p-8 lg:p-10 shadow-xs overflow-hidden">
        
        {/* Soft background light blooms */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-indigo-200/20 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          {/* Left Hero Text Column */}
          <div className="max-w-xl space-y-3">
            <div className="text-[11px] font-extrabold tracking-widest uppercase text-[#1d4ed8]">
              WELCOME TO <span className="font-black">PROCURE</span><span className="text-[#0284c7]"> BHARAT</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-[1.15]">
              Smarter Compliance. <br />
              Stronger Products.
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-lg">
              Search, analyze, and stay compliant with BIS standards using the power of AI.
            </p>
          </div>

          {/* Right Graphic: Document Stack + "Standards Build a Better India" */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0 lg:pr-4">
            
            {/* Tilted Floating Compliance Card Stack */}
            <div className="relative">
              {/* Back tilted sheet */}
              <div className="w-40 sm:w-44 h-32 rounded-xl bg-white/70 border border-blue-100 shadow-sm transform -rotate-6 absolute -left-3 -top-2"></div>
              
              {/* Main front compliance card */}
              <div className="w-40 sm:w-44 p-3.5 rounded-xl bg-white border border-blue-200 shadow-md transform rotate-1 relative z-10 space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#1d4ed8] text-white flex items-center justify-center font-bold text-[10px] shadow-2xs">
                    IS
                  </div>
                  <span className="font-extrabold text-xs text-[#0f172a]">BIS</span>
                </div>

                <div className="space-y-1.5 pt-0.5 text-[11px] font-semibold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Compliant</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Verified</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Trusted</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Motto with Tricolor Underline */}
            <div className="space-y-2 text-left hidden sm:block">
              <div className="text-xs sm:text-sm font-bold text-[#0f172a] leading-tight">
                Standards <br />
                Build a <br />
                Better India
              </div>
              
              {/* Tricolor Indicator Line */}
              <div className="flex items-center gap-1 w-12 h-1.5 rounded-full overflow-hidden">
                <span className="h-full w-1/2 bg-[#f97316]"></span>
                <span className="h-full w-1/2 bg-[#16a34a]"></span>
              </div>
            </div>

          </div>

        </div>

      </div>


      {/* ------------------------------------------------------------- */}
      {/* 2. STAT METRIC CARDS ROW (4 Cards Matching Screenshot) */}
      {/* ------------------------------------------------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Specifications Analyzed (Blue) */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-xs transition-all space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#eff6ff] text-[#2563eb] flex items-center justify-center border border-blue-100">
              <FileText className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-slate-500">
              Specifications Analyzed
            </span>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              1,248
            </div>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+18% this month</span>
            </div>
          </div>
        </div>

        {/* Card 2: Standards Recommended (Green) */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-xs transition-all space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center border border-emerald-100">
              <Shield className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-slate-500">
              Standards Recommended
            </span>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              4,862
            </div>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
              <Users className="w-3.5 h-3.5" />
              <span>Covering 24 Product Groups</span>
            </div>
          </div>
        </div>

        {/* Card 3: Compliance Checks (Orange) */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-xs transition-all space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#fff7ed] text-[#ea580c] flex items-center justify-center border border-amber-100">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-slate-500">
              Compliance Checks
            </span>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              2,341
            </div>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-600">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% QCO Verified</span>
            </div>
          </div>
        </div>

        {/* Card 4: Potential Gaps Detected (Purple) */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-xs transition-all space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#faf5ff] text-[#9333ea] flex items-center justify-center border border-purple-100">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-slate-500">
              Potential Gaps Detected
            </span>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              387
            </div>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-[#9333ea]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Tender Disputes Avoided</span>
            </div>
          </div>
        </div>

      </div>


      {/* ------------------------------------------------------------- */}
      {/* 3. QUICK ACTIONS SECTION (Matching Screenshot) */}
      {/* ------------------------------------------------------------- */}
      <div className="space-y-3 pt-2">
        <div className="space-y-0.5">
          <h2 className="text-base font-bold text-[#0f172a]">
            Quick Actions
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Get started with the most common tasks
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          
          {/* Action 1: Search Standards (Blue) */}
          <button
            onClick={() => onNavigate('standards-search')}
            className="p-4 rounded-2xl bg-[#eff6ff]/70 hover:bg-[#eff6ff] border border-blue-200/80 text-left transition-all cursor-pointer group flex items-center justify-between shadow-2xs hover:shadow-xs"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#2563eb] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Search className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs sm:text-sm font-bold text-[#0f172a] group-hover:text-[#1d4ed8] transition-colors">
                  Search Standards
                </h3>
                <p className="text-[11px] text-slate-500 leading-snug line-clamp-1">
                  Find relevant BIS standards for your product
                </p>
              </div>
            </div>

            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1d4ed8] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
          </button>

          {/* Action 2: Check Compliance (Green) */}
          <button
            onClick={() => onNavigate('compliance')}
            className="p-4 rounded-2xl bg-[#f0fdf4]/70 hover:bg-[#f0fdf4] border border-emerald-200/80 text-left transition-all cursor-pointer group flex items-center justify-between shadow-2xs hover:shadow-xs"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#16a34a] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs sm:text-sm font-bold text-[#0f172a] group-hover:text-[#16a34a] transition-colors">
                  Check Compliance
                </h3>
                <p className="text-[11px] text-slate-500 leading-snug line-clamp-1">
                  Verify your product against standards
                </p>
              </div>
            </div>

            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#16a34a] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
          </button>

          {/* Action 3: Analyze Gaps (Purple) */}
          <button
            onClick={() => onNavigate('gap-analysis')}
            className="p-4 rounded-2xl bg-[#faf5ff]/70 hover:bg-[#faf5ff] border border-purple-200/80 text-left transition-all cursor-pointer group flex items-center justify-between shadow-2xs hover:shadow-xs"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#9333ea] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Box className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs sm:text-sm font-bold text-[#0f172a] group-hover:text-[#9333ea] transition-colors">
                  Analyze Gaps
                </h3>
                <p className="text-[11px] text-slate-500 leading-snug line-clamp-1">
                  Identify missing requirements
                </p>
              </div>
            </div>

            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#9333ea] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
          </button>

          {/* Action 4: Generate Report (Orange) */}
          <button
            onClick={() => onNavigate('reports')}
            className="p-4 rounded-2xl bg-[#fff7ed]/70 hover:bg-[#fff7ed] border border-amber-200/80 text-left transition-all cursor-pointer group flex items-center justify-between shadow-2xs hover:shadow-xs"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#ea580c] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <FileText className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs sm:text-sm font-bold text-[#0f172a] group-hover:text-[#ea580c] transition-colors">
                  Generate Report
                </h3>
                <p className="text-[11px] text-slate-500 leading-snug line-clamp-1">
                  Create detailed compliance reports
                </p>
              </div>
            </div>

            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#ea580c] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
          </button>

        </div>
      </div>


      {/* ------------------------------------------------------------- */}
      {/* 4. TWO-COLUMN BOTTOM SECTION (Matching Screenshot) */}
      {/* ------------------------------------------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
        
        {/* ------------------------------------------------------- */}
        {/* LEFT BOX: Recent Activity */}
        {/* ------------------------------------------------------- */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-500" />
              <div>
                <h3 className="text-sm font-bold text-[#0f172a]">
                  Recent Activity
                </h3>
                <p className="text-[11px] text-slate-500">
                  Your latest searches and analyses
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('history')}
              className="text-xs font-bold text-[#1d4ed8] hover:underline cursor-pointer"
            >
              View All
            </button>
          </div>

          <div className="space-y-1 divide-y divide-slate-100">
            
            {/* Item 1: LED Street Lighting System */}
            <div 
              onClick={() => handleRecentClick('Find applicable standards for outdoor LED street lights with IP66', 'IS 10322 (Part 5/Sec 3):2012')}
              className="py-3 px-2 flex items-center justify-between hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#1d4ed8] transition-colors">
                    LED Street Lighting System
                  </h4>
                  <p className="text-[11px] text-slate-500 font-mono">
                    IS 10322:2012
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400 font-medium">
                  2 hours ago
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-600 transition-colors" />
              </div>
            </div>

            {/* Item 2: Cement (OPC) */}
            <div 
              onClick={() => handleRecentClick('What BIS standards apply to Ordinary Portland Cement 53 grade?', 'IS 269:2015')}
              className="py-3 px-2 flex items-center justify-between hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <Box className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#9333ea] transition-colors">
                    Cement (OPC)
                  </h4>
                  <p className="text-[11px] text-slate-500 font-mono">
                    IS 269:2015
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400 font-medium">
                  5 hours ago
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-600 transition-colors" />
              </div>
            </div>

            {/* Item 3: Solar Inverter */}
            <div 
              onClick={() => handleRecentClick('Find standards for grid connected solar PV inverters and islanding protection', 'IS 16221 (Part 2):2015')}
              className="py-3 px-2 flex items-center justify-between hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Sun className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#ea580c] transition-colors">
                    Solar Inverter
                  </h4>
                  <p className="text-[11px] text-slate-500 font-mono">
                    IS 16221:2015
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400 font-medium">
                  1 day ago
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-600 transition-colors" />
              </div>
            </div>

            {/* Item 4: Electrical Cables */}
            <div 
              onClick={() => handleRecentClick('Specification for PVC insulated heavy duty electric cables for working voltages up to 1100V', 'IS 694:2010')}
              className="py-3 px-2 flex items-center justify-between hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Link2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#16a34a] transition-colors">
                    Electrical Cables
                  </h4>
                  <p className="text-[11px] text-slate-500 font-mono">
                    IS 694:2010
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400 font-medium">
                  2 days ago
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-600 transition-colors" />
              </div>
            </div>

          </div>

        </div>


        {/* ------------------------------------------------------- */}
        {/* RIGHT BOX: Your Saved Items */}
        {/* ------------------------------------------------------- */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-slate-500" />
              <div>
                <h3 className="text-sm font-bold text-[#0f172a]">
                  Your Saved Items
                </h3>
                <p className="text-[11px] text-slate-500">
                  Quick access to your important standards
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('saved')}
              className="text-xs font-bold text-[#1d4ed8] hover:underline cursor-pointer"
            >
              View All
            </button>
          </div>

          <div className="space-y-1 divide-y divide-slate-100">
            
            {/* Saved Item 1: IS 10322:2012 */}
            <div 
              onClick={() => handleSavedClick('IS 10322 (Part 5/Sec 3):2012')}
              className="py-3 px-2 flex items-center justify-between hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#1d4ed8] transition-colors font-mono">
                    IS 10322:2012
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    LED Street Lighting System
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-semibold border border-slate-200">
                  Standard
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-600 transition-colors" />
              </div>
            </div>

            {/* Saved Item 2: IS 269:2015 */}
            <div 
              onClick={() => handleSavedClick('IS 269:2015')}
              className="py-3 px-2 flex items-center justify-between hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#1d4ed8] transition-colors font-mono">
                    IS 269:2015
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Ordinary Portland Cement
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-semibold border border-slate-200">
                  Standard
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-600 transition-colors" />
              </div>
            </div>

            {/* Saved Item 3: IS 16221:2015 */}
            <div 
              onClick={() => handleSavedClick('IS 16221 (Part 2):2015')}
              className="py-3 px-2 flex items-center justify-between hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#1d4ed8] transition-colors font-mono">
                    IS 16221:2015
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Solar PV Inverters
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-semibold border border-slate-200">
                  Standard
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-600 transition-colors" />
              </div>
            </div>

            {/* Saved Item 4: IS 694:2010 */}
            <div 
              onClick={() => handleSavedClick('IS 694:2010')}
              className="py-3 px-2 flex items-center justify-between hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#1d4ed8] transition-colors font-mono">
                    IS 694:2010
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    PVC Insulated Cables
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-semibold border border-slate-200">
                  Standard
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-600 transition-colors" />
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
