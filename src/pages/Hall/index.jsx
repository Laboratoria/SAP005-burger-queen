import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useStyles, Logo, SingIn, Copyright, NavBar} from '../../components.js';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


import '../../style.css';

function Home(){
  

  const classes = useStyles();
  const history = useHistory();

  const routerPendentes = () => {
    history.push('/Pendentes')
  }

  const routerMenu = () => {
    history.push('/Menu')
  }


    
  function getLocalStorage(){
      const tokenLocal = localStorage.getItem('token')
      console.log(tokenLocal)

      fetch('https://lab-api-bq.herokuapp.com/products', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': tokenLocal ,
        },
      }).then((response) => console.log(response.json()))
  }

    return (
      <React.Fragment >
        <NavBar/>
      
          <Container>
              <Button type="submit" fullWidth variant="contained" className={classes.submitHall}  onClick={routerMenu}>
                + Novo Pedido
              </Button>
              <Button type="submit" fullWidth variant="contained" className={classes.submitHall} onClick={routerPendentes} >
                Pendentes
              </Button>
              <Button onClick={(event) => { event.preventDefault(); getLocalStorage();}}>Produtos</Button>
            </Container>   
        </React.Fragment>

    );
  }

  export default Home;