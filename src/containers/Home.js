/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import useInitalState from '../hooks/useInitalState';

const API = ('http://localhost:3000/initalState');
const Home = () => {
  const videos = useInitalState(API);
  console.log(videos);
  return (
    <div className='App'>
      <Search />
      {videos.mylist.length > 0 && (
        <Categories title='My Favorites'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {videos.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories title='Originales'>
        <Carousel>
          {videos.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </div>
  );
};
export default Home;
