export interface SiteConfig {
  projectName: string;
  teamName: string;
  teamSize: number;
  tagline: string;
  domain: string;
  description: string;
  mission: string;
  email: string;
  github: string;
  twitter: string;
  discord: string;
}

export const siteConfig: SiteConfig = {
  projectName: 'RIXA Nexus',
  teamName: 'RIXA INNOVATORS',
  teamSize: 6,
  tagline: 'Decentralized Intelligence & Interactive Learning Systems',
  domain: 'Smart Education & Web3 Knowledge Architecture',
  description: 'An editorial publication and technical research blog exploring AI content synthesis, smartphone-based augmented reality, and decentralized verification protocols.',
  mission: 'From Memorizing Concepts to Experiencing Them: Bridging multimodal AI, augmented reality, and verifiable knowledge networks.',
  email: 'contact@rixa-innovators.network',
  github: 'https://github.com/RIXA-INNOVATORS',
  twitter: 'https://twitter.com/rixa_innovators',
  discord: 'https://discord.gg/rixa'
};
