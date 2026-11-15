export interface HomeFeatureItem {
  id: string;
  number: string;
  title: string;
  description: string;
  bullets?: string[];
  iconName:
    | 'graduationCap'
    | 'mic'
    | 'search'
    | 'fileText'
    | 'notebookPen'
    | 'layers'
    | 'checkSquare'
    | 'calendar';
  spanWide?: boolean;
}

export interface DetailedFeatureItem {
  id: string;
  number: string;
  title: string;
  explanation: string;
  benefits: string[];
  previewLabel: string;
  previewPrompt: string;
  previewResponseTitle: string;
  previewResponseLines: string[];
  iconName:
    | 'graduationCap'
    | 'mic'
    | 'search'
    | 'fileText'
    | 'notebookPen'
    | 'layers'
    | 'helpCircle'
    | 'award'
    | 'calendar';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const HOME_CONTENT = {
  hero: {
    headline: 'Your Academic World. One Intelligent Companion.',
    description:
      'Meet Aqoriel, your AI-powered academic companion. Understand difficult concepts, transform lectures into organized notes, research smarter, and prepare for examinations with intelligent assistance.',
    primaryCta: 'Start Learning',
    secondaryCta: 'Explore Features',
  },
  introduction: {
    heading: 'A Smarter Way to Approach Learning',
    description:
      'Academic life involves more than attending lectures and reading textbooks. Students must research, understand complex materials, complete assignments, and prepare for examinations. Aqoriel brings intelligent academic assistance into one experience.',
    pillars: [
      {
        number: '01',
        title: 'Learn with clarity.',
        description:
          'Break down dense theories, equations, and unfamiliar topics through structured, step-by-step explanations tailored to your pace.',
      },
      {
        number: '02',
        title: 'Study with intelligence.',
        description:
          'Turn raw lecture recordings, readings, and course documents into structured revision guides, flashcards, and targeted practice.',
      },
      {
        number: '03',
        title: 'Stay academically organized.',
        description:
          'Keep study sessions, assignment priorities, research outlines, and examination preparation aligned in one focused workflow.',
      },
    ],
  },
  featuresSection: {
    heading: 'Everything You Need for Smarter Learning',
    subheading:
      'Eight focused academic capabilities engineered to support comprehension, organization, and exam readiness.',
    items: [
      {
        id: 'ai-academic-tutor',
        number: '01',
        title: 'AI Academic Tutor',
        description:
          'An intelligent academic assistant that helps students understand difficult concepts, explore subjects, solve problems, and receive step-by-step explanations.',
        iconName: 'graduationCap',
        spanWide: true,
      },
      {
        id: 'lecture-assistant',
        number: '02',
        title: 'Lecture Assistant',
        description:
          'Transform recorded lectures into structured study assets ready for review.',
        bullets: [
          'Full transcripts',
          'Structured lecture notes',
          'Summaries',
          'Important definitions',
          'Key concepts',
          'Revision materials',
          'Potential examination questions',
        ],
        iconName: 'mic',
        spanWide: true,
      },
      {
        id: 'academic-research',
        number: '03',
        title: 'Academic Research',
        description:
          'Help students explore academic subjects, understand research papers, organize information, and develop research outlines.',
        iconName: 'search',
      },
      {
        id: 'document-intelligence',
        number: '04',
        title: 'Document Intelligence',
        description:
          'Allow students to work with academic documents and use AI to summarize content, explain difficult sections, extract important information, and answer questions about documents.',
        bullets: [
          'Summarize content',
          'Explain difficult sections',
          'Extract important information',
          'Answer questions about documents',
        ],
        iconName: 'fileText',
      },
      {
        id: 'smart-notes',
        number: '05',
        title: 'Smart Notes',
        description:
          'Organize academic materials and generate structured study notes.',
        iconName: 'notebookPen',
      },
      {
        id: 'flashcards',
        number: '06',
        title: 'Flashcards',
        description:
          'Turn lecture materials, notes, and documents into interactive learning cards.',
        iconName: 'layers',
      },
      {
        id: 'quizzes-exam-prep',
        number: '07',
        title: 'Quizzes and Exam Preparation',
        description:
          'Generate practice questions, test knowledge, explain answers, and identify weak learning areas.',
        iconName: 'checkSquare',
      },
      {
        id: 'study-planning',
        number: '08',
        title: 'Study Planning',
        description:
          'Help students organize study sessions, assignments, academic deadlines, examination preparation, and learning priorities.',
        bullets: [
          'Study sessions',
          'Assignments',
          'Academic deadlines',
          'Examination preparation',
          'Learning priorities',
        ],
        iconName: 'calendar',
      },
    ] as HomeFeatureItem[],
  },
  howItWorks: {
    heading: 'Getting Started Is Simple',
    ctaLabel: 'Start with Aqoriel',
    steps: [
      {
        step: 'STEP 1',
        number: '01',
        title: 'Open Aqoriel',
        description: 'Access the official Aqoriel assistant through Telegram.',
      },
      {
        step: 'STEP 2',
        number: '02',
        title: 'Tell Aqoriel What You Need',
        description:
          'Ask academic questions, request explanations, submit supported learning materials, or seek research assistance.',
      },
      {
        step: 'STEP 3',
        number: '03',
        title: 'Learn Smarter',
        description:
          'Receive intelligent academic assistance to support your learning and organization.',
      },
    ],
  },
  telegramSection: {
    heading: 'Your Academic Companion Is Just a Message Away.',
    description:
      'Access Aqoriel directly through Telegram. Start a conversation, explore academic assistance, and make your learning experience more intelligent.',
    cardDescription:
      'Official AI academic assistant by TerraNova Systems Ltd. Available directly inside Telegram for concept explanations, lecture synthesis, document study, and revision.',
    buttonLabel: 'Open Telegram',
  },
  whyAqoriel: {
    heading: 'Built Around the Way Students Learn',
    description:
      'University and secondary coursework rarely happens in a neat linear sequence. Aqoriel aligns with real study habits—bringing explanations, lecture synthesis, document analysis, and revision into a single calm channel.',
    benefits: [
      {
        title: 'Academic assistance in one place.',
        detail:
          'Replace scattered tools with one coherent assistant for tutoring, notes, research, and study schedules.',
      },
      {
        title: 'Better understanding of complex subjects.',
        detail:
          'Move beyond surface answers with clear, step-by-step conceptual breakdowns across disciplines.',
      },
      {
        title: 'More organized lecture materials.',
        detail:
          'Convert dense audio or lecture notes into structured definitions, summaries, and key concepts.',
      },
      {
        title: 'Efficient revision.',
        detail:
          'Focus revision time on flashcards, practice questions, and areas where understanding needs reinforcement.',
      },
      {
        title: 'Intelligent document assistance.',
        detail:
          'Work directly through academic papers and readings by asking targeted questions and extracting key points.',
      },
      {
        title: 'Convenient access through Telegram.',
        detail:
          'Start immediately inside an application students already use daily, without installing another standalone dashboard.',
      },
    ],
  },
  aboutPreview: {
    heading: 'Introducing Aqoriel',
    description:
      'Aqoriel is an artificial intelligence-powered academic assistant designed to support students throughout their educational journey. By combining intelligent learning assistance, academic research support, document understanding, and study productivity tools, Aqoriel aims to make academic work more organized and accessible.',
    visionHeading: 'Our Vision',
    visionText:
      'To make intelligent academic assistance more accessible, helping learners understand more, organize better, and approach their educational goals with confidence.',
    companyLine: 'Aqoriel is developed and owned by TerraNova Systems Ltd.',
  },
  faqs: [
    {
      question: 'What is Aqoriel?',
      answer:
        'Aqoriel is an AI-powered academic companion developed by TerraNova Systems Ltd. It helps students understand complex subjects, organize lecture materials, analyze academic documents, support research, and prepare for examinations.',
    },
    {
      question: 'Who is Aqoriel designed for?',
      answer:
        'Aqoriel is designed for students and learners across academic disciplines who want clearer explanations, structured lecture and reading notes, and more organized revision workflows.',
    },
    {
      question: 'How does the AI Tutor work?',
      answer:
        'Through Telegram, you can ask questions about coursework, request step-by-step problem explanations, or explore unfamiliar concepts in depth so you build genuine comprehension rather than just reading a final answer.',
    },
    {
      question: 'Can Aqoriel summarize recorded lectures?',
      answer:
        'Aqoriel’s Lecture Assistant is designed to process supported recorded lectures into transcripts, structured lecture notes, concise summaries, key definitions, and potential revision questions.',
    },
    {
      question: 'Can I upload academic documents?',
      answer:
        'Yes, Aqoriel’s Document Intelligence workflows are built to help students work with supported academic documents—summarizing content, explaining challenging passages, extracting key points, and answering questions about the material.',
    },
    {
      question: 'Can Aqoriel help with research?',
      answer:
        'Yes. Aqoriel assists students in exploring academic topics, breaking down dense research papers, organizing findings, and structuring clear research outlines.',
    },
    {
      question: 'How do I access Aqoriel?',
      answer:
        'Aqoriel is accessed directly through its official Telegram bot at https://t.me/aqoriel_bot (@aqoriel_bot). There is no separate web dashboard or standalone mobile app required.',
    },
    {
      question: 'Is Aqoriel available on Telegram?',
      answer:
        'Yes. Telegram is Aqoriel’s primary access channel. You can open the official assistant anytime at https://t.me/aqoriel_bot or by searching for @aqoriel_bot in Telegram.',
    },
    {
      question: 'Does Aqoriel offer premium subscriptions?',
      answer:
        'A structured Free and Premium plan model is planned, with Premium offering expanded AI access, higher usage limits, and advanced academic assistance. Subscription pricing and payment integration are not yet finalized or active.',
    },
    {
      question: 'How can I contact support?',
      answer:
        'You can reach out through the Contact page on this website for general, technical, product, or business enquiries, or connect directly with @aqoriel_bot on Telegram. Official support email routing will be added once the dedicated Aqoriel mailbox is configured.',
    },
  ] as FaqItem[],
  finalCta: {
    headline: 'Make Your Academic Journey More Intelligent.',
    supportingText:
      'Start exploring a smarter approach to learning with Aqoriel.',
    buttonLabel: 'Get Started with Aqoriel',
  },
};

export const FEATURES_PAGE_CONTENT: DetailedFeatureItem[] = [
  {
    id: 'ai-tutor',
    number: '01',
    title: 'AI Tutor',
    explanation:
      'An intelligent academic companion built to clarify complex topics, guide problem-solving step by step, and adapt explanations to your current level of understanding.',
    benefits: [
      'Clarifies foundational and advanced concepts across subjects',
      'Walks through reasoning step by step instead of skipping logic',
      'Supports follow-up questions until the underlying idea is clear',
    ],
    previewLabel: 'Tutor Session · Thermodynamics',
    previewPrompt: 'Explain entropy change in a reversible vs. irreversible process.',
    previewResponseTitle: 'Step-by-Step Breakdown',
    previewResponseLines: [
      '1. State function property: ΔS depends only on initial and final equilibrium states.',
      '2. Reversible path: ΔS_universe = ΔS_sys + ΔS_surr = 0.',
      '3. Irreversible path: Spontaneous dissipation ensures ΔS_universe > 0.',
    ],
    iconName: 'graduationCap',
  },
  {
    id: 'lecture-assistant',
    number: '02',
    title: 'Lecture Assistant',
    explanation:
      'Convert supported recorded lectures into structured study artifacts so you spend less time transcribing and more time reviewing material.',
    benefits: [
      'Produces full transcripts alongside concise summaries',
      'Extracts important definitions, theorems, and core concepts',
      'Identifies potential examination questions from lecture emphasis',
    ],
    previewLabel: 'Lecture Synthesis · Neurobiology 204',
    previewPrompt: 'Process 48-minute lecture audio into revision notes.',
    previewResponseTitle: 'Structured Lecture Output',
    previewResponseLines: [
      'Core Concept: Action potential propagation along myelinated axons.',
      'Key Definition: Saltatory conduction via Nodes of Ranvier.',
      'Potential Exam Prompt: Compare conduction velocity vs. axon diameter.',
    ],
    iconName: 'mic',
  },
  {
    id: 'academic-research',
    number: '03',
    title: 'Academic Research',
    explanation:
      'Navigate scholarly topics systematically—from understanding dense journal papers to organizing arguments into structured research outlines.',
    benefits: [
      'Breaks down research paper methodology, findings, and limitations',
      'Helps organize themes, evidence, and literature comparisons',
      'Generates logical essay and thesis outline structures',
    ],
    previewLabel: 'Research Outline · Economics',
    previewPrompt: 'Organize literature themes on central bank digital currencies.',
    previewResponseTitle: 'Structured Research Framework',
    previewResponseLines: [
      'Section I: Monetary transmission and commercial bank disintermediation.',
      'Section II: Privacy architecture vs. regulatory traceability trade-offs.',
      'Section III: Empirical pilot evidence and cross-border settlement.',
    ],
    iconName: 'search',
  },
  {
    id: 'document-intelligence',
    number: '04',
    title: 'Document Intelligence',
    explanation:
      'Work interactively with supported academic readings, syllabi, and handouts—asking direct questions and isolating critical sections quickly.',
    benefits: [
      'Summarizes dense chapters and technical reports accurately',
      'Explains difficult paragraphs in clear, plain academic prose',
      'Extracts definitions, formulas, and answers document-specific questions',
    ],
    previewLabel: 'Document Q&A · Constitutional Law PDF',
    previewPrompt: 'Summarize the dissenting reasoning on page 14.',
    previewResponseTitle: 'Document Extraction',
    previewResponseLines: [
      'Key Holding Contrast: Dissent argues statutory text constrains agency scope.',
      'Extracted Principle: Proportionality standard applied to administrative review.',
    ],
    iconName: 'fileText',
  },
  {
    id: 'smart-notes',
    number: '05',
    title: 'Smart Notes',
    explanation:
      'Transform fragmented course notes and reading highlights into clean, hierarchically structured study notes ready for long-term retention.',
    benefits: [
      'Normalizes messy rough notes into clear topic hierarchies',
      'Highlights definitions, comparisons, and takeaway summaries',
      'Keeps module materials consistent across a semester',
    ],
    previewLabel: 'Smart Notes · Linear Algebra',
    previewPrompt: 'Format rough notes on eigenvalues and diagonalization.',
    previewResponseTitle: 'Clean Module Notes',
    previewResponseLines: [
      'Definition: Av = λv where v ≠ 0 is an eigenvector of matrix A.',
      'Condition: An n×n matrix is diagonalizable iff it has n linearly independent eigenvectors.',
    ],
    iconName: 'notebookPen',
  },
  {
    id: 'flashcards',
    number: '06',
    title: 'Flashcards',
    explanation:
      'Turn lecture summaries, smart notes, and reading extracts into concise active-recall question-and-answer cards.',
    benefits: [
      'Converts key terms and mechanisms into focused recall prompts',
      'Pairs concise front prompts with clear conceptual explanations',
      'Reduces manual card creation time before revision blocks',
    ],
    previewLabel: 'Active Recall Deck · Pharmacology',
    previewPrompt: 'Create 3 recall cards from autonomic receptor notes.',
    previewResponseTitle: 'Generated Flashcard Preview',
    previewResponseLines: [
      'Q: Primary second messenger coupled to β1-adrenergic receptors?',
      'A: Gs-protein activation increases adenylyl cyclase and intracellular cAMP.',
    ],
    iconName: 'layers',
  },
  {
    id: 'quizzes',
    number: '07',
    title: 'Quizzes',
    explanation:
      'Test your grasp of a topic on demand with targeted practice questions, instant answer explanations, and diagnostic feedback.',
    benefits: [
      'Generates topic-specific practice questions on request',
      'Explains why an option is right or wrong in detail',
      'Highlights weak areas requiring further review',
    ],
    previewLabel: 'Diagnostic Quiz · Organic Chemistry',
    previewPrompt: 'Quiz me on SN1 vs. SN2 reaction stereochemistry.',
    previewResponseTitle: 'Practice Question 01',
    previewResponseLines: [
      'Prompt: Predict the stereochemical outcome of an SN2 substitution at a chiral center.',
      'Explanation Focus: Backside nucleophilic attack yields Walden inversion.',
    ],
    iconName: 'helpCircle',
  },
  {
    id: 'examination-preparation',
    number: '08',
    title: 'Examination Preparation',
    explanation:
      'Consolidate months of coursework into structured pre-exam revision sequences focused on high-yield concepts and past-style prompts.',
    benefits: [
      'Synthesizes multi-lecture modules into cohesive exam checklists',
      'Surfaces probable synthesis and essay questions across topics',
      'Guides structured self-testing under realistic exam framing',
    ],
    previewLabel: 'Exam Readiness · Macroeconomic Policy',
    previewPrompt: 'Build a pre-exam checklist covering Weeks 1–8.',
    previewResponseTitle: 'Revision Focus Map',
    previewResponseLines: [
      'Priority Area A: IS-LM equilibrium shifts under liquidity traps.',
      'Priority Area B: Monetary rule credibility and inflation expectations.',
    ],
    iconName: 'award',
  },
  {
    id: 'study-planning',
    number: '09',
    title: 'Study Planning',
    explanation:
      'Organize study sessions, coursework milestones, assignment deadlines, and exam preparation priorities in a realistic schedule.',
    benefits: [
      'Balances daily study blocks across multiple subjects',
      'Aligns revision intensity with upcoming assignment and exam dates',
      'Helps clarify what deserves attention first during busy weeks',
    ],
    previewLabel: 'Study Schedule · Finals Week',
    previewPrompt: 'Prioritize 3 exams across the next 10 days.',
    previewResponseTitle: 'Balanced Study Allocation',
    previewResponseLines: [
      'Days 1–3: Concept consolidation & weak-topic remediation.',
      'Days 4–7: Timed practice quizzes & document review.',
      'Days 8–10: Active recall flashcards & light synthesis.',
    ],
    iconName: 'calendar',
  },
];

export const ABOUT_PAGE_CONTENT = {
  intro: {
    title: 'About Aqoriel',
    lead: 'Aqoriel is an artificial intelligence-powered academic assistant developed and owned by TerraNova Systems Ltd.',
    body: 'Designed as a calm, structured learning companion, Aqoriel brings together concept tutoring, lecture synthesis, academic research support, document understanding, and exam preparation inside an accessible Telegram experience.',
  },
  sections: [
    {
      number: '01',
      title: 'The Problem It Addresses',
      paragraphs: [
        'Modern students navigate fragmented academic workflows. Lectures move quickly, readings are dense, research expectations are high, and examination preparation often competes with overlapping deadlines across multiple courses.',
        'Many learners spend disproportionate time organizing raw notes or searching across disconnected tools rather than deepening actual comprehension. Aqoriel addresses this gap by unifying explanation, synthesis, and revision in one focused assistant.',
      ],
    },
    {
      number: '02',
      title: 'Mission',
      paragraphs: [
        'Aqoriel’s mission is to provide reliable, structured academic assistance that strengthens genuine student understanding—helping learners clarify difficult material, organize coursework efficiently, and prepare thoughtfully for assessments.',
      ],
    },
    {
      number: '03',
      title: 'Vision',
      paragraphs: [
        'To make intelligent academic assistance more accessible, helping learners understand more, organize better, and approach their educational goals with confidence.',
      ],
    },
    {
      number: '04',
      title: 'Academic Technology Approach',
      paragraphs: [
        'Rather than forcing students to learn another complex software dashboard, Aqoriel meets learners directly inside Telegram via @aqoriel_bot. This conversational approach lowers friction while supporting structured academic outputs—from step-by-step tutoring and lecture summaries to flashcards, practice quizzes, and study planning.',
        'The platform is built cleanly around separation of concerns: the public website serves as Aqoriel’s transparent information and documentation hub, while the Telegram bot operates as the dedicated interactive assistant.',
      ],
    },
    {
      number: '05',
      title: 'TerraNova Systems Ltd',
      paragraphs: [
        'Aqoriel is developed and owned by TerraNova Systems Ltd. TerraNova Systems Ltd is the parent technology company responsible for Aqoriel’s product architecture, engineering standards, and ongoing development.',
        'Aqoriel represents TerraNova Systems Ltd’s dedicated product brand in educational technology and intelligent academic productivity.',
      ],
    },
  ],
};

export const LEGAL_DOCUMENTS = {
  privacyPolicy: {
    title: 'Privacy Policy',
    statusNote:
      'Editable Draft — This document is prepared as an editable baseline pending finalization of Aqoriel’s production service architecture, official support mailbox, and data retention policies.',
    lastReviewed: 'Configurable before public launch',
    sections: [
      {
        heading: '1. Overview & Data Controller',
        body: [
          'Aqoriel is an academic assistant product developed and owned by TerraNova Systems Ltd ("we", "our", or "us"). This Privacy Policy outlines how information may be handled across the Aqoriel informational website and connected services once finalized.',
        ],
      },
      {
        heading: '2. Website Information & Enquiries',
        body: [
          'This website functions primarily as an informational product and company site. It does not require user account registration, login credentials, or student dashboards.',
          'When you use the Contact page form, the fields submitted (full name, email address, enquiry category, subject, and message) are validated to process your enquiry. Until the official Aqoriel support mailbox is connected, submitted messages are not transmitted to an external email inbox.',
        ],
      },
      {
        heading: '3. Telegram Bot Interaction (@aqoriel_bot)',
        body: [
          'Accessing Aqoriel’s AI assistant takes place directly on Telegram via https://t.me/aqoriel_bot. Interactions on Telegram are subject to Telegram’s own platform terms and privacy practices, alongside Aqoriel’s finalized service data handling policy.',
          'Specific details regarding message processing, document handling, retention periods, and third-party AI model providers will be documented here prior to full commercial operation.',
        ],
      },
      {
        heading: '4. Cookies & Analytics',
        body: [
          'This baseline website does not embed invasive third-party advertising trackers. If privacy-respecting analytics are enabled in a future release, this section will be updated to specify the exact tool and data scope.',
        ],
      },
      {
        heading: '5. Contact & Updates',
        body: [
          'Questions regarding privacy or data governance for Aqoriel and TerraNova Systems Ltd may be directed through the Contact page once the official Aqoriel support mailbox is published.',
        ],
      },
    ],
  },
  termsOfService: {
    title: 'Terms of Service',
    statusNote:
      'Editable Draft — This document is prepared as an editable template pending finalization of Aqoriel’s service tiers, billing terms, and operational policies by TerraNova Systems Ltd.',
    lastReviewed: 'Configurable before public launch',
    sections: [
      {
        heading: '1. Acceptance & Scope',
        body: [
          'These Terms of Service govern access to the official Aqoriel website operated by TerraNova Systems Ltd. By browsing this website, you agree to use it lawfully and in accordance with these terms.',
        ],
      },
      {
        heading: '2. Purpose of the Website',
        body: [
          'This website provides official product information about Aqoriel and directs visitors to the official Telegram assistant (@aqoriel_bot). Content on this website is informational and may be updated as features, plans, and integrations evolve.',
        ],
      },
      {
        heading: '3. Academic Integrity & Responsible Use',
        body: [
          'Aqoriel is designed to support learning, comprehension, lecture organization, research structuring, and examination preparation. Users remain responsible for upholding the academic integrity standards and institutional policies of their school, college, or university.',
        ],
      },
      {
        heading: '4. Subscriptions & Pricing Availability',
        body: [
          'No paid subscriptions, billing workflows, or payment processing are currently active on this website. Any future Free or Premium tiers, usage limits, or Telegram Stars subscription terms will be governed by updated terms published prior to activation.',
        ],
      },
      {
        heading: '5. Intellectual Property',
        body: [
          'The Aqoriel name, website materials, and branding are the property of TerraNova Systems Ltd. Unauthorized reproduction or impersonation of the Aqoriel brand or @aqoriel_bot handle is prohibited.',
        ],
      },
      {
        heading: '6. Changes to These Terms',
        body: [
          'TerraNova Systems Ltd may revise this document prior to and following full service launch as technical, legal, and payment architectures are finalized.',
        ],
      },
    ],
  },
};
