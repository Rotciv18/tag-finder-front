import React from 'react';

// import { Container } from './styles';

function components({ message, userName, userImage }) {
  return <>
    <img src={userImage} style={{marginTop: '16px', marginLeft: '16px', borderRadius: '48px', position: 'absolute'}} alt='fodase' />
    <div className='d-flex align-items-center justify-content-center flex-column' style={{ height: '1000px' }}>
      <h1 className='text-light' style={{ fontSize: '56px' }}>
        {message}
      </h1>
      <p />
      <h1 className='text-light'> - @{userName}</h1>
    </div>
  </>;
}

export default components;