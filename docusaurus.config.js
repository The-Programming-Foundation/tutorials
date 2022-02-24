// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Programming Foundation',
  tagline: 'We believe that, everybody, regardless of their age, disabilities or educational background, should learn operating systems and programming. We focus on education that is based on written instruction and concise documentation.',
  url: 'https://learn.theprogrammingfoundation.org/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'The-Programming-Foundation', // Usually your GitHub org/user name.
  projectName: 'tutorials', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/The-Programming-Foundation/tutorials/edit/4.0/',
        },
        googleAnalytics: {
          trackingID: 'UA-168060731-2',
          anonymizeIP: true,
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl:
        //     'https://github.com/The-Programming-Foundation/tutorials',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'The Programming Foundation',
        items: [
          {
            type: 'doc',
            docId: 'learn',
            position: 'left',
            label: 'Learn',
          },
          // {
          //   type: 'dropdown',
          //   label: 'Spawn VMs',
          //   items: [
          //     {
          //       label: 'Unix',
          //       href: '#unix',
          //     },
          //     {
          //       label: 'C',
          //       href: '#c',
          //     },
          //     {
          //       label: 'Python',
          //       href: '#python',
          //     },
          //   ],
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/The-Programming-Foundation/tutorials',
            label: 'Contribute',
            position: 'right',
          },
        ],
      },
      // hideableSidebar: true,
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Learn',
                to: '/docs/learn',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/forasmarterus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Programming Foundation`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
      },
      announcementBar: {
        id: 'announcement',
        content:
          'This is the Spaceship update, our most ambitious update so far! We have entirely reimagined our Learn platform experience.',
        backgroundColor: '#007ddd',
        textColor: '#000',
        isCloseable: true,
      },
      scripts: [
        {
          src: '/src/components/VirtualMachines.js',
          async: true,
        },
      ],
    }),
};

module.exports = config;
