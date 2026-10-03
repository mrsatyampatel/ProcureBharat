export type StandardCategory = 
  | 'Product Standard'
  | 'Safety Standard'
  | 'Test Method'
  | 'Installation Standard'
  | 'Terminology Standard'
  | 'Normative Reference'
  | 'Allied Standard'
  | 'Environmental Standard';

export type StandardStatus = 'Active' | 'Under Revision' | 'Superseded' | 'Withdrawn';

export type CertificationType = 
  | 'BIS ISI Mark (Scheme I)' 
  | 'Compulsory Registration Scheme (CRS)' 
  | 'Quality Control Order (QCO Mandatory)' 
  | 'Hallmarking' 
  | 'Eco-Mark' 
  | 'Voluntary Certification';

export interface Amendment {
  number: number;
  date: string;
  description: string;
  status: 'In Force' | 'Proposed';
}

export interface TestMethodRef {
  isNumber: string;
  name: string;
  parameters: string[];
}

export interface IndianStandard {
  id: string;
  isNumber: string; // e.g. "IS 10322 (Part 5/Sec 3):2012"
  title: string;
  hindiTitle?: string;
  category: StandardCategory;
  productGroup: string; // e.g. "Lighting", "Civil & Construction", "Electrical"
  currentVersion: string; // e.g. "2012 (Reaffirmed 2022)"
  originalYear: string;
  status: StandardStatus;
  publicationDate: string;
  icsCode: string; // e.g. "29.140.40"
  technicalCommittee: string; // e.g. "LITD 14 (Lighting and Associated Products)"
  overview: string;
  scope: string;
  keyRequirements: string[];
  safetyRequirements: string[];
  installationRequirements?: string[];
  testMethods: TestMethodRef[];
  normativeReferences: string[]; // IS numbers
  alliedStandards: string[]; // IS numbers
  amendments: Amendment[];
  certification: {
    type: CertificationType;
    mandatory: boolean;
    qcoNotificationNumber?: string;
    qcoEffectiveDate?: string;
    authority: string;
    reason: string;
  };
  keywords: string[];
  outdatedReplacements?: {
    oldIsNumber: string;
    year: string;
    reasonForSupersession: string;
  }[];
}

export interface RecommendationMatch {
  standard: IndianStandard;
  relevanceScore: number; // 0 - 100
  matchLevel: 'Highly Relevant' | 'Relevant' | 'Potentially Relevant';
  whyRecommended: string;
  matchedPhrases: string[];
  matchBreakdown: {
    categoryMatch: number;
    technicalRequirementMatch: number;
    safetyMatch: number;
    normativeMatch: number;
  };
  applicableClauses: string[];
}

export interface SpecificationGap {
  id: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Informational';
  title: string;
  description: string;
  missingStandardReference?: string;
  relatedStandardNumber?: string;
  recommendedAction: string;
  suggestedTenderClause: string;
  category: 'Safety' | 'Performance & Testing' | 'Mandatory Certification' | 'Environmental & Ingress' | 'Electrical & Ingress' | 'Installation';
}

export interface OutdatedStandardAlert {
  detectedOldNumber: string;
  referencedYear?: string;
  replacementIsNumber: string;
  currentTitle: string;
  reason: string;
  recommendation: string;
}

export interface AnalysisReport {
  id: string;
  timestamp: string;
  queryOrDocName: string;
  inputType: 'Product Description' | 'Technical Specification' | 'Tender Document' | 'Tender Specification' | 'Natural Language Query';
  inputLanguage: 'English' | 'Hindi' | 'Hinglish' | 'Other';
  detectedProductCategory: string;
  identifiedProduct: string;
  overallConfidence: number;
  summary: string;
  recommendations: RecommendationMatch[];
  alliedRecommendations: RecommendationMatch[];
  normativeStandards: IndianStandard[];
  safetyStandards: IndianStandard[];
  testMethodStandards: IndianStandard[];
  installationStandards: IndianStandard[];
  specificationGaps: SpecificationGap[];
  outdatedAlerts: OutdatedStandardAlert[];
  aiExplanation: {
    extractedKeywords: string[];
    matchingLogic: string;
    technicalCommitteesInvolved: string[];
    regulatoryOrdersChecked: string[];
  };
  mandatoryCertifications: {
    title: string;
    standard: string;
    authority: string;
    status: 'Mandatory by QCO' | 'Applicable' | 'Voluntary';
    details: string;
  }[];
  extractedClauses?: {
    section: string;
    content: string;
    identifiedStandards: string[];
  }[];
  userSaved?: boolean;
}

export interface GraphNode {
  id: string;
  label: string;
  isNumber: string;
  type: 'primary' | 'safety' | 'test' | 'installation' | 'normative' | 'allied' | 'certification';
  category: string;
  relevance: number;
  x?: number;
  y?: number;
}

export interface GraphLink {
  source: string;
  target: string;
  relationship: string;
}

export interface HistoryItem {
  id: string;
  date: string;
  query: string;
  productName: string;
  standardsCount: number;
  confidence: number;
  status: 'Completed' | 'Exported';
  reportData?: AnalysisReport;
}
