export interface Pillar {
  id: string;
  name: string;
  shortName: string;
  description: string;
  keywords: string[];
}

export const PILLARS: Pillar[] = [
  {
    id: 'pricing-operations',
    name: 'Shopify Pricing & Business Operations',
    shortName: 'Pricing & Costs',
    description: 'Comprehensive guides on Shopify fees, pricing plans, monthly costs, dashboard metrics, and backend operations.',
    keywords: ['shopify fees', 'shopify pricing plans', 'shopify cost per month', 'shopify dashboard', 'my shopify', 'pricing', 'costs', 'fees', 'plans', 'dashboard', 'security', 'privacy', 'analytics', 'compliance']
  },
  {
    id: 'platforms-technology',
    name: 'E-commerce Platforms & Technology',
    shortName: 'Platforms & Tech',
    description: 'Deep dives into modern commerce engines, headless frameworks, Shopify Hydrogen, Liquid architecture, and performance benchmarking.',
    keywords: ['ecommerce', 'e commerce', 'best ecommerce website builder', 'best online store platforms', 'adobe magento', 'amazon ecommerce', 'shopify ecommerce', 'shopify enterprise', 'shopify plus', 'hydrogen', 'liquid', 'nextjs', 'speed', 'engineering', 'headless', 'performance']
  },
  {
    id: 'pos-systems',
    name: 'Retail & Point of Sale (POS) Systems',
    shortName: 'Retail & POS',
    description: 'Actionable strategies for physical store configurations, multi-location inventory, and Shopify POS Lite & POS Pro systems.',
    keywords: ['shopify pos app', 'shopify pos lite', 'shopify shop', 'pos', 'retail', 'lite', 'physical store', 'multi-location', 'inventory', 'warehouse', 'locations']
  },
  {
    id: 'setup-design',
    name: 'Store Setup, Design & Customization',
    shortName: 'Store Setup',
    description: 'Expert advice on custom theme design, product pages, subscription integrations, page builders, and working with elite agencies.',
    keywords: ['shopify design', 'shopify page builder', 'shopify developer', 'shopify subscription app', 'shopify agency', 'theme', 'customization', 'ux', 'page builder', 'design', 'builder', 'developer', 'pdp']
  },
  {
    id: 'growth-marketing',
    name: 'Growth, Marketing & Supply Chain',
    shortName: 'Marketing & Apps',
    description: 'Tactical playbooks for customer acquisition, search engine optimization (SEO), conversion rate optimization (CRO), dropshipping, and marketing automation.',
    keywords: ['shopify dropshipping', 'oberlo shopify', 'shopify collabs', 'shopify advertising', 'shopify affiliate', 'sell online with shopify', 'seo', 'marketing', 'cro', 'traffic', 'sales', 'conversion', 'email', 'cart abandonment', 'dropshipping', 'collabs', 'advertising', 'affiliate', 'links']
  }
];

export function getPostPillar(post: { title: string; excerpt: string; category?: string }): Pillar {
  const text = `${post.title} ${post.excerpt} ${post.category || ''}`.toLowerCase();
  
  let bestPillar = PILLARS[4]; // Default to Growth & Marketing
  let maxScore = -1;
  
  for (const pillar of PILLARS) {
    let score = 0;
    for (const keyword of pillar.keywords) {
      // Create word boundary search or simple index check
      const regex = new RegExp(`\\b${keyword.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'gi');
      const matches = text.match(regex);
      if (matches) {
        score += matches.length * 2; // Keyword matching gets higher priority
      }
      if (text.includes(keyword.toLowerCase())) {
        score += 1; // Partial matching
      }
    }
    
    // Fallbacks based on original categories
    if (pillar.id === 'pricing-operations' && post.category && ['Analytics', 'Security', 'Legal & Security'].includes(post.category)) {
      score += 10;
    }
    if (pillar.id === 'platforms-technology' && post.category && ['Engineering', 'Automation'].includes(post.category)) {
      score += 10;
    }
    if (pillar.id === 'setup-design' && post.category && ['Design', 'Guides', 'Shopify'].includes(post.category)) {
      score += 10;
    }
    if (pillar.id === 'growth-marketing' && post.category && ['SEO Strategy', 'Growth', 'Optimization', 'SEO', 'CRO', 'Content Strategy', 'Marketing', 'Analysis', 'Trends', 'Strategy'].includes(post.category)) {
      score += 10;
    }

    if (score > maxScore) {
      maxScore = score;
      bestPillar = pillar;
    }
  }
  
  return bestPillar;
}
