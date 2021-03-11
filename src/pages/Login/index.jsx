import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Container, TextField, Grid, Typography, Snackbar } from '@material-ui/core';
import { useStyles, Logo } from '../../style.js';
import Copyright from '../../components/Copyright';
import NavBar from '../../components/NavBar';
import { Alert }  from '../../components/Alert';
import '../../style.css';

function Login() {
  const classes = useStyles();
  const history = useHistory();

  const [emailLogin, setEmail] = useState('');
  const [passwordLogin, setPassword] = useState('');
  const urlLogin = `email=${emailLogin}&password=${passwordLogin}`;

  const [openAlert, setOpenAlert] = useState(false);
  const [messageError, setMessageError] = useState('');

  const handleClose = (reason) => {
		if (reason === 'clickaway') {
		  return;
		}
		setOpenAlert(false);
	};

  const routerHall = () => {
    history.push('/Hall');
  };

  const routerKitchen = () => {
    history.push('/Kitchen');
  };

  const handleLogin = () => {
    fetch('https://lab-api-bq.herokuapp.com/auth', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlLogin,
    })
      .then((response) => response.json())
      .then((json) => {
        localStorage.setItem('token',json.token);
      
        if(json.role === 'garcom'){
          routerHall();
        }
        else if(json.role === 'cozinha'){
          routerKitchen();
        }
        else {
          const error = json.message;
          setMessageError(error);
          setOpenAlert(true);
        }
      });
  };

  return (
    <Grid>
      <Container className='container configContainer'>
        <div className={classes.paper}>
          <Logo/>
          <Typography  component='h1' variant='h5'> Ratatouille Burguer </Typography>
          <form className={classes.form}>
            <TextField variant='outlined' margin='normal' required fullWidth label='Email' name='email'  autoComplete='username' value={emailLogin} onChange={event => setEmail(event.target.value)}/>

            <TextField variant='outlined' margin='normal' required fullWidth name='password' label='Senha' type='password' id='password' autoComplete='current-password' value={passwordLogin} 
            onChange={event => setPassword(event.target.value)}/>

            <Button type='submit' fullWidth variant='contained' className={classes.submit} onClick={(event) => {event.preventDefault(); handleLogin();}}>Entrar</Button>
          </form>
          <Link to='/Registry' > {'Novo usuário? Registre-se'} </Link>
        </div>
        <Copyright/>
        <Snackbar anchorOrigin={ {vertical: 'top', horizontal: 'center' }} open={openAlert} autoHideDuration={4000} onClose={handleClose}>
          <Alert className = {classes.inputAlert}  onClose={handleClose} severity='error'> {messageError} </Alert>
        </Snackbar>
      </Container>
    </Grid> 
  );
};  
export default Login;