import React from 'react'
import { Link } from 'react-router-dom';

function Kitchen (){
    return (
      <div>
          <h1>Kitchen</h1>
          <p>
            <Link to="/">Sair</Link>
          </p>
      </div>
    );
  }
  
  export default Kitchen;