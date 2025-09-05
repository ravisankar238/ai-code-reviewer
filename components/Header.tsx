
import React from 'react';

const SparkleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 00B6.061 6.061l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-6.061 6.061l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-6.061-6.061l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 006.061-6.061l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036a3 3 0 004.878 4.878l1.036.258a.75.75 0 010 1.456l-1.036.258a3 3 0 00-4.878 4.878l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a3 3 0 00-4.878-4.878l-1.036-.258a.75.75 0 010-1.456l1.036-.258a3 3 0 004.878-4.878l.258-1.036A.75.75 0 0118 1.5z" clipRule="evenodd" />
    </svg>
);


export const Header: React.FC = () => {
  return (
    <header className="border-b border-slate-700/50 bg-slate-900/75 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <SparkleIcon className="w-8 h-8 text-cyan-400" />
            <h1 className="text-2xl font-bold text-slate-100 tracking-tight">
                AI Code Reviewer
            </h1>
        </div>
      </div>
    </header>
  );
};
