import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>ESSA É A HOME</h1>
    <p>
      <Link to="/Login"> VOLTE PARA O LOGIN </Link>
    </p>
  </div>
);

export default Home;
