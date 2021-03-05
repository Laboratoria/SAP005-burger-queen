import React from 'react';
import { makeStyles , withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Changebravery } from '../../StandardButton/CustomButtons.js';
import TableHead from '@material-ui/core/TableHead';
import { Box } from '@material-ui/core';

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

export const Breakfast = (props) => {
  const classes = useStyles();

  return (
    <Box>
      <TableContainer component={Paper} style={{width: '100%', marginLeft: '0px', marginRight: '0px'}}>
        <Table aria-label="customized table"className={classes.Table}>
        <TableHead style={{width: '100%', backgroundColor:'red' }}>        
            <TableRow >
              <StyledTableCell style={{backgroundColor:'rgb(229,168,129)', textTransform: 'uppercase' ,color: '#cf5e18', fontWeight: '800'}}align="left"> CARDÁPIO / VALOR </StyledTableCell>
              <StyledTableCell style={{backgroundColor:'rgb(229,168,129)',textTransform: 'uppercase', color: '#cf5e18', fontWeight: '800'}} align="right" content="Cadastrar">Quantidade Unitária</StyledTableCell>
            </TableRow>
            </TableHead>
         
            <TableBody> { props.menu.map((product) => (
                <StyledTableRow key={product}>
                  <StyledTableCell align="left" style={{textTransform: 'uppercase' , color:'black'}}>{product.name} 
                  <Box align="left" style={{textTransform: 'uppercase' , color:'black'}}>R$ {product.price},00</Box>
                  </StyledTableCell>
                  <StyledTableCell align="right" >
                    <Changebravery addProductToQuote={props.addProductToQuote} product={product} products={props.products} />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
         </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )  
}
