import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar,Box, Typography, Toolbar, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../src/images/logo.png';




export const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  margin: {
    margin: theme.spacing(1),
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paperTable: {
    display: 'flex',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 0,
    textAlign: 'center', 
  },
  submitHall: {
    fontSize: '1rem',
    height: '20vh',
    width: '40vw',
    margin: theme.spacing(4, 2, 2),
    backgroundColor: theme.palette.warning.dark,
    color: '#fafafa'
  },
  
  inputTableName: {
    fontSize: '1rem',
    height: '5vh',
    width: '40vw',
    margin: theme.spacing(3, 2, 2),
    backgroundColor: theme.palette.text.primary,
    color: '#C9CDCB'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.text.primary,
    color: '#fafafa'
  },
  submitMenu: {
    display:'inline',
    margin: theme.spacing(2, 0, 0),
    backgroundColor: theme.palette.text.primary,
    color: '#fafafa',
  },
  logo: {
    maxWidth: 200,
  },
  logoComponent: {
    maxWidth: 50,
  },
  arrow:{
    margin: 25,
    paddingRight:'80vw',
    color: theme.palette.text.primary,
  },

  totalProducts: {
    paddingRight:'100px',
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.info.light,
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
  
}));

export function Logo() {
  const classes = useStyles();

  return (
    <img className={classes.logo} src={logo} alt="logo"/>
  )
}
export function LogoNav() {
  const classes = useStyles();

  return (
    <img className={classes.logoComponent} src={logo} alt="logo"/>
  )
}

export function Copyright() {
  return (
    <Box mt={5} className="copyRight">
      <Typography variant="body2"  align="center">
        {'Copyright © Your Website'}
      </Typography> 
    </Box>
  );
}

export function SingIn() {
  return (
    <Typography  component="h1" variant="h5">
    Ratatouille Burguer
    </Typography>
  )
}

export function CreatSign() {
  return (
    <Typography  component="h1" variant="h5">
      Cadastre-se 
    </Typography>
  )
}

export function NavBar() {

  const classes = useStyles();

  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
        <LogoNav/>
        <Typography variant="h6"  noWrap className={classes.toolbarTitle}>
        Ratatouille
        </Typography>
        <Button variant="outlined" className={classes.link}>
          <Link to='/' >Sair</Link>
          
        </Button>
         
      </Toolbar>
    </AppBar>
  )
}

