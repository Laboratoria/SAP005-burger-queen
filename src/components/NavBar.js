import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar,Typography, Toolbar, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../images/logo.png';

const NavBar = () => {
  const useStyles = makeStyles((theme) => ({
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      backgroundColor: theme.palette.info.light,
      borderRadius:10,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    logoComponent: {
      maxWidth: 50,
    },
  }));

  const classes = useStyles();

  const localStorageClear = () => {
    localStorage.clear();
  };
  
  return (
    <AppBar position='static' elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <img src={logo} className={classes.logoComponent}/>
        <Typography variant='h6'  noWrap className={classes.toolbarTitle}>
          Ratatouille
        </Typography>
        <Button variant='outlined' className={classes.link} onClick={(event) => {event.preventDefault();localStorageClear();}}>
          <Link to='/' >Sair</Link>
        </Button>
      </Toolbar>
    </AppBar>
   )
  };
  export default NavBar;
