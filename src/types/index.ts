export type ProjectCategory = 
  | 'Web Development'
  | 'Full Stack'
  | 'Creative Design'
  | 'Video / Motion'
  | 'Digital Marketing';

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  year: string;
  description: string;
  heroImage: string;
  galleryImages?: string[];
  tools: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  problem?: string;
  solution?: string;
  role?: string;
  outcome?: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  previewImage: string;
  accentWord: string;
}

export interface VideoProject {
  id: string;
  title: string;
  category: 'Cinematic Edits' | 'Reels' | 'Short-form Content' | 'Promotional Videos' | 'Social Media Videos';
  duration: string;
  thumbnail: string;
  videoUrl?: string; // Preview/Stream URL or placeholder
  clientOrBrand?: string;
  description: string;
  software: string[];
}

export interface DesignProject {
  id: string;
  title: string;
  category: 'Canva Design' | 'Poster Design' | 'Social Media Creative' | 'Brand Identity' | 'Graphic Design' | 'Art Direction' | 'Visual Art';
  aspectRatio: 'square' | 'portrait' | 'landscape' | 'wide';
  image: string;
  description: string;
  year: string;
  tools: string[];
}

export interface MarketingCampaign {
  id: string;
  campaign: string;
  brand: string;
  goal: string;
  strategy: string;
  creative: string;
  result: string;
  channels: string[];
  bannerImage: string;
}

export interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export type CursorType = 'default' | 'view' | 'play' | 'open' | 'drag';
