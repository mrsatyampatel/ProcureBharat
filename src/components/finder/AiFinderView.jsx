import { useState, useEffect, useMemo } from "react";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Languages,
  FileText,
  Cpu,
  Zap,
  AlertTriangle,
  Flame,
  Award,
  ChevronRight
} from "lucide-react";
const PROCESSING_STEPS = [
  "Parsing technical specification clauses & semantic tokens...",
  "Identifying primary product category & BIS Technical Committee jurisdiction...",
  "Correlating electrical, mechanical, environmental & safety parameters...",
  "Cross-referencing 25,000+ Bureau of Indian Standards (BIS) Gazette records...",
  "Evaluating normative cross-references, test protocols & lab test methods...",
  "Auditing supersession & outdated legacy standards (IS 1944 / IS 12269 / IS 2925:1975)...",
  "Synthesizing mandatory Quality Control Orders (QCO) & GFR 2017 compliance report..."
];

const DEMO_SCENARIOS = [
  {
    id: "scenario-led",
    title: "Smart LED Street Lighting RFP",
    subtitle: "City Municipal Corporation Tender with Ingress & Photobiological Requirements",
    badge: "High Impact Demo",
    badgeColor: "bg-blue-100 text-[#1e40af] border-blue-200",
    highlights: ["IS 10322 (Part 5/Sec 3)", "IS 16107 (Part 2/Sec 1)", "IS 15885 (Driver)", "Outdated IS 1944 Auto-Fix", "440V Grid Gap Alert"],
    type: "Tender Specification",
    lang: "English",
    query: `TENDER SPECIFICATION: Supply, Installation, Testing and Commissioning of 10,000 Nos. Outdoor LED Street Light Luminaires (90W and 120W) for Municipal Smart City Road Network.
1. Electrical & Optical Requirements:
   - System Efficacy: Minimum 120 Lumens/Watt at 5700K Correlated Colour Temperature (CCT), CRI >= 70.
   - Operating Voltage: 140V to 280V AC, 50 Hz. Must withstand 440V AC phase-to-phase high voltage condition.
   - Power Factor: >= 0.95, Total Harmonic Distortion (THD) <= 10%.
   - Ingress Protection: Minimum IP66 protection for optical and control gear compartments. Impact resistance IK08.
   - Surge Protection: Inbuilt 10 kV / 5 kA surge protection device (SPD).
2. Referenced Standards in Legacy Draft:
   - Luminaire construction per IS 1944:1970 and IS 10322.
   - Mandatory BIS CRS Registration and Quality Control Order compliance under MeitY Gazette notification.`
  },
  {
    id: "scenario-transformer",
    title: "1000 kVA Distribution Transformer",
    subtitle: "State Electricity Board Substation RFP with BEE Loss Limits",
    badge: "Heavy Engineering",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    highlights: ["IS 1180 (Part 1):2014", "IS 335 (Insulating Oil)", "CPRI Dynamic Short Circuit Mandate", "BEE Star Level"],
    type: "Tender Specification",
    lang: "English",
    query: `TENDER SPECIFICATION: Supply of 1000 kVA, 11 kV / 433 V, 3-Phase, 50 Hz Outdoor Type Mineral Oil Immersed Step-Down Distribution Transformers.
1. Rating & Losses: 1000 kVA, Dyn11 vector group, maximum total losses at 50% load <= 2000W, at 100% load <= 6500W (BEE 3-Star level).
2. Core & Windings: Prime grade CRGO laser scribed electrical steel, electrolytic copper winding with Class A insulation.
3. Transformer Oil: High grade uninhibited mineral insulating oil conforming to IS 335:2018 with dielectric breakdown voltage >= 60 kV.
4. Mandatory Compliance: Valid BIS ISI Mark license under IS 1180 (Part 1):2014. Dynamic Short Circuit test certificate from CPRI/ERDA required.`
  },
  {
    id: "scenario-helmet",
    title: "Industrial Safety Helmets (PPE)",
    subtitle: "Underground Metro Rail Tunneling & Mining Worker Safety Gear",
    badge: "Personal Protective Equipment",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-200",
    highlights: ["IS 2925:1984", "5.0 kN Shock Attenuation", "2000V Dielectric Test", "Legacy IS 2925:1975 Warning"],
    type: "Technical Specification",
    lang: "English",
    query: `TECHNICAL SPECIFICATION: Supply of 5000 Nos. Industrial Safety Helmets (Non-Metallic) for Underground Metro Rail Tunneling and High-Risk Infrastructure Construction.
1. Shell: Non-metallic high density polyethylene (HDPE) shell with UV stabilization and 6-point textile suspension cradle.
2. Performance Criteria:
   - Impact Attenuation: Transmitted force shall not exceed 5.0 kN when tested as per BIS norms.
   - Penetration Resistance: Pointed 3 kg steel conical striker drop test compliance.
   - Electrical Insulation: High voltage resistance test at 2000V AC with leakage current <= 1.2 mA.
3. Certification: Mandatory ISI Mark under IS 2925 with valid BIS license number. Reference to obsolete IS 2925:1975 noted in annexure.`
  },
  {
    id: "scenario-cement",
    title: "OPC 53 Grade Structural Cement",
    subtitle: "National Highway Expressways & Prestressed Concrete Bridge Girders",
    badge: "Civil Infrastructure",
    badgeColor: "bg-slate-100 text-slate-800 border-slate-300",
    highlights: ["IS 269:2015", "53 MPa 28-Day Strength", "Superseded IS 12269/8112 Unification", "Mandatory ISI Bag Marking"],
    type: "Product Description",
    lang: "English",
    query: `TECHNICAL REQUIREMENT: Procurement of 25,000 Metric Tonnes of Ordinary Portland Cement (OPC 53 Grade) for Highway Bridge Superstructure and Prestressed Concrete Girders.
- 28-day Compressive Strength minimum 53 MPa (IS 12269:1987 referenced in contractor submission).
- Initial setting time >= 30 minutes, Final setting time <= 600 minutes.
- Blaine fineness minimum 225 m²/kg, Soundness Le-Chatelier expansion <= 10 mm.
- Mandatory BIS ISI certification mark on every 50 kg HDPE bag.`
  },
  {
    id: "scenario-hindi",
    title: "🇮🇳 एलईडी स्ट्रीट लाइट खरीद (Hindi Query)",
    subtitle: "भारतीय मानक खोज - प्राकृतिक भाषा हिन्दी प्रश्न",
    badge: "Multi-Lingual NLP",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-200",
    highlights: ["IS 10322 (Part 5/Sec 3)", "IS 16107 (LED)", "अनिवार्य बीआईएस प्रमाणन", "120 lm/W दक्षता"],
    type: "Natural Language Query",
    lang: "Hindi",
    query: `एलईडी स्ट्रीट लाइट के लिए कौन से भारतीय मानक लागू हैं? नगर पालिका की सड़कों के लिए 1000 एलईडी स्ट्रीट लाइटों की खरीद करनी है जिसमें न्यूनतम 120 लुमेन/वाट दक्षता, आईपी66 जलरोधक सुरक्षा, 10 केवी सर्ज प्रोटेक्शन और बीआईएस (BIS) अनिवार्य प्रमाणन शामिल होना चाहिए।`
  }
];

