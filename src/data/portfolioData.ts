export interface EstateFeature {
  id: string;
  title: string;
  iconName: string;
  tagline: string;
  description: string;
}

export interface BungalowModel {
  id: string;
  name: string;
  bedrooms: number;
  bathrooms: number;
  landSize: string;
  sqm: number;
  tagline: string;
  priceNote: string;
  status: string;
  description: string;
  floorPlanRooms: { name: string; dimension?: string; icon: string }[];
  interiorHighlights: string[];
  exteriorHighlights: string[];
  image: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  location: string;
  city: string;
  country: string;
  category: 'residential' | 'commercial' | 'mixed-use' | 'heritage';
  categoryLabel: string;
  status: 'Selling Fast' | 'Under Development' | 'Completed';
  year: string;
  gdv: string;
  area: string;
  scopeOfInvolvement: string[];
  description: string;
  architecturalStatement: string;
  keyFeatures: string[];
  achievements: string[];
  heroImage: string;
  galleryImages: { url: string; caption: string }[];
  partners: {
    architect: string;
    interiorDesign: string;
    contractor: string;
    sustainability: string;
  };
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  overview: string;
  responsibilities: string[];
  majorContributions: string[];
  notableProjects: string[];
}

export interface ExpertiseItem {
  id: string;
  title: string;
  iconName: string;
  summary: string;
  capabilities: string[];
  focus: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  title: string;
  organization: string;
  location: string;
  relationship: string;
}

export interface PhilosophyPrinciple {
  number: string;
  title: string;
  tagline: string;
  description: string;
  quote: string;
}

export const BROCHURE_IMAGE = '/assets/aistudio/WhatsApp_Image_2026-11-11_at_00.17.39_86389a68.jpeg';
export const CEO_IMAGE = '/src/assets/images/ceo_onyema_construction_1794361537767.jpg';

export const COMPANY_INFO = {
  name: 'A1 Elite Service & Properties Limited',
  shortName: 'A1 Elite Properties',
  ceo: {
    name: 'Onyema Chukwuma',
    title: 'Chief Executive Officer & Managing Director',
    badge: 'On-Site Developer & Managing Director',
    quote: 'At A1 Elite Service & Properties Limited, we believe leadership belongs on the ground. When you buy into Royal Garden Estate Okpanam, you are not buying a rendering; you are investing in verified, ongoing civil engineering backed by our personal guarantee.'
  },
  estateName: 'Royal Garden Estate Okpanam',
  estateTagline: '...Your Property, Our Priority',
  campaignCallout: 'Own a Home in Royal Garden Estate Okpanam',
  location: 'Okpanam, Delta State (Asaba Capital Territory)',
  monogram: 'A1',
  credentials: [
    'REDAN Registered Developer',
    'C of O in Progress / Registered Survey',
    'Deed of Assignment & Estate Allocation',
    'Asaba Capital Urban Development Approved'
  ],
  bioSummary: 'A1 Elite Service & Properties Limited is a forward-thinking real estate development and asset management firm delivering master-planned residential communities in high-growth corridors. Our flagship development, Royal Garden Estate Okpanam, provides premium, secure, and modern 2-bedroom and 4-bedroom bungalows designed for generational capital appreciation and refined living.',
  extendedBio: [
    'At A1 Elite Service & Properties Limited, our guiding ethos is simple and unwavering: "...Your Property, Our Priority". We operate at the forefront of urban expansion across the burgeoning Asaba Capital Territory, transforming strategic greenfield parcels into fully serviced, gated, and vibrant residential sanctuaries.',
    'Royal Garden Estate Okpanam is engineered to address the critical demand for genuine luxury combined with dependable infrastructure. Every home within the estate features precision architectural floor plans, high structural durability, 24/7 guarded security, stable electricity via dedicated transformers, and paved road networks.',
    'Whether you are an astute investor seeking stellar rental yields and capital appreciation, or a family seeking an uncompromised haven of tranquility and pride of ownership, A1 Elite Service & Properties Limited provides seamless title documentation, transparent payment plans, and timely handover.'
  ],
  contact: {
    email: 'info@a1eliteservices.com',
    secondaryEmail: 'sales@royalgardenestate.com',
    phone: '+234 803 000 1234',
    secondaryPhone: '+234 812 345 6789',
    office: 'A1 Elite Tower, Suite 4, Okpanam Expressway, Asaba Capital Territory, Delta State',
    secondaryOffice: 'Corporate Liaison Desk: Admiralty Way, Lekki Phase 1, Lagos State',
    inspectionDays: 'Mondays – Saturdays (10:00 AM – 5:00 PM WAT)',
    availability: 'Units Now Selling · Allocation Guaranteed Upon Completion'
  },
  keyMetrics: [
    { label: 'Estate Development', value: '100% Prime', description: 'Dry table-land with instant physical allocation' },
    { label: 'Guaranteed Power', value: '24/7', description: 'Dedicated high-capacity industrial substation' },
    { label: 'Estate Security', value: 'Guarded', description: 'Access control gatehouse, armed patrols & CCTV' },
    { label: 'Title Framework', value: 'Perpetual', description: 'Deed of Assignment & Registered Survey Plan' }
  ]
};

