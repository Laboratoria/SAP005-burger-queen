import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Box } from '@material-ui/core';
import { Checkout, Cancel } from "../../StandardButton/CustomButtons.js";

const useStyles = makeStyles({
  table: {
    minWidth: 500
  }
});

export const OrderResume = (props) => {
  const classes = useStyles();

  const formatOrder = () => {
    let order = {
      "client": props.client,
      "table": props.table,
      "products": [],
    };

    const newProduct = Object.entries(props.products);
    newProduct.map((product) => (
      order['products'].push({ 'id': product[1].id, 'qtd': product[1].qtd })
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
        props.addProductToQuote({ 'cancel': true });
        console.log(response);
        alert('Pedido Enviado para Cozinha!');
      }
    })

  };
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  return (
    <Box>
      <TableContainer component={Paper} style={{ width: '100%', marginLeft: '0px', marginRight: '0px' }}>
        <Table className={classes.table}>
          <TableHead>
           <TableCell align="center" colSpan={5} style={{ backgroundColor: '#e5e5e5', textTransform: 'uppercase', color: '#cf5e18', fontWeight: '800' }}>
              Resumo
              </TableCell>
          </TableHead>
          <TableBody>
            {!props.products ? {} : Object.keys(props.products).map((index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{props.products[index].name}</StyledTableCell>
                <StyledTableCell align="left">{props.products[index].qtd}</StyledTableCell>
                <StyledTableCell align="left">R$ {props.products[index].price + ',00'}</StyledTableCell>
                <StyledTableCell align="left">R$ {props.products[index].qtd * props.products[index].price + ',00'}</StyledTableCell>
                <StyledTableCell align="left">
                  <IconButton onClick={() => props.addProductToQuote({ 'product': { 'id': index, 'qtd': 0 } })}>
                    <CloseIcon style={{ color: 'red' }} />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            )) }
            <TableRow>
              <TableCell colSpan={3} style={{ backgroundColor: '#8bc34a', fontWeight: 'bolder' }}>TOTAL A PAGAR:</TableCell>
              <TableCell align="right" style={{ backgroundColor: '#8bc34a', fontWeight: 700 }} colSpan={2}>R$ {!props.products ? {} : props.total + ',00'}</TableCell>
            </TableRow>
          </TableBody>
        </Table>

      </TableContainer>
      <Box style={{ align: 'center', width: '100%', display: 'flex', marginTop: '30px', alignItems: 'center', marginbottom: '20px', justifyContent: 'center' }}>
        <Box style={{ paddingRight: '30px' }}>
          <Cancel content="Cancelar o Preparo" colSpan={2} variant="contained" onClick={() => props.addProductToQuote({ 'cancel': true })}  >
          </Cancel>
        </Box>
        <Checkout content="Preparar" colSpan={2} variant="contained" onClick={() => handleCreateOrder()} >
        </Checkout>
      </Box>
    </Box>
  )
}
