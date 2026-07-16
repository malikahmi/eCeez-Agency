import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Network, Search, Users, ShieldCheck, HelpCircle, 
  Layers, Package, Check, Clipboard, Building2, 
  ArrowRight, Sparkles, BookOpen, FileText, ChevronRight,
  Filter, RotateCcw, AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Type definitions for Taxonomy Items
interface JobTaxonomyItem {
  id: string;
  jobTitle: string;
  mappedCategory: string;
  departmentCode: string;
  confidence: 'High' | 'Medium' | 'Low';
  rationale: string;
  schemaSignal: string;
  alternativeTitles: string[];
}

interface ProductTaxonomyItem {
  id: string;
  query: string;
  googleCategoryPath: string;
  googleCategoryId: string;
  googleSegment: string;
  confidence: 'High' | 'Medium';
  rationale: string;
  taxonomicBestPractice: string;
}

// Data Sets
const JOB_TAXONOMY_DATABASE: JobTaxonomyItem[] = [
  {
    id: 'job-1',
    jobTitle: 'Planning Manager',
    mappedCategory: 'Merchandising & Inventory Planning',
    departmentCode: 'MIP-04',
    confidence: 'High',
    rationale: 'Planning managers oversee inventory velocity, allocation, demand planning, and stock mapping in retail structures. They directly sit inside the Merchandising flow.',
    schemaSignal: 'http://schema.org/Role > ContactPoint > InventoryPlanning',
    alternativeTitles: ['Inventory Planner', 'Inventory Manager', 'Merchandise Planner', 'Stock Allocation Manager']
  },
  {
    id: 'job-2',
    jobTitle: 'Co-Founder',
    mappedCategory: 'Executive Leadership & General Administration',
    departmentCode: 'EXEC-01',
    confidence: 'High',
    rationale: 'Founders and Co-founders represent ultimate corporate authority and overall management governance in the ecommerce organization tree.',
    schemaSignal: 'http://schema.org/founder',
    alternativeTitles: ['Founder', 'Owner', 'President / Founder', 'Amministratore']
  },
  {
    id: 'job-3',
    jobTitle: 'Founder',
    mappedCategory: 'Executive Leadership & General Administration',
    departmentCode: 'EXEC-01',
    confidence: 'High',
    rationale: 'Founders define the primary brand vision & strategic trajectory. Classified under core Executive Officers.',
    schemaSignal: 'http://schema.org/founder',
    alternativeTitles: ['Owner', 'President', 'Co-Founder']
  },
  {
    id: 'job-4',
    jobTitle: 'Owner',
    mappedCategory: 'Executive Leadership & General Administration',
    departmentCode: 'EXEC-01',
    confidence: 'High',
    rationale: 'Entity owner or primary proprietor responsible for company assets/liabilities. Mapped to Executive Administration.',
    schemaSignal: 'http://schema.org/founder',
    alternativeTitles: ['Proprietor', 'Business Owner', 'Principal Owner']
  },
  {
    id: 'job-5',
    jobTitle: 'Head of Digital Customer Conversion',
    mappedCategory: 'Marketing & Conversion Rate Optimization (CRO)',
    departmentCode: 'MKT-CRO-02',
    confidence: 'High',
    rationale: 'Responsible for driving the funnel conversion optimization, landing page performance, and overall user experience (UX) to decrease customer acquisition cost (CAC).',
    schemaSignal: 'http://schema.org/ContactPoint > CustomerConversionSpecialist',
    alternativeTitles: ['CRO Specialist', 'Conversion Optimizer', 'Head of CRO', 'Digital Experience Director']
  },
  {
    id: 'job-6',
    jobTitle: 'Software Developer',
    mappedCategory: 'Technology, DevOps & Product Engineering',
    departmentCode: 'ENG-03',
    confidence: 'High',
    rationale: 'Responsible for developing internal tooling, server-side codebases, API integrations, and maintaining store architectures.',
    schemaSignal: 'http://schema.org/Role > SoftwareDeveloper',
    alternativeTitles: ['Web Developer', 'Full Stack Developer', 'Front End Developer', 'TypeScript Engineer']
  },
  {
    id: 'job-7',
    jobTitle: 'Staff Software Engineer',
    mappedCategory: 'Technology, DevOps & Product Engineering',
    departmentCode: 'ENG-05',
    confidence: 'High',
    rationale: 'Senior engineering leadership overseeing technical architectural design, backend scalability, and headless frontend frameworks (such as Shopify Hydrogen).',
    schemaSignal: 'http://schema.org/Role > StaffSoftwareEngineer',
    alternativeTitles: ['Principal Software Engineer', 'Lead Architect', 'VP of Engineering', 'Director of Technology']
  },
  {
    id: 'job-8',
    jobTitle: 'Digital Marketing Consultant',
    mappedCategory: 'Marketing, Growth & Strategy',
    departmentCode: 'MKT-STR-01',
    confidence: 'High',
    rationale: 'Advises brands on user acquisition channels including paid search, content partnerships, organic SEO development, and customer lifetime value (LTV).',
    schemaSignal: 'http://schema.org/Role > MarketingConsultant',
    alternativeTitles: ['Marketing Consultant', 'Adviser', 'Growth Consultant']
  },
  {
    id: 'job-9',
    jobTitle: 'COO',
    mappedCategory: 'Operations, Logistics & Supply Chain',
    departmentCode: 'OPS-01',
    confidence: 'High',
    rationale: 'Chief Operating Officers handle physical warehouses, supply contracts, international drop configurations, and custom retail logistics pipelines.',
    schemaSignal: 'http://schema.org/Role > COO',
    alternativeTitles: ['Chief Operating Officer', 'Operations Director', 'VP of Operations']
  },
  {
    id: 'job-10',
    jobTitle: 'Creative Director',
    mappedCategory: 'Creative, Design & Brand Experience',
    departmentCode: 'CRT-01',
    confidence: 'High',
    rationale: 'Directs the aesthetic standard, video campaigns, photographic direction, and editorial assets across all marketing channels of the brand.',
    schemaSignal: 'http://schema.org/Role > CreativeDirector',
    alternativeTitles: ['Art Director', 'Design Director', 'Lead Brand Designer']
  },
  {
    id: 'job-11',
    jobTitle: 'Trade Project Manager',
    mappedCategory: 'Operations & Project Management',
    departmentCode: 'PM-02',
    confidence: 'High',
    rationale: 'Orchestrates project tasks spanning multiple merchant accounts, vendor syncs, software updates, and multi-country configurations.',
    schemaSignal: 'http://schema.org/Role > ProjectManager',
    alternativeTitles: ['Project Manager', 'Agile Delivery Manager', 'PM']
  },
  {
    id: 'job-12',
    jobTitle: 'Account Manager',
    mappedCategory: 'Client Success & Partner Enablement',
    departmentCode: 'SLS-03',
    confidence: 'High',
    rationale: 'Monitors corporate brand relationships, merchant sync statuses, and ensures client accounts are performing to expectations.',
    schemaSignal: 'http://schema.org/Role > AccountManager',
    alternativeTitles: ['Client Partner', 'CSM', 'Customer Success Manager']
  },
  {
    id: 'job-13',
    jobTitle: 'Trainer and Coach',
    mappedCategory: 'People Operations & Human Resources',
    departmentCode: 'HR-02',
    confidence: 'High',
    rationale: 'Manages organizational alignment, training team members on complex internal taxonomies, tools, and brand protocols.',
    schemaSignal: 'http://schema.org/Role > Trainer',
    alternativeTitles: ['HR Specialist', 'Coach', 'Organization Consultant', 'HR Trainer']
  },
  {
    id: 'job-14',
    jobTitle: 'VP of Digital Product',
    mappedCategory: 'Digital Product Management',
    departmentCode: 'PD-01',
    confidence: 'High',
    rationale: 'Sets the strategy and release velocity for user-facing digital applications, checkout customizations, and custom recommendation microservices.',
    schemaSignal: 'http://schema.org/Role > ProductDirector',
    alternativeTitles: ['VP of Product', 'Director of Product', 'Product Lead']
  },
  {
    id: 'job-15',
    jobTitle: 'Sales Connector',
    mappedCategory: 'Sales & Business Development',
    departmentCode: 'SLS-01',
    confidence: 'Medium',
    rationale: 'Hybrid role matching potential leads, connecting buyers with wholesale channels, and aligning partners.',
    schemaSignal: 'http://schema.org/Role > SalesAgent',
    alternativeTitles: ['Business Development Manager', 'Sales Specialist', 'BDM']
  }
];

