import { NavItem, CategoryItem, FeaturedItem, Opportunity, Mentor, PracticeTest } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: 'Home', href: '#' },
  { id: 'internships', label: 'Internships', icon: 'GraduationCap', href: '#internships' },
  { id: 'jobs', label: 'Jobs', icon: 'Briefcase', href: '#jobs' },
  { id: 'competitions', label: 'Competitions', icon: 'Trophy', href: '#competitions' },
  { id: 'mock-tests', label: 'Mock Tests', icon: 'FileCheck', href: '#mock-tests' },
  { id: 'mock-interview', label: 'Mock Interview', icon: 'Video', href: '#mock-interview' },
  {
    id: 'mentorship',
    label: 'Mentorship',
    icon: 'Users',
    href: '#mentorship',
    hasSubmenu: true,
    subItems: ['Find Mentors', 'Mock Interview 1:1', 'CV & Resume Review'],
  },
  {
    id: 'prep-zone',
    label: 'Prep Zone',
    icon: 'BrainCircuit',
    href: '#prep-zone',
    hasSubmenu: true,
    subItems: ['DSA Coding Sprint', 'Aptitude Tests', 'Company Prep Guides'],
  },
];

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'internships',
    title: 'Internships',
    count: '15.4K+ Live',
    iconType: 'internships',
    color: '#0073e6',
    bgGradient: 'from-blue-50 to-blue-100/60',
    link: '#internships',
  },
  {
    id: 'jobs',
    title: 'Jobs',
    count: '38.2K+ Live',
    iconType: 'jobs',
    color: '#7c3aed',
    bgGradient: 'from-purple-50 to-purple-100/60',
    link: '#jobs',
  },
  {
    id: 'competitions',
    title: 'Competitions',
    count: '4.8K+ Live',
    iconType: 'competitions',
    color: '#f59e0b',
    bgGradient: 'from-amber-50 to-amber-100/60',
    link: '#competitions',
  },
  {
    id: 'mock-tests',
    title: 'Mock Tests',
    count: '120+ Tests',
    iconType: 'mock-tests',
    color: '#10b981',
    bgGradient: 'from-emerald-50 to-emerald-100/60',
    link: '#mock-tests',
  },
  {
    id: 'mock-interviews',
    title: 'Mock Interviews',
    count: '1-on-1 AI & Peer',
    iconType: 'mock-interviews',
    color: '#ec4899',
    bgGradient: 'from-pink-50 to-pink-100/60',
    link: '#mock-interviews',
  },
  {
    id: 'hackathons',
    title: 'Hackathons',
    count: '850+ Live',
    iconType: 'hackathons',
    color: '#6366f1',
    bgGradient: 'from-indigo-50 to-indigo-100/60',
    link: '#hackathons',
  },
  {
    id: 'mentorships',
    title: 'Mentorships',
    count: '4.9 ★ (20K+ Reviews)',
    iconType: 'mentorships',
    color: '#06b6d4',
    bgGradient: 'from-cyan-50 to-cyan-100/60',
    link: '#mentorships',
  },
  {
    id: 'practice',
    title: 'Prep Zone',
    count: 'Daily Streaks',
    iconType: 'practice',
    color: '#8b5cf6',
    bgGradient: 'from-violet-50 to-violet-100/60',
    link: '#prep-zone',
  },
];

