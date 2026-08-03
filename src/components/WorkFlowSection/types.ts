export interface WorkflowStep {
  id: number;
  title: string;
  description?: string;
}

export interface BannerContent {
  heading: string;
  description: string;
  ctaText: string;
  ctaIcon: string;
  phoneImgUrl: string;
  buildingImgUrl: string;
}