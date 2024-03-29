import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bot CSV-Excel for Teams',
  tagline: 'Complete Guide to Implementing and Managing the CSV-Excel Converter Bot in Microsoft Teams',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://katarro.github.io',
  baseUrl: '/bot-method-documentation/',

  organizationName: 'katarro', // Tu nombre de usuario en GitHub.
  projectName: 'bot-method-documentation',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({


        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/katarro/bot-method-documentation',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/Logo.png',

      navbar: {
        logo: {
          alt: 'Método Logística',
          src: 'img/LogoLight.svg',
          srcDark: 'img/LogoNegro.svg',
        },


        items: [
         /*  {
            type: 'localeDropdown',
            position: 'right',
          }, */

          /* {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          }, */
        ],
      },
      footer: {
        style: 'light',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Logistics Method. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
