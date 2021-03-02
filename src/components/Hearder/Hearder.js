import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logoNav from './img/logoNav.png';
import './Hearder.css';



//document.querySelector('.hamburger-menu').addEventListener('click', () => {
  //document.querySelector('.nav-wrapper').classList.toggle('change');
//});





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
  submitMenuItems: {
    background: 'linear-gradient(45deg, #78909c 30%, #455a64 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 68,
    width:390,
    paddingTop: '20px',
    marginTop:'2px',
    paddingRight:'5px',
    marginLeft:'16px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    display: 'flex',
    justifyContent: 'center',
  },
  logoNav: {
    maxWidth: 200,
  },
  logoComponent: {   //Okay
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
  appBar: { //Okay
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.warning.main,
  },
  toolbar: {   //Okay
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

export function LogoNav () {
  const classes = useStyles();
  return (
    <img className={classes.logoNav} src={logoNav} alt='logo'/>
  )
}

export function NavBar() {

  const classes = useStyles();

  const localStorageClear = () => {
    localStorage.clear()
  }
  
  
  return (
    <AppBar position='static' elevation={0} className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
        <img className={classes.logoComponent} src={logoNav} alt='logo '/>
        <Typography variant='h6'  noWrap className={classes.toolbarTitle}>
       novo do funcionario
       <div class="nav-wrapper">
            <div class="hamburger-menu">
                <div class="line line-1"></div>
                <div class="line line-2"></div>
                <div class="line line-3"></div>
            </div>
        <nav class="top-nav">
             <ul class="nav-list">
                    <li><a href="/Hall" class="nav-link" data-text="Home">Novo Pedido</a></li>
                    <li><a href="#" class="nav-link" data-text="About Us">Pedidos</a></li>
                    <li><a href="#" class="nav-link" data-text="Services">Cozinha</a></li>
                    <li><a href="/" onClick={(localStorageClear)} className="nav-link" data-text="Contact">Sair</a></li>
              </ul>
           </nav>
        </div>
        </Typography>

      </Toolbar>
    </AppBar>
  )
}

export function Copyright() {
  return (
    
      <footer className="footer">
        Desenvolvido por Juliane Cristine e Sara Viana
      </footer>
  );
}
