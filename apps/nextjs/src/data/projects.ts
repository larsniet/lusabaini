export interface Project {
  id: string;
  title: string;
  brand: string;
  description: string;
  type: string;
  metrics?: { label: string; value: string }[];
  color: string;
}

export const projects: Project[] = [
  {
    id: 'glow-serum',
    title: 'Summer Glow Campaign',
    brand: 'GlowCosmetics',
    description: 'A series of 3 TikTok shorts demonstrating the new serum application routine.',
    type: 'TikTok Branded Shorts',
    metrics: [
      { label: 'Views', value: '1.2M' },
      { label: 'Engagement', value: '8.5%' }
    ],
    color: 'bg-pink-100'
  },
  {
    id: 'fit-leggings',
    title: 'Gym OOTD Series',
    brand: 'ActiveWear Co',
    description: 'Instagram Reels and high-res photo set showcasing the spring collection.',
    type: 'UGC & Photo Content',
    metrics: [
      { label: 'Saves', value: '15k' },
      { label: 'CTR', value: '3.2%' }
    ],
    color: 'bg-purple-100'
  },
  {
    id: 'tech-unboxing',
    title: 'Headphones Unboxing',
    brand: 'TechSound',
    description: 'ASMR-style unboxing video focusing on aesthetic desk setup.',
    type: 'UGC Video',
    color: 'bg-blue-100'
  },
  {
    id: 'coffee-morning',
    title: 'Morning Routine',
    brand: 'BeanBrew',
    description: 'Sponsored story placement integrating coffee machine into daily life.',
    type: 'Sponsored Stories',
    metrics: [
        { label: 'Reach', value: '45k' }
    ],
    color: 'bg-orange-100'
  }
];
