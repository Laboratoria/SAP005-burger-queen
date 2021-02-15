import React, { useState,useEffect } from 'react'
import Item from './Item'

    const CardItem = (props) => {

    const [items, setItems] = useState([]);

    const getItems = () => {
        fetch("https://lab-api-bq.herokuapp.com/products", {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhcmluYUBjYXJpbmEuY29tIiwiaWQiOjM3OCwiaWF0IjoxNjEzNDExMDg3LCJleHAiOjE2NDQ5Njg2ODd9.OLJJnuHJkvdItyKpmhIlQGIQuwWQFLSZ49JnguEINZ4",
        } 
             })
          .then((response) => response.json())
          .then((json) => {
              setItems(json)

            console.log(json)})
          .catch((error) => {
            console.log(error);
          });
      };
          useEffect(() => {
            getItems()
          }, [])  
             
    return (
        
        <div>
        {items.map((item =>
         <p key={item.id}>{item.name}</p>
        //   <Item/>
        ))}
         
        
        </div>
    )
}

export default CardItem