export const ESTATE_FEATURES: EstateFeature[] = [
  {
    id: 'security',
    title: '24/7 Security',
    iconName: 'ShieldCheck',
    tagline: 'Gated Perimeter & Armed Patrols',
    description: 'Round-the-clock professional security personnel, automated biometric access gates, perimeter electric fencing, and smart night-vision CCTV coverage across all estate streets.'
  },
  {
    id: 'roads',
    title: 'Good Road Network',
    iconName: 'Route',
    tagline: 'Paved Interlocking Pavers & Drains',
    description: 'Wide dual-lane interlocked paved boulevards engineered with covered deep concrete storm water drainage, walkways, and decorative solar street lamps.'
  },
  {
    id: 'power',
    title: 'Stable Power Supply',
    iconName: 'Zap',
    tagline: 'Dedicated Transformer Grid',
    description: 'Direct high-voltage step-down commercial transformer, centralized underground cabling, and backup communal generator support for street lighting and water systems.'
  },
  {
    id: 'water',
    title: 'Clean Water Supply',
    iconName: 'Droplets',
    tagline: 'Centralized Industrial Treatment Plant',
    description: 'Deep industrial industrial boreholes connected to modern multi-stage purification and pressurized underground reticulation pipelines delivered directly to every bungalow.'
  },
  {
    id: 'landscape',
    title: 'Beautiful Landscape',
    iconName: 'Trees',
    tagline: 'Lush Green Gardens & Royal Palms',
    description: 'Masterfully landscaped green verges, manicured front lawns, decorative royal palm trees, and continuous environmental horticulture maintenance.'
  },
  {
    id: 'environment',
    title: 'Serene Environment',
    iconName: 'Building',
    tagline: 'Quiet, Peaceful Living Sanctuary',
    description: 'A harmonious, family-friendly sanctuary removed from city congestion yet situated minutes away from the Asaba Capital City hub, Asaba International Airport, and major expressways.'
  }
];

