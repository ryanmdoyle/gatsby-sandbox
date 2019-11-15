import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';

const galleryContainer = css`
  width: 100%;
  background-color:red;
  outline: 1px solid black;
  margin: 1rem 0;
  box-sizing: border-box;
`;

const lightbox = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.9);
`;

const Gallery = (props) => {
  const [showLightbox, toggleLightbox] = useState(false);
  
  const allImageQuery = useStaticQuery(
    graphql`
      query AllImageQuery {
        allSanityImageAsset {
          edges {
            node {
              square: fixed(height: 300, width: 300) {
                src
                srcSet
                srcSetWebp
                width
                srcWebp
                height
              }
              normal: fixed {
                src
                srcSet
                srcSetWebp
                width
                srcWebp
                height
              }
            }
          }
        }
      }
    `
  )
  const imagesArray = allImageQuery.allSanityImageAsset.edges;
  console.log(imagesArray);
  return (
    <div css={galleryContainer} onClick={() => { toggleLightbox(!showLightbox) }}>
      {imagesArray.map(image => (
        <p>{image.node.normal.src}</p>
      ))}
      { showLightbox && (
        <div css={lightbox}>I'm in the lightbox</div>
      )}
    </div>
  );
};

export default Gallery;