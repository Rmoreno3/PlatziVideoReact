import React from 'react';
import user from '../assets/static/user1.jpg';

const CarrouselItem = () => (
  <div className='carrousel__item'>
    <figure className='carrousel__img__container'>
      <img src={user} alt='imagen' />
    </figure>
    <div className='carrousel__item__icons'>
      <a href='/'>
        <i className='fas fa-play-circle' />
      </a>
      <a href='/'>
        <i className='fas fa-plus-circle' />
      </a>
    </div>
    <div className='carrousel__item__details'>
      <p className='carrousel__item__details--title'>Titulo Descriptivo</p>
      <p className='carrousel__item__details--subtitle'>2021 45+ 120min</p>
    </div>
  </div>
);

export default CarrouselItem;
