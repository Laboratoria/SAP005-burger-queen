import React from 'react';
import { Typography, Toolbar} from '@material-ui/core';
import { makeStyles  } from '@material-ui/core/styles';
import { LogoNav } from '../Logos/Logos.js';
import { Disconnect } from '../Disconnect/Disconnect';


export const useStyles = makeStyles((theme) => ({
  
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  containerdelivery: {  //Okay
    width: '100%'  
  },

  customertable: {     //Okay
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px',
    marginBottom: '20px',
    width: '100%' 

  },
  HallConteiner:{
    width: '100%',
    height: '-webkit-fit-content',
    height: '-moz-fit-content',
    height: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
 },

  margin: {           
    margin: theme.spacing(1),
  },
  
  logoComponent: {   //Okay
    maxWidth: 80,
  },
    toolbar: {   //Okay
    flexWrap: 'wrap',
    top: '0',
    backgroundColor: '#ce5f18',
    width: '100%',
    display: 'flex',
   padding: '7px 0',
  },
  
  link: {
    margin: theme.spacing(1, 1.5),
  },
 
  
}));

// Menu inteiro superior
export function HallConteiner () {
  const classes = useStyles();
  return ( 
  <div className={classes.HallConteiner}></div>
  )
}

//Menu Superior
export function NavBar() {
 const classes = useStyles();
   return (
     <Toolbar className={classes.toolbar}>
        <div>
        <Typography align="right" variant='h6'  noWrap className={classes.toolbarTitle}>
       novo do funcionario
         </Typography>
         </div>
         <LogoNav/>
                
         <Disconnect content="Deslogar"/>
         </Toolbar>        
  )
}