export const BUNGALOW_MODELS: BungalowModel[] = [
  {
    id: '2-bedroom-bungalow',
    name: '2 Bedroom Luxury Bungalow',
    bedrooms: 2,
    bathrooms: 2,
    landSize: '250 SQM',
    sqm: 250,
    tagline: 'Compact elegance engineered for young families, executives, and high-yield buy-to-let investors.',
    priceNote: 'Flexible 6 to 12-Month Outright & Instalment Plans Available',
    status: 'Selling Fast',
    description: 'A pristine contemporary bungalow set upon a private 250 SQM fenced plot. Designed with an open-flow living and dining salon, fully fitted kitchen with custom cabinetry, two well-proportioned en-suite bedrooms, and dedicated private car parking.',
    floorPlanRooms: [
      { name: 'Front Entrance Porch', dimension: '3.2m x 1.8m', icon: 'DoorOpen' },
      { name: 'Main Living Room', dimension: '5.4m x 4.2m', icon: 'Tv' },
      { name: 'Dining Area', dimension: '3.0m x 2.8m', icon: 'Utensils' },
      { name: 'Modern Kitchen with Store', dimension: '3.6m x 2.8m', icon: 'ChefHat' },
      { name: 'Master Bedroom (En-suite)', dimension: '4.2m x 3.8m', icon: 'BedDouble' },
      { name: 'Bedroom 2 (En-suite)', dimension: '3.8m x 3.6m', icon: 'Bed' },
      { name: 'Visitor / Central Bathroom', dimension: '2.4m x 1.8m', icon: 'Bath' }
    ],
    interiorHighlights: [
      'POP designer ceilings with recessed warm LED perimeter lighting',
      'High-grade vitrified ceramic floor and wall tiling throughout',
      'Contemporary sanitary ware with tempered glass walk-in shower enclosures',
      'Custom hardwood security doors and anti-burglary casement windows',
      'Fully plumbed points for split air-conditioning and DSTV cabling'
    ],
    exteriorHighlights: [
      'Gated private compound with interlocked parking for up to 3 cars',
      'Classic architectural pillars with decorative stone cladding',
      'Perimeter boundary fence and drainage connection to main estate trunk',
      'Overhead water storage stand with automated booster pump system'
    ],
    image: BROCHURE_IMAGE
  },
  {
    id: '4-bedroom-bungalow',
    name: '4 Bedroom Executive Bungalow',
    bedrooms: 4,
    bathrooms: 4,
    landSize: '450 SQM',
    sqm: 450,
    tagline: 'Monumental luxury bungalow on an expansive 450 SQM plot with grand driveway and lush garden.',
    priceNote: 'Premium Allocation with Dedicated Corner & Boulevard Options',
    status: 'Limited Units',
    description: 'An executive family mansion offering an uncompromised 4-bedroom architectural blueprint. Features a double-volume front porch with grand columns, massive expansive living room, formal dining room, chef-grade kitchen with pantry, and four luxurious en-suite bedrooms including an opulent master suite.',
    floorPlanRooms: [
      { name: 'Grand Stately Porch', dimension: '4.5m x 2.2m', icon: 'DoorOpen' },
      { name: 'Expansive Living Room', dimension: '7.2m x 5.0m', icon: 'Tv' },
      { name: 'Executive Dining Room', dimension: '4.2m x 3.5m', icon: 'Utensils' },
      { name: 'Gourmet Kitchen & Pantry', dimension: '4.8m x 3.6m', icon: 'ChefHat' },
      { name: 'Master Bedroom Suite', dimension: '5.8m x 4.6m', icon: 'Crown' },
      { name: 'Bedroom 2 (En-suite)', dimension: '4.2m x 4.0m', icon: 'BedDouble' },
      { name: 'Bedroom 3 (En-suite)', dimension: '4.0m x 3.8m', icon: 'Bed' },
      { name: 'Bedroom 4 / Guest Suite', dimension: '3.8m x 3.6m', icon: 'Bed' },
      { name: 'Master Bathroom with Freestanding Tub', dimension: '3.6m x 2.6m', icon: 'Bath' }
    ],
    interiorHighlights: [
      'Double-height POP ceiling features with imported crystal chandeliers',
      'Italian Calacatta-pattern glazed porcelain tile flooring',
      'Master bathroom featuring freestanding deep soaking bathtub and rain shower',
      'Granite-topped kitchen island with breakfast bar and bespoke cabinetry',
      'Smart home conduit wiring for solar inverters and perimeter CCTV'
    ],
    exteriorHighlights: [
      'Expansive 450 SQM plot with private grounds for 4 to 5 executive vehicles',
      'Monumental classical entryway pillars with exterior wall sconces',
      'Landscaped side garden for outdoor gazebos and private relaxation',
      'Automated rolling gate compatibility with private security post'
    ],
    image: BROCHURE_IMAGE
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'royal-garden-okpanam',
    name: 'Royal Garden Estate Okpanam',
    tagline: 'The pinnacle of planned community living in the Asaba-Okpanam Growth Corridor.',
    location: 'Okpanam Express Road, Delta State',
    city: 'Okpanam / Asaba',
    country: 'Nigeria',
    category: 'residential',
    categoryLabel: 'Master-Planned Gated Community',
    status: 'Selling Fast',
    year: '2026',
    gdv: '₦4.8 Billion',
    area: '50 Hectare Masterplan',
    scopeOfInvolvement: [
      'Master Community Planning & Land Acquisition',
      'Interlocking Road Infrastructure & Drainage Construction',
      'Dedicated Power Substation Installation',
      'Direct Construction of 2 & 4 Bedroom Bungalows',
      'Perpetual Title Processing & Client Allocation'
    ],
    description: 'Royal Garden Estate Okpanam is A1 Elite Service & Properties Limited’s flagship residential development. Spanning a verdant, completely dry table-land in Okpanam, the estate integrates modern architectural bungalows with uninterrupted utilities, 24/7 security, and paved roads.',
    architecturalStatement: 'Our design vision was to bring world-class suburban estate planning to Delta State. We designed bungalows with generous natural cross-ventilation, stately columns, and generous compound setbacks that allow every family room to breathe.',
    keyFeatures: [
      'Complete perimeter security fencing with armed gatehouse personnel',
      'Interlocking stone paved road network with covered gutters',
      'Dedicated electric power transformer and underground cabling',
      'Central industrial borehole water treatment and pressurized network',
      'Instant allocation with verifiable C of O in progress & Registered Survey'
    ],
    achievements: [
      'Over 60% of Phase 1 bungalow units pre-subscribed',
      'Zero dispute guarantee on dry, government-approved land title',
      'Recognized as the premier emerging estate development in the Asaba Capital Axis'
    ],
    heroImage: BROCHURE_IMAGE,
    galleryImages: [
      {
        url: BROCHURE_IMAGE,
        caption: 'Royal Garden Estate Okpanam official master brochure featuring 2 & 4 bedroom bungalows'
      },
      {
        url: '/src/assets/images/hero_luxury_architecture_1794355738686.jpg',
        caption: 'Modern luxury residential exterior with ambient evening illumination'
      },
      {
        url: '/src/assets/images/project_penthouse_interior_1794355740230.jpg',
        caption: 'Luxury interior living room with bespoke ceiling joinery and chandelier'
      }
    ],
    partners: {
      architect: 'A1 Elite Master Architectural Studio',
      interiorDesign: 'Elite Living Decor Consultants',
      contractor: 'A1 Civil & Infrastructure Works Ltd',
      sustainability: 'GreenScape Nigeria Landscaping'
    }
  },
  {
    id: '2-bed-bungalow-spotlight',
    name: 'The Elite 2-Bedroom Bungalow (250 SQM)',
    tagline: 'Modern functional architecture on a 250 SQM plot with manicured front porch.',
    location: 'Phase 1, Royal Garden Estate, Okpanam',
    city: 'Okpanam',
    country: 'Nigeria',
    category: 'residential',
    categoryLabel: 'Executive Bungalow',
    status: 'Selling Fast',
    year: '2026',
    gdv: 'Flexible Terms',
    area: '250 SQM Land',
    scopeOfInvolvement: [
      'Architectural Optimization for 250 SQM Footprint',
      'Turnkey Building Construction & Roofing',
      'Interior Finishing & POP Installations',
      'Dedicated Compound Fencing & Gate Installation'
    ],
    description: 'Designed specifically for nuclear families and buy-to-let investors. Each unit boasts two en-suite bedrooms, a visitor restroom, expansive sitting room, and modern kitchen on a generous 250 SQM compound.',
    architecturalStatement: 'Maximizing every square meter: the layout separates private sleeping quarters from the open reception room, while the front porch provides an authentic outdoor retreat.',
    keyFeatures: [
      'Land size of 250 SQM providing ample front parking and private backyard',
      'En-suite bedrooms with contemporary ceramic wall tiling',
      'POP ceilings with warm recessed spotlights',
      'Gated private compound with interlocked floor pavers'
    ],
    achievements: [
      'Projected annual rental yield of 14%–16% within the Asaba capital rental market',
      'High absorption rate among diaspora buyers and civil executives'
    ],
    heroImage: BROCHURE_IMAGE,
    galleryImages: [
      {
        url: BROCHURE_IMAGE,
        caption: '2 Bedroom Bungalow floor plan and 3D architectural rendering'
      }
    ],
    partners: {
      architect: 'A1 Elite Design Guild',
      interiorDesign: 'A1 Finishes',
      contractor: 'Elite Builders Consortium',
      sustainability: 'A1 Solar Power Division'
    }
  },
  {
    id: '4-bed-bungalow-spotlight',
    name: 'The Royal 4-Bedroom Bungalow (450 SQM)',
    tagline: 'Grand architectural presence on a monumental 450 SQM plot with dual parking bays.',
    location: 'Royal Boulevard, Royal Garden Estate, Okpanam',
    city: 'Okpanam',
    country: 'Nigeria',
    category: 'residential',
    categoryLabel: 'Luxury Estate Mansion',
    status: 'Selling Fast',
    year: '2026',
    gdv: 'Exclusive Price',
    area: '450 SQM Land',
    scopeOfInvolvement: [
      'Grand Columnar Architecture & Facade Detailing',
      'Large-Span Roofing with Premium Stone-Coated Tiles',
      'Master Suite En-Suite with Freestanding Tub & Walk-in Shower',
      'Landscaping & Perimeter Security Gate Construction'
    ],
    description: 'The pinnacle of luxury in Okpanam. Occupying a 450 SQM plot, this home features 4 en-suite bedrooms, a chef-grade kitchen with pantry, an expansive formal living room, and an expansive courtyard that accommodates up to 5 cars.',
    architecturalStatement: 'Stately symmetry and generous proportions. The prominent porch pillars create an imposing arrival experience, while the interior celebrates natural light and spatial elegance.',
    keyFeatures: [
      '450 SQM land plot with large driveway and green landscaping',
      'Four spacious en-suite bedrooms with built-in wardrobes',
      'Grand master bathroom with oval soaking tub and glass shower cubicle',
      'Pre-wired for solar inverter systems and automated entrance gates'
    ],
    achievements: [
      'Flagship model selected for prime corner plots along Royal Garden Boulevard',
      'Appreciation rate exceeding 25% year-on-year in Okpanam corridor'
    ],
    heroImage: BROCHURE_IMAGE,
    galleryImages: [
      {
        url: BROCHURE_IMAGE,
        caption: '4 Bedroom Bungalow facade, interior salon, and architectural floor plan'
      }
    ],
    partners: {
      architect: 'A1 Elite Masterworks',
      interiorDesign: 'Royal Interior Atelier',
      contractor: 'A1 Engineering & Construction',
      sustainability: 'Delta Clean Energy Consultants'
    }
  }
];

