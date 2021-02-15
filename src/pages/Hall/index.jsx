import React from 'react';
import { Link } from 'react-router-dom';

const Hall = () => (
  <div>
    <h1>Aqui só tem garçons</h1>
    <p>
      <Link to="/Kitchen"> VOLTE PARA O LOGIN </Link>
    </p>
  </div>
);

export default Hall;
