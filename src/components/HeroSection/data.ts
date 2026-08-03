import type { HeroContent } from './types';

export const heroData: HeroContent = {
  navItems: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Security', href: '#security' },
    { label: 'FAQs', href: '#faqs' },
  ],
  title: 'Smart access management for estates and workspaces',
  description:
    'Residents send visitor invitations, security verifies every arrival, and administrators stay informed. All from one platform.',
  primaryCtaText: 'Book a Demo',
  primaryCtaIcon: '/hero/calendar.png',
  secondaryCtaText: 'See How It Works',
  secondaryCtaIcon: '/hero/video-circle.png',
  bgImageUrl: '/hero/bg-image.jpg',
  dashboardImgUrl: '/hero/dashboard.png',
  cardImgUrl: '/hero/card.png',
};