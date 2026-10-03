import React, { useState, useEffect } from 'react';
import { AppSidebar } from './components/layout/AppSidebar';
import { AppHeader } from './components/layout/AppHeader';
import { HomeDashboard } from './components/dashboard/HomeDashboard';
import { AiFinderView } from './components/finder/AiFinderView';
import { DocumentAnalyzerView } from './components/documents/DocumentAnalyzerView';
import { RecommendationResultsView } from './components/results/RecommendationResultsView';
import { ComplianceView } from './components/compliance/ComplianceView';
import { GapAnalysisView } from './components/gap-analysis/GapAnalysisView';
import { ReportsListView } from './components/report/ReportsListView';
import { SavedStandardsView } from './components/saved/SavedStandardsView';
import { HistoryView } from './components/history/HistoryView';
import { ProductGroupsView } from './components/product-groups/ProductGroupsView';
import { SettingsView } from './components/settings/SettingsView';
import { StandardDetailsModal } from './components/standards/StandardDetailsModal';
import { ReportExportModal } from './components/report/ReportExportModal';
import { HelpModal } from './components/help/HelpModal';

import { AnalysisReport, IndianStandard } from './types/standards';
import { AiRecommendationEngine } from './services/aiRecommendationEngine';
import { INDIAN_STANDARDS_DATABASE, SAMPLE_TENDERS } from './data/standardsDataset';

