import React from 'react';
import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LogoNav } from '../Logos/Logos.js';
import { SubToolbar } from '../SubToolbarIcons/SubToolbarIcons';
import Box from '@material-ui/core/Box';

export const useStyles = makeStyles((theme) => ({

  containerdelivery: {  //Okay
    width: '100%'
  },

  customertable: {     //Okay
    display: 'flex',
    alignItems: 'center',
    marginTop: '30px',
    marginBottom: '20px',
    width: '100%'

  },
  HallConteiner: {
    width: '100%',
    height: '-webkit-fit-content',
    height: '-moz-fit-content',
    height: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    backgroundSize: 'cover',
    backgroundPosition: '50% -344px',
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
    borderBottom: '2px solid #2d9bd1',
  },

  toolbar2: {   //Okay
    flexWrap: 'wrap',
    top: '0',
    backgroundColor: '#ffe1ce',
    display: 'flex',
    borderRadius: '0 0 8px 8px',
    alignItems: 'center',


  },

}));

// Menu inteiro superior
export function HallConteiner() {
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
      <LogoNav />
    </Toolbar>
  )
}

export function NavBar2() {
  const classes = useStyles();
  return (
    <Box className={classes.toolbar2}>
      <SubToolbar />
    </Box>
  )
}




