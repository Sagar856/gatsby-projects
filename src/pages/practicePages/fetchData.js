import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../../components/Layout";

const FetchData = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          simpleData
          person {
            name
            age
          }
          complexData {
            age
            name
          }
        }
      }
    }
  `);
  const allData = data.site.siteMetadata;
  return (
    <Layout>
      <h3>Title: {allData.title}</h3>
      <h4>Author: {allData.author}</h4>
      <h5>Description: {allData.description}</h5>
      <hr />
      <h5>{allData.person.name}:{allData.person.age}</h5>
      <h6>Arr 0: {allData.simpleData[0]}</h6>
      <h6>Arr 1: {allData.simpleData[1]}</h6>

      {allData.complexData.map((item, index) => {
        return (
          <h5 key={index}>
            {item.name} : {item.age}
          </h5>
        );
      })}
    </Layout>
  );
};

export default FetchData;
