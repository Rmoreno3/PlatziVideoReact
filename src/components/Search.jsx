import React from 'react';

const searchTitle = '¿Que quieres ver hoy?';
const searchPlaceholder = 'Buscar...';

const Search = () => (
  <section className='search'>
    <section className='search__container'>
      <h2 className='search__container--title'>{searchTitle}</h2>
      <input className='search__container--input' type='text' name=' id=' placeholder={searchPlaceholder} />
    </section>
  </section>
);

export default Search;
