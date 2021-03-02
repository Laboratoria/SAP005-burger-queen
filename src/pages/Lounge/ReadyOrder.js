
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header.js';
import './Lounge.css'

export const ReadyOrderList = () => {
  const token = localStorage.getItem('token')
  const [readyOrders, setReadyOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const route = useHistory();
  const loungeRoute = () => {
    route.push('/Lounge')
  }

  function BackBtn(event) {
    event.preventDefault();
    loungeRoute();
  }

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,

      redirect: 'follow'
    };
    fetch("https://lab-api-bq.herokuapp.com/orders", requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        
        const orders = data;
        const readyOrders = orders.filter((o) => o.status.includes("ready"))
        setReadyOrders(readyOrders)
        console.log(readyOrders)
      setLoading(false)  
      })
  }, [token]);

  return (
    <Header />
    
  )


};