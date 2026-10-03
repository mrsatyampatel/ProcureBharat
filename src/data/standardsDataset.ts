import { IndianStandard } from '../types/standards';

export const INDIAN_STANDARDS_DATABASE: IndianStandard[] = [
  // -------------------------------------------------------------
  // 1. LED LIGHTING & STREET LUMINAIRES
  // -------------------------------------------------------------
  {
    id: 'is-10322-5-3',
    isNumber: 'IS 10322 (Part 5/Sec 3):2012',
    title: 'Luminaires - Particular Requirements - Section 3: Luminaires for Road and Street Lighting',
    hindiTitle: 'ल्यूमिनेयर्स - विशिष्ट आवश्यकताएं - सड़क और स्ट्रीट लाइटिंग के लिए ल्यूमिनेयर्स',
    category: 'Product Standard',
    productGroup: 'Lighting & Electrical',
    currentVersion: '2012 (Reaffirmed 2022)',
    originalYear: '1987',
    status: 'Active',
    publicationDate: '2012-08-15',
    icsCode: '29.140.40',
    technicalCommittee: 'LITD 14 (Lighting and Associated Products)',
    overview: 'Specifies electrical, thermal, optical and mechanical safety requirements for luminaires intended for use in road, highway, street and public outdoor lighting with supply voltages not exceeding 1000 V.',
    scope: 'Covers LED and conventional street light fittings mounted on poles, catenaries or masts, demanding specific IP ingress protection, wind load resistance, vibration endurance and insulation safety.',
    keyRequirements: [
      'Minimum Ingress Protection rating of IP65/IP66 for optical and control gear compartments',
      'Impact resistance rating of minimum IK07 / IK08',
      'Surge protection immunity withstand of 10 kV / 5 kA minimum',
      'Thermal endurance test at 45°C ambient operational temperature',
      'Corrosion resistance for outdoor aluminum die-cast housings (salt spray test 500 hrs)'
    ],
    safetyRequirements: [
      'Protection against electric shock (Class I or Class II insulation)',
      'Resistance to heat and fire (Glow-wire test at 650°C/850°C)',
      'Earthing terminal integrity and creepage distance compliance'
    ],
    installationRequirements: [
      'Spigot entry diameter compatibility (48-60 mm)',
      'Mounting tilt angle adjustment between 0° to 15°',
      'Vibration test compliance at 10 Hz - 55 Hz for pole-mounted vibrations'
    ],
    testMethods: [
      { isNumber: 'IS 10322 (Part 1):2014', name: 'General Requirements & Tests for Luminaires', parameters: ['Insulation resistance', 'High voltage test', 'Dielectric strength'] },
      { isNumber: 'IS 12063:1987', name: 'Classification of Degrees of Protection Provided by Enclosures (IP Code)', parameters: ['IP65 dust/water jet test', 'IP66 intense water jet test'] }
    ],
    normativeReferences: [
      'IS 10322 (Part 1):2014',
      'IS 15885 (Part 2/Sec 13):2012',
      'IS 16102 (Part 1):2012',
      'IS 16103 (Part 1):2012',
      'IS 12063:1987'
    ],
    alliedStandards: [
      'IS 16107 (Part 2/Sec 1):2012',
      'IS 1944 (Part 1 & 2):1970'
    ],
    amendments: [
      { number: 1, date: '2016-04-10', description: 'Updated photobiological safety clauses and mandatory blue light hazard evaluation per IS 16108', status: 'In Force' },
      { number: 2, date: '2020-11-25', description: 'Incorporation of Smart Street Light NEMA / Zhaga receptacle interface testing', status: 'In Force' }
    ],
    certification: {
      type: 'Compulsory Registration Scheme (CRS)',
      mandatory: true,
      qcoNotificationNumber: 'S.O. 2357(E) under Electronics & IT Goods (Requirements for Compulsory Registration) Order',
      qcoEffectiveDate: '2015-05-07',
      authority: 'Bureau of Indian Standards (BIS) & MeitY',
      reason: 'Mandatory certification required before sale or supply in India under Central Government Order.'
    },
    keywords: ['led street light', 'luminaire', 'outdoor lighting', 'road lighting', 'ip66', 'surge protection', 'pole light', '120 lm/w', 'lighting tender', 'एलईडी स्ट्रीट लाइट'],
    outdatedReplacements: [
      {
        oldIsNumber: 'IS 1944 (Part 1 & 2):1970',
        year: '1970',
        reasonForSupersession: 'Older Code of Practice for Street Lighting. Modern procurement specs must mandate IS 10322 (Part 5/Sec 3) for luminaire construction and IS 16107 for LED performance.'
      }
    ]
  },
  {
    id: 'is-16107-2-1',
    isNumber: 'IS 16107 (Part 2/Sec 1):2012',
    title: 'Luminaires Performance - Particular Requirements - Section 1: LED Luminaires',
    hindiTitle: 'ल्यूमिनेयर्स का प्रदर्शन - विशिष्ट आवश्यकताएं - एलईडी ल्यूमिनेयर्स',
    category: 'Product Standard',
    productGroup: 'Lighting & Electrical',
    currentVersion: '2012 (Reaffirmed 2021)',
    originalYear: '2012',
    status: 'Active',
    publicationDate: '2012-09-30',
    icsCode: '29.140.40',
    technicalCommittee: 'LITD 14 (Lighting and Associated Products)',
    overview: 'Specifies luminous performance, system efficacy, chromaticity, color rendering index (CRI), correlated color temperature (CCT), and lumen maintenance for LED luminaires used in public lighting.',
    scope: 'Covers photometric performance criteria including lumens per watt output, lumen depreciation (L70 / L80 life ratings up to 50,000 hrs), and power factor.',
    keyRequirements: [
      'Minimum system luminous efficacy >= 100 lm/W (or specified 120-140 lm/W for modern high-efficiency tenders)',
      'Total Harmonic Distortion (THD) <= 10% (max 15% for sub-30W)',
      'Power Factor >= 0.95 at rated input voltage',
      'Correlated Colour Temperature (CCT) within 3000K, 4000K, or 5700K (±300K step MacAdam ellipse)',
      'Color Rendering Index (CRI) >= 70 for road lighting, >= 80 for indoor'
    ],
    safetyRequirements: [
      'Photobiological safety verification under IS 16108 (Exempt / Low Risk Group RG0/RG1)',
      'Over-voltage and under-voltage protection performance'
    ],
    testMethods: [
      { isNumber: 'IS 16106:2012', name: 'Method of Electrical and Photometric Measurements of Solid-State Lighting (LED) Products', parameters: ['Goniophotometer measurement', 'Integrating sphere spectral flux', 'Lumen maintenance extrapolation'] }
    ],
    normativeReferences: ['IS 16106:2012', 'IS 16108:2012', 'IS 10322 (Part 5/Sec 3):2012'],
    alliedStandards: ['IS 15885 (Part 2/Sec 13):2012', 'IS 16103 (Part 2):2012'],
    amendments: [
      { number: 1, date: '2018-02-14', description: 'Updated minimum efficacy thresholds and LM-80 / TM-21 test certificate acceptance rules', status: 'In Force' }
    ],
    certification: {
      type: 'Compulsory Registration Scheme (CRS)',
      mandatory: true,
      authority: 'BIS / Ministry of Power',
      reason: 'Ensures energy conservation compliance and BEE Star Labeling qualification.'
    },
    keywords: ['luminous efficacy', 'lumens per watt', 'cct', 'cri', 'thd', 'power factor', 'photometric test', 'led performance', 'l70', 'lm80']
  },
  {
    id: 'is-15885-2-13',
    isNumber: 'IS 15885 (Part 2/Sec 13):2012',
    title: 'Lamp Controlgear - Part 2: Particular Requirements - Section 13: d.c. or a.c. Supplied Electronic Controlgear for LED Modules (LED Driver)',
    hindiTitle: 'लैंप कंट्रोलगियर - भाग 2: एलईडी ड्राइवर की सुरक्षा आवश्यकताएं',
    category: 'Safety Standard',
    productGroup: 'Lighting & Electrical',
    currentVersion: '2012 (Reaffirmed 2022)',
    originalYear: '2012',
    status: 'Active',
    publicationDate: '2012-07-20',
    icsCode: '29.140.99',
    technicalCommittee: 'LITD 14',
    overview: 'Safety standard for electronic constant current / constant voltage drivers and power supply units powering LED light engines in fixtures.',
    scope: 'Covers insulation, moisture resistance, short-circuit protection, high-voltage withstand (up to 440V phase-to-phase for 2 hours in Indian power conditions), and thermal cutoff.',
    keyRequirements: [
      'Withstand 440V AC for 2 hours (Indian severe power grid condition test)',
      'Built-in surge protection device (SPD) coordination',
      'Short circuit and open circuit auto-recovery protection',
      'Output ripple current <= 5% for flicker-free operation',
      'Operating temperature range -10°C to +55°C ambient'
    ],
    safetyRequirements: [
      'SELV (Safety Extra Low Voltage) compliance where applicable',
      'Insulation resistance > 20 M-Ohm at 500V DC',
      'Creepage and clearance distances conforming to Class II insulation'
    ],
    testMethods: [
      { isNumber: 'IS 15885 (Part 1):2011', name: 'General and Safety Requirements for Lamp Controlgear', parameters: ['High voltage flash test', 'Fault condition test', 'Heating test'] }
    ],
    normativeReferences: ['IS 15885 (Part 1):2011', 'IS 16004 (Part 1):2012'],
    alliedStandards: ['IS 10322 (Part 5/Sec 3):2012'],
    amendments: [
      { number: 1, date: '2017-09-12', description: 'Addition of high-surge testing protocols (up to 10kV line-earth and line-neutral)', status: 'In Force' }
    ],
    certification: {
      type: 'Compulsory Registration Scheme (CRS)',
      mandatory: true,
      qcoNotificationNumber: 'S.O. 2905(E) - Electronics and Information Technology Goods Order',
      authority: 'BIS / MeitY',
      reason: 'Mandatory BIS Registration (R-number) required on all LED drivers.'
    },
    keywords: ['led driver', 'controlgear', 'power supply', 'surge protection', '440v withstand', 'constant current driver', 'smps']
  },
  {
    id: 'is-12063',
    isNumber: 'IS 12063:1987',
    title: 'Classification of Degrees of Protection Provided by Enclosures of Electrical Equipment (IP Code)',
    hindiTitle: 'विद्युत उपकरणों के आवरणों द्वारा प्रदान की जाने वाली सुरक्षा की डिग्रियों का वर्गीकरण (आईपी कोड)',
    category: 'Test Method',
    productGroup: 'Electrical General',
    currentVersion: '1987 (Reaffirmed 2018) / Equivalent to IEC 60529',
    originalYear: '1987',
    status: 'Active',
    publicationDate: '1987-12-15',
    icsCode: '29.020',
    technicalCommittee: 'ETD 19 (High Voltage Engineering and Enclosures)',
    overview: 'Defines standard testing procedures for ingress protection against solid foreign objects (dust, probes) and water penetration (IP65, IP66, IP67, IP68).',
    scope: 'Applies to all outdoor and industrial electrical equipment enclosures, luminaires, junction boxes, motors, and transformer control boxes.',
    keyRequirements: [
      'First numeral 6: Complete protection against dust ingress (dust tight under vacuum suction)',
      'Second numeral 6: Protection against powerful water jets (100 kPa pressure nozzle from all directions without harmful entry)'
    ],
    safetyRequirements: ['Prevention of human contact with hazardous live parts.'],
    testMethods: [
      { isNumber: 'IS 12063:1987', name: 'Standard Talcum Dust Chamber & Water Jet Test Rig', parameters: ['Dust density 2kg/m3', 'Water delivery rate 100 L/min at 3m distance'] }
    ],
    normativeReferences: [],
    alliedStandards: ['IS 10322', 'IS 13947'],
    amendments: [],
    certification: {
      type: 'Voluntary Certification',
      mandatory: false,
      authority: 'NABL Accredited Test Labs / BIS',
      reason: 'Normative test standard invoked by product standards.'
    },
    keywords: ['ip65', 'ip66', 'ip67', 'ip68', 'ingress protection', 'dust proof', 'waterproof', 'enclosure test']
  },

  // -------------------------------------------------------------
  // 2. INDUSTRIAL SAFETY HELMETS & PPE
  // -------------------------------------------------------------
  {
    id: 'is-2925',
    isNumber: 'IS 2925:1984',
    title: 'Specification for Industrial Safety Helmets (Non-Metallic)',
    hindiTitle: 'औद्योगिक सुरक्षा हेलमेट (गैर-धातु) के लिए विशिष्टता',
    category: 'Product Standard',
    productGroup: 'Personal Protective Equipment (PPE)',
    currentVersion: '1984 (Reaffirmed 2019 / Fourth Revision under finalization)',
    originalYear: '1965',
    status: 'Active',
    publicationDate: '1984-06-30',
    icsCode: '13.340.20',
    technicalCommittee: 'CHD 08 (Chemical Hazards and Safety Equipment)',
    overview: 'Prescribes physical, mechanical, thermal and electrical insulation requirements for non-metallic helmets worn in mining, construction, tunneling, factories, and industrial utilities.',
    scope: 'Covers shell construction, harness suspension system, chin-strap retention, impact attenuation, penetration resistance, electrical breakdown resistance, and flammability.',
    keyRequirements: [
      'Shock absorption test: Transmitted force shall not exceed 5.0 kN when impacted by a 5 kg steel striker from 1 meter height',
      'Penetration resistance: 3 kg pointed striker drop without making contact with the headform',
      'Electrical insulation withstand test: Leakage current < 1.2 mA at 2000V AC 50Hz',
      'Flammability: Shall not burn after 5 seconds of direct flame exposure',
      'Water absorption: Shell weight increase <= 0.5% after 24 hr immersion'
    ],
    safetyRequirements: [
      'Chin strap retention anchor strength (breakage force between 150 N and 250 N to prevent strangulation risk)',
      'Harness crown clearance minimum 25 mm and vertical clearance minimum 30 mm'
    ],
    installationRequirements: [
      'Adjustable headband size range from 520 mm to 600 mm',
      'Ventilation holes positioning (if provided, must retain electrical and splash protection)'
    ],
    testMethods: [
      { isNumber: 'IS 2925 (Annex B & C)', name: 'Impact Attenuation and Penetration Drop Test', parameters: ['Transmitted force load cell', 'Drop height verification', 'Headform calibration'] }
    ],
    normativeReferences: ['IS 9815 (Part 1):1981', 'IS 4151:2015'],
    alliedStandards: ['IS 3521:1999 (Industrial Safety Belts and Harnesses)', 'IS 8519:1977'],
    amendments: [
      { number: 1, date: '1991-03-15', description: 'Updated test headform specifications to conform to international anthropometric molds', status: 'In Force' },
      { number: 2, date: '2002-08-20', description: 'Modified electrical resistance test procedure and high-density polyethylene (HDPE) polymer specs', status: 'In Force' },
      { number: 3, date: '2021-04-16', description: 'Clarification on mandatory ISI Mark stamping on inside shell and harness crown', status: 'In Force' }
    ],
    certification: {
      type: 'Quality Control Order (QCO Mandatory)',
      mandatory: true,
      qcoNotificationNumber: 'S.O. 4509(E) - Protective Equipment (Quality Control) Order',
      qcoEffectiveDate: '2021-06-01',
      authority: 'Bureau of Indian Standards (BIS) & Ministry of Commerce',
      reason: 'Mandatory ISI Mark certification under Scheme-I. No industrial helmet can be sold or procured without valid BIS Licence.'
    },
    keywords: ['safety helmet', 'industrial helmet', 'hard hat', 'ppe', 'construction safety', 'head protection', 'mining helmet', 'is 2925', 'सुरक्षा हेलमेट', 'हार्ड हैट']
  },
  {
    id: 'is-3521-1',
    isNumber: 'IS 3521 (Part 1):1999',
    title: 'Industrial Safety Belts and Harnesses - Specification - Part 1: Full Body Harness',
    hindiTitle: 'औद्योगिक सुरक्षा बेल्ट और हार्नेस - भाग 1: फुल बॉडी हार्नेस',
    category: 'Safety Standard',
    productGroup: 'Personal Protective Equipment (PPE)',
    currentVersion: '1999 (Reaffirmed 2020)',
    originalYear: '1965',
    status: 'Active',
    publicationDate: '1999-10-15',
    icsCode: '13.340.60',
    technicalCommittee: 'CHD 08',
    overview: 'Specifies requirements, testing methods, and markings for full body harnesses intended to arrest falls from heights in scaffolding, transmission towers, and industrial maintenance.',
    scope: 'Covers polyester webbing width, tensile strength (>22 kN), D-ring forged alloy steel breaking strength, and dynamic drop test with 100 kg torso dummy.',
    keyRequirements: [
      'Webbing breaking strength minimum 22 kN (2200 kgf)',
      'Dynamic drop test with 100 kg dummy from 4m free fall with energy absorber',
      'Corrosion resistance for metal fittings (salt spray 48 hours)',
      'Dual lanyard with scaffold hook attachment capability'
    ],
    safetyRequirements: ['Automatic deceleration lock-up and non-slip buckle retainers.'],
    testMethods: [
      { isNumber: 'IS 3521 (Part 1)', name: 'Dynamic Strength and Static Strength Test Rig', parameters: ['100kg rigid dummy drop', 'Tensile test bench'] }
    ],
    normativeReferences: ['IS 226', 'IS 380'],
    alliedStandards: ['IS 2925:1984'],
    amendments: [],
    certification: {
      type: 'Quality Control Order (QCO Mandatory)',
      mandatory: true,
      authority: 'BIS',
      reason: 'Mandatory QCO for fall arrest PPE equipment.'
    },
    keywords: ['safety belt', 'safety harness', 'full body harness', 'fall arrest', 'scaffolding safety', 'height safety', 'lanyard']
  },

  // -------------------------------------------------------------
  // 3. ELECTRICAL DISTRIBUTION TRANSFORMERS
  // -------------------------------------------------------------
  {
    id: 'is-1180-1',
    isNumber: 'IS 1180 (Part 1):2014',
    title: 'Outdoor Type Oil Immersed Distribution Transformers up to and including 2500 kVA, 33 kV - Specification - Part 1: Mineral Oil Immersed',
    hindiTitle: 'आउटडोर प्रकार के तेल निमज्जित वितरण ट्रांसफार्मर 2500 केवीए, 33 केवी तक - भाग 1',
    category: 'Product Standard',
    productGroup: 'Power & Electrical',
    currentVersion: '2014 (Reaffirmed 2021 / Incorporating Amendments 1 to 4)',
    originalYear: '1964',
    status: 'Active',
    publicationDate: '2014-04-10',
    icsCode: '29.180',
    technicalCommittee: 'ETD 16 (Transformers)',
    overview: 'Comprehensive standard defining electrical parameters, maximum permissible total losses at 50% and 100% load, temperature rise limits, mechanical strength, and short circuit withstand tests for distribution transformers.',
    scope: 'Covers ratings from 16 kVA up to 2500 kVA (standard ratings: 25, 63, 100, 250, 500, 1000, 1600, 2000, 2500 kVA) for three-phase and single-phase outdoor distribution systems.',
    keyRequirements: [
      'Maximum Total Losses at 50% and 100% load complying with Energy Efficiency Level 1, 2 or 3 (BEE Star rating)',
      'Temperature rise limit: Max 35°C for top oil and 40°C for winding over ambient temperature of 50°C',
      'Short-circuit withstand dynamic capability verification at CPRI / ERDA',
      'Insulation level: Lightning impulse withstand voltage 75 kVp for 11 kV class, 170 kVp for 33 kV class',
      'Tank mechanical pressure withstand test (80 kPa for 10 minutes and vacuum test)'
    ],
    safetyRequirements: [
      'Pressure relief device (PRD) with trip contact for ratings >= 250 kVA',
      'Magnetic oil level gauge with alarm contacts and Buchholz relay for >= 1000 kVA',
      'Neutral grounding terminal sizing and dual independent tank earthing points'
    ],
    installationRequirements: [
      'Plinth mounting and pole mounting structural dimensions',
      'Bi-directional roller wheels for 1000 kVA to 2500 kVA units',
      'Cable box / bushing terminal clearances in air (Phase-to-Phase 280 mm for 11kV)'
    ],
    testMethods: [
      { isNumber: 'IS 2026 (Part 1 to 5)', name: 'Power Transformers - General & Special Tests', parameters: ['Measurement of winding resistance', 'Voltage ratio and phase displacement', 'Short-circuit impedance and load loss', 'No-load loss and current', 'Induced overvoltage'] },
      { isNumber: 'IS 335:2018', name: 'New Insulating Oils - Specification', parameters: ['Dielectric breakdown voltage >= 30 kV (fresh) / >= 60 kV (processed)', 'Water content < 20 ppm', 'Dielectric dissipation factor (tan delta) <= 0.005 at 90°C'] }
    ],
    normativeReferences: [
      'IS 2026 (Parts 1 to 5):2011',
      'IS 335:2018',
      'IS 12444:2020 (Continuously Cast Copper Wire Rods)',
      'IS 3024:2006 (Grain Oriented Electrical Steel Sheet CRGO)',
      'IS 3347:1979 (Transformer Bushings)'
    ],
    alliedStandards: [
      'IS 1866:2020 (Maintenance of Mineral Insulating Oil in Equipment)',
      'IS 3639:1966 (Fittings and Accessories for Power Transformers)'
    ],
    amendments: [
      { number: 1, date: '2016-08-11', description: 'Revised maximum loss tables to align with revised BEE Star Labeling energy efficiency criteria', status: 'In Force' },
      { number: 2, date: '2018-03-20', description: 'Specification of dry type distribution transformer norms in companion Part 2', status: 'In Force' },
      { number: 3, date: '2020-07-15', description: 'Clarification on CRGO steel grade verification and mandatory bar-coded core plate tracing', status: 'In Force' },
      { number: 4, date: '2022-01-28', description: 'Introduction of synthetic and natural ester dielectric fluids compatibility testing', status: 'In Force' }
    ],
    certification: {
      type: 'BIS ISI Mark (Scheme I)',
      mandatory: true,
      qcoNotificationNumber: 'S.O. 1141(E) - Electrical Transformers (Quality Control) Order',
      qcoEffectiveDate: '2015-08-01',
      authority: 'Bureau of Indian Standards & Ministry of Heavy Industries',
      reason: 'Mandatory ISI Mark certification under BIS Scheme-I. Manufacturing, selling or procuring non-certified transformers is a legal offense.'
    },
    keywords: ['distribution transformer', '1000 kva', '500 kva', '11kv/433v', 'oil immersed transformer', 'transformer loss', 'bee star rating', 'crgo core', 'cpri test', 'ट्रांसफार्मर', 'डिस्ट्रीब्यूशन ट्रांसफार्मर'],
    outdatedReplacements: [
      {
        oldIsNumber: 'IS 2026 (General Edition 1977 for small distribution)',
        year: '1977',
        reasonForSupersession: 'IS 1180 Part 1:2014 replaced all older distribution specifications with standardized loss tiers.'
      }
    ]
  },
  {
    id: 'is-335',
    isNumber: 'IS 335:2018',
    title: 'New Insulating Oils - Specification (Fifth Revision / IEC 60296 Aligned)',
    hindiTitle: 'नए रोधक तेल (इंसुलेटिंग ऑयल) - विशिष्टता',
    category: 'Normative Reference',
    productGroup: 'Power & Electrical',
    currentVersion: '2018 (Reaffirmed 2023)',
    originalYear: '1953',
    status: 'Active',
    publicationDate: '2018-10-31',
    icsCode: '29.040.10',
    technicalCommittee: 'ETD 03 (Fluids for Electrotechnical Applications)',
    overview: 'Prescribes physical, chemical, electrical and oxidation stability requirements for virgin uninhibited and inhibited mineral insulating oils used in transformers and switchgear.',
    scope: 'Mandatory normative test standard for dielectric oil filled inside electrical transformers.',
    keyRequirements: [
      'Breakdown voltage (BDV) >= 30 kV before treatment, >= 70 kV after filtration',
      'Total acidity <= 0.01 mg KOH/g',
      'Flash point minimum 135°C (Pensky-Martens closed cup)',
      'Water content <= 30 mg/kg in bulk supply'
    ],
    safetyRequirements: ['PCB (Polychlorinated Biphenyls) content non-detectable (< 2 ppm).'],
    testMethods: [
      { isNumber: 'IS 6792', name: 'Method for Determination of Electric Strength of Insulating Oils', parameters: ['VDE oil cup test', '2.5 mm electrode gap'] }
    ],
    normativeReferences: ['IS 1448', 'IS 6792'],
    alliedStandards: ['IS 1180 (Part 1):2014', 'IS 2026'],
    amendments: [],
    certification: {
      type: 'Quality Control Order (QCO Mandatory)',
      mandatory: true,
      authority: 'BIS & Ministry of Petroleum',
      reason: 'Mandatory ISI Mark certification under Transformers & Insulating Oils QCO.'
    },
    keywords: ['transformer oil', 'insulating oil', 'bdv test', 'tan delta', 'dielectric fluid', 'mineral oil']
  },

  // -------------------------------------------------------------
  // 4. CEMENT & CONSTRUCTION MATERIALS
  // -------------------------------------------------------------
  {
    id: 'is-269',
    isNumber: 'IS 269:2015',
    title: 'Ordinary Portland Cement - Specification (Sixth Revision)',
    hindiTitle: 'साधारण पोर्टलैंड सीमेंट - विशिष्टता',
    category: 'Product Standard',
    productGroup: 'Civil & Construction',
    currentVersion: '2015 (Reaffirmed 2020 / Incorporating 33, 43 and 53 Grades)',
    originalYear: '1951',
    status: 'Active',
    publicationDate: '2015-12-01',
    icsCode: '91.100.10',
    technicalCommittee: 'CED 02 (Cement and Concrete)',
    overview: 'Unified specification for Ordinary Portland Cement covering Grades 33, 43 and 53, standardizing chemical composition, physical properties, setting times, fineness, and compressive strength.',
    scope: 'Covers manufacturing of OPC from clinker and gypsum for RCC structural works, bridges, pre-stressed concrete, and major public infrastructure.',
    keyRequirements: [
      'Compressive strength for 53 Grade: 3 days >= 27 MPa, 7 days >= 37 MPa, 28 days >= 53 MPa',
      'Compressive strength for 43 Grade: 3 days >= 23 MPa, 7 days >= 33 MPa, 28 days >= 43 MPa',
      'Initial setting time minimum 30 minutes; Final setting time maximum 600 minutes',
      'Specific surface area (Blaine fineness) minimum 225 m²/kg',
      'Soundness: Le-Chatelier expansion <= 10 mm; Autoclave expansion <= 0.8%'
    ],
    safetyRequirements: [
      'Insoluble residue <= 5.0% by mass',
      'Magnesia (MgO) content <= 6.0% to prevent delayed volumetric cracking',
      'Total loss on ignition (LOI) <= 5.0%'
    ],
    testMethods: [
      { isNumber: 'IS 4031 (Parts 1 to 15)', name: 'Methods of Physical Tests for Hydraulic Cement', parameters: ['Consistency test (Vicat apparatus)', 'Soundness test', 'Compressive strength of mortar cubes (70.6 mm)', 'Fineness by air permeability'] },
      { isNumber: 'IS 4032:1985', name: 'Method of Chemical Analysis of Hydraulic Cement', parameters: ['Silica, alumina, ferric oxide, lime saturation factor (LSF)'] }
    ],
    normativeReferences: ['IS 4031 (Parts 1 to 15)', 'IS 4032:1985', 'IS 4987:2018'],
    alliedStandards: [
      'IS 456:2000 (Plain and Reinforced Concrete - Code of Practice)',
      'IS 1489 (Part 1):2015 (Portland Pozzolana Cement)',
      'IS 455:2015 (Portland Slag Cement)'
    ],
    amendments: [
      { number: 1, date: '2018-05-15', description: 'Consolidation of IS 8112 (43 Grade) and IS 12269 (53 Grade) directly into single IS 269 standard', status: 'In Force' },
      { number: 2, date: '2021-09-10', description: 'Inclusion of performance improvers up to 5% with mandatory disclosure on bag printing', status: 'In Force' }
    ],
    certification: {
      type: 'BIS ISI Mark (Scheme I)',
      mandatory: true,
      qcoNotificationNumber: 'Cement (Quality Control) Order under Section 16 of BIS Act',
      qcoEffectiveDate: '2003-02-17 (Continuously Enforced)',
      authority: 'Bureau of Indian Standards & DPIIT',
      reason: 'Mandatory ISI Mark certification under Cement QCO. Every cement bag must carry BIS Standard Mark with Licence number.'
    },
    keywords: ['cement', 'opc 53', 'opc 43', 'ordinary portland cement', 'concrete', 'compressive strength', 'setting time', 'soundness', 'सीमेंट', 'पोर्टलैंड सीमेंट'],
    outdatedReplacements: [
      {
        oldIsNumber: 'IS 8112:1989 (43 Grade OPC) & IS 12269:1987 (53 Grade OPC)',
        year: '1989',
        reasonForSupersession: 'IS 8112 and IS 12269 have been withdrawn and consolidated into the single revised IS 269:2015. Procurement tenders citing IS 8112 or IS 12269 must update to IS 269.'
      }
    ]
  },
  {
    id: 'is-1489-1',
    isNumber: 'IS 1489 (Part 1):2015',
    title: 'Portland Pozzolana Cement - Specification - Part 1: Fly Ash Based',
    hindiTitle: 'पोर्टलैंड पॉज़ोलाना सीमेंट - विशिष्टता - भाग 1: फ्लाई ऐश आधारित',
    category: 'Product Standard',
    productGroup: 'Civil & Construction',
    currentVersion: '2015 (Reaffirmed 2020)',
    originalYear: '1962',
    status: 'Active',
    publicationDate: '2015-12-01',
    icsCode: '91.100.10',
    technicalCommittee: 'CED 02',
    overview: 'Specifies fly ash based Portland Pozzolana Cement (PPC) manufactured by inter-grinding OPC clinker, gypsum and fly ash (15% to 35%).',
    scope: 'Ideal for hydraulic structures, mass concrete, marine works, masonry mortars, and general building construction.',
    keyRequirements: [
      'Fly ash percentage between 15% and 35% conforming to IS 3812 (Part 1)',
      'Compressive strength: 3 days >= 16 MPa, 7 days >= 22 MPa, 28 days >= 33 MPa',
      'Drying shrinkage <= 0.15%',
      'Initial setting time >= 30 min, Final setting time <= 600 min'
    ],
    safetyRequirements: ['Magnesia <= 6.0%, Insoluble residue <= X + 4.0% where X is fly ash content.'],
    testMethods: [
      { isNumber: 'IS 4031', name: 'Physical Tests for Hydraulic Cement', parameters: ['Vicat test', 'Compressive strength'] }
    ],
    normativeReferences: ['IS 3812 (Part 1):2013', 'IS 4031', 'IS 4032'],
    alliedStandards: ['IS 269:2015', 'IS 456:2000'],
    amendments: [],
    certification: {
      type: 'BIS ISI Mark (Scheme I)',
      mandatory: true,
      authority: 'BIS & DPIIT',
      reason: 'Mandatory ISI Mark certification under Cement QCO.'
    },
    keywords: ['ppc cement', 'fly ash cement', 'pozzolana', 'plastering cement', 'mass concrete']
  },
  {
    id: 'is-456',
    isNumber: 'IS 456:2000',
    title: 'Plain and Reinforced Concrete - Code of Practice (Fourth Revision)',
    hindiTitle: 'सादा और प्रबलित कंक्रीट - अभ्यास संहिता',
    category: 'Installation Standard',
    productGroup: 'Civil & Construction',
    currentVersion: '2000 (Reaffirmed 2021 / Incorporating Amendments 1 to 5)',
    originalYear: '1953',
    status: 'Active',
    publicationDate: '2000-07-15',
    icsCode: '91.100.30',
    technicalCommittee: 'CED 02 (Cement and Concrete)',
    overview: 'The fundamental benchmark Indian code of practice for design, structural calculation, mix proportioning, water-cement ratios, durability, curing, and reinforcement detailing for all concrete structures in India.',
    scope: 'Mandatory code for structural design, construction quality control, maximum aggregate sizing, cover to reinforcement, and curing times.',
    keyRequirements: [
      'Minimum cementitious content and maximum water-cement ratio based on exposure conditions (Mild, Moderate, Severe, Very Severe, Extreme)',
      'Minimum grade of concrete: M20 for RCC work, M30 for coastal/severe environment',
      'Curing duration: Minimum 7 days for OPC, 10 days for PPC / mineral admixtures in dry hot weather'
    ],
    safetyRequirements: [
      'Clear nominal cover to reinforcement for fire resistance and corrosion barrier',
      'Deflection limits and crack width control calculations'
    ],
    testMethods: [
      { isNumber: 'IS 516:1959', name: 'Method of Tests for Strength of Concrete', parameters: ['Compressive strength 150mm cubes', 'Flexural strength', 'Core test'] },
      { isNumber: 'IS 1199:1959', name: 'Methods of Sampling and Analysis of Concrete', parameters: ['Slump cone test', 'Compacting factor'] }
    ],
    normativeReferences: ['IS 269:2015', 'IS 1786:2008', 'IS 383:2016', 'IS 516:1959'],
    alliedStandards: ['IS 13920:2016 (Ductile Detailing of RCC Structures for Earthquake)'],
    amendments: [
      { number: 5, date: '2019-07-22', description: 'Updated concrete grades up to M100 and enhanced durability criteria for aggressive environments', status: 'In Force' }
    ],
    certification: {
      type: 'Voluntary Certification',
      mandatory: false,
      authority: 'BIS / Central Public Works Department (CPWD)',
      reason: 'Mandatory structural code invoked in all government and municipal building bylaws.'
    },
    keywords: ['concrete code', 'rcc design', 'm20', 'm25', 'm30', 'curing', 'water cement ratio', 'slump test', 'cover to reinforcement']
  },

  // -------------------------------------------------------------
  // 5. STEEL REINFORCEMENT & STRUCTURAL STEEL
  // -------------------------------------------------------------
  {
    id: 'is-1786',
    isNumber: 'IS 1786:2008',
    title: 'High Strength Deformed Steel Bars and Wires for Concrete Reinforcement - Specification (Fourth Revision)',
    hindiTitle: 'कंक्रीट सुदृढीकरण के लिए उच्च शक्ति वाले विकृत स्टील बार (टीएमटी बार) - विशिष्टता',
    category: 'Product Standard',
    productGroup: 'Metals & Metallurgy',
    currentVersion: '2008 (Reaffirmed 2018 / Incorporating Amendments 1 to 4)',
    originalYear: '1966',
    status: 'Active',
    publicationDate: '2008-04-15',
    icsCode: '77.140.15',
    technicalCommittee: 'MTD 04 (Wrought Steel Products)',
    overview: 'Specifies requirements for thermo-mechanically treated (TMT) deformed steel bars and wires in grades Fe 415, Fe 415D, Fe 500, Fe 500D, Fe 550, Fe 550D, Fe 600 and Fe 650 for RCC structures.',
    scope: 'Covers physical, chemical, mechanical properties, rib pattern geometry, yield strength, tensile strength, elongation, and mandatory bend / rebend ductility tests.',
    keyRequirements: [
      'Grade Fe 500D: 0.2% Proof Stress >= 500 MPa, Tensile Strength >= 565 MPa, Total Elongation at Max Force (TS/YS ratio >= 1.10), Elongation >= 16%',
      'Carbon Equivalent (CE) <= 0.42% for Fe 500D for superior on-site weldability',
      'Mandatory Re-bend test around mandrel without any sign of fracture',
      'Cross-rib angle between 30° to 70° for maximum mechanical bond with concrete'
    ],
    safetyRequirements: [
      'Sulphur and Phosphorus limits: Combined S+P <= 0.075% for "D" (Ductile) earthquake-resistant grades',
      'Weight per meter tolerance within ±3% to ±7% depending on bar diameter (8mm to 40mm)'
    ],
    testMethods: [
      { isNumber: 'IS 1608 (Part 1):2018', name: 'Metallic Materials - Tensile Testing', parameters: ['Yield strength measurement', 'Ultimate tensile strength', 'Percentage elongation'] },
      { isNumber: 'IS 1599:2019', name: 'Metallic Materials - Bend Test', parameters: ['180 degree cold bend test', 'Re-bend test after aging at 100°C'] }
    ],
    normativeReferences: ['IS 1608 (Part 1):2018', 'IS 1599:2019', 'IS 228 (Chemical Analysis of Steels)'],
    alliedStandards: ['IS 456:2000', 'IS 13920:2016', 'IS 2062:2011 (Hot Rolled Structural Steel)'],
    amendments: [
      { number: 3, date: '2019-12-05', description: 'Mandatory grade Fe 600 and Fe 650 inclusion and stricter phosphorus limits for seismic ductility', status: 'In Force' },
      { number: 4, date: '2021-03-24', description: 'Mandatory hot-stamped BIS standard mark and manufacturer logo on every meter of bar', status: 'In Force' }
    ],
    certification: {
      type: 'Quality Control Order (QCO Mandatory)',
      mandatory: true,
      qcoNotificationNumber: 'S.O. 1673(E) - Steel and Steel Products (Quality Control) Order',
      qcoEffectiveDate: '2012-03-12 (Updated 2024)',
      authority: 'Bureau of Indian Standards & Ministry of Steel',
      reason: 'Mandatory ISI Mark certification under Steel QCO. TMT bars without BIS mark are contraband in public tenders.'
    },
    keywords: ['tmt bar', 'tmt rebar', 'steel reinforcement', 'fe 500d', 'fe 550d', 'steel rebar', 'rebend test', 'earthquake resistant steel', 'सरिया', 'स्टील बार']
  },

  // -------------------------------------------------------------
  // 6. SOLAR PHOTOVOLTAIC MODULES & INVERTERS
  // -------------------------------------------------------------
  {
    id: 'is-14286',
    isNumber: 'IS 14286:2010 / IEC 61215:2005',
    title: 'Crystalline Silicon Terrestrial Photovoltaic (PV) Modules - Design Qualification and Type Approval',
    hindiTitle: 'क्रिस्टलीय सिलिकॉन सौर पीवी मॉड्यूल - डिजाइन योग्यता और टाइप अनुमोदन',
    category: 'Product Standard',
    productGroup: 'Renewable Energy & Solar',
    currentVersion: '2010 (Reaffirmed 2021 / Aligned with IS/IEC 61215-1:2016)',
    originalYear: '2010',
    status: 'Active',
    publicationDate: '2010-06-25',
    icsCode: '27.160',
    technicalCommittee: 'ETD 28 (Solar Photovoltaic Energy Systems)',
    overview: 'Prescribes design qualification and type approval testing for terrestrial crystalline silicon solar PV modules operating in outdoor climates.',
    scope: 'Covers electrical performance, thermal cycling (-40°C to +85°C), damp heat test (85°C / 85% RH for 1000 hrs), mechanical load test (5400 Pa snow/wind), and hail impact resistance.',
    keyRequirements: [
      'Peak power determination under Standard Test Conditions (STC: 1000 W/m², 25°C cell temp, AM 1.5 spectrum)',
      'Thermal cycling test (200 cycles from -40°C to +85°C with current injection)',
      'Damp-heat test (85°C / 85% Relative Humidity for 1000 hours with power loss < 5%)',
      'Mechanical load test withstanding 2400 Pa front/back and 5400 Pa front load'
    ],
    safetyRequirements: [
      'Wet leakage current test (Insulation resistance x Area >= 40 M-Ohm.m² at 1000V DC)',
      'Bypass diode thermal test to prevent hot-spot cell degradation'
    ],
    installationRequirements: [
      'Anodized aluminum alloy frame corrosion resistance (minimum 15 micron anodization)',
      'MC4 compatible IP67/IP68 junction box with UV-resistant solar cables'
    ],
    testMethods: [
      { isNumber: 'IS/IEC 60904-1', name: 'Photovoltaic Devices - Measurement of PV Current-Voltage Characteristics', parameters: ['Sun simulator flash test', 'IV curve profiling'] }
    ],
    normativeReferences: ['IS/IEC 61730-1:2016', 'IS/IEC 61730-2:2016', 'IS 16221 (Part 2):2015'],
    alliedStandards: ['IS 16169:2014 (Grid Tied PV Inverters)', 'IS 17094:2018 (PV Module Degradation)'],
    amendments: [
      { number: 1, date: '2019-11-20', description: 'Harmonization with IEC 61215:2016 Multi-part series including Bifacial PV testing', status: 'In Force' }
    ],
    certification: {
      type: 'Compulsory Registration Scheme (CRS)',
      mandatory: true,
      qcoNotificationNumber: 'MNRE Solar Photovoltaics, Systems, Devices and Components Goods (Requirements for Compulsory Registration) Order',
      qcoEffectiveDate: '2018-04-16',
      authority: 'BIS & Ministry of New and Renewable Energy (MNRE ALMM List)',
      reason: 'Mandatory BIS Registration (CRS) and listing in MNRE Approved List of Models and Manufacturers (ALMM).'
    },
    keywords: ['solar module', 'solar panel', 'photovoltaic', 'pv module', 'solar tender', 'iec 61215', 'almm', 'mnre', 'सौर पैनल', 'सोलर मॉड्यूल']
  },
  {
    id: 'is-16221-2',
    isNumber: 'IS 16221 (Part 2):2015 / IEC 62109-2:2011',
    title: 'Safety of Power Converters for Use in Photovoltaic Power Systems - Part 2: Particular Requirements for Inverters',
    hindiTitle: 'सोलर पावर कन्वर्टर्स और इन्वर्टर की सुरक्षा आवश्यकताएं',
    category: 'Safety Standard',
    productGroup: 'Renewable Energy & Solar',
    currentVersion: '2015 (Reaffirmed 2020)',
    originalYear: '2015',
    status: 'Active',
    publicationDate: '2015-08-30',
    icsCode: '27.160',
    technicalCommittee: 'ETD 28',
    overview: 'Safety requirements for grid-connected and off-grid solar inverters, covering electrical shock, thermal risk, islanding prevention, and DC ground fault detection.',
    scope: 'Applies to string inverters, central inverters, and micro-inverters up to 1500V DC input.',
    keyRequirements: [
      'Anti-islanding protection disconnection within 2.0 seconds upon grid loss',
      'Maximum total harmonic distortion (THD) of output current < 3%',
      'Integrated DC isolator switch and Class II surge protection on DC/AC ports'
    ],
    safetyRequirements: ['Residual current monitoring unit (RCMU) with 300 mA fault trip.'],
    testMethods: [
      { isNumber: 'IS 16169:2014', name: 'Test Procedure for Islanding Prevention Measures for Grid-Connected PV Inverters', parameters: ['Resonant load bank testing', 'Trip time measurement'] }
    ],
    normativeReferences: ['IS 16169:2014', 'IS/IEC 62109-1'],
    alliedStandards: ['IS 14286:2010'],
    amendments: [],
    certification: {
      type: 'Compulsory Registration Scheme (CRS)',
      mandatory: true,
      authority: 'BIS & MNRE',
      reason: 'Mandatory BIS Registration under MNRE Solar Goods Order.'
    },
    keywords: ['solar inverter', 'grid tie inverter', 'anti islanding', 'power converter', 'solar rooftop']
  },

  // -------------------------------------------------------------
  // 7. POWER & CONTROL CABLES
  // -------------------------------------------------------------
  {
    id: 'is-7098-1',
    isNumber: 'IS 7098 (Part 1):1988',
    title: 'Crosslinked Polyethylene Insulated Thermoplastic Sheathed Cables - Specification - Part 1: For Working Voltages up to and including 1100 V',
    hindiTitle: 'एक्सएलपीई इंसुलेटेड केबल्स - 1100 वोल्ट तक के लिए विशिष्टता',
    category: 'Product Standard',
    productGroup: 'Power & Electrical',
    currentVersion: '1988 (Reaffirmed 2020 / Incorporating Amendments 1 to 4)',
    originalYear: '1988',
    status: 'Active',
    publicationDate: '1988-11-20',
    icsCode: '29.060.20',
    technicalCommittee: 'ETD 09 (Power Cables)',
    overview: 'Specifies requirements for single, two, three, 3.5 and four core armored and unarmored XLPE insulated power and distribution cables for working voltages up to 1.1 kV.',
    scope: 'Covers EC grade aluminum / copper conductors, XLPE cross-linked insulation, inner sheath, galvanized steel wire/strip armoring, and outer PVC/FR-LSH sheath.',
    keyRequirements: [
      'Conductor resistance complying with IS 8130:2013 Class 1 or Class 2',
      'XLPE insulation maximum continuous conductor temperature 90°C and short circuit temperature 250°C',
      'Hot set test for crosslinking verification: Max elongation under load <= 175%, Permanent set <= 15%',
      'Tensile strength of XLPE insulation minimum 12.5 N/mm², elongation at break >= 200%'
    ],
    safetyRequirements: [
      'High voltage spark test on production line at 6 kV AC / 8.4 kV DC',
      'Flame retardant low smoke zero halogen (FR-LSH) properties for public indoor areas'
    ],
    installationRequirements: [
      'Minimum bending radius: 12 x Overall diameter for armored cables',
      'Direct burial in ground with sand cushioning and protective cable tiles'
    ],
    testMethods: [
      { isNumber: 'IS 10810 (Parts 1 to 64)', name: 'Methods of Test for Cables', parameters: ['Conductor resistance test', 'Armour resistance test', 'Hot set test', 'Flammability test', 'Oxygen index test'] }
    ],
    normativeReferences: ['IS 8130:2013', 'IS 3975:1999 (Mild Steel Wires for Cable Armoring)', 'IS 5831:1984', 'IS 10810'],
    alliedStandards: [
      'IS 7098 (Part 2):2011 (XLPE Cables from 3.3 kV up to 33 kV)',
      'IS 694:2010 (PVC Insulated Unsheathed and Sheathed Cables up to 1100V)'
    ],
    amendments: [
      { number: 4, date: '2020-09-08', description: 'Enhanced outer sheath UV resistance and lead-free PVC stabilizer mandate', status: 'In Force' }
    ],
    certification: {
      type: 'BIS ISI Mark (Scheme I)',
      mandatory: true,
      qcoNotificationNumber: 'Electrical Wires and Cable Appliances (Quality Control) Order',
      authority: 'Bureau of Indian Standards',
      reason: 'Mandatory ISI Mark certification under BIS Scheme-I.'
    },
    keywords: ['xlpe cable', 'armored cable', 'power cable', '1.1 kv cable', 'aluminum cable', 'is 7098', 'केबल', 'तार']
  },
  {
    id: 'is-694',
    isNumber: 'IS 694:2010',
    title: 'Polyvinyl Chloride Insulated Uns্যাathed and Sheathed Cables/Cords with Rigid and Flexible Conductor for Rated Voltages up to and including 450/750 V',
    hindiTitle: 'पीवीसी इंसुलेटेड घरेलू और औद्योगिक वायरिंग केबल',
    category: 'Product Standard',
    productGroup: 'Power & Electrical',
    currentVersion: '2010 (Reaffirmed 2021)',
    originalYear: '1960',
    status: 'Active',
    publicationDate: '2010-04-15',
    icsCode: '29.060.20',
    technicalCommittee: 'ETD 09',
    overview: 'Standard for building wires, house wiring cables, flexible cords and control panels wiring with electrolytic copper conductors and PVC insulation.',
    scope: 'Used in all domestic, commercial and institutional electrical wiring conduits.',
    keyRequirements: [
      '100% Electrolytic Bare Copper Conductor with 99.97% purity complying with IS 8130',
      'Insulation resistance constant (Ki) >= 3.67 M-Ohm.km at 70°C',
      'FR (Flame Retardant) / FRLS (Flame Retardant Low Smoke) oxygen index > 29%'
    ],
    safetyRequirements: ['High voltage dielectric withstand 2000V AC for 5 minutes in water immersion.'],
    testMethods: [
      { isNumber: 'IS 10810', name: 'Methods of Test for Cables', parameters: ['Spark test', 'Insulation resistance', 'Flame propagation test'] }
    ],
    normativeReferences: ['IS 8130:2013', 'IS 5831:1984', 'IS 10810'],
    alliedStandards: ['IS 7098 (Part 1):1988'],
    amendments: [],
    certification: {
      type: 'BIS ISI Mark (Scheme I)',
      mandatory: true,
      authority: 'BIS',
      reason: 'Mandatory ISI Mark for all building electrical wires.'
    },
    keywords: ['house wire', 'pvc cable', 'building wire', 'fr wire', 'frls cable', 'copper wire']
  },

  // -------------------------------------------------------------
  // 8. FIRE SAFETY & FIRE EXTINGUISHERS
  // -------------------------------------------------------------
  {
    id: 'is-15683',
    isNumber: 'IS 15683:2018',
    title: 'Portable Fire Extinguishers - Performance and Construction - Specification (First Revision / ISO 7165 Aligned)',
    hindiTitle: 'पोर्टेबल अग्निशामक (आग बुझाने वाले यंत्र) - प्रदर्शन और निर्माण - विशिष्टता',
    category: 'Product Standard',
    productGroup: 'Fire & Safety',
    currentVersion: '2018 (Reaffirmed 2023)',
    originalYear: '2006',
    status: 'Active',
    publicationDate: '2018-08-10',
    icsCode: '13.220.10',
    technicalCommittee: 'CED 22 (Fire Fighting Equipment)',
    overview: 'Comprehensive unified specification for all portable fire extinguishers (Water, Foam, ABC Dry Powder, Clean Agent, and Carbon Dioxide CO2 types).',
    scope: 'Covers cylinder burst pressure testing, discharge duration, effective range, fire rating tests (Class A wood crib, Class B heptane tray, Class C gas, Class E electrical).',
    keyRequirements: [
      'Minimum fire rating classification (e.g. 4A / 144B for 6kg ABC powder extinguisher)',
      'Hydrostatic stretch test: Cylinder must withstand 2.5x working pressure without permanent expansion > 10%',
      'Operating temperature range: -30°C to +60°C',
      'Corrosion resistance: External salt spray 480 hours, internal lining resistance'
    ],
    safetyRequirements: [
      'Pressure relief device on CO2 extinguishers and CE / PESO approved discharge valves',
      'Dielectric test of discharge horn / stream up to 100 kV for Class E electrical fires'
    ],
    installationRequirements: [
      'Wall mounting bracket height: Top of extinguisher not exceeding 1.5 meters from floor per IS 2190',
      'Clear photoluminescent operating instructional signage in Hindi & English'
    ],
    testMethods: [
      { isNumber: 'IS 15683 (Annex B to G)', name: 'Standard Fire Test Cribs and Pressure Cycles', parameters: ['Class A Wood Crib fire extinction', 'Class B liquid tray fire test', 'Discharge time curve'] }
    ],
    normativeReferences: ['IS 2190:2010', 'IS 4308:2019 (Dry Chemical Powder)', 'IS 15298'],
    alliedStandards: ['IS 2190:2010 (Selection, Installation and Maintenance of Portable Extinguishers)'],
    amendments: [],
    certification: {
      type: 'BIS ISI Mark (Scheme I)',
      mandatory: true,
      qcoNotificationNumber: 'Fire Extinguishers (Quality Control) Order',
      authority: 'Bureau of Indian Standards & Ministry of Home Affairs',
      reason: 'Mandatory ISI Mark certification. All commercial and government buildings must procure ISI-marked extinguishers.'
    },
    keywords: ['fire extinguisher', 'abc powder', 'co2 extinguisher', 'fire safety', 'fire rating 4a', 'is 15683', 'अग्निशामक', 'आग बुझाने का यंत्र'],
    outdatedReplacements: [
      {
        oldIsNumber: 'IS 2171 (Dry Powder), IS 940 (Water Type), IS 2878 (CO2 Type)',
        year: 'Old Series',
        reasonForSupersession: 'All legacy separate standards (IS 2171, IS 940, IS 2878) were withdrawn and merged into unified performance standard IS 15683:2018.'
      }
    ]
  },

  // -------------------------------------------------------------
  // 9. WATER PURIFICATION & DRINKING WATER
  // -------------------------------------------------------------
  {
    id: 'is-10500',
    isNumber: 'IS 10500:2012',
    title: 'Drinking Water - Specification (Second Revision)',
    hindiTitle: 'पीने का पानी (पेयजल) - विशिष्टता',
    category: 'Product Standard',
    productGroup: 'Water, Health & Food',
    currentVersion: '2012 (Reaffirmed 2021 / Incorporating Amendments 1 to 3)',
    originalYear: '1983',
    status: 'Active',
    publicationDate: '2012-05-15',
    icsCode: '13.060.20',
    technicalCommittee: 'FAD 25 (Drinking Water)',
    overview: 'The definitive national benchmark specifying acceptable and permissible limits for organoleptic, chemical, toxic substance, heavy metal, and microbiological parameters in potable water supplied to public.',
    scope: 'Mandatory normative benchmark for all municipal water supply schemes, Jal Jeevan Mission tenders, bottled water, and water filtration systems.',
    keyRequirements: [
      'Total Dissolved Solids (TDS): Acceptable limit 500 mg/L (Max permissible 2000 mg/L in absence of alternate source)',
      'pH: 6.5 to 8.5',
      'Turbidity: Acceptable limit 1 NTU (Max 5 NTU)',
      'Total Hardness as CaCO3: Acceptable limit 200 mg/L (Max 600 mg/L)',
      'Total Coliform & E. Coli: Shall not be detectable in any 100 mL sample'
    ],
    safetyRequirements: [
      'Heavy metal limits: Lead <= 0.01 mg/L, Arsenic <= 0.01 mg/L, Mercury <= 0.001 mg/L, Chromium <= 0.05 mg/L',
      'Pesticide residues: Below individual detection limits (< 0.0001 mg/L)'
    ],
    testMethods: [
      { isNumber: 'IS 3025 (Parts 1 to 60)', name: 'Methods of Sampling and Test (Physical and Chemical) for Water and Wastewater', parameters: ['Spectrophotometry', 'ICP-MS heavy metal detection', 'Membrane filtration coliform test'] }
    ],
    normativeReferences: ['IS 3025', 'IS 1622 (Microbiological Examination of Water)'],
    alliedStandards: ['IS 14543:2004 (Packaged Drinking Water)', 'IS 16240:2015 (Point-of-Use RO Purifiers)'],
    amendments: [
      { number: 3, date: '2021-08-18', description: 'Stricter limits on radioactive elements (Gross alpha 0.1 Bq/L) and chloramines', status: 'In Force' }
    ],
    certification: {
      type: 'Voluntary Certification',
      mandatory: false,
      authority: 'BIS & Ministry of Jal Shakti',
      reason: 'National benchmark standard for Jal Jeevan Mission and municipal water works.'
    },
    keywords: ['drinking water', 'potable water', 'water quality', 'tds limit', 'jal jeevan mission', 'turbidity', 'coliform', 'is 10500', 'पेयजल', 'पीने का पानी']
  },
  {
    id: 'is-16240',
    isNumber: 'IS 16240:2015',
    title: 'Reverse Osmosis (RO) Based Point-of-Use (PoU) Water Treatment Systems - Specification',
    hindiTitle: 'रिवर्स ऑस्मोसिस (आरओ) आधारित वाटर प्यूरीफायर - विशिष्टता',
    category: 'Product Standard',
    productGroup: 'Water, Health & Food',
    currentVersion: '2015 (Reaffirmed 2020)',
    originalYear: '2015',
    status: 'Active',
    publicationDate: '2015-11-20',
    icsCode: '13.060.20',
    technicalCommittee: 'CHD 13 (Water Quality)',
    overview: 'Specifies construction, membrane performance, minimum water recovery ratio, TDS reduction percentage (>90%), microbiological safety, and automatic shut-off features for commercial and domestic RO purifiers.',
    scope: 'Used in government office water purifier tenders, schools, hospital drinking stations.',
    keyRequirements: [
      'Minimum recovery ratio: At least 20% to 40% clean product water yield (to prevent excessive wastewater drain)',
      'TDS Reduction efficiency: Minimum 90% rejection of feed water dissolved solids',
      'Food grade materials compliance for all wetted plastic and silicone parts conforming to IS 10146',
      'Microbiological log reduction: 6-log reduction for bacteria, 4-log for virus, 3-log for cysts'
    ],
    safetyRequirements: ['Automatic cut-off when storage tank is full and low-pressure dry run protection.'],
    testMethods: [
      { isNumber: 'IS 16240 (Annex B to D)', name: 'Challenge Water Chemical and Microbiological Reduction Test', parameters: ['High TDS challenge slurry', 'E. coli spiked broth challenge'] }
    ],
    normativeReferences: ['IS 10500:2012', 'IS 10146 (Polyethylene for Food Contact)'],
    alliedStandards: ['IS 14543:2004'],
    amendments: [],
    certification: {
      type: 'BIS ISI Mark (Scheme I)',
      mandatory: false,
      authority: 'Bureau of Indian Standards',
      reason: 'Highly recommended for all Government e-Marketplace (GeM) water purifier tenders.'
    },
    keywords: ['ro purifier', 'water purifier', 'reverse osmosis', 'water treatment', 'pou purifier', 'gem water filter']
  },

  // -------------------------------------------------------------
  // 10. MEDICAL FACE MASKS & PPE
  // -------------------------------------------------------------
  {
    id: 'is-16289',
    isNumber: 'IS 16289:2014',
    title: 'Medical Face Masks - Specification (First Revision / Aligned with EN 14683 / ASTM F2100)',
    hindiTitle: 'मेडिकल फेस मास्क (सर्जिकल मास्क) - विशिष्टता',
    category: 'Product Standard',
    productGroup: 'Medical & Healthcare',
    currentVersion: '2014 (Reaffirmed 2019 / Incorporating Amendments 1 to 2)',
    originalYear: '2014',
    status: 'Active',
    publicationDate: '2014-03-30',
    icsCode: '11.140',
    technicalCommittee: 'TXD 36 (Medical Textiles)',
    overview: 'Specifies manufacturing, material construction, bacterial filtration efficiency (BFE), sub-micron particulate filtration efficiency (PFE), differential pressure (breathability), and splash resistance for surgical masks (Class 1, Class 2, Class 3).',
    scope: 'Covers 3-ply surgical masks used by healthcare workers and procurement in government hospitals, AIIMS, and disaster management reserves.',
    keyRequirements: [
      'Bacterial Filtration Efficiency (BFE) >= 95% for Class 1; >= 98% for Class 2 & Class 3',
      'Sub-micron Particulate Filtration Efficiency (PFE at 0.1 micron) >= 98%',
      'Differential Pressure (Delta P breathability) < 29.4 Pa/cm² for Class 1; < 49.0 Pa/cm² for Class 3',
      'Synthetic blood fluid penetration resistance at 80 mmHg (Class 1) up to 160 mmHg (Class 3)'
    ],
    safetyRequirements: [
      'Biocompatibility: Non-cytotoxic, non-irritating to skin per IS/ISO 10993',
      'Microbial cleanliness (bioburden) <= 30 CFU/g'
    ],
    testMethods: [
      { isNumber: 'IS 16289 (Annex A to E)', name: 'BFE Aerosol Challenge & Synthetic Blood Penetration Rig', parameters: ['Staphylococcus aureus challenge', 'Differential manometer air flow'] }
    ],
    normativeReferences: ['IS/ISO 10993-1', 'IS 1390'],
    alliedStandards: ['IS 9473:2002 (Respiratory Protective Devices - Filtering Half Masks N95/FFP2)'],
    amendments: [
      { number: 2, date: '2020-06-12', description: 'Special testing protocol fast-tracking for pandemic emergency hospital supplies', status: 'In Force' }
    ],
    certification: {
      type: 'BIS ISI Mark (Scheme I)',
      mandatory: true,
      qcoNotificationNumber: 'Medical Textiles (Quality Control) Order under Ministry of Textiles',
      authority: 'BIS & CDSCO',
      reason: 'Mandatory ISI Mark certification for medical supplies in hospital tenders.'
    },
    keywords: ['surgical mask', 'medical mask', '3 ply mask', 'bfe 99', 'medical ppe', 'hospital tender', 'फेस मास्क', 'मास्क']
  },
  {
    id: 'is-9473',
    isNumber: 'IS 9473:2002',
    title: 'Respiratory Protective Devices - Filtering Half Masks to Protect Against Particles - Specification (First Revision / FFP1, FFP2, FFP3)',
    hindiTitle: 'श्वसन सुरक्षा उपकरण - पार्टिकुलेट रेस्पिरेटर मास्क (एन95/एफएफपी2)',
    category: 'Product Standard',
    productGroup: 'Personal Protective Equipment (PPE)',
    currentVersion: '2002 (Reaffirmed 2021)',
    originalYear: '1980',
    status: 'Active',
    publicationDate: '2002-12-15',
    icsCode: '13.340.30',
    technicalCommittee: 'CHD 08',
    overview: 'Specifies requirements for particle filtering half-masks (respirators FFP1, FFP2, FFP3 / N95 equivalent) used in dusty industrial environments, mining, chemical handling, and airborne biological defense.',
    scope: 'Covers penetration of sodium chloride aerosol (PFE >= 94% for FFP2, >= 99% for FFP3), breathing resistance at 95 L/min, total inward leakage, and carbon dioxide content of inhalation air (< 1.0%).',
    keyRequirements: [
      'Class FFP2: Aerosol penetration through filter material <= 6% (minimum 94% efficiency)',
      'Class FFP3: Aerosol penetration <= 1% (minimum 99% efficiency)',
      'Total inward leakage <= 8% for FFP2 across 10 subject panel tests',
      'Inhalation resistance <= 2.4 mbar at 95 L/min'
    ],
    safetyRequirements: ['Flammability: Shall not continue burning after passing through direct flame.'],
    testMethods: [
      { isNumber: 'IS 9473 (Annex B)', name: 'NaCl Aerosol Penetration Test Rig', parameters: ['Flame photometer detector', 'Paraffin oil mist test'] }
    ],
    normativeReferences: ['IS 8519:1977'],
    alliedStandards: ['IS 16289:2014', 'IS 2925:1984'],
    amendments: [],
    certification: {
      type: 'Quality Control Order (QCO Mandatory)',
      mandatory: true,
      authority: 'Bureau of Indian Standards',
      reason: 'Mandatory ISI Mark certification under PPE Quality Control Order.'
    },
    keywords: ['n95 mask', 'respirator', 'ffp2', 'ffp3', 'particulate filter', 'dust mask', 'respiratory protection']
  }
];

