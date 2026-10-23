export interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  hasSubmenu?: boolean;
  badge?: string;
  subItems?: string[];
}

export interface CategoryItem {
  id: string;
  title: string;
  count?: string;
  iconType: 'internships' | 'jobs' | 'competitions' | 'mock-tests' | 'mock-interviews' | 'hackathons' | 'mentorships' | 'practice';
  color: string;
  bgGradient: string;
  link: string;
}

export interface FeaturedItem {
  id: string;
  title: string;
  subtitle?: string;
  headline?: string;
  bannerType: 'nykaa' | 'coursera' | 'maruti' | 'reliance-tup' | 'retro-game' | 'magucho' | 'snapdragon' | 'google' | 'flipkart';
  badgeTag?: string;
  hasHeart?: boolean;
  tags: string[];
  partnerLogo?: string;
  companyName: string;
  stipendOrPrize?: string;
  location?: string;
  isSaved?: boolean;
  deadline?: string;
  impressions?: string;
  description: string;
  eligibility: string;
  perks: string[];
}

export interface Opportunity {
  id: string;
  title: string;
  company: string;
  logo: string;
  category: 'internship' | 'job' | 'hackathon' | 'competition';
  location: string;
  type: 'Remote' | 'On-site' | 'Hybrid';
  salaryOrStipend: string;
  postedDate: string;
  deadline: string;
  applicantsCount: number;
  tags: string[];
  description: string;
  eligibility: string;
  isBookmarked?: boolean;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  reviewsCount: number;
  sessionsCount: number;
  expertise: string[];
  hourlyRate: string;
}

export interface PracticeTest {
  id: string;
  title: string;
  category: string;
  questionsCount: number;
  durationMinutes: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  participantsCount: number;
  rating: number;
}
