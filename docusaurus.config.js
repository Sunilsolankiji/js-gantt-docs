import { themes as prismThemes } from "prism-react-renderer";

const isDev = process.env.NODE_ENV === "development";

const isDeployPreview =
  !!process.env.NETLIFY && process.env.CONTEXT === "deploy-preview";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "js-gantt-docs",
  tagline: "Streamline Your Project Timelines with Ease",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://sunilsolankiji.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/js-gantt-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Sunilsolankiji", // Usually your GitHub org/user name.
  projectName: "js-gantt-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "js-gantt",
        logo: {
          alt: "js-gantt Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Getting Started",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "api",
            label: "API",
          },
          {
            href: "https://github.com/sunilsolankiji/jsgantt",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/docs/getting-started",
              },
              {
                label: "Installation",
                to: "/docs/installation",
              },
              {
                label: "Features",
                to: "/docs/installation",
              },
            ],
          },
          {
            title: "Configuration",
            items: [
              {
                label: "Options",
                to: "/docs/installation",
              },
              {
                label: "Templates",
                to: "/docs/installation",
              },
              {
                label: "Events",
                to: "/docs/installation",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "API",
                to: "/docs/api/general",
              },
              {
                label: "GitHub",
                href: "https://github.com/sunilsolankiji/jsgantt",
              },
            ],
          },
        ],
        copyright: `Copyright © 2023 jsgantt`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        appId: "WGN8TBRKNK",
        apiKey: "ee4324f1924bdd3dfd6d0e296ff5849d",
        indexName: "ztss221io",
        replaceSearchResultPathname:
          isDev || isDeployPreview
            ? {
                from: /^\/docs\/next/g.source,
                to: "/docs",
              }
            : undefined,
      },
    }),
};

export default config;
