import React,{ useEffect, useState }  from 'react';
//import ReactDOM from 'react-dom';
//import { Link } from 'react-router-dom';
//import {useStyles, Copyright, NavBar} from '../../components.js';
//import Button from '@material-ui/core/Button';
//import Input from '@material-ui/core/Input';
//import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
//import Container from '@material-ui/core/Container';
//import { SettingsRemoteRounded } from '@material-ui/icons';
//import MyComponent from '../../configApi/Api'
//import { RecentActorsOutlined } from '@material-ui/icons';
//import { useHistory, useParams } from "react-router-dom";

class List extends React.Component {
  state = {
    ArrayProducts: []
  };

  componentDidMount() {
    const tokenLocal = localStorage.getItem('token');
      fetch('https://lab-api-bq.herokuapp.com/products'
      , {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `${tokenLocal}` ,
        },
      })
          .then(res => res.json())
          .then(res => {
              this.setState({
                  ArrayProducts: res
              });
          });
  }

  render() {
      return (
          <div>
              <h1>Lista de produtos</h1>

              <ul>
                  {this.state.ArrayProducts.map(item => (
                      <li key={item.id}>
                          <p><b>Nome:</b> {item.name}</p>
                          <p><b>Preço:</b> {item.price}</p>
                      </li>
                  ))}
              </ul>
          </div>
      );
  }
}

export default List;






















/* const products = [];
const getLocalStorage = async () => {
 
  const [menu, getMenu] = useState(''); */
  //console.log(tokenLocal)
  //const tokenLocal = localStorage.getItem('token')

 /*  fetch('https://lab-api-bq.herokuapp.com/products', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `${tokenLocal}` ,
    },
  }).then(response => response.json())
      .then((json) => {
        const breakfast = json.filter(item => item.type === 'breakfast')
        getMenu(breakfast)
  });
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

return (

  <React.Fragment >
    <NavBar/>
    <Container >
   <form className={classes.paperTable}  noValidate autoComplete="off" >
      <Input placeholder="Nome" className={classes.inputTableName} fullWidth inputProps={{ 'aria-label': 'description' }} />
      <Input placeholder="Mesa" className={classes.inputTableName} inputProps={{ 'aria-label': 'description' }} />
    </form  > */

/* /*      {/*  <Button vtype="submit" fullWidth variant="contained" className={classes.submitHall}  >
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

    /* 
      <div className={classes.submitHall}>{renderProducts(arrayProducts)} </div>
      <p>
      <Link to="/Hall"><ArrowBackIosIcon className={classes.arrowMenu} color="disabled" fontSize="large"/></Link>
      </p>
      <Copyright/>
    </Container>      
  </React.Fragment>
  )}
    
    
    export default Menu; */