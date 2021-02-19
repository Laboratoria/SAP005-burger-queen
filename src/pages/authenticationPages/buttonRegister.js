import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    marginTop: '0.5rem',
    background: 'linear-gradient(45deg, #ce5f18 30%, #ce5f18 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px #ce5f18',
    color: 'white',
    height: 48,
    padding: '0 30px',
    width: '100%',
    marginLeft: '0.5rem',
    fontSize: '1rem',
  },
});

export default function ButtonCustom(props) {
  const classes = useStyles();
  return <Button className={classes.root} onClick={props.onClick}>Criar e Logar</Button>;
}