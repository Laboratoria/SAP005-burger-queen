
import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import logoNav from './img/logoNav.png';


export const useStyles = makeStyles(() => ({
  
    Logoheader:{
      
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      position: 'absolute',
      },
  
    logoComponent: {   //Okay
      maxWidth: 60,
      flexGrow: '1',
    },
   
    logoHome: {
      maxWidth: '55%' ,
  },
      
  }));

    // Logo Tipo
export function LogoNav () {
    const classes = useStyles();
    return (
        <div className={classes.Logoheader}> 
      <img className={classes.logoComponent} src={logoNav} alt='logo'/>
      </div>
    )
  }

  //Logo Principal Home
  export function LogoHome () {
    const classes = useStyles();
    return (
    <img className={classes.logoHome} src={logoNav} alt='logo'/>
      
    )
  }