const PRODUCT_TAXONOMY_DATABASE: ProductTaxonomyItem[] = [
  {
    id: 'prod-1',
    query: 'Leather Jacket',
    googleCategoryPath: 'Apparel & Accessories > Clothing > Outerwear > Coats & Jackets',
    googleCategoryId: '203',
    googleSegment: 'Apparel & Fashion (DTC)',
    confidence: 'High',
    rationale: 'Leather jackets are classified officially under Clothing > Outerwear. Mapping to this path prevents Google Merchant Center feed listing issues and optimizes Google Shopping search results.',
    taxonomicBestPractice: 'Required attributes for Google Shopping in this taxonomy: Gender, Age Group, Size, and Color tags are mandatory.'
  },
  {
    id: 'prod-2',
    query: 'Sweaters',
    googleCategoryPath: 'Apparel & Accessories > Clothing > Shirts & Tops > Sweaters',
    googleCategoryId: '2271',
    googleSegment: 'Apparel & Fashion (DTC)',
    confidence: 'High',
    rationale: 'Sweaters fall directly under shirts & tops or specialized sweaters sub-trees. Accurate path alignment improves visibility during seasonal searches.',
    taxonomicBestPractice: 'Ensure the material type ("Wool", "Cashmere") is parameterized under "material" in product attributes.'
  },
  {
    id: 'prod-3',
    query: 'Footwear',
    googleCategoryPath: 'Apparel & Accessories > Shoes > Sandals',
    googleCategoryId: '187',
    googleSegment: 'Footwear & Attire',
    confidence: 'High',
    rationale: 'Footwear is any item worn on the feet. For Google product taxonomy, it aligns with basic "Shoes" or specific sub-elements like "Sandals", "Boots", "Athletic Shoes".',
    taxonomicBestPractice: 'Set Google Product Category to "187" (Shoes) and supply the correct "size system" attribute (e.g. US, EU, UK).'
  },
  {
    id: 'prod-4',
    query: 'Crocs',
    googleCategoryPath: 'Apparel & Accessories > Shoes > Clogs & Mules',
    googleCategoryId: '5385',
    googleSegment: 'Footwear & Attire',
    confidence: 'High',
    rationale: 'A trade brand whose classic products are molded clogs. Mapped to Shoes > Clogs & Mules for precision catalog classification.',
    taxonomicBestPractice: 'Pass both the brand name "Crocs" and the exact type "Clogs" in your structural data tags to maximize merchant approval rates.'
  },
  {
    id: 'prod-5',
    query: 'Fabric Hamper',
    googleCategoryPath: 'Home & Garden > Household Supplies > Laundry Supplies > Laundry Baskets & Hampers',
    googleCategoryId: '499920',
    googleSegment: 'Home & Living',
    confidence: 'High',
    rationale: 'Hampers/baskets made from fabric or wicker meant for laundry are classified under Home & Garden > Household Supplies > Laundry Supplies.',
    taxonomicBestPractice: 'Always specify the construction material attribute (e.g. "Cotton Canvas" or "Polyester") to prevent product matching failures.'
  },
  {
    id: 'prod-6',
    query: 'HD Hangers',
    googleCategoryPath: 'Home & Garden > Household Supplies > Storage & Organization > Clothing Hangers',
    googleCategoryId: '505307',
    googleSegment: 'Home & Living',
    confidence: 'High',
    rationale: 'Hangers, heavy-duty or lightweight, are categorized inside Storage & Organization sub-paths in Home & Garden.',
    taxonomicBestPractice: 'Package details should specify the quantity counts ("Pack of 10", "Pack of 50") as core bundle features.'
  },
  {
    id: 'prod-7',
    query: 'Hair Brush',
    googleCategoryPath: 'Health & Beauty > Personal Care > Hair Care > Hair Brushes & Combs',
    googleCategoryId: '4098',
    googleSegment: 'Health & Beauty',
    confidence: 'High',
    rationale: 'Hair styling implements fall directly into the personal care sub-branch under Hairs Brushes & Combs.',
    taxonomicBestPractice: 'Avoid using broad "Beauty" groups. Use this exact leaf path so your ad bid groups are perfectly targeted on Google and Social platforms.'
  },
  {
    id: 'prod-8',
    query: 'Makeup Palettes',
    googleCategoryPath: 'Health & Beauty > Personal Care > Cosmetics > Makeup > Makeup Palettes',
    googleCategoryId: '3245',
    googleSegment: 'Health & Beauty',
    confidence: 'High',
    rationale: 'Cosmetic eye and face shadow sets belong under Personal Care > Cosmetics > Makeup > Makeup Palettes.',
    taxonomicBestPractice: 'Since palettes contain multiple colors, list the primary color category or "Multi-color" as the key color parameter.'
  },
  {
    id: 'prod-9',
    query: 'Trophies',
    googleCategoryPath: 'Business & Industrial > Recognition & Awards > Trophies & Plaques',
    googleCategoryId: '5422',
    googleSegment: 'Awards & Accessories',
    confidence: 'High',
    rationale: 'Products meant for corporate, educational, or sport rewards map strictly to Business & Industrial Recognition lines.',
    taxonomicBestPractice: 'Ensure standard custom engraving options are described in semantic structured attributes rather than lumped inside standard name text.'
  },
  {
    id: 'prod-10',
    query: 'Robes',
    googleCategoryPath: 'Apparel & Accessories > Clothing > Sleepwear & Loungewear > Robes',
    googleCategoryId: '2304',
    googleSegment: 'Apparel & Fashion (DTC)',
    confidence: 'High',
    rationale: 'Robes, bathrobes, or lounge garments are itemized as sleepwear / loungewear variants under apparel.',
    taxonomicBestPractice: 'Include details like "Plush", "Satin", or "Cotton Terry" in product descriptions and mapping structures.'
  },
  {
    id: 'prod-11',
    query: 'Luggage Bags',
    googleCategoryPath: 'Apparel & Accessories > Handbags, Wallets & Cases > Luggage & Suitcases',
    googleCategoryId: '113',
    googleSegment: 'Apparel & Accessories',
    confidence: 'High',
    rationale: 'Luggage items, weekenders, or rolling suitcases are categorized under major group Apparel & Accessories > Handbags, Wallets & Cases > Luggage & Suitcases.',
    taxonomicBestPractice: 'Specify physical weight, size specs, and material attributes for optimal Merchant Center listing visibility.'
  },
  {
    id: 'prod-12',
    query: 'Sofa',
    googleCategoryPath: 'Home & Garden > Furniture > Sofas',
    googleCategoryId: '594',
    googleSegment: 'Furniture & Living',
    confidence: 'High',
    rationale: 'Sofas, davenports, or sectionals maps to Home & Garden > Furniture > Sofas directly.',
    taxonomicBestPractice: 'Heavy bulk furniture listings must include shipping weight parameters to prevent merchant review holds.'
  },
  {
    id: 'prod-13',
    query: 'Headboard',
    googleCategoryPath: 'Home & Garden > Furniture > Beds & Bed Frames > Headboards',
    googleCategoryId: '6331',
    googleSegment: 'Furniture & Living',
    confidence: 'High',
    rationale: 'Bed components/accents maps under Bed Frames > Headboards inside furniture tree layers.',
    taxonomicBestPractice: 'Specify compatible bed sizes ("Queen", "King", "Twin") as explicit mapping properties.'
  },
  {
    id: 'prod-14',
    query: 'Queen Mattress',
    googleCategoryPath: 'Home & Garden > Linens & Bedding > Bedding / Beds > Mattresses',
    googleCategoryId: '4559',
    googleSegment: 'Furniture & Living',
    confidence: 'High',
    rationale: 'Mattresses and orthopedic beds are classified under Bedding > Mattresses in the Google taxonomy tree.',
    taxonomicBestPractice: 'Ensure the specific size configuration is provided as a strict attribute (e.g., Mattress Size: Queen).'
  },
  {
    id: 'prod-15',
    query: 'Rugs',
    googleCategoryPath: 'Home & Garden > Decor > Rugs & Carpets',
    googleCategoryId: '6015',
    googleSegment: 'Home & Living',
    confidence: 'High',
    rationale: 'Area rugs, runners, and woven carpets map to HG > Decor > Rugs & Carpets.',
    taxonomicBestPractice: 'Include physical dimensions (e.g., "5x7", "8x10") in product identifiers for search filters to map seamlessly.'
  },
  {
    id: 'prod-16',
    query: 'Blinds',
    googleCategoryPath: 'Home & Garden > Decor > Window Treatments > Window Blinds & Shades',
    googleCategoryId: '6149',
    googleSegment: 'Home & Living',
    confidence: 'High',
    rationale: 'Window roller shades, wooden blinds, or shutters map under specialized Window Blinds paths.',
    taxonomicBestPractice: 'Specify control type ("Cordless", "Motorized") structure data to match high-volume organic search triggers.'
  },
  {
    id: 'prod-17',
    query: 'Door Mat',
    googleCategoryPath: 'Home & Garden > Decor > Rugs & Carpets > Doormats',
    googleCategoryId: '6022',
    googleSegment: 'Home & Living',
    confidence: 'High',
    rationale: 'Exterior or entryway doormats map strictly to Decor > Rugs & Carpets > Doormats for technical search classifications.',
    taxonomicBestPractice: 'Identify the backing parameter (e.g., "Non-Slip Rubber") to support automated smart-collection generation inside shop setups.'
  }
];

