import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import containerStyles from "../components/container.module.css"

const IndexPage = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;
    return (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <header class="intro wrapper">
        <h1>Hi, I'm Nicola. I'm a...</h1>
        <div class="slidingWords">web developer</div>
      <p>I like coding things, semantic HTML, and solving weird bugs.</p>
      <a href="mailto:hi@nicola.codes">hi@nicola.codes</a>
    </header>

 <section class="wrapper">
   <div class="number-wrapper" >
     <div class="number" data-number-section="01"></div>
   </div>
   <h2>Projects</h2>
   <div class="grid--card-layout">
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
   </div>
   <p><Link to="/projects">See all projects >></Link></p>
 </section>
 <section class="wrapper">
 <div class="number-wrapper" >
     <div class="number" data-number-section="02"></div>
   </div>
   <h2>About</h2>
   <p>I'm a web developer with 5+ years industry experience. I do a lot of stuff, but mostly I do <b>custom Wordpress Themes</b>, <b>React-based websites</b>, and <b>Marketing Landing Pages</b>. I've got experience working with APIs, databases (SQL and cloud), and marketing automation. Dare I say it? I also know how to code email templates.</p>
   <p>I come from a Fine Arts/Graphic Design background but fell in love with coding during my 2-year stint at BCIT.</p>
   <p><b>My Top Qualities</b></p>
   <ul>
     <li>Really good at googling Stack Overflow answers</li>
     <li>Obsessed with form UX</li>
     <li>Will write incredibly detailed feedback on website surveys</li>
     <li>If you ever need to know about the difference between Impressionism and Post-Impressionism, in addition to the difference between a LAMP and a JAMstack website, I'm f*ckin' ready</li>
   </ul>
 </section>
<section class="wrapper">
<div class="number-wrapper" >
     <div class="number" data-number-section="03"></div>
   </div>
<h2>Recent Posts</h2>
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
            <p>{frontmatter.date}</p>
            <p>{frontmatter.excerpt}</p>
              <ul className={containerStyles.tags}>
              {post.frontmatter.tags.map (tag => {
                return (
                  <li>
                    <Link to={`/tags/${tag}`}>
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
  <section class="wrapper">
  <div class="number-wrapper" >
     <div class="number" data-number-section="04"></div>
   </div>
   <h2>Contact Me</h2>
 </section>
  </Layout>
)
}

export default IndexPage

export const query = graphql`
    query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit:3) {
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



