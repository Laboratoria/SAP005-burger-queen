import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";

//Botão Principa (LOGAR CADASTRO HOME)
export const useStyles = makeStyles({
  StandardButton: {
    marginTop: '0.5rem',
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



});
//BOTÃO CADASTRO  LOGIN
export  function StandardButton(props) {
  const classes = useStyles();
  return ( 
   <Button className={classes.StandardButton} onClick={props.onClick}>{props.content}</Button>
   )
  }
//BOTÃO CADASTRO  Home
export function StandardButtonPrincipal (props) {
  const classes = useStyles();
  return (
   <button className={classes.StandardButtonPrincipal} onClick={props.onClick}>{props.content}</button>
    
  )
}

export function StandardButtonPrincipal2 (props) {
  const classes = useStyles();
  return (
   <button className={classes.StandardButtonPrincipal} onClick={props.onClick}>{props.content}</button>
    
  )
}



export const ToggleButtonCustomf = (props) => {
  const [qtdProduct, setQtdProduct] = useState(props.products[props.product.id] ? props.products[props.product.id].qtd : 0);
 
  const setQuote = (product, increment) => {
    let qtd = qtdProduct + increment;
    if (qtd < 0) {
      qtd = 0;
    }
    setQtdProduct(qtd);
    props.addProductToQuote({'product': {'id': product.id, 'qtd': qtd, 'name': product.name, 'price': product.price, 'total': qtd * product.price}});
  }

  return (
    <ToggleButtonGroup>
      <ToggleButton value={"remove-icon"} onClick={() => setQuote(props.product, - 1)}>
        <RemoveOutlinedIcon />
      </ToggleButton>
      <ToggleButton value={"quantity"} disabled style={{fontSize: '1rem', color: 'black'}}>
        {qtdProduct}
      </ToggleButton>
      <ToggleButton value={"add-icon"} onClick={() => setQuote(props.product, + 1)}>
        <AddOutlinedIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
