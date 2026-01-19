// ============================================
// SITE CONFIGURATION
// ============================================

export const siteConfig = {
  // ============================================
  // SITE METADATA
  // ============================================
  site: {
    name: 'LiquiTool',
    email: 'liquitool@pluta.net',
  },

  // ============================================
  // NAVIGATION
  // ============================================
  navigation: {
    links: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'FAQ', href: '#faq' },
    ],
    cta: {
      text: 'Get Started',
      href: '#contact',
    },
  },

  // ============================================
  // HOW IT WORKS
  // ============================================
  howItWorks: {
    title: 'So funktioniert\'s',
    subtitle: 'Einsatzbereit innerhalb eines Tages – so einfach geht\'s',
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: {
    title: 'Bewährte Lösungen für Unternehmen',
    subtitle: 'Von Möbelherstellern bis Krankenhäusern – unsere Kunden vertrauen auf LiquiTool',
    companyLogos: [
      'TECHFLOW',
      'INNOVATE',
      'DATASTREAM',
      'CLOUDSYNC',
      'NEXUSAI',
    ],
  },

  // ============================================
  // FAQ
  // ============================================
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about AI Agent Platform',
  },

  // ============================================
  // CONTACT
  // ============================================
  contact: {
    title: 'Start Building Today',
    subtitle:
      'Join thousands of teams using AI agents to automate their workflows. Get started in minutes with our free tier.',
    benefits: [
      'No credit card required',
      'Setup in under 5 minutes',
      'Cancel anytime',
      '24/7 customer support',
    ],
    email: 'hello@aiagentplatform.com',
    form: {
      cta: 'Get Started Free',
      fields: {
        name: {
          label: 'Full Name',
          placeholder: 'John Doe',
          required: true,
        },
        email: {
          label: 'Work Email',
          placeholder: 'john@company.com',
          required: true,
        },
        company: {
          label: 'Company',
          placeholder: 'Your Company Inc.',
          required: false,
        },
        message: {
          label: 'What would you like to automate?',
          placeholder: 'Tell us about your workflow and automation needs...',
          required: false,
        },
      },
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    tagline:
      'Intelligent automation for modern teams. Transform your workflow with AI.',
    columns: [
      {
        title: 'Product',
        links: [
          { name: 'Features', href: '#features' },
          { name: 'Integrations', href: '#' },
          { name: 'API Docs', href: '#' },
          { name: 'Changelog', href: '#' },
        ],
      },
      {
        title: 'Company',
        links: [
          { name: 'About Us', href: '#' },
          { name: 'Blog', href: '#' },
          { name: 'Careers', href: '#' },
          { name: 'Press Kit', href: '#' },
          { name: 'Contact', href: '#contact' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { name: 'Privacy Policy', href: '#' },
          { name: 'Terms of Service', href: '#' },
          { name: 'Cookie Policy', href: '#' },
          { name: 'Security', href: '#' },
          { name: 'Compliance', href: '#' },
        ],
      },
    ],
    social: [
      { name: 'Twitter', href: '#', icon: 'twitter' },
      { name: 'GitHub', href: '#', icon: 'github' },
      { name: 'Dribbble', href: '#', icon: 'dribbble' },
      { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    ],
    copyright: `${new Date().getFullYear()} AI Agent Platform. All rights reserved.`,
  },
};
