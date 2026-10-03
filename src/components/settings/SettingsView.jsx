import { useState } from "react";
import {
  Settings,
  Globe,
  Check,
  Save,
  Scale
} from "lucide-react";
export const SettingsView = ({
  selectedLanguage,
  setSelectedLanguage
}) => {
  const [autoFixOutdated, setAutoFixOutdated] = useState(true);
  const [strictGfrNeutrality, setStrictGfrNeutrality] = useState(true);
  const [realtimeQcoFeeds, setRealtimeQcoFeeds] = useState(true);
  const [bilingualDossiers, setBilingualDossiers] = useState(true);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const handleSavePreferences = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };
  return <div className="space-y-6 animate-in fade-in pb-12 max-w-5xl mx-auto">
      
      {
    /* Header */
  }
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-2">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-bold tracking-wide uppercase border border-slate-200 flex items-center gap-1">
            <Settings className="w-3.5 h-3.5" />
            <span>Application Preferences</span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
          System & Procurement Engine Settings
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
          Configure default AI recommendation thresholds, GFR 2017 anti-rigging rule strictness, multilingual Hindi localization, and automated QCO gazette synchronization.
        </p>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
        
        {
    /* 1. Language & Localization */
  }
        <div className="space-y-3 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#1d4ed8]" />
            <h2 className="text-sm font-bold text-[#0f172a]">
              Primary Language & Translation Mode
            </h2>
          </div>
          <p className="text-xs text-slate-500">
            Set the default working language for AI query interpretation and generated tender clauses.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {["English", "Hindi", "Hinglish"].map((lang) => <button
    key={lang}
    onClick={() => setSelectedLanguage(lang)}
    className={`p-3.5 rounded-2xl border text-left flex items-center justify-between cursor-pointer transition-all ${selectedLanguage === lang ? "bg-blue-50 border-[#1d4ed8] text-[#1d4ed8] font-bold shadow-2xs" : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"}`}
  >
                <div>
                  <div className="text-xs font-bold">{lang === "Hindi" ? "\u0939\u093F\u0928\u094D\u0926\u0940 (Hindi)" : lang}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">
                    {lang === "English" ? "Official English Standards" : lang === "Hindi" ? "\u092E\u093E\u0928\u0915 \u090F\u0935\u0902 \u0930\u093E\u091C\u092D\u093E\u0937\u093E \u0939\u093F\u0928\u094D\u0926\u0940" : "Colloquial Hindi/English"}
                  </div>
                </div>
                {selectedLanguage === lang && <Check className="w-4 h-4 text-[#1d4ed8]" />}
              </button>)}
          </div>
        </div>

        {
    /* 2. Automated AI Procurement Auditing Rules */
  }
        <div className="space-y-4 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-[#1d4ed8]" />
            <h2 className="text-sm font-bold text-[#0f172a]">
              Procurement Audit & Neutrality Guardrails
            </h2>
          </div>

          <div className="space-y-3">
            {
    /* Toggle 1 */
  }
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="space-y-0.5 pr-4">
                <div className="text-xs font-bold text-slate-900">
                  Automated Superseded Standard Detection & 1-Click Fix
                </div>
                <div className="text-[11px] text-slate-500">
                  Warn immediately when tender specifications cite repealed or legacy Indian Standards.
                </div>
              </div>
              <input
    type="checkbox"
    checked={autoFixOutdated}
    onChange={(e) => setAutoFixOutdated(e.target.checked)}
    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
  />
            </div>

            {
    /* Toggle 2 */
  }
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="space-y-0.5 pr-4">
                <div className="text-xs font-bold text-slate-900">
                  Strict GFR 2017 Rule 144 Anti-Rigging Check
                </div>
                <div className="text-[11px] text-slate-500">
                  Flag proprietary brand names or restrictive vendor-specific parameters.
                </div>
              </div>
              <input
    type="checkbox"
    checked={strictGfrNeutrality}
    onChange={(e) => setStrictGfrNeutrality(e.target.checked)}
    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
  />
            </div>

            {
    /* Toggle 3 */
  }
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="space-y-0.5 pr-4">
                <div className="text-xs font-bold text-slate-900">
                  Real-Time QCO Gazette Synchronization
                </div>
                <div className="text-[11px] text-slate-500">
                  Stream mandatory Quality Control Order enforcement dates directly from e-Gazette and BIS portal.
                </div>
              </div>
              <input
    type="checkbox"
    checked={realtimeQcoFeeds}
    onChange={(e) => setRealtimeQcoFeeds(e.target.checked)}
    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
  />
            </div>

            {
    /* Toggle 4 */
  }
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="space-y-0.5 pr-4">
                <div className="text-xs font-bold text-slate-900">
                  Bilingual PDF Dossier Generation
                </div>
                <div className="text-[11px] text-slate-500">
                  Include both English and Hindi standard titles in exported tender documents.
                </div>
              </div>
              <input
    type="checkbox"
    checked={bilingualDossiers}
    onChange={(e) => setBilingualDossiers(e.target.checked)}
    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
  />
            </div>
          </div>
        </div>

        {
    /* Action Save Button */
  }
        <div className="flex items-center justify-between pt-2">
          {savedSuccess ? <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
              <Check className="w-4 h-4" />
              <span>Preferences saved successfully!</span>
            </span> : <span className="text-xs text-slate-400">
              Changes take effect immediately across all analysis tools.
            </span>}

          <button
    onClick={handleSavePreferences}
    className="px-6 py-2.5 rounded-xl bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold text-xs flex items-center gap-1.5 shadow-sm cursor-pointer transition-all"
  >
            <Save className="w-4 h-4" />
            <span>Save Settings</span>
          </button>
        </div>

      </div>

    </div>;
};
