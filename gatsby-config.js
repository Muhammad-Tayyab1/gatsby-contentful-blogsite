module.exports = {
  siteMetadata: {
    title: `Gatsby Contentful Blog`,
    description: `Write your site description here!`,
    author: `Muhammad Tayyab`,
    social: {
      twitter: `Muhamma45165722`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, 
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: `y5dmf9a605x5`,
        accessToken: `yQ1oaWU1e3zF3PgV1UQFoReHZ2u2bmAnMDh9b_oxV_g`,
        forceFullSync: true,
      },
    },
    "gatsby-plugin-typescript",
  ],
}
