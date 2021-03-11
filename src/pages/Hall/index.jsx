import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container, Grid } from '@material-ui/core';
import '../../style.css';
import { useStyles } from '../../style.js';
import Copyright from '../../components/Copyright';
import NavBar from '../../components/NavBar';

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