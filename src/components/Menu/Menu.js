import React, { useEffect, useState } from 'react';
import "./Menu.css"

const Menu = () => {
  const tokenUser = localStorage.getItem('token');
  const [breakfast, setBreakfast] = useState([]);
  const [burgers, setBurgers] = useState([]);
  const [sideDish, setSideDish] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch('https://lab-api-bq.herokuapp.com/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${tokenUser}`,
        },      
  })
}
  )}

      
