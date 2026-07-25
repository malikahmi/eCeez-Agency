import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { ShopifyAffiliateCTA } from '../components/blog/ShopifyAffiliateCTA';
import { blogPosts } from '../src/data/blogData';
import { PILLARS, getPostPillar, Pillar } from '../src/data/pillarData';
import { 
  Calendar, Clock, ArrowLeft, ArrowRight, Share2, 
  User, ChevronRight, CheckCircle2, Zap, Code2, 
  TrendingUp, MessageSquare, Facebook, Twitter, 
  Linkedin, List, ChevronDown, CheckCircle 
} from 'lucide-react';

const authorMetadata: Record<string, { image: string; linkedin: string; bio: string }> = {
  "Vincenzo Moretti": {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    linkedin: "https://linkedin.com/in/vincenzo-moretti-eceez",
    bio: "Vincenzo Moretti is the founder and CTO of eCeez. With over 15 years of experience in enterprise software architecture, Vincenzo specializes in highly performant ecommerce builds, complex Headless commerce migrations, and high-frequency order processing sync engines. He formerly served as Lead Solutions Architect at Veloce."
  },
  "Sarah Chen": {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    linkedin: "https://linkedin.com/in/sarah-chen-eceez",
    bio: "Sarah Chen is the co-founder and head of growth and CRO at eCeez. For the past decade, Sarah has driven over $500M in incremental revenue for direct-to-consumer (DTC) brands through data-backed conversion rate optimization, advanced user experience audits, and technical SEO structure optimization."
  },
  "Marcus Thorne": {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    linkedin: "https://linkedin.com/in/marcus-thorne-eceez",
    bio: "Marcus Thorne leads security architecture, systems infrastructure, and advanced data integrations at eCeez. Marcus brings deep technical expertise in data-warehouse pipelines, compliance (PCI-DSS, SOC 2), and automated middleware synchronizations. He is a former Senior Security Architect at Stripe."
  },
  "Elena Rodriguez": {
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    linkedin: "https://linkedin.com/in/elena-rodriguez-eceez",
    bio: "Elena Rodriguez is a seasoned search strategist with over 12 years of hands-on experience guiding Fortune 500 ecommerce and global retailers on site-wide search optimization, category taxonomies, and high-ROI acquisition strategies."
  }
};

