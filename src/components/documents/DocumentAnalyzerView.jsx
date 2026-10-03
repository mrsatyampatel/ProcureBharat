import { useState } from "react";
import {
  Upload,
  FileText,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  File,
  RefreshCw
} from "lucide-react";
import { SAMPLE_TENDERS } from "../../data/standardsDataset";
export const DocumentAnalyzerView = ({
  onAnalyzeDocument
}) => {
  const [selectedFile, setSelectedFile] = useState({
    name: "Tender_PWD_2024_LED_StreetLighting_SmartCity.pdf",
    size: "1.8 MB",
    pages: 14,
    text: SAMPLE_TENDERS[0].text,
    type: "PDF Document"
  });
  const [isDragging, setIsDragging] = useState(false);
  const [isParsing, setIsParsing] = useState(false);
  const [parseProgress, setParseProgress] = useState(0);
  const sampleDocs = [
    {
      id: "doc-led",
      name: "Tender_MCD_2024_LED_StreetLighting.pdf",
      size: "2.4 MB",
      pages: 18,
      category: "Lighting",
      text: SAMPLE_TENDERS[0].text
    },
    {
      id: "doc-transformer",
      name: "NTPC_1000kVA_Distribution_Transformer_Spec.docx",
      size: "3.1 MB",
      pages: 26,
      category: "Power",
      text: SAMPLE_TENDERS[3].text
    },
    {
      id: "doc-helmet",
      name: "DMRC_Tunneling_Safety_Helmet_PPE_Tender.pdf",
      size: "1.2 MB",
      pages: 10,
      category: "PPE",
      text: SAMPLE_TENDERS[2].text
    },
    {
      id: "doc-cement",
      name: "NHAI_HighGrade_OPC53_Bridge_Spec.pdf",
      size: "4.5 MB",
      pages: 32,
      category: "Civil",
      text: SAMPLE_TENDERS[4].text
    }
  ];
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile({
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        pages: Math.floor(Math.random() * 20) + 5,
        text: SAMPLE_TENDERS[0].text + `
Uploaded from file: ${file.name}`,
        type: file.type || "Document"
      });
    }
  };
  const handleManualUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile({
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        pages: Math.floor(Math.random() * 20) + 5,
        text: SAMPLE_TENDERS[0].text + `
Uploaded from file: ${file.name}`,
        type: file.type || "Document"
      });
    }
  };
  const handleAnalyze = () => {
    if (!selectedFile) return;
    setIsParsing(true);
    setParseProgress(20);
    const timer1 = setTimeout(() => setParseProgress(55), 300);
    const timer2 = setTimeout(() => setParseProgress(85), 650);
    const timer3 = setTimeout(() => {
      setParseProgress(100);
      setIsParsing(false);
      onAnalyzeDocument(selectedFile.text, selectedFile.name);
    }, 1e3);
  };
  return <div className="max-w-4xl mx-auto space-y-6">
      
      {
    /* Header */
  }
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-blue-50 text-[#1e40af]">
            <FileText className="w-5 h-5" />
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-[#0f172a] tracking-tight">
            Analyze a Tender or Technical Document
          </h1>
        </div>
        <p className="text-xs text-slate-500">
          Upload complete tender schedules, RFP specifications, or technical annexures to automatically extract sections and identify applicable Indian Standards.
        </p>
      </div>

      {
    /* Upload Zone */
  }
      <div
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
    onDrop={handleDrop}
    className={`rounded-xl border-2 border-dashed p-8 text-center transition-all ${isDragging ? "border-[#3b82f6] bg-blue-50/60 scale-[1.01]" : "border-slate-300 hover:border-[#3b82f6] bg-white"}`}
  >
        <div className="max-w-md mx-auto space-y-4">
          <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#1e40af] flex items-center justify-center mx-auto">
            <Upload className="w-7 h-7" />
          </div>

          <div className="space-y-1">
            <h3 className="text-base font-bold text-[#0f172a]">
              Drop your tender document here
            </h3>
            <p className="text-xs text-slate-500">
              Supports <strong className="text-slate-700">PDF, DOCX, TXT</strong> files up to 25 MB
            </p>
          </div>

          <div className="pt-2">
            <label className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer inline-flex items-center gap-2 transition-colors">
              <File className="w-4 h-4 text-slate-500" />
              <span>Browse Files on Computer</span>
              <input
    type="file"
    accept=".pdf,.docx,.doc,.txt"
    onChange={handleManualUpload}
    className="hidden"
  />
            </label>
          </div>
        </div>
      </div>

      {
    /* Pre-loaded Sample Tender Documents */
  }
      <div className="space-y-2.5">
        <span className="text-xs font-bold text-slate-700 block">
          Or test with sample government tender documents:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {sampleDocs.map((doc) => <div
    key={doc.id}
    onClick={() => setSelectedFile({
      name: doc.name,
      size: doc.size,
      pages: doc.pages,
      text: doc.text,
      type: "PDF Document"
    })}
    className={`p-3.5 rounded-lg border flex items-center justify-between gap-3 cursor-pointer transition-all ${selectedFile?.name === doc.name ? "border-[#1e40af] bg-blue-50/50 shadow-2xs" : "border-slate-200 bg-white hover:bg-slate-50"}`}
  >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1e40af] flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-xs font-bold text-[#0f172a] truncate">{doc.name}</div>
                  <div className="text-[11px] text-slate-500">{doc.size} • {doc.pages} Pages</div>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 shrink-0">
                {doc.category}
              </span>
            </div>)}
        </div>
      </div>

      {
    /* Selected File Details & Analysis Action Card */
  }
      {selectedFile && <div className="bento-card space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-[#1e40af] text-white flex items-center justify-center shadow-2xs shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0f172a]">{selectedFile.name}</h4>
                <div className="flex items-center gap-3 text-xs text-slate-500 mt-0.5">
                  <span>Size: <strong className="text-slate-700">{selectedFile.size}</strong></span>
                  <span>•</span>
                  <span>Estimated: <strong className="text-slate-700">{selectedFile.pages} Pages</strong></span>
                  <span>•</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>OCR & Text Extracted</span>
                  </span>
                </div>
              </div>
            </div>

            <button
    onClick={handleAnalyze}
    disabled={isParsing}
    className="px-6 py-2 rounded-lg bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-2xs transition-all cursor-pointer disabled:opacity-50"
  >
              {isParsing ? <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Parsing Sections ({parseProgress}%)...</span>
                </> : <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Analyze Document with AI</span>
                  <ArrowRight className="w-4 h-4" />
                </>}
            </button>
          </div>

          {
    /* Section Breakdown Preview */
  }
          <div className="space-y-2.5">
            <span className="text-xs font-bold text-slate-700 block">
              AI Detected Tender Specification Sections:
            </span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-800">1. Product Scope</div>
                <div className="text-[11px] text-slate-500 mt-1">Outdoor pole mounting, luminaire housing parameters.</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-800">2. Electrical Parameters</div>
                <div className="text-[11px] text-slate-500 mt-1">120 lm/W efficacy, THD &lt; 10%, 440V grid surge.</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-800">3. Environmental & Ingress</div>
                <div className="text-[11px] text-slate-500 mt-1">IP66 dust/water jet, IK08 impact resistance.</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-800">4. Testing & Inspection</div>
                <div className="text-[11px] text-slate-500 mt-1">LM-80 photometric tests, thermal endurance.</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-800">5. Mandatory Certifications</div>
                <div className="text-[11px] text-slate-500 mt-1">BIS CRS registration under MeitY Electronics Order.</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-800">6. Warranty & Maintenance</div>
                <div className="text-[11px] text-slate-500 mt-1">5-year comprehensive defect liability clauses.</div>
              </div>
            </div>
          </div>

        </div>}

    </div>;
};
