import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  FileText,
  AlertTriangle,
  BookOpen,
  Zap,
  Search,
  GitBranch,
  Languages
} from "lucide-react";
export const LandingPage = ({
  onStartAnalysis,
  onExploreStandards
}) => {
  return <div className="space-y-16">
      
      {
    /* ------------------------------------------------------------- */
  }
      {
    /* HERO SECTION */
  }
      {
    /* ------------------------------------------------------------- */
  }
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl">
        
        {
    /* Subtle grid pattern background */
  }
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {
    /* Ambient Glow */
  }
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          
          {
    /* Official Badge */
  }
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-200 text-xs font-semibold backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            <span>Department of Consumer Affairs (DoCA) • Problem Statement #26108</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Find the Right Indian Standards. <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              Build Better Procurement Specifications.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            AI-powered semantic analysis for identifying applicable Indian Standards, related references, latest amendments, test methods, and mandatory BIS/QCO certifications.
          </p>

          {
    /* Action CTAs */
  }
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
    onClick={() => onStartAnalysis()}
    className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-600/40 hover:scale-102 transition-all cursor-pointer"
  >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Analyze Specification with AI</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
    onClick={onExploreStandards}
    className="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 font-semibold text-sm flex items-center gap-2 transition-all cursor-pointer backdrop-blur"
  >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>Explore Standards Directory</span>
            </button>
          </div>

          {
    /* Quick Demo Pills */
  }
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">Try live procurement scenarios:</span>
            <button
    onClick={() => onStartAnalysis("Procurement of 1000 LED street lights with minimum 120 lm/W efficacy, IP66 protection, surge protection and outdoor installation requirements.")}
    className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-blue-900/60 hover:text-white border border-slate-700 text-slate-300 cursor-pointer transition-colors"
  >
              💡 LED Street Lighting
            </button>
            <button
    onClick={() => onStartAnalysis("Supply of 5000 Nos. Industrial Safety Helmets (Non-Metallic) with 5kN shock absorption, HDPE shell, 2000V electrical resistance.")}
    className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-blue-900/60 hover:text-white border border-slate-700 text-slate-300 cursor-pointer transition-colors"
  >
              ⛑️ Safety Helmets
            </button>
            <button
    onClick={() => onStartAnalysis("Procurement of 1000 kVA 11kV/433V Outdoor Type Mineral Oil Immersed Distribution Transformers complying with BEE Star losses.")}
    className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-blue-900/60 hover:text-white border border-slate-700 text-slate-300 cursor-pointer transition-colors"
  >
              ⚡ 1000 kVA Transformer
            </button>
            <button
    onClick={() => onStartAnalysis("\u090F\u0932\u0908\u0921\u0940 \u0938\u094D\u091F\u094D\u0930\u0940\u091F \u0932\u093E\u0907\u091F \u0915\u0947 \u0932\u093F\u090F \u0915\u094C\u0928 \u0938\u0947 \u092D\u093E\u0930\u0924\u0940\u092F \u092E\u093E\u0928\u0915 \u0932\u093E\u0917\u0942 \u0939\u0948\u0902?")}
    className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-blue-900/60 hover:text-white border border-slate-700 text-amber-300 font-medium cursor-pointer transition-colors"
  >
              🇮🇳 हिन्दी प्रश्न (Hindi Query)
            </button>
          </div>

        </div>

        {
    /* Visual Architecture Flow Diagram */
  }
        <div className="relative z-10 mt-12 pt-8 border-t border-slate-800">
          <div className="text-center mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
              End-to-End Semantic Processing Pipeline
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 max-w-4xl mx-auto items-center">
            
            <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-3.5 text-center shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-blue-900/60 text-blue-400 flex items-center justify-center mx-auto mb-2">
                <FileText className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-white">Tender / Spec</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Product text or PDF</div>
            </div>

            <div className="hidden sm:flex justify-center text-blue-400">
              <ArrowRight className="w-5 h-5 animate-pulse" />
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 border border-blue-600/40 rounded-xl p-3.5 text-center shadow-md">
              <div className="w-8 h-8 rounded-lg bg-blue-500/30 text-cyan-300 flex items-center justify-center mx-auto mb-2">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-white">Semantic AI Engine</div>
              <div className="text-[10px] text-blue-200 mt-0.5">BIS Knowledge Graph</div>
            </div>

            <div className="hidden sm:flex justify-center text-blue-400">
              <ArrowRight className="w-5 h-5 animate-pulse" />
            </div>

            <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-3.5 text-center shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-emerald-900/60 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-white">Standards & QCO</div>
              <div className="text-[10px] text-emerald-300/80 mt-0.5">Relevant IS & Certifications</div>
            </div>

          </div>
        </div>

      </section>


      {
    /* ------------------------------------------------------------- */
  }
      {
    /* WHY STANDARDS AI & GOVERNMENT BENEFITS */
  }
      {
    /* ------------------------------------------------------------- */
  }
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xs uppercase font-bold tracking-widest text-blue-600">Why StandardsAI?</h2>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">
            Empowering Smart Procurement for Government & Public Sector
          </p>
          <p className="text-sm text-slate-600 mt-2">
            Eliminating specification ambiguities and legal disputes by automating Indian Standards identification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Reduce Specification Ambiguity</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Auto-generate precise technical clauses and BIS standard references directly matching the procurement item parameters to eliminate vendor confusion.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Avoid Outdated Standards</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Instantly detects deprecated, withdrawn, or superseded Indian Standards (e.g. IS 1944 or IS 12269) and automatically recommends current active revisions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Mandatory QCO Compliance</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ensures tender documents enforce mandatory Quality Control Orders (QCO), BIS ISI Mark Scheme I, and CRS registration per Central Government mandates.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">
              <GitBranch className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Normative & Allied Discovery</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Discovers all cross-referenced testing methods, material specifications, and safety guidelines linked into the primary product standard.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-4">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Semantic Deep Search</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Understands complex technical parameters (such as "120 lm/W", "IP66", "Fe 500D", "5kN impact") instead of brittle, keyword-only search.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
              <Languages className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Multilingual Ingestion</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Procurement officers can query in English, Hindi, or Hinglish, and the engine automatically maps natural descriptions to official Gazette standards.
            </p>
          </div>

        </div>
      </section>


      {
    /* ------------------------------------------------------------- */
  }
      {
    /* KEY CAPABILITIES CHECKLIST */
  }
      {
    /* ------------------------------------------------------------- */
  }
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-400">System Capabilities</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Complete Coverage for Government Procurement</h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Addressing all 10 core analytical dimensions specified in DoCA Problem Statement #26108
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block text-sm">1. Primary Indian Standards (IS)</strong>
                <span className="text-slate-300">Directly applicable product specification standards with publication dates and ICS codes.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block text-sm">2. Allied & Performance Standards</strong>
                <span className="text-slate-300">Complementary efficiency, photometric, and electrical performance standards.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block text-sm">3. Normative Cross-References</strong>
                <span className="text-slate-300">Automated recursive extraction of all underlying material and component standards.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block text-sm">4. Test Method Standards</strong>
                <span className="text-slate-300">Lab testing procedures, acceptance tests, and sampling protocols.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block text-sm">5. Safety & Environmental Standards</strong>
                <span className="text-slate-300">Electrical shock protection, fire flammability, and IP ingress classification.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block text-sm">6. Mandatory QCO & Certifications</strong>
                <span className="text-slate-300">Quality Control Orders, BIS ISI Mark Scheme I, and CRS registration orders.</span>
              </div>
            </div>

          </div>

          <div className="text-center pt-4">
            <button
    onClick={() => onStartAnalysis()}
    className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl cursor-pointer"
  >
              Launch AI Recommendation Engine Now
            </button>
          </div>

        </div>
      </section>

    </div>;
};
