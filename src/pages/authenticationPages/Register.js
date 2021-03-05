import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import Alert from "@material-ui/lab/Alert";
import TextField from '@material-ui/core/TextField';
import { Box, Typography, Link } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { makeStyles, Theme, createStyles  } from '@material-ui/core/styles';
import { StandardButton } from '../../components/StandardButton/CustomButtons';
import salon from '../../components/Logos/img/clerk.png';
import kitchen from '../../components/Logos/img/cooking.png';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import '../../index.css';



export const Register = () => {
  const useStyles = makeStyles((theme) => ({
    Register: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },

        },

          radioLabel: {
          fontWeight: 'bold',
          marginInlineEnd: '15px',
          marginInlineStart: '40px',
          color: '#2976a0',
          fontSize: '18px',

        }


  }));
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState({ status: '', message: '' });
  const [role, setRole] = useState('');
  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://lab-api-bq.herokuapp.com/users/', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `email=${email}&password=${password}&role=${role}&restaurant=HelloBurguer&name=${name}`
    })
      .then((response) => {
        if (response.status === 200) {
          setName('');
          setEmail('');
          setPassword('');
          setRole('');
          <Alert severity="success">This is a success alert — check it out!</Alert>
          history.push('/login');
        } else if (response.status === 403) {
          setResult({ status: 403, message: 'E-mail já cadastrado, por gentileza insira outro' });
        } else {
          setResult({ status: 400, message: 'Caro Funcionário, preencher todos os campos obrigatórios *' });
        }
      })
      .catch(() => {
        alert('Algo deu errado. Caro funcionário, tente novamente.');
      })
  }
  return (

    <Container maxWidth="xs" component="main" style={{ backgroundColor: '#fff', height: '80vh', marginTop: '10vh' }}>
      <Link href="/Login"><svg className="MuiSvgIcon-root makeStyles-arrow-14 MuiSvgIcon-colorDisabled MuiSvgIcon-fontSizeLarge" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path></svg> </Link>

      <Typography component="h1" variant="h4" style={{ textAlign: 'center', marginBottom: '4vh', textfontWeight: 'bolder', color: '#ce5f18', marginLeft: '0.5rem' }}>
        Hello Burger
    </Typography>

      {result.status && (<Alert severity="error">{result.message}</Alert>)}
      <form className={classes.Register} noValidate autoComplete="off">
        <TextField error={(result.status === 400 && !name)} id="outlined-basic" label="Funcionário: Nome e Sobrenome" variant="outlined" type="text" required fullWidth value={name} onChange={(event) => setName(event.target.value)} />
        <TextField error={result.status === 403 || (result.status === 400 && !email)} className="cadLabel" id="outlined-basics" label="E-mail" variant="outlined" type="email" required fullWidth value={email} onChange={(event) => setEmail(event.target.value)} />
        <TextField error={(result.status === 400 && !password)} id="outlined-basicss" className="cadLabel" label="Password" variant="outlined" type="password" required fullWidth value={password} onChange={(event) => setPassword(event.target.value)} />
        <Box component="div">
          <Typography component="h1" variant="h5" style={{ textAlign: 'left', marginBottom: '4vh', textfontWeight: 'bolder', color: '#ce5f18', marginLeft: '0.5rem' }}>
            Cargo do Funcionário:
          </Typography>
          <Box style={{ textAlign: 'center' }} name="ordenar" error={(result.status === 400 && !role)} className="" value={role} onChange={(event) => setRole(event.target.value)}>
            <label htmlfor="kitchen" className={classes.radioLabel}><img src={kitchen} alt="" className="icon-kitchen" /><br />Cozinha</label>
            <input required="" name="jobPosition" className="cadInputOption" id="kitchen" type="radio" value="cozinheiro" />
            <label htmlfor="hall" className={classes.radioLabel}><img src={salon} alt="" className="icon-salon" /><br />Salão</label>
            <input required="" name="jobPosition" className="cadInputOption" id="hall" type="radio" value="garcom" />
         
          </Box>
        </Box>

        <StandardButton onClick={(event) => handleSubmit(event)} content="Criar e Logar" />
      </form>
    </Container>


  )
};
