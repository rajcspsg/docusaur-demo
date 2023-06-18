module.exports = {
  title: "CodeYourFuture Syllabus",
  url: "https://syllabus.codeyourfuture.io/",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "codeyourfuture",
  projectName: "Syllabus",
  onBrokenLinks: "throw",
  plugins: [require.resolve("docusaurus-lunr-search")],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/CodeYourFuture/Syllabus-V2/edit/master/",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "UA-159979458-2",
          anonymizeIP: true,
        },
      },
    ],
  ],
  scripts: [
    // See comments in static/js/fix-location.js
    {
      src: "/js/fix-location.js",
      async: false,
      defer: false,
    },
  ],
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      }
  },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "CodeYourFuture Logo",
        src: "img/logo.png",
      },
      items: [
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Website",
              href: "https://www.codeyourfuture.io",
            },
            {
              label: "Documentation",
              href: "https://docs.codeyourfuture.io",
            },
            {
              label: "GitHub",
              href: "https://github.com/codeyourfuture/",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com/codeyourfuture.io",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/codeyourfuture_",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/CodeYourFuture",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CodeYourFuture`,
    },
  },
};