export default function App() {
  // Navigation State - defaults to 'home'
  const [activeTab, setActiveTab] = useState<string>('home');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);
  
  // Multilingual State
  const [selectedLanguage, setSelectedLanguage] = useState<'English' | 'Hindi' | 'Hinglish'>('English');

  // Query & Active Analysis State
  const [currentQuery, setCurrentQuery] = useState<string>('');
  const [currentReport, setCurrentReport] = useState<AnalysisReport | null>(null);

  // Saved Standards State
  const [savedStandards, setSavedStandards] = useState<IndianStandard[]>(() => {
    try {
      const stored = localStorage.getItem('standardsai_saved');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    // Default initial saved standards for demo richness matching screenshot
    return [
      INDIAN_STANDARDS_DATABASE[0], // IS 10322 (Part 5/Sec 3):2012
      INDIAN_STANDARDS_DATABASE[4], // IS 269:2015
      INDIAN_STANDARDS_DATABASE[7], // IS 16221 (Part 2):2015
      INDIAN_STANDARDS_DATABASE[6], // IS 694:2010
    ];
  });

  // History State
  const [historyReports, setHistoryReports] = useState<AnalysisReport[]>(() => {
    try {
      const stored = localStorage.getItem('standardsai_history');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    // Generate initial realistic sample reports
    const defaultLedReport = AiRecommendationEngine.analyzeSpecification(SAMPLE_TENDERS[0].text, 'Tender Specification', 'English');
    const defaultTransformerReport = AiRecommendationEngine.analyzeSpecification(SAMPLE_TENDERS[3].text, 'Tender Specification', 'English');
    const defaultHelmetReport = AiRecommendationEngine.analyzeSpecification(SAMPLE_TENDERS[2].text, 'Product Description', 'English');
    return [defaultLedReport, defaultTransformerReport, defaultHelmetReport];
  });

  // Modal States
  const [inspectedStandard, setInspectedStandard] = useState<IndianStandard | null>(null);
  const [showExportModal, setShowExportModal] = useState<boolean>(false);
  const [showHelpModal, setShowHelpModal] = useState<boolean>(false);

  // Persist saved standards
  useEffect(() => {
    try {
      localStorage.setItem('standardsai_saved', JSON.stringify(savedStandards));
    } catch (e) {
      console.error(e);
    }
  }, [savedStandards]);

  // Persist history
  useEffect(() => {
    try {
      localStorage.setItem('standardsai_history', JSON.stringify(historyReports));
    } catch (e) {
      console.error(e);
    }
  }, [historyReports]);

  // Handle Analysis Run
  const handlePerformAnalysis = (
    text: string, 
    inputType: any = 'Tender Specification', 
    language: any = selectedLanguage
  ) => {
    const report = AiRecommendationEngine.analyzeSpecification(text, inputType, language);
    setCurrentReport(report);
    setCurrentQuery(text);
    
    // Add to history
    setHistoryReports(prev => [report, ...prev.filter(r => r.id !== report.id)].slice(0, 30));
    
    setActiveTab('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Document Upload Analysis
  const handleDocumentAnalysis = (docText: string, docName: string) => {
    const report = AiRecommendationEngine.analyzeSpecification(docText, 'Tender Specification', selectedLanguage);
    report.identifiedProduct = `${docName.replace(/\.[^/.]+$/, '').replace(/_/g, ' ')}`;
    report.queryOrDocName = docName;
    
    setCurrentReport(report);
    setHistoryReports(prev => [report, ...prev.filter(r => r.id !== report.id)].slice(0, 30));
    setActiveTab('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Saved toggle
  const handleToggleSaveStandard = (standard: IndianStandard) => {
    setSavedStandards(prev => {
      const exists = prev.some(s => s.id === standard.id);
      if (exists) {
        return prev.filter(s => s.id !== standard.id);
      } else {
        return [standard, ...prev];
      }
    });
  };

  const handleRemoveSaved = (id: string) => {
    setSavedStandards(prev => prev.filter(s => s.id !== id));
  };

  const handleAddSampleBatch = () => {
    setSavedStandards(INDIAN_STANDARDS_DATABASE.slice(0, 8));
  };

  // Find standard by IS number for inspector
  const handleOpenStandardByNumber = (isNumber: string) => {
    const found = INDIAN_STANDARDS_DATABASE.find(s => 
      s.isNumber.toLowerCase().includes(isNumber.toLowerCase()) || 
      isNumber.toLowerCase().includes(s.isNumber.toLowerCase())
    );
    if (found) {
      setInspectedStandard(found);
    } else {
      // Fallback to searching
      handlePerformAnalysis(`Standards matching ${isNumber}`, 'Natural Language Query', selectedLanguage);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. PERSISTENT LEFT SIDEBAR (Matching Screenshot) */}
      {/* ------------------------------------------------------------- */}
      <AppSidebar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setMobileSidebarOpen(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        savedCount={savedStandards.length}
        isOpenMobile={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      {/* ------------------------------------------------------------- */}
      {/* 2. MAIN LAYOUT (Header + Content Area) */}
      {/* ------------------------------------------------------------- */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64">
        
        {/* Global App Header */}
        <AppHeader
          onQuickSearch={(query) => handlePerformAnalysis(query, 'Natural Language Query', selectedLanguage)}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          onOpenMobileSidebar={() => setMobileSidebarOpen(true)}
          onOpenHelp={() => setShowHelpModal(true)}
        />

        {/* Content Container */}
        <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto">
          
          {/* VIEW 1: HOME DASHBOARD (Exact match to screenshot) */}
          {(activeTab === 'home' || activeTab === 'dashboard') && (
            <HomeDashboard
              onNavigate={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectStandardByNumber={handleOpenStandardByNumber}
              onRunSearch={(query) => handlePerformAnalysis(query, 'Tender Specification', selectedLanguage)}
            />
          )}

          {/* VIEW 2: STANDARDS SEARCH / AI FINDER */}
          {activeTab === 'standards-search' && (
            <AiFinderView
              initialQuery={currentQuery}
              onAnalysisComplete={(text, type, lang) => handlePerformAnalysis(text, type, lang)}
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
            />
          )}

          {/* VIEW 3: COMPLIANCE CHECKER */}
          {activeTab === 'compliance' && (
            <ComplianceView
              onSelectStandard={(std) => setInspectedStandard(std)}
            />
          )}

          {/* VIEW 4: GAP ANALYSIS */}
          {activeTab === 'gap-analysis' && (
            <GapAnalysisView
              onRunAudit={(text) => handlePerformAnalysis(text, 'Tender Specification', selectedLanguage)}
            />
          )}

          {/* VIEW 5: DOCUMENTS UPLOADER */}
          {activeTab === 'documents' && (
            <DocumentAnalyzerView
              onAnalyzeDocument={handleDocumentAnalysis}
            />
          )}

          {/* VIEW 6: REPORTS & EXPORT DOSSIERS */}
          {activeTab === 'reports' && (
            <ReportsListView
              reports={historyReports}
              onOpenReport={(rep) => {
                setCurrentReport(rep);
                setActiveTab('results');
              }}
              onOpenExportModal={(rep) => {
                setCurrentReport(rep);
                setShowExportModal(true);
              }}
              onNavigateToFinder={() => setActiveTab('standards-search')}
            />
          )}

          {/* VIEW 7: SAVED STANDARDS */}
          {activeTab === 'saved' && (
            <SavedStandardsView
              savedStandards={savedStandards}
              onRemove={handleRemoveSaved}
              onOpenDetails={(std) => setInspectedStandard(std)}
              onNavigateToFinder={() => setActiveTab('standards-search')}
              onAddSampleBatch={handleAddSampleBatch}
            />
          )}

          {/* VIEW 8: SEARCH HISTORY */}
          {activeTab === 'history' && (
            <HistoryView
              historyReports={historyReports}
              onSelectReport={(rep) => {
                setCurrentReport(rep);
                setActiveTab('results');
              }}
              onClearHistory={() => setHistoryReports([])}
              onDeleteReport={(id) => setHistoryReports(prev => prev.filter(r => r.id !== id))}
              onNavigateToFinder={() => setActiveTab('standards-search')}
            />
          )}

          {/* VIEW 9: PRODUCT GROUPS */}
          {activeTab === 'product-groups' && (
            <ProductGroupsView
              onSelectStandard={(std) => setInspectedStandard(std)}
              onSearchCategory={(cat) => handlePerformAnalysis(cat, 'Product Description', selectedLanguage)}
            />
          )}

          {/* VIEW 10: SETTINGS */}
          {activeTab === 'settings' && (
            <SettingsView
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
            />
          )}

          {/* VIEW 11: RECOMMENDATION RESULTS */}
          {activeTab === 'results' && currentReport && (
            <RecommendationResultsView
              report={currentReport}
              onBackToFinder={() => setActiveTab('standards-search')}
              onOpenStandardDetails={(std) => setInspectedStandard(std)}
              onOpenExportModal={() => setShowExportModal(true)}
              onSaveToggle={handleToggleSaveStandard}
              savedStandardIds={savedStandards.map(s => s.id)}
            />
          )}

        </main>

      </div>

      {/* ------------------------------------------------------------- */}
      {/* MODALS */}
      {/* ------------------------------------------------------------- */}
      {/* MODAL 1: Standard Details Inspector */}
      {inspectedStandard && (
        <StandardDetailsModal
          standard={inspectedStandard}
          onClose={() => setInspectedStandard(null)}
          onSaveToggle={handleToggleSaveStandard}
          isSaved={savedStandards.some(s => s.id === inspectedStandard.id)}
        />
      )}

      {/* MODAL 2: Export Report Dialog */}
      {showExportModal && currentReport && (
        <ReportExportModal
          report={currentReport}
          onClose={() => setShowExportModal(false)}
        />
      )}

      {/* MODAL 3: Guidelines / Help */}
      {showHelpModal && (
        <HelpModal
          onClose={() => setShowHelpModal(false)}
        />
      )}

    </div>
  );
}
