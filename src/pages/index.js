import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      {posts.map((node, key) => (
        <h3 key={key}>{node.node.frontmatter.title}</h3>
      ))}
    </div>
  )
}

export default IndexPage

export const contentQuery = graphql`
  query getAllContent {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
            date
          }
        }
      }
    }
  }
`
