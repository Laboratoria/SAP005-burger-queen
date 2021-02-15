import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useStyles, Logo, SingIn, Copyright} from '../../components.js';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


import '../../style.css';

function Home(){
  const classes = useStyles();
  const history = useHistory();
  const routerMenu = () => {
    history.push('/Menu')
  }
    return (
      
      <React.Fragment >
      <Container className='container'>
        <Typography component="div" />
          <div>
              <Button type="submit" fullWidth variant="contained" className={classes.submitHall}  onClick={routerMenu}>
                + Novo Pedido
              </Button>
              <Button type="submit" fullWidth variant="contained" className={classes.submitHall} >
                Pendentes
              </Button>
            </div>
            <div className={classes.paper}>
              <Logo />
              <SingIn/>
            </div>
            <p>
              <Link to="/"><ArrowBackIosIcon className={classes.arrow} color="disabled" fontSize="large"/> </Link>
            </p>
            <Copyright/>
        </Container>      
        </React.Fragment>

    );
  }

  
  export default Home;