export const FEATURED_ITEMS: FeaturedItem[] = [
  {
    id: 'featured-nykaa',
    title: 'Be the face of Nykaa',
    headline: 'THE NEXT FACE OF NYKAA',
    subtitle: 'WANTED: Reward? Face seen everywhere.',
    bannerType: 'nykaa',
    tags: ['Online', 'Free'],
    hasHeart: true,
    companyName: 'Nykaa',
    stipendOrPrize: 'Featured in Nykaa Nationwide Campaign + ₹50,000 Goodies',
    location: 'Online',
    deadline: '7 days left',
    impressions: '340K Impressions',
    description: 'Search "Be The Face Of Nykaa" on the Nykaa app. Upload your video audition to become the spotlight face across nationwide billboards, campaigns, and digital channels.',
    eligibility: 'Open to all college students, fashion enthusiasts & aspiring creators across India',
    perks: [
      'Feature in nationwide Nykaa billboards & digital campaigns',
      'Exclusive beauty hampers & styling sessions worth ₹50,000',
      'Fast-track signing opportunity with top creator management agencies'
    ]
  },
  {
    id: 'featured-coursera',
    title: 'Unlock Unlimited Learning at ₹7,499/Year',
    headline: 'Set your routine and save on skills',
    subtitle: 'Unlimited access to 7,000+ courses from Google, Meta, IBM, Microsoft & Stanford.',
    bannerType: 'coursera',
    tags: ['Explore Now'],
    hasHeart: false,
    companyName: 'Coursera Plus',
    stipendOrPrize: 'Save ₹6,500/year (Effectively ₹625/month)',
    location: 'Online',
    deadline: 'Limited Period Offer',
    impressions: '520K Impressions',
    description: 'Set your routine and save on skills with Coursera Plus! Earn unlimited accredited certificates from Google, Microsoft, Meta, IBM, and Stanford University at ₹7,499/year.',
    eligibility: 'Open to all students, professionals and lifelong learners worldwide',
    perks: [
      'Unlimited access to 7,000+ courses and hands-on projects',
      'Professional certificates recognized by top global tech recruiters',
      'Flexible, self-paced learning at effectively ₹625/month'
    ]
  },
  {
    id: 'featured-maruti',
    title: 'Maruti Suzuki XCeLerate 2026',
    headline: 'Powering the Future of Mobility!',
    subtitle: 'The flagship mobility innovation case competition for tomorrow\'s engineers.',
    bannerType: 'maruti',
    tags: ['Register Now'],
    hasHeart: false,
    companyName: 'Maruti Suzuki India Limited',
    stipendOrPrize: '₹6,00,000 Cash + PPIs / PPOs',
    location: 'Pan India / Hybrid Finals',
    deadline: '12 days left',
    impressions: '210K Impressions',
    description: 'Solve real-world automotive engineering, smart powertrain, EV charging infrastructure, and connected car challenges with guidance from Maruti Suzuki senior leaders.',
    eligibility: 'Pre-final & Final year B.Tech / M.Tech / MBA students across India',
    perks: [
      'Pre-Placement Interviews (PPIs) for executive trainee roles',
      'All-expenses paid trip to national grand finale',
      'Certificates signed by Maruti Suzuki Board of Directors'
    ]
  },
  {
    id: 'featured-reliance',
    title: 'Reliance T.U.P XII',
    headline: 'Different by design',
    subtitle: 'The Ultimate Pitch Season 10 - Pitch your dream venture to Reliance leadership.',
    bannerType: 'reliance-tup',
    tags: ['Online', 'Free'],
    hasHeart: true,
    companyName: 'Reliance Industries Limited',
    stipendOrPrize: '₹10,00,000 Seed Grants + Incubation',
    location: 'Online / Mumbai Grand Finale',
    deadline: '9 days left',
    impressions: '410K Impressions',
    description: 'The Ultimate Pitch (T.U.P) Season 10 invites innovative minds to pitch ideas that are Different by Design. Win funding, corporate backing, and direct mentorship.',
    eligibility: 'Open to college students & startup founders across all streams',
    perks: [
      '₹10,00,000 cash prizes and seed incubation opportunities',
      '1-on-1 mentorship with Reliance senior executives',
      'Fast-track placement interviews with Reliance ventures'
    ]
  },
  {
    id: 'featured-5',
    title: 'Google Cloud GenAI Hackathon 2026',
    headline: 'Build with Gemini 2.5 & Vertex AI',
    subtitle: 'Solve real-world enterprise bottlenecks with multimodal agentic AI.',
    bannerType: 'google',
    badgeTag: 'Submit Project',
    tags: ['Hackathon', 'Free', 'Cloud Credits'],
    companyName: 'Google Cloud',
    stipendOrPrize: '$25,000 in GCP Credits & Swag',
    location: 'Global / Virtual',
    deadline: '14 days left',
    impressions: '310K Impressions',
    description: 'Create multimodal enterprise agents, automated code copilots, or smart reasoning workflows with Google Cloud Vertex AI and Gemini APIs.',
    eligibility: 'Developers, students, AI researchers, and startups worldwide',
    perks: [
      '$500 Cloud Credits for all shortlisted teams',
      'Google Developer Certification vouchers',
      'Global stage feature on Google Cloud Blog'
    ]
  },
  {
    id: 'featured-6',
    title: 'Flipkart GRiD 6.0 Robotics Challenge',
    headline: 'Next-Gen Autonomous Warehouse Systems',
    subtitle: 'India’s biggest tech campus challenge with live robotics testing.',
    bannerType: 'flipkart',
    badgeTag: 'Explore Track',
    tags: ['Robotics', 'Tier 1 & 2', 'PPO'],
    companyName: 'Flipkart',
    stipendOrPrize: '₹12,00,000 + SDE Roles',
    location: 'Bengaluru / Hybrid',
    deadline: '18 days left',
    impressions: '180K Impressions',
    description: 'Tackle high-scale autonomous mobile robotics (AMRs), automated package sorting, and dynamic delivery routing algorithms.',
    eligibility: 'B.Tech / B.E. / M.Tech / Dual Degree students graduating 2026/2027',
    perks: [
      'Full-time software engineering and robotics job offers',
      'Hands-on sandbox with real industrial warehouse robotics',
      'Trophy and winner medals'
    ]
  }
];

