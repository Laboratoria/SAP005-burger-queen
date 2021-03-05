import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
//Botão Principa (LOGAR CADASTRO HOME)
export const useStyles = makeStyles({
  StandardButton: {
    marginTop: '1rem',
    background: 'linear-gradient(45deg, #ce5f18 30%, #ce5f18 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px #ce5f25',
    color: 'white',
    height: 48,
    padding: '0 30px',
    width: '100%',
    marginLeft: '0.5rem',
    fontSize: '1rem',
   },
  StandardButtonPrincipal: {
    color: '#fdfdff',
    fontWeight: '700',
    width: '280px',
    height: '50px',
    padding: '0 20px',
    background: '#2d9bd1',
    borderRadius: '5px',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'all 0.2s linear',
    margin: '7% auto',
    letterSpacing: '0.05em',
    justifyContent: 'inherit',
  },
  
  StandardButtonPrincipal2: {
    color: '#fdfdff',
    fontWeight: '700',
    width: '280px',
    height: '50px',
    padding: '0 20px',
    background: '#2d9bd1',
    borderRadius: '5px',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'all 0.2s linear',
    margin: '7% auto',
    letterSpacing: '0.05em',
    justifyContent: 'inherit',
  },

  Checkout: {
    color: '#black',
    fontWeight: '700',
    width: '280px',
    height: '50px',
    padding: '0 20px',
    background: '#629c25',
    borderRadius: '5px',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'all 0.2s linear',
    letterSpacing: '0.05em',
    justifyContent: 'inherit',
    
  },

  Cancel: {
    color: '#black',
    fontWeight: '700',
    width: '280px',
    height: '50px',
    padding: '0 20px',
    background: '#c24438',
    borderRadius: '5px',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'all 0.2s linear',
    letterSpacing: '0.05em',
    justifyContent: 'inherit',
  },

});
//BOTÃO CADASTRO / LOGIN
export  function StandardButton(props) {
  const classes = useStyles();
  return ( 
   <Button className={classes.StandardButton} onClick={props.onClick}>{props.content}</Button>
   )
  }
//BOTÃO HOME
export function StandardButtonPrincipal (props) {
  const classes = useStyles();
  return (
   <button className={classes.StandardButtonPrincipal} onClick={props.onClick}>{props.content}</button>
    
  )
}
//BOTÃO HOME DEBAIXO
export function StandardButtonPrincipal2 (props) {
  const classes = useStyles();
  return (
   <button className={classes.StandardButtonPrincipal2} onClick={props.onClick}>{props.content}</button>
    
  )
}
//BOTÃO INICIAR PEDIDO
export function Checkout (props) {
  const classes = useStyles();
  return (
   <button className={classes.Checkout} onClick={props.onClick}> {props.content} <CheckCircleOutlineOutlinedIcon style={{color: '#437766'}}/> </button>
    
  )
}
//BOTÃO CANCELAR PEDIDO
export function Cancel (props) {
  const classes = useStyles();
  return (
   <button className={classes.Cancel} onClick={props.onClick}> {props.content} <CancelOutlinedIcon style={{color: '#ec5443'}}/> </button>
    
  )
}


//BOTÃO DE SOMAR
export const Changebravery = (props) => {
  const [qtdProduct, setQtdProduct] = useState(props.products[props.product.id] ? props.products[props.product.id].qtd : 0);
 
  const setQuote = (product, increment) => {
    let qtd = qtdProduct + increment;
    if (qtd < 0) {qtd = 0; }
    setQtdProduct(qtd);
    props.addProductToQuote({'product': {'id': product.id, 'qtd': qtd, 'name': product.name, 'price': product.price, 'total': qtd * product.price}});
  }

  return (
    <ToggleButtonGroup>
      <ToggleButton style={{border: 'none' }}  value={"remove-icon"} onClick={() => setQuote(props.product, - 1)}>
        <RemoveCircleIcon style={{ color: '#ec5443'}}/>
      </ToggleButton>

      <ToggleButton  value={"quantity"} disabled style={{border: 'none' , fontSize: '0.9rem', color: 'black'}}>
        {qtdProduct}
      </ToggleButton>
    
      <ToggleButton style={{border: 'none' }} value={"add-icon"} onClick={() => setQuote(props.product, + 1)}>
        <AddCircleIcon style={{color: '#629b26'}} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}