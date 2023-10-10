import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import AllRecipes from "../components/AllRecipes";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <Layout>
      <Seo title="Home Page" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpg"
            alt="home page img"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Just Recipes</h1>
              <h4>No fluff, Just recipes</h4>
            </div>
          </div>
        </header>
        <hr />
        <AllRecipes />
      </main>
    </Layout>
  );
}
