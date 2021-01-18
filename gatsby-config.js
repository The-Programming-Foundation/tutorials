module.exports = {
  pathPrefix: '/tutorials', // Temporary to match GH Pages prefix
  siteMetadata: {
    siteUrl: 'https://www.theprogrammingfoundation.org/',
    author: 'Subhajeet Mukherjee',
    title: 'The Programming Foundation',
    description: 'A high-level programming language for general purpose programming',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/lessons`,
        name: 'lessons',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lessontopic`,
        path: `${__dirname}/src/data/`,
        
      }
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'The Programming Foundation',
        short_name: 'The Programming Foundation',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#000000',
        display: 'standalone',
        icon: 'assets/logo.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
