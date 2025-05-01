import React, { useState } from 'react';
import { Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    
    // Simulate subscription
    setTimeout(() => {
      setSubscribed(true);
      setIsSubscribing(false);
    }, 1000);
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Newsletter signup */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">Subscribe for "Daily Dumb Money Ideas"</h3>
            <p className="text-gray-400">
              Get weird, wonderful, and occasionally wise money ideas straight to your inbox.
            </p>
          </div>
          
          {subscribed ? (
            <div className="bg-emerald-900/30 border border-emerald-700 rounded-lg p-4 text-center">
              <Heart className="inline-block text-pink-400 mb-2" size={24} />
              <p className="text-white">Thanks for subscribing! Check your inbox for dumb ideas soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-grow relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubscribing}
                className="bg-violet-600 hover:bg-violet-700 text-white font-medium py-3 px-6 rounded-lg transition-colors sm:w-auto"
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}
        </div>
        
        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">About</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Suggest an Idea</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Money Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy (kinda)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>
        
        {/* Ad disclaimer and copyright */}
        <div className="pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500 mb-2">
            Ad space provided by our partners. We might laugh at your spending habits, but we care about your privacy.
          </p>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} What Can I Do With This Much Money? All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;