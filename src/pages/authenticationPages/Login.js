import React, {useState} from 'react';
import {  useHistory} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Alert from "@material-ui/lab/Alert";
import './Auth.css';

export const Login = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState({status: '', message: ''});
  const history = useHistory();
  const routerKitchen=()=>{
    history.push('/kitchen')
  }
  const routerHall=()=>{
    history.push('/Hall')
  }
  const routerRegister=()=>{
    history.push('/Register')
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://lab-api-bq.herokuapp.com/auth', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body :`email=${email}&password=${password}`
      
    })
      .then((response) => {
        if (response.status === 400) {
          setResult({status:400, message:'E-mail ou senha inválido!'});
        }
         return response.json()
      })
      .then((json) => {
        console.log(json);
        const token = json.token
        const id = json.id
        const tokenUser = localStorage.setItem("token", token)
        const idUser = localStorage.setItem("id", id)
  
        if(tokenUser!== null && idUser!== null && json.role === "garcom") {
          routerHall();
        }else if(tokenUser!== null && idUser!== null && json.role === "cozinheiro") {
          routerKitchen();
        }else{
          alert("Usuario não encontrado, verifique seu Email e Senha")
        }
      })
  };
  

  return (
    <div>
      <Container maxWidth="xs" component="main" style={{ backgroundColor: '#fff', height: '80vh', marginTop: '10vh'}}>
    <Typography component="h1" variant="h4" style={{ textAlign: 'center', fontWeight: 'bolder', color: '#ce5f18', marginLeft: '0.5rem' }}>
      Hello Burger
    </Typography>
    <Typography component="h2" variant="h5" style={{ textAlign: 'center',fontWeight: 'normal', color: 'black', marginTop: '4vh', marginBottom: '2vh', marginLeft: '0.5rem'}}>
      Bem-vindo(a)!
    </Typography>
    {result.status && (
      <Alert severity="error">{result.message}</Alert>
    )}
    <form className={classes.root} noValidate autoComplete="off">
      <TextField error={(result.status === 400 && !email)} id="outlined-basics" label="E-mail" variant="outlined" type="email" required fullWidth value={email} onChange={(event) => setEmail(event.target.value)} />
      <TextField error={(result.status === 400 && !password)} id="outlined-basicss" label="Senha" variant="outlined" type="password" required fullWidth value={password} onChange={(event) => setPassword(event.target.value)} />
      <button className="bntRegister" type="submit"  onClick={handleSubmit}>LOGIN</button>

      <button className="bntRegister" onClick={routerRegister}>CADASTRAR</button>
      </form>
 

    </Container>
    </div>
  )
};
