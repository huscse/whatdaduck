import React from 'react';
import { DollarSign } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative w-full py-8 lg:py-16 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-indigo-800 z-0"></div>
      
      {/* Floating animation elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute text-2xl lg:text-3xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            {['💰', '💵', '💸', '🤑', '💎', '🛍️', '✨', '🚀'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Logo/Icon */}
        <div className="flex justify-center items-center mb-4">
          <div className="bg-white rounded-full p-3 shadow-lg">
            <DollarSign size={36} className="text-violet-600" />
          </div>
        </div>
        
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-3">
          What Can I Do With <br className="hidden md:block" />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
            This Much Money?
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Type a number. Get ideas. Waste (or invest) wisely.
        </p>
        
        {/* CTA - this will smoothly scroll to the input section */}
        <a 
          href="#money-input"
          className="inline-block bg-white text-violet-700 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
        >
          Let's Get Started!
        </a>
      </div>
    </header>
  );
};

export default Header;