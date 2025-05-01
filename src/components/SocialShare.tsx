import React, { useState } from 'react';
import { Twitter, Instagram, Copy, Check } from 'lucide-react';

interface SocialShareProps {
  amount: number;
  suggestion: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ amount, suggestion }) => {
  const [copied, setCopied] = useState(false);
  
  // Generate a share text
  const shareText = `This site told me to ${suggestion.toLowerCase()} with my $${amount}. Should I do it? #WhatCanIDoWithThisMuchMoney`;
  
  const handleCopyClick = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleTwitterShare = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, '_blank');
  };
  
  const handleInstagramShare = () => {
    // Since Instagram doesn't have a direct share URL like Twitter,
    // we just copy the text so users can paste it on Instagram
    navigator.clipboard.writeText(shareText);
    alert('Text copied! Now open Instagram and paste in your story.');
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Brag About Your Money Plans
        </h2>
        
        {/* Quote display */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8 relative">
          <div className="text-gray-400 text-6xl absolute top-1 left-4 leading-none">"</div>
          <p className="text-lg text-gray-800 pt-4 pl-6">
            {shareText}
          </p>
          <div className="text-gray-400 text-6xl absolute bottom-1 right-4 leading-none">"</div>
        </div>
        
        {/* Share buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={handleTwitterShare}
            className="flex items-center justify-center py-3 px-6 bg-[#1DA1F2] text-white font-medium rounded-lg hover:bg-[#1A91DA] transition-colors"
          >
            <Twitter size={20} className="mr-2" />
            Share on Twitter
          </button>
          
          <button 
            onClick={handleInstagramShare}
            className="flex items-center justify-center py-3 px-6 bg-gradient-to-r from-[#5851DB] via-[#E1306C] to-[#FCAF45] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            <Instagram size={20} className="mr-2" />
            Share on Instagram
          </button>
          
          <button 
            onClick={handleCopyClick}
            className="flex items-center justify-center py-3 px-6 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
          >
            {copied ? (
              <>
                <Check size={20} className="mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy size={20} className="mr-2" />
                Copy Text
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialShare;