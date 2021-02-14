import React from 'react';
import { Link } from 'react-router-dom';

const Kitchen = () => (
  <div>
    <h1>Aqui só tem garçons</h1>
    <p>
      <Link to="/Login"> VOLTE PARA O LOGIN </Link>
    </p>
  </div>
);

export default Kitchen;
