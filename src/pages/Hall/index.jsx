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
            </Container>   
        </React.Fragment>

    );
  }

  
  export default Home;