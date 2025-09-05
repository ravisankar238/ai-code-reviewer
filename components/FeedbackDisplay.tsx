
import React from 'react';

interface FeedbackDisplayProps {
  feedback: string;
  isLoading: boolean;
  hasError: boolean;
}

const Placeholder: React.FC = () => (
    <div className="flex flex-col items-center justify-center h-full text-center text-slate-500">
        <div className="w-16 h-16 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-400">Awaiting Analysis</h3>
        <p className="max-w-xs">Submit your code on the left to get AI-powered feedback and suggestions for improvement.</p>
    </div>
);

export const FeedbackDisplay: React.FC<FeedbackDisplayProps> = ({ feedback, isLoading, hasError }) => {
  const showPlaceholder = !isLoading && !feedback && !hasError;
  return (
    <div className="bg-slate-800 rounded-lg shadow-lg h-full overflow-y-auto" style={{ minHeight: '65vh' }}>
      <div className="p-4 h-full">
        {showPlaceholder ? (
            <Placeholder />
        ) : (
          <pre className="text-sm text-slate-300 whitespace-pre-wrap break-words font-sans">
            {feedback}
          </pre>
        )}
      </div>
    </div>
  );
};
