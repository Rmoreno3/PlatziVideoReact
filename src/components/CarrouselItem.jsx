import React from 'react';
import PropTypes from 'prop-types';

const CarrouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carrousel__item'>
    <figure className='carrousel__img__container'>
      <img src={cover} alt='imagen' />
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
      <p className='carrousel__item__details--title'>{title}</p>
      <p className='carrousel__item__details--subtitle'>
        {`${year} ${contentRating} ${duration}`}
      </p>
    </div>
  </div>
);

CarrouselItem.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default CarrouselItem;
