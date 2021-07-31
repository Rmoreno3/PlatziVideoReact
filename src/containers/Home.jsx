/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import CarrouselItem from '../components/CarrouselItem';
import Carrousel from '../components/Carrousel';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalstate';

const Home = () => {
  const initialState = useInitialState(API);
  return (
    <>
      <Search />
      {initialState.mylist?.length > 0 && (
        <Categories title='Mi Lista'>
          <Carrousel>
            {initialState.mylist?.map((item) => <CarrouselItem key={item.id} {...item} />)}
          </Carrousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carrousel>
          {initialState.trends?.map((item) => <CarrouselItem key={item.id} {...item} />)}
        </Carrousel>
      </Categories>

      <Categories title='Originales de PlatziVideo'>
        <Carrousel>
          {initialState.originals?.map((item) => <CarrouselItem key={item.id} {...item} />)}
        </Carrousel>
      </Categories>
    </>
  );
};

export default Home;
