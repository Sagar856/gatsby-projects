import { Link, graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import RecipesList from "../components/RecipesList";
import Seo from "../components/Seo";

const About = ({
  data: {
    allContentfulRecipe: { 
      nodes: recipes 
    },
  },
}) => {
  // const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <Seo title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Dreamcatcher food truck marfa lyft</h2>
            <p>
              Truffaut mlkshk kickstarter crucifix single-origin coffee, disrupt
              raclette bicycle rights. Flexitarian yr +1 JOMO pinterest, roof
              party cold-pressed swag.
            </p>
            <p>
              Biodiesel fingerstache sustainable organic XOXO slow-carb, hammock
              normcore ethical keytar hot chicken lumbersexual waistcoat
              williamsburg bespoke.
            </p>
            <Link to="/contact" className="btn">
              Contact Us
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpg"
            alt="pouring salt in dish"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce !</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export default About;

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