function injectInternalLinks(markdown: string): string {
  if (!markdown) return '';
  
  const placeholders: string[] = [];
  let tempText = markdown;
  
  // Match code blocks
  tempText = tempText.replace(/```[\s\S]*?```/g, (match) => {
    placeholders.push(match);
    return `%%PLACEHOLDER_${placeholders.length - 1}%%`;
  });
  
  // Match inline code
  tempText = tempText.replace(/`[^`\n]+?`/g, (match) => {
    placeholders.push(match);
    return `%%PLACEHOLDER_${placeholders.length - 1}%%`;
  });
  
  // Match markdown links and images
  tempText = tempText.replace(/!?\[[^\]]*?\]\([^)]*?\)/g, (match) => {
    placeholders.push(match);
    return `%%PLACEHOLDER_${placeholders.length - 1}%%`;
  });

  const linkTargets = [
    {
      keywords: [/conversion rate optimization/gi, /\bCRO\b/g],
      link: '[Conversion Rate Optimization (CRO)](/cro)'
    },
    {
      keywords: [/search engine optimization/gi, /\bSEO\b/g],
      link: '[Search Engine Optimization (SEO)](/seo)'
    },
    {
      keywords: [/Shopify store setup/gi, /Shopify setup/gi, /Shopify development/gi, /Shopify migration/gi, /Shopify store redesign/gi],
      link: '[Shopify Development and Setup Services](/shopify-store-setup-service)'
    },
    {
      keywords: [/performance analytics/gi, /analytics tracking/gi, /google analytics/gi],
      link: '[Advanced E-commerce Analytics solutions](/analytics)'
    },
    {
      keywords: [/growth automation/gi, /marketing automation/gi],
      link: '[Ecommerce Growth Automation](/automation)'
    },
    {
      keywords: [/store security/gi, /checkout security/gi, /pci compliance/gi],
      link: '[Shopify Security and Compliance Strategy](/security)'
    }
  ];

  for (const target of linkTargets) {
    let replaced = false;
    for (const regex of target.keywords) {
      if (replaced) break;
      tempText = tempText.replace(regex, (match) => {
        replaced = true;
        return target.link;
      });
    }
  }

  for (let i = placeholders.length - 1; i >= 0; i--) {
    tempText = tempText.replace(new RegExp(`%%PLACEHOLDER_${i}%%`, 'g'), placeholders[i]);
  }

  return tempText;
}

export const BlogPostPage: React.FC = () => {
  const { id } = useParams();
  const post = id ? blogPosts.find(p => p.id.toLowerCase() === id.toLowerCase()) : null;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);

  // Classify current post under one of the 5 strategic pillars
  const pillar = useMemo(() => {
    if (!post) return PILLARS[4];
    return getPostPillar(post);
  }, [post]);

  // Extract H2 headings dynamically from post content for Table of Contents
  const headings = useMemo(() => {
    if (!post || !post.content) return [];
    const h2Regex = /^##\s+(.+)$/gm;
    const items: { text: string; id: string }[] = [];
    let match;
    const contentWithoutCode = post.content.replace(/```[\s\S]*?```/g, '');
    while ((match = h2Regex.exec(contentWithoutCode)) !== null) {
      const text = match[1].replace(/[*_`]/g, '').trim();
      const h2Id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      items.push({ text, id: h2Id });
    }
    return items;
  }, [post]);

  // Monitor scroll positioning to update active TOC elements
  useEffect(() => {
    const handleScroll = () => {
      if (headings.length === 0) return;
      const elements = headings.map(h => document.getElementById(h.id)).filter(Boolean) as HTMLElement[];
      
      let currentActive = headings[0].id;
      const scrollPosition = window.scrollY + 160;

      for (const el of elements) {
        if (el.offsetTop <= scrollPosition) {
          currentActive = el.id;
        } else {
          break;
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  useEffect(() => {
    if (post) {
      // 1. Title Tag
      document.title = post.seo?.title || `${post.title} | ${pillar.name} | eCeez`;
      // Canonical per post
      let canon = document.querySelector('link[rel="canonical"]');
      if (!canon) { canon = document.createElement('link'); canon.setAttribute('rel','canonical'); document.head.appendChild(canon); }
      canon.setAttribute('href', 'https://eceez.com/blog/' + post.id);

      // Article schema per post
      const artId = 'article-schema';
      let artScript = document.getElementById(artId);
      if (!artScript) { artScript = document.createElement('script'); artScript.id = artId; artScript.setAttribute('type','application/ld+json'); document.head.appendChild(artScript); }
      artScript.textContent = JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": post.title, "datePublished": post.date,
        "author": { "@type": "Organization", "name": "eCeez" },
        "publisher": { "@type": "Organization", "name": "eCeez", "url": "https://eceez.com" },
        "mainEntityOfPage": 'https://eceez.com/blog/' + post.id
      });


      // HowTo schema for step-based guides (AEO)
      const howToMap: Record<string, {name: string; steps: string[]}> = {
        'shopify-bulk-import-10000-products-guide': {
          name: 'How to Bulk Import 10,000+ Products to Shopify',
          steps: [
            'Clean the CSV: remove blank rows, deduplicate handles and SKUs, set Status to Active and Published to TRUE',
            'Choose the right tool: use Matrixify for any catalog over 1,000 SKUs',
            'Import products first and wait for full completion',
            'Import inventory quantities as a second job, matching variants by SKU with exact location names',
            'Verify: spot-check products for status, price, variants, images, and stock levels',
          ],
        },
        'shopify-speed-optimization-checklist': {
          name: 'How to Speed Up a Shopify Store',
          steps: [
            'Audit and uninstall unused apps, then remove leftover app code from theme.liquid',
            'Compress and resize hero images, serving WebP at display size',
            'Lazy-load all below-the-fold images',
            'Defer third-party scripts like chat widgets and popups',
            'Monitor real-user Core Web Vitals in Google Search Console',
          ],
        },
      };
      const howToId = 'howto-schema';
      let howToScript = document.getElementById(howToId);
      const howTo = howToMap[post.id];
      if (howTo) {
        if (!howToScript) { howToScript = document.createElement('script'); howToScript.id = howToId; howToScript.setAttribute('type','application/ld+json'); document.head.appendChild(howToScript); }
        howToScript.textContent = JSON.stringify({
          '@context': 'https://schema.org', '@type': 'HowTo', 'name': howTo.name,
          'step': howTo.steps.map((s, i) => ({ '@type': 'HowToStep', 'position': i + 1, 'text': s })),
        });
      } else if (howToScript) { howToScript.remove(); }

      // Noindex off-topic posts
      const noindexIds = ['leveraging-tiktok-shop-growth-2026','rise-of-social-commerce-2026','augmented-reality-ecommerce-2026','sustainable-ecommerce-branding-2026','influencer-marketing-partnerships-2026','future-of-voice-search-ecommerce-2026'];
      let rob = document.querySelector('meta[name="robots"]');
      if (noindexIds.includes(post.id)) {
        if (!rob) { rob = document.createElement('meta'); rob.setAttribute('name','robots'); document.head.appendChild(rob); }
        rob.setAttribute('content','noindex, nofollow');
      } else if (rob) { rob.setAttribute('content','index, follow'); }

      
      // 2. Meta Description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', post.seo?.description || post.excerpt);

      // 3. OpenGraph Tags for premium search signals
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', post.seo?.title || post.title);
      
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) ogDescription.setAttribute('content', post.seo?.description || post.excerpt);

      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) ogImage.setAttribute('content', post.image);

      // Inject FAQ Schema script
      if (post.seo?.faqSchema) {
        const scriptId = 'faq-schema';
        let script = document.getElementById(scriptId) as HTMLScriptElement;
        if (!script) {
          script = document.createElement('script');
          script.id = scriptId;
          script.type = 'application/ld+json';
          document.head.appendChild(script);
        }
        
        const schema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": post.seo.faqSchema.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        };
        
        script.text = JSON.stringify(schema);
      }
    }

    return () => {
      const script = document.getElementById('faq-schema');
      if (script) script.remove();
    };
  }, [post, pillar]);

  // Handle share link copying
  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Find related insights pulling strictly from the SAME strategic category pillar
  const relatedInsights = useMemo(() => {
    if (!post) return [];
    return blogPosts
      .filter(p => p.id !== post.id)
      .map(p => ({ ...p, pillar: getPostPillar(p) }))
      .filter(p => p.pillar.id === pillar.id)
      .slice(0, 3);
  }, [post, pillar]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f6f9] text-[#2d3748] px-6 text-center">
        <div className="space-y-6 max-w-md">
          <h1 className="text-4xl font-black text-[#1a365d]">Guide Not Located</h1>
          <p className="text-zinc-500 text-sm">The strategy document requested has been archived or mapped to an alternate taxonomy pathway.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 text-[#1a365d] hover:underline font-bold text-xs font-mono uppercase tracking-widest">
            <ArrowLeft size={16} /> Return to Map Hub
          </Link>
        </div>
      </div>
    );
  }

  // Custom JSX renderer overrides for Markdown content alignment to spec
  const markdownComponents = {
    h2: ({ children, ...props }: any) => {
      const text = React.Children.toArray(children).join('');
      const customId = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return (
        <h2 
          id={customId} 
          className="text-2xl sm:text-3xl font-black text-[#1a365d] tracking-tight mt-12 mb-4 border-b border-zinc-200/50 pb-2 scroll-mt-32" 
          {...props}
        >
          {children}
        </h2>
      );
    },
    h3: ({ children, ...props }: any) => (
      <h3 className="text-xl font-bold text-[#1a365d] tracking-tight mt-8 mb-3" {...props}>
        {children}
      </h3>
    ),
    p: ({ children, ...props }: any) => (
      <p className="text-[11pt] lg:text-[11pt] leading-[1.6] text-[#2d3748] mb-6 font-medium" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }: any) => (
      <ul className="list-disc pl-6 space-y-2 mb-6 text-[11pt] lg:text-[11pt] leading-[1.6] text-[#2d3748] font-medium" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: any) => (
      <ol className="list-decimal pl-6 space-y-2 mb-6 text-[11pt] lg:text-[11pt] leading-[1.6] text-[#2d3748] font-medium" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }: any) => (
      <li className="text-[11pt] lg:text-[11pt] leading-[1.6] text-[#2d3748]" {...props}>
        {children}
      </li>
    ),
    a: ({ children, href, ...props }: any) => (
      <a href={href} className="text-[#1a365d] hover:text-indigo-600 font-bold underline transition-colors" {...props}>
        {children}
      </a>
    ),
    blockquote: ({ children, ...props }: any) => (
      <blockquote className="border-l-4 border-[#1a365d] pl-4 italic my-6 text-zinc-500 bg-zinc-100/50 py-4 pr-4 rounded-r-xl" {...props}>
        {children}
      </blockquote>
    ),
  };

  return (
    <div className="bg-[#f4f6f9] min-h-screen text-[#2d3748] font-sans selection:bg-[#1a365d]/20">
      
      {/* READING PROGRESS INDICATOR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#1a365d] origin-left z-[100]"
        style={{ scaleX }}
      />

      <div className="pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        {/* SEMANTIC ARTICLE SHELL */}
        <article className="bg-white rounded-[2.5rem] border border-zinc-200/80 overflow-hidden shadow-sm">
          
          {/* Hero Header Context Banner */}
          <header className="p-8 sm:p-16 border-b border-zinc-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#1a365d]/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a365d]/5 border border-[#1a365d]/10 text-[#1a365d] text-[10px] font-mono font-bold uppercase tracking-wider">
                Strategic Category Pillar: {pillar.name}
              </div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1a365d] tracking-tight leading-none">
                {post.title}
              </h1>

              <p className="text-zinc-500 text-lg sm:text-xl font-medium leading-relaxed italic max-w-3xl">
                {post.subtitle}
              </p>

              <div className="pt-8 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-6">
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-zinc-200 shrink-0">
                    <img 
                      src={authorMetadata[post.author]?.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"} 
                      alt={post.author} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-xs font-black text-[#1a365d] uppercase tracking-wider">{post.author}</p>
                      <span className="text-[8px] bg-emerald-50 text-emerald-700 font-extrabold px-1.5 py-0.5 rounded border border-emerald-100 uppercase tracking-wider">Verified Expert</span>
                    </div>
                    <p className="text-[10px] text-zinc-400 font-mono font-bold uppercase tracking-widest">{post.role}</p>
                  </div>
                </div>

                {/* Metadata details */}
                <div className="flex items-center gap-6 text-xs font-mono font-bold text-zinc-400">
                  <span className="flex items-center gap-1 uppercase tracking-widest"><Calendar size={12} className="text-[#1a365d]" /> {post.date}</span>
                  <span className="flex items-center gap-1 uppercase tracking-widest"><Clock size={12} className="text-[#1a365d]" /> {post.readTime}</span>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[21/9] w-full border-b border-zinc-100 overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* SINGLE COLUMN READABILITY LAYOUT WITH LEFT TOC MARGIN */}
          <div className="p-8 sm:p-16 grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
            
            {/* MINIMALIST STICKY TABLE OF CONTENTS (LEFT MARGIN) */}
            <aside className="lg:col-span-3 lg:sticky lg:top-36 h-fit max-h-[60vh] space-y-6">
              {headings.length > 0 && (
                <div className="border border-zinc-200 rounded-2xl p-5 bg-zinc-50/50 hidden lg:block">
                  <div className="flex items-center gap-2 pb-3 mb-3 border-b border-zinc-200/80">
                    <List size={14} className="text-[#1a365d]" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#1a365d]">Table of Contents</span>
                  </div>
                  <ul className="space-y-2.5">
                    {headings.map(h => (
                      <li key={h.id}>
                        <a 
                          href={`#${h.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className={`block text-[11px] font-bold leading-normal transition-colors ${
                            activeSection === h.id 
                              ? 'text-[#1a365d] border-l-2 border-[#1a365d] pl-2 font-black' 
                              : 'text-zinc-400 hover:text-[#2d3748]'
                          }`}
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Share actions */}
              <div className="border border-zinc-200 rounded-2xl p-5 bg-zinc-50/50 flex flex-col gap-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#1a365d]">Document Actions</span>
                <div className="flex gap-2">
                  <button 
                    onClick={copyShareLink}
                    className="flex-1 bg-white border border-zinc-200 hover:border-[#1a365d] hover:text-[#1a365d] py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    {copiedLink ? <CheckCircle size={12} className="text-emerald-600" /> : <Share2 size={12} />}
                    {copiedLink ? 'Copied' : 'Share'}
                  </button>
                  <a 
                    href={authorMetadata[post.author]?.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white border border-zinc-200 hover:border-[#1a365d] hover:text-[#1a365d] py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <Linkedin size={12} /> Expert Link
                  </a>
                </div>
              </div>
            </aside>

            {/* SINGLE COLUMN HIGH-READABILITY CONTENT CORE */}
            <main className="lg:col-span-8 lg:col-start-4 space-y-12">
              <div className="markdown-body text-[11pt] lg:text-[11pt] leading-[1.6] text-[#2d3748] font-medium prose prose-zinc max-w-none">
                <ReactMarkdown components={markdownComponents}>
                  {injectInternalLinks(post.content || '')}
                </ReactMarkdown>
              </div>

              <ShopifyAffiliateCTA slug={post.id} />

              {/* IN-CONTENT COMPLIANT STRATEGIC CTA BANNER */}
              <section className="bg-zinc-50 border border-zinc-200 rounded-[2rem] p-8 md:p-10 space-y-6 mt-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1a365d]/5 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Verified Shopify Agency
                  </div>
                  <h3 className="text-2xl font-black text-[#1a365d] tracking-tight">Partner with the Elite Architectural Crew</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                    Our engineering studio turns complex DTC storefronts into blazing-fast commerce engines. Stop guessing on Core Web Vitals and transactional drop-offs.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <Link to="/shopify-store-setup-service" className="p-4 bg-white border border-zinc-200 hover:border-[#1a365d] hover:shadow-sm rounded-xl group transition-all">
                      <span className="block font-bold text-xs text-[#1a365d] group-hover:underline">Shopify Setups</span>
                      <span className="block text-[10px] text-zinc-400 mt-1">Liquid & Hydrogen Dev</span>
                    </Link>
                    <Link to="/seo" className="p-4 bg-white border border-zinc-200 hover:border-[#1a365d] hover:shadow-sm rounded-xl group transition-all">
                      <span className="block font-bold text-xs text-[#1a365d] group-hover:underline">Topical SEO</span>
                      <span className="block text-[10px] text-zinc-400 mt-1">Link-Equitable Hubs</span>
                    </Link>
                    <Link to="/cro" className="p-4 bg-white border border-zinc-200 hover:border-[#1a365d] hover:shadow-sm rounded-xl group transition-all">
                      <span className="block font-bold text-xs text-[#1a365d] group-hover:underline">CRO Audits</span>
                      <span className="block text-[10px] text-zinc-400 mt-1">Checkout Conversions</span>
                    </Link>
                  </div>
                </div>
              </section>

              {/* AUTHOR E-E-A-T SECTION */}
              <section className="border-t border-zinc-100 pt-12 mt-16">
                <div className="bg-zinc-50 border border-zinc-200 rounded-[2rem] p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="w-20 h-20 rounded-full overflow-hidden border border-zinc-200 shrink-0">
                    <img 
                      src={authorMetadata[post.author]?.image} 
                      alt={post.author} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-3 text-center md:text-left flex-1">
                    <div>
                      <span className="inline-block text-[9px] bg-emerald-50 border border-emerald-200 text-emerald-700 font-extrabold px-2 py-0.5 rounded uppercase tracking-wider mb-2">Subject Matter Partner</span>
                      <h4 className="text-xl font-black text-[#1a365d] leading-none">{post.author}</h4>
                      <p className="text-[10px] text-indigo-600 font-bold uppercase tracking-wider mt-1">{post.role} at eCeez</p>
                    </div>
                    <p className="text-zinc-500 text-xs leading-relaxed font-medium">
                      {authorMetadata[post.author]?.bio}
                    </p>
                    <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start pt-2 text-[10px] font-bold">
                      <a 
                        href={authorMetadata[post.author]?.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1 text-zinc-400 hover:text-[#1a365d] transition-colors"
                      >
                        <Linkedin size={12} /> View Professional LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </article>

        {/* BOTTOM INTERACTIVE RELATED INSIGHTS BLOCK (PULLING STRICTLY FROM THE SAME PILLAR CATEGORY) */}
        {relatedInsights.length > 0 && (
          <section className="mt-20 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-black text-[#1a365d] tracking-tight">Interactive Related Insights</h3>
                <p className="text-xs text-zinc-500 mt-1">Further structured resources pulling strictly from our '{pillar.name}' pillar catalog.</p>
              </div>
              <Link to="/blog" className="text-xs font-mono font-bold text-[#1a365d] flex items-center gap-1 hover:gap-1.5 transition-all">
                Access Catalog Map <ArrowRight size={14} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedInsights.map(ri => (
                <Link 
                  key={ri.id} 
                  to={`/blog/${ri.id}`}
                  className="group bg-white border border-zinc-200/80 hover:border-[#1a365d]/40 rounded-3xl overflow-hidden shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-video overflow-hidden border-b border-zinc-100">
                      <img 
                        src={ri.image} 
                        alt={ri.title} 
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400">Pillar 0{PILLARS.findIndex(p => p.id === ri.pillar.id) + 1}</span>
                      <h4 className="text-base font-black text-[#1a365d] leading-snug group-hover:underline">{ri.title}</h4>
                      <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">{ri.excerpt}</p>
                    </div>
                  </div>
                  <div className="p-6 pt-0 flex justify-between items-center text-[10px] font-mono font-bold text-zinc-400">
                    <span className="flex items-center gap-1"><Clock size={12} /> {ri.readTime}</span>
                    <span className="text-[#1a365d] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">Read <ArrowRight size={12} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
