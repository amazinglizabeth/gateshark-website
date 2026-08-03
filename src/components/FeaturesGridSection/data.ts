import type { FeatureItem, FeaturesGridHeader } from './types';

export const featuresHeader: FeaturesGridHeader = {
  title: 'Everything you need to manage access.',
  description:
    'From visitor invitations to vendor tracking, GateShark brings every part of estate and workplace access into one connected system.',
};

export const featuresList: FeatureItem[] = [
  { iconImg: '/features/invite.png', title: 'Invite visitors in seconds', desc: 'Create secure digital invitations in just a few taps.' },
  { iconImg: '/features/verify.png', title: 'Verify every arrival confidently', desc: 'Check visitor invitations quickly and securely at the gate.' },
  { iconImg: '/features/manage.png', title: 'Manage deliveries and vendors', desc: 'Handle contractors, artisans, service providers, and deliveries through one simple workflow.' },
  { iconImg: '/features/records.png', title: 'Keep complete access records', desc: 'Maintain a complete digital history of visitor entries and exits.' },
  { iconImg: '/features/notify.png', title: 'Notify residents in real time', desc: 'Keep residents informed when visitors arrive.' },
  { iconImg: '/features/dashboard.png', title: 'Manage everything from one dashboard', desc: 'Control residents, users, permissions, and access activity from a single place.' },
];