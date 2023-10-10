import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const Gallery = () => {
  const data = useStaticQuery(galleryImages);
  const images = data.allFile.nodes;
  return (
    <div>
      <hr></hr>
      <h5>Gallery Page:</h5>
    <div style={{display: 'flex',flexWrap: 'wrap',}}>
      {images.map((images, index) => {
        const { name } = images;
        const pathToImg = getImage(images);
        return (
          <div>
            <div key={index} style={{ marginRight: "1rem",}}>
              <GatsbyImage
                image={pathToImg}
                alt={images}
                style={{ borderRadius: "1rem" }}
              />
              <p>{name}</p>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Gallery;

const galleryImages = graphql`
  {
    allFile(filter: {extension: {ne: "svg"}}) {
      totalCount
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            layout: CONSTRAINED
            width: 200
            height: 200
          )
        }
      }
    }
  }
`;