export const EXPERIENCE_HISTORY: ExperienceItem[] = [
  {
    id: 'a1-elite-current',
    company: 'A1 Elite Service & Properties Limited',
    role: 'Master Developer & Managing Director',
    period: '2019 – Present',
    location: 'Asaba & Lagos, Nigeria',
    overview: 'Spearheading master-planned residential developments, land banking, and construction management across the Asaba Capital Territory and high-growth Delta corridors.',
    responsibilities: [
      'Conceiving, acquiring, and entitling large-scale residential estates including Royal Garden Estate Okpanam.',
      'Supervising on-site civil works: asphalt/interlocking paving, drainage networks, electric transformers, and deep borehole plants.',
      'Ensuring strict title authenticity and delivering zero-encumbrance Deeds of Assignment and survey plans.',
      'Structuring flexible, investor-friendly payment schedules for home buyers and diaspora clients.'
    ],
    majorContributions: [
      'Successfully acquired and secured government layout approval for the 50-hectare Royal Garden Estate Okpanam.',
      'Delivered turn-key infrastructure with 100% operational road and power connectivity.',
      'Established a trusted reputation serving hundreds of homeowners in Nigeria and the diaspora.'
    ],
    notableProjects: [
      'Royal Garden Estate Okpanam (Flagship 2 & 4 Bedroom Bungalows)',
      'Elite Heights Residential Scheme (Asaba Core)',
      'A1 Commercial Logistics Park (Ibusa-Asaba Expressway)'
    ]
  },
  {
    id: 'heritage-urban',
    company: 'Capital Real Estate Advisory & Investments',
    role: 'Senior Project & Land Acquisition Director',
    period: '2014 – 2019',
    location: 'Lagos & Port Harcourt',
    overview: 'Managed property acquisition, site verification, and civil engineering oversight for private gated communities and commercial developments.',
    responsibilities: [
      'Conducted legal due diligence with state land ministries and customary title holders.',
      'Oversaw civil contractor tenders, road paving specifications, and structural inspections.',
      'Formulated off-plan marketing strategies achieving rapid early-phase capital recovery.'
    ],
    majorContributions: [
      'Managed the delivery of 280+ residential plots and villas across two gated residential estates.',
      'Maintained a spotless zero-litigation record across all transactions.'
    ],
    notableProjects: [
      'Victoria Crest Gated Scheme',
      'Pineview Executive Residences',
      'Greenway Park Masterplan'
    ]
  }
];

