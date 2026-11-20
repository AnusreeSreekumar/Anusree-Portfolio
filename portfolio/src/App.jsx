import React, { useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from 'framer-motion';
import {
  Moon,
  Sun,
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Play,
  Send,
  Sparkles,
  CheckCircle2,
  Download,
  Mail,
  MapPin,
  Phone,
  Star,
  GraduationCap,
  Briefcase,
} from 'lucide-react';

/**
 * ============================================================================
 * DATA MODULE (src/data.js structure)
 * Centralized static content sourced directly from Anusree KS's CVs and
 * hero screenshot (image_324d05.png).
 * ============================================================================
 */
export const SITE_DATA = {
  brand: {
    name: 'Anusree',
    fullName: 'Anusree KS',
    role: 'Distributed Systems, MERN Stack & Blockchain Developer',
    location: 'Thiruvananthapuram, Kerala, India',
    email: 'anusagan1812@gmail.com',
    phone: '+91 9048372952',
    linkedin: 'https://www.linkedin.com',
    github: 'https://github.com',
  },
  navLinks: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'blogs', label: 'Blogs', href: '#about' },
    { id: 'about', label: 'About Me', href: '#about' },
    { id: 'testimonials', label: 'Testimonials', href: '#cta' },
  ],
  hero: {
    eyebrow: 'BACKEND, BLOCKCHAIN & FULL-STACK DEVELOPER',
    // Exact headline & subtext from attached screenshot (image_324d05.png)
    headlineLines: [
      { text: 'Twelve years', highlight: false },
      { text: 'breaking', highlight: true },
      { text: 'software. Now I', highlight: false },
      { text: 'build it.', highlight: true },
    ],
    description:
      "Backend and blockchain developer from Thiruvananthapuram. She builds Node.js and React systems and blockchain DApps with a tester's eye for what can go wrong.",
    primaryCta: 'Portfolio',
    secondaryCta: 'Watch Showreel',
    reviewsCount: '12+ Years QA & 2+ Years Dev',
    reviewsRating: '',
    reviewsSubtitle: 'Zero Major Defects in AWS Migration & Production Systems',
    handwrittenNote: ['Build', 'Test', 'Deploy.'],
    badgeText: '• BACKEND & BLOCKCHAIN DEVELOPER • ',
    quoteText:
      'Brings deep quality thinking into every development role — ensuring robust, reliable, well-tested software.',
    portraitSrc: '/images/anusree-hero.svg',
    portraitAlt:
      'Portrait of Anusree KS, Backend, Blockchain, and Full-Stack Developer from Thiruvananthapuram',
    skillPills: [
      { label: 'Node.js & Express', variant: 'dark', delay: 0 },
      { label: 'React.js', variant: 'white', delay: 0.45 },
      { label: 'Solidity & ICP', variant: 'amber', delay: 0.9 },
      { label: 'Hyperledger Fabric', variant: 'white', delay: 1.35 },
      { label: 'Kafka & Redis', variant: 'dark', delay: 1.8 },
      { label: 'Playwright QA', variant: 'amber', delay: 2.25 },
    ],
    avatars: [
      { initials: 'cM', bg: '#F26B1D', text: '#FFFFFF', name: 'chargeMOD Engineering' },
      { initials: 'BB', bg: '#2B1A10', text: '#FAD9A6', name: 'BlockseBlock Team' },
      { initials: 'DB', bg: '#F9A03F', text: '#2B1A10', name: 'Dun & Bradstreet IME' },
      { initials: 'CT', bg: '#6B5848', text: '#FFFFFF', name: 'Cognizant QA Team' },
    ],
  },
  marqueeItems: [
    'Node.js & Microservices',
    'React.js Dashboards',
    'ICP & Solidity Smart Contracts',
    'Hyperledger Fabric',
    'Kafka Event-Driven Systems',
    'Playwright Automation',
  ],
  services: {
    eyebrow: 'My Services',
    headingPrefix: 'How I Bring',
    headingHighlight: 'Ideas to Life',
    ctaLabel: 'View All Services',
    items: [
      {
        number: '01',
        title: 'Backend & Distributed Systems',
        description:
          'Architecting scalable REST APIs, real-time Socket.io workflows, and multi-tenant engines with role-based JWT security.',
        tags: [
          'Node.js & Express',
          'TypeScript & NestJS',
          'Kafka Event-Driven',
          'Redis & Microservices',
        ],
      },
      {
        number: '02',
        title: 'Full-Stack Web & Dashboard Development',
        description:
          'Building modern, responsive web applications and interactive dashboards with dynamic filtering, search, and seamless user experiences.',
        tags: [
          'React.js & Next.js',
          'Real-Time Kanban Views',
          'Enterprise CRM & PBAC',
          'Responsive UI/UX Design',
        ],
      },
      {
        number: '03',
        title: 'Blockchain & Web3 DApps',
        description:
          'Developing decentralized applications, cross-chain asset swap protocols, and distributed ledger pipelines for energy and transparency.',
        tags: [
          'ICP Blockchain & Canisters',
          'Solidity Smart Contracts',
          'Hyperledger Fabric',
          'Cross-Chain & Tokenisation',
        ],
      },
      {
        number: '04',
        title: 'Test Automation & QA Engineering',
        description:
          'Bringing 12+ years of quality engineering to automate end-to-end workflows, validate data pipelines, and guarantee zero-defect releases.',
        tags: [
          'Playwright & Selenium',
          'BDD Test Suites',
          'REST/SOAP API Validation',
          'AWS S3 & Athena Data QA',
        ],
      },
      {
        number: '05',
        title: 'System Architecture & Technical Docs',
        description:
          'Designing resilient system architectures, third-party integrations, and clear engineering documentation for high-velocity teams.',
        tags: [
          'SLA Workflow Engines',
          'CTI Telephony Integration',
          'Field & Algorithm Specs',
          'Agile & Scrum Delivery',
        ],
      },
    ],
  },
  about: {
    eyebrow: 'About Me',
    headingPrefix: 'Who is',
    headingHighlight: 'Anusree?',
    bio: "Hey there, I'm Anusree KS, a Distributed Systems, MERN Stack, and Blockchain developer from Thiruvananthapuram with 12+ years of QA engineering experience. I build scalable Node.js APIs, interactive React dashboards, and decentralized DApps with a tester's eye for reliability.",
    ctaLabel: 'Download CV',
    experienceValue: '12+',
    experienceLabel: 'Years QA & 2+ Yrs Dev',
    portraitSrc: '/images/anusree-about.svg',
    portraitAlt:
      'Anusree KS — Distributed Systems, Full-Stack MERN, and Blockchain Developer',
    pills: [
      { label: 'Node.js & React', rotation: '-7deg', style: 'peach' },
      { label: 'Blockchain & Web3', rotation: '6deg', style: 'outline' },
      { label: '12+ Yrs QA Mindset', rotation: '-4deg', style: 'white' },
    ],
    credentials: [
      {
        icon: 'education',
        title: 'PG Diploma in Blockchain (2025)',
        detail: 'Digital University Kerala',
      },
      {
        icon: 'education',
        title: 'B.Tech in Computer Science (2009)',
        detail: 'TKM College of Engineering, Kerala University',
      },
      {
        icon: 'work',
        title: 'chargeMOD • BlockseBlock • Cognizant',
        detail: 'Distributed Systems Dev, Blockchain Intern & Senior Test Analyst',
      },
    ],
    cvSummary: {
      title: 'Anusree KS — Curriculum Vitae',
      subtitle:
        'Distributed Systems Developer | MERN Stack & Blockchain Developer | SDET (Thiruvananthapuram, Kerala)',
      highlights: [
        'Distributed Systems Developer at chargeMOD (Sept 2025 – Present): Built SLA-driven L1–L3 ticket automation (Node.js, MongoDB, TypeScript, React, Kafka), multi-tenant Redis shift roster engine, enterprise CRM (NestJS/Next.js), and Hyperledger Fabric solar energy aggregator.',
        'Blockchain Developer Intern at BlockseBlock (June – July 2025): Built a cross-chain asset swap DApp on ICP Blockchain and represented the organization at the World Computer Hacker League (WCHL) Hackathon.',
        'Senior Test Analyst at Cognizant / Dun & Bradstreet IME Platform (Jan 2010 – Mar 2022): Led an 8-member QA team through a Legacy-to-AWS migration with zero major production defects.',
        'Education: PG Diploma in Blockchain (Digital University Kerala, 2025) & B.Tech in Computer Science (TKM College of Engineering, 2009).',
      ],
      skills: [
        'Node.js',
        'React.js',
        'TypeScript',
        'NestJS / Next.js',
        'MongoDB & Redis',
        'Kafka',
        'ICP Blockchain',
        'Solidity',
        'Hyperledger Fabric',
        'Playwright & Selenium',
        'AWS S3 / Athena',
      ],
    },
  },
  projects: {
    eyebrow: 'Featured Projects',
    headingPrefix: 'Some of My',
    headingHighlight: 'Latest Work.',
    ctaLabel: 'View All Projects',
    items: [
      {
        id: 'ticket-automation',
        title: 'Role-Based Ticket System',
        subtitle: 'chargeMOD • Node.js, MongoDB, React & Kafka',
        category: 'Distributed Systems & Full-Stack',
        year: '2025 – Present',
        imageSrc: '/images/project-ticket.svg',
        summary:
          'End-to-end role-based ticket automation platform featuring SLA-driven escalation (L1–L3), dynamic SLA recalculation for reopened tickets, interactive React Kanban dashboards with dynamic filtering/pagination, and real-time Email/Slack notifications via Kafka.',
        bullets: [
          'Designed & implemented L1–L3 SLA-driven escalation workflows using Node.js, TypeScript, and MongoDB.',
          'Built real-time Kanban views, search, and pagination in React.js with JWT role-based access control.',
          'Integrated production Kafka message queues for real-time Email and Slack event alerts.',
        ],
        stack: ['Node.js', 'TypeScript', 'MongoDB', 'React.js', 'Kafka', 'JWT'],
        theme: 'ticket',
      },
      {
        id: 'energy-aggregator',
        title: 'Digital Energy Aggregator',
        subtitle: 'chargeMOD • Hyperledger Fabric, Kafka & IoT',
        category: 'Enterprise Blockchain & IoT',
        year: '2025 – Present',
        imageSrc: '/images/project-energy.svg',
        summary:
          'Pilot Digital Energy Aggregator architecture enabling solar energy tokenisation and monetisation, backed by a scalable IoT telemetry pipeline with real-time data buffering and Hyperledger Fabric distributed ledger recording.',
        bullets: [
          'Architected solar energy tokenisation and monetisation workflows on permissioned ledger infrastructure.',
          'Designed a high-throughput IoT telemetry pipeline with real-time data buffering and Kafka streaming.',
          'Recorded verifiable energy generation events onto Hyperledger Fabric for auditability.',
        ],
        stack: ['Hyperledger Fabric', 'Kafka', 'IoT Telemetry', 'Tokenisation', 'Node.js'],
        theme: 'energy',
      },
      {
        id: 'asset-swap-dapp',
        title: 'Cross-Chain Asset Swap DApp',
        subtitle: 'BlockseBlock • ICP Blockchain & Solidity',
        category: 'Web3 & Cross-Chain DApp',
        year: '2025',
        imageSrc: '/images/project-swap.svg',
        summary:
          'Decentralized cross-chain asset exchange application built on Internet Computer (ICP) Blockchain enabling authenticated users to seamlessly swap ICP tokens for Bitcoin and Ethereum equivalents.',
        bullets: [
          'Built authenticated cross-chain token swap flows for ICP, Bitcoin, and Ethereum equivalents.',
          'Implemented canister architecture and smart contract logic in an Agile sprint team.',
          'Conducted security & confidentiality checks across wallet and swap transactions.',
        ],
        stack: ['ICP Blockchain', 'Solidity', 'Smart Contracts', 'Canisters', 'Web3.js'],
        theme: 'swap',
      },
      {
        id: 'ngo-transparency-dapp',
        title: 'NGO Fund Transparency DApp',
        subtitle: 'WCHL Hackathon • ICP Blockchain & Canisters',
        category: 'Blockchain Social Impact',
        year: '2025',
        imageSrc: '/images/project-ngo.svg',
        summary:
          'Prototype decentralized application developed at the World Computer Hacker League (WCHL) Hackathon on ICP Blockchain to provide immutable donor fund tracking and transparent NGO disbursement auditing.',
        bullets: [
          'Represented BlockseBlock at the World Computer Hacker League (WCHL) Hackathon.',
          'Developed immutable on-chain fund allocation and milestone tracking canisters on ICP.',
          'Delivered a clean, auditable donor verification UI for real-time grant transparency.',
        ],
        stack: ['ICP Blockchain', 'Canisters', 'DApp Architecture', 'Smart Contracts'],
        theme: 'ngo',
      },
    ],
  },
  cta: {
    eyebrow: "LET'S WORK TOGETHER",
    headingLine1: 'Have a Project',
    headingLine2: 'in Mind?',
    description:
      "Let's turn your idea into a resilient, high-performing digital experience. Available for full-stack, blockchain, and QA architecture collaborations from Thiruvananthapuram.",
    buttonLabel: 'Get in Touch',
  },
};

