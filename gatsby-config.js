module.exports = {
  siteMetadata: {
    orgName: 'innovaccer',
    siteUrl: 'https://innovaccer.github.io/',
    title: 'Innovaccer Open-source',
    description: 'Innovaccer open-source',
    author: 'Innovaccer',
    lang: 'en',
    keywords: 'Innovaccer, Open Source',
    nav: {
      logo:
        'https://innovaccer.com/static/image/site-logo/innovaccer-logo-black.svg',
      link: {
        title: 'GO TO INNOVACCER.COM',
        url: 'http://innovaccer.com',
      },
    },
    footer: {
      copyright: ' © Innovaccer Inc. 2019',
      links: [
        {
          title: 'Privacy Policy',
          url: 'https://innovaccer.com/privacy/',
        },
        {
          title: 'Terms of Use',
          url: 'https://innovaccer.com/terms-of-use/',
        },
      ],
      social: [
        {
          title: 'Linkedin',
          url: 'https://www.linkedin.com/company/innovaccer',
          icon: 'linkedin',
        },
        {
          title: 'twitter',
          url: 'https://twitter.com/innovaccer',
          icon: 'twitter',
        },
        {
          title: 'github',
          url: 'https://github.com/innovaccer',
          icon: 'github',
        },
        {
          title: 'facebook',
          url: 'https://www.facebook.com/InnovAccer',
          icon: 'facebook',
        },
        {
          title: 'youtube',
          url: 'https://www.youtube.com/channel/UCl3JT1Wm_MHu20T37UgZs8w',
          icon: 'youtube',
        },
      ],
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
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['src/styles'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Innovaccer Open Source`,
        short_name: `Innovaccer`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#e31c79`,
        display: `standalone`,
      },
    },
    'gatsby-plugin-offline',
  ],
};
