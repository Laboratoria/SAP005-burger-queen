import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 500
  }
});

export const OrderResume =  (props) => {
  const classes = useStyles();

  const formatOrder = () => {
    let order =  {
      "client": props.client,
      "table": props.table,
      "products": [],
    };
    
    const newProduct = Object.entries(props.products);
    newProduct.map((product) => (
      order['products'].push({'id': product[1].id, 'qtd': product[1].qtd})
    ));
    return order;
  };

  console.log(formatOrder());

  const handleCreateOrder = () => {
    const token = localStorage.getItem('token');
    const orders = formatOrder();
    fetch('https://lab-api-bq.herokuapp.com/orders', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
        "Authorization": token,
      },
      body: JSON.stringify(orders)
    }).then(response => {
      if (response.status === 200) {
        //localStorage.removeItem('order');
        props.addProductToQuote({'cancel': true});
        console.log(response);
      }
    })
    
  };
  
  return (
    <Box>
      <TableContainer component={Paper} style={{width: '100%', marginLeft: '0px', marginRight: '0px'}}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={5}style={{backgroundColor:'rgb(229,168,129)', textTransform: 'uppercase' ,color: '#cf5e18', fontWeight: '800'}}>
                Resumo
              </TableCell>
            </TableRow>
            
          </TableHead>
          <TableBody>
            {
              !props.products ? {} : Object.keys(props.products).map((index) => (
            <TableRow key={index}>
              <TableCell>{props.products[index].name}</TableCell>
              <TableCell align="left">{props.products[index].qtd}</TableCell>
              <TableCell align="left">R$ {props.products[index].price + ',00'}</TableCell>
              <TableCell align="left">R$ {props.products[index].qtd * props.products[index].price + ',00'}</TableCell>
              <TableCell align="left">
               
                <IconButton onClick={() => props.addProductToQuote({'product': {'id': index, 'qtd': 0 }})}>
                  <CloseIcon style={{color: 'red'}}/>
                </IconButton>

              </TableCell>
            </TableRow>
              ))
            }
            <TableRow>
              <TableCell colSpan={3} style={{fontWeight: 'bolder'}}>TOTAL:</TableCell>
              <TableCell style={{ backgroundColor: '#8bc34a'}} colSpan={2}>R$ {!props.products ? {} : props.total + ',00'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} align="right">
                <Button variant="contained" onClick={() => props.addProductToQuote({'cancel': true})} >Cancelar Pedido</Button>
              </TableCell>
              <TableCell colSpan={2} align="left">
                <Button variant="contained" color="primary" onClick={() => handleCreateOrder()}>Preparar</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
