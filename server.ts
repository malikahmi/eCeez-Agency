
import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { blogPosts } from './src/data/blogData.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Email Newsletter connection with GSWebapp environment variable
  app.post('/api/subscribe', async (req, res) => {
    try {
      const { email } = req.body;
      if (!email || typeof email !== 'string' || !email.includes('@')) {
        res.status(400).json({ error: 'Valid email address is required' });
        return;
      }

      const timestamp = new Date().toISOString();

      // 1. Always back up subscribers locally so they are never lost
      try {
        const backupPath = path.join(process.cwd(), 'subscribers.json');
        let subscribers = [];
        if (fs.existsSync(backupPath)) {
          const content = fs.readFileSync(backupPath, 'utf8');
          subscribers = JSON.parse(content || '[]');
        }
        subscribers.push({ email, timestamp });
        fs.writeFileSync(backupPath, JSON.stringify(subscribers, null, 2), 'utf8');
      } catch (backupErr) {
        console.error('[Backup Error] Failed writing subscriber to local storage:', backupErr);
      }

      // 2. Sync to user's Google Sheet Web App URL if configured
      const sheetUrl = process.env.GOOGLE_SHEET_WEBAPP_URL || process.env.VITE_GOOGLE_SHEET_WEBAPP_URL;

      if (sheetUrl) {
        try {
          const targetResponse = await fetch(sheetUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, timestamp, source: 'eCeez Agency Marketing' })
          });
          
          if (targetResponse.ok) {
            res.json({ success: true, message: 'Subscribed and synced successfully.' });
            return;
          } else {
            console.warn(`[Google Sheets Response Warning] Status received: ${targetResponse.status}`);
          }
        } catch (sheetErr) {
          console.error('[Google Sheets sync error]:', sheetErr);
        }
      }

      // Default/Fallback response if no sheet URL is set or sync is disabled
      res.json({
        success: true,
        message: 'Successfully subscribed!',
        warning: sheetUrl ? undefined : 'Setup WebApp URL to enable remote syncing.'
      });
    } catch (err) {
      console.error('[Newsletter Sub error]:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Define valid routes (static and dynamic patterns)
  const validRoutes = [
    '/',
    '/case-studies',
    '/services',
    '/blog',
    '/contact',
    '/case-studies/clothing-store',
    '/case-studies/jewelry-store',
    '/case-studies/barber',
    '/case-studies/restaurant',
    '/analytics',
    '/automation',
    '/collaboration',
    '/security',
    '/about-us',
    '/careers',
    '/privacy-policy',
    '/shopify-store-setup-service',
    '/case-studies/aurex',
    '/website-development-for-businesses',
    '/seo',
    '/cro',
    '/tools/ecommerce-taxonomy-mapper'
  ];

  const isDynamicBlogRoute = (urlPath: string) => {
    if (urlPath.startsWith('/blog/') && urlPath.split('/').length === 3) {
      const postId = urlPath.split('/')[2];
      return blogPosts.some(p => p.id === postId);
    }
    return false;
  };

  const isStaticAsset = (url: string) => {
    return url.includes('.') || url.startsWith('/@vite') || url.startsWith('/src') || url.startsWith('/node_modules');
  };

  const convertMarkdownToHtml = (markdown: string): string => {
    if (!markdown) return '';
    
    let html = markdown
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
      
    // Headings
    html = html.replace(/^### (.*?)$/gm, '<h4 style="font-size: 1.15rem; font-weight: 600; color: #1c1917; margin-top: 1.5rem; margin-bottom: 0.5rem;">$1</h4>');
    html = html.replace(/^## (.*?)$/gm, '<h3 style="font-size: 1.4rem; font-weight: 700; color: #0c0a09; margin-top: 2rem; margin-bottom: 1rem;">$1</h3>');
    html = html.replace(/^# (.*?)$/gm, '<h2 style="font-size: 1.8rem; font-weight: 800; color: #0c0a09; margin-top: 2.5rem; margin-bottom: 1.25rem;">$1</h2>');

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Italic
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Blockquotes
    html = html.replace(/^&gt;\s*(.*?)$/gm, '<blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; color: #57534e; font-style: italic; margin: 1.5rem 0;">$1</blockquote>');

    // Lists
    html = html.replace(/^\s*-\s*(.*?)$/gm, '<li style="margin-bottom: 0.5rem; color: #44403c;">$1</li>');
    html = html.replace(/^\s*\*\s*(.*?)$/gm, '<li style="margin-bottom: 0.5rem; color: #44403c;">$1</li>');
    
    // Group adjacent lists
    html = html.replace(/(<li.*?>.*?<\/li>)/gs, '<ul style="margin: 1rem 0; padding-left: 1.5rem; list-style-type: disc;">$1</ul>');
    html = html.replace(/<\/ul>\s*<ul.*?>/g, '');

    // Links
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" style="color: #4f46e5; text-decoration: underline;">$1</a>');

    // Images
    html = html.replace(/!&lt;.*?&gt;\((.*?)\)/g, '<img src="$1" style="max-width: 100%; border-radius: 8px; margin: 1.5rem 0;" />');

    // Paragraphs
    const paragraphs = html.split(/\n{2,}/);
    const formattedParagraphs = paragraphs.map(p => {
      const trimmed = p.trim();
      if (!trimmed) return '';
      if (trimmed.startsWith('<h') || trimmed.startsWith('<ul') || trimmed.startsWith('<blockquote') || trimmed.startsWith('<li')) {
        return trimmed;
      }
      return `<p style="margin-bottom: 1.25rem; color: #292524; font-size: 1.05rem; line-height: 1.75;">${trimmed}</p>`;
    });
    
    return formattedParagraphs.join('\n');
  };

  interface RouteSEO {
    title: string;
    description: string;
    h1: string;
    teaser: string;
    parentPath?: string;
    parentName?: string;
  }

  const seoRegistry: Record<string, RouteSEO> = {
    '/': {
      title: 'eCeez | Shopify Growth Engineering & Custom Storefronts',
      description: 'eCeez is an elite Shopify growth engineering agency specializing in custom high-performance developments, technical SEO, conversion rate optimization (CRO), and smart analytics for global DTC brands.',
      h1: 'Shopify Growth Engineering for Scaling Brands',
      teaser: 'Transform your online store into a high-ranking sales machine. We engineer high-converting Shopify storefronts, advanced technical SEO structures, and CRO machines.',
    },
    '/services': {
      title: 'Expert Ecommerce & Shopify Services | eCeez',
      description: 'High-performance services to grow your ecommerce business: custom Shopify development, master technical SEO, and conversion rate optimization audits.',
      h1: 'Our Ecommerce Services',
      teaser: 'Discover our holistic engineering specialized in technical Ecommerce SEO, Conversion Rate Optimization (CRO), automated workflows, and Shopify enterprise design.',
      parentPath: '/',
      parentName: 'Home',
    },
    '/seo': {
      title: 'SEO Agency for Shopify & Ecommerce | eCeez',
      description: 'Supercharge your organic traffic, domain authority, and google rankings. High-performance programmatic SEO, topical mapping, and schemas for Shopify.',
      h1: 'Shopify SEO and Organic Search Scaling',
      teaser: 'Elite Shopify SEO and organic search scaling for high-growth direct-to-consumer (DTC) and enterprise e-commerce brands worldwide.',
      parentPath: '/services',
      parentName: 'Services',
    },
    '/cro': {
      title: 'Ecommerce Conversion Rate Optimization (CRO) | eCeez',
      description: 'Boost your store conversion rates, average order value, and revenue. Expert UX audits, rigorous scale funnel analysis, and Shopify checkout speed optimization.',
      h1: 'Ecommerce Conversion Rate Optimization (CRO)',
      teaser: 'A/B testing, detailed custom user journeys, data-backed checkout speed audits, and cart conversion boosters to scale Shopify sales.',
      parentPath: '/services',
      parentName: 'Services',
    },
    '/shopify-store-setup-service': {
      title: 'Shopify Store Setup & Development Agency | eCeez',
      description: 'Pristine custom Shopify store setup and layout configuration. Experts at custom theme building, seamless app integrations, and conversion-optimized checkout processes.',
      h1: 'Shopify Store Setup & Turnkey Store Development',
      teaser: 'Premium storefront layouts, custom Shopify Plus theme engineering, lightning-fast catalog configuration, and high-conversions checkout setups.',
      parentPath: '/services',
      parentName: 'Services',
    },
    '/website-development-for-businesses': {
      title: 'High-Performance Web Development for Corporate Brands | eCeez',
      description: 'Full-stack enterprise website engineering and technical development. Lightning-fast Next.js React storefronts and highly secure backend architectures.',
      h1: 'Custom Web Development for Retail & Corporate Brands',
      teaser: 'Bespoke custom headless e-commerce, custom React engineering, API gateways, database optimization, and high-performing digital marketing portals.',
      parentPath: '/services',
      parentName: 'Services',
    },
    '/analytics': {
      title: 'Ecommerce Analytics, Dashboards & BI Integrations | eCeez',
      description: 'Gain rich business intelligence with dynamic event-tracking integrations. Connect Google Analytics 4, server-side tracking, and custom sales reporting tools.',
      h1: 'Ecommerce Data Tracking & Analytics Dashboards',
      teaser: 'Unlock precise, reliable ecommerce tracking, business intelligence dashboards, attribution solutions, and custom performance metrics.',
      parentPath: '/services',
      parentName: 'Services',
    },
    '/automation': {
      title: 'Backend Automation & AI Workflow Integrations | eCeez',
      description: 'Optimize back-office workflows with smart automation. Seamlessly integrate Shopify Flow, ERP pipelines, and advanced server-side AI integrations.',
      h1: 'Backend Automation and AI Systems Integrations',
      teaser: 'Automate repetitive back-office, fulfillment, inventory synchronization, customer service systems, and modern workflows with AI integrations.',
      parentPath: '/services',
      parentName: 'Services',
    },
    '/collaboration': {
      title: 'Interactive Project Portals & Business Workflows | eCeez',
      description: 'Collaborate with transparency. Tailor-made partner client portals, streamlined file-sharing platforms, and unified corporate workflows.',
      h1: 'Collaborative Workspace Portals & Workflow Dashboards',
      teaser: 'Secure client portals, custom dashboard triggers, task automation pipelines, and collaborative workflows for modern distributed teams.',
      parentPath: '/services',
      parentName: 'Services',
    },
    '/security': {
      title: 'Ecommerce Security, Threat Mitigation & Web Protection | eCeez',
      description: 'Secure your ecommerce infrastructure. Advanced threat prevention, API safeguards, GDPR compliance audits, and server level protection.',
      h1: 'Enterprise Web Protection and Secure API Architecture',
      teaser: 'Robust web application safeguards, continuous vulnerability scanning, payment pathway compliance, and data encryption shields.',
      parentPath: '/services',
      parentName: 'Services',
    },
    '/blog': {
      title: 'Shopify SEO, Speed & CR Optimization Blog | eCeez',
      description: 'Expert insights, actionable tutorials, and high-level strategy guides about Shopify SEO, headless commerce speed optimizations, site audits, and CRO secrets.',
      h1: 'The eCeez Ecommerce Insights Publication',
      teaser: 'Read our comprehensive engineering-driven guides on speeding up your cart, programmatic organic optimization, and Shopify development strategies.',
      parentPath: '/',
      parentName: 'Home',
    },
    '/contact': {
      title: 'Contact eCeez | Shopify & Digital Growth Experts',
      description: 'Get in touch with the elite technical ecommerce developers at eCeez. Drop us a line regarding Shopify store speed optimization, CRO, or master SEO projects.',
      h1: 'Partner With eCeez',
      teaser: 'Let’s discuss your technical growth roadmap. Fill out our streamlined query form to consult with our specialized engineers.',
      parentPath: '/',
      parentName: 'Home',
    },
    '/case-studies': {
      title: 'Real Ecommerce Success & Scaled Growth Case Studies | eCeez',
      description: 'Deep dives and performance audits of global brands scaling revenue: clothing stores, jewelry ecommerce, barbershops, restaurants, and more.',
      h1: 'Our Verified Case Studies',
      teaser: 'Read factual, metrics-first reports detailing exactly how eCeez engineers redesigned store platforms, optimized page speeds, and scaled search traffic.',
      parentPath: '/',
      parentName: 'Home',
    },
    '/about-us': {
      title: 'About eCeez | Our Mission & Growth Crew',
      description: 'Get to know the specialised tech crew, conversion copywriters, and designers building digital profit engines at eCeez.',
      h1: 'Behind eCeez Agency',
      teaser: 'We are a distributed squad of e-commerce specialists focusing on technical design precision, robust web architectures, and elite conversion outcomes.',
      parentPath: '/',
      parentName: 'Home',
    },
    '/careers': {
      title: 'Join Our Ecommerce Engineering Team | eCeez Careers',
      description: 'Explore remote-first job opportunities at eCeez. Join a fast-paced ecommerce squad building advanced store setups, technical search assets, and CRO systems.',
      h1: 'Remote Careers at eCeez',
      teaser: 'We are always looking for incredible custom Shopify developers, technical marketers, SEO strategists, and UI/UX designers globally.',
      parentPath: '/',
      parentName: 'Home',
    },
    '/privacy-policy': {
      title: 'Privacy Policy | eCeez Growth Agency',
      description: 'Learn about our data security practices, compliance standards, cookies usage, and commitment to safeguarding privacy on our website.',
      h1: 'Our Privacy Policy and Terms of Use',
      teaser: 'Detailed explanations of how eCeez handles data protection, system privacy parameters, and customer security parameters.',
      parentPath: '/',
      parentName: 'Home',
    },
    '/tools/ecommerce-taxonomy-mapper': {
      title: 'Aesthetic Shopify & Google Taxonomy Mapper Tool | eCeez',
      description: 'Easily match your standard Shopify collection tags with custom Google product category taxonomy codes. Boost merchant center organic performance today.',
      h1: 'Automated Ecommerce Product Category Mapper',
      teaser: 'Verify standard tags, map Shopify lists with merchant center parameters, and export your structured metadata in seconds.',
      parentPath: '/services',
      parentName: 'Services',
    },
    '/case-studies/clothing-store': {
      title: 'Scaling a Shopify Apparel Brand +43% Conversion | eCeez',
      description: 'Read how a performance-focused layout overhaul, cart acceleration, and clean technical collections structure grew an apparel store.',
      h1: 'Apparel Store Development Case Study',
      teaser: 'Detailed breakdown of high-performance custom navigation redesign pipelines and programmatic product grid optimization.',
      parentPath: '/case-studies',
      parentName: 'Case Studies',
    },
    '/case-studies/jewelry-store': {
      title: 'Jewelry Store SEO Restoration & Dynamic Catalogs | eCeez',
      description: 'How we restored organic rankings for a luxury jewelry retailer and structured aesthetic product metadata pages.',
      h1: 'Luxury Jewelry Store Technical Growth Case Study',
      teaser: 'Discover how schema automation, topical authority setups, and Shopify Plus configurations drove massive sales.',
      parentPath: '/case-studies',
      parentName: 'Case Studies',
    },
    '/case-studies/barber': {
      title: 'Barber Booking Redesign & Speed Audits | eCeez',
      description: 'Read the structural optimization case study for a multi-location barber brand, integrating instant checkout funnels.',
      h1: 'Barber Booking Engine Growth Study',
      teaser: 'Speeding up service booking conversions via streamlined responsive layout setups and calendar automation API configurations.',
      parentPath: '/case-studies',
      parentName: 'Case Studies',
    },
    '/case-studies/restaurant': {
      title: 'Gourmet Restaurant Online Food Deliveries Overhaul | eCeez',
      description: 'Our review of how quick checkout integrations, localized SEO schemas, and caching layers scaled online order systems.',
      h1: 'Restaurant Digital Orders Blueprint Case Study',
      teaser: 'Learn how eCeez deployed a fast, secure restaurant storefront, achieving zero-friction cart interactions and local discoverability.',
      parentPath: '/case-studies',
      parentName: 'Case Studies',
    },
    '/case-studies/aurex': {
      title: 'Aurex Winterwear Structural SEO Redesign | eCeez',
      description: 'Deep review of international multivariant caching configurations, canonical chains correction, and local currency checkout scaling.',
      h1: 'Aurex Premium Winter Apparel Case Study',
      teaser: 'Faceted filter SEO mappings, multi-market Shopify setup, and custom styling configuration that doubled checkout engagement rates.',
      parentPath: '/case-studies',
      parentName: 'Case Studies',
    },
  };

  // Vite middleware for development
  let vite: any;
  if (process.env.NODE_ENV !== 'production') {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom', // We'll handle the HTML serving ourselves to control status codes
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath, { index: false }));
  }

  // Handle all requests
  app.get('*all', async (req, res, next) => {
    const url = req.originalUrl;

    // Skip if it's a static asset or internal Vite path
    if (isStaticAsset(url)) {
      return next();
    }

    // Read normalized paths for perfect registry matching and validation
    let normalizedPath = req.path.toLowerCase();
    if (normalizedPath.endsWith('/') && normalizedPath.length > 1) {
      normalizedPath = normalizedPath.slice(0, -1);
    }

    const isValid = validRoutes.includes(normalizedPath) || isDynamicBlogRoute(normalizedPath);

    try {
      let template: string;
      if (process.env.NODE_ENV !== 'production') {
        // In development, read index.html from root and transform it
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
      } else {
        // In production, read index.html from dist
        template = fs.readFileSync(path.resolve(__dirname, 'dist', 'index.html'), 'utf-8');
      }

      let activeSEO: RouteSEO | undefined = seoRegistry[normalizedPath];

      // If it is a blog post path, dynamically fetch from blogPosts data
      if (!activeSEO && normalizedPath.startsWith('/blog/')) {
        const blogPostMatch = normalizedPath.match(/^\/blog\/([a-zA-Z0-9-]+)$/);
        if (blogPostMatch) {
          const postId = blogPostMatch[1].toLowerCase();
          const post = blogPosts.find(p => p.id.toLowerCase() === postId);
          if (post) {
            activeSEO = {
              title: `${post.title} | eCeez Insights Blog`,
              description: post.subtitle || post.excerpt || `Read our expert analysis on ${post.title}. eCeez provides modern actionable guidelines with proven results.`,
              h1: post.title,
              teaser: post.subtitle || post.excerpt || `Technical breakdown, strategic reviews, and guides concerning ${post.title} to improve performance, CRO, and SEO.`,
              parentPath: '/blog',
              parentName: 'Blog'
            };
          }
        }
      }

      // If the route is valid check for missing activeSEO to create a generic fallback (ensures H1 + Word count is perfect on every route)
      if (isValid && !activeSEO) {
        const titleParts = normalizedPath.split('/').filter(Boolean).map(s => s.charAt(0).toUpperCase() + s.slice(1));
        const cleanName = titleParts.join(' - ') || 'Page';
        activeSEO = {
          title: `eCeez | ${cleanName}`,
          description: `Grow your digital storefront. High-performance agency experts providing technical search marketing, site performance speed gains, and Shopify setups.`,
          h1: cleanName,
          teaser: `Unlock advanced, custom workflows and technical configurations designed to maximize core web vitals, organic rankings, and cart setups.`,
          parentPath: '/',
          parentName: 'Home'
        };
      }

      // Apply specific metadata updates
      if (activeSEO) {
        // Replace head titles
        template = template.replace(
          '<title>eCeez | Shopify Growth Engineering, Technical SEO & Custom Development</title>',
          `<title>${activeSEO.title}</title>`
        );
        template = template.replace(
          '<meta property="og:title" content="eCeez | Scaling Ecommerce Brands with Precision Engineering" />',
          `<meta property="og:title" content="${activeSEO.title}" />`
        );
        template = template.replace(
          '<meta property="twitter:title" content="eCeez | Ecommerce Growth Specialists" />',
          `<meta property="twitter:title" content="${activeSEO.title}" />`
        );

        // Replace meta descriptions
        template = template.replace(
          '<meta name="description" content="eCeez is an elite Shopify growth engineering agency. We build custom high-performance storefronts, technical ecommerce SEO, conversion rate optimization (CRO), analytics, and smart automations." />',
          `<meta name="description" content="${activeSEO.description}" />`
        );
        template = template.replace(
          '<meta property="og:description" content="Transform your online store into a high-ranking sales machine with our specialist Shopify and SEO services." />',
          `<meta property="og:description" content="${activeSEO.description}" />`
        );
        template = template.replace(
          '<meta property="twitter:description" content="Elite Shopify development and Ecommerce SEO audits." />',
          `<meta property="twitter:description" content="${activeSEO.description}" />`
        );

        // Compute dynamic main inner HTML
        let mainContentHTML = '';

        if (normalizedPath.startsWith('/blog/')) {
          const blogPostMatch = normalizedPath.match(/^\/blog\/([a-zA-Z0-9-]+)$/);
          if (blogPostMatch) {
            const postId = blogPostMatch[1].toLowerCase();
            const post = blogPosts.find(p => p.id.toLowerCase() === postId);
            if (post) {
              const formattedContent = convertMarkdownToHtml(post.content || '');
              mainContentHTML = `
                <article style="margin-top: 2rem;">
                  <div style="font-size: 0.875rem; color: #78716c; margin-bottom: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
                    <span><strong>Author:</strong> ${post.author} (${post.role})</span>
                    <span><strong>Published:</strong> ${post.date}</span>
                    <span><strong>Read Time:</strong> ${post.readTime}</span>
                    <span><strong>Category:</strong> ${post.category}</span>
                  </div>
                  ${post.image ? `<div style="margin-bottom: 2.5rem;"><img src="${post.image}" alt="${post.title}" style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);" referrerPolicy="no-referrer" /></div>` : ''}
                  <div style="font-size: 1.1rem; line-height: 1.8; color: #292524;">
                    ${formattedContent}
                  </div>
                </article>
              `;
            }
          }
        } else if (normalizedPath === '/blog') {
          // Render ALL 95 blog posts list in beautiful search engine indexable form so they are fully internal-linked and crawlable!
          const postItems = blogPosts.map(post => `
            <div style="padding: 1.5rem; border: 1px solid #e7e5e4; border-radius: 16px; background-color: #fafaf9; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
              <span style="font-size: 0.75rem; font-weight: 700; color: #4f46e5; text-transform: uppercase; letter-spacing: 0.05em;">${post.category}</span>
              <h3 style="font-size: 1.35rem; font-weight: 700; color: #0c0a09; margin: 0 0 0.25rem 0;">
                <a href="/blog/${post.id}" style="color: #4f46e5; text-decoration: none; font-weight: 700;">${post.title}</a>
              </h3>
              <p style="font-size: 0.875rem; color: #78716c; margin: 0 0 0.5rem 0;">Published on ${post.date} &bull; ${post.readTime}</p>
              <p style="color: #57534e; font-size: 0.95rem; margin: 0; line-height: 1.5; font-style: italic;">${post.excerpt}</p>
              <a href="/blog/${post.id}" style="color: #4f46e5; font-size: 0.875rem; font-weight: 600; text-decoration: none; margin-top: 0.5rem; display: inline-block;">Read Complete Article &raquo;</a>
            </div>
          `).join('\n');

          mainContentHTML = `
            <section>
              <h2 style="font-size: 1.75rem; font-weight: 800; color: #0c0a09; margin-bottom: 1.5rem; letter-spacing: -0.02em;">All eCeez Growth &amp; Engineering Publications</h2>
              <p style="color: #57534e; margin-bottom: 2.5rem; font-size: 1.05rem; line-height: 1.6;">Explore our library of advanced articles, research case-studies, program guides, and strategic manuals spanning technical Shopify setups, SEO Topical Mapping, UI/UX optimization frameworks, and backend workflows automation.</p>
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                ${postItems}
              </div>
            </section>
          `;
        } else {
          // Default standard section style containing the 4 main Service offerings
          mainContentHTML = `
            <section style="margin-bottom: 3rem;">
              <h2 style="font-size: 1.35rem; font-weight: 700; color: #0c0a09; margin-bottom: 1rem;">Specialized Ecommerce Growth Engineering</h2>
              <p style="color: #57534e; margin-bottom: 1.5rem;">At eCeez, we construct optimized search pathways, high-speed transactional environments, and pristine digital layouts that collectively drive high organic search domain authority. Our engineering squad bridges technical programming with conversion science.</p>
              
              <div style="display: grid; gap: 1.5rem; margin-top: 2rem;">
                <div style="padding: 1.5rem; border: 1px solid #e7e5e4; border-radius: 12px; background-color: #fafaf9;">
                  <h3 style="font-size: 1.125rem; font-weight: 600; color: #0c0a09; margin: 0 0 0.5rem 0;"><a href="/seo" style="color: #4f46e5; text-decoration: none;">Shopify SEO &amp; Organic Rankings Scaling</a></h3>
                  <p style="color: #57534e; font-size: 0.925rem; margin: 0;">Technical indexing strategies, dynamic product collections schemas, structured taxonomy design, and complete editorial topical mappings.</p>
                </div>
                <div style="padding: 1.5rem; border: 1px solid #e7e5e4; border-radius: 12px; background-color: #fafaf9;">
                  <h3 style="font-size: 1.125rem; font-weight: 600; color: #0c0a09; margin: 0 0 0.5rem 0;"><a href="/cro" style="color: #4f46e5; text-decoration: none;">Conversion Rate Optimization (CRO)</a></h3>
                  <p style="color: #57534e; font-size: 0.925rem; margin: 0;">In-depth cart speed diagnostics, checkout flow audits, heat-mapping assessments, and tailored A/B split setups for scaling Shopify sales.</p>
                </div>
                <div style="padding: 1.5rem; border: 1px solid #e7e5e4; border-radius: 12px; background-color: #fafaf9;">
                  <h3 style="font-size: 1.125rem; font-weight: 600; color: #0c0a09; margin: 0 0 0.5rem 0;"><a href="/shopify-store-setup-service" style="color: #4f46e5; text-decoration: none;">Shopify Theme Design &amp; Turnkey Development</a></h3>
                  <p style="color: #57534e; font-size: 0.925rem; margin: 0;">Custom high-contrast layout configurations, Shopify Plus integrations, custom application setup, and pixel-perfect responsiveness.</p>
                </div>
                <div style="padding: 1.5rem; border: 1px solid #e7e5e4; border-radius: 12px; background-color: #fafaf9;">
                  <h3 style="font-size: 1.125rem; font-weight: 600; color: #0c0a09; margin: 0 0 0.5rem 0;"><a href="/tools/ecommerce-taxonomy-mapper" style="color: #4f46e5; text-decoration: none;">Interactive Shopify &amp; Google Product Category Mapper Tool</a></h3>
                  <p style="color: #57534e; font-size: 0.925rem; margin: 0;">Sync collection identifiers with official taxonomy descriptors instantly. Perfect for Google Merchant Center feeds.</p>
                </div>
              </div>
            </section>
          `;
        }

        const bodyScaffold = `
<div id="root">
  <div style="padding: 3rem 1.5rem; max-width: 800px; margin: 0 auto; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; color: #1c1917;">
    <header style="margin-bottom: 2.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e7e5e4;">
      <nav style="display: flex; gap: 0.5rem; font-size: 0.875rem; color: #4f46e5; font-weight: 500; margin-bottom: 1.5rem;">
        <a href="/" style="text-decoration: none; color: inherit;">Home</a>
        ${activeSEO.parentPath ? `
        <span>&raquo;</span>
        <a href="${activeSEO.parentPath}" style="text-decoration: none; color: inherit;">${activeSEO.parentName}</a>
        ` : ''}
        <span>&raquo;</span>
        <span style="color: #78716c;">${activeSEO.h1}</span>
      </nav>
      <h1 style="font-size: 2.25rem; font-weight: 800; letter-spacing: -0.025em; color: #0c0a09; margin: 0 0 1rem 0; line-height: 1.2;">${activeSEO.h1}</h1>
      <p style="font-size: 1.125rem; color: #44403c; font-weight: 500; margin: 0;">${activeSEO.teaser}</p>
    </header>
    
    <main>
      ${mainContentHTML}

      <section style="margin-top: 3.5rem; padding: 2rem; border-radius: 16px; background-color: #e0f2fe; border: 1px solid #bae6fd;">
        <h3 style="font-size: 1.25rem; font-weight: 700; color: #0369a1; margin: 0 0 0.5rem 0;">Get A Site Audit From eCeez</h3>
        <p style="color: #0369a1; font-size: 0.95rem; margin-bottom: 1.5rem; font-weight: 500;">Review loading metrics, identify broken crawl redirect patterns, fix checkout speed friction, and streamline search results. Talk to our expert core tech squad remote-first.</p>
        <a href="/contact" style="background-color: #0284c7; color: white; padding: 0.75rem 1.5rem; border-radius: 10px; text-decoration: none; font-size: 0.95rem; font-weight: 700; display: inline-block; box-shadow: 0 2px 4px rgba(2, 132, 199, 0.2);">Connect With Our Team</a>
      </section>
    </main>
    
    <footer style="margin-top: 5rem; padding-top: 2rem; border-top: 1px solid #e7e5e4; font-size: 0.875rem; color: #78716c; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
      <span>&copy; 2026 eCeez. Precision Digital Growth &amp; Shopify Engineering.</span>
      <div style="display: flex; gap: 1.25rem;">
        <a href="/case-studies" style="color: inherit; text-decoration: none; font-weight: 500;">Case Studies</a>
        <a href="/blog" style="color: inherit; text-decoration: none; font-weight: 500;">Insights Publication</a>
        <a href="/contact" style="color: inherit; text-decoration: none; font-weight: 500;">Contact</a>
        <a href="/privacy-policy" style="color: inherit; text-decoration: none; font-weight: 500;">Privacy Policy</a>
      </div>
    </footer>
  </div>
</div>
`;
        template = template.replace('<div id="root"></div>', bodyScaffold);
      }

      // Compute dynamic canonical details
      const canonicalUrl = `https://eceez.com${normalizedPath === '/' ? '' : normalizedPath}`;
      template = template.replace(
        '<link rel="canonical" href="https://eceez.com/" />',
        `<link rel="canonical" href="${canonicalUrl}" />`
      );
      template = template.replace(
        '<meta property="og:url" content="https://eceez.com/" />',
        `<meta property="og:url" content="${canonicalUrl}" />`
      );
      template = template.replace(
        '<meta property="twitter:url" content="https://eceez.com/" />',
        `<meta property="twitter:url" content="${canonicalUrl}" />`
      );

      // Inject dynamic schemas for service or blog pages
      let schemaInjection = '';
      if (normalizedPath === '/seo') {
        schemaInjection = `
    <!-- Dynamic Service Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Ecommerce & Shopify SEO Service",
      "provider": {
        "@type": "Organization",
        "name": "eCeez",
        "url": "https://eceez.com",
        "logo": "https://eceez.com/favicon.svg"
      },
      "description": "Elite Shopify SEO and organic search scaling for high-growth DTC & e-commerce brands.",
      "serviceType": "Search Engine Optimization Agency",
      "areaServed": "Worldwide",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD"
      }
    }
    </script>
`;
      } else if (normalizedPath === '/cro') {
        schemaInjection = `
    <!-- Dynamic Service Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Ecommerce Conversion Rate Optimization (CRO)",
      "provider": {
        "@type": "Organization",
        "name": "eCeez",
        "url": "https://eceez.com",
        "logo": "https://eceez.com/favicon.svg"
      },
      "description": "Premium ecommerce A/B testing, user experience audit, and funnel optimization to scale Shopify conversion rates.",
      "serviceType": "Conversion Rate Optimization Agency",
      "areaServed": "Worldwide",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD"
      }
    }
    </script>
`;
      } else if (normalizedPath === '/shopify-store-setup-service') {
        schemaInjection = `
    <!-- Dynamic Service Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Shopify Store Setup Service & Store Development",
      "provider": {
        "@type": "Organization",
        "name": "eCeez",
        "url": "https://eceez.com",
        "logo": "https://eceez.com/favicon.svg"
      },
      "description": "Expert design, custom theme configuration, secure payment integrations, and turnkey store setups on Shopify and Shopify Plus.",
      "serviceType": "Shopify Development Agency",
      "areaServed": "Worldwide",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD"
      }
    }
    </script>
`;
      } else if (normalizedPath.startsWith('/blog/')) {
        const blogPostMatch = normalizedPath.match(/^\/blog\/([a-zA-Z0-9-]+)$/);
        if (blogPostMatch) {
          const postId = blogPostMatch[1].toLowerCase();
          const post = blogPosts.find(p => p.id.toLowerCase() === postId);
          if (post) {
            const authorName = post.author || "eCeez Team";
            let publishDate = "2026-01-01";
            try {
              if (post.date) {
                const d = new Date(post.date);
                if (!isNaN(d.getTime())) {
                  publishDate = d.toISOString().split('T')[0];
                } else {
                  publishDate = post.date;
                }
              }
            } catch (err) {
              // fallback
            }
            const headline = post.title || "";
            const articleImage = post.image || "https://eceez.com/favicon.svg";
            const excerpt = post.excerpt || post.subtitle || "";

            schemaInjection = `
    <!-- Dynamic Article Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "${headline.replace(/"/g, '\\"')}",
      "image": "${articleImage}",
      "datePublished": "${publishDate}",
      "author": {
        "@type": "Person",
        "name": "${authorName.replace(/"/g, '\\"')}"
      },
      "publisher": {
        "@type": "Organization",
        "name": "eCeez",
        "url": "https://eceez.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://eceez.com/favicon.svg"
        }
      },
      "description": "${excerpt.replace(/"/g, '\\"')}"
    }
    </script>
`;
          }
        }
      }

      if (schemaInjection) {
        template = template.replace('</head>', `${schemaInjection}</head>`);
      }

      if (!isValid) {
        // Return 404 status code for non-existent pages
        return res.status(404).set({ 'Content-Type': 'text/html' }).end(template);
      }

      // Return 200 status code for valid pages
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e: any) {
      if (process.env.NODE_ENV !== 'production') {
        vite.ssrFixStacktrace(e);
      }
      next(e);
    }
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