// Sample pre-built tenders for quick testing
export const SAMPLE_TENDERS = [
  {
    id: 'sample-led',
    title: 'LED Street Lighting System (Municipal Tender)',
    shortDesc: 'Procurement of 1000 LED street lights for outdoor municipal roads with minimum 120 lm/W efficacy, IP66 protection, surge protection and outdoor installation requirements.',
    language: 'English' as const,
    category: 'Lighting & Electrical',
    inputType: 'Tender Specification' as const,
    text: `TENDER SPECIFICATION: Supply, Installation, Testing & Commissioning of 1000 nos. 90W/120W Energy Efficient Outdoor LED Street Lights for Smart City Road Corridor.
1. Scope: Outdoor pole-mounted luminaire system with high-pressure die-cast aluminum housing.
2. Electrical & Photometric Parameters:
   - System Efficacy: Minimum 120 lm/W.
   - Operating Input Voltage: 120V to 277V AC, 50 Hz.
   - High Voltage Grid Withstand: 440V AC for at least 2 hours without failure.
   - Power Factor: >= 0.95, Total Harmonic Distortion (THD) <= 10%.
   - Correlated Color Temperature (CCT): 5700K (Cool Day Light), CRI >= 70.
3. Environmental & Mechanical:
   - Ingress Protection: Minimum IP66 for optical compartment and control gear compartment.
   - Impact Protection: Minimum IK08 rating.
   - Surge Protection Device (SPD): 10 kV internal / external surge protection.
4. Mandatory Certifications:
   - Must hold valid BIS Registration (CRS) for both Luminaire and Driver.
   - Luminaire must conform to IS 10322 (Part 5/Sec 3):2012 and IS 16107 (Part 2/Sec 1).
   - LED Driver must conform to IS 15885 (Part 2/Sec 13).
5. Warranty: 5 Years comprehensive on-site warranty with LM-80 / TM-21 lumen maintenance reports.`
  },
  {
    id: 'sample-hindi-led',
    title: 'एलईडी स्ट्रीट लाइट खरीद (Hindi Query)',
    shortDesc: 'एलईडी स्ट्रीट लाइट के लिए कौन से भारतीय मानक लागू हैं? ऊर्जा दक्षता, आईपी66 और सुरक्षा आवश्यकताएं।',
    language: 'Hindi' as const,
    category: 'Lighting & Electrical',
    inputType: 'Natural Language Query' as const,
    text: `एलईडी स्ट्रीट लाइट के लिए कौन से भारतीय मानक लागू हैं? नगर पालिका की सड़कों के लिए 1000 एलईडी स्ट्रीट लाइटों की खरीद करनी है जिसमें न्यूनतम 120 लुमेन/वाट दक्षता, आईपी66 जलरोधक सुरक्षा, 10 केवी सर्ज प्रोटेक्शन और बीआईएस (BIS) अनिवार्य प्रमाणन शामिल होना चाहिए।`
  },
  {
    id: 'sample-helmet',
    title: 'Industrial Safety Helmets for Mining & Construction',
    shortDesc: 'Procurement of 5000 Industrial Safety Helmets with HDPE Shell, chin strap, 5kN shock absorption, 2000V electrical resistance for public infrastructure project.',
    language: 'English' as const,
    category: 'Personal Protective Equipment (PPE)',
    inputType: 'Technical Specification' as const,
    text: `TECHNICAL SPECIFICATION: Supply of 5000 Nos. Industrial Safety Helmets (Non-Metallic) for Underground Metro Tunneling and Construction Project.
1. Shell: Non-metallic high density polyethylene (HDPE) shell with UV stabilization.
2. Suspension: 6-point textile cradle suspension with replaceable sweatband and ratchet adjustment headband.
3. Performance Requirements:
   - Impact Attenuation: Transmitted force must not exceed 5.0 kN when tested as per BIS norms.
   - Penetration Resistance: Pointed 3 kg steel conical striker drop test compliance.
   - Electrical Insulation: High voltage resistance test at 2000V AC with leakage current <= 1.2 mA.
   - Flammability: Material shall not continue to burn after 5 seconds of flame removal.
4. Certification: Mandatory ISI Mark embossing under IS 2925 with valid BIS license number. Reference to older IS 2925:1975 noted in tender annexure.`
  },
  {
    id: 'sample-transformer',
    title: '1000 kVA 11kV/433V Oil Immersed Distribution Transformer',
    shortDesc: 'Procurement of 1000 kVA outdoor oil immersed step-down distribution transformer, BEE 3-Star energy loss levels, mineral oil to IS 335, CPRI type tested.',
    language: 'English' as const,
    category: 'Power & Electrical',
    inputType: 'Tender Specification' as const,
    text: `TENDER SPECIFICATION: Supply of 1000 kVA, 11 kV / 433 V, 3-Phase, 50 Hz Outdoor Type Mineral Oil Immersed Distribution Transformers.
1. Rating & Impedance: 1000 kVA, Delta/Star Dyn11 vector group, percentage impedance 5.0% at 75°C.
2. Energy Efficiency & Losses:
   - Maximum Total Losses at 50% load: Not exceeding 2000 Watts (BEE Star Level 2/3 compliant).
   - Maximum Total Losses at 100% load: Not exceeding 6500 Watts.
   - Core Material: Prime grade CRGO laser scribed electrical steel laminations.
3. Transformer Oil & Tank:
   - High grade uninhibited mineral insulating oil conforming to IS 335:2018 with dielectric breakdown voltage >= 60 kV.
   - Corrugated / Radiator fin tank with oil expansion conservator, silica gel breather and 100 mm dial type thermometer with alarm contacts.
4. Compliance: Mandatory ISI Mark under IS 1180 (Part 1):2014 and BIS Scheme-I Certification. CPRI / ERDA dynamic short circuit test report required.`
  },
  {
    id: 'sample-cement',
    title: 'Ordinary Portland Cement (OPC 53 Grade) for Highway Bridge',
    shortDesc: 'Procurement of 20,000 Metric Tonnes of Ordinary Portland Cement 53 Grade for Highway Bridge Superstructure with 53 MPa 28-day strength and IS 269 compliance.',
    language: 'English' as const,
    category: 'Civil & Construction',
    inputType: 'Product Description' as const,
    text: `TECHNICAL REQUIREMENT: Procurement of 20,000 MT Bulk & Bagged Ordinary Portland Cement 53 Grade for Prestressed Concrete Girder Highway Bridge.
- 28-day Compressive Strength minimum 53 MPa (IS 12269 referenced in contractor submission).
- Initial setting time >= 30 minutes, Final setting time <= 600 minutes.
- Blaine fineness minimum 225 m²/kg.
- Soundness Le-Chatelier expansion <= 10 mm.
- Mandatory BIS certification mark on every 50 kg HDPE bag.`
  },
  {
    id: 'sample-solar',
    title: 'Solar PV Modules (540 Wp Mono PERC) for Ground Mount Plant',
    shortDesc: 'Supply of 10 MW Mono-crystalline PERC Solar PV Modules >= 540 Wp, 1500V DC system, BIS CRS registration, MNRE ALMM listing, IEC 61215 / IS 14286.',
    language: 'English' as const,
    category: 'Renewable Energy & Solar',
    inputType: 'Tender Specification' as const,
    text: `TENDER SPECIFICATION: Supply of 540Wp to 550Wp High Efficiency Mono-crystalline PERC Solar Photovoltaic Modules for 10 MW Grid Connected Solar Power Plant.
- Module Efficiency: Minimum 21.0% under STC conditions.
- System Voltage: Rated for 1500V DC.
- Mechanical Load: 5400 Pa front surface snow/wind load, 2400 Pa rear surface.
- Ingress Protection: IP68 split junction box with bypass diodes.
- Mandatory Compliance: Valid BIS Registration under CRS (IS 14286 & IS/IEC 61730-1/2), listed in MNRE ALMM List.`
  }
];
