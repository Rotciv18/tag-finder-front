import React from 'react';

import { Container } from '../styles';

function components({ message, userName, userImage, media }) {
  const imgStyle = { height: '650px', width: '1000px', borderRadius: '6px', border: '2px solid #bb86fc' };
  let mediaDisplay;
  if (media.type === 'photo') {
    mediaDisplay = <img
      style={imgStyle}
      alt="ig"
      src={media.url}
    />;
  } else {
    mediaDisplay = <video autoPlay muted style={imgStyle}>
      <source src={media.url} type={media.content_type} />
    </video>;
  }
  return <>
    <img width='250px' height='250px' src={userImage} style={{ marginTop: '16px', marginLeft: '16px', borderRadius: '48px', position: 'absolute' }} alt='fodase' />
    <Container className='d-flex justify-content-center flex-column align-items-center'>

      {mediaDisplay}
      <div className='d-flex align-items-center justify-content-center flex-column' >
        <h1 className='text-light' style={{ fontSize: '56px' }}>
          {message}
        </h1>
        <p />
        <h1 className='text-light'> - @{userName}</h1>
      </div>
    </Container>
  </>;
}

export default components;