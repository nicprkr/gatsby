import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header />
        <div>
          <main>{children}</main>
          <footer style={{display: `flex`, flexDirection: `row`, justifyContent:`space-between`}}>
            <p>
            © {new Date().getFullYear()} | Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> by Nicola Codes
            </p> 
            <p>
            <a href="https://twitter.com/nicprkr">Twitter</a> | <a href="https://dribbble.com/nicprkr/"> Dribbble</a> | <a href="https://www.linkedin.com/in/nicprkr/"> LinkedIn</a> 
            </p>
          </footer>  
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
