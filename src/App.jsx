'use client';

import { useState, useEffect } from "react";
import { AppSidebar } from "./components/layout/AppSidebar";
import { AppHeader } from "./components/layout/AppHeader";
import { HomeDashboard } from "./components/dashboard/HomeDashboard";
import { AiFinderView } from "./components/finder/AiFinderView";
import { DocumentAnalyzerView } from "./components/documents/DocumentAnalyzerView";
import { RecommendationResultsView } from "./components/results/RecommendationResultsView";
import { ComplianceView } from "./components/compliance/ComplianceView";
import { GapAnalysisView } from "./components/gap-analysis/GapAnalysisView";
import { ReportsListView } from "./components/report/ReportsListView";
import { SavedStandardsView } from "./components/saved/SavedStandardsView";
import { HistoryView } from "./components/history/HistoryView";
import { ProductGroupsView } from "./components/product-groups/ProductGroupsView";
import { SettingsView } from "./components/settings/SettingsView";
import { StandardDetailsModal } from "./components/standards/StandardDetailsModal";
import { ReportExportModal } from "./components/report/ReportExportModal";
import { HelpModal } from "./components/help/HelpModal";
import { AiRecommendationEngine } from "./services/aiRecommendationEngine";
import { INDIAN_STANDARDS_DATABASE, SAMPLE_TENDERS } from "./data/standardsDataset";

// Resilient storage helper that never throws SecurityError in sandboxed iframes or private windows
const safeStorage = {
  getItem: (key) => {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        return window.localStorage.getItem(key);
      }
    } catch {
      // Storage access blocked by browser sandbox / iframe policy
    }
    return null;
  },
  setItem: (key, value) => {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.setItem(key, value);
      }
    } catch {
      // Storage access blocked by browser sandbox / iframe policy
    }
  },
};

