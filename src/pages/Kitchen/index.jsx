import React from 'react';
import HeaderKitchen from '../../components/headerKitchen'

const Kitchen = () => {
const nameLS = JSON.parse(localStorage.getItem('currentUser'));
const {name, role} = nameLS;


function result () {
  if (role === "kitchen"){
    return <div>
      <HeaderKitchen chef={`${name}`}/>
      <h1>Aqui só tem Chefs</h1>
    </div>
  }
  else {
    return alert("bocó")
  }
  
};

  return result()

  };

export default Kitchen;
