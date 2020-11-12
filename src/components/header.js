import { Link } from "gatsby"
import PropTypes from "prop-types"
import styles from "./header.module.css"
import Logo from "./logo.js"
import React from "react"

const Header = ( {data} ) => {
  console.log(data)
  // const schemeToggle = <div>🌑</div>;
  return (
  <header className={styles.navbar}>
    <nav class="wrapper">
        <div className={styles.homelink}>
        <Link to="/">
          <Logo color="white" />

          </Link>

      </div>
      <ul > 
          <li>
            <Link className={styles.navlink} to="/">Nicola Codes</Link>
          </li>

      </ul>
      <ul className={styles.secondary}>
        <li>
          <Link className={styles.navlink} to="/projects/">Projects</Link>
        </li>
        <li>
          <Link className={styles.navlink} to="/about/">About</Link>
        </li>
        <li>
          <Link className={styles.navlink} to="/blog/">Blog</Link>
        </li>
        {/* <li>
          {schemaToggle}
        </li> */}

      </ul>

    </nav>
    
  </header>
)
  }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

export const query = graphql`
query {
  file {
      childImageSharp {
        fluid(maxWidth: 100, maxHeight: 250) {
          src
          srcSet
        }
      }
    } 
}`;