const DEFAULT_SAVED_STANDARDS = [
  INDIAN_STANDARDS_DATABASE[0],
  INDIAN_STANDARDS_DATABASE[4],
  INDIAN_STANDARDS_DATABASE[7],
  INDIAN_STANDARDS_DATABASE[6],
];

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [currentQuery, setCurrentQuery] = useState("");
  const [currentReport, setCurrentReport] = useState(null);
  
  const [savedStandards, setSavedStandards] = useState(DEFAULT_SAVED_STANDARDS);
  const [historyReports, setHistoryReports] = useState(() => [
    AiRecommendationEngine.analyzeSpecification(SAMPLE_TENDERS[0].text, "Tender Specification", "English"),
    AiRecommendationEngine.analyzeSpecification(SAMPLE_TENDERS[3].text, "Tender Specification", "English"),
    AiRecommendationEngine.analyzeSpecification(SAMPLE_TENDERS[2].text, "Product Description", "English"),
  ]);

  const [inspectedStandard, setInspectedStandard] = useState(null);
  const [showExportModal, setShowExportModal] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);

  // Hydrate from storage on client mount safely
  useEffect(() => {
    const storedSaved = safeStorage.getItem("standardsai_saved");
    if (storedSaved) {
      try {
        const parsed = JSON.parse(storedSaved);
        if (Array.isArray(parsed) && parsed.length > 0) setSavedStandards(parsed);
      } catch {}
    }

    const storedHist = safeStorage.getItem("standardsai_history");
    if (storedHist) {
      try {
        const parsed = JSON.parse(storedHist);
        if (Array.isArray(parsed) && parsed.length > 0) setHistoryReports(parsed);
      } catch {}
    }
  }, []);

  // Sync to safe storage
  useEffect(() => {
    safeStorage.setItem("standardsai_saved", JSON.stringify(savedStandards));
  }, [savedStandards]);

  useEffect(() => {
    safeStorage.setItem("standardsai_history", JSON.stringify(historyReports));
  }, [historyReports]);
  const handlePerformAnalysis = (text, inputType = "Tender Specification", language = selectedLanguage) => {
    const report = AiRecommendationEngine.analyzeSpecification(text, inputType, language);
    setCurrentReport(report);
    setCurrentQuery(text);
    setHistoryReports((prev) => [report, ...prev.filter((r) => r.id !== report.id)].slice(0, 30));
    setActiveTab("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleDocumentAnalysis = (docText, docName) => {
    const report = AiRecommendationEngine.analyzeSpecification(docText, "Tender Specification", selectedLanguage);
    report.identifiedProduct = `${docName.replace(/\.[^/.]+$/, "").replace(/_/g, " ")}`;
    report.queryOrDocName = docName;
    setCurrentReport(report);
    setHistoryReports((prev) => [report, ...prev.filter((r) => r.id !== report.id)].slice(0, 30));
    setActiveTab("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleToggleSaveStandard = (standard) => {
    setSavedStandards((prev) => {
      const exists = prev.some((s) => s.id === standard.id);
      if (exists) {
        return prev.filter((s) => s.id !== standard.id);
      } else {
        return [standard, ...prev];
      }
    });
  };
  const handleRemoveSaved = (id) => {
    setSavedStandards((prev) => prev.filter((s) => s.id !== id));
  };
  const handleAddSampleBatch = () => {
    setSavedStandards(INDIAN_STANDARDS_DATABASE.slice(0, 8));
  };
  const handleOpenStandardByNumber = (isNumber) => {
    const found = INDIAN_STANDARDS_DATABASE.find(
      (s) => s.isNumber.toLowerCase().includes(isNumber.toLowerCase()) || isNumber.toLowerCase().includes(s.isNumber.toLowerCase())
    );
    if (found) {
      setInspectedStandard(found);
    } else {
      handlePerformAnalysis(`Standards matching ${isNumber}`, "Natural Language Query", selectedLanguage);
    }
  };
  return <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {
    /* ------------------------------------------------------------- */
  }
      {
    /* 1. PERSISTENT LEFT SIDEBAR (Matching Screenshot) */
  }
      {
    /* ------------------------------------------------------------- */
  }
      <AppSidebar
    activeTab={activeTab}
    setActiveTab={(tab) => {
      setActiveTab(tab);
      setMobileSidebarOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
    savedCount={savedStandards.length}
    isOpenMobile={mobileSidebarOpen}
    onCloseMobile={() => setMobileSidebarOpen(false)}
  />

      {
    /* ------------------------------------------------------------- */
  }
      {
    /* 2. MAIN LAYOUT (Header + Content Area) */
  }
      {
    /* ------------------------------------------------------------- */
  }
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64">
        
        {
    /* Global App Header */
  }
        <AppHeader
    onQuickSearch={(query) => handlePerformAnalysis(query, "Natural Language Query", selectedLanguage)}
    selectedLanguage={selectedLanguage}
    setSelectedLanguage={setSelectedLanguage}
    onOpenMobileSidebar={() => setMobileSidebarOpen(true)}
    onOpenHelp={() => setShowHelpModal(true)}
  />

        {
    /* Content Container */
  }
        <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto">
          
          {
    /* VIEW 1: HOME DASHBOARD (Exact match to screenshot) */
  }
          {(activeTab === "home" || activeTab === "dashboard") && <HomeDashboard
    onNavigate={(tab) => {
      setActiveTab(tab);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
    onSelectStandardByNumber={handleOpenStandardByNumber}
    onRunSearch={(query) => handlePerformAnalysis(query, "Tender Specification", selectedLanguage)}
  />}

          {
    /* VIEW 2: STANDARDS SEARCH / AI FINDER */
  }
          {activeTab === "standards-search" && <AiFinderView
    initialQuery={currentQuery}
    onAnalysisComplete={(text, type, lang) => handlePerformAnalysis(text, type, lang)}
    selectedLanguage={selectedLanguage}
    setSelectedLanguage={setSelectedLanguage}
  />}

          {
    /* VIEW 3: COMPLIANCE CHECKER */
  }
          {activeTab === "compliance" && <ComplianceView
    onSelectStandard={(std) => setInspectedStandard(std)}
  />}

          {
    /* VIEW 4: GAP ANALYSIS */
  }
          {activeTab === "gap-analysis" && <GapAnalysisView
    onRunAudit={(text) => handlePerformAnalysis(text, "Tender Specification", selectedLanguage)}
  />}

          {
    /* VIEW 5: DOCUMENTS UPLOADER */
  }
          {activeTab === "documents" && <DocumentAnalyzerView
    onAnalyzeDocument={handleDocumentAnalysis}
  />}

          {
    /* VIEW 6: REPORTS & EXPORT DOSSIERS */
  }
          {activeTab === "reports" && <ReportsListView
    reports={historyReports}
    onOpenReport={(rep) => {
      setCurrentReport(rep);
      setActiveTab("results");
    }}
    onOpenExportModal={(rep) => {
      setCurrentReport(rep);
      setShowExportModal(true);
    }}
    onNavigateToFinder={() => setActiveTab("standards-search")}
  />}

          {
    /* VIEW 7: SAVED STANDARDS */
  }
          {activeTab === "saved" && <SavedStandardsView
    savedStandards={savedStandards}
    onRemove={handleRemoveSaved}
    onOpenDetails={(std) => setInspectedStandard(std)}
    onNavigateToFinder={() => setActiveTab("standards-search")}
    onAddSampleBatch={handleAddSampleBatch}
  />}

          {
    /* VIEW 8: SEARCH HISTORY */
  }
          {activeTab === "history" && <HistoryView
    historyReports={historyReports}
    onSelectReport={(rep) => {
      setCurrentReport(rep);
      setActiveTab("results");
    }}
    onClearHistory={() => setHistoryReports([])}
    onDeleteReport={(id) => setHistoryReports((prev) => prev.filter((r) => r.id !== id))}
    onNavigateToFinder={() => setActiveTab("standards-search")}
  />}

          {
    /* VIEW 9: PRODUCT GROUPS */
  }
          {activeTab === "product-groups" && <ProductGroupsView
    onSelectStandard={(std) => setInspectedStandard(std)}
    onSearchCategory={(cat) => handlePerformAnalysis(cat, "Product Description", selectedLanguage)}
  />}

          {
    /* VIEW 10: SETTINGS */
  }
          {activeTab === "settings" && <SettingsView
    selectedLanguage={selectedLanguage}
    setSelectedLanguage={setSelectedLanguage}
  />}

          {
    /* VIEW 11: RECOMMENDATION RESULTS */
  }
          {activeTab === "results" && currentReport && <RecommendationResultsView
    report={currentReport}
    onBackToFinder={() => setActiveTab("standards-search")}
    onOpenStandardDetails={(std) => setInspectedStandard(std)}
    onOpenExportModal={() => setShowExportModal(true)}
    onSaveToggle={handleToggleSaveStandard}
    savedStandardIds={savedStandards.map((s) => s.id)}
  />}

        </main>

      </div>

      {
    /* ------------------------------------------------------------- */
  }
      {
    /* MODALS */
  }
      {
    /* ------------------------------------------------------------- */
  }
      {
    /* MODAL 1: Standard Details Inspector */
  }
      {inspectedStandard && <StandardDetailsModal
    standard={inspectedStandard}
    onClose={() => setInspectedStandard(null)}
    onSaveToggle={handleToggleSaveStandard}
    isSaved={savedStandards.some((s) => s.id === inspectedStandard.id)}
  />}

      {
    /* MODAL 2: Export Report Dialog */
  }
      {showExportModal && currentReport && <ReportExportModal
    report={currentReport}
    onClose={() => setShowExportModal(false)}
  />}

      {
    /* MODAL 3: Guidelines / Help */
  }
      {showHelpModal && <HelpModal
    onClose={() => setShowHelpModal(false)}
  />}

    </div>;
}
