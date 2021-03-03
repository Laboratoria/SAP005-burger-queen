//Footer (rodapé)
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  
      Footer: {               //Okay
      position: 'fixed',
      width: '100%',
      bottom: '0',
      backgroundColor: 'hsl(23, 79%, 45%, 50%)',
      color: '#000000',
      textAlign: 'center',
    },
    
  }));
    
export function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.Footer}>
          Desenvolvido por Juliane Cristine e Sara Viana
        </footer>
    );
  }
  