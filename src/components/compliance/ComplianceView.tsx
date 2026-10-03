import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  FileText, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  ExternalLink, 
  FileCheck, 
  Building2,
  Calendar,
  Layers,
  Zap,
  Info,
  ChevronRight
} from 'lucide-react';
import { INDIAN_STANDARDS_DATABASE } from '../../data/standardsDataset';
import { IndianStandard } from '../../types/standards';

interface ComplianceViewProps {
  onSelectStandard: (standard: IndianStandard) => void;
}

export const ComplianceView: React.FC<ComplianceViewProps> = ({ onSelectStandard }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedScheme, setSelectedScheme] = useState<'All' | 'ISI Mark' | 'CRS' | 'QCO Mandatory'>('All');

  const qcoOrders = [
    {
      id: 'qco-01',
      title: 'Solar Photovoltaics, Systems, Devices and Components Goods (Requirements for Compulsory Registration) Order',
      ministry: 'Ministry of New and Renewable Energy (MNRE)',
      gazetteNo: 'S.O. 2920(E)',
      enforcementDate: 'Active since 05 Sept 2017',
      applicableStandards: ['IS 14286:2010', 'IS/IEC 61730 (Part 1 & 2)', 'IS 16221 (Part 2)'],
      scheme: 'CRS (Compulsory Registration Scheme)',
      penaltyClause: 'Prohibition of import, manufacture, or sale without valid BIS registration.'
    },
    {
      id: 'qco-02',
      title: 'Electronics and Information Technology Goods (Requirements for Compulsory Registration) Order',
      ministry: 'Ministry of Electronics & Information Technology (MeitY)',
      gazetteNo: 'S.O. 2357(E)',
      enforcementDate: 'Active (Updated 2023)',
      applicableStandards: ['IS 10322 (Part 5/Sec 3)', 'IS 15885 (Part 2/Sec 13)', 'IS 16102 (Part 1)'],
      scheme: 'CRS (Compulsory Registration Scheme)',
      penaltyClause: 'Government tenders must reject bids lacking CRS registration.'
    },
    {
      id: 'qco-03',
      title: 'Steel and Steel Products (Quality Control) Order',
      ministry: 'Ministry of Steel',
      gazetteNo: 'S.O. 1678(E)',
      enforcementDate: 'Active since 2020',
      applicableStandards: ['IS 1786:2008', 'IS 2062:2011', 'IS 432 (Part 1)'],
      scheme: 'ISI Mark (Scheme I)',
      penaltyClause: 'Mandatory standard mark under Section 16 of the BIS Act, 2016.'
    },
    {
      id: 'qco-04',
      title: 'Personal Protective Equipment (Quality Control) Order',
      ministry: 'Department for Promotion of Industry and Internal Trade (DPIIT)',
      gazetteNo: 'S.O. 4509(E)',
      enforcementDate: 'Active since 2021',
      applicableStandards: ['IS 2925:1984', 'IS 15298 (Part 2)', 'IS 9473:2002'],
      scheme: 'ISI Mark (Scheme I)',
      penaltyClause: 'Industrial safety gear cannot be procured without BIS certification license.'
    },
    {
      id: 'qco-05',
      title: 'Distribution Transformers (Quality Control) Order',
      ministry: 'Department of Heavy Industry / MoP',
      gazetteNo: 'S.O. 129(E)',
      enforcementDate: 'Active',
      applicableStandards: ['IS 1180 (Part 1):2014', 'IS 2026 (Part 1-5)', 'IS 335:2018'],
      scheme: 'ISI Mark (Scheme I) & BEE Star',
      penaltyClause: 'Mandatory BIS standard mark and BEE star rating compliance.'
    },
    {
      id: 'qco-06',
      title: 'Cement (Quality Control) Order',
      ministry: 'DPIIT, Ministry of Commerce & Industry',
      gazetteNo: 'S.O. 562(E)',
      enforcementDate: 'Mandatory since 2003',
      applicableStandards: ['IS 269:2015', 'IS 1489 (Part 1):2015', 'IS 455:2015'],
      scheme: 'ISI Mark (Scheme I)',
      penaltyClause: 'All cement manufactured or supplied in India must carry the ISI mark.'
    }
  ];

  const filteredOrders = qcoOrders.filter(o => {
    const matchesSearch = 
      o.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.ministry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.applicableStandards.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (selectedScheme === 'All') return matchesSearch;
    if (selectedScheme === 'ISI Mark') return matchesSearch && o.scheme.includes('ISI Mark');
    if (selectedScheme === 'CRS') return matchesSearch && o.scheme.includes('CRS');
    return matchesSearch;
  });

  return (
    <div className="space-y-6 animate-in fade-in max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700">
            <ShieldCheck className="w-5 h-5" />
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-[#0f172a] tracking-tight">
            Mandatory Quality Control Orders (QCO) & Certification Repository
          </h1>
        </div>
        <p className="text-xs text-slate-500">
          Official regulatory tracking under Bureau of Indian Standards Act 2016, Central Ministries Quality Control Orders, and GeM procurement guidelines.
        </p>
      </div>

      {/* Certification Schemes Explained - Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="bento-card space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-[#1e40af] border border-blue-200">
              Scheme I
            </span>
            <Award className="w-4 h-4 text-[#1e40af]" />
          </div>
          <h3 className="text-sm font-bold text-[#0f172a]">BIS ISI Mark (Product Certification)</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Requires factory audit, routine testing, and continuous third-party surveillance by BIS before affixing the ISI standard mark.
          </p>
        </div>

        <div className="bento-card space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 text-indigo-800 border border-indigo-200">
              Scheme II
            </span>
            <FileCheck className="w-4 h-4 text-indigo-600" />
          </div>
          <h3 className="text-sm font-bold text-[#0f172a]">CRS (Compulsory Registration)</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Mandatory for IT, electronics, solar, and LED products. Requires product testing in BIS-recognized laboratories (NABL).
          </p>
        </div>

        <div className="bento-card space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
              GFR 2017 & GeM
            </span>
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
          </div>
          <h3 className="text-sm font-bold text-[#0f172a]">Public Procurement Law</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Under Rule 144 of GFR 2017, all government procurement specifications must mandate applicable Indian Standards and QCO certification.
          </p>
        </div>

      </div>

      {/* Filter and Search Bar */}
      <div className="bento-card flex flex-col sm:flex-row items-center justify-between gap-4 py-3.5">
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder="Filter by standard, ministry, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:bg-white"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5 pointer-events-none" />
        </div>

        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
          {(['All', 'ISI Mark', 'CRS'] as const).map(scheme => (
            <button
              key={scheme}
              onClick={() => setSelectedScheme(scheme)}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedScheme === scheme
                  ? 'bg-[#1e40af] text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {scheme}
            </button>
          ))}
        </div>
      </div>

      {/* QCO Orders List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-500 pb-0.5">
          <span>Displaying {filteredOrders.length} Gazette Quality Control Orders</span>
          <span>Department of Consumer Affairs Repository</span>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {filteredOrders.map(qco => (
            <div 
              key={qco.id}
              className="bento-card space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200">
                      {qco.scheme}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 font-semibold">
                      Gazette: <strong>{qco.gazetteNo}</strong>
                    </span>
                    <span className="text-[11px] text-slate-400">
                      • {qco.enforcementDate}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#0f172a] leading-snug">
                    {qco.title}
                  </h3>

                  <p className="text-xs text-slate-600 flex items-center gap-1.5 font-medium">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>Issued by: {qco.ministry}</span>
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-right shrink-0">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Tender Requirement</div>
                  <div className="text-xs font-bold text-rose-700 mt-0.5">Mandatory for Bidders</div>
                </div>
              </div>

              {/* Covered Standards Chips */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Mandated Indian Standards Under this Order:
                </span>
                <div className="flex flex-wrap gap-2">
                  {qco.applicableStandards.map((stdNumber, idx) => {
                    const match = INDIAN_STANDARDS_DATABASE.find(s => s.isNumber.includes(stdNumber) || stdNumber.includes(s.isNumber.split(' ')[0]));
                    return (
                      <button
                        key={idx}
                        onClick={() => match && onSelectStandard(match)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold border flex items-center gap-1.5 transition-colors cursor-pointer ${
                          match 
                            ? 'bg-blue-50 text-[#1e40af] border-blue-200 hover:bg-blue-100' 
                            : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{stdNumber}</span>
                        {match && <ChevronRight className="w-3 h-3" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Legal Note */}
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-600 flex items-start gap-2">
                <Info className="w-4 h-4 text-[#1e40af] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#0f172a]">Legal Consequence:</strong> {qco.penaltyClause}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
