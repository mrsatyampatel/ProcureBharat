import { useState } from "react";
import {
  Search,
  Globe,
  Bell,
  ChevronDown,
  Menu,
  Check,
  LogOut,
  Info
} from "lucide-react";
export const AppHeader = ({
  onQuickSearch,
  selectedLanguage,
  setSelectedLanguage,
  onOpenMobileSidebar,
  onOpenHelp
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const notifications = [
    {
      id: "notif-1",
      title: "New Mandatory QCO Gazette Notification",
      desc: "Electrical Equipment & Transformers Quality Control Amendment 2026 enforced under Section 16.",
      time: "15 mins ago",
      unread: true,
      type: "qco"
    },
    {
      id: "notif-2",
      title: "IS 10322 Revision Notice",
      desc: "LITD 14 published draft amendments for Smart Street Lighting Zhaga interface protocols.",
      time: "2 hours ago",
      unread: true,
      type: "standard"
    },
    {
      id: "notif-3",
      title: "GFR 2017 Anti-Rigging Check Completed",
      desc: "Your recent tender audit for LED Street Lights passed all open competition standards.",
      time: "1 day ago",
      unread: false,
      type: "compliance"
    }
  ];
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onQuickSearch(searchValue.trim());
    }
  };
  return <header className="sticky top-0 z-30 bg-white border-b border-slate-200/90 px-4 sm:px-8 py-3 flex items-center justify-between gap-4 shadow-2xs">
      
      {
    /* Left side: Mobile menu toggle + Search Bar */
  }
      <div className="flex items-center gap-3 flex-1 max-w-2xl">
        <button
    onClick={onOpenMobileSidebar}
    className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 lg:hidden cursor-pointer shrink-0"
    aria-label="Toggle Navigation Menu"
  >
          <Menu className="w-5 h-5" />
        </button>

        {
    /* Global BIS Search Bar (Matching Screenshot) */
  }
        <form onSubmit={handleSearchSubmit} className="relative w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          <input
    type="text"
    value={searchValue}
    onChange={(e) => setSearchValue(e.target.value)}
    placeholder="Search BIS standards (e.g. IS 103, cement, LED, safety...)"
    className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all font-medium"
  />
        </form>
      </div>

      {
    /* Right side: Language, Notifications, User */
  }
      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        
        {
    /* Language Selector Dropdown */
  }
        <div className="relative">
          <button
    onClick={() => {
      setShowLangMenu(!showLangMenu);
      setShowNotifications(false);
      setShowUserMenu(false);
    }}
    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
  >
            <Globe className="w-4 h-4 text-slate-500" />
            <span>{selectedLanguage === "Hindi" ? "\u0939\u093F\u0928\u094D\u0926\u0940" : selectedLanguage}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {showLangMenu && <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl border border-slate-200 shadow-lg py-1.5 z-50 text-xs animate-in fade-in">
              {["English", "Hindi", "Hinglish"].map((lang) => <button
    key={lang}
    onClick={() => {
      setSelectedLanguage(lang);
      setShowLangMenu(false);
    }}
    className={`w-full text-left px-3.5 py-2 flex items-center justify-between hover:bg-blue-50 cursor-pointer ${selectedLanguage === lang ? "font-bold text-[#1d4ed8]" : "text-slate-700"}`}
  >
                  <span>{lang === "Hindi" ? "\u0939\u093F\u0928\u094D\u0926\u0940 (Hindi)" : lang}</span>
                  {selectedLanguage === lang && <Check className="w-3.5 h-3.5 text-[#1d4ed8]" />}
                </button>)}
            </div>}
        </div>

        {
    /* Notifications Bell with Red Indicator Badge */
  }
        <div className="relative">
          <button
    onClick={() => {
      setShowNotifications(!showNotifications);
      setShowLangMenu(false);
      setShowUserMenu(false);
    }}
    className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 relative transition-colors cursor-pointer"
    aria-label="View Notifications"
  >
            <Bell className="w-4 h-4" />
            {
    /* Red dot badge matching screenshot */
  }
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-600 ring-2 ring-white" />
          </button>

          {showNotifications && <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl border border-slate-200 shadow-xl p-3 z-50 animate-in fade-in space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <Bell className="w-3.5 h-3.5 text-[#1d4ed8]" />
                  <span>BIS Gazette & Tender Alerts</span>
                </span>
                <span className="text-[10px] font-semibold text-[#1d4ed8] hover:underline cursor-pointer">
                  Mark all as read
                </span>
              </div>

              <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                {notifications.map((n) => <div
    key={n.id}
    className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 transition-colors cursor-pointer text-xs space-y-1"
  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-slate-900 text-xs leading-tight">
                        {n.title}
                      </h4>
                      {n.unread && <span className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8] shrink-0 mt-1" />}
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      {n.desc}
                    </p>
                    <span className="text-[10px] text-slate-400 font-medium block pt-0.5">
                      {n.time}
                    </span>
                  </div>)}
              </div>
            </div>}
        </div>

        {
    /* User Profile Avatar with Name "Aayush" (Matching Screenshot) */
  }
        <div className="relative">
          <button
    onClick={() => {
      setShowUserMenu(!showUserMenu);
      setShowLangMenu(false);
      setShowNotifications(false);
    }}
    className="flex items-center gap-2 p-1 pl-1.5 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
  >
            {
    /* Navy avatar circle with 'A' */
  }
            <div className="w-7 h-7 rounded-full bg-[#0a1128] text-white flex items-center justify-center text-xs font-bold shadow-2xs">
              A
            </div>
            <span className="text-xs font-bold text-slate-800 hidden sm:inline">
              Aayush
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {showUserMenu && <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl border border-slate-200 shadow-xl py-1.5 z-50 text-xs animate-in fade-in space-y-1">
              <div className="px-3.5 py-2 border-b border-slate-100">
                <div className="font-bold text-slate-900">Aayush Shukla</div>
                <div className="text-[10px] text-slate-500">Procurement Officer</div>
              </div>
              <button
    onClick={() => {
      setShowUserMenu(false);
      if (onOpenHelp) onOpenHelp();
    }}
    className="w-full text-left px-3.5 py-2 hover:bg-slate-50 text-slate-700 flex items-center gap-2 cursor-pointer"
  >
                <Info className="w-3.5 h-3.5 text-slate-500" />
                <span>BIS Guidelines & Manual</span>
              </button>
              <div className="border-t border-slate-100 my-1" />
              <button
    onClick={() => setShowUserMenu(false)}
    className="w-full text-left px-3.5 py-2 hover:bg-rose-50 text-rose-600 flex items-center gap-2 cursor-pointer font-medium"
  >
                <LogOut className="w-3.5 h-3.5 text-rose-500" />
                <span>Sign Out</span>
              </button>
            </div>}
        </div>

      </div>

    </header>;
};
