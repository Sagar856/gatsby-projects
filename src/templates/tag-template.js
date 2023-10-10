import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import RecipesList from '../components/RecipesList'

const TagTemplate = ({data, pageContext}) => {
    const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <main className='page'>
        <h2>{pageContext.tag}</h2>
        <RecipesList recipes={recipes} />
      </main>
    </Layout>
  )
}

export const query = graphql`
query GetRecipes($tag: String) {
    allContentfulRecipe(sort: {title: ASC}, filter: {content: {tags: {eq: $tag}}}) {
      nodes {
        prepTime
        cookTime
        id
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }`

export default TagTemplate
