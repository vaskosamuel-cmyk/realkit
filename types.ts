import React from 'react';

export enum ScriptType {
  EXPIRED = 'Expired Listing',
  FSBO = 'For Sale By Owner',
  GENERAL = 'General Prospecting'
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

export interface PricingItem {
  name: string;
  value: number;
}

export interface ModuleItem {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface AppContent {
  nav: {
    features: string;
    preview: string;
    pricing: string;
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
  story: {
    headline: string;
    subheadline: string;
    bullets: string[];
    bridge: string;
  };
  solution: {
    headline: string;
    description: string;
    pillars: {
      title: string;
      description: string;
    }[];
    cta: string;
  };
  showcase: {
    headline: string;
    subheadline: string;
    modules: ModuleItem[];
  };
  whoIsFor: {
    headline: string;
    perfectFor: {
      title: string;
      items: string[];
    };
    notFor: {
      title: string;
      items: string[];
    };
  };
  features: {
    headline: string;
    subheadline: string;
    items: {
      title: string;
      description: string;
    }[];
    aiBox: {
      title: string;
      description: string;
      link: string;
    };
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
    mainFeatures: string[];
    bonuses: { title: string; value: string }[];
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
  finalCta: {
    headline: string;
    subheadline: string;
    pricing: {
      today: string;
      value: string;
      guarantee: string;
    };
    cta: string;
    subtext: string;
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
    links: string[];
  };
}