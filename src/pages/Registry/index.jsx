import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Button, Container, TextField, InputLabel,FormControl, Select, Icon  } from '@material-ui/core';
import {Copyright, CreatSign, Logo, useStyles} from '../../components.js';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Registry() {
  const classes = useStyles();

  const [emailCadastro, inEmail] = useState('');
  const [passwordCadastro, inPassword] = useState('');
  const [passwordConfirm, inConfirm] = useState('');
  const [setorCadastro, inSetor] = useState('');

  function validadePassword(){
    const password1 = passwordCadastro;
    const password2 = passwordConfirm;
   
    if (password1 === password2)
      fetchRegistry();
    else {
      alert("As senha não são iguais. \nTente novamente!")
    }   
  }

  const urlCreate = `email=${emailCadastro}&password=${passwordCadastro}&role=${setorCadastro}&restaurant=RatatouilleBurger`;
  const history = useHistory();
  
  //curl -X POST "https://lab-api-bq.herokuapp.com/users" -H  "accept: application/json" -H  "Content-Type: application/x-www-form-urlencoded" -d "email=caroline%40carol.com&password=1234567&role=Cozinha&restaurant=Ratatouille"
  
  const routerHall = () => {
    history.push('/Hall')
  }

  const routerKitchen = () => {
    history.push('/Kitchen')
  }

  const fetchRegistry = () => {
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
          <CreatSign/>

          <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email"
          name="email"
          autoComplete="username"  
          value={emailCadastro} onChange={(event) => inEmail(event.target.value)}/>

          <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Senha"
          type="password"
          id="password"
          autoComplete="current-password"
          value={passwordCadastro} onChange={(event) => inPassword(event.target.value)}/>

          <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Confirme a senha"
          type="password"
          id="password"
          autoComplete="current-password"
          value={passwordConfirm} onChange={event => inConfirm(event.target.value)}/>

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel >Cargo</InputLabel>
            <Select
            native
            value={setorCadastro}
            onChange={(event) => inSetor(event.target.value)}
            label="Cargo">
              <option aria-label="None" value="" />
              <option value='garçom'>Cozinha</option>
              <option value='cozinha'>Garçom</option>
            </Select>
          </FormControl>
          <Button type="submit" fullWidth variant="contained" className={classes.submit} onClick={(event) => { event.preventDefault();
          validadePassword();}}>Criar</Button>
        </form>
        <p>
          <Link to="/"><ArrowBackIosIcon className={classes.arrow} color="disabled" fontSize="large"/> </Link>
        </p>
      </div>
    <Copyright/>
    </Container>
  );
}
export default Registry;