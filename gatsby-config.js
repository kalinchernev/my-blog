module.exports = {
  siteMetadata: {
    title: 'My Blog',
    slogan: 'Learning Gatsby.js',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: './src/utils/typography',
      },
    },
  ],
}
