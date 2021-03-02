import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Toolbar} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import logoNav from './img/logoNav.png';
import './Hearder.css';
import TextField from '@material-ui/core/TextField';


//               menu hamburguer
//document.querySelector('.hamburger-menu').addEventListener('click', () => {
  //document.querySelector('.nav-wrapper').classList.toggle('change');
//});


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
    padding: '30px',
    marginBottom: '20px',
  },
  Hall:{             //Okay
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
    maxWidth: 80,
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
    top: '0',
    backgroundColor: '#ce5f18',
    width: '100%',
    display: 'flex',
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

  Footer: {
    position: 'fixed',
    width: '100%',
    bottom: '0',
    backgroundColor: 'hsl(23, 79%, 45%, 50%)',
    color: '#000000',
    textAlign: 'center',
  },

}));

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);


export function LogoNav () {
  const classes = useStyles();
  return (
    <img className={classes.logoNav} src={logoNav} alt='logo'/>
  )
}

export function NavBar() {

  const classes = useStyles();

  const localStorageClear  = async () => {
    localStorage.clear()
  }
  
  
  return (
    <AppBar position='static' elevation={0} className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
        <img className={classes.logoComponent} src={logoNav} alt='logo '/>
        <Typography variant='h6'  noWrap className={classes.toolbarTitle}>
       novo do funcionario </Typography>
       <div class="nav-wrapper">
            <div class="hamburger-menu">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
            </div>
        <nav class="top-nav">
             <ul class="nav-list">
                    <li>
                      <a href="/Hall" className="nav-link" data-text="Home">Novo Pedido</a></li>
                    <li>
                      <a href="#" className="nav-link" data-text="About Us">Pedidos</a></li>
                    <li>
                      <a href="#" className="nav-link" data-text="Services">Cozinha</a></li>
                    <li>
                      <a href="/" onClick={(event) => {event.preventDefault();localStorageClear();}} className="nav-link" data-text="Contact"> <Link to='/' >Sair</Link></a></li>
              </ul>
           </nav>
        </div>
       
      </Toolbar>
    </AppBar>

    
  )
}

export function Copyright() {
  const classes = useStyles();
  return (
    
      <footer className={classes.Footer}>
        Desenvolvido por Juliane Cristine e Sara Viana
      </footer>
  );
}
