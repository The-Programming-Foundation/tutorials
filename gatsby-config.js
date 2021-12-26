module.exports = {
  //no needed for custome domains pathPrefix: '/tutorials', // Temporary to match GH Pages prefix
  siteMetadata: {
    siteUrl: "https://www.theprogrammingfoundation.org/",
    author: "The Programming Foundation",
    title: "The Programming Foundation",
    description:
      "A high-level programming language for general purpose programming",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/lessons`,
        name: "lessons",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-168060731-2",
      },
    },
    {
      resolve: `gatsby-plugin-clarity`,
      options: {
        // String value for your clarity project id
        // Project id is found in your clarity dashboard url
        // https://clarity.microsoft.com/projects/view/{clarity_project_id}/
        clarity_project_id: "6txkitvfj4",
        // Boolean value for enabling clarity while developing
        // true will enable clarity tracking code on both development and production environments
        // false will enable clarity tracking code on production environment only
        //
        enable_on_dev_env: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lessontopic`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-transition-link",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "The Programming Foundation",
        short_name: "The Programming Foundation",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#000000",
        display: "standalone",
        icon: "assets/logo.png",
      },
    },
    "gatsby-plugin-offline",
  ],
};
