import React from 'react';
import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LogoNav } from '../Logos/Logos.js';
import { useHistory } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import Tab from '@material-ui/core/Tab';
import { AiFillSnippets } from "react-icons/ai";
import Tabs from '@material-ui/core/Tabs';
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
    width: '100%',
    justifyContent: 'center',

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
    width: '55%'
    
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

//Menu Sub
export function SubToolbar (props) {
  const classes = useStyles();
  const history = useHistory();
  const routerHall = () => {
    history.push('/Hall')  }
  const routerKitchen = () => {
    history.push('/Kitchen')
  }

  const handleLogout = () => {
    if (localStorage.getItem('token')) {
      localStorage.clear();
      return history.push('/')
    }
  }
  return (
    <Box centered className={classes.toolbar2}>
    <Tabs  centered style={{ color: '#cf5e18' , width: '100%'}} >
      <LinkTab onClick={() => routerHall()} label="Home" icon={<h4><AiFillHome style={{ color: '#cf5e18' }} /></h4>} href="Hall" />
      <LinkTab onClick={() => routerKitchen()} label="Pedidos" icon={<h4><AiFillSnippets style={{ color: '#cf5e18' }} /></h4>} href="Kitchen" />
      <LinkTab onClick={() => handleLogout()} label="Sair" icon={<h4><FiLogOut style={{ color: '#cf5e18',}} /></h4>} />
    </Tabs>
    </Box>
  )
};


function LinkTab(props) {
  return (

    <Tab centered style={{opacity: '100%',  minWidth: '150px'}} component="a" onClick={(event) => {
      event.preventDefault();
    }}
      {...props} />
  );
}


