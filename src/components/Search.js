import React from 'react';
import '../assest/styles/Search.scss';

const Search = () => {
  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input type='text' className='input' placeholder='Buscar...' />
    </section>
  );
};
export default Search;
