
import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-slate-800 bg-opacity-75 flex flex-col items-center justify-center z-10 rounded-lg">
      <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-slate-300 font-semibold">Analyzing your code...</p>
    </div>
  );
};
