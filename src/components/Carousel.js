import React from 'react';
import '../assest/styles/Carousel.scss';

const Carousel = ({ children }) => {
  return (
    <section className='carousel'>
      <div className='carousel__container'>
        {children}
      </div>
    </section>
  );
};
export default Carousel;