export const TaxonomyMapperPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'jobs' | 'products'>('jobs');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedConfidence, setSelectedConfidence] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Filter systems
  const filteredJobs = useMemo(() => {
    return JOB_TAXONOMY_DATABASE.filter(item => {
      const matchText = (
        item.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.mappedCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.departmentCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.alternativeTitles.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      const matchConfidence = selectedConfidence === 'All' || item.confidence === selectedConfidence;
      return matchText && matchConfidence;
    });
  }, [searchTerm, selectedConfidence]);

  const filteredProducts = useMemo(() => {
    return PRODUCT_TAXONOMY_DATABASE.filter(item => {
      const matchText = (
        item.query.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.googleCategoryPath.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.googleCategoryId.includes(searchTerm) ||
        item.googleSegment.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return matchText;
    });
  }, [searchTerm]);

  const handleCopyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClear = () => {
    setSearchTerm('');
    setSelectedConfidence('All');
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Invisible Screen-Reader Header for SEO Optimization */}
      <section className="sr-only">
        <h1>Ecommerce Taxonomy & Category Mapping Hub | eCeez Solutions</h1>
        <p>A comprehensive structural reference tool for mapping job titles and products to official retail & schema-compliant taxonomy networks. Used to improve Google E-E-A-T relevance and optimize Merchant Center product feed performance.</p>
        <h2>Google Product Taxonomy Mapping</h2>
        <p>Learn how to map leather jackets, sweaters, footwear, hampers, hangers, hair brushes, makeup palettes, and home furnishings.</p>
        <h2>Ecommerce Job Title Organizational Taxonomy</h2>
        <p>Learn structural roles for Planning Managers, Founders, Conversion Executives, Software Engineers, and Corporate Directors.</p>
      </section>

      {/* Main Header / Hero */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold mb-6 uppercase tracking-wider">
          <Sparkles size={14} /> Technical SEO & E-E-A-T Solutions
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 text-black tracking-tight leading-none">
          Ecommerce <span className="text-indigo-600">Taxonomy Hub</span> & Mapper
        </h1>
        <p className="text-zinc-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Google ranks sites that prove industry authority and clean structural organization. Use our proprietary mapping tool to classify structural ecommerce job positions and product listings to Google-compliant metadata standards.
        </p>
      </div>

      {/* Interactive Tool Hub Card */}
      <div className="bg-white border border-zinc-200 rounded-[2.5rem] shadow-xl overflow-hidden mb-20">
        <div className="p-8 md:p-12 border-b border-zinc-100 bg-zinc-50/50">
          <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
            {/* Tab switchers */}
            <div className="flex bg-zinc-200/60 p-1 rounded-2xl w-full md:w-auto self-start">
              <button
                onClick={() => { setActiveTab('jobs'); handleClear(); }}
                className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                  activeTab === 'jobs' 
                    ? 'bg-white text-indigo-600 shadow-sm' 
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                <Users size={16} /> Job Title Taxonomy
              </button>
              <button
                onClick={() => { setActiveTab('products'); handleClear(); }}
                className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                  activeTab === 'products' 
                    ? 'bg-white text-indigo-600 shadow-sm' 
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                <Package size={16} /> Product & Feed Taxonomy
              </button>
            </div>

            {/* Quick stats banner */}
            <div className="flex items-center gap-6 text-zinc-500 text-xs font-mono">
              <div>
                <span className="text-black font-bold block text-sm">72+</span>
                Sitemap Pages Approved
              </div>
              <div className="w-[1px] h-8 bg-zinc-200"></div>
              <div>
                <span className="text-black font-bold block text-sm">100%</span>
                Google Merchant Success
              </div>
            </div>
          </div>

          {/* Search and control filter controls */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-7 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={
                  activeTab === 'jobs' 
                    ? "Search job title (e.g. 'Planning Manager', 'Founder', 'CRO')..."
                    : "Search product type (e.g. 'Leather Jacket', 'Queen Mattress', 'Hair Brush combs')..."
                }
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-sm text-black placeholder:text-zinc-400 font-medium"
              />
            </div>

            <div className="md:col-span-3 flex gap-2">
              {activeTab === 'jobs' ? (
                <div className="relative w-full">
                  <select
                    value={selectedConfidence}
                    onChange={(e) => setSelectedConfidence(e.target.value)}
                    className="w-full bg-white px-4 py-4 rounded-2xl border border-zinc-200 font-medium text-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  >
                    <option value="All">All Confidence levels</option>
                    <option value="High">High Confidence</option>
                    <option value="Medium">Medium Confidence</option>
                  </select>
                </div>
              ) : (
                <div className="flex items-center px-4 py-4 font-medium text-xs text-zinc-500 rounded-2xl bg-indigo-50/50 border border-indigo-100/40 w-full justify-center gap-1.5">
                  <Sparkles size={14} className="text-indigo-600" /> Google Feed Compliant
                </div>
              )}
            </div>

            <div className="md:col-span-2">
              <button 
                onClick={handleClear}
                className="w-full h-full flex items-center justify-center gap-2 bg-zinc-100 font-bold text-zinc-700 hover:bg-zinc-200 px-4 py-4 rounded-2xl text-xs transition-colors"
              >
                <RotateCcw size={14} /> Reset
              </button>
            </div>
          </div>
        </div>

        {/* Database Content Area */}
        <div className="p-8 md:p-12 min-h-[350px]">
          <AnimatePresence mode="wait">
            {activeTab === 'jobs' ? (
              <motion.div
                key="jobs-list"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
                    Showing {filteredJobs.length} Mapped Positions
                  </h3>
                  <span className="text-xs text-zinc-400">
                    Industry standard organization mapping schema points
                  </span>
                </div>

                {filteredJobs.length === 0 ? (
                  <div className="text-center py-16 bg-zinc-50 rounded-2xl border border-dashed border-zinc-200">
                    <AlertCircle size={32} className="mx-auto text-zinc-300 mb-3" />
                    <p className="text-zinc-600 font-bold mb-1">No matching roles found</p>
                    <p className="text-zinc-400 text-xs">Try searching for common titles like "Planner", "CEO", "Engineer" or "Owner"</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredJobs.map((item) => (
                      <motion.div
                        key={item.id}
                        layoutId={item.id}
                        className="p-6 rounded-2xl border border-zinc-200 hover:border-indigo-400 transition-all hover:shadow-md bg-white flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="flex items-center gap-2 mb-1.5">
                                <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-800 text-[10px] font-mono font-bold">
                                  {item.departmentCode}
                                </span>
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                  item.confidence === 'High' 
                                    ? 'bg-emerald-50 text-emerald-700' 
                                    : 'bg-yellow-50 text-yellow-700'
                                }`}>
                                  {item.confidence} Confidence Reference
                                </span>
                              </div>
                              <h4 className="text-black text-lg font-black tracking-tight">{item.jobTitle}</h4>
                            </div>
                            <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                              Job Category
                            </span>
                          </div>

                          <div className="space-y-3 font-medium text-sm text-zinc-700">
                            <div className="p-3.5 bg-zinc-50 border border-zinc-100 rounded-xl space-y-1">
                              <span className="text-[10px] uppercase text-zinc-400 tracking-wider block font-bold">Recommended Mapping Category</span>
                              <p className="text-zinc-900 font-bold">{item.mappedCategory}</p>
                            </div>
                            <p className="text-xs text-zinc-500 leading-relaxed mt-2">{item.rationale}</p>
                          </div>
                        </div>

                        <div className="border-t border-zinc-100 pt-4 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                          <div className="space-y-1">
                            <span className="text-[10px] text-zinc-400 block font-semibold">Schema.org Signal:</span>
                            <code className="text-[11px] text-indigo-600 font-mono bg-indigo-50/50 px-1.5 py-0.5 rounded break-all">
                              {item.schemaSignal}
                            </code>
                          </div>
                          <button
                            onClick={() => handleCopyToClipboard(item.schemaSignal, item.id)}
                            className="flex items-center gap-1 text-zinc-500 hover:text-indigo-600 font-bold hover:bg-zinc-50 p-1.5 rounded transition-colors self-end sm:self-center"
                          >
                            {copiedId === item.id ? (
                              <>
                                <Check size={14} className="text-emerald-600" />
                                <span className="text-emerald-600 font-bold text-[11px]">Copied Signal</span>
                              </>
                            ) : (
                              <>
                                <Clipboard size={14} />
                                <span className="font-bold text-[11px]">Copy Signal</span>
                              </>
                            )}
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="products-list"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
                    Showing {filteredProducts.length} Google Category Guides
                  </h3>
                  <span className="text-xs text-zinc-400">
                    Compliant with the official 2026 Google Product Taxonomy database
                  </span>
                </div>

                {filteredProducts.length === 0 ? (
                  <div className="text-center py-16 bg-zinc-50 rounded-2xl border border-dashed border-zinc-200">
                    <AlertCircle size={32} className="mx-auto text-zinc-300 mb-3" />
                    <p className="text-zinc-600 font-bold mb-1">Product keyword not found</p>
                    <p className="text-zinc-400 text-xs">Try searching for "Jacket", "Footwear", "Mattress", "Rug", or "Hanger"</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredProducts.map((item) => (
                      <div
                        key={item.id}
                        className="p-6 rounded-2xl border border-zinc-200 bg-white hover:border-indigo-400 transition-all hover:shadow-sm"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                          <div className="lg:col-span-4 space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="px-2.5 py-1 text-xs font-mono font-bold bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-lg">
                                ID: {item.googleCategoryId}
                              </span>
                              <span className="text-[11px] text-zinc-400 uppercase font-bold tracking-wider">
                                {item.googleSegment}
                              </span>
                            </div>
                            <h4 className="text-black text-xl font-black tracking-tight">{item.query}</h4>
                            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">{item.rationale}</p>
                          </div>

                          <div className="lg:col-span-5 p-4 bg-zinc-50 border border-zinc-200/60 rounded-xl space-y-1">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">Official Google Product Category Path</span>
                            <p className="text-zinc-900 font-mono font-bold text-xs leading-relaxed">
                              {item.googleCategoryPath}
                            </p>
                          </div>

                          <div className="lg:col-span-3 h-full flex flex-col justify-between space-y-3">
                            <div className="p-3 bg-indigo-50/30 border border-indigo-100/40 rounded-xl">
                              <span className="text-[10px] text-indigo-600 uppercase font-black block tracking-wider mb-1">Taxo Strategy</span>
                              <p className="text-[11px] text-zinc-600 font-medium leading-relaxed">
                                {item.taxonomicBestPractice}
                              </p>
                            </div>
                            
                            <button
                              onClick={() => handleCopyToClipboard(item.googleCategoryPath, item.id)}
                              className="w-full flex items-center justify-center gap-1.5 bg-zinc-100 hover:bg-indigo-600 hover:text-white text-zinc-700 py-2.5 rounded-xl text-xs font-bold transition-all"
                            >
                              {copiedId === item.id ? (
                                <>
                                  <Check size={14} />
                                  <span>Path Copied Successfully</span>
                                </>
                              ) : (
                                <>
                                  <Clipboard size={14} />
                                  <span>Copy Mapped Path</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Guide Area & Context on why Taxonomy matters for search & E-E-A-T */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
        <div className="lg:col-span-2 space-y-10">
          <section className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-12 space-y-6 shadow-sm">
            <h2 className="text-3xl font-black text-black tracking-tight flex items-center gap-3">
              <BookOpen className="text-indigo-600" size={28} /> Understanding Ecommerce Role & Product Categorization
            </h2>
            
            <p className="text-zinc-600 font-medium leading-relaxed">
              Google's search evaluation standards heavily inspect E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) metrics. Incorrect mapping signals can cause immediate loss of crawl budget and listing mismatch penalties.
            </p>

            <div className="space-y-4 pt-4 border-t border-zinc-100">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-black font-bold text-lg mb-1">Boosting E-E-A-T with Employee Role Schemas</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    By implementing structured schemas that explicitly details titles like <span className="font-semibold text-black">Planning Manager</span> mapped as product coordinators or <span className="font-semibold text-black">Co-Founders</span> as responsible organization administrators, search engines authenticate of your brand as a real, trustworthy business.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-black font-bold text-lg mb-1">Optimizing Google Feed Google Product categories (GPC)</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Mapping items like <span className="font-semibold text-black">leather jackets</span>, <span className="font-semibold text-black">makeup palettes</span>, and <span className="font-semibold text-black">mattresses</span> to their leaf categories tells search bots exact bidding context, leading to lower CPC (Cost Per Click) and immediate conversion upgrades.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed FAQ section specifically mapping to Search Console Queries */}
          <section className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-12 space-y-6 shadow-sm">
            <h2 className="text-3xl font-black text-black tracking-tight">Taxonomy Mapping FAQs</h2>
            
            <div className="space-y-6 pt-4">
              {[
                {
                  q: "Which category does a Planning Manager map to in ecommerce taxonomies?",
                  a: "In commercial taxonomy frameworks, a Planning Manager / Inventory Planner belongs to 'Merchandising and Inventory Planning' (MIP). They bridges the gap between digital marketing velocity and supply constraints."
                },
                {
                  q: "What category does a Co-Founder or Founder fit under?",
                  a: "Founders, Co-Founders, and executive owners fall directly under 'Executive Leadership & General Administration'. These should be declared in Corporate Schema.org organization files."
                },
                {
                  q: "How should items like footwear or sandals be categorized in Google Product Taxonomy?",
                  a: "Footwear should always be assigned to the core node 'Apparel & Accessories > Shoes' (Category ID 187) or its respective branch (e.g. Sandals, Boots, Clogs) to avoid feed optimization errors."
                },
                {
                  q: "Where do household organizers and clothing hangers map?",
                  a: "They map to 'Home & Garden > Household Supplies > Storage & Organization > Clothing Hangers' to support accurate audience personalization loops."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-zinc-100 pb-6 last:border-none last:pb-0">
                  <h4 className="text-black font-bold text-md mb-2 flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">Q:</span>
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Why trust eCeez */}
          <div className="bg-indigo-950 text-white rounded-[2.5rem] p-8 space-y-6 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600 opacity-20 hover:opacity-30 blur-3xl transition-opacity"></div>
            <h3 className="text-2xl font-black tracking-tight leading-tight">Scale Your Store Performance & SEO</h3>
            <p className="text-indigo-200 text-sm leading-relaxed">
              We configure end-to-end Schema markup, optimize Merchant Center feeds, and restructure product categories to turn cold organic traffic into predictable merchant earnings.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-sm font-bold">
                <Check size={16} className="text-indigo-400" /> Advanced Google Feed Setup
              </div>
              <div className="flex items-center gap-3 text-sm font-bold">
                <Check size={16} className="text-indigo-400" /> Deep Schema.org Implementations
              </div>
              <div className="flex items-center gap-3 text-sm font-bold">
                <Check size={16} className="text-indigo-400" /> Core Web Vitals & Speed Optimization
              </div>
            </div>
            <Link 
              to="/contact" 
              className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-white text-indigo-950 font-bold py-4 rounded-2xl text-sm hover:bg-zinc-100 transition-colors"
            >
              Get Free Feed & Tech Audit <ArrowRight size={16} />
            </Link>
          </div>

          {/* Related services */}
          <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 space-y-6 shadow-sm">
            <h3 className="text-xl font-bold text-black tracking-tight">Core Services</h3>
            <div className="space-y-3">
              {[
                { title: 'Search Engine Optimization (SEO)', path: '/seo', desc: 'Topical authority & content mapping' },
                { title: 'Conversion Rate Optimization (CRO)', path: '/cro', desc: 'A/B testing & site audit' },
                { title: 'Shopify Setup Service', path: '/shopify-store-setup-service', desc: 'Turnkey catalog & technical mapping' }
              ].map((service, index) => (
                <Link 
                  key={index} 
                  to={service.path}
                  className="block p-4 rounded-xl hover:bg-zinc-50 border border-transparent hover:border-zinc-100 transition-all group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-black text-sm group-hover:text-indigo-600 transition-colors">
                      {service.title}
                    </span>
                    <ChevronRight size={14} className="text-zinc-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-xs text-zinc-400 leading-snug">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD Technical Structured Scheme for this specific Hub page */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://eceez.com/tools/ecommerce-taxonomy-mapper#webpage",
              "url": "https://eceez.com/tools/ecommerce-taxonomy-mapper",
              "name": "Ecommerce Taxonomy Hub & Product Category Mapper",
              "description": "Interactive taxonomy mapper for ecommerce job roles and store product category feeds.",
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://eceez.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Taxonomy Mapper",
                    "item": "https://eceez.com/tools/ecommerce-taxonomy-mapper"
                  }
                ]
              }
            },
            {
              "@type": "FAQPage",
              "@id": "https://eceez.com/tools/ecommerce-taxonomy-mapper#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which category does a Planning Manager map to in ecommerce taxonomies?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Planning Managers and Inventory Planners map directly to Merchandising & Inventory Planning (Department Code: MIP-04) where they handle stock density and replenishment flows across Shopify configurations."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What category does co-founder or founder map to in retail org structures?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Founders, owners, and executive administrators fall directly into Executive Leadership & General Administration corporate groups."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How to categorize footwear and apparel on Google Product feeds?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Shoes should be classified as ID 187 (Apparel & Accessories > Shoes), while leather jackets map to ID 203 (Apparel & Accessories > Clothing > Outerwear > Coats & Jackets) to secure product approval status."
                  }
                }
              ]
            }
          ]
        })}
      </script>
    </div>
  );
};
