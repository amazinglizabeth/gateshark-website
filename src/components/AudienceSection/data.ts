import type { RoleCard } from './types';

export const audienceHeader = {
  title: 'Built for everyone.',
  description:
    "GateShark adapts to the role, whether you're inviting a guest, verifying one, or overseeing the whole property.",
};

export const roleCards: RoleCard[] = [
  {
    imgUrl: '/audience/residents.svg',
    title: 'Residents send invitations',
    description: 'Create secure digital invitations for their visitors in\nseconds.',
  },
  {
    imgUrl: '/audience/security.svg',
    title: 'Security Teams',
    description: 'Verify visitors quickly without relying on paper logs or phone calls.',
  },
  {
    imgUrl: '/audience/administrator.svg',
    title: 'Administrators',
    description: 'Monitor access activity and oversee your entire estate\nor workplace from one platform.',
  },
];