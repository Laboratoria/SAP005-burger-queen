import React from 'react';
import { Link } from 'react-router-dom';
import HeaderKitchen from '../../components/headerKitchen'

const nameLS = localStorage.getItem("name");
console.log(nameLS);

const Kitchen = () => (
  <div>
    <HeaderKitchen chef={nameLS}/>
    <h1>Aqui só tem Chefs</h1>
    <p>
      <Link to="/Hall"> VOLTE PARA O LOGIN </Link>
    </p>
  </div>
);

export default Kitchen;
