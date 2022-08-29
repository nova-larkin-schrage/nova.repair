module.exports = {
  siteMetadata: {
    title: `Nova Larkin Schrage`,
    description: `Nova Larkin Schrage: poems & star repair`,
    author: `Nova Larkin Schrage`,
    siteUrl: `https://nova.repair/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nova-larkin-schrage`,
        short_name: `nova`,
        start_url: `/`,
        background_color: `#0d1219`,
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#0d1219`,
        display: `minimal-ui`,
        icon: `src/images/2i_borisov.png`,
      },
    },
  ],
}
