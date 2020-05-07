import React from 'react';

import { Container } from './styles';

function Image({ content }) {
  return (
    <Container>
      <div className="front">
        <img src={content.links[0].href} alt="."/> 
        <h3>{content.data[0].title}</h3>
      </div>
      <div className="verse">
        <p>{content.data[0].description}</p>
      </div>
    </Container>
  )
}

export default Image;