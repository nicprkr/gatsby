import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import containerStyles from "../components/container.module.css"

const IndexPage = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;
    return (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
<article class="home">
    <section class="about">
        <h2>About</h2>
      <p>I'm a web developer from Vancouver, B.C., and I spend a lot of time trying to figure out how to code things. These are some web development tidbits &amp; tricks I've picked up along the way.</p>
      <br/>
      <h2>Contact</h2>
      <a href="mailto:hi@nicola.codes">hi@nicola.codes</a>
    </section>
 
    
<section>

<h2 class="spaced">Recent Posts</h2>
    <div>
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
              <ul className={containerStyles.tagList}>
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
  </div>
  </section>
  </article>
  </Layout>
)
}

export default IndexPage

export const query = graphql`
    query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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



