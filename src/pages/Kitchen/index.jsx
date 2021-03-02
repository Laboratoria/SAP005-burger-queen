import React, { useEffect, useState } from 'react';
import {NavBar} from '../../components.js';

function Kitchen (){

  const tokenLocal = localStorage.getItem('token');

  useEffect(() => {
    fetch('https://lab-api-bq.herokuapp.com/orders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${tokenLocal}`
      },
    })
    .then(response => console.log(response.json()))
  }, [tokenLocal])
  
  return (
    <div>
      <NavBar/>
      <h1>Kitchen</h1>
    </div>
  );
}
  
  export default Kitchen;