import React from 'react';

const Categories = ({ children, title }) => (
  <div className='categories__title'>
    <h4>{title}</h4>
    { children }
  </div>
);

export default Categories;
