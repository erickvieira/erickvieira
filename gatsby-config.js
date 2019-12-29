module.exports = {
  siteMetadata: {
    title: `Erick Vieira`,
    description: `A Software Engineer falling in love with JavaScript <3`,
    author: `@erickvieira`,
    twitterAccount: `@vserick98`,
    siteUrl: 'https://erickvieira.dev',
    keywords: `goiania, goiânia, goiás, goias, brazil, brasil, developer, dev, desenvolvedor, desenvolvimento, software, engineer, engenheiro, arquiteto, testador, requisitos, engenharia, vv, mps, mpsbr, cmmi, certics, programador, websites, sites, webapps, apps, mobile, frontend, front-end, javascript, angular, ionic, react, gatsby, node, nodejs, graphql, android, ios, nativo, hibrido, híbrido, erickvieira, vserick98, vserick, erick.vieira`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Erick Vieira`,
        short_name: `erickvieira`,
        start_url: `/`,
        background_color: `#0F0E21`,
        theme_color: `#DB3844`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
