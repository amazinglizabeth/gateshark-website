export interface NavItem {
  label: string;
  href: string;
}

export interface HeroContent {
  navItems: NavItem[];
  title: string;
  description: string;
  primaryCtaText: string;
  primaryCtaIcon: string;
  secondaryCtaText: string;
  secondaryCtaIcon: string;
  bgImageUrl: string;
  dashboardImgUrl: string;
  cardImgUrl: string;
}