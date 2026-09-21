export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  skills: string[];
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 'boopathi',
    name: 'Boopathi Raja',
    role: 'Lead AI & Architecture Engineer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: 'Pioneering multimodal LLM evaluation pipelines, personalized pedagogical models, and full-stack decentralized application architecture.',
    skills: ['Astro', 'TypeScript', 'LLM Agents', 'Smart Contracts', 'Web3 Architecture'],
    social: {
      github: 'https://github.com/boopathi',
      linkedin: 'https://linkedin.com/in/boopathi',
      twitter: 'https://twitter.com/boopathi'
    }
  },
  {
    id: 'elena-v',
    name: 'Elena Vance',
    role: 'Spatial Computing & AR Specialist',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    bio: 'Crafting responsive smartphone-based augmented reality environments that transform abstract academic formulas into tangible 3D interactions.',
    skills: ['WebXR', 'Three.js', 'Spatial UI', 'Shader Programming', 'UX Prototyping'],
    social: {
      github: 'https://github.com/elena-v',
      linkedin: 'https://linkedin.com/in/elena-v'
    }
  },
  {
    id: 'marcus-chen',
    name: 'Marcus Chen',
    role: 'Protocol & Zero-Knowledge Researcher',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Designing decentralized verifiable credential schemas and on-chain learning analytics trees that preserve learner privacy while proving competence.',
    skills: ['ZK-Rollups', 'ERC-4337', 'Cryptographic Proofs', 'Rust', 'Data Modeling'],
    social: {
      github: 'https://github.com/marcus-chen',
      twitter: 'https://twitter.com/marcus-chen'
    }
  },
  {
    id: 'ananya-patel',
    name: 'Ananya Patel',
    role: 'Pedagogical Systems & Analytics Lead',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'Developing adaptive learning-gap detection algorithms and staff-facing telemetry dashboards to optimize teacher-student intervention cycles.',
    skills: ['Learning Science', 'Statistical Modeling', 'Product Design', 'Next.js', 'Python'],
    social: {
      linkedin: 'https://linkedin.com/in/ananya-patel',
      twitter: 'https://twitter.com/ananya-patel'
    }
  }
];
