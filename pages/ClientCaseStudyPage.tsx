import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CaseStudyTemplate } from '../components/case/CaseStudyTemplate';
import { getCaseStudy } from '../src/data/clientCaseStudies';

export const ClientCaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = getCaseStudy(slug);

  useEffect(() => {
    if (study) {
      document.title = study.metaTitle;
      const md = document.querySelector('meta[name="description"]');
      if (md) md.setAttribute('content', study.metaDescription);
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute('href', `https://eceez.com/case-studies/${study.slug}`);
    }
  }, [study]);

  if (!study) {
    return (
      <div className="pt-40 pb-24 px-6 max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-black mb-4">Case study not found</h1>
        <p className="text-zinc-600 mb-8">
          That case study doesn&rsquo;t exist — it may have moved.
        </p>
        <Link to="/case-studies" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold transition-colors">
          View all case studies
        </Link>
      </div>
    );
  }

  return <CaseStudyTemplate c={study} />;
};
