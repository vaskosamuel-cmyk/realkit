import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface PricingItem {
  name: string;
  value: number;
}

export enum ScriptType {
  COLD_CALL = "Cold Call",
  EXPIRED = "Expired Listing",
  FSBO = "For Sale By Owner",
  REFERRAL = "Referral Request"
}

export interface AppContent {
  nav: {
    features: string;
    preview: string;
    reviews: string;
    contact: string;
    cta: string;
    mobileCta: string;
  };
  hero: {
    trustedBadge: string;
    headline: string;
    headlineGradient: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    valueProps: [string, string, string];
  };
  features: {
    headline: string;
    subheadline: string;
    items: { title: string; description: string }[];
    aiBox: {
      title: string;
      description: string;
      link: string;
    };
  };
  aiDemo: {
    badge: string;
    headline: string;
    description: string;
    label: string;
    generateButton: string;
    generating: string;
    previewLabel: string;
    emptyState: string;
    promptContext: string;
  };
  testimonials: {
    headline: string;
    list: Testimonial[];
  };
  pricing: {
    headline: string;
    subheadline: string;
    listHeader: string;
    items: PricingItem[];
    totalValue: string;
    offerLabel: string;
    urgency: string;
    secureLabel: string;
    cta: string;
    subtext: string;
  };
  faq: {
    headline: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    headline: string;
    subheadline: string;
    form: {
      nameLabel: string;
      emailLabel: string;
      messageLabel: string;
      submitButton: string;
      successMessage: string;
    };
    info: {
      email: string;
      support: string;
    }
  };
  modal: {
    headline: string;
    subheadline: string;
    emailPlaceholder: string;
    submitButton: string;
    disclaimer: string;
  };
  footer: {
    rights: string;
    links: [string, string, string];
  };
}