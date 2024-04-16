import React from 'react';
import './Card.css';

const Card = ({ producto }) => {
  const {  brand, model, imageUrl, price } = producto;


  return (
    <div className="card">
      <img className="image-container" src={imageUrl[1]} alt="imagen de producto" />
      <div className="card-info">
        <h4>{brand.name}-{model}</h4>
        <p>Precio: ${price}</p>
      </div>
    </div>
  );
};  

export default Card;
