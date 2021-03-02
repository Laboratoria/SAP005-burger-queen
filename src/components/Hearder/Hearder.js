import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Toolbar} from '@material-ui/core';
import { makeStyles, withStyles  } from '@material-ui/core/styles';
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
    marginBottom: '20px',
    

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
  },
  
  link: {
    margin: theme.spacing(1, 1.5),
  },
  
  Footer: {               //Okay
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


// Logo Tipo
export function LogoNav () {
  const classes = useStyles();
  return (
    <img className={classes.logoComponent} src={logoNav} alt='logo'/>
  )
}

// Menu Hamb
export function MenuHamb () {
  const classes = useStyles();
  const localStorageClear  = async () => {
    localStorage.clear()
  }
    return (
    <div className={classes.navwrapper}>
            <div class="hamburger-menu">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
            </div>
        <nav className="top-nav">
             <ul className="nav-list">
                    <li>
                      <a href="/Hall" className="nav-link" data-text="Home">Novo Pedido</a></li>
                    <li>
                      <a href="#" className="nav-link" data-text="Pedidos">Pedidos</a></li>
                    <li>
                      <a href="#" className="nav-link" data-text="Cozinha">Cozinha</a></li>
                    <li>
                      <a href="/" onClick={(event) => {event.preventDefault();localStorageClear();}} className="nav-link" data-text="Contact"> <Link to='/' >Sair</Link></a></li>
              </ul>
           </nav>
        </div>
  )
}


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
        <LogoNav/>
        <Typography variant='h6'  noWrap className={classes.toolbarTitle}>
       novo do funcionario
       <MenuHamb> </MenuHamb>
        </Typography>
              </Toolbar>        
  )
}

//Footer (rodapé)
export function Customertable() {
  const classes = useStyles();
  return ( <div className={classes.containerdelivery}>
  
    <div className={classes.customertable}>
    <Typography component="h1" variant="h4" style={{ paddingRight: '70px', textAlign: 'center', fontWeight: 'bolder', color: '#ce5f18', marginLeft: '0.5rem' }}>
     Cardápio Salão
     </Typography>
     <div class="box-data">
     <Typography component="h1" variant="h5" style={{ textAlign: 'center', fontWeight: 'bolder', color: '#ce5f18', marginLeft: '0.5rem' }}>
    Nome do Cliente
     </Typography>
     <CssTextField className={classes.margin} label="Nome do Cliente" type="text" variant="outlined" id="custom-css-outlined-input"  />
     <Typography component="h1" variant="h5" style={{ textAlign: 'center', fontWeight: 'bolder', color: '#ce5f18', marginLeft: '0.5rem' }}>
    Mesa
     </Typography>

    <CssTextField className={classes.margin} label="Número da Mesa" type="number"  min="1" max="999" variant="outlined" id="custom-css-outlined-input-numer"  />
     </div>
  </div>
  
 </div>
  );
}




//Footer (rodapé)
export function Copyright() {
  const classes = useStyles();
  return (
    
      <footer className={classes.Footer}>
        Desenvolvido por Juliane Cristine e Sara Viana
      </footer>
  );
}





