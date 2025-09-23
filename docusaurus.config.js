// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Mulai Petualangan Web Anda Sekarang.",
  tagline: "Dapatkan panduan untuk menguasai HTML, CSS, Git, dan lainnya",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    experimental_faster: {
      rspackBundler: true, // required flag
      rspackPersistentCache: true, // new flag
    },
  },

  // Set the production url of your site here
  url: "https://html-css-git-tutorial.vercel.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "tio-pratomo", // Usually your GitHub org/user name.
  projectName: "html css git tutorial", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // Turn off default docs
        blog: false, // Turn off blog
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "html",
        path: "html",
        routeBasePath: "html",
        sidebarPath: "./sidebarsHtml.js",
        editUrl:
          "https://github.com/Tio-pratomo/html-css-git-tutorial/tree/main/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "css",
        path: "css",
        routeBasePath: "css",
        sidebarPath: "./sidebarsCss.js",
        editUrl:
          "https://github.com/Tio-pratomo/html-css-git-tutorial/tree/main/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "git",
        path: "git",
        routeBasePath: "git",
        sidebarPath: "./sidebarsGit.js",
        editUrl:
          "https://github.com/Tio-pratomo/html-css-git-tutorial/tree/main/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docusaurus",
        path: "docusaurus",
        routeBasePath: "docusaurus",
        sidebarPath: "./sidebarsDocusaurus.js",
        editUrl:
          "https://github.com/Tio-pratomo/html-css-git-tutorial/tree/main/",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/web-dev-social-card.jpg",
      navbar: {
        title: "My Site",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "HTML",
            docsPluginId: "html",
          },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "CSS",
            docsPluginId: "css",
          },
          {
            type: "docSidebar",
            sidebarId: "gitSidebar",
            position: "left",
            label: "Git",
            docsPluginId: "git",
          },
          {
            type: "docSidebar",
            sidebarId: "docusaurusSidebar",
            position: "left",
            label: "Docusaurus",
            docsPluginId: "docusaurus",
          },
          {
            href: "https://github.com/Tio-pratomo/html-css-git-tutorial/tree/main/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Tutorials",
            items: [
              {
                label: "HTML",
                to: "/html/intro",
              },
              {
                label: "CSS",
                to: "/css/intro",
              },
              {
                label: "Git",
                to: "/git/intro",
              },
              {
                label: "Docusaurus",
                to: "/docusaurus/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "X",
                href: "https://x.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Tio-pratomo/html-css-git-tutorial",
              },
            ],
          },
          {
            title: "Thanks to bellshade",
            items: [
              {
                label: "Github",
                href: "https://github.com/bellshade/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Web Development Tutorial.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["markdown"],
      },
    }),
};

export default config;
