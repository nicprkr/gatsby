
import React from 'react';
import { Link } from "gatsby"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import containerStyles from "../components/container.module.css"
import blogStyles from "../components/blog.module.css"

const Template = ({data, location, pageContext}) => {
  const {markdownRemark: post} = data;
  const {frontmatter, html} = post;
  const {title, date} = frontmatter;
  const {next, prev} = pageContext;

  return (
      <Layout>
    <SEO title={`${frontmatter.title} | Nicola Codes`}  keywords={frontmatter.tags} />
      <Helmet title={`${frontmatter.title} | Nicola Codes`} />
        <header class="wrapper">
        <h1>{frontmatter.title}</h1>
        <span>{frontmatter.date}</span>
        </header>

        <article class="wrapper">
          <div className={blogStyles.flow} dangerouslySetInnerHTML={{__html: html}}/>

        </article>
        {/* <div className={containerStyles.aside}>
          <p><i>Nicola is a web developer from Vancouver, B.C. and a professional curator of random facts.</i></p>
        </div> */}

        <div>
          <p>
          {prev &&
            <Link to={prev.frontmatter.path}>
              &#8592; {prev.frontmatter.title}
            </Link>
          }
        </p>
        <p>
          {next &&
            <Link to={next.frontmatter.path}>
              {next.frontmatter.title} &#8594; 
            </Link>}
        </p>
      </div>
  </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM, DD, YYYY")
        path
        tags
        excerpt
      }
    }
  }
`

export default Template;