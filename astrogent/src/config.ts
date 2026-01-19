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
      { name: 'Screenshots', href: '/#carousel' },
      { name: 'So funktioniert\'s', href: '/#how-it-works' },
      { name: 'Vergleich', href: '/#comparison' },
      { name: 'Features', href: '/#features' },
      { name: 'Referenzen', href: '/#testimonials' },
      { name: 'FAQ', href: '/#faq' },
    ],
    cta: {
      text: 'Kontakt',
      href: '/#contact',
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    tagline:
      'Strukturierte, transparente und robuste Liquiditätsplanung – die Alternative zu fehleranfälligen Excel-Modellen.',
    columns: [
      {
        title: 'Produkt',
        links: [
          { name: 'Screenshots', href: '/#carousel' },
          { name: 'So funktioniert\'s', href: '/#how-it-works' },
          { name: 'Vergleich', href: '/#comparison' },
          { name: 'Features', href: '/#features' },
          { name: 'Referenzen', href: '/#testimonials' },
          { name: 'FAQ', href: '/#faq' },
        ],
      },
      {
        title: 'Unternehmen',
        links: [
          { name: 'Über uns', href: '/ueber-uns' },
          { name: 'Kontakt', href: '/#contact' },
          { name: 'Impressum', href: '/impressum#impressum' },
          { name: 'Nutzungsbedingungen', href: '/impressum#nutzungsbedingungen' },
          { name: 'Datenschutzerklärung', href: '/impressum#datenschutz' },
        ],
      },
    ],
    social: [
      { name: 'Website', href: 'https://www.pluta.net', icon: 'website' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/company/pluta-management-gmbh/', icon: 'linkedin' },
    ],
    copyright: `${new Date().getFullYear()} PLUTA Digital GmbH. Alle Rechte vorbehalten.`,
  },
};
