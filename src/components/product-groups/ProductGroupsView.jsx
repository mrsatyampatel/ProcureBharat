import { useState } from "react";
import {
  Box,
  Search,
  ChevronRight,
  ShieldCheck,
  Cpu,
  Zap,
  Building2,
  HardHat,
  FlaskConical,
  Factory,
  Layers
} from "lucide-react";
import { INDIAN_STANDARDS_DATABASE } from "../../data/standardsDataset";
export const ProductGroupsView = ({
  onSelectStandard,
  onSearchCategory
}) => {
  const [selectedGroup, setSelectedGroup] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const groups = [
    { name: "All", count: INDIAN_STANDARDS_DATABASE.length, icon: Layers, desc: "All certified Indian Standards categories" },
    { name: "Lighting & Electrical", count: 12, icon: Zap, desc: "Luminaires, LED systems, drivers, solar inverters & switchgear" },
    { name: "Power & Distribution", count: 8, icon: Cpu, desc: "Transformers, distribution apparatus, HT/LT breakers & insulators" },
    { name: "Civil & Construction", count: 14, icon: Building2, desc: "Cement, TMT steel bars, structural concrete & piping systems" },
    { name: "Personal Protective Equipment", count: 6, icon: HardHat, desc: "Safety helmets, protective footwear, harnesses & respiratory masks" },
    { name: "Chemicals & Allied Products", count: 7, icon: FlaskConical, desc: "Paints, industrial solvents, polymers & fertilizers" },
    { name: "Mechanical & Heavy Engineering", count: 9, icon: Factory, desc: "Pumps, diesel engines, pressure vessels & valves" }
  ];
  const filteredStandards = INDIAN_STANDARDS_DATABASE.filter((std) => {
    const matchesGroup = selectedGroup === "All" || std.productGroup === selectedGroup;
    const matchesSearch = searchQuery === "" || std.isNumber.toLowerCase().includes(searchQuery.toLowerCase()) || std.title.toLowerCase().includes(searchQuery.toLowerCase()) || std.technicalCommittee.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGroup && matchesSearch;
  });
  return <div className="space-y-6 animate-in fade-in pb-12 max-w-7xl mx-auto">
      
      {
    /* Header Banner */
  }
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-[#1d4ed8] text-[11px] font-bold tracking-wide uppercase border border-blue-200 flex items-center gap-1">
            <Box className="w-3.5 h-3.5" />
            <span>BIS Product Standardization Directory</span>
          </span>
          <span className="text-xs font-mono text-slate-500 font-semibold">
            24 Technical Divisions • 22,000+ Standards
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
          Product Groups & Technical Committee Repository
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          Browse active Indian Standards organized by product domains, mandatory Quality Control Orders (QCOs), and responsible BIS Technical Committees (LITD, CED, ETD, CHD, MTD).
        </p>
      </div>

      {
    /* Group Pills & Search Row */
  }
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {
    /* Search */
  }
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Filter standards by number, title, committee..."
    className="w-full pl-10 pr-4 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500"
  />
        </div>

        {
    /* Groups horizontal list */
  }
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {groups.map((grp) => {
    const Icon = grp.icon;
    const isSelected = selectedGroup === grp.name;
    return <button
      key={grp.name}
      onClick={() => setSelectedGroup(grp.name)}
      className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${isSelected ? "bg-[#1d4ed8] text-white shadow-2xs" : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"}`}
    >
                <Icon className="w-3.5 h-3.5" />
                <span>{grp.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"}`}>
                  {grp.count}
                </span>
              </button>;
  })}
        </div>
      </div>

      {
    /* Standards Grid */
  }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStandards.map((std) => <div
    key={std.id}
    onClick={() => onSelectStandard(std)}
    className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-xs hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
  >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2 py-0.5 rounded bg-blue-50 text-[#1d4ed8] text-[10px] font-bold uppercase tracking-wider border border-blue-100">
                  {std.productGroup || "Standard"}
                </span>
                
                {std.certification.mandatory && <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold flex items-center gap-1 border border-emerald-200">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>Mandatory QCO</span>
                  </span>}
              </div>

              <h3 className="text-base font-bold text-slate-900 group-hover:text-[#1d4ed8] transition-colors font-mono pt-1">
                {std.isNumber}
              </h3>

              <h4 className="text-xs font-semibold text-slate-700 leading-snug line-clamp-2">
                {std.title}
              </h4>

              <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                {std.overview}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="text-[11px] font-medium font-mono">{std.technicalCommittee}</span>
              <span className="text-[#1d4ed8] font-bold text-[11px] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>Inspect</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>)}
      </div>

    </div>;
};
