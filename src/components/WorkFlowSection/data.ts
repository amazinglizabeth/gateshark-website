import type { WorkflowStep, BannerContent } from './types';

export const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    title: 'Residents send invitations',
    description: 'Create secure digital invitations for their visitors in seconds.',
  },
  {
    id: 2,
    title: 'Security verifies arrivals',
  },
  {
    id: 3,
    title: 'Access is recorded',
  },
];

export const bannerData: BannerContent = {
  heading: "Access management shouldn't depend on manual processes.",
  description:
    'GateShark replaces manual access processes with a connected platform where residents send visitor invitations, security verifies arrivals, and administrators have complete visibility into access activity.',
  ctaText: 'Book a Demo',
  ctaIcon: '/workflow/calendar.svg',
  phoneImgUrl: '/workflow/phone.svg',
  buildingImgUrl: '/workflow/building.svg',
};