/**
 * ============================================================================
 * REUSABLE PILL BUTTON COMPONENT
 * Enforces rounded-full token, 3px right nudge on hover, and visible focus ring.
 * ============================================================================
 */
const PillButton = ({
  children,
  onClick,
  href,
  variant = 'dark',
  className = '',
  ariaLabel,
  type = 'button',
}) => {
  const baseStyles =
    'group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F26B1D] cursor-pointer select-none';

  const variants = {
    dark: 'bg-[#2B1A10] text-[#FFFFFF] hover:bg-[#3d2618] shadow-sm',
    white: 'bg-[#FFFFFF] text-[#2B1A10] hover:bg-[#FAD9A6] shadow-sm',
    orange: 'bg-[#F26B1D] text-[#FFFFFF] hover:bg-[#d95b12] shadow-sm',
    outline:
      'border-2 border-current bg-transparent hover:bg-[#F26B1D] hover:border-[#F26B1D] hover:text-[#FFFFFF]',
  };

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[3px]"
        aria-hidden="true"
      />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
};

/**
 * ============================================================================
 * EASY-TO-SWAP SVG DATA-URI PLACEHOLDERS (/images/* convention)
 * ============================================================================
 */
const HERO_PORTRAIT_DATA_URI = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 440" fill="none">
  <defs>
    <linearGradient id="peachBlob" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FAD9A6"/>
      <stop offset="100%" stop-color="#F9A03F" stop-opacity="0.88"/>
    </linearGradient>
    <clipPath id="heroClip">
      <path d="M72,115 C72,58 135,34 212,34 C292,34 352,68 352,135 C352,205 372,275 338,342 C304,408 242,416 196,416 C135,416 68,386 58,315 C48,244 72,172 72,115 Z"/>
    </clipPath>
  </defs>
  <path d="M86,96 C126,32 246,18 318,64 C390,110 396,232 356,314 C316,396 206,426 126,386 C46,346 46,160 86,96 Z" fill="#F9A03F" opacity="0.45" transform="rotate(8 210 220)"/>
  <path d="M72,115 C72,58 135,34 212,34 C292,34 352,68 352,135 C352,205 372,275 338,342 C304,408 242,416 196,416 C135,416 68,386 58,315 C48,244 72,172 72,115 Z" fill="url(#peachBlob)"/>
  <circle cx="212" cy="210" r="138" stroke="#2B1A10" stroke-opacity="0.09" stroke-width="1.5" stroke-dasharray="6 6"/>
  <g clip-path="url(#heroClip)">
    <path d="M138,162 C132,102 168,68 214,68 C262,68 294,104 288,168 C284,218 298,274 286,318 L142,318 C132,272 144,215 138,162 Z" fill="#2B1A10"/>
    <path d="M96,422 C104,334 146,294 212,294 C278,294 322,334 330,422 Z" fill="#2B1A10"/>
    <path d="M174,296 L212,354 L250,296 Z" fill="#F8F1E5"/>
    <circle cx="256" cy="342" r="7" fill="#F26B1D"/>
    <rect x="193" y="244" width="38" height="62" rx="18" fill="#D99B72"/>
    <path d="M158,164 C158,118 182,92 212,92 C242,92 266,118 266,164 C266,214 244,254 212,254 C180,254 158,214 158,164 Z" fill="#E5A980"/>
    <ellipse cx="179" cy="196" rx="11" ry="6" fill="#F26B1D" opacity="0.22"/>
    <ellipse cx="245" cy="196" rx="11" ry="6" fill="#F26B1D" opacity="0.22"/>
    <circle cx="188" cy="174" r="5" fill="#2B1A10"/>
    <circle cx="189.5" cy="172.5" r="1.6" fill="#FFFFFF"/>
    <circle cx="236" cy="174" r="5" fill="#2B1A10"/>
    <circle cx="237.5" cy="172.5" r="1.6" fill="#FFFFFF"/>
    <path d="M175,159 Q188,153 200,159" stroke="#2B1A10" stroke-width="3" stroke-linecap="round"/>
    <path d="M224,159 Q236,153 249,159" stroke="#2B1A10" stroke-width="3" stroke-linecap="round"/>
    <rect x="168" y="162" width="38" height="25" rx="8" fill="#FFFFFF" fill-opacity="0.14" stroke="#2B1A10" stroke-width="3"/>
    <rect x="218" y="162" width="38" height="25" rx="8" fill="#FFFFFF" fill-opacity="0.14" stroke="#2B1A10" stroke-width="3"/>
    <path d="M206,173 L218,173" stroke="#2B1A10" stroke-width="3" stroke-linecap="round"/>
    <path d="M212,176 L209,195 L216,197" stroke="#B8764D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M196,214 Q212,228 228,214" stroke="#2B1A10" stroke-width="3.2" stroke-linecap="round"/>
    <path d="M154,156 C154,104 184,82 222,84 C252,86 272,112 270,154 C256,126 234,114 206,116 C182,118 164,134 154,156 Z" fill="#2B1A10"/>
    <circle cx="155" cy="202" r="4.5" fill="#F9A03F"/>
    <circle cx="269" cy="202" r="4.5" fill="#F9A03F"/>
  </g>
