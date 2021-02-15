import React from 'react';
import { Link } from 'react-router-dom';
import HeaderKitchen from '../../components/headerKitchen'

const Kitchen = () => (
  <div>
    <HeaderKitchen />
    <h1>Aqui só tem garçons</h1>
    <p>
      <Link to="/Hall"> VOLTE PARA O LOGIN </Link>
    </p>
  </div>
);

export default Kitchen;
