import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
//import Grid from "@material-ui/core/Grid";

function Menu(){
    return (
      <div>
          <h1>Menu</h1>
          <form className='classes' noValidate autoComplete="off">
            <Input placeholder="Nome" inputProps={{ 'aria-label': 'description' }} />
            <Input placeholder="Mesa" inputProps={{ 'aria-label': 'description' }} />
          </form>
            {/* <Button onClick={() => { alert('clicked') }}></Button> */}
            <Button variant="contained" color="gray">
              Aperitivos
            </Button>
            <Button variant="contained" color="gray">
              Bebidas
            </Button>
            <Button variant="contained" color="gray">
              Lanches
            </Button>
            <Button variant="contained" color="gray">
              Sobremesas
            </Button>
            <p>
          <Link to="/Hall">Sair</Link>
          </p>
      
      </div>
    );
  }

  
  export default Menu;