export const EXPERTISE_PILLARS: ExpertiseItem[] = [
  {
    id: 'estate-development',
    title: 'Master Estate Development',
    iconName: 'Building2',
    summary: 'Turnkey development of gated residential communities complete with internal roads, electricity, water, and 24/7 security.',
    capabilities: [
      'Full lifecycle master planning & zoning approvals',
      'Civil infrastructure: interlocked roads & concrete drainage',
      'Electrification: transformers, high-tension lines & lighting',
      'Perimeter fencing & automated gatehouse construction'
    ],
    focus: 'Gated master developments like Royal Garden Estate Okpanam.'
  },
  {
    id: 'bungalow-construction',
    title: 'Bespoke Bungalow Construction',
    iconName: 'Home',
    summary: 'Architectural engineering and direct building of contemporary 2-bedroom and 4-bedroom executive bungalows with premium finishes.',
    capabilities: [
      'Structural engineering using reinforced concrete foundations',
      'High-grade stone-coated aluminum roofing and steel trusses',
      'POP ceiling designs with concealed LED cove lighting',
      'Turn-key delivery within 6 to 9 months'
    ],
    focus: 'Functional modern luxury on 250 SQM and 450 SQM plots.'
  },
  {
    id: 'property-investment',
    title: 'High-Yield Property Investment',
    iconName: 'TrendingUp',
    summary: 'Guiding investors to capture high capital appreciation in Okpanam, the fastest-growing corridor in the Asaba capital metropolis.',
    capabilities: [
      'Land banking & early-entry off-plan price advantages',
      'Rental yield forecasting and tenant placement advisory',
      'Flexible 6 to 12-month zero-interest payment structures',
      'Bulk purchase discounts for investment syndicates'
    ],
    focus: 'Targeting 25%+ annual capital growth and 15% rental yields.'
  },
  {
    id: 'title-documentation',
    title: 'Secure Title & Legal Verification',
    iconName: 'ShieldCheck',
    summary: 'Ironclad documentation providing absolute peace of mind with 100% verified non-encumbered government-backed land titles.',
    capabilities: [
      'Registered Survey Plans and C of O processing',
      'Governor’s Consent & Gazette coordinate verification',
      'Legally binding Deed of Assignment drafted by SAN counsel',
      'Physical demarcation and beacon identification'
    ],
    focus: 'Complete protection of client property ownership rights.'
  },
  {
    id: 'diaspora-advisory',
    title: 'Diaspora Real Estate Stewardship',
    iconName: 'Compass',
    summary: 'Specialized fiduciary representation for clients in the UK, US, Canada, and Europe building or investing back home.',
    capabilities: [
      'Live HD video site inspections and milestone drone updates',
      'Escrow payment protocols and bank-guaranteed milestones',
      'Virtual signing and remote title document courier',
      'Dedicated diaspora relationship management desk'
    ],
    focus: 'Transparent, stress-free homeownership for Nigerians abroad.'
  },
  {
    id: 'facility-management',
    title: 'Estate Facility & Asset Management',
    iconName: 'Wrench',
    summary: 'Continuous maintenance of estate infrastructure to preserve long-term prestige, security, and asset valuations.',
    capabilities: [
      '24/7 security personnel supervision and gate access log',
      'Central water supply treatment and booster pump operation',
      'Waste management and environmental landscaping upkeep',
      'Roadway maintenance and streetlight repairs'
    ],
    focus: 'Preserving premier living standards in Royal Garden Estate.'
  }
];

