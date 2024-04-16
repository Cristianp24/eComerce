import React from 'react';
import Card from '../Card/Card'; // Importa el componente Card
import style from './Cards.module.css';

const Cards = () => {
 

  return (
    <div className={style.productos}>
        <Card  />
    </div>
  );
};

export default Cards;