</svg>
`)}`;

const ABOUT_PORTRAIT_DATA_URI = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 380" fill="none">
  <defs>
    <linearGradient id="aboutGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F9A03F"/>
      <stop offset="100%" stop-color="#FAD9A6"/>
    </linearGradient>
  </defs>
  <rect width="340" height="380" rx="22" fill="url(#aboutGrad)"/>
  <rect x="24" y="30" width="118" height="72" rx="12" fill="#FFFFFF" fill-opacity="0.65"/>
  <circle cx="42" cy="48" r="5" fill="#F26B1D"/>
  <rect x="54" y="45" width="62" height="6" rx="3" fill="#2B1A10" fill-opacity="0.45"/>
  <rect x="36" y="64" width="88" height="7" rx="3.5" fill="#2B1A10" fill-opacity="0.22"/>
  <rect x="36" y="78" width="66" height="7" rx="3.5" fill="#F26B1D" fill-opacity="0.65"/>
  <rect x="208" y="48" width="106" height="64" rx="12" fill="#2B1A10" fill-opacity="0.14"/>
  <path d="M226,90 L248,70 L266,82 L292,62" stroke="#2B1A10" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M108,154 C104,104 134,76 172,76 C210,76 238,104 234,158 C230,206 242,256 230,294 L112,294 C102,254 112,204 108,154 Z" fill="#2B1A10"/>
  <path d="M68,380 C76,294 114,262 170,262 C226,262 264,294 272,380 Z" fill="#2B1A10"/>
  <path d="M138,264 L170,316 L202,264 Z" fill="#F26B1D"/>
  <rect x="154" y="218" width="32" height="52" rx="15" fill="#D99B72"/>
  <path d="M124,154 C124,114 144,94 170,94 C196,94 216,114 216,154 C216,196 198,228 170,228 C142,228 124,196 124,154 Z" fill="#E5A980"/>
  <circle cx="151" cy="160" r="4.2" fill="#2B1A10"/>
  <circle cx="189" cy="160" r="4.2" fill="#2B1A10"/>
  <rect x="134" y="149" width="32" height="22" rx="6" stroke="#2B1A10" stroke-width="2.8"/>
  <rect x="174" y="149" width="32" height="22" rx="6" stroke="#2B1A10" stroke-width="2.8"/>
  <line x1="166" y1="159" x2="174" y2="159" stroke="#2B1A10" stroke-width="2.8"/>
  <path d="M156,194 Q170,206 184,194" stroke="#2B1A10" stroke-width="3" stroke-linecap="round"/>
  <path d="M122,146 C124,104 148,86 178,88 C202,90 218,110 218,144 C204,120 186,110 164,112 C144,114 130,128 122,146 Z" fill="#2B1A10"/>
  <rect x="92" y="328" width="156" height="52" rx="10" fill="#F8F1E5"/>
  <circle cx="170" cy="354" r="9" fill="#F26B1D"/>
</svg>
`)}`;

const getProjectPreviewUri = (theme) => {
  const templates = {
    ticket: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" fill="none">
        <rect width="400" height="280" fill="#FDE6C4"/>
        <rect x="20" y="20" width="360" height="240" rx="16" fill="#1B110A"/>
        <rect x="32" y="32" width="58" height="216" rx="10" fill="#2B1A10"/>
        <circle cx="61" cy="52" r="9" fill="#F26B1D"/>
        <rect x="44" y="76" width="34" height="6" rx="3" fill="#F9A03F"/>
        <rect x="44" y="92" width="28" height="6" rx="3" fill="#6B5848"/>
        <rect x="44" y="108" width="32" height="6" rx="3" fill="#6B5848"/>
        <rect x="102" y="32" width="84" height="44" rx="10" fill="#2B1A10"/>
        <rect x="112" y="44" width="38" height="6" rx="3" fill="#FAD9A6" opacity="0.7"/>
        <rect x="112" y="56" width="56" height="10" rx="4" fill="#F26B1D"/>
        <rect x="194" y="32" width="84" height="44" rx="10" fill="#2B1A10"/>
        <rect x="204" y="44" width="38" height="6" rx="3" fill="#FAD9A6" opacity="0.7"/>
        <rect x="204" y="56" width="52" height="10" rx="4" fill="#F9A03F"/>
        <rect x="286" y="32" width="82" height="44" rx="10" fill="#2B1A10"/>
        <rect x="296" y="44" width="34" height="6" rx="3" fill="#FAD9A6" opacity="0.7"/>
        <rect x="296" y="56" width="48" height="10" rx="4" fill="#FFFFFF"/>
        <rect x="102" y="88" width="84" height="160" rx="12" fill="#2B1A10"/>
        <rect x="110" y="100" width="68" height="36" rx="8" fill="#3A271A"/>
        <circle cx="120" cy="112" r="4" fill="#F26B1D"/>
        <rect x="110" y="144" width="68" height="36" rx="8" fill="#3A271A"/>
        <circle cx="120" cy="156" r="4" fill="#F9A03F"/>
        <rect x="194" y="88" width="84" height="160" rx="12" fill="#2B1A10"/>
        <rect x="202" y="100" width="68" height="42" rx="8" fill="#3A271A"/>
        <rect x="202" y="150" width="68" height="42" rx="8" fill="#3A271A"/>
        <rect x="286" y="88" width="82" height="160" rx="12" fill="#2B1A10"/>
        <rect x="294" y="100" width="66" height="48" rx="8" fill="#F26B1D" fill-opacity="0.24" stroke="#F26B1D"/>
        <rect x="294" y="158" width="66" height="36" rx="8" fill="#3A271A"/>
      </svg>
    `,
    energy: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" fill="none">
        <rect width="400" height="280" fill="#F6E8D2"/>
        <rect x="20" y="20" width="360" height="240" rx="16" fill="#2B1A10"/>
        <circle cx="110" cy="126" r="46" fill="#F9A03F" fill-opacity="0.2" stroke="#F9A03F" stroke-width="2.5"/>
        <circle cx="110" cy="126" r="22" fill="#F9A03F"/>
        <path d="M110,68 V78 M110,174 V184 M52,126 H62 M158,126 H168 M70,86 L78,94 M142,158 L150,166 M150,86 L142,94 M78,158 L70,166" stroke="#F9A03F" stroke-width="3" stroke-linecap="round"/>
        <path d="M168,126 H224" stroke="#F26B1D" stroke-width="3" stroke-dasharray="6 5"/>
        <polygon points="222,120 234,126 222,132" fill="#F26B1D"/>
        <rect x="242" y="64" width="114" height="54" rx="12" fill="#3A271A" stroke="#FAD9A6" stroke-opacity="0.35"/>
        <rect x="256" y="78" width="52" height="7" rx="3.5" fill="#F26B1D"/>
        <rect x="256" y="92" width="84" height="8" rx="4" fill="#F8F1E5"/>
        <rect x="242" y="132" width="114" height="54" rx="12" fill="#3A271A" stroke="#FAD9A6" stroke-opacity="0.35"/>
        <rect x="256" y="146" width="64" height="7" rx="3.5" fill="#F9A03F"/>
        <rect x="256" y="160" width="78" height="8" rx="4" fill="#F8F1E5"/>
        <rect x="44" y="204" width="312" height="34" rx="10" fill="#3A271A"/>
        <circle cx="64" cy="221" r="6" fill="#F26B1D"/>
        <rect x="80" y="217" width="144" height="8" rx="4" fill="#FAD9A6"/>
      </svg>
    `,
    swap: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" fill="none">
        <rect width="400" height="280" fill="#F9E3C1"/>
        <rect x="20" y="20" width="360" height="240" rx="16" fill="#FFFFFF"/>
        <rect x="42" y="42" width="134" height="122" rx="16" fill="#2B1A10"/>
        <circle cx="82" cy="84" r="20" fill="#F26B1D"/>
        <rect x="62" y="118" width="76" height="10" rx="5" fill="#FFFFFF"/>
        <rect x="62" y="136" width="52" height="8" rx="4" fill="#FAD9A6"/>
        <rect x="224" y="42" width="134" height="122" rx="16" fill="#F8F1E5" stroke="#2B1A10" stroke-opacity="0.15" stroke-width="2"/>
        <circle cx="264" cy="84" r="20" fill="#F9A03F"/>
        <rect x="244" y="118" width="76" height="10" rx="5" fill="#2B1A10"/>
        <rect x="244" y="136" width="56" height="8" rx="4" fill="#6B5848"/>
        <circle cx="200" cy="103" r="24" fill="#F26B1D" stroke="#FFFFFF" stroke-width="4"/>
        <path d="M190,98 H210 L204,92 M210,108 H190 L196,114" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="42" y="182" width="316" height="54" rx="14" fill="#2B1A10"/>
        <rect x="62" y="203" width="128" height="12" rx="6" fill="#FAD9A6"/>
        <rect x="256" y="195" width="84" height="28" rx="14" fill="#F26B1D"/>
      </svg>
    `,
    ngo: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" fill="none">
        <rect width="400" height="280" fill="#F4E6D0"/>
        <rect x="20" y="20" width="360" height="240" rx="16" fill="#1B110A"/>
        <rect x="42" y="40" width="316" height="44" rx="12" fill="#2B1A10"/>
        <circle cx="66" cy="62" r="10" fill="#F26B1D"/>
        <rect x="86" y="57" width="112" height="10" rx="5" fill="#F8F1E5"/>
        <rect x="274" y="51" width="68" height="22" rx="11" fill="#F9A03F"/>
        <rect x="42" y="98" width="150" height="140" rx="14" fill="#2B1A10"/>
        <rect x="58" y="116" width="76" height="8" rx="4" fill="#FAD9A6" opacity="0.7"/>
        <rect x="58" y="132" width="108" height="16" rx="5" fill="#F26B1D"/>
        <rect x="58" y="164" width="118" height="10" rx="5" fill="#3A271A"/>
        <rect x="58" y="164" width="92" height="10" rx="5" fill="#F9A03F"/>
        <rect x="58" y="188" width="96" height="8" rx="4" fill="#F8F1E5" opacity="0.6"/>
        <rect x="208" y="98" width="150" height="140" rx="14" fill="#2B1A10"/>
        <circle cx="234" cy="128" r="8" fill="#F26B1D"/>
        <rect x="250" y="124" width="88" height="8" rx="4" fill="#F8F1E5"/>
        <circle cx="234" cy="166" r="8" fill="#F9A03F"/>
        <rect x="250" y="162" width="80" height="8" rx="4" fill="#F8F1E5"/>
        <circle cx="234" cy="204" r="8" fill="#FAD9A6"/>
        <rect x="250" y="200" width="92" height="8" rx="4" fill="#F8F1E5"/>
      </svg>
    `,
  };

  return `data:image/svg+xml;utf8,${encodeURIComponent(
    templates[theme] || templates.ticket
  )}`;
};

