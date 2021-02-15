import React from 'react'
import { Link } from 'react-router-dom';
import {useStyles, BoxProducts, BoxTotalProducts, Copyright} from '../../components.js';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Container from '@material-ui/core/Container';


function Menu(){
  const classes = useStyles();
    return (
           <React.Fragment >
            <Container className='containerMenu'>
          <form className={classes.paperTable}  noValidate autoComplete="off" >
            <Input placeholder="Nome"fullWidth inputProps={{ 'aria-label': 'description' }} />
            <Input placeholder="Mesa" inputProps={{ 'aria-label': 'description' }} />
          </form  >
            {/* <Button onClick={() => { alert('clicked') }}></Button> */}
          <Button variant="contained" fullWidth size="large" type="submit" className={classes.submitMenu} >
              Café da manhã
          </Button>
          <Button variant="contained" fullWidth size="large"  type="submit" className={classes.submitMenu}>
            Aperitivos
          </Button>
          <Button variant="contained" fullWidth size="large" type="submit" className={classes.submitMenu}>
              Lanches
          </Button>
          <Button variant="contained" fullWidth size="large"  type="submit" className={classes.submitMenu} >
            Bebidas
          </Button>
          <BoxProducts></BoxProducts>
          <BoxTotalProducts ></BoxTotalProducts>              
          <p>
            <Link to="/Hall"><ArrowBackIosIcon className={classes.arrowMenu} color="disabled" fontSize="large"/></Link>
          </p>
          <Copyright/>
          </Container>      
        </React.Fragment>
    );
  }

  
  export default Menu;