export const PHILOSOPHY_PRINCIPLES: PhilosophyPrinciple[] = [
  {
    number: '01',
    title: '...Your Property, Our Priority',
    tagline: 'A solemn commitment to safeguarding client investment and delivery.',
    description: 'At A1 Elite Service & Properties Limited, our motto is not a slogan; it is the fundamental standard by which every decision is made. From the day you inspect a plot to the day you receive the keys to your bungalow, your capital, peace of mind, and pride of ownership remain our absolute priority.',
    quote: 'Your Property, Our Priority is the covenant we uphold with every homeowner.'
  },
  {
    number: '02',
    title: 'Uncompromised Civil Infrastructure First',
    tagline: 'We build the roads, power, and water before marketing promises.',
    description: 'Many developers sell empty bush with distant promises. A1 Elite commits significant upfront capital to grade roads, lay interlocked paving, erect transformers, and install drainage systems before allocating homes. Real value begins with dependable infrastructure beneath your feet.',
    quote: 'A true estate is defined by the quality of its infrastructure.'
  },
  {
    number: '03',
    title: 'Generational Title Security',
    tagline: 'Zero disputes. Registered documentation. 100% peace of mind.',
    description: 'Land ownership must be sacred and untainted by disputes or multiple claims. We conduct exhaustive legal due diligence and partner with state town planning authorities to guarantee that every buyer receives an indisputable, perpetual title that can be proudly passed to children and grandchildren.',
    quote: 'True wealth in real estate is built on unshakeable legal title.'
  },
  {
    number: '04',
    title: 'Modern Architectural Functionalism',
    tagline: 'Homes built for tropical comfort, natural ventilation, and regal presence.',
    description: 'Our 2-bedroom and 4-bedroom bungalows are purposefully engineered with high ceilings, spacious porches, cross-ventilated windows, and durable stone-coated roofs designed to withstand decades of tropical rain and sun while retaining their majestic beauty.',
    quote: 'Architecture must serve everyday living with dignity and grace.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'Living in London, buying property in Nigeria often comes with anxiety. A1 Elite Service & Properties completely altered my perception. They gave me weekly video updates on my 4-bedroom bungalow in Royal Garden Estate Okpanam, and delivered my keys right on schedule. The road network and electricity are superb!',
    author: 'Engr. Emeka O. Nwosu',
    title: 'Senior Systems Engineer',
    organization: 'Diaspora Client (London, UK)',
    location: 'London & Okpanam',
    relationship: '4-Bedroom Bungalow Homeowner'
  },
  {
    id: 'test-2',
    quote: 'The transformation in Okpanam is breathtaking. Royal Garden Estate has set a new benchmark for gated communities in Delta State. The 24/7 security gives my family total peace of mind, and the value of our bungalow has already appreciated by 30% since we broke ground.',
    author: 'Barrister (Mrs.) Chinyere Alabi',
    title: 'Managing Counsel',
    organization: 'Alabi & Associates Legal Practitioners',
    location: 'Asaba, Delta State',
    relationship: '2-Bedroom Bungalow Investor'
  },
  {
    id: 'test-3',
    quote: 'As an investment banker, I look strictly at infrastructure and title clarity. A1 Elite delivered a dedicated transformer, interlocked roads, and clean borehole water before asking for final payments. Their slogan "...Your Property, Our Priority" is lived out every day.',
    author: 'Dr. Kenneth I. Okoye',
    title: 'Director of Corporate Finance',
    organization: 'Meridian Capital Partners',
    location: 'Lagos & Asaba',
    relationship: 'Estate Plot & Development Partner'
  }
];
