module.exports = {
  siteMetadata: {
    title: 'James Barnes',
  },
  plugins: [`gatsby-plugin-react-helmet`,
  {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `libre franklin\: 400,400i,700,900`,
          `libre baskerville\:400,400i,700` // you can also specify font weights and styles
        ]
      },},],
}


// module.exports = {
//   siteMetadata: {
//     title: 'James Barnes',
//   },
//   plugins: ['gatsby-plugin-react-helmet',{
//       resolve: `gatsby-plugin-google-fonts`,
//       options: {
//         fonts: [
//           `libre franklin\: 400,400i,700,900`,
//           `libre baskerville\:400,400i,700` // you can also specify font weights and styles
//         ]
//       },
//     ]
// }
