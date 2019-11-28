import { Link } from "gatsby"
import PropTypes from "prop-types"
import styles from "./header.module.css"
// import Logo from '../images/Logo'
import React from "react"

const Header = () => (
  <header className={styles.header}>
    <section className={styles.wrapper}>
        <div className={styles.homelink}>
        <Link to="/">
           {/* <Logo />  */}
          </Link>

      </div>
      <ul className={styles.navlinks}> 
          <li>
            <Link className={styles.bigHeader} to="/">Nicola Codes</Link>
          </li>

      </ul>
      <ul class="secondary">
        <li>
          <Link className={styles.bigHeader} to="/projects/">Projects</Link>
        </li>
        <li>
          <Link className={styles.bigHeader} to="/about/">About</Link>
        </li>

      </ul>
    </section>
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
