
import React from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AllTags = ({pageContext}) => {
  const {tags} = pageContext;
  if (tags) {
    return (
      <Layout>
      <SEO title={`${tags} | Nicola Codes`}  keywords={tags} />
    <div>
        <h1>{tags}</h1>
      <div>
        <ul>
          {tags.map (tag => {
            return (
              <li>
                <Link to={`tags/${tag}`}>
                  {tag}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      </div>
      </Layout>
    );
  }
};

export default AllTags;