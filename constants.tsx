import { 
  BookOpen, 
  LayoutTemplate, 
  Database, 
  TrendingUp, 
  Mail
} from 'lucide-react';
import { AppContent, ScriptType } from './types';

export const APP_NAME = "EstateOS";

// Static assets that don't need translation
export const FEATURE_ICONS = [
  Database,
  LayoutTemplate,
  BookOpen,
  Mail,
  TrendingUp
];

export const CONTENT: AppContent = {
  nav: {
    features: "Features",
    preview: "Preview",
    reviews: "Reviews",
    contact: "Contact",
    cta: "Get the Bundle",
    mobileCta: "Get Access Now"
  },
  hero: {
    trustedBadge: "Trusted by 2,400+ Agents",
    headline: "The Operating System for",
    headlineGradient: "Modern Real Estate.",
    subheadline: "Stop struggling with scattered spreadsheets and generic templates. Get the all-in-one Notion CRM, marketing system, and script bible used by top 1% producers.",
    ctaPrimary: "Get Instant Access",
    ctaSecondary: "See What's Inside",
    valueProps: [
      "One-time payment",
      "Lifetime updates included",
      "Instant download"
    ]
  },
  features: {
    headline: "Everything you need to scale.",
    subheadline: "We've packaged the exact systems used by top teams into one seamless dashboard.",
    items: [
      {
        title: "The Agent CRM",
        description: "A Notion-based operating system to track leads, deals, and active listings without the monthly subscription fees.",
      },
      {
        title: "Listing Templates",
        description: "High-converting listing presentations and flyers designed in Canva.",
      },
      {
        title: "The Script Bible",
        description: "Over 50+ battle-tested scripts for every objection imaginable.",
      },
      {
        title: "Email Sequences",
        description: "Automated nurture campaigns that turn cold leads into warm appointments.",
      },
      {
        title: "Social Systems",
        description: "365 days of content ideas and caption templates.",
      }
    ],
    aiBox: {
      title: "AI-Ready System",
      description: "Our templates are designed to work perfectly with AI tools. Copy, paste, and let Gemini or ChatGPT do the heavy lifting.",
      link: "See the demo below"
    }
  },
  aiDemo: {
    badge: "Included Feature",
    headline: "Experience the Power of Systematized Scripts.",
    description: "Our 'Script Bible' isn't just a PDF. It includes prompts you can plug into AI to generate infinite variations of battle-tested dialogues. Try our AI Script Generator demo to see what's possible.",
    label: "Choose a Scenario:",
    generateButton: "Generate Script",
    generating: "Generating...",
    previewLabel: "Output Preview",
    emptyState: "Select a scenario and click generate to see the magic.",
    promptContext: "Focus on high value, low pressure."
  },
  testimonials: {
    headline: "Real Agents. Real Results.",
    list: [
      {
        id: 1,
        name: "Sarah Jenkins",
        role: "Top 1% Producer, NYC",
        image: "https://picsum.photos/100/100?random=1",
        text: "I was drowning in disorganized spreadsheets. EstateOS completely streamlined my business. I closed 3 extra deals last month just by following the follow-up system.",
        rating: 5
      },
      {
        id: 2,
        name: "Marcus Thorne",
        role: "Agency Owner",
        image: "https://picsum.photos/100/100?random=2",
        text: "The listing templates alone are worth the price. They look better than what my brokerage provides. My clients are consistently impressed.",
        rating: 5
      },
      {
        id: 3,
        name: "Elena Rodriguez",
        role: "Real Estate Agent",
        image: "https://picsum.photos/100/100?random=3",
        text: "Simple, clean, and effective. I didn't want a complex software with a monthly fee. This one-time purchase was the best investment I made this year.",
        rating: 5
      }
    ]
  },
  pricing: {
    headline: "Get the Unfair Advantage Today.",
    subheadline: "Join hundreds of agents scaling their business with EstateOS.",
    listHeader: "What's Included:",
    items: [
      { name: "EstateOS Notion CRM System", value: 497 },
      { name: "The Ultimate Script Bible (50+ Scripts)", value: 197 },
      { name: "Luxury Listing Presentation Template", value: 147 },
      { name: "365-Day Social Media Content Calendar", value: 97 },
      { name: "Email Nurture Sequence Pack", value: 197 },
      { name: "Bonus: Buyer Consultation Guide", value: 97 },
    ],
    totalValue: "Total Value",
    offerLabel: "Limited Time Offer",
    secureLabel: "Secure SSL Payment",
    cta: "Get Access Now",
    subtext: "One-time payment. Lifetime access."
  },
  faq: {
    headline: "Frequently Asked Questions",
    items: [
      {
        question: "Do I need to pay a monthly subscription?",
        answer: "Never. EstateOS is a one-time purchase. You own the templates, the system, and the assets forever."
      },
      {
        question: "Is this compatible with mobile?",
        answer: "Yes! Since the core system is built on Notion and Canva, you can access your CRM and templates from any device, anywhere."
      },
      {
        question: "I'm a new agent. Is this for me?",
        answer: "Absolutely. This is the 'business in a box' most new agents wish they had. It establishes professional systems from day one."
      },
      {
        question: "How do I get access?",
        answer: "Immediately after purchase, you will receive an email with a secure link to duplicate the workspace and download your assets."
      }
    ]
  },
  contact: {
    headline: "Get in Touch",
    subheadline: "Have questions about the bundle? Need help with your download? We're here to help.",
    form: {
      nameLabel: "Your Name",
      emailLabel: "Email Address",
      messageLabel: "Message",
      submitButton: "Send Message",
      successMessage: "Thanks for reaching out! We'll get back to you shortly."
    },
    info: {
      email: "support@estateos.com",
      support: "24/7 Support via Email"
    }
  },
  modal: {
    headline: "Unlock the $49 Special Offer",
    subheadline: "To access EstateOS for the $49 special offer, please enter your email address below.",
    emailPlaceholder: "Enter your email address",
    submitButton: "Get Access Now",
    disclaimer: "We respect your privacy. Unsubscribe at any time."
  },
  footer: {
    rights: "All rights reserved.",
    links: ["Privacy Policy", "Terms of Service", "Contact Support"]
  }
};