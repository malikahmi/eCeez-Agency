
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative inline-block mb-8">
            <h1 className="text-9xl font-bold text-zinc-200 dark:text-zinc-800 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="w-16 h-16 text-primary animate-bounce" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-10 text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-primary hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-zinc-200 dark:border-zinc-800 text-base font-medium rounded-xl text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 pt-8 border-t border-zinc-100 dark:border-zinc-800"
        >
          <p className="text-sm text-zinc-500">
            Lost? Try searching our{' '}
            <Link to="/services" className="text-primary hover:underline font-medium">
              services
            </Link>{' '}
            or{' '}
            <Link to="/case-studies" className="text-primary hover:underline font-medium">
              case studies
            </Link>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
