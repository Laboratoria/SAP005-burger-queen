import React,{ useEffect, useState }  from 'react'
import { Link } from 'react-router-dom';
import {useStyles, BoxProducts, BoxTotalProducts, Copyright, NavBar} from '../../components.js';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Container from '@material-ui/core/Container';
import { RecentActorsOutlined } from '@material-ui/icons';
import { useHistory, useParams } from "react-router-dom";

const products = [];
const getLocalStorage = async () => {
  const tokenLocal = localStorage.getItem('token')
  console.log(tokenLocal)

  fetch('https://lab-api-bq.herokuapp.com/products', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': tokenLocal ,
    },
  }).then(response => console.log(response.json())
    );
}


function Menu(){
  const classes = useStyles();
  const arrayProducts = getLocalStorage();
  const renderProducts = (array) => {
    for (let index = 0; index < array.length; index++) {
      products.push(
      <div>
      {array[index].name}
      {array[index].price}
      </div>)
    }
  }
  //console.log(renderProducts(arrayProducts));
    return (
           <React.Fragment >
             <NavBar/>
            <Container className='container'>
          <form className={classes.paperTable}  noValidate autoComplete="off" >
            <Input placeholder="Nome"fullWidth inputProps={{ 'aria-label': 'description' }} />
            <Input placeholder="Mesa" inputProps={{ 'aria-label': 'description' }} />
          </form  >
          <Button vtype="submit" fullWidth variant="contained" className={classes.submitHall}  >
              Café da manhã
          </Button>
          <Button type="submit" fullWidth variant="contained" className={classes.submitHall} >
            Aperitivos
          </Button>
          <Button type="submit" fullWidth variant="contained" className={classes.submitHall} >
              Lanches
          </Button>
          <Button type="submit" fullWidth variant="contained" className={classes.submitHall}  >
            Bebidas
          </Button>
          <BoxProducts></BoxProducts>
          <BoxTotalProducts forHtml={renderProducts(arrayProducts)}></BoxTotalProducts>             
          <p>
            <Link to="/Hall"><ArrowBackIosIcon className={classes.arrowMenu} color="disabled" fontSize="large"/></Link>
          </p>
          <Copyright/>
          </Container>      
        </React.Fragment>
    )}
     console.log(products);

export default Menu;