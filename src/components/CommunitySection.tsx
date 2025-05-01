import React, { useState } from 'react';
import { CommunityStoryType } from '../types';
import { MessageSquare, Send } from 'lucide-react';

interface CommunitySectionProps {
  stories: CommunityStoryType[];
  onSubmitStory: (story: Omit<CommunityStoryType, 'id'>) => void;
}

const CommunitySection: React.FC<CommunitySectionProps> = ({ stories, onSubmitStory }) => {
  const [storyInput, setStoryInput] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!storyInput || !amountInput || !nameInput) return;
    
    setIsSubmitting(true);
    
    // Submit the story
    onSubmitStory({
      name: nameInput,
      amount: parseFloat(amountInput),
      story: storyInput,
    });

    // Reset form
    setStoryInput('');
    setAmountInput('');
    setNameInput('');
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-indigo-900 to-violet-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What Others Did</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Real stories from real people who did weird, wonderful, or surprisingly smart things with their money.
          </p>
        </div>
        
        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stories.map((story) => (
            <div key={story.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/15 transition-colors">
              <div className="flex items-center mb-4">
                <div>
                  <h3 className="font-semibold text-white">{story.name}</h3>
                  <p className="text-white/70 text-sm">${story.amount}</p>
                </div>
              </div>
              <p className="text-white/90">{story.story}</p>
            </div>
          ))}
        </div>
        
        {/* Submit Story Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
          <div className="flex items-center mb-6">
            <MessageSquare size={24} className="text-emerald-300 mr-3" />
            <h3 className="text-xl font-bold">Did you do something weird with money?</h3>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:ring-2 focus:ring-emerald-300 focus:border-transparent"
                  placeholder="Anonymous is fine too"
                />
              </div>
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-white/80 mb-1">
                  Amount Spent
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-white/60">$</span>
                  </div>
                  <input
                    type="text"
                    id="amount"
                    value={amountInput}
                    onChange={(e) => setAmountInput(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 rounded-lg pl-8 pr-4 py-2 text-white placeholder-white/40 focus:ring-2 focus:ring-emerald-300 focus:border-transparent"
                    placeholder="100"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="story" className="block text-sm font-medium text-white/80 mb-1">
                Your Money Story
              </label>
              <textarea
                id="story"
                value={storyInput}
                onChange={(e) => setStoryInput(e.target.value)}
                rows={3}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:ring-2 focus:ring-emerald-300 focus:border-transparent"
                placeholder="Tell us what you did with your money..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-medium py-3 px-6 rounded-lg hover:from-emerald-500 hover:to-teal-600 transition-colors"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin mr-2 h-5 w-5 border-t-2 border-b-2 border-white rounded-full"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={18} className="mr-2" />
                  Share Your Story
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;