/**
 * ============================================================================
 * ROTATING CIRCULAR BADGE ("BACKEND & BLOCKCHAIN DEVELOPER •" — 18s 360° loop)
 * ============================================================================
 */
const RotatingDeveloperBadge = ({ darkMode }) => {
  return (
    <div
      className={`relative flex h-24 w-24 items-center justify-center rounded-full bg-[#2B1A10] text-[#F8F1E5] shadow-lg ring-4 sm:h-26 sm:w-26 ${
        darkMode ? 'ring-[#24170E]' : 'ring-[#F8F1E5]'
      }`}
      aria-label="Backend and Blockchain Developer rotating badge"
    >
      <svg
        viewBox="0 0 120 120"
        className="h-full w-full animate-[spin_18s_linear_infinite]"
        aria-hidden="true"
      >
        <defs>
          <path
            id="devCirclePath"
            d="M 60, 60 m -43, 0 a 43,43 0 1,1 86,0 a 43,43 0 1,1 -86,0"
          />
        </defs>
        <text
          fill="#F8F1E5"
          fontSize="8.8"
          fontWeight="700"
          letterSpacing="1.65"
        >
          <textPath href="#devCirclePath" startOffset="0%">
            • BACKEND &amp; BLOCKCHAIN DEVELOPER
          </textPath>
        </text>
      </svg>
      <div className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-[#F26B1D] text-white">
        <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
      </div>
    </div>
  );
};

/**
 * ============================================================================
 * MAIN APPLICATION COMPONENT
 * ============================================================================
 */
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  // Service 02 ("Full-Stack Web & Dashboard Development") open by default
  const [openServiceIdx, setOpenServiceIdx] = useState(1);

  // Interactive Modals State (Contact, Showreel/Architecture, CV, Project Detail)
  const [activeModal, setActiveModal] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    projectType: 'Backend & Distributed Systems',
    message: '',
  });

  const prefersReducedMotion = useReducedMotion();

  // Close mobile drawer or modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setActiveModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll reveal helper: 28px fade-up over 0.7s when 15% visible, once only
  const getScrollRevealProps = (delay = 0) => {
    if (prefersReducedMotion) {
      return {
        initial: { opacity: 1, y: 0 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
      };
    }
    return {
      initial: { opacity: 0, y: 28 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.15 },
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    };
  };

  // Hero left column 5-item load reveal: 24px fade up with 0.12s stagger
  const getHeroLeftItemProps = (index) => {
    if (prefersReducedMotion) {
      return {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
      };
    }
    return {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: {
        duration: 0.65,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      },
    };
  };

  // Hero right column fade-in after 0.6s
  const heroRightProps = prefersReducedMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, scale: 0.97 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.75, delay: 0.6, ease: [0.22, 1, 0.36, 1] },
      };

  const handleNavClick = (link) => {
    setActiveNav(link.id);
    setMobileMenuOpen(false);
  };

  const handleDownloadCvText = () => {
    const cvContent = [
      'ANUSREE KS',
      'Distributed Systems Developer | MERN Stack & Blockchain Developer | SDET',
      'Location: Thiruvananthapuram, Kerala, India',
      'Email: anusagan1812@gmail.com | Phone: +91 9048372952',
      '',
      'SUMMARY',
      'Backend and blockchain developer from Thiruvananthapuram with 12+ years of manual and functional QA engineering expertise and 2+ years of hands-on Node.js, React.js (MERN), and blockchain DApp development.',
      '',
      'EXPERIENCE',
      '- Distributed Systems Developer, chargeMOD (Sept 2025 - Present)',
      '- Blockchain Developer Intern, BlockseBlock (June 2025 - July 2025)',
      '- Senior Test Analyst, Cognizant / Dun & Bradstreet IME Platform (Jan 2010 - Mar 2022)',
      '',
      'KEY PROJECTS',
      '1. Role-Based Ticket Management System (chargeMOD) - Node.js, MongoDB, TypeScript, React.js, Kafka',
      '2. Digital Energy Aggregator (chargeMOD) - Hyperledger Fabric, Kafka, IoT Telemetry',
      '3. Cross-Chain Asset Swap DApp (BlockseBlock) - ICP Blockchain, Solidity, Smart Contracts',
      '4. NGO Fund Transparency DApp (WCHL Hackathon) - ICP Blockchain, Canisters',
      '',
      'EDUCATION',
      '- PG Diploma in Blockchain - Digital University Kerala (2025)',
      '- B.Tech in Computer Science - TKM College of Engineering, Kerala University (2009)',
    ].join('\n');

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Anusree_KS_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setActiveModal(null);
      setContactForm({
        name: '',
        email: '',
        projectType: 'Backend & Distributed Systems',
        message: '',
      });
    }, 1800);
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setActiveModal('project');
  };

  return (
    <div
      className={`${
        darkMode ? 'dark bg-[#1B110A] text-[#F8F1E5]' : 'bg-[#F8F1E5] text-[#2B1A10]'
      } min-h-screen w-full overflow-x-hidden font-['Plus_Jakarta_Sans',sans-serif] transition-colors duration-300 selection:bg-[#F26B1D] selection:text-white`}
    >
      {/* Font Imports, Chamfered Clip-Path & 26s Linear Marquee */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Plus+Jakarta+Sans:wght@500;700;800&display=swap');

        html {
          scroll-behavior: smooth;
        }

        @keyframes marqueeLinear {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeLinear 26s linear infinite;
        }

        .marquee-wrapper:hover .animate-marquee-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-track {
            animation: none;
          }
        }

        .chamfered-service-card {
          clip-path: polygon(
            22px 0%,
            calc(100% - 22px) 0%,
            100% 22px,
            100% calc(100% - 22px),
            calc(100% - 22px) 100%,
            22px 100%,
            0% calc(100% - 22px),
            0% 22px
          );
        }
      `}</style>

      {/* =====================================================================
          1. NAVBAR (Sticky dark-brown rounded frame, max-w-[1120px])
          ===================================================================== */}
      <header className="sticky top-0 z-30 mx-auto max-w-[1168px] px-4 pt-4 sm:px-6 sm:pt-5">
        <nav
          aria-label="Primary Navigation"
          className="mx-auto flex max-w-[1120px] items-center justify-between rounded-full bg-[#2B1A10] px-5 py-3.5 text-[#FFFFFF] shadow-lg sm:px-7"
        >
          {/* Logo: Anusree with an orange dot */}
          <a
            href="#home"
            onClick={() => setActiveNav('home')}
            className="flex items-center text-xl font-extrabold tracking-tight text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F26B1D] sm:text-2xl"
          >
            <span>{SITE_DATA.brand.name}</span>
            <span className="ml-0.5 inline-block h-2 w-2 rounded-full bg-[#F26B1D]" />
          </a>

          {/* Desktop Navigation Links (>= 900px) */}
          <ul className="hidden items-center gap-7 min-[900px]:flex">
            {SITE_DATA.navLinks.map((link) => {
              const isCurrent = activeNav === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link)}
                    className={`text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F26B1D] ${
                      isCurrent
                        ? 'font-bold text-[#F26B1D] underline decoration-[#F26B1D] decoration-2 underline-offset-8'
                        : 'text-[#F8F1E5]/90 hover:text-[#F26B1D]'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop Actions: Dark Mode Toggle + White Pill "Let's Talk →" */}
          <div className="hidden items-center gap-3 min-[900px]:flex">
            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#3A271A] text-[#FAD9A6] transition-colors duration-300 hover:border-[#F26B1D] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F26B1D] cursor-pointer"
            >
              {darkMode ? (
                <Sun className="h-4 w-4 text-[#F9A03F]" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" aria-hidden="true" />
              )}
            </button>

            <PillButton
              variant="white"
              onClick={() => setActiveModal('contact')}
              className="!px-5 !py-2.5 text-sm"
            >
              Let&apos;s Talk
            </PillButton>
          </div>

          {/* Mobile Controls (< 900px) */}
          <div className="flex items-center gap-2.5 min-[900px]:hidden">
            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#3A271A] text-[#FAD9A6] transition-colors hover:border-[#F26B1D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F26B1D] cursor-pointer"
            >
              {darkMode ? (
                <Sun className="h-4 w-4 text-[#F9A03F]" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F26B1D] text-white transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Slide-In Navigation Drawer (< 900px) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs min-[900px]:hidden"
              aria-hidden="true"
            />
            <motion.aside
              initial={prefersReducedMotion ? { x: 0 } : { x: '100%' }}
              animate={{ x: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              aria-label="Mobile Navigation Drawer"
              className="fixed top-0 right-0 z-50 flex h-full w-[290px] max-w-[85vw] flex-col justify-between bg-[#2B1A10] p-6 text-[#F8F1E5] shadow-2xl min-[900px]:hidden"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <span className="text-xl font-extrabold text-white">
                    {SITE_DATA.brand.name}
                    <span className="ml-0.5 inline-block h-2 w-2 rounded-full bg-[#F26B1D]" />
                  </span>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close navigation menu"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3A271A] text-[#F8F1E5] hover:bg-[#F26B1D] hover:text-white focus-visible:outline-2 focus-visible:outline-[#F26B1D] cursor-pointer"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                <ul className="mt-6 flex flex-col gap-3">
                  {SITE_DATA.navLinks.map((link) => {
                    const isCurrent = activeNav === link.id;
                    return (
                      <li key={link.id}>
                        <a
                          href={link.href}
                          onClick={() => handleNavClick(link)}
                          className={`block rounded-xl px-3.5 py-2.5 text-base font-bold transition-colors ${
                            isCurrent
                              ? 'bg-[#3A271A] text-[#F26B1D] underline decoration-[#F26B1D] underline-offset-4'
                              : 'text-[#F8F1E5] hover:bg-[#3A271A] hover:text-[#F26B1D]'
                          }`}
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="border-t border-white/10 pt-5">
                <PillButton
                  variant="white"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActiveModal('contact');
                  }}
                  className="w-full"
                >
                  Let&apos;s Talk
                </PillButton>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* =====================================================================
          MAIN CONTENT
          ===================================================================== */}
      <main>
        {/* ===================================================================
            2. HERO SECTION (Cream screen inside the rounded frame, 2 columns)
            =================================================================== */}
        <section
          id="home"
          aria-label="Introduction"
          className="mx-auto max-w-[1168px] px-4 pt-6 pb-16 sm:px-6 sm:pt-10 sm:pb-24"
        >
          <div
            className={`rounded-[22px] px-5 py-8 transition-colors duration-300 sm:px-10 sm:py-12 lg:px-12 lg:py-14 ${
              darkMode
                ? 'border border-[#3A271A] bg-[#24170E]'
                : 'border border-[#2B1A10]/10 bg-[#F8F1E5]'
            }`}
          >
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
              {/* LEFT COLUMN: 5 items fading up 24px on load with 0.12s stagger */}
              <div className="flex flex-col items-start lg:col-span-6">
                {/* 1. Eyebrow */}
                <motion.p
                  {...getHeroLeftItemProps(0)}
                  className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#F26B1D]"
                >
                  {SITE_DATA.hero.eyebrow}
                </motion.p>

                {/* 2. Display Headline (from image_324d05.png, 72px desktop, 800 weight, -0.04em tracking, line-height 1) */}
                <motion.h1
                  {...getHeroLeftItemProps(1)}
                  className="mt-4 text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold leading-[1] tracking-[-0.04em]"
                >
                  {SITE_DATA.hero.headlineLines.map((line) => (
                    <span
                      key={line.text}
                      className={`block ${line.highlight ? 'text-[#F26B1D]' : ''}`}
                    >
                      {line.text}
                    </span>
                  ))}
                </motion.h1>

                {/* 3. Paragraph (from image_324d05.png) */}
                <motion.p
                  {...getHeroLeftItemProps(2)}
                  className={`mt-6 max-w-[500px] text-base leading-relaxed font-medium sm:text-lg ${
                    darkMode ? 'text-[#F8F1E5]/80' : 'text-[#6B5848]'
                  }`}
                >
                  {SITE_DATA.hero.description}
                </motion.p>

                {/* 4. Buttons Row: Dark brown pill "Portfolio →" + circular play button "Watch Showreel" */}
                <motion.div
                  {...getHeroLeftItemProps(3)}
                  className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5"
                >
                  <PillButton
                    href="#projects"
                    variant={darkMode ? 'orange' : 'dark'}
                  >
                    {SITE_DATA.hero.primaryCta}
                  </PillButton>

                  <button
                    type="button"
                    onClick={() => setActiveModal('showreel')}
                    aria-label="Watch Showreel and Architecture Overview"
                    className="group inline-flex items-center gap-3 rounded-full py-1.5 pr-3 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F26B1D] cursor-pointer"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#2B1A10] bg-[#FFFFFF] text-[#F26B1D] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#F26B1D] group-hover:bg-[#F26B1D] group-hover:text-white">
                      <Play
                        className="ml-0.5 h-4 w-4 fill-current"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="underline decoration-[#F26B1D]/60 decoration-2 underline-offset-4 group-hover:text-[#F26B1D]">
                      {SITE_DATA.hero.secondaryCta}
                    </span>
                  </button>
                </motion.div>

                {/* 5. Metrics / Experience Proof Strip grounded in Anusree's CV */}
                <motion.div
                  {...getHeroLeftItemProps(4)}
                  className="mt-10 flex flex-wrap items-center gap-4"
                >
                  <div
                    className="flex -space-x-3"
                    aria-label="Engineering teams and organizations"
                  >
                    {SITE_DATA.hero.avatars.map((avatar, index) => (
                      <div
                        key={avatar.name}
                        title={avatar.name}
                        style={{
                          backgroundColor: avatar.bg,
                          color: avatar.text,
                          zIndex: 10 - index,
                        }}
                        className={`flex h-11 w-11 items-center justify-center rounded-full border-2 text-xs font-extrabold shadow-xs ${
                          darkMode ? 'border-[#24170E]' : 'border-[#F8F1E5]'
                        }`}
                      >
                        {avatar.initials}
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="text-sm font-extrabold text-[#F26B1D] sm:text-base">
                      {SITE_DATA.hero.reviewsCount}
                    </p>
                    <p
                      className={`text-xs font-medium ${
                        darkMode ? 'text-[#F8F1E5]/75' : 'text-[#6B5848]'
                      }`}
                    >
                      {SITE_DATA.hero.reviewsSubtitle}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* RIGHT COLUMN: Fades in after 0.6s */}
              <motion.div
                {...heroRightProps}
                className="relative mx-auto flex w-full max-w-[480px] flex-col items-center justify-center pt-6 pb-4 lg:col-span-6 lg:max-w-none"
              >
                {/* Handwritten Note rotated -8° ("Build / Test / Deploy.") */}
                <div
                  className="absolute -top-2 left-2 z-20 -rotate-8 select-none sm:left-4"
                  aria-hidden="true"
                >
                  <p className="font-['Caveat',cursive] text-2xl leading-[1.05] font-bold text-[#F26B1D] sm:text-3xl">
                    {SITE_DATA.hero.handwrittenNote.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <svg
                    width="48"
                    height="30"
                    viewBox="0 0 48 30"
                    fill="none"
                    className="mt-1 ml-6 text-[#F26B1D]"
                  >
                    <path
                      d="M2 4C16 6 28 14 38 25M38 25L29 24M38 25L39 15"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Circular Rotating Badge (18s 360° linear loop) */}
                <div className="absolute -top-2 right-2 z-20 sm:right-6">
                  <RotatingDeveloperBadge darkMode={darkMode} />
                </div>

                {/* Stylized Developer Portrait on Organic Peach Blobs */}
                <div className="relative mx-auto w-full max-w-[350px] sm:max-w-[390px]">
                  <img
                    src={HERO_PORTRAIT_DATA_URI}
                    alt={SITE_DATA.hero.portraitAlt}
                    className="h-auto w-full drop-shadow-sm select-none"
                  />
                </div>

                {/* Endorsement Card with Orange Quote Mark */}
                <div
                  className={`relative z-20 -mt-8 max-w-[295px] self-start rounded-[22px] p-4 shadow-lg sm:ml-2 ${
                    darkMode
                      ? 'border border-white/10 bg-[#3A271A] text-[#F8F1E5]'
                      : 'border border-[#2B1A10]/10 bg-[#FFFFFF] text-[#2B1A10]'
                  }`}
                >
                  <span
                    className="block font-serif text-4xl leading-none font-black text-[#F26B1D]"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <p className="-mt-2 text-xs leading-snug font-bold sm:text-sm">
                    {SITE_DATA.hero.quoteText}
                  </p>
                </div>

                {/* Floating Skill Pills from CV (bob 6px every 3.5s with offset delays) */}
                <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:justify-end">
                  {SITE_DATA.hero.skillPills.map((pill) => {
                    const pillColors = {
                      dark: 'bg-[#2B1A10] text-[#FFFFFF] border border-white/10',
                      white:
                        'bg-[#FFFFFF] text-[#2B1A10] border border-[#2B1A10]/15 shadow-xs',
                      amber:
                        'bg-[#F9A03F] text-[#2B1A10] font-extrabold shadow-xs',
                    };

                    return (
                      <motion.span
                        key={pill.label}
                        animate={
                          prefersReducedMotion ? { y: 0 } : { y: [0, -6, 0] }
                        }
                        transition={
                          prefersReducedMotion
                            ? undefined
                            : {
                                duration: 3.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: pill.delay,
                              }
                        }
                        className={`inline-flex items-center rounded-full px-4 py-2 text-xs font-bold tracking-tight sm:text-sm ${
                          pillColors[pill.variant]
                        }`}
                      >
                        {pill.label}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            3. MARQUEE (Dark brown #2B1A10 strip with 3px amber bottom border)
            =================================================================== */}
        <div
          aria-label="Core technical specialties"
          className="marquee-wrapper w-full overflow-hidden border-b-[3px] border-[#F9A03F] bg-[#2B1A10] py-4 text-[#F8F1E5] select-none"
        >
          <div className="animate-marquee-track items-center">
            {[0, 1, 2, 3].map((groupIndex) => (
              <div
                key={groupIndex}
                className="flex shrink-0 items-center"
                aria-hidden={groupIndex > 0}
              >
                {SITE_DATA.marqueeItems.map((item) => (
                  <div
                    key={`${groupIndex}-${item}`}
                    className="flex items-center gap-6 px-4 sm:gap-8 sm:px-6"
                  >
                    <span className="text-lg font-extrabold tracking-tight sm:text-2xl">
                      {item}
                    </span>
                    <span
                      className="text-xl text-[#F26B1D] sm:text-2xl"
                      aria-hidden="true"
                    >
                      ✦
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ===================================================================
            4. SERVICES ACCORDION (Row 02 open by default)
            =================================================================== */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="mx-auto max-w-[1168px] px-4 py-20 sm:px-6 sm:py-24"
        >
          {/* Services Header (Scroll Reveal) */}
          <motion.div
            {...getScrollRevealProps(0)}
            className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#F26B1D]">
                {SITE_DATA.services.eyebrow}
              </p>
              <h2
                id="services-heading"
                className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl"
              >
                {SITE_DATA.services.headingPrefix}{' '}
                <span className="text-[#F26B1D]">
                  {SITE_DATA.services.headingHighlight}
                </span>
              </h2>
            </div>

            <PillButton
              variant="orange"
              onClick={() =>
                setOpenServiceIdx((prev) =>
                  prev === SITE_DATA.services.items.length - 1 ? 0 : prev + 1
                )
              }
            >
              {SITE_DATA.services.ctaLabel}
            </PillButton>
          </motion.div>

          {/* Services Accordion List (Scroll Reveal) */}
          <motion.div
            {...getScrollRevealProps(0.12)}
            className="mt-12 flex flex-col gap-4"
          >
            {SITE_DATA.services.items.map((service, index) => {
              const isOpen = openServiceIdx === index;

              return (
                <div
                  key={service.number}
                  className={`transition-all duration-300 ${
                    isOpen
                      ? 'chamfered-service-card bg-[#2B1A10] text-[#F8F1E5] shadow-xl'
                      : darkMode
                        ? 'rounded-[22px] border border-white/10 bg-[#3A271A] text-[#F8F1E5] hover:border-[#F26B1D]/50'
                        : 'rounded-[22px] border border-[#2B1A10]/10 bg-[#FFFFFF] text-[#2B1A10] shadow-xs hover:border-[#F26B1D]/50'
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`service-panel-${service.number}`}
                    onClick={() => setOpenServiceIdx(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left sm:px-9 sm:py-7 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#F26B1D] cursor-pointer"
                  >
                    <div className="flex items-center gap-4 sm:gap-8">
                      <span
                        className={`text-lg font-extrabold sm:text-2xl ${
                          isOpen
                            ? 'text-[#F26B1D]'
                            : darkMode
                              ? 'text-[#FAD9A6]/60'
                              : 'text-[#6B5848]'
                        }`}
                      >
                        {service.number}
                      </span>
                      <span className="text-xl font-extrabold tracking-tight sm:text-3xl">
                        {service.title}
                      </span>
                    </div>

                    {/* Orange circle arrow button that rotates 90° when open */}
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-12 sm:w-12 ${
                        isOpen
                          ? 'rotate-90 bg-[#F26B1D] text-white'
                          : darkMode
                            ? 'bg-[#2B1A10] text-[#F8F1E5]'
                            : 'bg-[#F8F1E5] text-[#2B1A10]'
                      }`}
                      aria-hidden="true"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </button>

                  {/* Smooth Height Animation */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`service-panel-${service.number}`}
                        initial={
                          prefersReducedMotion
                            ? { opacity: 1, height: 'auto' }
                            : { opacity: 0, height: 0 }
                        }
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={
                          prefersReducedMotion
                            ? { opacity: 0, height: 0 }
                            : { opacity: 0, height: 0 }
                        }
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/10 px-6 pt-5 pb-8 sm:px-9 sm:pl-[92px]">
                          <div className="flex flex-wrap gap-2.5">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-white/15 bg-[#3A271A] px-4 py-1.5 text-xs font-bold text-[#FAD9A6] sm:text-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#F8F1E5]/85 sm:text-base">
                            {service.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </section>

        {/* ===================================================================
            5. ABOUT SECTION (Full-width dark brown #2B1A10)
            =================================================================== */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="w-full bg-[#2B1A10] py-20 text-[#F8F1E5] sm:py-28"
        >
          <div className="mx-auto max-w-[1168px] px-4 sm:px-6">
            <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12">
              {/* Left Column: Portrait on tilted amber rectangle, 3 rotated pills, white card */}
              <motion.div
                {...getScrollRevealProps(0)}
                className="relative mx-auto w-full max-w-[380px] lg:col-span-5"
              >
                {/* Tilted Amber Rectangle */}
                <div
                  className="absolute inset-0 -rotate-6 rounded-[22px] bg-[#F9A03F]"
                  aria-hidden="true"
                />

                {/* Portrait Card */}
                <div className="relative overflow-hidden rounded-[22px] border-4 border-[#3A271A] bg-[#FAD9A6] shadow-2xl">
                  <img
                    src={ABOUT_PORTRAIT_DATA_URI}
                    alt={SITE_DATA.about.portraitAlt}
                    className="h-auto w-full object-cover"
                  />
                </div>

                {/* Three Rotated Outline / Accent Pills */}
                <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:justify-start">
                  {SITE_DATA.about.pills.map((pill) => {
                    const styleMap = {
                      peach:
                        'bg-[#FAD9A6] text-[#2B1A10] border border-[#FAD9A6]',
                      outline:
                        'bg-[#2B1A10] text-[#F8F1E5] border border-[#F9A03F]',
                      white:
                        'bg-[#FFFFFF] text-[#2B1A10] border border-white',
                    };
                    return (
                      <span
                        key={pill.label}
                        style={{ transform: `rotate(${pill.rotation})` }}
                        className={`inline-block rounded-full px-4 py-1.5 text-xs font-extrabold shadow-md ${
                          styleMap[pill.style]
                        }`}
                      >
                        {pill.label}
                      </span>
                    );
                  })}
                </div>

                {/* White Card: "12+ Years QA & 2+ Yrs Dev" */}
                <div className="mt-5 inline-flex items-center gap-3.5 rounded-[22px] bg-[#FFFFFF] px-5 py-4 text-[#2B1A10] shadow-xl sm:absolute sm:-right-6 sm:bottom-16 sm:mt-0">
                  <span className="text-3xl font-extrabold text-[#F26B1D] sm:text-4xl">
                    {SITE_DATA.about.experienceValue}
                  </span>
                  <span className="max-w-[125px] text-xs leading-tight font-extrabold sm:text-sm">
                    {SITE_DATA.about.experienceLabel}
                  </span>
                </div>
              </motion.div>

              {/* Right Column: Eyebrow, "Who is Anusree?", Bio, Credentials & "Download CV →" */}
              <motion.div
                {...getScrollRevealProps(0.15)}
                className="flex flex-col items-start lg:col-span-7 lg:pl-6"
              >
                <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#F9A03F]">
                  {SITE_DATA.about.eyebrow}
                </p>

                <h2
                  id="about-heading"
                  className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl"
                >
                  {SITE_DATA.about.headingPrefix}{' '}
                  <span className="text-[#F26B1D]">
                    {SITE_DATA.about.headingHighlight}
                  </span>
                </h2>

                <p className="mt-6 text-base leading-relaxed text-[#F8F1E5]/85 sm:text-lg">
                  {SITE_DATA.about.bio}
                </p>

                {/* Education & Career Highlights from CV */}
                <div className="mt-6 grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
                  {SITE_DATA.about.credentials.map((cred) => (
                    <div
                      key={cred.title}
                      className="rounded-[18px] border border-white/10 bg-[#3A271A]/90 p-3.5"
                    >
                      <div className="flex items-center gap-2 text-xs font-extrabold text-[#F9A03F]">
                        {cred.icon === 'education' ? (
                          <GraduationCap className="h-4 w-4 shrink-0" aria-hidden="true" />
                        ) : (
                          <Briefcase className="h-4 w-4 shrink-0" aria-hidden="true" />
                        )}
                        <span>{cred.title}</span>
                      </div>
                      <p className="mt-1 text-xs text-[#F8F1E5]/80">
                        {cred.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <PillButton
                    variant="white"
                    onClick={() => setActiveModal('cv')}
                  >
                    {SITE_DATA.about.ctaLabel}
                  </PillButton>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            6. PROJECTS SECTION (4-column grid on desktop, 2 tablet, 1 mobile)
            =================================================================== */}
        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="mx-auto max-w-[1168px] px-4 py-20 sm:px-6 sm:py-24"
        >
          {/* Projects Header (Scroll Reveal) */}
          <motion.div
            {...getScrollRevealProps(0)}
            className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#F26B1D]">
                {SITE_DATA.projects.eyebrow}
              </p>
              <h2
                id="projects-heading"
                className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl"
              >
                {SITE_DATA.projects.headingPrefix}{' '}
                <span className="text-[#F26B1D]">
                  {SITE_DATA.projects.headingHighlight}
                </span>
              </h2>
            </div>

            <PillButton
              variant="outline"
              onClick={() => openProjectModal(SITE_DATA.projects.items[0])}
            >
              {SITE_DATA.projects.ctaLabel}
            </PillButton>
          </motion.div>

          {/* 4-Column Project Grid (Cards stagger by 0.1s) */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SITE_DATA.projects.items.map((project, idx) => (
              <motion.article
                key={project.id}
                {...getScrollRevealProps(idx * 0.1)}
                onClick={() => openProjectModal(project)}
                className={`group flex cursor-pointer flex-col overflow-hidden rounded-[22px] border transition-shadow duration-300 hover:shadow-xl ${
                  darkMode
                    ? 'border-white/10 bg-[#3A271A]'
                    : 'border-[#2B1A10]/10 bg-[#FFFFFF] shadow-xs'
                }`}
              >
                {/* Project Thumbnail with 1.07x Hover Zoom */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={getProjectPreviewUri(project.theme)}
                    alt={`${project.title} — ${project.subtitle}`}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.07]"
                  />
                </div>

                {/* Card Footer: Title, Subtitle & Round Dark Arrow Button (turns orange on hover) */}
                <div className="flex flex-1 items-center justify-between gap-3 p-5">
                  <div>
                    <h3 className="text-lg leading-snug font-extrabold tracking-tight">
                      {project.title}
                    </h3>
                    <p
                      className={`mt-1 text-xs font-medium ${
                        darkMode ? 'text-[#F8F1E5]/75' : 'text-[#6B5848]'
                      }`}
                    >
                      {project.subtitle}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openProjectModal(project);
                    }}
                    aria-label={`Inspect ${project.title} architecture and details`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2B1A10] text-white transition-colors duration-300 group-hover:bg-[#F26B1D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F26B1D] cursor-pointer"
                  >
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ===================================================================
            7. CTA SECTION (Dark brown #2B1A10)
            =================================================================== */}
        <section
          id="cta"
          aria-labelledby="cta-heading"
          className="w-full bg-[#2B1A10] py-20 text-center text-[#F8F1E5] sm:py-28"
        >
          <motion.div
            {...getScrollRevealProps(0)}
            className="mx-auto flex max-w-[760px] flex-col items-center px-4 sm:px-6"
          >
            {/* Round Paper-Plane Button */}
            <button
              type="button"
              onClick={() => setActiveModal('contact')}
              aria-label="Open contact form to collaborate with Anusree"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F26B1D] text-white shadow-lg transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F9A03F] cursor-pointer"
            >
              <Send
                className="h-7 w-7 -translate-x-0.5 translate-y-0.5"
                aria-hidden="true"
              />
            </button>

            {/* Eyebrow */}
            <p className="mt-7 text-[12px] font-bold uppercase tracking-[0.25em] text-[#F9A03F]">
              {SITE_DATA.cta.eyebrow}
            </p>

            {/* Heading: Second line in orange */}
            <h2
              id="cta-heading"
              className="mt-4 text-4xl leading-[1.05] font-extrabold tracking-tight text-white sm:text-6xl"
            >
              <span className="block">{SITE_DATA.cta.headingLine1}</span>
              <span className="block text-[#F26B1D]">
                {SITE_DATA.cta.headingLine2}
              </span>
            </h2>

            {/* Text */}
            <p className="mt-6 max-w-[560px] text-base leading-relaxed text-[#F8F1E5]/80 sm:text-lg">
              {SITE_DATA.cta.description}
            </p>

            {/* White Pill "Get in Touch →" */}
            <div className="mt-9">
              <PillButton
                variant="white"
                onClick={() => setActiveModal('contact')}
              >
                {SITE_DATA.cta.buttonLabel}
              </PillButton>
            </div>
          </motion.div>
        </section>
      </main>

      {/* =====================================================================
          INTERACTIVE MODALS (Contact, Showreel/Architecture, CV, Project Case Study)
          ===================================================================== */}
      <AnimatePresence>
        {activeModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-xs"
              aria-hidden="true"
            />

            <motion.div
              initial={
                prefersReducedMotion
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.94, y: 16 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.94, y: 16 }
              }
              transition={{ duration: 0.25 }}
              className={`relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[22px] p-6 shadow-2xl sm:p-8 ${
                darkMode
                  ? 'border border-white/10 bg-[#2B1A10] text-[#F8F1E5]'
                  : 'bg-[#FFFFFF] text-[#2B1A10]'
              }`}
            >
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                aria-label="Close modal"
                className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#F8F1E5] text-[#2B1A10] transition-colors hover:bg-[#F26B1D] hover:text-white focus-visible:outline-2 focus-visible:outline-[#F26B1D] cursor-pointer"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>

              {/* CONTACT MODAL (Pre-populated with Anusree's CV details) */}
              {activeModal === 'contact' && (
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#F26B1D]">
                    GET IN TOUCH
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                    Connect with Anusree KS
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    <a
                      href={`mailto:${SITE_DATA.brand.email}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#F26B1D]/15 px-3 py-1 font-bold text-[#F26B1D]"
                    >
                      <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                      {SITE_DATA.brand.email}
                    </a>
                    <a
                      href="tel:+919048372952"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#F9A03F]/20 px-3 py-1 font-bold"
                    >
                      <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                      {SITE_DATA.brand.phone}
                    </a>
                  </div>

                  {contactSubmitted ? (
                    <div className="mt-6 flex flex-col items-center rounded-[22px] bg-[#F8F1E5] p-6 text-center text-[#2B1A10]">
                      <CheckCircle2 className="h-10 w-10 text-[#F26B1D]" />
                      <p className="mt-3 text-lg font-extrabold">
                        Message Sent to Anusree!
                      </p>
                      <p className="mt-1 text-sm text-[#6B5848]">
                        Thank you for reaching out. I&apos;ll respond shortly from Thiruvananthapuram.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="mt-5 space-y-4">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-bold uppercase tracking-wider"
                        >
                          Your Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, name: e.target.value })
                          }
                          placeholder="Your name or organization"
                          className={`mt-1.5 w-full rounded-xl border px-4 py-2.5 text-sm focus:border-[#F26B1D] focus:outline-none ${
                            darkMode
                              ? 'border-white/15 bg-[#1B110A] text-white'
                              : 'border-[#2B1A10]/15 bg-[#F8F1E5]/60 text-[#2B1A10]'
                          }`}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-bold uppercase tracking-wider"
                        >
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, email: e.target.value })
                          }
                          placeholder="you@company.com"
                          className={`mt-1.5 w-full rounded-xl border px-4 py-2.5 text-sm focus:border-[#F26B1D] focus:outline-none ${
                            darkMode
                              ? 'border-white/15 bg-[#1B110A] text-white'
                              : 'border-[#2B1A10]/15 bg-[#F8F1E5]/60 text-[#2B1A10]'
                          }`}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-message"
                          className="block text-xs font-bold uppercase tracking-wider"
                        >
                          Project or Role Brief
                        </label>
                        <textarea
                          id="contact-message"
                          rows={3}
                          required
                          value={contactForm.message}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, message: e.target.value })
                          }
                          placeholder="Share details about your Node.js/React system, Blockchain DApp, or QA architecture needs..."
                          className={`mt-1.5 w-full rounded-xl border px-4 py-2.5 text-sm focus:border-[#F26B1D] focus:outline-none ${
                            darkMode
                              ? 'border-white/15 bg-[#1B110A] text-white'
                              : 'border-[#2B1A10]/15 bg-[#F8F1E5]/60 text-[#2B1A10]'
                          }`}
                        />
                      </div>

                      <PillButton type="submit" variant="orange" className="w-full">
                        Send Message
                      </PillButton>
                    </form>
                  )}
                </div>
              )}

              {/* SHOWREEL & ARCHITECTURE OVERVIEW MODAL */}
              {activeModal === 'showreel' && (
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#F26B1D]">
                    ARCHITECTURE &amp; ENGINEERING REEL
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold">
                    From 12+ Years QA to Full-Stack &amp; Web3
                  </h3>
                  <div className="mt-5 overflow-hidden rounded-[22px] bg-[#1B110A] p-6 text-[#F8F1E5]">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="inline-flex items-center gap-2 text-xs font-bold text-[#F9A03F]">
                        <Sparkles className="h-4 w-4" aria-hidden="true" />{' '}
                        PRODUCTION TRACK RECORD
                      </span>
                      <span className="rounded-full bg-[#F26B1D] px-3 py-0.5 text-xs font-bold text-white">
                        MERN + WEB3
                      </span>
                    </div>
                    <div className="my-5 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-[#2B1A10] p-4">
                        <p className="text-2xl font-extrabold text-[#F26B1D]">
                          12+ Yrs
                        </p>
                        <p className="mt-1 text-xs text-[#F8F1E5]/75">
                          QA Engineering &amp; Zero-Defect AWS Migration
                        </p>
                      </div>
                      <div className="rounded-xl bg-[#2B1A10] p-4">
                        <p className="text-2xl font-extrabold text-[#F9A03F]">
                          4+ Systems
                        </p>
                        <p className="mt-1 text-xs text-[#F8F1E5]/75">
                          Node.js/Kafka Engines &amp; ICP/Fabric DApps
                        </p>
                      </div>
                    </div>
                    <p className="text-xs leading-relaxed text-[#F8F1E5]/80">
                      Combining deep quality engineering with hands-on distributed
                      systems development at chargeMOD, cross-chain ICP DApp builds at
                      BlockseBlock, and 12+ years of enterprise data validation at
                      Cognizant / Dun &amp; Bradstreet.
                    </p>
                  </div>
                </div>
              )}

              {/* CV SUMMARY & DOWNLOAD MODAL */}
              {activeModal === 'cv' && (
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#F26B1D]">
                    CURRICULUM VITAE
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold">
                    {SITE_DATA.about.cvSummary.title}
                  </h3>
                  <p
                    className={`mt-1 text-xs font-medium ${
                      darkMode ? 'text-[#F8F1E5]/75' : 'text-[#6B5848]'
                    }`}
                  >
                    {SITE_DATA.about.cvSummary.subtitle}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F26B1D]/15 px-3 py-1 font-bold text-[#F26B1D]">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />{' '}
                      {SITE_DATA.brand.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F9A03F]/20 px-3 py-1 font-bold">
                      <Mail className="h-3.5 w-3.5" aria-hidden="true" />{' '}
                      {SITE_DATA.brand.email}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2.5 text-xs leading-relaxed sm:text-sm">
                    {SITE_DATA.about.cvSummary.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Star
                          className="mt-1 h-4 w-4 shrink-0 text-[#F26B1D]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {SITE_DATA.about.cvSummary.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-[#2B1A10] px-3 py-1 text-xs font-bold text-[#FAD9A6]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={handleDownloadCvText}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#F26B1D] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#d95b12] focus-visible:outline-2 focus-visible:outline-[#F26B1D] cursor-pointer"
                    >
                      <Download className="h-4 w-4" aria-hidden="true" />
                      Download CV Summary
                    </button>
                  </div>
                </div>
              )}

              {/* PROJECT CASE STUDY MODAL */}
              {activeModal === 'project' && selectedProject && (
                <div>
                  <div className="overflow-hidden rounded-[18px]">
                    <img
                      src={getProjectPreviewUri(selectedProject.theme)}
                      alt={`${selectedProject.title} — ${selectedProject.subtitle}`}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#F26B1D]">
                      {selectedProject.category}
                    </span>
                    <span className="rounded-full bg-[#F9A03F]/25 px-3 py-0.5 text-xs font-bold">
                      {selectedProject.year}
                    </span>
                  </div>
                  <h3 className="mt-1 text-2xl font-extrabold">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-bold text-[#F26B1D]">
                    {selectedProject.subtitle}
                  </p>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      darkMode ? 'text-[#F8F1E5]/80' : 'text-[#6B5848]'
                    }`}
                  >
                    {selectedProject.summary}
                  </p>

                  {selectedProject.bullets && (
                    <ul className="mt-3 space-y-1.5 text-xs leading-relaxed">
                      {selectedProject.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F26B1D]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[#2B1A10] px-3.5 py-1 text-xs font-bold text-[#FAD9A6]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <PillButton
                      variant="orange"
                      onClick={() => setActiveModal('contact')}
                      className="w-full"
                    >
                      Discuss This Architecture
                    </PillButton>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}