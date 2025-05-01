import { CommunityStoryType } from '../types';

export const getCommunityStories = (): CommunityStoryType[] => {
  return [
    {
      id: '1',
      name: 'Alex',
      amount: 27,
      story: 'Bought 27 packets of ramen and had a "noodle art" competition with friends. The sculptures were surprisingly impressive!',
    },
    {
      id: '2',
      name: 'Taylor',
      amount: 150,
      story: 'Rented a blow-up dinosaur costume and wore it to every errand for a day. The bank teller\'s face was priceless!',
    },
    {
      id: '3',
      name: 'Jordan',
      amount: 75,
      story: 'Bought a used keyboard and taught myself the "Jurassic Park" theme. Now I play it whenever my roommate brings home a date.',
    },
    {
      id: '4',
      name: 'Sam',
      amount: 420,
      story: 'Started a small herb garden in my apartment. Plot twist: it\'s actually all different types of mint for cocktails!',
    }
  ];
};