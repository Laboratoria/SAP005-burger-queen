import React from 'react';
import {NavBar} from '../../components.js';
import {Grid} from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Input from '@material-ui/core/Input';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link} from 'react-router-dom';


class List extends React.Component {

  state = {
    ArrayBreakfast: [],//arrayProducts
    ArrayAllDay: []
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
          .then((res) => res.json())
          .then((json) => {
            const breakfast = json.filter(item => item.type==='breakfast')
            const allDay = json.filter(item => item.type==='all-day')
              this.setState({
                  ArrayBreakfast: breakfast,
                  ArrayAllDay: allDay
              });
          });
          
  } 
  
  render() {
      return (
        <React.Fragment>
          <NavBar/>
          <Grid 
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
          color='white'
          >
            <Grid  id='menu'>
                {/* <Button onClick={
                  <div> */}
                <h1>Café da manhã</h1>
                <ul> 
                {this.state.ArrayBreakfast.map(item => (                    
                    <li key={item.id}>
                        <p>{item.name} {item.flavor} {item.complement} R${item.price},00<IconButton color="primary" aria-label="add to shopping cart"><AddShoppingCartIcon/></IconButton></p>                                                         
                    </li>
                ))}
                </ul>
                  <ul><h1>Resto do dia</h1>
                    {this.state.ArrayAllDay.map(item => (
                        <li key={item.id}>
                            <p> {item.name} {item.flavor} {item.complement} R${item.price},00<IconButton color="primary" aria-label="add to shopping cart"><AddShoppingCartIcon/></IconButton></p>                                                       
                        </li>
                    ))}
                </ul>
            </Grid>
            <Grid>
              <h1>Pedidos</h1>
              <form noValidate autoComplete="off"justify="flex-start">
                <Input placeholder="Nome"inputProps={{ 'aria-label': 'description' }} />
                <Input placeholder="Mesa" inputProps={{ 'aria-label': 'description' }} />
              </form  >
            </Grid>
          </Grid>
          <Link to="/Hall"><ArrowBackIosIcon color="disabled" fontSize="large"/> </Link>
        </React.Fragment>
      );
  }
}

export default List;







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









