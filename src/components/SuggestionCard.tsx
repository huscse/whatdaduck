import React, { useState } from 'react';
import { RefreshCw, Heart, Share2 } from 'lucide-react';
import { SuggestionType } from '../types';

interface SuggestionCardProps {
  suggestion: SuggestionType;
  onRefresh: (category: SuggestionType['category']) => void;
}

const categoryColors = {
  funny: 'bg-pink-500',
  useful: 'bg-blue-500',
  dumbGenius: 'bg-amber-500',
  luxury: 'bg-purple-500',
};

const categoryLabels = {
  funny: 'Funny',
  useful: 'Useful',
  dumbGenius: 'Dumb Genius',
  luxury: 'Luxury',
};

const SuggestionCard: React.FC<SuggestionCardProps> = ({ suggestion, onRefresh }) => {
  const [liked, setLiked] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate a slight delay
    setTimeout(() => {
      onRefresh(suggestion.category);
      setIsRefreshing(false);
    }, 600);
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleShare = () => {
    // In a real app, this would use the Web Share API
    alert(`Shared: ${suggestion.description}`);
  };

  const colors = categoryColors[suggestion.category] || 'bg-gray-500';

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      {/* Card header */}
      <div className={`${colors} text-white p-4 flex items-center justify-between`}>
        <div className="flex items-center">
          <span className="text-2xl mr-2">{suggestion.emoji}</span>
          <h3 className="font-bold">{categoryLabels[suggestion.category]}</h3>
        </div>
        <button 
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="text-white/80 hover:text-white transition-colors p-1 rounded-full"
          aria-label="Refresh suggestion"
        >
          <RefreshCw size={18} className={isRefreshing ? 'animate-spin' : ''} />
        </button>
      </div>
      
      {/* Card content */}
      <div className="p-5">
        <h4 className="font-bold text-lg mb-2">{suggestion.title}</h4>
        <p className="text-gray-700 mb-4">{suggestion.description}</p>
        
        {/* Card actions */}
        <div className="flex justify-between mt-4">
          <button 
            onClick={handleLike}
            className={`flex items-center px-3 py-1 rounded-full ${
              liked 
                ? 'bg-red-50 text-red-500' 
                : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
            } transition-colors`}
          >
            <Heart size={16} className={`mr-1 ${liked ? 'fill-current' : ''}`} />
            <span className="text-sm">{liked ? 'Liked' : 'Like'}</span>
          </button>
          
          <button 
            onClick={handleShare}
            className="flex items-center px-3 py-1 rounded-full bg-gray-50 text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <Share2 size={16} className="mr-1" />
            <span className="text-sm">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;