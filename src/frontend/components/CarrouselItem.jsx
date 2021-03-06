/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions';
import playIcon from '../assets/static/play-icon.png';
import iconTrash from '../assets/static/remove-icon.png';
import addIcon from '../assets/static/plus-icon.png';

const CarrouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration,
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
        <Link to={`/player/${id}`}>
          <img src={playIcon} alt='button play' className='icon' />
        </Link>
        {isList ? (
          <img
            onClick={() => handleDeleteFavorite(id)}
            src={iconTrash}
            alt='delete'
            className='icon'
          />
        ) : (
          <img
            onClick={handleSetFavorite}
            src={addIcon}
            alt='addicon'
            className='icon'
          />
        )}
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
  isList: PropTypes.bool,
  setFavorite: PropTypes.func,
  deleteFavorite: PropTypes.func,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarrouselItem);
