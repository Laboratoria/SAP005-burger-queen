import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Changebravery } from '../../StandardButton/CustomButtons.js';
import Box from '@material-ui/core/Box';
import TableBody from "@material-ui/core/TableBody";

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

export const Dinner = (props) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} style={{width: '100%', marginLeft: '0px', marginRight: '0px'}}>
    <Table aria-label="customized table"className={classes.Table}>
    <TableHead style={{width: '100%', backgroundColor:'red' }}>        
        
          <StyledTableCell style={{backgroundColor:'rgb(229,168,129)', textTransform: 'uppercase' ,color: '#cf5e18', fontWeight: '800'}}align="left"> Cardápio / Valor</StyledTableCell>
          <StyledTableCell style={{backgroundColor:'rgb(229,168,129)',textTransform: 'uppercase', color: '#cf5e18', fontWeight: '800'}} align="right" content="Cadastrar">Quantidade Unitária</StyledTableCell>
        
        </TableHead>
        
        <TableBody> {  props.menu['hamburguer'].map((product, index) => (
            <StyledTableRow key={index}>
          
                <StyledTableCell align="left" style={{textTransform: 'uppercase' , color:'black'}}>{product.complement ? product.name + " " +product.flavor + " adicional " + product.complement : product.name + " " + product.flavor}    
                <Box align="left" style={{textTransform: 'uppercase' , color:'black'}}>R$ {product.price},00</Box>
                  </StyledTableCell>
                <StyledTableCell align="right">
                  <Changebravery addProductToQuote={props.addProductToQuote} product={product} products={props.products}/>
                </StyledTableCell>
              
            </StyledTableRow>
          )) }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export const SideSishers = (props) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} style={{width: '100%', marginLeft: '0px', marginRight: '0px'}}>
    <Table aria-label="customized table"className={classes.Table}>
    <TableHead style={{width: '100%', backgroundColor:'red' }}>        
        
          <StyledTableCell style={{backgroundColor:'rgb(229,168,129)', textTransform: 'uppercase' ,color: '#cf5e18', fontWeight: '800'}}align="left"> Cardápio / Valor</StyledTableCell>
          <StyledTableCell style={{backgroundColor:'rgb(229,168,129)',textTransform: 'uppercase', color: '#cf5e18', fontWeight: '800'}} align="right" content="Cadastrar">Quantidade Unitária</StyledTableCell>
        
        </TableHead>
        
        {  props.menu['side'].map((product, index) => (
            <StyledTableRow key={index}>
          
                <StyledTableCell align="left" style={{textTransform: 'uppercase' , color:'black'}}>{product.name} 
                <Box align="left" style={{textTransform: 'uppercase' , color:'black'}}>R$ {product.price},00 </Box>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Changebravery addProductToQuote={props.addProductToQuote} product={product} products={props.products}/>
                </StyledTableCell>
              
            </StyledTableRow>
          )) }

      </Table>
    </TableContainer>
  );
}

export const Drinks = (props) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} style={{width: '100%', marginLeft: '0px', marginRight: '0px'}}>
    <Table aria-label="customized table"className={classes.Table}>
    <TableHead style={{width: '70%', backgroundColor:'red' }}>        
        
        <StyledTableCell style={{backgroundColor:'rgb(229,168,129)', textTransform: 'uppercase' ,color: '#cf5e18', fontWeight: '800'}}align="left"> Cardápio / Valor</StyledTableCell>
          <StyledTableCell style={{backgroundColor:'rgb(229,168,129)',textTransform: 'uppercase', color: '#cf5e18', fontWeight: '800'}} align="right" content="Cadastrar">Quantidade Unitária</StyledTableCell>
      
        </TableHead>
        
        {  props.menu['drinks'].map((product, index) => (
            <StyledTableRow key={index}>
          
                <StyledTableCell align="left" style={{textTransform: 'uppercase' , color:'black'}}>{product.name}
                <Box align="left" style={{textTransform: 'uppercase' , color:'black'}}>R$ {product.price},00</Box>
                </StyledTableCell>
                
                <StyledTableCell align="right">
                  <Changebravery addProductToQuote={props.addProductToQuote} product={product} products={props.products}/>
                </StyledTableCell>
              
            </StyledTableRow>
          )) }

      </Table>
    </TableContainer>
  );
}