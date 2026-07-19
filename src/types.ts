export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  role: string;
  tags: string[];
  type: 'company' | 'product' | 'community';
  themeColor: string;
  textColor: string;
  features: string[];
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  bio: string;
  secondaryBio: string;
  avatarUrl: string;
  email: string;
  skills: string[];
  socials: {
    platform: string;
    url: string;
    icon: string;
  }[];
}
