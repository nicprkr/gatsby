import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import containerStyles from "../components/container.module.css"

const IndexPage = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;
    return (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
        
    <Link to="/page-2/">Go to page 2</Link>
        
    <div 
        style={{
            display: `flex`, flexDirection: `row`}}>
      {posts.map (({node: post}) => {
        const {frontmatter} = post;
        return (
          <div className={containerStyles.container}>
            <h2>
              <Link to={frontmatter.path}>
                {frontmatter.title}
              </Link>
            </h2>
            <p>{frontmatter.date}</p>
            <p>{frontmatter.excerpt}</p>
              <ul>
              {post.frontmatter.tags.map (tag => {
                return (
                  <li>
                    <Link to={`/tags/${tag}`}>
                      {tag}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

    </div>
  </Layout>
)
}

export default IndexPage

export const query = graphql`
    query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`;



