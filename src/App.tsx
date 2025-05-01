import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MoneyInput from './components/MoneyInput';
import SuggestionDisplay from './components/SuggestionDisplay';
import CommunitySection from './components/CommunitySection';
import SocialShare from './components/SocialShare';
import Footer from './components/Footer';
import { generateSuggestions } from './utils/generateSuggestions';
import { getCommunityStories } from './utils/communityStories';
import { SuggestionType, CommunityStoryType } from './types';

function App() {
  const [amount, setAmount] = useState<number>(0);
  const [suggestions, setSuggestions] = useState<SuggestionType[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [communityStories, setCommunityStories] = useState<CommunityStoryType[]>(getCommunityStories());

  // Initialize with default stories
  useEffect(() => {
    setCommunityStories(getCommunityStories());
  }, []);

  const handleMoneySubmit = (value: number) => {
    setAmount(value);
    const newSuggestions = generateSuggestions(value);
    setSuggestions(newSuggestions);
    setShowResults(true);
    
    // Smooth scroll to results
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleRefreshOne = (category: SuggestionType['category']) => {
    // Get a new suggestion for just this category
    const newIdeas = generateSuggestions(amount);
    const newSuggestion = newIdeas.find(s => s.category === category);
    
    if (newSuggestion) {
      setSuggestions(prev => 
        prev.map(s => s.category === category ? newSuggestion : s)
      );
    }
  };

  const handleRefreshAll = () => {
    const newSuggestions = generateSuggestions(amount);
    setSuggestions(newSuggestions);
  };

  const handleStorySubmit = (story: Omit<CommunityStoryType, 'id'>) => {
    const newStory: CommunityStoryType = {
      ...story,
      id: crypto.randomUUID(),
    };
    
    setCommunityStories(prev => [newStory, ...prev]);
  };

  // Get a random suggestion for sharing
  const getRandomSuggestion = (): string => {
    if (!suggestions.length) return "spend my money in a creative way";
    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    // Extract the main idea without the category context
    return randomSuggestion.description.split('.')[0];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Add floating animated elements for background */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
      
      <Header />
      <MoneyInput onSubmit={handleMoneySubmit} />
      
      <div id="results">
        {showResults && (
          <>
            <SuggestionDisplay 
              suggestions={suggestions} 
              onRefreshOne={handleRefreshOne}
              onRefreshAll={handleRefreshAll}
            />
            <SocialShare 
              amount={amount} 
              suggestion={getRandomSuggestion()} 
            />
          </>
        )}
      </div>
      
      <CommunitySection 
        stories={communityStories} 
        onSubmitStory={handleStorySubmit}
      />
      <Footer />
    </div>
  );
}

export default App;