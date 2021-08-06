/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions';

const CarrouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration,
    });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className='carrousel__item'>
      <figure className='carrousel__img__container'>
        <img src={cover} alt='imagen' />
      </figure>
      <div className='carrousel__item__icons'>
        <i className='fas fa-play-circle' />
        {isList ? (
          <i
            onClick={() => handleDeleteFavorite(id)}
            className='fas fa-trash'
          />
        ) :
          <i onClick={handleSetFavorite} className='fas fa-plus-circle' />}
      </div>
      <div className='carrousel__item__details'>
        <p className='carrousel__item__details--title'>{title}</p>
        <p className='carrousel__item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarrouselItem.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarrouselItem);
