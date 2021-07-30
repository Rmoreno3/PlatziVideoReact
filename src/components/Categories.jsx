import React from 'react';

const title = 'Mi Lista';

const Categories = ({ children }) => (
  <div className='categories__title'>
    <h4>{title}</h4>
    { children }
  </div>
);

export default Categories;
