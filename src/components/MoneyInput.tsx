import React, { useState } from 'react';
import { DollarSign, Sparkles } from 'lucide-react';

interface MoneyInputProps {
  onSubmit: (amount: number) => void;
}

const MoneyInput: React.FC<MoneyInputProps> = ({ onSubmit }) => {
  const [amount, setAmount] = useState<number>(100);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle slider or direct input change
    const value = e.target.type === 'range' 
      ? parseInt(e.target.value, 10) 
      : parseFloat(e.target.value);

    if (!isNaN(value)) {
      setAmount(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate API call delay
    setTimeout(() => {
      onSubmit(amount);
      setIsGenerating(false);
    }, 1200);
  };

  return (
    <section id="money-input" className="py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          How much money are we playing with?
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Money display */}
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center">
              <DollarSign size={28} className="text-emerald-500 mr-1" />
              <span className="text-4xl md:text-6xl font-bold text-gray-800">
                {amount.toLocaleString('en-US', { 
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2 
                })}
              </span>
            </div>
          </div>
          
          {/* Slider */}
          <div className="space-y-3">
            <input
              type="range"
              min="1"
              max="10000"
              step="1"
              value={amount}
              onChange={handleAmountChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-violet-600"
            />
            
            <div className="flex justify-between text-xs text-gray-500">
              <span>$1</span>
              <span>$100</span>
              <span>$1,000</span>
              <span>$10,000+</span>
            </div>
          </div>
          
          {/* Direct input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign size={16} className="text-gray-500" />
            </div>
            <input
              type="number"
              min="1"
              value={amount}
              onChange={handleAmountChange}
              className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
              placeholder="Enter exact amount"
            />
          </div>
          
          {/* Submit button */}
          <button
            type="submit"
            disabled={isGenerating}
            className={`w-full flex items-center justify-center py-4 px-6 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 ${
              isGenerating ? 'opacity-80' : ''
            }`}
          >
            {isGenerating ? (
              <>
                <div className="animate-spin mr-2 h-5 w-5 border-t-2 border-b-2 border-white rounded-full"></div>
                Generating ideas...
              </>
            ) : (
              <>
                <Sparkles size={20} className="mr-2" />
                Show Me What I Can Do!
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default MoneyInput;