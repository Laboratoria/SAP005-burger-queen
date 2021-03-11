import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Container, TextField, InputLabel,FormControl, Select, Typography, Snackbar, Grid } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useStyles, Logo } from '../../style.js';
import Copyright from '../../components/Copyright';
import { Alert }  from '../../components/Alert';
import NavBar from '../../components/NavBar';

function Registry() {
  const classes = useStyles();
  const history = useHistory();

  const [emailRegistry, setEmail] = useState('');
  const [passwordRegistry, setPassword] = useState('');
  const [passwordConfirm, setConfirm] = useState('');
  const [sectorRegistry, setSector] = useState('');

  const [openAlert, setOpenAlert] = useState(false);
  const [messageError, setMessageError] = useState('');

  const urlCreate = `email=${emailRegistry}&password=${passwordRegistry}&role=${sectorRegistry}&restaurant=RatatouilleBurger`;

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
  
  function validadePassword() {
    const password1 = passwordRegistry;
    const password2 = passwordConfirm;
    if (password1 === password2)
      handleRegistry();
    else {
      const errorPassword = 'As senha não são iguais. \nTente novamente!'
      setMessageError(errorPassword);
      setOpenAlert(true);
    }   
  };

  const handleRegistry = () => {
    
    fetch('https://lab-api-bq.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlCreate,
    })
      .then((response) => response.json())
      .then((json) => {
        localStorage.setItem('token',json.token)

        if(json.role === 'garcom'){
          routerHall();
        }
        else if(json.role === 'cozinha'){
          routerKitchen();
        }
        else{
        const error =  json.message
        setMessageError(error);
        setOpenAlert(true);
        }
      });
  };
  
  return (
    <Grid>
      <Container className='container configContainer'>
        <div className={classes.paper}>
          <div className={classes.form}>
            <Link to='/'><ArrowBackIosIcon className={classes.arrow} color='disabled' fontSize='large'/> </Link>
            <Logo/>
            <Typography  component='h1' variant='h5'> Cadastre-se </Typography>
            <form>
              <TextField variant='outlined' margin='normal' required fullWidth label='Email' name='email'
              autoComplete='username' value={emailRegistry} onChange={(event) => setEmail(event.target.value)}/>

              <TextField variant='outlined' margin='normal' required fullWidth name='password' label='Senha' type='password' id='password'
              autoComplete='current-password' value={passwordRegistry} onChange={(event) => setPassword(event.target.value)}/>

              <TextField variant='outlined' margin='normal' required fullWidth name='password' label='Confirme a senha' type="password" id='password'
              autoComplete='current-password' value={passwordConfirm} onChange={event => setConfirm(event.target.value)}/>

              <FormControl variant='outlined' className={classes.formControl}>
                <InputLabel >Cargo</InputLabel>
                <Select native value={sectorRegistry} onChange={(event) => setSector(event.target.value)} label='Cargo'>
                  <option aria-label='None' value='' />
                  <option value='cozinha'>Cozinha</option>
                  <option value='garcom'>Garçom</option>
                </Select>
              </FormControl>
              <Button type='submit' fullWidth variant='contained' className={classes.submit} onClick={(event) => { event.preventDefault();
              validadePassword();}}>Criar</Button>
            </form>
          </div>
          <Copyright/>
          <Snackbar anchorOrigin={ {vertical: 'top', horizontal: 'center' }} open={openAlert} autoHideDuration={4000} onClose={handleClose}>
            <Alert className = {classes.inputAlert} onClose={handleClose} severity="error"> {messageError} </Alert>
          </Snackbar>
        </div> 
      </Container>
    </Grid>
  );
};
export default Registry;