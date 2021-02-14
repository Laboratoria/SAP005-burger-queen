import React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../src/images/logo.png';

export const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 0,
    textAlign: 'center',
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.text.primary,
    color: '#fafafa'
  },
  logo: {
    maxWidth: 200,
  },
  arrow:{
    margin: 10,
  }
  
}));

export function Logo() {
  const classes = useStyles();

  return (
    <img className={classes.logo} src={logo} alt="logo"/>
  )
}

export function Copyright() {
  return (
    <Box mt={5}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography> 
    </Box>
  );
}

export function SingIn() {
  return (
    <Typography color="textPrimary" component="h1" variant="h5">
    Ratatouille Burguer
    </Typography>
  )
}

export function CreatSing() {
  return (
    <Typography color="textPrimary" component="h1" variant="h5">
      Cadastre-se 
    </Typography>
  )
}
  
