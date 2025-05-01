export interface SuggestionType {
  id: string;
  category: 'funny' | 'useful' | 'dumbGenius' | 'luxury';
  emoji: string;
  title: string;
  description: string;
}

export interface CommunityStoryType {
  id: string;
  name: string;
  amount: number;
  story: string;
}