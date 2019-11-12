import React, { useState } from 'react';
import { css } from '@emotion/core';

const galleryContainer = css`
  width: 100%;
  background-color:red;
  outline: 1px solid black;
  margin: 1rem 0;
  box-sizing: border-box;
`;

const Gallery = () => {
  const [showLightbox, toggleLightbox] = useState(true);
  return (
    <div css={galleryContainer} onClick={() => { toggleLightbox(!showLightbox) }}>
      <p>
        {showLightbox ? 'true' : 'false'}
      </p>
    </div>
  );
};

export default Gallery;