import React, { useState } from 'react';
import { 
  Compass, 
  FileText, 
  Layers, 
  Bookmark, 
  History, 
  ShieldCheck, 
  Share2, 
  Bell, 
  HelpCircle, 
  Languages, 
  ChevronDown, 
  Search,
  Sparkles,
  ExternalLink,
  User,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  savedCount: number;
  selectedLanguage: 'English' | 'Hindi' | 'Hinglish';
  setSelectedLanguage: (lang: 'English' | 'Hindi' | 'Hinglish') => void;
  onOpenHelp: () => void;
  onQuickSearch: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  savedCount,
  selectedLanguage,
  setSelectedLanguage,
  onOpenHelp,
  onQuickSearch
}) => {
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [quickSearchText, setQuickSearchText] = useState('');

  const notifications = [
    {
      id: 1,
      title: 'New BIS Quality Control Order (QCO)',
      time: '2 hours ago',
      desc: 'Mandatory ISI Mark certification enforced for Industrial Safety Equipment under S.O. 4509(E).',
      unread: true,
      type: 'qco'
    },
    {
      id: 2,
      title: 'Standard Revision: IS 10322 (Part 5)',
      time: '1 day ago',
      desc: 'Amendment 2 incorporated for Smart City Zhaga receptacle street lighting compatibility.',
      unread: true,
      type: 'revision'
    },
    {
      id: 3,
      title: 'Outdated Reference Alert in Tender #PWD-2024',
      time: '3 days ago',
      desc: 'Legacy standard IS 1944 detected and mapped to IS 10322 (Part 5/Sec 3).',
      unread: false,
      type: 'alert'
    }
  ];

  const handleQuickSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickSearchText.trim()) {
      onQuickSearch(quickSearchText);
      setQuickSearchText('');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 text-slate-800 shadow-2xs">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Product Name */}
          <div 
            onClick={() => setActiveTab('dashboard')} 
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-8 h-8 rounded-md bg-[#1e40af] text-white flex items-center justify-center font-black text-sm shadow-2xs tracking-tighter">
              PB
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold tracking-tight text-[#0f172a] group-hover:text-[#1e40af] transition-colors">
                  Procure<span className="text-[#3b82f6]"> Bharat</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                  BIS Intelligence
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'dashboard'
                  ? 'bg-slate-100 text-[#0f172a] font-bold border border-slate-200 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab('ai-finder')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'ai-finder' || activeTab === 'results'
                  ? 'bg-[#1e40af] text-white shadow-2xs'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>AI Standard Finder</span>
            </button>

            <button
              onClick={() => setActiveTab('doc-analyzer')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'doc-analyzer'
                  ? 'bg-slate-100 text-[#0f172a] font-bold border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Document Analyzer</span>
            </button>

            <button
              onClick={() => setActiveTab('compliance')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'compliance'
                  ? 'bg-slate-100 text-[#0f172a] font-bold border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Compliance & QCO</span>
            </button>

            <button
              onClick={() => setActiveTab('saved')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer relative ${
                activeTab === 'saved'
                  ? 'bg-slate-100 text-[#0f172a] font-bold border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              <span>Saved</span>
              {savedCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 text-[10px] font-bold bg-[#1e40af] text-white rounded-full">
                  {savedCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('history')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'history'
                  ? 'bg-slate-100 text-[#0f172a] font-bold border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <History className="w-4 h-4" />
              <span>History</span>
            </button>

            <button
              onClick={() => setActiveTab('integration')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'integration'
                  ? 'bg-slate-100 text-[#0f172a] font-bold border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Share2 className="w-4 h-4" />
              <span>GeM Integration</span>
            </button>
          </nav>

          {/* Right Action Tools: Quick Search, Language Switcher, Notifications & User */}
          <div className="flex items-center gap-2">
            
            {/* Quick Search */}
            <form onSubmit={handleQuickSearchSubmit} className="hidden md:flex relative items-center">
              <input
                type="text"
                placeholder="Search standard (e.g. IS 10322, Cement)..."
                value={quickSearchText}
                onChange={(e) => setQuickSearchText(e.target.value)}
                className="w-48 lg:w-56 pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:bg-white transition-all"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 pointer-events-none" />
            </form>

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 cursor-pointer shadow-2xs"
                title="Select Language"
              >
                <Languages className="w-4 h-4 text-[#1e40af]" />
                <span className="hidden sm:inline">
                  {selectedLanguage === 'Hindi' ? 'हिन्दी (Hindi)' : selectedLanguage === 'Hinglish' ? 'Hinglish' : 'English'}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {showLangDropdown && (
                <div className="absolute right-0 mt-1.5 w-44 bg-white border border-slate-200 rounded-xl shadow-lg py-1 z-50 animate-in fade-in slide-in-from-top-1">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    Query Language
                  </div>
                  <button
                    onClick={() => { setSelectedLanguage('English'); setShowLangDropdown(false); }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-50 hover:text-[#1e40af] ${selectedLanguage === 'English' ? 'font-bold text-[#1e40af] bg-blue-50/50' : 'text-slate-700'}`}
                  >
                    <span>English (Official)</span>
                    {selectedLanguage === 'English' && <CheckCircle2 className="w-3.5 h-3.5 text-[#1e40af]" />}
                  </button>
                  <button
                    onClick={() => { setSelectedLanguage('Hindi'); setShowLangDropdown(false); }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-50 hover:text-[#1e40af] ${selectedLanguage === 'Hindi' ? 'font-bold text-[#1e40af] bg-blue-50/50' : 'text-slate-700'}`}
                  >
                    <span>हिन्दी (Hindi Input)</span>
                    {selectedLanguage === 'Hindi' && <CheckCircle2 className="w-3.5 h-3.5 text-[#1e40af]" />}
                  </button>
                  <button
                    onClick={() => { setSelectedLanguage('Hinglish'); setShowLangDropdown(false); }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-50 hover:text-[#1e40af] ${selectedLanguage === 'Hinglish' ? 'font-bold text-[#1e40af] bg-blue-50/50' : 'text-slate-700'}`}
                  >
                    <span>Hinglish (Colloquial)</span>
                    {selectedLanguage === 'Hinglish' && <CheckCircle2 className="w-3.5 h-3.5 text-[#1e40af]" />}
                  </button>
                </div>
              )}
            </div>

            {/* Notifications Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
                title="Notifications"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#1e40af] rounded-full ring-2 ring-white"></span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-1.5 w-80 sm:w-96 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-50 animate-in fade-in">
                  <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800">Regulatory Alerts & Revisions</span>
                    <span className="text-[11px] font-semibold text-[#1e40af] cursor-pointer hover:underline">Mark all read</span>
                  </div>
                  <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto">
                    {notifications.map(n => (
                      <div key={n.id} className="p-3 hover:bg-slate-50 transition-colors">
                        <div className="flex items-start gap-2.5">
                          {n.type === 'qco' ? (
                            <div className="p-1 rounded bg-amber-100 text-amber-700 mt-0.5"><AlertTriangle className="w-3.5 h-3.5" /></div>
                          ) : (
                            <div className="p-1 rounded bg-blue-100 text-[#1e40af] mt-0.5"><CheckCircle2 className="w-3.5 h-3.5" /></div>
                          )}
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="text-xs font-semibold text-slate-900">{n.title}</h4>
                              <span className="text-[10px] text-slate-400">{n.time}</span>
                            </div>
                            <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">{n.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2 border-t border-slate-100 text-center">
                    <button 
                      onClick={() => { setActiveTab('compliance'); setShowNotifications(false); }}
                      className="text-xs text-[#1e40af] font-semibold hover:underline flex items-center justify-center gap-1 mx-auto"
                    >
                      View All QCO Gazettes <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile Badge */}
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">
                PO
              </div>
              <div className="hidden xl:block text-left">
                <div className="text-xs font-bold text-[#0f172a] leading-tight">Procurement Officer</div>
                <div className="text-[10px] text-slate-500">DoCA / GeM Cell</div>
              </div>
            </div>

          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        <div className="lg:hidden flex items-center gap-1 overflow-x-auto pb-2 scrollbar-none text-xs">
          <button 
            onClick={() => setActiveTab('dashboard')} 
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap ${activeTab === 'dashboard' ? 'bg-[#1e40af] text-white font-bold' : 'text-slate-700 bg-slate-100'}`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('ai-finder')} 
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap ${activeTab === 'ai-finder' || activeTab === 'results' ? 'bg-[#1e40af] text-white font-bold' : 'text-slate-700 bg-slate-100'}`}
          >
            AI Finder
          </button>
          <button 
            onClick={() => setActiveTab('doc-analyzer')} 
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap ${activeTab === 'doc-analyzer' ? 'bg-[#1e40af] text-white font-bold' : 'text-slate-700 bg-slate-100'}`}
          >
            Documents
          </button>
          <button 
            onClick={() => setActiveTab('compliance')} 
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap ${activeTab === 'compliance' ? 'bg-[#1e40af] text-white font-bold' : 'text-slate-700 bg-slate-100'}`}
          >
            Compliance
          </button>
          <button 
            onClick={() => setActiveTab('saved')} 
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap ${activeTab === 'saved' ? 'bg-[#1e40af] text-white font-bold' : 'text-slate-700 bg-slate-100'}`}
          >
            Saved ({savedCount})
          </button>
          <button 
            onClick={() => setActiveTab('history')} 
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap ${activeTab === 'history' ? 'bg-[#1e40af] text-white font-bold' : 'text-slate-700 bg-slate-100'}`}
          >
            History
          </button>
        </div>

      </div>
    </header>
  );
};
