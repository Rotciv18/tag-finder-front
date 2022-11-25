import React from 'react';

import { Container } from '../styles';

function components({ message, userName, userImage, medias }) {
  const imgStyle = { height: '600px', width: '800px', borderRadius: '6px', border: '2px solid #bb86fc' };
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
    <Container className='d-flex justify-content-center flex-column align-items-center'>

      <div className='d-flex justify-content-around w-100' style={{marginTop: '150px'}}>
        {mediaDisplays.map(mediaDisplay => (
          mediaDisplay
        ))}
      </div>
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