
import React from 'react';
import { PROGRAMMING_LANGUAGES } from '../constants';

interface CodeInputProps {
  code: string;
  setCode: (code: string) => void;
  language: string;
  setLanguage: (language: string) => void;
  onReview: () => void;
  isLoading: boolean;
}

const ReviewIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="M10 3.75a2 2 0 100 4 2 2 0 000-4z" />
        <path fillRule="evenodd" d="M10 0a.75.75 0 01.75.75v1.435c2.44.43 4.32 2.31 4.75 4.75h1.435a.75.75 0 010 1.5H16.93a5.502 5.502 0 01-3.28 3.28v1.435a.75.75 0 01-1.5 0V15.07c-2.44-.43-4.32-2.31-4.75-4.75H1.575a.75.75 0 010-1.5H3.07a5.502 5.502 0 013.28-3.28V.75A.75.75 0 0110 0zM8 6.75a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
    </svg>
);

export const CodeInput: React.FC<CodeInputProps> = ({
  code,
  setCode,
  language,
  setLanguage,
  onReview,
  isLoading,
}) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <div className="flex items-center justify-between p-3 bg-slate-800 border-b border-slate-700">
        <label htmlFor="language-select" className="sr-only">Select Language</label>
        <select
          id="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-slate-700 text-slate-100 rounded px-3 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          {PROGRAMMING_LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        <button
          onClick={onReview}
          disabled={isLoading}
          className="inline-flex items-center gap-2 rounded-md bg-cyan-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors"
        >
          <ReviewIcon className="h-5 w-5" />
          {isLoading ? 'Reviewing...' : 'Review Code'}
        </button>
      </div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
        className="w-full h-full flex-grow bg-slate-900 text-slate-300 p-4 font-mono text-sm resize-none focus:outline-none"
        style={{ minHeight: '60vh' }}
      />
    </div>
  );
};
