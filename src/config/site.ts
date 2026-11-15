export interface NavItem {
  label: string;
  to: string;
  sectionId?: string;
}

export const SITE_CONFIG = {
  brandName: 'Aqoriel',
  parentCompany: 'TerraNova Systems Ltd',
  tagline: 'An intelligent academic companion.',
  telegramHandle: '@aqoriel_bot',
  telegramUrl: 'https://t.me/aqoriel_bot',
  siteUrl: import.meta.env.VITE_SITE_URL || '',
  contact: {
    mailboxConfigured: false,
    mailboxPlaceholderLabel: 'Official Aqoriel mailbox pending configuration',
    enquiries: [
      {
        title: 'General Enquiries',
        description:
          'Questions about Aqoriel, academic capabilities, or product availability.',
      },
      {
        title: 'Technical Support',
        description:
          'Assistance with accessing @aqoriel_bot or reporting unexpected behaviour.',
      },
      {
        title: 'Product Enquiries',
        description:
          'Feedback on study workflows, supported academic formats, or feature requests.',
      },
      {
        title: 'Business Enquiries',
        description:
          'Institutional discussions and corporate correspondence with TerraNova Systems Ltd.',
      },
    ],
  },
  navigation: [
    { label: 'Home', to: '/' },
    { label: 'Features', to: '/features' },
    { label: 'How It Works', to: '/#how-it-works', sectionId: 'how-it-works' },
    { label: 'About', to: '/about' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Contact', to: '/contact' },
  ] as NavItem[],
  seo: {
    defaultTitle: 'Aqoriel | Your Intelligent Academic Companion',
    defaultDescription:
      'Discover Aqoriel, an AI-powered academic assistant for lecture notes, research, learning, document understanding, and exam preparation.',
  },
} as const;
