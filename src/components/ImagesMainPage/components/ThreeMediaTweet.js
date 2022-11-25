import React from 'react';

import { Container } from '../styles';

function components({ message, userName, userImage, medias }) {
  const imgStyle = { height: '400px', width: '650px', borderRadius: '6px', border: '2px solid #bb86fc' };
  let mediaDisplays = [];
  medias.forEach(media => {
    if (media.type === 'photo') {
      mediaDisplays.push(<img
        style={imgStyle}
        alt="ig"
        src={media.url}
      />);
    } else {
      mediaDisplays.push(<video autoPlay muted style={imgStyle}>
        <source src={media.url} type={media.content_type} />
      </video>);
    }
  })
  return <>
    <img width='150px' height='150px' src={userImage} style={{ marginTop: '16px', marginLeft: '16px', borderRadius: '48px', position: 'absolute' }} alt='fodase' />
    <Container className="d-flex justify-content-around p-6">
      {mediaDisplays[0]}
      {mediaDisplays[1]}
    </Container>
    <div className="w-100 text-center">
      <h3 className="text-light">{message}</h3>
      <h3 style={{ marginLeft: '24px' }} className="text-light">- {userName}</h3>
    </div>
    <Container className="d-flex justify-content-around p-6">
      {mediaDisplays[2]}
    </Container>
  </>;
}

export default components;