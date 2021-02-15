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
    paddingLeft:'140px',
    paddingTop:'15px'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 0,
    textAlign: 'center',
    
  },
  submitHall: {
    margin: theme.spacing(3, 0, -1.5),
    backgroundColor: theme.palette.text.primary,
    color: '#fafafa'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.text.primary,
    color: '#fafafa'
  },
  submitMenu: {
    margin: theme.spacing(2, 1, 0),
    backgroundColor: theme.palette.text.primary,
    color: '#fafafa',
    paddingLeft:'30px',
    marginLeft:'16px',
    textAlign:'center'
  },
  logo: {
    maxWidth: 200,
    paddingTop:'60px'
    
  },
  arrow:{
    margin: 10,
    paddingRight:'600px'
  },
  arrowMenu:{
    margin: 10,
    paddingTop:'480px'
  },
  totalProducts: {
    paddingRight:'100px',
  },
  
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

export function CreatSign() {
  return (
    <Typography color="textPrimary" component="h1" variant="h5">
      Cadastre-se 
    </Typography>
  )
}

export function BoxProducts() {
  return (
    <Box sx={{ border: '1px dashed grey' }} clone>
      <p>produtos</p>
    </Box>
  );
}

export function BoxTotalProducts() {
  return (
    <Box sx={{ border: '1px dashed grey' }} clone>
      <p>Total produtos</p>
    </Box>
  );
}



/* export function SimpleAlerts() {
  const classes = useStyles();

  return (
    <div className={classes.errorBox}>
      <Alert severity="error">{json.message}</Alert>
    </div>
  );
} */