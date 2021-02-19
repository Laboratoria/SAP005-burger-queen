import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Button, Container, TextField, InputLabel,FormControl, Select, Typography } from '@material-ui/core';
import {Copyright, Logo, useStyles} from '../../components.js';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Registry() {
  const classes = useStyles();
  const history = useHistory();

  const [emailRegistry, inEmail] = useState('');
  const [passwordRegistry, inPassword] = useState('');
  const [passwordConfirm, inConfirm] = useState('');
  const [sectorRegistry, inSector] = useState('');
  const urlCreate = `email=${emailRegistry}&password=${passwordRegistry}&role=${sectorRegistry}&restaurant=RatatouilleBurger`;

  const routerHall = () => {
    history.push('/Hall')
  }

  const routerKitchen = () => {
    history.push('/Kitchen')
  }
  
  function validadePassword(){
    const password1 = passwordRegistry;
    const password2 = passwordConfirm;
   
    if (password1 === password2)
      handleRegistry();
    else {
      const errorPassword = 'As senha não são iguais. \nTente novamente!'
    }   
  }

  const handleRegistry = () => {
    
    fetch('https://lab-api-bq.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: urlCreate
    })
      .then((response) => response.json())
      .then((json) => {
        
        console.log(json)
        localStorage.setItem('token',json.token)

        if(json.role === 'garcom'){
          routerHall();
        }
        else if(json.role === 'cozinha'){
          routerKitchen();
        }
        else{
         const errorMessage =  json.message
        }
      })
  }
  
  return (
    <Container className='container'>
      <div className={classes.paper}>
        <Link to='/'><ArrowBackIosIcon className={classes.arrow} color='disabled' fontSize='large'/> </Link>
        <Logo/>
        <form className={classes.form}>
        <Typography  component='h1' variant='h5'> Cadastre-se </Typography>
          <TextField variant='outlined' margin='normal' required fullWidth label='Email' name='email'
          autoComplete='username' value={emailRegistry} onChange={(event) => inEmail(event.target.value)}/>

          <TextField variant='outlined' margin='normal' required fullWidth name='password' label='Senha' type='password' id='password'
          autoComplete='current-password' value={passwordRegistry} onChange={(event) => inPassword(event.target.value)}/>

          <TextField variant='outlined' margin='normal' required fullWidth name='password' label='Confirme a senha' type="password" id='password'
          autoComplete='current-password' value={passwordConfirm} onChange={event => inConfirm(event.target.value)}/>

          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel >Cargo</InputLabel>
            <Select native value={sectorRegistry} onChange={(event) => inSector(event.target.value)} label='Cargo'>
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
    </Container>
  );
}
export default Registry;