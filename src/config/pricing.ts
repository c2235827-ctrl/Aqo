export interface PricingPlanConfig {
  id: 'free' | 'premium';
  name: string;
  summary: string;
  priceDisplay: string;
  billingStatus: string;
  highlights: string[];
  ctaLabel: string;
  emphasized: boolean;
}

export interface ComparisonRow {
  capability: string;
  freeTier: string;
  premiumTier: string;
}

export const PRICING_CONFIG = {
  paymentsOperational: false,
  earlyAccessCard: {
    label: 'Pricing & Access',
    headline: 'Early Access & Configurable Plans',
    description:
      'Aqoriel is preparing structured Free and Premium access tiers alongside upcoming subscription support. Final pricing and usage allowances are intentionally left unfixed until billing and service tiers are finalized.',
    highlights: [
      'Free Tier — Basic access (if offered) with limited AI usage and selected academic features.',
      'Premium Tier — Expanded AI access, advanced academic assistance, higher usage limits, and additional learning capabilities.',
      'No subscriptions or paid checkout flows are active on this website yet.',
    ],
    primaryCtaLabel: 'Open @aqoriel_bot on Telegram',
    secondaryCtaLabel: 'View Planned Tier Structure',
  },
  plans: [
    {
      id: 'free',
      name: 'Free Plan',
      summary:
        'Designed for students exploring core academic assistance with foundational access.',
      priceDisplay: 'To be announced',
      billingStatus: 'Basic access, if offered · Limits configurable',
      highlights: [
        'Basic access, if offered',
        'Limited AI usage',
        'Selected academic features',
        'Direct access via @aqoriel_bot on Telegram',
      ],
      ctaLabel: 'Explore on Telegram',
      emphasized: false,
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      summary:
        'Built for intensive coursework, lecture processing, document study, and examination preparation.',
      priceDisplay: 'To be announced',
      billingStatus: 'Subscription billing not yet active · Configurable',
      highlights: [
        'Expanded AI access',
        'Advanced academic assistance',
        'Higher usage limits',
        'Additional learning capabilities',
      ],
      ctaLabel: 'Start with Aqoriel',
      emphasized: true,
    },
  ] as PricingPlanConfig[],
  comparisonRows: [
    {
      capability: 'Access Channel',
      freeTier: 'Official Telegram Bot (@aqoriel_bot)',
      premiumTier: 'Official Telegram Bot (@aqoriel_bot)',
    },
    {
      capability: 'AI Usage Allowance',
      freeTier: 'Limited usage (configurable)',
      premiumTier: 'Higher usage limits (configurable)',
    },
    {
      capability: 'AI Academic Tutor',
      freeTier: 'Selected core assistance',
      premiumTier: 'Expanded academic assistance',
    },
    {
      capability: 'Lecture & Document Processing',
      freeTier: 'Selected capabilities',
      premiumTier: 'Advanced processing & workflows',
    },
    {
      capability: 'Study & Exam Preparation Tools',
      freeTier: 'Foundational access',
      premiumTier: 'Additional learning capabilities',
    },
    {
      capability: 'Subscription Checkout',
      freeTier: 'No payment required',
      premiumTier: 'Pending future payment integration',
    },
  ] as ComparisonRow[],
  pricingFaqs: [
    {
      question: 'Why are final subscription prices not listed yet?',
      answer:
        'Final pricing and usage allowances are still being calibrated by TerraNova Systems Ltd. Rather than publishing speculative numbers, Aqoriel keeps pricing configurable until subscription billing is formally introduced.',
    },
    {
      question: 'Are paid subscriptions or checkout active right now?',
      answer:
        'No. Payment processing and paid tier billing are not yet operational on this website. Visitors can access the assistant directly on Telegram via @aqoriel_bot.',
    },
    {
      question: 'How will Premium subscriptions be handled in the future?',
      answer:
        'The platform architecture is prepared for future subscription options, including potential Telegram Stars support and automated verification, once finalized and announced.',
    },
    {
      question: 'Will a Free Plan remain available?',
      answer:
        'A Free Plan structure with basic access (if offered), limited AI usage, and selected academic features is planned alongside the Premium tier. Exact thresholds will be published when finalized.',
    },
  ],
} as const;
