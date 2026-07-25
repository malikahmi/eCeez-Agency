import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { IndustryTemplate } from '../components/industry/IndustryTemplate';
import { getIndustry } from '../src/data/industries';

export const IndustryPage: React.FC = () => {
  // Routes are static (e.g. /shopify-for-fashion-brands), so derive the slug
  // from the pathname rather than useParams (which is empty for static routes).
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/+/, '').replace(/\/+$/, '');
  const data = getIndustry(slug);

  if (!data) {
    return (
      <div className="pt-40 pb-24 px-6 max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-black mb-4">Industry page not found</h1>
        <p className="text-zinc-600 mb-8">That page doesn&rsquo;t exist &mdash; it may have moved.</p>
        <Link to="/" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold transition-colors">
          Back home
        </Link>
      </div>
    );
  }
  return <IndustryTemplate c={data} />;
};
