import React from 'react'
import { useHistory } from 'react-router-dom';
import { Button, Container } from '@material-ui/core';
import {useStyles, NavBar} from '../../components.js';
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

  return (
    <>
      <NavBar/>
      <Container className='container' container direction="row" justify="flex-start" alignItems="flex-start">
        <Button type="submit" fullWidth variant="contained" className={classes.submitHall}  onClick={routerMenu}> + Novo Pedido </Button>
        <Button type="submit" fullWidth variant="contained" className={classes.submitHall} onClick={routerPendentes} > Pendentes </Button >           
      </Container>   
    </>
  );
}
export default Home;