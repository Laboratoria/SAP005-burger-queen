import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Changebravery } from '../../StandardButton/CustomButtons.js';

const useStyles = makeStyles({
  Table: {
    minWidth: 700
  }
});

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

export const SideSishers = (props) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} style={{width: '100%', marginLeft: '0px', marginRight: '0px'}}>
    <Table aria-label="customized table"className={classes.Table}>
    <TableHead style={{width: '100%', backgroundColor:'red' }}>        
        
          <StyledTableCell style={{backgroundColor:'rgb(229,168,129)', textTransform: 'uppercase' ,color: '#cf5e18', fontWeight: '800'}}align="left"> Cardápio</StyledTableCell>
          <StyledTableCell style={{backgroundColor:'rgb(229,168,129)',textTransform: 'uppercase' ,color: '#cf5e18', fontWeight: '800'}} align="center">Preço</StyledTableCell>
          <StyledTableCell style={{backgroundColor:'rgb(229,168,129)',textTransform: 'uppercase', color: '#cf5e18', fontWeight: '800'}} align="right" content="Cadastrar">Quantidade Unitária</StyledTableCell>
        
        </TableHead>
        
        {  props.menu['hamburguer'].map((product, index) => (
            <StyledTableRow key={index}>
          
                <StyledTableCell align="left" style={{textTransform: 'uppercase' , color:'black'}}>{product.name}</StyledTableCell>
                <StyledTableCell align="center" style={{textTransform: 'uppercase' , color:'black'}}>R$ {product.price},00</StyledTableCell>
                <StyledTableCell align="right">
                  <Changebravery addProductToQuote={props.addProductToQuote} product={product} products={props.products}/>
                </StyledTableCell>
              
            </StyledTableRow>
          )) }

      </Table>
    </TableContainer>
  );
}

