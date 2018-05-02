const path = require('path')

exports.onCreateNode = ({ node, boundActionCreators }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const slug = node.frontmatter.slug
    const { createNodeField } = boundActionCreators
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(results => {
      const posts = results.data.allMarkdownRemark.edges
      posts.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          context: {
            slug: node.fields.slug,
          },
          component: path.resolve('./src/templates/blog-post.js'),
        })
      })

      resolve()
    })
  })
}
