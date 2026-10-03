import {
  Home,
  Search,
  ShieldCheck,
  BarChart2,
  FileText,
  FileSpreadsheet,
  Bookmark,
  Clock,
  Box,
  Settings,
  X
} from "lucide-react";
export const AppSidebar = ({
  activeTab,
  setActiveTab,
  savedCount,
  isOpenMobile,
  onCloseMobile
}) => {
  const mainNavItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "standards-search", label: "Standards Search", icon: Search },
    { id: "compliance", label: "Compliance Checker", icon: ShieldCheck },
    { id: "gap-analysis", label: "Gap Analysis", icon: BarChart2 },
    { id: "documents", label: "Documents", icon: FileText },
    { id: "reports", label: "Reports", icon: FileSpreadsheet },
    { id: "saved", label: "Saved", icon: Bookmark, badge: savedCount > 0 ? savedCount : void 0 },
    { id: "history", label: "History", icon: Clock }
  ];
  const secondaryNavItems = [
    { id: "product-groups", label: "Product Groups", icon: Box },
    { id: "settings", label: "Settings", icon: Settings }
  ];
  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    if (onCloseMobile) onCloseMobile();
  };
  return <>
      {
    /* Mobile Backdrop */
  }
      {isOpenMobile && <div
    className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden"
    onClick={onCloseMobile}
  />}

      <aside className={`
        fixed top-0 bottom-0 left-0 z-50 w-64 bg-[#0a1128] text-slate-300 flex flex-col justify-between border-r border-slate-800/80 transition-transform duration-200 ease-in-out select-none
        ${isOpenMobile ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        
        {
    /* Top Header / Logo Section */
  }
        <div className="p-5 pb-4 border-b border-slate-800/60 flex items-center justify-between">
          <div
    onClick={() => handleNavClick("home")}
    className="flex items-center gap-3 cursor-pointer group"
  >
            {
    /* Square PB logo badge */
  }
            <div className="w-10 h-10 rounded-xl bg-[#1d4ed8] flex items-center justify-center text-white font-extrabold text-sm tracking-tight shadow-md shadow-blue-900/40 group-hover:bg-[#2563eb] transition-colors">
              PB
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center text-base font-bold text-white tracking-tight leading-tight">
                <span>Procure</span>
                <span className="text-[#38bdf8] ml-1">Bharat</span>
              </div>
              <span className="text-[9px] font-extrabold text-slate-400 tracking-widest uppercase mt-0.5">
                BIS INTELLIGENCE
              </span>
            </div>
          </div>

          {
    /* Close button for mobile */
  }
          {onCloseMobile && <button
    onClick={onCloseMobile}
    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 lg:hidden cursor-pointer"
  >
              <X className="w-5 h-5" />
            </button>}
        </div>

        {
    /* Navigation Link Items */
  }
        <div className="flex-1 px-3 py-4 space-y-1 overflow-y-auto scrollbar-none">
          {mainNavItems.map((item) => {
    const Icon = item.icon;
    const isTabActive = activeTab === item.id || item.id === "home" && activeTab === "dashboard" || item.id === "standards-search" && (activeTab === "ai-finder" || activeTab === "results");
    return <button
      key={item.id}
      onClick={() => handleNavClick(item.id)}
      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${isTabActive ? "bg-[#1d4ed8] text-white shadow-sm font-bold" : "text-slate-300 hover:text-white hover:bg-slate-800/60"}`}
    >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isTabActive ? "text-white" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                </div>

                {item.badge !== void 0 && <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${isTabActive ? "bg-white/20 text-white" : "bg-slate-800 text-slate-300"}`}>
                    {item.badge}
                  </span>}
              </button>;
  })}

          <div className="my-3 pt-3 border-t border-slate-800/80">
            {secondaryNavItems.map((item) => {
    const Icon = item.icon;
    const isTabActive = activeTab === item.id;
    return <button
      key={item.id}
      onClick={() => handleNavClick(item.id)}
      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${isTabActive ? "bg-[#1d4ed8] text-white shadow-sm font-bold" : "text-slate-300 hover:text-white hover:bg-slate-800/60"}`}
    >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isTabActive ? "text-white" : "text-slate-400"}`} />
                    <span>{item.label}</span>
                  </div>
                </button>;
  })}
          </div>
        </div>

        {
    /* Bottom Banner Card (Matching Screenshot exactly) */
  }
        <div className="p-3">
          <div className="p-3.5 rounded-xl bg-gradient-to-b from-[#111c38] to-[#0d162e] border border-slate-800 text-left relative overflow-hidden shadow-inner">
            {
    /* Subtle background building silhouette lines */
  }
            <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none">
              <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="20" width="12" height="40" fill="white" />
                <rect x="25" y="10" width="16" height="50" fill="white" />
                <rect x="44" y="25" width="14" height="35" fill="white" />
                <rect x="61" y="15" width="15" height="45" fill="white" />
              </svg>
            </div>

            <div className="space-y-2 relative z-10">
              <div className="text-xs font-bold text-white leading-tight">
                Building a <br /> Safer & Standard <br /> India
              </div>

              {
    /* India Tricolor Bar Indicator */
  }
              <div className="flex items-center gap-0.5 w-10 h-1 rounded-full overflow-hidden">
                <span className="h-full w-1/3 bg-[#f97316]" />
                <span className="h-full w-1/3 bg-white" />
                <span className="h-full w-1/3 bg-[#16a34a]" />
              </div>

              <div className="pt-2 text-[10px] text-slate-400 font-medium leading-snug">
                Standards Today <br />
                <span className="text-slate-500">A Stronger Tomorrow</span>
              </div>
            </div>
          </div>
        </div>

      </aside>
    </>;
};
