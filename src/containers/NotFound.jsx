import React from 'react';
import '../assets/styles/components/_NotFound.scss';

const NotFound = () => (
  <main className='main'>
    <div className='main__container'>
      <h1 className='animated pulse'>404 NOT FOUND</h1>
      <a href='/'><h2>Regresar al Home</h2></a>
    </div>
  </main>
);

export default NotFound;
