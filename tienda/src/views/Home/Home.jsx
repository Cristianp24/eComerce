import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import axios from 'axios';
import style from './Home.module.css';

const Home = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then((response) => {
        const productos = response.data;
        setProductos(productos);
       
      })
      .catch((error) => {
        console.error('Error al obtener productos:', error);
      });
  }, []);

  if (!productos.length) {
    return <div className="loading">Cargando productos...</div>;
  }

  return (
    <div className={style.productos}>
      {productos.map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default Home;
