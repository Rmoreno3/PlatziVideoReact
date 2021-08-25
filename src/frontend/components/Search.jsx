import React from 'react';
import { connect } from 'react-redux';
import { searchVideo } from '../actions';

const searchTitle = '¿Que quieres ver hoy?';
const searchPlaceholder = 'Buscar...';

const Search = (props) => {
  const { searchVideo } = props;

  const handleInput = (event) => {
    searchVideo(event.target.value);
  };

  return (
    <section className='search'>
      <section className='search__container'>
        <h2 className='search__container--title'>{searchTitle}</h2>
        <input
          onKeyUp={handleInput}
          className='search__container--input'
          type='text'
          placeholder={searchPlaceholder}
        />
      </section>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

const mapDispatchToProps = {
  searchVideo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
