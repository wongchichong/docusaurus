// This is a placeholder configuration for a Woby.js site.
// The structure and options will depend on the Woby framework's conventions.
// import type {Config} from '@docusaurus/types'; // Kept for potential future use

// Define a more generic Config type or use 'any' for now
type WobySiteConfig = {
  title: string;
  tagline: string;
  favicon?: string;
  url: string;
  baseUrl: string;
  themeConfig: {
    navbar?: { title?: string; logo?: { alt?: string; src?: string }; items?: any[] };
    footer?: { style?: string; copyright?: string; links?: any[] };
    // Add other Woby-specific theme options here
  };
  // Add other Woby-specific site options here
};

const config: WobySiteConfig = {
  title: 'My Woby Site (TS)',
  tagline: 'Woby sites are cool - TypeScript Edition!',
  favicon: 'img/favicon.ico',

  url: 'https://your-woby-site.example.com',
  baseUrl: '/',

  themeConfig: {
    navbar: {
      title: 'My Woby Site TS',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: 'Home', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Woby.`,
    },
  },
};

export default config;
