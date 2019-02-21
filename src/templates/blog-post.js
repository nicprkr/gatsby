
import React from 'react';
import { Link } from "gatsby"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Template = ({data, location, pathContext}) => {
  const {markdownRemark: post} = data;
  const {frontmatter, html} = post;
  const {title, date} = frontmatter;
  const {next, prev} = pathContext;

  return (
      <Layout>
    <SEO title={`${frontmatter.title} - My Blog`}  keywords={frontmatter.tags} />
    <div>
      <Helmet title={`${frontmatter.title} - My Blog`} />
      <div>
        <h1>{frontmatter.title}</h1>
        <h3>{frontmatter.date}</h3>
        <div dangerouslySetInnerHTML={{__html: html}}/>
        <p>
          {prev &&
            <Link to={prev.frontmatter.path}>
              Previous: {prev.frontmatter.title}
            </Link>
          }
        </p>
        <p>
          {next &&
            <Link to={next.frontmatter.path}>
              Next: {next.frontmatter.title}
            </Link>}
        </p>
      </div>
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