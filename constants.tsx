import { AppContent } from './types';
import { Zap, Shield, Smartphone, Globe, BarChart3, Users } from 'lucide-react';

export const APP_NAME = "RealKit";

export const FEATURE_ICONS = [Zap, Shield, Smartphone, Globe, BarChart3, Users];

export const CONTENT: AppContent = {
  nav: {
    features: "Features",
    preview: "Preview",
    pricing: "Pricing",
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
  story: {
    headline: "Why Most Agents Stay Stuck at the Same Income Level",
    subheadline: "You’re not losing deals because you’re lazy. You’re losing them because you’re reinventing the wheel every single time – new ad text, new email, new presentation, new follow-up… while top agents use proven scripts and systems they repeat every day.",
    bullets: [
      "Spending hours writing property descriptions and posts that get no leads",
      "Going blank on calls because you don’t know exactly what to say next",
      "Inconsistent follow-ups – so hotter clients go to more prepared agents",
      "No clear 'system' from first contact to signed contract",
      "Feeling like you’re always reacting instead of executing a plan"
    ],
    bridge: "Imagine if every step was already mapped out and written for you…"
  },
  solution: {
    headline: "Introducing RealKit: Your Complete Plug-and-Play System for Real Estate Success",
    description: "RealKit is a digital bundle of ready-to-use scripts, templates, checklists, and mini-systems built specifically for real estate agents. Instead of guessing what to say, what to post, or what to send next, you open RealKit, copy the template, customize a few details, and use it.",
    pillars: [
      {
        title: "Scripts that Sell",
        description: "Phone, meeting, and follow-up scripts that turn “just looking” into “where do I sign?”"
      },
      {
        title: "Marketing That Attracts Leads",
        description: "Plug-and-play templates for social media, email, and ads – no copywriting skills needed."
      },
      {
        title: "Systems That Save Time",
        description: "Checklists and workflows so you always know your next step from first contact to closing."
      }
    ],
    cta: "See Everything Inside RealKit"
  },
  showcase: {
    headline: "Your All-In-One Growth Engine",
    subheadline: "We've consolidated the four pillars of a successful real estate business into one seamless ecosystem.",
    modules: [
      {
        id: "crm",
        title: "The Notion Command Center",
        description: "The heartbeat of your business. Track every lead, active listing, and pending deal in one visual dashboard without the $199/mo fees of clunky software.",
        image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop",
        features: [
          "Pipeline Management Board",
          "Automated Follow-up Reminders",
          "Active Listing Checklist",
          "Commission & GCI Tracker"
        ]
      },
      {
        id: "scripts",
        title: "The Script Vault",
        description: "Never stumble on your words again. This isn't just a PDF; it's a battle-tested library of persuasion frameworks for every objection imaginable.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop",
        features: [
          "Expired & FSBO Frameworks",
          "The 'Perfect Price Reduction' Script",
          "Buyer Consultation Roadmap",
          "Referral Generation Dialogues"
        ]
      },
      {
        id: "marketing",
        title: "Marketing Suite",
        description: "Look like a luxury brokerage from day one. High-converting designs that position you as the authority in your market.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
        features: [
          "Luxury Listing Presentation (Canva)",
          "Open House Sign-in Sheets",
          "Just Listed / Just Sold Flyers",
          "Social Media Story Templates"
        ]
      },
      {
        id: "systems",
        title: "Growth Systems",
        description: "Stop reinventing the wheel. Plug into proven workflows that nurture leads on autopilot.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        features: [
          "365-Day Content Calendar",
          "Email Nurture Sequences",
          "Pre-Listing Questionnaire",
          "Vendor Partner Database"
        ]
      }
    ]
  },
  whoIsFor: {
    headline: "Who RealKit Is For (and Who It’s Not For)",
    perfectFor: {
      title: "Perfect For You If...",
      items: [
        "You’re a new or growing real estate agent who wants a proven structure.",
        "You’re tired of guessing what to say on calls and in messages.",
        "You want to save time with ready-to-use templates instead of writing from scratch."
      ]
    },
    notFor: {
      title: "Not For You If...",
      items: [
        "You’re looking for a ‘magic button’ without doing any work.",
        "You already have a fully optimized, documented system that works.",
        "You don’t want to follow scripts or use templates at all."
      ]
    }
  },
  features: {
    headline: "Everything You Need to Scale",
    subheadline: "No fluff. Just the tools that actually move the needle in your real estate business.",
    items: [
      {
        title: "Instant Setup",
        description: "Duplicate the Notion workspace and be up and running in less than 5 minutes."
      },
      {
        title: "Mobile Optimized",
        description: "Access your scripts and CRM from your phone while you're on the go."
      },
      {
        title: "Lifetime Updates",
        description: "Pay once and get every future update and new template for free."
      },
      {
        title: "No Monthly Fees",
        description: "Stop paying $199/month for bloated software you don't use."
      },
      {
        title: "Data Privacy",
        description: "Your data lives in your Notion account. We never see your leads."
      }
    ],
    aiBox: {
      title: "AI-Ready Architecture",
      description: "Built to integrate seamlessly with the latest AI tools for real estate agents.",
      link: "Learn more about AI integration"
    }
  },
  testimonials: {
    headline: "Real Agents. Real Results.",
    list: [
      {
        id: 1,
        name: "Sarah Jenkins",
        role: "Top 1% Producer, NYC",
        image: "https://picsum.photos/100/100?random=1",
        text: "I was drowning in disorganized spreadsheets. RealKit completely streamlined my business. I closed 3 extra deals last month just by following the follow-up system.",
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
    subheadline: "Join hundreds of agents scaling their business with RealKit.",
    listHeader: "What's Included:",
    items: [
      { name: "RealKit Notion CRM System", value: 497 },
      { name: "The Ultimate Script Bible (50+ Scripts)", value: 197 },
      { name: "Luxury Listing Presentation Template", value: 147 },
      { name: "365-Day Social Media Content Calendar", value: 97 },
      { name: "Email Nurture Sequence Pack", value: 197 },
      { name: "Bonus: Buyer Consultation Guide", value: 97 },
      { name: "Objection Handling Flashcards", value: 47 },
      { name: "Open House Sign-in Sheets", value: 27 },
    ],
    mainFeatures: [
      "Complete Notion CRM Dashboard",
      "50+ Battle-Tested Scripts",
      "Luxury Marketing Suite",
      "Automated Email Flows"
    ],
    bonuses: [
      { title: "Buyer Consultation Guide", value: "$97" },
      { title: "Objection Flashcards", value: "$47" },
      { title: "Open House Sign-ins", value: "$27" }
    ],
    totalValue: "Total Value",
    offerLabel: "Limited Time Offer",
    urgency: "Price increases in 24 hours",
    secureLabel: "Secure SSL Payment",
    cta: "Get Access Now",
    subtext: "One-time payment. Lifetime access."
  },
  faq: {
    headline: "Frequently Asked Questions",
    items: [
      {
        question: "Do I need to pay a monthly subscription?",
        answer: "Never. RealKit is a one-time purchase. You own the templates, the system, and the assets forever."
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
      email: "support@realkit.com",
      support: "24/7 Support via Email"
    }
  },
  finalCta: {
    headline: "Ready to Install a Proven System into Your Real Estate Business?",
    subheadline: "You can keep guessing what to say, what to post, and what to send… or you can plug in RealKit and start using scripts, templates, and systems that are ready today.",
    pricing: {
      today: "Today: $97 (one-time)",
      value: "Total Value: $1,300+",
      guarantee: "30-day money-back guarantee"
    },
    cta: "Get Instant Access to RealKit Now",
    subtext: "You’re one decision away from a more predictable real estate business."
  },
  modal: {
    headline: "Unlock the $49 Special Offer",
    subheadline: "To access RealKit for the $49 special offer, please enter your email address below.",
    emailPlaceholder: "Enter your email address",
    submitButton: "Get Access Now",
    disclaimer: "We respect your privacy. Unsubscribe at any time."
  },
  footer: {
    rights: "All rights reserved.",
    links: ["Privacy Policy", "Terms of Service"]
  }
};