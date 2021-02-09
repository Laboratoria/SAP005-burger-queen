import React from 'react'
import { Link } from 'react-router-dom';

function Home(){
    return (
      <div>
          <h1>Home</h1>
          <p>
            <Link to="/">Sair</Link>
          </p>
      </div>
    );
  }
  
  export default Home;