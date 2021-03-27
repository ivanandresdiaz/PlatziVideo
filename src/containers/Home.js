/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';

const Home = ({ mylist, trends, originals }) => {
  return (
    <div className='App'>
      <Search />
      {mylist.length > 0 && (
        <Categories title='My Favorites'>
          <Carousel>
            {mylist.map((item) => <CarouselItem key={item.id} {...item} isList/>)}
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories title='Originales'>
        <Carousel>
          {originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </div>
  );
};
const mapStateToProps = (state) => ({
  mylist: state.mylist,
  trends: state.trends,
  originals: state.originals,
});
export default connect(mapStateToProps, null)(Home);
