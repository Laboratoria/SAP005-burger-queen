import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar,Box, Typography, Toolbar, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../src/images/logo.png';



export const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  submitMenuType: {
    fontSize: '1rem',
    height: '10vh',
    width: '20vw',
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
  submitOrderItems: {
    background: 'linear-gradient(45deg, #78909c 30%, #455a64 90%)',
    borderRadius: 5,
    border: 0,
    color: 'white',
    height: 500,
    width:370,
    paddingTop: '20px',
    marginTop:'20px',
    paddingRight:'5px',
    marginLeft:'420px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize:'15px'
  },
  submitMenuItems: {
    background: 'linear-gradient(45deg, #78909c 30%, #455a64 90%)',
    borderRadius: 5,
    border: 0,
    color: 'white',
    height: 68,
    width:370,
    paddingTop: '10px',
    marginTop:'2px',
    paddingRight:'5px',
    marginLeft:'16px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    display: 'flex',
    justifyContent: 'center',
  },
  submitMenuCardsModal: {
    background: 'linear-gradient(45deg, #78909c 30%, #455a64 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: '',
    width:390,
    paddingTop: '20px',
    marginTop:'2px',
    paddingRight:'5px',
    marginLeft:'16px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    justifyContent: 'center',
    textAlign: 'center',
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
  
  rootMenu: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  
}));

export function Logo() {
  const classes = useStyles();
  return (
    <img className={classes.logo} src={logo} alt='logo'/>
  )
}

export function Copyright() {
  return (
    <Box mt={5} className='copyRight'>
      <Typography variant='body2'  align='center'>
        {'Copyright © Your Website'}
      </Typography> 
    </Box>
  );
}

export function NavBar() {

  const classes = useStyles();

  const localStorageClear = () => {
    localStorage.clear()
  }

  return (
    <AppBar position='static' elevation={0} className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
        <img className={classes.logoComponent} src={logo} alt='logo'/>
        <Typography variant='h6'  noWrap className={classes.toolbarTitle}>
        Ratatouille
        </Typography>
        <Button variant='outlined' className={classes.link} onClick={(event) => {event.preventDefault();localStorageClear();}}>
          <Link to='/' >Sair</Link>
        </Button>
      </Toolbar>
    </AppBar>
  )
}
