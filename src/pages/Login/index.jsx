import React, { useState } from 'react'
import { Link, useHistory} from 'react-router-dom';
import {Copyright, Logo, useStyles} from '../../components.js';
import { Button, Container, TextField, Grid, Typography } from '@material-ui/core';
import '../../style.css';
import { fetchLogin } from '../../configApi/Api.jsx';


function Login(){

  const classes = useStyles();

  const [emailLogin, setEmail] = useState('');
  const [passwordLogin, setPassword] = useState('');
 
  const history = useHistory();

  const routerHall = () => {
    history.push('/Hall')
  }

  const routerKitchen = () => {
    history.push('/Kitchen')
  }

  const handLogin = () => {
    
    fetchLogin(emailLogin,passwordLogin)

    const roleSector = localStorage.getItem('role')

    if(roleSector === 'garcom'){
      routerHall();
    }
    else if(roleSector === 'cozinha'){
      routerKitchen();
    }
    else{
      alert('Não foi possível fazer o resgistro, tente novamente!')
    }
  }
  

    return (
      <Container className='container'>
        <div className={classes.paper}>
          <Logo/>
          <form className={classes.form}>
          <Typography  component='h1' variant='h5'> Ratatouille Burguer </Typography>
            <TextField variant='outlined' margin='normal' required fullWidth label='Email' name='email' 
            autoComplete='username' value={emailLogin} onChange={event => setEmail(event.target.value)}/>

            <TextField variant='outlined' margin='normal' required fullWidth name='password' label='Senha' type='password' id='password'
            autoComplete='current-password' value={passwordLogin} onChange={event => setPassword(event.target.value)}/>

            <Button type='submit' fullWidth variant='contained' className={classes.submit} onClick={(event) => {event.preventDefault();handLogin();}}>Entrar</Button>
          </form>
          <Grid item>
            <Link to='/Registry' >
              {'Novo usuário? Registre-se'}
            </Link>
          </Grid>
        </div>
        <Copyright/>
      </Container>
    );
  }
  
  export default Login;