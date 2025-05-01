import { SuggestionType } from '../types';

// This simulates AI-generated content
// In the future, replace with actual API calls to OpenAI or Claude
export const generateSuggestions = (amount: number): SuggestionType[] => {
  const funnyIdeas = [
    { amount: 1, idea: `Buy a single sock and tell people it\'s an investment in "future sock matching" technology.`, emoji: "🧦" },
    { amount: 5, idea: `Create a tiny emergency fund for your plants when they\'re feeling "under the weather".`, emoji: "🌱" },
    { amount: 10, idea: `Start a miniature hat collection for your neighbor\'s cat without telling them.`, emoji: "🐱" },
    { amount: 20, idea: `Pay someone to pretend they know you at the grocery store and act impressed by your cereal choice.`, emoji: "🥣" },
    { amount: 50, idea: `Buy 50 tiny rubber ducks and hide them throughout your friend\'s house over the course of a year.`, emoji: "🦆" },
    { amount: 100, idea: `Rent a tuxedo and go to a fast food restaurant where you order "the usual" with extreme confidence.`, emoji: "🍔" },
    { amount: 200, idea: `Hire a mariachi band to follow you around for an hour during ordinary errands.`, emoji: "🎺" },
    { amount: 500, idea: `Commission an oil painting of yourself high-fiving a dinosaur to hang in your living room.`, emoji: "🦖" },
    { amount: 1000, idea: `Buy 1,000 whoopee cushions and turn your entire living room floor into a symphony of flatulence.`, emoji: "💨" },
    { amount: 5000, idea: `Rent a billboard and put up a cryptic message that only you understand.`, emoji: "🚧" },
    { amount: 10000, idea: `Hire a flash mob to perform whenever you enter your office for a week straight.`, emoji: "💃" },
  ];

  const usefulIdeas = [
    { amount: 1, idea: `Buy a reusable shopping bag to save money on plastic bag fees.`, emoji: "🛍️" },
    { amount: 5, idea: `Purchase a budget planner notebook to track your expenses.`, emoji: "📓" },
    { amount: 10, idea: `Invest in a good water bottle to reduce spending on bottled water.`, emoji: "💧" },
    { amount: 20, idea: `Get a programmable smart plug to reduce electricity on phantom power devices.`, emoji: "🔌" },
    { amount: 50, idea: `Buy a basic tool kit for home repairs to avoid calling professionals for simple fixes.`, emoji: "🔨" },
    { amount: 100, idea: `Start an emergency fund in a high-yield savings account.`, emoji: "💰" },
    { amount: 200, idea: `Take a professional development course to boost your resume.`, emoji: "📚" },
    { amount: 500, idea: `Invest in quality cookware that will last decades and save on takeout.`, emoji: "🍳" },
    { amount: 1000, idea: `Buy a good mattress for better sleep and improved productivity.`, emoji: "🛏️" },
    { amount: 5000, idea: `Max out your IRA contribution for tax-advantaged retirement savings.`, emoji: "👵" },
    { amount: 10000, idea: `Make energy-efficient upgrades to your home to reduce bills long-term.`, emoji: "🏠" },
  ];

  const dumbGeniusIdeas = [
    { amount: 1, idea: `Buy a single lottery ticket – statistically dumb, but hey, someone\'s gotta win.`, emoji: "🎟️" },
    { amount: 5, idea: `Get five $1 scratch-offs but only scratch them when you\'re having a bad day.`, emoji: "🎭" },
    { amount: 10, idea: `Buy domain names for weirdly specific businesses that don\'t exist yet.`, emoji: "🌐" },
    { amount: 20, idea: `Purchase the most ridiculous stock you can find for under $20 and hold forever.`, emoji: "📈" },
    { amount: 50, idea: `Get 50 custom fortune cookies with extremely specific predictions to give to friends.`, emoji: "🥠" },
    { amount: 100, idea: `Buy an obscure cryptocurrency that\'s named after a food or animal.`, emoji: "🐕" },
    { amount: 200, idea: `Purchase a metal detector and spend weekends searching for treasure.`, emoji: "🧭" },
    { amount: 500, idea: `Get a 3D printer and start making custom phone cases for pets.`, emoji: "🖨️" },
    { amount: 1000, idea: `Invest in vintage Happy Meal toys that will definitely be collectors\' items someday.`, emoji: "🍟" },
    { amount: 5000, idea: `Buy a plot of land on the moon or Mars through one of those novelty services.`, emoji: "🌕" },
    { amount: 10000, idea: `Start a business that rents goats to people for lawn maintenance and cute Instagram photos.`, emoji: "🐐" },
  ];

  const luxuryIdeas = [
    { amount: 1, idea: `Treat yourself to a fancy chocolate bar instead of your usual snack.`, emoji: "🍫" },
    { amount: 5, idea: `Buy a luxury soap bar that makes your bathroom smell like a spa.`, emoji: "🧼" },
    { amount: 10, idea: `Get a premium streaming service for a month instead of the ad-supported version.`, emoji: "📺" },
    { amount: 20, idea: `Enjoy a craft cocktail at that fancy bar you always walk past.`, emoji: "🍸" },
    { amount: 50, idea: `Book a professional massage at a day spa to feel like royalty for an hour.`, emoji: "💆" },
    { amount: 100, idea: `Have a chef-prepared meal delivered to your home for a restaurant experience without leaving.`, emoji: "👨‍🍳" },
    { amount: 200, idea: `Rent designer clothes for your next event instead of buying fast fashion.`, emoji: "👗" },
    { amount: 500, idea: `Book a weekend getaway at a boutique hotel in your own city.`, emoji: "🏨" },
    { amount: 1000, idea: `Charter a private boat for a sunset cruise with friends.`, emoji: "⛵" },
    { amount: 5000, idea: `Rent a luxury sports car for a week to live your dream road trip.`, emoji: "🏎️" },
    { amount: 10000, idea: `Book a private jet day trip to a destination you\'ve always wanted to visit.`, emoji: "✈️" },
  ];

  // Find the closest idea by amount for each category
  const findClosestIdea = (ideas: typeof funnyIdeas, targetAmount: number) => {
    return ideas.reduce((prev, curr) => {
      return Math.abs(curr.amount - targetAmount) < Math.abs(prev.amount - targetAmount) ? curr : prev;
    });
  };

  const closestFunny = findClosestIdea(funnyIdeas, amount);
  const closestUseful = findClosestIdea(usefulIdeas, amount);
  const closestDumbGenius = findClosestIdea(dumbGeniusIdeas, amount);
  const closestLuxury = findClosestIdea(luxuryIdeas, amount);

  return [
    {
      id: '1',
      category: 'funny',
      emoji: closestFunny.emoji,
      title: 'The Laugh Factor',
      description: closestFunny.idea,
    },
    {
      id: '2',
      category: 'useful',
      emoji: closestUseful.emoji,
      title: 'Smart Money Move',
      description: closestUseful.idea,
    },
    {
      id: '3',
      category: 'dumbGenius',
      emoji: closestDumbGenius.emoji,
      title: 'So Dumb It Might Work',
      description: closestDumbGenius.idea,
    },
    {
      id: '4',
      category: 'luxury',
      emoji: closestLuxury.emoji,
      title: 'Treat Yo\'self',
      description: closestLuxury.idea,
    },
  ];
};