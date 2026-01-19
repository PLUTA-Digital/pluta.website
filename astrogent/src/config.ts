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
      { name: 'Screenshots', href: '#carousel' },
      { name: 'So funktioniert\'s', href: '#how-it-works' },
      { name: 'Vergleich', href: '#comparison' },
      { name: 'Features', href: '#features' },
      { name: 'Referenzen', href: '#testimonials' },
      { name: 'FAQ', href: '#faq' },
    ],
    cta: {
      text: 'Kontakt',
      href: '#contact',
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
