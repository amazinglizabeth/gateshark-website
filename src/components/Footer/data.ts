import type { FooterLink, SocialLink } from './types';

export const footerLinks: FooterLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Security', href: '#security' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
];

export const socialLinks: SocialLink[] = [
  { iconUrl: '/footer/facebook.svg', alt: 'Facebook', href: '#' },
  { iconUrl: '/footer/instagram.svg', alt: 'Instagram', href: '#' },
  { iconUrl: '/footer/twitter.svg', alt: 'X (Twitter)', href: '#' },
];