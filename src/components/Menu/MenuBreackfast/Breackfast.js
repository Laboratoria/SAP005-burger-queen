import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ToggleButtonCustom } from '../../StandardButton/buttonRegister.js';

const useStyles = makeStyles({
  table: {
    minWidth: 500
  }
});

export const Breakfast = (props) => {
  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper} style={{width: '100%', marginLeft: '0px', marginRight: '0px'}}>
        <Table className={classes.table}>
         
            
            <TableRow>
              <TableCell style={{textTransform: 'uppercase' , color: '#54a2dc'}}align="left"> Cardápio</TableCell>
              <TableCell style={{textTransform: 'uppercase'}} align="center">Preço</TableCell>
              <TableCell style={{textTransform: 'uppercase'}} align="right">Quantidade Unitária</TableCell>
            </TableRow>
         
          <TableBody>
            {    
                     
              props.menu.map((product, index) => (
                <TableRow key={index}>
                  <TableCell align="left" style={{textTransform: 'uppercase'}}>{product.name} </TableCell>
                  <TableCell align="center">R$ {product.price},00</TableCell>
                  <TableCell align="right" >
                    <ToggleButtonCustom addProductToQuote={props.addProductToQuote} product={product} products={props.products} />
                  </TableCell>
                </TableRow>
              ))
              
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )  
}
