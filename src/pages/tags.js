import React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";
import setupTags from "../utils/setupTags";
import slugify from "slugify";
import Seo from "../components/Seo";

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes);

  return (
    <Layout>
      <Seo title="Tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [tagName, value] = tag;
            let text = "";
            if (value === 1) {
              text = "recipe";
            } else {
              text = "recipes";
            }
            const slug = slugify(tagName, {lower: true})
            return (
              <Link to={`/tags/${slug}`} className="tag" key={index}>
                <h5>{tagName}</h5>
                <p>
                  {value} {text}
                </p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Tags;
