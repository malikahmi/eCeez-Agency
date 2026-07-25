import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">Privacy Policy</h1>
        <p className="text-zinc-600 text-lg">
          Last updated: February 23, 2026
        </p>
      </motion.div>

      <div className="prose prose-zinc max-w-none space-y-12 text-zinc-700">
        <section>
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
            <Shield className="text-indigo-600" /> 1. Introduction
          </h2>
          <p className="leading-relaxed">
            Welcome to eCeez. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
            <Eye className="text-emerald-600" /> 2. Data We Collect
          </h2>
          <p className="leading-relaxed">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
            <Lock className="text-purple-600" /> 3. How We Use Your Data
          </h2>
          <p className="leading-relaxed">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
            <FileText className="text-orange-600" /> 4. Your Legal Rights
          </h2>
          <p className="leading-relaxed">
            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
          </p>
        </section>

        <div className="pt-12 border-t border-zinc-200">
          <p className="text-sm text-zinc-500 italic">
            If you have any questions about this privacy policy or our privacy practices, please contact us at support@eceez.com.
          </p>
        </div>
      </div>
    </div>
  );
};
