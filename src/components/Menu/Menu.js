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
      .then((response) => response.json())
      .then((data) => {
        const products = data;
        const itensCoffee = products.filter((itens) =>
          itens.type.includes('breakfast')
        );
        setBreakfast(itensCoffee);
        const itemBurgers = products.filter((itens) =>
          itens.sub_type.includes('hamburger')
        );
        setBurgers(itemBurgers);
        const itemSideDish = products.filter((itens) =>
          itens.sub_type.includes('side')
        );
        setSideDish(itemSideDish);
        const itemDrinks = products.filter((itens) =>
          itens.sub_type.includes('drinks')
        );
        setDrinks(itemDrinks);
      });
  }, []);