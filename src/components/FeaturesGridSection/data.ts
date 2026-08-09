import type { FeatureItem, FeaturesGridHeader } from "./types";

export const featuresHeader: FeaturesGridHeader = {
  title: "Everything you\nneed to manage\naccess.",
  description:
    "From visitor invitations to vendor tracking, GateShark brings every part of estate and workplace access into one connected system.",
};

export const featuresList: FeatureItem[] = [
  {
    iconImg: "/features/invite.svg",
    title: "Invite visitors in seconds",
    desc: "Create secure digital invitations in just a few taps.",
  },
  {
    iconImg: "/features/verify.svg",
    title: "Verify every arrival confidently",
    desc: "Check visitor invitations quickly and securely at the gate.",
  },
  {
    iconImg: "/features/manage.svg",
    title: "Manage deliveries and vendors",
    desc: "Handle contractors, artisans, service providers, and deliveries through one simple workflow.",
  },
  {
    iconImg: "/features/records.svg",
    title: "Keep complete access records",
    desc: "Maintain a complete digital history of visitor entries and exits.",
  },
  {
    iconImg: "/features/notify.svg",
    title: "Notify residents in real time",
    desc: "Keep residents informed when visitors arrive.",
  },
  {
    iconImg: "/features/dashboard.svg",
    title: "Manage everything from one dashboard",
    desc: "Control residents, users, permissions, and access activity from a single place.",
  },
];
