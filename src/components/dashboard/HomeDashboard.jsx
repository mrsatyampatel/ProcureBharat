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
  Lightbulb,
  Box,
  Sun,
  Link2,
  Shield,
  Check
} from "lucide-react";

// Static data-driven configs for fast, clean rendering
const STAT_METRICS = [
  {
    icon: FileText,
    iconBg: "bg-[#eff6ff] text-[#2563eb] border-blue-100",
    label: "Specifications Analyzed",
    value: "1,248",
    trend: "+18% this month",
    trendIcon: TrendingUp,
    trendClass: "text-emerald-600"
  },
  {
    icon: Shield,
    iconBg: "bg-[#f0fdf4] text-[#16a34a] border-emerald-100",
    label: "Standards Recommended",
    value: "4,862",
    trend: "Covering 24 Product Groups",
    trendIcon: Users,
    trendClass: "text-emerald-600"
  },
  {
    icon: CheckCircle2,
    iconBg: "bg-[#fff7ed] text-[#ea580c] border-amber-100",
    label: "Compliance Checks",
    value: "2,341",
    trend: "100% QCO Verified",
    trendIcon: CheckCircle2,
    trendClass: "text-amber-600"
  },
  {
    icon: AlertTriangle,
    iconBg: "bg-[#faf5ff] text-[#9333ea] border-purple-100",
    label: "Potential Gaps Detected",
    value: "387",
    trend: "Tender Disputes Avoided",
    trendIcon: ShieldCheck,
    trendClass: "text-[#9333ea]"
  }
];

const QUICK_ACTIONS = [
  {
    title: "Search Standards",
    desc: "Find relevant BIS standards for your product",
    icon: Search,
    target: "standards-search",
    cardBg: "bg-[#eff6ff]/70 hover:bg-[#eff6ff] border-blue-200/80",
    iconBg: "bg-[#2563eb] text-white",
    hoverText: "group-hover:text-[#1d4ed8]"
  },
  {
    title: "Check Compliance",
    desc: "Verify your product against standards",
    icon: ShieldCheck,
    target: "compliance",
    cardBg: "bg-[#f0fdf4]/70 hover:bg-[#f0fdf4] border-emerald-200/80",
    iconBg: "bg-[#16a34a] text-white",
    hoverText: "group-hover:text-[#16a34a]"
  },
  {
    title: "Analyze Gaps",
    desc: "Identify missing requirements",
    icon: Box,
    target: "gap-analysis",
    cardBg: "bg-[#faf5ff]/70 hover:bg-[#faf5ff] border-purple-200/80",
    iconBg: "bg-[#9333ea] text-white",
    hoverText: "group-hover:text-[#9333ea]"
  },
  {
    title: "Generate Report",
    desc: "Create detailed compliance reports",
    icon: FileText,
    target: "reports",
    cardBg: "bg-[#fff7ed]/70 hover:bg-[#fff7ed] border-amber-200/80",
    iconBg: "bg-[#ea580c] text-white",
    hoverText: "group-hover:text-[#ea580c]"
  }
];

const RECENT_ACTIVITIES = [
  {
    title: "LED Street Lighting System",
    isNumber: "IS 10322 (Part 5/Sec 3):2012",
    codeLabel: "IS 10322:2012",
    query: "Find applicable standards for outdoor LED street lights with IP66",
    time: "2 hours ago",
    icon: Lightbulb,
    iconBg: "bg-blue-50 text-blue-600",
    hoverColor: "group-hover:text-[#1d4ed8]"
  },
  {
    title: "Cement (OPC)",
    isNumber: "IS 269:2015",
    codeLabel: "IS 269:2015",
    query: "What BIS standards apply to Ordinary Portland Cement 53 grade?",
    time: "5 hours ago",
    icon: Box,
    iconBg: "bg-purple-50 text-purple-600",
    hoverColor: "group-hover:text-[#9333ea]"
  },
  {
    title: "Solar Inverter",
    isNumber: "IS 16221 (Part 2):2015",
    codeLabel: "IS 16221:2015",
    query: "Find standards for grid connected solar PV inverters and islanding protection",
    time: "1 day ago",
    icon: Sun,
    iconBg: "bg-amber-50 text-amber-600",
    hoverColor: "group-hover:text-[#ea580c]"
  },
  {
    title: "Electrical Cables",
    isNumber: "IS 694:2010",
    codeLabel: "IS 694:2010",
    query: "Specification for PVC insulated heavy duty electric cables for working voltages up to 1100V",
    time: "2 days ago",
    icon: Link2,
    iconBg: "bg-emerald-50 text-emerald-600",
    hoverColor: "group-hover:text-[#16a34a]"
  }
];

const SAVED_ITEMS = [
  { isNumber: "IS 10322 (Part 5/Sec 3):2012", codeLabel: "IS 10322:2012", title: "LED Street Lighting System" },
  { isNumber: "IS 269:2015", codeLabel: "IS 269:2015", title: "Ordinary Portland Cement" },
  { isNumber: "IS 16221 (Part 2):2015", codeLabel: "IS 16221:2015", title: "Solar PV Inverters" },
  { isNumber: "IS 694:2010", codeLabel: "IS 694:2010", title: "PVC Insulated Cables" }
];

