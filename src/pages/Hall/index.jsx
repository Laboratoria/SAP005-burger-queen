import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container, Grid } from '@material-ui/core';
import { useStyles, NavBar } from '../../components.js';
import '../../style.css';
import Copyright from '../../services/Copyright';

function Home() {
  const classes = useStyles();
  const history = useHistory();

  const routerPendentes = () => {
    history.push('/Pendentes');
  };

  const routerMenu = () => {
    history.push('/Menu');
  };

  return (
    <Grid>
      <NavBar/>
      <Container className='configContainer'>
        <div className={classes.paperTable}>
          <Button type='submit' fullWidth variant='contained' className={classes.submitHall}  onClick={routerMenu}> + Novo Pedido </Button>
          <Button type='submit' fullWidth variant='contained' className={classes.submitHall} onClick={routerPendentes} > Pen&shy;dentes </Button >
        </div>           
      </Container>   
      <p className='colorW'><Copyright/></p>
    </Grid>
  );
};
export default Home;