import { CreatePagesArgs } from "gatsby"
import path from "path"
import { Query } from "../graphql-types"

export async function createPages({ actions, graphql }: CreatePagesArgs) {
  const { createPage } = actions

  const { data, errors } = await graphql<Query>(`
    query LatestPostListQuery {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            html
            excerpt(truncate: true, pruneLength: 200)
            frontmatter {
              title
              path
              date(formatString: "YYYY-MM-DD HH:mm:ss")
            }
            id
          }
        }
      }
    }
  `)

  if (errors) {
    throw errors
  }

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      context: {
        html: node.html,
        title: node.frontmatter.title,
        date: node.frontmatter.date,
      },
      component: path.resolve(__dirname, "../templates/PostTemplate.tsx"),
    })
  })
}
