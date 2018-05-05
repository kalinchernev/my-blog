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

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const results = await graphql(`
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
  `)

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
}
