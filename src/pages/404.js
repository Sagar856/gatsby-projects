import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const ErrorPage = () => {
  return (
    <Layout>
      <Seo title="Error" />
      <main className="error-page">
        <h2>
          <b>404 !</b> page not found
        </h2>
        <h3>Sorry we couldn't find page you requested</h3>
        <Link to="/">Go back to Home</Link>
      </main>
    </Layout>
  );
};

export default ErrorPage;
