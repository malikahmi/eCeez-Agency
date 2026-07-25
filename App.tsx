
import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { Navbar } from './components/sections/Navbar';
import { HeroScrollDemo } from './components/hero-scroll-demo';
import { ShopifyDashboard } from './components/ShopifyDashboard';
import { ClientWork } from './components/sections/ClientWork';
import { ClientTrustBar } from './components/sections/ClientTrustBar';
import { CraftStatement } from './components/sections/CraftStatement';
import { ScrollProgress } from './components/fx/ScrollProgress';
import { Specialties } from './components/sections/Specialties';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { TestimonialsReels } from './components/sections/TestimonialsReels';
import { CTA } from './components/sections/CTA';
import { BlogSection } from './components/sections/BlogSection';
import { Footer } from './components/sections/Footer';
import { ScrollToTop } from './components/ScrollToTop';

// Lazy load page components for better performance
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage').then(module => ({ default: module.CaseStudiesPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.ServicesPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(module => ({ default: module.BlogPage })));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage').then(module => ({ default: module.BlogPostPage })));
const ClothingStoreLanding = lazy(() => import('./pages/ClothingStoreLanding').then(module => ({ default: module.ClothingStoreLanding })));
const JewelryStoreLanding = lazy(() => import('./pages/JewelryStoreLanding').then(module => ({ default: module.JewelryStoreLanding })));
const BarberLanding = lazy(() => import('./pages/BarberLanding').then(module => ({ default: module.BarberLanding })));
const RestaurantLanding = lazy(() => import('./pages/RestaurantLanding').then(module => ({ default: module.RestaurantLanding })));
const AnalyticsPage = lazy(() => import('./pages/AnalyticsPage').then(module => ({ default: module.AnalyticsPage })));
const AutomationPage = lazy(() => import('./pages/AutomationPage').then(module => ({ default: module.AutomationPage })));
const CollaborationPage = lazy(() => import('./pages/CollaborationPage').then(module => ({ default: module.CollaborationPage })));
const SecurityPage = lazy(() => import('./pages/SecurityPage').then(module => ({ default: module.SecurityPage })));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage').then(module => ({ default: module.AboutUsPage })));
const CareersPage = lazy(() => import('./pages/CareersPage').then(module => ({ default: module.CareersPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(module => ({ default: module.PrivacyPolicyPage })));
const ShopifyServicePage = lazy(() => import('./pages/ShopifyServicePage').then(module => ({ default: module.ShopifyServicePage })));
const AurexCaseStudy = lazy(() => import('./pages/AurexCaseStudy').then(module => ({ default: module.AurexCaseStudy })));
const BusinessWebsiteDevelopment = lazy(() => import('./pages/BusinessWebsiteDevelopment').then(module => ({ default: module.BusinessWebsiteDevelopment })));
const CROPage = lazy(() => import('./pages/CROPage').then(module => ({ default: module.CROPage })));
const SEOPage = lazy(() => import('./pages/SEOPage').then(module => ({ default: module.SEOPage })));
const ShopifyWebDevelopmentPage = lazy(() => import('./pages/ShopifyWebDevelopmentPage').then(module => ({ default: module.ShopifyWebDevelopmentPage })));
const TaxonomyMapperPage = lazy(() => import('./pages/TaxonomyMapperPage').then(module => ({ default: module.TaxonomyMapperPage })));
const ShopifySpeedOptimizationPage = lazy(() => import('./pages/ShopifySpeedOptimizationPage').then(module => ({ default: module.ShopifySpeedOptimizationPage })));
const ShopifyMaintenancePage = lazy(() => import('./pages/ShopifyMaintenancePage').then(module => ({ default: module.ShopifyMaintenancePage })));
const ShopifyMigrationPage = lazy(() => import('./pages/ShopifyMigrationPage').then(module => ({ default: module.ShopifyMigrationPage })));
const ShopifyThemeCustomizationPage = lazy(() => import('./pages/ShopifyThemeCustomizationPage').then(module => ({ default: module.ShopifyThemeCustomizationPage })));
const ShopifyPlusDevelopmentPage = lazy(() => import('./pages/ShopifyPlusDevelopmentPage').then(module => ({ default: module.ShopifyPlusDevelopmentPage })));
const ShopifyAppDevelopmentPage = lazy(() => import('./pages/ShopifyAppDevelopmentPage').then(module => ({ default: module.ShopifyAppDevelopmentPage })));
const ShopifyCROPage = lazy(() => import('./pages/ShopifyCROPage').then(module => ({ default: module.ShopifyCROPage })));
const EcommerceUXPage = lazy(() => import('./pages/EcommerceUXPage').then(module => ({ default: module.EcommerceUXPage })));
const ShopifyDevelopmentCompanyPage = lazy(() => import('./pages/ShopifyDevelopmentCompanyPage').then(module => ({ default: module.ShopifyDevelopmentCompanyPage })));
const ShopifySEOPage = lazy(() => import('./pages/ShopifySEOPage').then(module => ({ default: module.ShopifySEOPage })));
const ShopifyCustomLiquidPage = lazy(() => import('./pages/ShopifyCustomLiquidPage').then(module => ({ default: module.ShopifyCustomLiquidPage })));
const ShopifyHeadlessPage = lazy(() => import('./pages/ShopifyHeadlessPage').then(module => ({ default: module.ShopifyHeadlessPage })));
const WooCommerceDevelopmentPage = lazy(() => import('./pages/WooCommerceDevelopmentPage').then(module => ({ default: module.WooCommerceDevelopmentPage })));
const IndustryPage = lazy(() => import('./pages/IndustryPage').then(module => ({ default: module.IndustryPage })));
const ConversionCalculatorPage = lazy(() => import('./pages/ConversionCalculatorPage').then(module => ({ default: module.ConversionCalculatorPage })));
const ClientCaseStudyPage = lazy(() => import('./pages/ClientCaseStudyPage').then(module => ({ default: module.ClientCaseStudyPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const HomePage = () => (
  <main>
    <section id="home">
      <HeroScrollDemo />
    </section>

    <ClientTrustBar />

    <CraftStatement />

    <ShopifyDashboard />

    <ClientWork />


    <section id="specialties" className="py-20 bg-zinc-50">
      <Specialties />
    </section>
    
    <section id="services" className="py-20">
      <Services />
    </section>

    <TestimonialsReels />

    <section id="contact" className="py-20">
      <CTA />
    </section>
  </main>
);


// Per-route meta: canonical, og:url, twitter:url, title — fixes SPA serving homepage meta on every route
const ROUTE_TITLES: Record<string, string> = {
  '/': 'eCeez | Shopify Growth Engineering, Technical SEO & Custom Development',
  '/services': 'Services | eCeez — Shopify Development, SEO & CRO',
  '/seo': 'Ecommerce SEO Agency | Shopify SEO Services | eCeez',
  '/shopify-web-development': 'Shopify Web Development Services | Custom Store Development | eCeez',
  '/cro': 'Ecommerce CRO Agency | Conversion Rate Optimization | eCeez',
  '/shopify-store-setup-service': 'Shopify Store Setup Service | Custom Store Development | eCeez',
  '/website-development-for-businesses': 'Website Development for Businesses | eCeez',
  '/analytics': 'Ecommerce Analytics & Tracking Services | eCeez',
  '/automation': 'Ecommerce Automation Services | eCeez',
  '/collaboration': 'Collaboration & Client Portals | eCeez',
  '/security': 'Web Security & Compliance | eCeez',
  '/about-us': 'About eCeez | Shopify & Ecommerce Growth Agency',
  '/contact': 'Contact eCeez | Free Expert Advice',
  '/case-studies': 'Case Studies | eCeez Client Results',
  '/case-studies/swolverine': 'Swolverine: Sports Supplement Shopify Case Study | eCeez',
  '/case-studies/volvik': 'Volvik USA: Golf Brand Shopify Case Study | eCeez',
  '/case-studies/tropez-official': 'Tropez Official: Premium Fashion Shopify Case Study | eCeez',
  '/case-studies/oddli': 'Oddli: DTC Fashion Brand Shopify Case Study | eCeez',
  '/case-studies/labozero': 'Labozero: Italian Streetwear Shopify Case Study | eCeez',
  '/case-studies/express-wholesalers': 'Express Wholesalers: B2B Produce Website Case Study | eCeez',
  '/case-studies/meows-cat-health': 'Meows Cat Health: DTC Supplement Store Case Study | eCeez',
  '/case-studies/wrestlingmart': 'WrestlingMart: Large-Catalog Shopify Case Study | eCeez',
  '/case-studies/aoap-projects': 'AOAP Projects: Art Gallery Shopify Case Study | eCeez',
  '/case-studies/east-and-south-interiors': 'East & South Interiors: Furniture Shopify Case Study | eCeez',
  '/case-studies/nishiyama-ramen': 'Nishiyama Ramen: B2B Bilingual Website Case Study | eCeez',
  '/careers': 'Careers at eCeez',
  '/blog': 'Blog | Shopify & Ecommerce Growth Insights | eCeez',
  '/tools/ecommerce-taxonomy-mapper': 'Ecommerce Taxonomy Mapper Tool | eCeez',
  '/shopify-speed-optimization': 'Shopify Speed Optimization | Core Web Vitals Experts | eCeez',
  '/shopify-maintenance': 'Shopify Maintenance Services | Website Support Plans | eCeez',
  '/shopify-migration': 'Shopify Migration Services | WooCommerce, Magento & More | eCeez',
  '/shopify-theme-customization': 'Shopify Theme Customization | Custom Theme Developers | eCeez',
  '/shopify-plus-development': 'Shopify Plus Development Agency | Enterprise Shopify | eCeez',
  '/shopify-app-development': 'Shopify App Development | Custom Apps & API Integration | eCeez',
  '/shopify-cro': 'Shopify CRO | Conversion Rate Optimization for Shopify | eCeez',
  '/ecommerce-ux': 'Ecommerce UX: The Definitive 2026 Guide | eCeez',
  '/shopify-development-company': 'Shopify Development Company | Custom Store Experts | eCeez',
  '/shopify-seo': 'Shopify SEO Services | Rank & Grow Organic Revenue | eCeez',
  '/shopify-custom-liquid-development': 'Shopify Custom Liquid Development | Bespoke Theme Code | eCeez',
  '/shopify-headless-commerce': 'Shopify Headless Commerce | Hydrogen & Storefront API | eCeez',
  '/woocommerce-development': 'WooCommerce Development | Custom Builds & Optimization | eCeez',
  '/shopify-for-fashion-brands': 'Shopify for Fashion Brands | Apparel Store Development | eCeez',
  '/shopify-for-jewelry-stores': 'Shopify for Jewelry Stores | Fine Jewelry Ecommerce | eCeez',
  '/shopify-for-perfume-brands': 'Shopify for Perfume & Fragrance Brands | eCeez',
  '/shopify-for-supplement-brands': 'Shopify for Supplement Brands | Nutrition Ecommerce | eCeez',
  '/shopify-for-beauty-brands': 'Shopify for Beauty & Skincare Brands | eCeez',
  '/shopify-for-electronics-brands': 'Shopify for Electronics & Tech Brands | eCeez',
  '/shopify-for-furniture-brands': 'Shopify for Furniture & Home Brands | eCeez',
  '/shopify-for-food-and-beverage-brands': 'Shopify for Food & Beverage Brands | eCeez',
  '/tools/shopify-conversion-calculator': 'Free Shopify Conversion Rate ROI Calculator | eCeez',
  '/privacy-policy': 'Privacy Policy | eCeez',
};

const RouteMeta: React.FC = () => {
  const location = useLocation();
  React.useEffect(() => {
    const path = location.pathname === '/' ? '/' : location.pathname.replace(/\/$/, '');
    const url = 'https://eceez.com' + (path === '/' ? '/' : path);

    // Canonical
    let canon = document.querySelector('link[rel="canonical"]');
    if (!canon) { canon = document.createElement('link'); canon.setAttribute('rel','canonical'); document.head.appendChild(canon); }
    canon.setAttribute('href', url);

    // og:url + twitter:url
    const setMeta = (attr: string, name: string, val: string) => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute('content', val);
    };
    setMeta('property','og:url', url);
    setMeta('property','twitter:url', url);

    // Title (blog posts handle their own)
    if (!path.startsWith('/blog/')) {
      const t = ROUTE_TITLES[path];
      if (t) {
        document.title = t;
        setMeta('property','og:title', t);
      }
    }
  }, [location.pathname]);
  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <RouteMeta />
      <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/30">
        <ScrollProgress />
        <Navbar />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/case-studies/clothing-store" element={<ClothingStoreLanding />} />
            <Route path="/case-studies/jewelry-store" element={<JewelryStoreLanding />} />
            <Route path="/case-studies/barber" element={<BarberLanding />} />
            <Route path="/case-studies/restaurant" element={<RestaurantLanding />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/automation" element={<AutomationPage />} />
            <Route path="/collaboration" element={<CollaborationPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/shopify-store-setup-service" element={<ShopifyServicePage />} />
            <Route path="/case-studies/aurex" element={<AurexCaseStudy />} />
            <Route path="/case-studies/:slug" element={<ClientCaseStudyPage />} />
            <Route path="/website-development-for-businesses" element={<BusinessWebsiteDevelopment />} />
            <Route path="/cro" element={<CROPage />} />
            <Route path="/seo" element={<SEOPage />} />
            <Route path="/shopify-web-development" element={<ShopifyWebDevelopmentPage />} />
            <Route path="/tools/ecommerce-taxonomy-mapper" element={<TaxonomyMapperPage />} />
            <Route path="/shopify-speed-optimization" element={<ShopifySpeedOptimizationPage />} />
            <Route path="/shopify-maintenance" element={<ShopifyMaintenancePage />} />
            <Route path="/shopify-migration" element={<ShopifyMigrationPage />} />
            <Route path="/shopify-theme-customization" element={<ShopifyThemeCustomizationPage />} />
            <Route path="/shopify-plus-development" element={<ShopifyPlusDevelopmentPage />} />
            <Route path="/shopify-app-development" element={<ShopifyAppDevelopmentPage />} />
            <Route path="/shopify-cro" element={<ShopifyCROPage />} />
            <Route path="/ecommerce-ux" element={<EcommerceUXPage />} />
            <Route path="/shopify-development-company" element={<ShopifyDevelopmentCompanyPage />} />
            <Route path="/shopify-seo" element={<ShopifySEOPage />} />
            <Route path="/shopify-custom-liquid-development" element={<ShopifyCustomLiquidPage />} />
            <Route path="/shopify-headless-commerce" element={<ShopifyHeadlessPage />} />
            <Route path="/woocommerce-development" element={<WooCommerceDevelopmentPage />} />
            <Route path="/shopify-for-fashion-brands" element={<IndustryPage />} />
            <Route path="/shopify-for-jewelry-stores" element={<IndustryPage />} />
            <Route path="/shopify-for-perfume-brands" element={<IndustryPage />} />
            <Route path="/shopify-for-supplement-brands" element={<IndustryPage />} />
            <Route path="/shopify-for-beauty-brands" element={<IndustryPage />} />
            <Route path="/shopify-for-electronics-brands" element={<IndustryPage />} />
            <Route path="/shopify-for-furniture-brands" element={<IndustryPage />} />
            <Route path="/shopify-for-food-and-beverage-brands" element={<IndustryPage />} />
            <Route path="/tools/shopify-conversion-calculator" element={<ConversionCalculatorPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
