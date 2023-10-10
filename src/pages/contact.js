import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import Seo from "../components/Seo";

const Contact = ({data}) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <Seo title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Get in touch with us !</h3>
            <p>
              Godard ut paleo narwhal migas chicharrones aliqua roof party elit
              hell of velit 8-bit ramps irony authentic.
            </p>
            <p>tilde praxis waistcoat microdosing kombucha.</p>
            <p>
              Synth authentic consequat bodega boys dreamcatcher next level
              pabst. Flannel ut kale chips, tbh dolor succulents beard nisi blue
              bottle typewriter.
            </p>
          </article>
          <article>
            <form className="form contact-form" action="https://formspree.io/f/maygjygk" method="POST">
              <div className="form-row">
                <label htmlFor="name">Your Good Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>You may like these </h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  query {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;
