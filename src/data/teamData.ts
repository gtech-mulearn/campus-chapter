export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Icon name or component
  color?: string; // Brand color
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  team: string;
  email: string;
  gender: string;
  bio?: string;
  muId?: string; // MuLearn ID
  socialLinks?: SocialLink[];
  customLinks?: {
    title: string;
    url: string;
    description?: string;
  }[];
}

// Team members data is now loaded dynamically from Google Sheets
// This file only exports the TypeScript interfaces