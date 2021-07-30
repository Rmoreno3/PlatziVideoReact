import React from 'react';

const Carrousel = ({ children }) => (
  <section className='carrousel'>
    <div className='carrousel__container'>
      { children }
    </div>
  </section>
);

export default Carrousel;
