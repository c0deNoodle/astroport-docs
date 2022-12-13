// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/dracula');
// @ts-ignore
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const theme = require('shiki/themes/nord.json');
const { remarkCodeHike } = require('@code-hike/mdx');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Astroport Docs',
  tagline: 'Build the future of Astroport',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'astroport-fi', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   beforeDefaultRemarkPlugins: [
        //     [remarkCodeHike, { theme }],
        //   ],
        //   routeBasePath: 'docs',
        //   path: 'docs',
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   lastVersion: 'current',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },

        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },

        docs: false,
        blog: false,
        theme: {
          customCss: [
            require.resolve('@code-hike/mdx/styles.css'),
            require.resolve('./src/css/custom.css'),
          ],
        },
      }),
    ],
  ],

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
    [
      '@docusaurus/plugin-content-docs',
      {
        beforeDefaultRemarkPlugins: [
          [
            remarkCodeHike,
            {
              showCopyButton: true,
              // lineNumbers: true,
              theme,
            },
          ],
        ],
        id: 'overview',
        path: 'docs/overview',
        routeBasePath: 'docs/overview',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/astroport-fi/docs/blob/master',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        beforeDefaultRemarkPlugins: [
          [
            remarkCodeHike,
            {
              showCopyButton: true,
              // lineNumbers: true,
              theme,
            },
          ],
        ],
        id: 'learn',
        path: 'docs/learn',
        routeBasePath: 'docs/learn',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/astroport-fi/docs/blob/master',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        beforeDefaultRemarkPlugins: [
          [
            remarkCodeHike,
            {
              showCopyButton: true,
              // lineNumbers: true,
              theme,
            },
          ],
        ],
        id: 'govern',
        path: 'docs/govern',
        routeBasePath: 'docs/govern',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/astroport-fi/docs/blob/master',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        beforeDefaultRemarkPlugins: [
          [
            remarkCodeHike,
            {
              showCopyButton: true,
              lineNumbers: true,
              theme,
            },
          ],
        ],
        id: 'develop',
        path: 'docs/develop',
        routeBasePath: 'docs/develop',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/astroport-fi/docs/blob/master',
      },
    ],
  ],

  themes: ['mdx-v2'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        items: [
          {
            to: '/docs/overview/intro-to-astroport', // ./docs-api/intro.md
            label: 'Overview',
            position: 'left',
            activeBaseRegex: `/overview/`,
          },
          {
            // to: '/docs/learn/astro-pools/constant-product-pools',
            to: '/docs/learn/astro-pools/astro-pools-intro',
            // to: '/docs/learn/astro-pools/intro',
            // to: '/docs/learn/index',
            label: 'Learn',
            position: 'left',
            activeBaseRegex: `/learn/`,
          },

          // {to: '/blog', label: 'Blog', position: 'left'},

          {
            to: '/docs/govern/astroport-improvement-proposal-framework', // ./docs-api/intro.md
            label: 'Govern',
            position: 'left',
            activeBaseRegex: `/govern/`,
          },
          {
            // to: '/docs/develop/smart-contracts/astroport-contract-addresses',
            to: '/docs/develop/category/smart-contracts',
            label: 'Develop',
            position: 'left',
            activeBaseRegex: `/develop/`,
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/astroport-fi/astroport-core',
            label: 'GitHub',
            position: 'right',
          },
        ],

        style: 'primary',
        // hideOnScroll: true,
      },

      // colorMode: {
      //   disableSwitch: true,
      // },

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Terms of Service',
                to: '/docs/overview/legal/terms-of-service',
              },
              {
                label: 'Privacy Policy',
                to: '/docs/overview/legal/privacy-policy',
              },
              {
                label: 'Cookie Policy',
                to: '/docs/overview/legal/cookie-policy',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/astroport_fi',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/astroport',
              },
              {
                label: 'Forum',
                href: 'https://forum.astroport.fi/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.astroport.fi/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
      },

      // prism: {
      //   darkTheme: darkCodeTheme,
      // },
    }),
};

module.exports = config;
