import React from 'react';
import { Link } from "gatsby";
import Layout from "../components/layout"

const Tags = ({pageContext}) => {
  const {posts, tagName} = pageContext;

  if (posts) {
    return (
      <Layout>
      <div>
        <h1>
          Posts about {tagName}
        </h1>

        <ul style={{display: `flex`, flexDirection: `column`}}>
          {posts.map (post => {
            return (
              <li>
                <Link to={post.frontmatter.path}>
                  {post.frontmatter.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      </Layout>
    );
  }
};

export default Tags;
