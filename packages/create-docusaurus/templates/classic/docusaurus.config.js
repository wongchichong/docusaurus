// @ts-check
// This is a placeholder configuration for a Woby.js site.
// The structure and options will depend on the Woby framework's conventions.

/** @type {import('@docusaurus/types').Config} */ // Kept for potential future use if types are generic enough
const config = {
  title: 'My Woby Site',
  tagline: 'Woby sites are cool',
  favicon: 'img/favicon.ico', // Assumes static asset handling

  url: 'https://your-woby-site.example.com',
  baseUrl: '/',

  // Placeholder for Woby-specific settings
  themeConfig: {
    navbar: {
      title: 'My Woby Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: 'Home', position: 'left'},
        // Add other Woby-specific links here
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Woby.`,
    },
  },
};

export default config;
