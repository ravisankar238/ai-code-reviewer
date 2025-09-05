
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { CodeInput } from './components/CodeInput';
import { FeedbackDisplay } from './components/FeedbackDisplay';
import { Loader } from './components/Loader';
import { ErrorAlert } from './components/ErrorAlert';
import { reviewCode } from './services/geminiService';
import { PROGRAMMING_LANGUAGES } from './constants';

const App: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const [language, setLanguage] = useState<string>(PROGRAMMING_LANGUAGES[0]);
  const [feedback, setFeedback] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleReview = useCallback(async () => {
    if (!code.trim()) {
      setError('Please enter some code to review.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setFeedback('');

    try {
      const result = await reviewCode(code, language);
      setFeedback(result);
    } catch (err) {
      if (err instanceof Error) {
        setError(`An error occurred: ${err.message}`);
      } else {
        setError('An unknown error occurred during the review.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [code, language]);

  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <CodeInput
              code={code}
              setCode={setCode}
              language={language}
              setLanguage={setLanguage}
              onReview={handleReview}
              isLoading={isLoading}
            />
          </div>
          <div className="relative">
            {isLoading && <Loader />}
            {error && <ErrorAlert message={error} />}
            <FeedbackDisplay feedback={feedback} isLoading={isLoading} hasError={!!error} />
          </div>
        </div>
        <footer className="text-center text-slate-500 mt-12 pb-4">
          <p>Powered by Google Gemini. Built for developers.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
