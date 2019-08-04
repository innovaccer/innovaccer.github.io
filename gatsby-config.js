module.exports = {
  siteMetadata: {
    title: '',
    nav: {
      logo:
        'https://innovaccer.com/static/image/site-logo/innovaccer-logo-black.svg',
      link: {
        title: 'GO TO INNOVACCER.COM',
        url: 'http://innovaccer.com',
      },
    },
    banner: {
      title: 'open source',
      text: [
        'OUT WITH CLOSED DEV WORKFLOW.',
        'IN WITH THE FREEDOM TO COLLABORATE',
      ],
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['src/styles'],
      },
    }
  ],
};
