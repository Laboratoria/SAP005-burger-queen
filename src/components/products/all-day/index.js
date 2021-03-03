import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ToggleButtonCustom } from '../../button-toggle/index.js';


const useStyles = makeStyles({
  table: {
    minWidth: 500
  }
});

export const AllDay = (props) => {

  const classes = useStyles();

  return (
    <TableContainer component={Paper} style={{width: '100%', marginLeft: '0px', marginRight: '0px'}}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="left" colSpan={3} style={{fontWeight: 'bolder', backgroundColor: '#8bc34a', color: '#fff', fontSize:'1rem', textAlign: 'center'}}>
              Durante o dia
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left" colSpan={3} style={{fontWeight: 'bolder', backgroundColor: '#8bc34a', color: '#fff', fontSize:'1rem', textAlign: 'center'}}>
              Hamburgueres
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Opções</TableCell>
            <TableCell align="left">Preço</TableCell>
            <TableCell align="left">
              Quantidade
            </TableCell>
          </TableRow>
        </TableHead>
        {
          props.menu['hamburguer'].map((product, index) => (
            <TableBody key={index}>
              <TableRow>
                <TableCell>{product.complement ? product.name + " " +product.flavor + " adicional " + product.complement : product.name + " " + product.flavor}</TableCell>
                <TableCell align="left">{product.price},00</TableCell>
                <TableCell align="left">
                  <ToggleButtonCustom addProductToQuote={props.addProductToQuote} product={product} products={props.products}/>
                </TableCell>
              </TableRow>

            </TableBody>
          ))
        }

        <TableHead>
          <TableRow>
            <TableCell align="left" colSpan={5} style={{fontWeight: 'bolder', backgroundColor: '#8bc34a', color: '#fff', fontSize:'1rem', textAlign: 'center'}}>
              Acompanhamentos
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Opções</TableCell>
            <TableCell align="left">Preço</TableCell>
            <TableCell align="left">Quantidade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          props.menu['side'].map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.name}</TableCell>
              <TableCell align="left">{product.price},00</TableCell>
              <TableCell align="left">
                <ToggleButtonCustom addProductToQuote={props.addProductToQuote} product={product} products={props.products}/>
              </TableCell>
            </TableRow>
          ))
        }
        </TableBody>

        <TableHead>
          <TableRow>
            <TableCell align="left" colSpan={5} style={{fontWeight: 'bolder', backgroundColor: '#8bc34a', color: '#fff', fontSize:'1rem', textAlign: 'center'}}>
              Bebidas
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Opções</TableCell>
            <TableCell align="left">Preço</TableCell>
            <TableCell align="left">Quantidade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          props.menu['drinks'].map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.name}</TableCell>
              <TableCell align="left">{product.price},00</TableCell>
              <TableCell align="left">
                <ToggleButtonCustom addProductToQuote={props.addProductToQuote} product={product} products={props.products}/>
              </TableCell>
            </TableRow>
            ))
          } 
        </TableBody>
      </Table>
    </TableContainer>
  );
}