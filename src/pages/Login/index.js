import React, { useState } from 'react'
import { Link, useHistory} from 'react-router-dom';
import {Copyright, SingIn, Logo, useStyles} from '../../components.js';
import { Button, Container, TextField, Grid } from '@material-ui/core';
import '../../style.css';


function Login(){

  const classes = useStyles();

  const [emailLogin, setEmail] = useState('');
  const [passwordLogin, setPassword] = useState('');
  const urlLogin = `email=${emailLogin}&password=${passwordLogin}`
  const history = useHistory();

  const routerHall = () => {
    history.push('/Hall')
  }

  const routerKitchen = () => {
    history.push('/Kitchen')
  }


  const fetchLogin = () => {
    fetch('https://lab-api-bq.herokuapp.com/auth', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: urlLogin

    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        if(json.role === "garcom"){
          routerHall();
        }
        else if(json.role === "cozinha"){
          routerKitchen();
        }
        else{
          alert(json.message)
        }
      })
  }

    return (
      <Container className='container'>
        <div className={classes.paper}>
          <Logo/>
          <form className={classes.form}>
            <SingIn/>
            
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="username"  
            value={emailLogin} onChange={event => setEmail(event.target.value)}/>

            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={passwordLogin} onChange={event => setPassword(event.target.value)}/>

            <Button type="submit" fullWidth variant="contained" className={classes.submit} onClick={(event) => {event.preventDefault();fetchLogin();}}>Entrar</Button>

          </form>
  
          <Grid item>
            <Link to="/Registry" >
              {'Novo usuário? Registre-se'}
            </Link>
          </Grid>

        </div>
        <><Copyright/></>
      </Container>
    );
  }
  
  export default Login;