export const ALL_OPPORTUNITIES: Opportunity[] = [
  {
    id: 'opp-1',
    title: 'Full Stack Software Engineer Intern',
    company: 'Microsoft',
    logo: 'MS',
    category: 'internship',
    location: 'Bengaluru, India',
    type: 'Hybrid',
    salaryOrStipend: '₹1,25,000 / month',
    postedDate: '2 days ago',
    deadline: '7 days left',
    applicantsCount: 3420,
    tags: ['React', 'TypeScript', 'Node.js', 'Azure'],
    description: 'Join Azure core engineering to architect scalable microservices, optimize low-latency APIs, and ship modern React web portals.',
    eligibility: 'Pursuing B.Tech/M.Tech in CS/IT or related field, graduation year 2026/2027.'
  },
  {
    id: 'opp-2',
    title: 'Associate Product Manager (APM)',
    company: 'Uber',
    logo: 'UB',
    category: 'job',
    location: 'Hyderabad, India',
    type: 'On-site',
    salaryOrStipend: '₹28 - 34 LPA',
    postedDate: '1 day ago',
    deadline: '10 days left',
    applicantsCount: 1890,
    tags: ['Product Design', 'SQL', 'Data Analytics', 'Growth'],
    description: 'Define product vision and collaborate with world-class engineers and designers to launch rider and driver growth features.',
    eligibility: '0-2 years of experience or 2026 graduating batch with proven analytical and leadership skills.'
  },
  {
    id: 'opp-3',
    title: 'AI & Generative Vision Research Intern',
    company: 'Adobe',
    logo: 'AD',
    category: 'internship',
    location: 'Noida, India',
    type: 'Remote',
    salaryOrStipend: '₹1,00,000 / month',
    postedDate: '3 days ago',
    deadline: '4 days left',
    applicantsCount: 2210,
    tags: ['PyTorch', 'Computer Vision', 'Diffusion Models', 'GenAI'],
    description: 'Research state-of-the-art multimodal generative video and image synthesis algorithms for Adobe Firefly products.',
    eligibility: 'Pre-final and final year students with experience in deep learning, PyTorch, and mathematical optimization.'
  },
  {
    id: 'opp-4',
    title: 'Tata Steel TomorrowLab Innovation Challenge',
    company: 'Tata Steel',
    logo: 'TS',
    category: 'competition',
    location: 'Jamshedpur / Virtual',
    type: 'Remote',
    salaryOrStipend: '₹5,00,000 Prize Pool',
    postedDate: 'Just now',
    deadline: '15 days left',
    applicantsCount: 4500,
    tags: ['Sustainability', 'Clean Energy', 'IoT', 'Case Study'],
    description: 'Propose path-breaking green manufacturing and carbon-capture innovations for heavy engineering industries.',
    eligibility: 'Open to engineering and business school students in teams of 2 to 4 members.'
  },
  {
    id: 'opp-5',
    title: 'Data Science & Quantitative Analyst',
    company: 'JPMorgan Chase & Co.',
    logo: 'JP',
    category: 'job',
    location: 'Mumbai, India',
    type: 'Hybrid',
    salaryOrStipend: '₹24 - 30 LPA',
    postedDate: '4 days ago',
    deadline: '11 days left',
    applicantsCount: 1540,
    tags: ['Python', 'Quantitative Modeling', 'Risk Analysis', 'SQL'],
    description: 'Build algorithmic pricing, portfolio risk optimization, and automated trading anomaly detection engines.',
    eligibility: 'Graduates in Mathematics, Statistics, Computer Science, or Economics.'
  },
  {
    id: 'opp-6',
    title: 'National Cybersecurity Bug Bounty & CTF',
    company: 'CERT-In & Unstop',
    logo: 'CTF',
    category: 'hackathon',
    location: 'Online',
    type: 'Remote',
    salaryOrStipend: '₹10,00,000 Cash Pool',
    postedDate: '5 days ago',
    deadline: '9 days left',
    applicantsCount: 6100,
    tags: ['Reverse Engineering', 'Web Security', 'Cryptography', 'Forensics'],
    description: 'Find vulnerabilities in mock defense networks and test your offensive security skills in a 48-hour continuous CTF.',
    eligibility: 'Ethical hackers, security analysts, and computer science students.'
  }
];

