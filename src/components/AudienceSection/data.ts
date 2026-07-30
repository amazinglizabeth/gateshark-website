import type { RoleCard } from './types';

export const audienceHeader = {
  title: 'Built for everyone.',
  description:
    "GateShark adapts to the role, whether you're inviting a guest, verifying one, or overseeing the whole property.",
};

export const roleCards: RoleCard[] = [
  {
    imgUrl: '/audience/resident.png',
    title: 'Residents send invitations',
    description: 'Create secure digital invitations for their visitors in seconds.',
  },
  {
    imgUrl: '/audience/security.png',
    title: 'Security Teams',
    description: 'Verify visitors quickly without relying on paper logs or phone calls.',
  },
  {
    imgUrl: '/audience/administrator.png',
    title: 'Administrators',
    description: 'Monitor access activity and oversee your entire estate or workplace from one platform.',
  },
];