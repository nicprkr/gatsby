import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import containerStyles from "../components/container.module.css"

const Blog = ({ data }) => {
  const {edges: posts} = data.allMarkdownRemark;
  return (
  
  <Layout>
    <SEO title="Blog" />
<h1>Blog</h1>
    <section>

<h2 class="spaced">Recent Posts</h2>
{posts.map (({node: post}) => {
        const {frontmatter} = post;
        return (
          <div className={containerStyles.container}>
            <h4>
              <Link to={frontmatter.path}>
                {frontmatter.title}
              </Link>
            </h4>
            <p className={containerStyles.date}>{frontmatter.date}</p>
            <p>{frontmatter.excerpt}</p>
              <ul className={containerStyles.tags}>
              {post.frontmatter.tags.map (tag => {
                return (
                  <li>
                    <Link className={containerStyles.tag} to={`/tags/${tag}`}>
                      #{tag}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

  </section>
  </Layout>
  )
}

export default Blog

export const query = graphql`
query blogQuery {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          date
          title
          tags
          path
          excerpt
        }
      }
    }
  }
}

`