export const AiFinderView = ({
  initialQuery = "",
  onAnalysisComplete,
  selectedLanguage,
  setSelectedLanguage
}) => {
  const [inputText, setInputText] = useState(initialQuery);
  const [inputType, setInputType] = useState("Tender Specification");
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [activeScenarioId, setActiveScenarioId] = useState("scenario-led");

  useEffect(() => {
    if (initialQuery) {
      setInputText(initialQuery);
    } else if (!inputText) {
      setInputText(DEMO_SCENARIOS[0].query);
      setActiveScenarioId(DEMO_SCENARIOS[0].id);
    }
  }, [initialQuery]);
  const liveTelemetry = useMemo(() => {
    const text = inputText.toLowerCase();
    const entities = [];
    if (text.includes("led") || text.includes("street light") || text.includes("luminaire") || text.includes("\u092A\u094D\u0930\u0915\u093E\u0936")) {
      entities.push({ label: "Product Group", value: "Outdoor LED Luminaires", type: "primary" });
    } else if (text.includes("transformer") || text.includes("kva") || text.includes("\u092A\u0930\u093F\u0923\u093E\u092E\u093F\u0924\u094D\u0930")) {
      entities.push({ label: "Product Group", value: "Power Distribution Transformer", type: "primary" });
    } else if (text.includes("helmet") || text.includes("\u0939\u0947\u0932\u092E\u0947\u091F") || text.includes("ppe") || text.includes("head protection")) {
      entities.push({ label: "Product Group", value: "Industrial PPE & Safety Headwear", type: "primary" });
    } else if (text.includes("cement") || text.includes("\u0938\u0940\u092E\u0947\u0902\u091F") || text.includes("opc")) {
      entities.push({ label: "Product Group", value: "Structural Hydraulic Cement", type: "primary" });
    }
    if (text.includes("ip66") || text.includes("ip65") || text.includes("ip68")) {
      entities.push({ label: "Ingress Rating", value: "IP66 Waterproof Enclosure", type: "info" });
    }
    if (text.includes("lm/w") || text.includes("lumens")) {
      entities.push({ label: "Efficacy", value: ">= 120 lm/W Photometrics", type: "info" });
    }
    if (text.includes("10 kv") || text.includes("surge")) {
      entities.push({ label: "Surge Protection", value: "10 kV / 5 kA SPD", type: "info" });
    }
    if (text.includes("440v")) {
      entities.push({ label: "Grid Withstand", value: "440V AC 2-Hr Fault Protection", type: "info" });
    }
    if (text.includes("5.0 kn") || text.includes("5kn") || text.includes("shock")) {
      entities.push({ label: "Impact Attenuation", value: "<= 5.0 kN Force Withstand", type: "info" });
    }
    if (text.includes("53 mpa") || text.includes("53 grade")) {
      entities.push({ label: "Compressive Strength", value: "53 MPa High-Grade Structural", type: "info" });
    }
    if (text.includes("1944") || text.includes("is 1944")) {
      entities.push({ label: "Outdated Standard Flag", value: "IS 1944:1970 [Withdrawn - Flagged for Auto-Fix]", type: "warning" });
    }
    if (text.includes("12269") || text.includes("8112")) {
      entities.push({ label: "Superseded Standard Flag", value: "IS 12269 [Consolidated into IS 269:2015]", type: "warning" });
    }
    if (text.includes("2925:1975")) {
      entities.push({ label: "Legacy Revision Flag", value: "IS 2925:1975 [Updated to 1984 R-2019]", type: "warning" });
    }
    entities.push({ label: "Regulatory Mandate", value: "Mandatory QCO / BIS GFR Rule 144", type: "success" });
    return entities;
  }, [inputText]);
  const handleStartAnalysis = (e) => {
    if (e) e.preventDefault();
    const textToAnalyze = inputText.trim() || DEMO_SCENARIOS[0].query;
    setIsProcessing(true);
    setCurrentStepIndex(0);
    const interval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < PROCESSING_STEPS.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setIsProcessing(false);
            onAnalysisComplete(textToAnalyze, inputType, selectedLanguage);
          }, 350);
          return prev;
        }
      });
    }, 320);
  };
  const handleSelectScenario = (scenario) => {
    setActiveScenarioId(scenario.id);
    setInputText(scenario.query);
    setInputType(scenario.type);
    if (scenario.lang) {
      setSelectedLanguage(scenario.lang);
    }
  };
  return <div className="space-y-6 max-w-6xl mx-auto animate-in fade-in">
      
      {
    /* Flagship Centerpiece Hero Card */
  }
      <div className="bento-card bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-md relative overflow-hidden">
        {
    /* Subtle geometric pattern overlay */
  }
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-[#1e40af]/80 text-blue-200 text-[11px] font-bold tracking-wider uppercase border border-blue-400/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Problem Statement 26108 • Flagship AI Engine
              </span>
              <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold border border-emerald-500/30">
                GFR 2017 & QCO Compliant
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              AI Indian Standard Recommendation Engine
            </h1>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Intelligently identifies applicable primary, allied, safety, normative, and test method Indian Standards (IS) from product descriptions, technical specifications, or complete tender documents in seconds.
            </p>
          </div>

          <div className="flex lg:flex-col sm:flex-row gap-3 lg:items-end shrink-0">
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-left min-w-[170px]">
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Indexed Standards</div>
              <div className="text-lg font-black text-white mt-0.5">25,000+ IS Codes</div>
              <div className="text-[11px] text-emerald-400 font-medium mt-0.5">BIS Gazette Synchronized</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-left min-w-[170px]">
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Evaluation Speed</div>
              <div className="text-lg font-black text-amber-300 mt-0.5">&lt; 3.0 Seconds</div>
              <div className="text-[11px] text-blue-300 font-medium mt-0.5">Real-Time Semantic Parsing</div>
            </div>
          </div>
        </div>
      </div>

      {
    /* 3-Minute Quick Demo Scenarios (Fast Reviewer Track) */
  }
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-600" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">
              3-Minute Fast Evaluation Scenarios (Click to Load & Test Instantly)
            </h2>
          </div>
          <span className="text-[11px] text-slate-500 font-medium hidden sm:block">
            Pre-configured with real-world public procurement challenges
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {DEMO_SCENARIOS.map((scenario) => {
    const isSelected = activeScenarioId === scenario.id;
    return <button
      key={scenario.id}
      type="button"
      onClick={() => handleSelectScenario(scenario)}
      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${isSelected ? "bg-blue-50/80 border-[#1e40af] ring-2 ring-blue-200 shadow-xs" : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/80"}`}
    >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${scenario.badgeColor}`}>
                      {scenario.badge}
                    </span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-[#1e40af]" />}
                  </div>
                  <h3 className="text-xs font-bold text-[#0f172a] line-clamp-1">
                    {scenario.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-snug">
                    {scenario.subtitle}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-[#1e40af]">
                  <span>Load Specification</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </button>;
  })}
        </div>
      </div>

      {
    /* Main Analysis Cockpit Card */
  }
      <div className="bento-card space-y-6 relative overflow-hidden">
        
        {isProcessing ? (
    /* Processing State Animation with Live Telemetry */
    <div className="py-12 px-4 sm:px-8 max-w-xl mx-auto text-center space-y-6 animate-in fade-in">
            <div className="bento-gauge mx-auto">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center border border-blue-200">
                <Cpu className="w-8 h-8 text-[#1e40af] animate-pulse" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <h3 className="text-base font-bold text-[#0f172a]">
                  Semantic Intelligence Engine Active
                </h3>
              </div>
              <p className="text-xs font-bold text-[#1e40af] bg-blue-50 py-2 px-4 rounded-full border border-blue-200 inline-block shadow-2xs">
                {PROCESSING_STEPS[currentStepIndex]}
              </p>
            </div>

            {
      /* Step progress indicators */
    }
            <div className="space-y-2 text-left pt-2 max-w-md mx-auto bg-slate-50 p-4 rounded-xl border border-slate-200">
              {PROCESSING_STEPS.map((step, idx) => <div key={idx} className="flex items-center gap-2.5 text-xs">
                  {idx < currentStepIndex ? <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> : idx === currentStepIndex ? <div className="w-4 h-4 rounded-full border-2 border-[#1e40af] border-t-transparent animate-spin shrink-0" /> : <div className="w-4 h-4 rounded-full bg-slate-200 shrink-0" />}
                  <span className={idx === currentStepIndex ? "font-bold text-[#0f172a]" : idx < currentStepIndex ? "text-slate-600 line-through" : "text-slate-400"}>
                    {step}
                  </span>
                </div>)}
            </div>

            <div className="pt-2 text-[11px] text-slate-500 font-medium">
              Correlating with 25,000+ Bureau of Indian Standards Gazette notifications, Quality Control Orders (QCOs), and NABL laboratory protocols.
            </div>
          </div>
  ) : (
    /* Standard Input Cockpit Form */
    <form onSubmit={handleStartAnalysis} className="space-y-6">
            
            {
      /* Top Controls: Input Format Type & Query Language */
    }
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-slate-100">
              
              {
      /* Input Type Selector */
    }
              <div>
                <label className="block text-xs font-bold text-[#0f172a] mb-1.5">
                  Specification Format Type
                </label>
                <div className="grid grid-cols-2 gap-1.5 bg-slate-100 p-1 rounded-lg">
                  {["Tender Specification", "Technical Specification", "Product Description", "Natural Language Query"].map((type) => <button
      type="button"
      key={type}
      onClick={() => setInputType(type)}
      className={`px-2.5 py-1.5 text-[11px] font-semibold rounded-md transition-all text-center cursor-pointer ${inputType === type ? "bg-white text-[#1e40af] shadow-2xs font-bold" : "text-slate-600 hover:text-slate-900"}`}
    >
                      {type}
                    </button>)}
                </div>
              </div>

              {
      /* Language Selector */
    }
              <div>
                <label className="block text-xs font-bold text-[#0f172a] mb-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <Languages className="w-3.5 h-3.5 text-[#1e40af]" />
                    <span>Query & Specification Language</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-normal">Auto-Detection Enabled</span>
                </label>
                <div className="grid grid-cols-3 gap-1.5 bg-slate-100 p-1 rounded-lg">
                  {["English", "Hindi", "Hinglish"].map((lang) => <button
      type="button"
      key={lang}
      onClick={() => setSelectedLanguage(lang)}
      className={`px-2.5 py-1.5 text-[11px] font-semibold rounded-md transition-all text-center cursor-pointer ${selectedLanguage === lang ? "bg-white text-[#1e40af] shadow-2xs font-bold" : "text-slate-600 hover:text-slate-900"}`}
    >
                      {lang === "Hindi" ? "\u{1F1EE}\u{1F1F3} \u0939\u093F\u0928\u094D\u0926\u0940 (Hindi)" : lang}
                    </button>)}
                </div>
              </div>

            </div>

            {
      /* Input Text Area with Real-Time Entity Scanner Preview */
    }
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold text-[#0f172a] flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#1e40af]" />
                  <span>Procurement Specification / Tender Clause Text</span>
                </label>
                <span className="text-[11px] text-slate-500 font-medium">
                  {inputText.length} characters • {inputText.split(/\s+/).filter(Boolean).length} words
                </span>
              </div>

              <textarea
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      placeholder={selectedLanguage === "Hindi" ? "\u0916\u0930\u0940\u0926 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E \u0915\u093E \u0935\u093F\u0935\u0930\u0923 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902... (\u0909\u0926\u093E\u0939\u0930\u0923: \u0928\u0917\u0930 \u092A\u093E\u0932\u093F\u0915\u093E \u0915\u0947 \u0932\u093F\u090F 1000 \u090F\u0932\u0908\u0921\u0940 \u0938\u094D\u091F\u094D\u0930\u0940\u091F \u0932\u093E\u0907\u091F, 120 \u0932\u0941\u092E\u0947\u0928/\u0935\u093E\u091F, \u0906\u0908\u092A\u094066 \u091C\u0932\u0930\u094B\u0927\u0915 \u0914\u0930 \u092C\u0940\u0906\u0908\u090F\u0938 \u092A\u094D\u0930\u092E\u093E\u0923\u0928)" : "Enter technical parameters, performance ratings, test requirements, or paste complete tender specification clauses..."}
      rows={7}
      className="w-full p-4 text-xs sm:text-sm text-[#0f172a] bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent transition-all leading-relaxed font-mono sm:font-sans"
    />
            </div>

            {
      /* Live Telemetry & Entity Scanner Preview */
    }
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#0f172a] flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#1e40af]" />
                  <span>Live Specification Telemetry & Entity Scanner</span>
                </span>
                <span className="text-[11px] text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">
                  {liveTelemetry.length} Semantic Tags Extracted
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {liveTelemetry.map((tag, idx) => <div
      key={idx}
      className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border flex items-center gap-1.5 ${tag.type === "primary" ? "bg-blue-50 text-[#1e40af] border-blue-200" : tag.type === "warning" ? "bg-amber-50 text-amber-900 border-amber-200" : tag.type === "success" ? "bg-emerald-50 text-emerald-800 border-emerald-200" : "bg-slate-100 text-slate-700 border-slate-200"}`}
    >
                    <span className="text-slate-400 font-normal">{tag.label}:</span>
                    <span>{tag.value}</span>
                  </div>)}
              </div>
            </div>

            {
      /* Submit Action Bar */
    }
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero vendor bias • Formats output strictly per GFR 2017 Rule 144</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
      type="button"
      onClick={() => setInputText("")}
      className="px-4 py-2.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-600 text-xs font-semibold cursor-pointer transition-colors"
    >
                  Clear
                </button>

                <button
      type="submit"
      className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer hover:shadow-md"
    >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Identify Applicable Standards</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </form>
  )}

      </div>

      {
    /* Institutional Governance Callouts */
  }
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="bento-card space-y-1.5">
          <div className="font-bold text-[#0f172a] flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#1e40af]" />
            <span>DoCA & BIS Gazette Authority</span>
          </div>
          <p className="text-slate-500 leading-relaxed text-[11px]">
            Maps technical requirements against official Technical Committee scopes (LITD, CED, ETD, TXD) and current Indian Standard editions.
          </p>
        </div>

        <div className="bento-card space-y-1.5">
          <div className="font-bold text-[#0f172a] flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Mandatory QCO Legal Enforcement</span>
          </div>
          <p className="text-slate-500 leading-relaxed text-[11px]">
            Checks statutory Quality Control Orders under BIS Act Section 16 to flag required ISI Mark (Scheme-I) or CRS certification.
          </p>
        </div>

        <div className="bento-card space-y-1.5">
          <div className="font-bold text-[#0f172a] flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Supersession & Gap Detection</span>
          </div>
          <p className="text-slate-500 leading-relaxed text-[11px]">
            Identifies obsolete references (e.g. IS 1944 or IS 12269) and generates ready-to-paste standardized tender clauses.
          </p>
        </div>
      </div>

    </div>;
};
