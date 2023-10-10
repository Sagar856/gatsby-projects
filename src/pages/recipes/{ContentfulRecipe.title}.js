import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BsClockFill } from "@react-icons/all-files/bs/BsClockFill";
import { BsClockHistory } from "@react-icons/all-files/bs/BsClockHistory";
import { MdPeople } from "@react-icons/all-files/md/MdPeople";
import Layout from "../../components/Layout";
import slugify from "slugify";
import Seo from "../../components/Seo";

const RecipeTemplate = ({ data }) => {
  const { title, cookTime, prepTime, servings, image, description } =
    data.contentfulRecipe;
  const { ingredients, instructions, tags, tools } =
    data.contentfulRecipe.content;
  const pathToImage = getImage(image);

  //   To render data/content from CONTENTFUL RICH TEXT
  //  First import "import { renderRichText } from "gatsby-source-contentful/rich-text""
  //  Then map() the variable where you want to render the data
  const bodyRichText = renderRichText(description);
  // Here 'renderRichText(description)' is array of objects from which we need to extract data

  return (
    <Layout>
      < Seo title="Recipe"/>
      <main className="page">
        <div className="recipe-page">
          {/* Hero section */}
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              {/* mapping rich text description */}
              {bodyRichText.map((text, index) => {
                return <p key={index}>{text.props.children[0]}</p>;
              })}
              {/* icons */}
              <div className="recipe-icons">
                <article>
                  <BsClockFill />
                  <h5>Prep Time</h5>
                  <p>{prepTime} min</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>Cook Time</h5>
                  <p>{cookTime} min</p>
                </article>
                <article>
                  <MdPeople />
                  <h5>Servings</h5>
                  <p>{servings}</p>
                </article>
              </div>
              {/* tags */}
              <p className="recipe-tags">
                Tags :
                {tags.map((tag, index) => {
                    const slug = slugify(tag, {lower: true})
                  return (
                    <Link to={`/tags/${slug}`} key={index}>
                      {tag}
                    </Link>
                  );
                })}
              </p>
            </article>
          </section>
          {/* Rest of the section */}
          <section className="recipe-content">
            <article>
              <h4>Instructions</h4>
              {instructions.map((steps, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>step {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{steps}</p>
                  </div>
                );
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>Ingredients</h4>
                {ingredients.map((ingredient, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {ingredient}
                    </p>
                  );
                })}
              </div>
              <div>
                <h4>Tools</h4>
                {tools.map((tool, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {tool}
                    </p>
                  );
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      cookTime
      title
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        raw
      }
      contentful_id
      content {
        internal {
          type
        }
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`;

export default RecipeTemplate;