export const HomeDashboard = ({
  onNavigate,
  onSelectStandardByNumber,
  onRunSearch
}) => {
  const handleRecentClick = (query, isNumber) => {
    if (onRunSearch) {
      onRunSearch(query);
    } else if (onSelectStandardByNumber) {
      onSelectStandardByNumber(isNumber);
    } else {
      onNavigate("standards-search");
    }
  };

  const handleSavedClick = (isNumber) => {
    if (onSelectStandardByNumber) {
      onSelectStandardByNumber(isNumber);
    } else {
      onNavigate("saved");
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in pb-10">
      {/* 1. HERO BANNER */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#eef4ff] via-[#e6effe] to-[#dbeafe] border border-blue-200/80 p-6 sm:p-8 lg:p-10 shadow-xs overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-indigo-200/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
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

          <div className="flex items-center gap-4 sm:gap-6 shrink-0 lg:pr-4">
            <div className="relative">
              <div className="w-40 sm:w-44 h-32 rounded-xl bg-white/70 border border-blue-100 shadow-sm transform -rotate-6 absolute -left-3 -top-2" />
              <div className="w-40 sm:w-44 p-3.5 rounded-xl bg-white border border-blue-200 shadow-md transform rotate-1 relative z-10 space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#1d4ed8] text-white flex items-center justify-center font-bold text-[10px] shadow-2xs">
                    IS
                  </div>
                  <span className="font-extrabold text-xs text-[#0f172a]">BIS</span>
                </div>
                <div className="space-y-1.5 pt-0.5 text-[11px] font-semibold text-slate-700">
                  {["Compliant", "Verified", "Trusted"].map((label) => (
                    <div key={label} className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-2 text-left hidden sm:block">
              <div className="text-xs sm:text-sm font-bold text-[#0f172a] leading-tight">
                Standards <br />
                Build a <br />
                Better India
              </div>
              <div className="flex items-center gap-1 w-12 h-1.5 rounded-full overflow-hidden">
                <span className="h-full w-1/2 bg-[#f97316]" />
                <span className="h-full w-1/2 bg-[#16a34a]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. STAT METRIC CARDS ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STAT_METRICS.map((stat, i) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trendIcon;
          return (
            <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-xs transition-all space-y-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${stat.iconBg}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-slate-500">{stat.label}</span>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">{stat.value}</div>
                <div className={`flex items-center gap-1 text-[11px] font-semibold ${stat.trendClass}`}>
                  <TrendIcon className="w-3.5 h-3.5" />
                  <span>{stat.trend}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. QUICK ACTIONS SECTION */}
      <div className="space-y-3 pt-2">
        <div className="space-y-0.5">
          <h2 className="text-base font-bold text-[#0f172a]">Quick Actions</h2>
          <p className="text-xs text-slate-500 font-medium">Get started with the most common tasks</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {QUICK_ACTIONS.map((action, i) => {
            const ActionIcon = action.icon;
            return (
              <button
                key={i}
                onClick={() => onNavigate(action.target)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer group flex items-center justify-between shadow-2xs hover:shadow-xs ${action.cardBg}`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform ${action.iconBg}`}>
                    <ActionIcon className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className={`text-xs sm:text-sm font-bold text-[#0f172a] transition-colors ${action.hoverText}`}>
                      {action.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-snug line-clamp-1">{action.desc}</p>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-1 ${action.hoverText}`} />
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. TWO-COLUMN BOTTOM SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
        {/* LEFT: Recent Activity */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-500" />
              <div>
                <h3 className="text-sm font-bold text-[#0f172a]">Recent Activity</h3>
                <p className="text-[11px] text-slate-500">Your latest searches and analyses</p>
              </div>
            </div>
            <button
              onClick={() => onNavigate("history")}
              className="text-xs font-bold text-[#1d4ed8] hover:underline cursor-pointer"
            >
              View All
            </button>
          </div>

          <div className="space-y-1 divide-y divide-slate-100">
            {RECENT_ACTIVITIES.map((act, i) => {
              const ActIcon = act.icon;
              return (
                <div
                  key={i}
                  onClick={() => handleRecentClick(act.query, act.isNumber)}
                  className="py-3 px-2 flex items-center justify-between hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${act.iconBg}`}>
                      <ActIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className={`text-xs font-bold text-slate-900 transition-colors ${act.hoverColor}`}>
                        {act.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-mono">{act.codeLabel}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-400 font-medium">{act.time}</span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-600 transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Saved Items */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-slate-500" />
              <div>
                <h3 className="text-sm font-bold text-[#0f172a]">Your Saved Items</h3>
                <p className="text-[11px] text-slate-500">Quick access to your important standards</p>
              </div>
            </div>
            <button
              onClick={() => onNavigate("saved")}
              className="text-xs font-bold text-[#1d4ed8] hover:underline cursor-pointer"
            >
              View All
            </button>
          </div>

          <div className="space-y-1 divide-y divide-slate-100">
            {SAVED_ITEMS.map((item, i) => (
              <div
                key={i}
                onClick={() => handleSavedClick(item.isNumber)}
                className="py-3 px-2 flex items-center justify-between hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#1d4ed8] transition-colors font-mono">
                      {item.codeLabel}
                    </h4>
                    <p className="text-[11px] text-slate-500">{item.title}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-semibold border border-slate-200">
                    Standard
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-600 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
