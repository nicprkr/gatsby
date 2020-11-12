// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import styles from "./card.module.css"
// import Logo from "../images/Logo"
import React from "react"

const Card = ( {data} ) => {
  console.log(data)
  return (
  <article className={styles.card}>
      <img alt="doesn't exist" />
      <h3>Project Title</h3>
      <p>Blah blah</p>
  </article>
)
  }

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Card

// export const query = graphql`
// query {
//   file {
//       childImageSharp {
//         fluid(maxWidth: 100, maxHeight: 250) {
//           src
//           srcSet
//         }
//       }
//     } 
// }`;