import React from 'react';
import '../assest/styles/Categories.scss';

const Categories = ({ children, title }) => {
  return (
    <>
      <h3 className='categories__title'>{title}</h3>
      {children}
    </>
  );
};
export default Categories;
