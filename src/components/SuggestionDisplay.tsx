import React from 'react';
import SuggestionCard from './SuggestionCard';
import { SuggestionType } from '../types';

interface SuggestionDisplayProps {
  suggestions: SuggestionType[];
  onRefreshOne: (category: SuggestionType['category']) => void;
  onRefreshAll: () => void;
}

const SuggestionDisplay: React.FC<SuggestionDisplayProps> = ({ 
  suggestions, 
  onRefreshOne, 
  onRefreshAll 
}) => {
  if (suggestions.length === 0) {
    return null;
  }

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            Here's what you could do with that money
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mb-6">
            We've generated some ideas across different categories. Like something? Save it! 
            Want more options? Hit refresh!
          </p>
          <button
            onClick={onRefreshAll}
            className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors"
          >
            Refresh All Ideas
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {suggestions.map((suggestion) => (
            <SuggestionCard
              key={suggestion.id}
              suggestion={suggestion}
              onRefresh={onRefreshOne}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuggestionDisplay;