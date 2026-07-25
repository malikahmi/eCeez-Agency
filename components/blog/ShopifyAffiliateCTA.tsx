import React from 'react';
import { ExternalLink } from 'lucide-react';

/**
 * ShopifyAffiliateCTA — compliant affiliate placement.
 *
 * WHY IT'S CONDITIONAL: An affiliate CTA that sends readers to sign up for
 * Shopify makes sense on EDUCATIONAL / BEGINNER content (people who will sign
 * up anyway), but NOT on agency service pages, where it would cannibalize
 * high-value client leads. This component is only rendered for eligible posts.
 *
 * COMPLIANCE: Uses rel="sponsored nofollow" (Google's requirement for paid
 * links) and carries a visible affiliate disclosure, so it's honest to both
 * readers and search engines.
 */

const AFFILIATE_URL = 'https://shopify.pxf.io/c/7074466/1061744/13624';

// Posts where recommending "start a Shopify store" genuinely helps the reader
// and does NOT compete with eCeez's agency services. Beginner + platform intent.
export const AFFILIATE_ELIGIBLE_SLUGS = new Set<string>([
  'how-to-start-shopify-store-beginners-2026',
  'shopify-dropshipping-guide-2026',
  'best-online-store-platforms-2026',
  'shopify-vs-woocommerce',
  'best-ecommerce-website-builder',
  'shopify-vs-magento-comparison',
  'shopify-vs-amazon-selling',
  'shopify-fees-explained-2026',
  'shopify-for-fragrance-brands',
  'shopify-for-beauty-skincare-brands',
  'shopify-for-clothing-apparel-brands',
  'oberlo-alternatives-shopify-2026',
]);

export const ShopifyAffiliateCTA: React.FC<{ slug?: string }> = ({ slug }) => {
  if (!slug || !AFFILIATE_ELIGIBLE_SLUGS.has(slug)) return null;

  return (
    <aside
      className="my-12 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 md:p-8"
      aria-label="Shopify recommendation"
    >
      <div className="flex items-start gap-4">
        <div className="hidden sm:flex w-11 h-11 rounded-xl bg-emerald-600 text-white items-center justify-center font-bold shrink-0">
          S
        </div>
        <div className="space-y-3">
          <h3 className="font-bold text-zinc-900 text-lg">Ready to start your Shopify store?</h3>
          <p className="text-sm text-zinc-700 leading-relaxed">
            If you've decided Shopify is right for you, you can start a free trial and launch
            your store in minutes. It's the platform we build on every day and run our own
            9,000-product store on.
          </p>
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-bold text-sm transition-colors"
          >
            Start your free Shopify trial
            <ExternalLink size={15} aria-hidden="true" />
          </a>
          <p className="text-[11px] text-zinc-500 leading-relaxed pt-1">
            Affiliate disclosure: this is a partner link. If you sign up through it, eCeez may
            earn a commission at no extra cost to you. We only recommend tools we genuinely use.
          </p>
        </div>
      </div>
    </aside>
  );
};
