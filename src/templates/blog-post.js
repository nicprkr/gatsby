
import React from 'react';
import { Link } from "gatsby"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import containerStyles from "../components/container.module.css"

const Template = ({data, location, pageContext}) => {
  const {markdownRemark: post} = data;
  const {frontmatter, html} = post;
  const {title, date} = frontmatter;
  const {next, prev} = pageContext;

  return (
      <Layout>
    <SEO title={`${frontmatter.title} | Nicola Codes`}  keywords={frontmatter.tags} />
    <div>
      <Helmet title={`${frontmatter.title} | Nicola Codes`} />
      <div className={containerStyles.padded}>
        <h1>{frontmatter.title}</h1>
        <span style={{color: `grey`}}>{frontmatter.date}</span>
<div className={containerStyles.flow} >
        <div dangerouslySetInnerHTML={{__html: html}}/>
        <div className={containerStyles.aside}>
        <p style={{fontSize:`0.8rem`}}><i>Nicola is a web developer from Vancouver, B.C. and a professional curator of random facts.</i></p>
      </div>
      </div>

        <div style={{display: `flex`, width: `100%`, flexFlow: `row nowrap`, justifyContent: `space-between`, padding: `1rem 0`}}>
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