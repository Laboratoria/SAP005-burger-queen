import React from 'react'
import {NavBar} from '../../components.js';




function Kitchen (){
  
    return (
      <div>
         <NavBar/>
          <h1>Kitchen</h1>
          <p>
            <p className='menu'></p>
            <p className='totalPedido'></p>
          </p>
      </div>
    );
  }
  
  export default Kitchen;