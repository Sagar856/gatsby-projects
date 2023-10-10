import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../../components/Layout";
import Gallery from "./gallery";

// Receiving data from graphql using 'useStaticQuery'
const PracticePage = () => {
  const data = useStaticQuery(getData);
  const allData = data.site.siteMetadata;
  return (
    <Layout>
      <div>
        {allData.person.name}: {allData.person.age}
        <br></br>
        {allData.title}
      </div>
      <Gallery />
    </Layout>
  );
};

// // receiving data from graphql using props
// const PracticePage = ({data}) => {
//   const allData = data.site.siteMetadata;
//   return (
//     <Layout>
//       <div>
//         {allData.person.name}: {allData.person.age}
//         <hr/>
//         {allData.description}
//       </div>
//     </Layout>
//   );
// };

export default PracticePage;

export const getData = graphql`
  query myQuery {
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
`;