export const TOP_MENTORS: Mentor[] = [
  {
    id: 'mentor-1',
    name: 'Ananya Sharma',
    role: 'Senior Staff Software Engineer',
    company: 'Google',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80',
    rating: 4.98,
    reviewsCount: 382,
    sessionsCount: 540,
    expertise: ['System Design', 'FAANG Prep', 'DSA', 'Resume Review'],
    hourlyRate: '₹999 / 45 min'
  },
  {
    id: 'mentor-2',
    name: 'Rohan Deshmukh',
    role: 'Product Lead',
    company: 'Amazon',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
    rating: 4.95,
    reviewsCount: 290,
    sessionsCount: 410,
    expertise: ['Product Management', 'Strategy', 'Case Interviews', 'APM Roles'],
    hourlyRate: '₹1,199 / 45 min'
  },
  {
    id: 'mentor-3',
    name: 'Priya Narayanan',
    role: 'Engineering Manager',
    company: 'Uber',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80',
    rating: 4.99,
    reviewsCount: 440,
    sessionsCount: 680,
    expertise: ['Tech Leadership', 'Full Stack', 'Mock Interviews', 'Career Switch'],
    hourlyRate: '₹1,299 / 45 min'
  },
  {
    id: 'mentor-4',
    name: 'Vikram Malhotra',
    role: 'Senior Data Scientist',
    company: 'Meta',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80',
    rating: 4.94,
    reviewsCount: 215,
    sessionsCount: 310,
    expertise: ['Machine Learning', 'LLMs', 'Data Science', 'Python'],
    hourlyRate: '₹1,099 / 45 min'
  }
];

export const PRACTICE_TESTS: PracticeTest[] = [
  {
    id: 'test-1',
    title: 'Data Structures & Algorithms Sprint',
    category: 'Coding & DSA',
    questionsCount: 25,
    durationMinutes: 45,
    difficulty: 'Intermediate',
    participantsCount: 14500,
    rating: 4.9
  },
  {
    id: 'test-2',
    title: 'Full Stack Web Development (React & Node)',
    category: 'Web Tech',
    questionsCount: 30,
    durationMinutes: 50,
    difficulty: 'Intermediate',
    participantsCount: 9800,
    rating: 4.85
  },
  {
    id: 'test-3',
    title: 'Aptitude & Quantitative Problem Solving',
    category: 'Aptitude',
    questionsCount: 35,
    durationMinutes: 40,
    difficulty: 'Beginner',
    participantsCount: 24200,
    rating: 4.92
  },
  {
    id: 'test-4',
    title: 'System Design & Scalability Principles',
    category: 'Architecture',
    questionsCount: 20,
    durationMinutes: 60,
    difficulty: 'Advanced',
    participantsCount: 6300,
    rating: 4.96
  }
];

export const HIRING_COMPANIES = [
  { name: 'Google', category: 'Tech Giant', jobs: 42 },
  { name: 'Microsoft', category: 'Enterprise Tech', jobs: 58 },
  { name: 'Amazon', category: 'E-commerce & Cloud', jobs: 73 },
  { name: 'Flipkart', category: 'E-commerce', jobs: 36 },
  { name: 'Qualcomm', category: 'Semiconductors & AI', jobs: 29 },
  { name: 'HP', category: 'Personal Systems & AI', jobs: 24 },
  { name: 'Maruti Suzuki', category: 'Automotive & Mobility', jobs: 31 },
  { name: 'Tata Motors', category: 'Mobility & EV', jobs: 27 },
  { name: 'Adobe', category: 'Creative Software', jobs: 19 },
  { name: 'Uber', category: 'Ridesharing & Logistics', jobs: 22 },
];
