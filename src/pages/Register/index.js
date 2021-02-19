
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core'
import './Register.css';
import logo from './logo.png';


function Register() {

    const history = useHistory()

    const routerBack = () => {
        history.push('/')
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    // const [exibeMensage, setExibeMensage] = useState(false);

    function btnRegister (event) {
        event.preventDefault();
        

                    fetch('https://lab-api-bq.herokuapp.com/users/', {
                        method: 'POST',
                        headers: {
                            'accept': 'application/json',
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: `email=${email}&password=${password}&role=${role}&restaurant=NaBrazaBurger's&name=${name}`
                    })
                        .then((response) => response.json()).then((json) => {
                            window.alert(`Cadastro realizado com sucesso!!`);
                             console.log(json);
                             
                            if (json.id !== null) {
                                routerBack();
                            }
                            
                            // mensagem de confirmação
                            // usar setTimeout
                            
                        })

    }
    

    return (

        <div className="App">
            <button className="btnReturn" onClick={ routerBack}>Voltar</button>
        
            <p className="register"> <img src={logo}/></p>
            <form className="loginForm">

                <input type="text" placeholder="Nome*" value={name} id="cadName" onChange={(event) => setName(event.target.value)} />

                <input type="text" placeholder="E-mail*" value={email} id="cadEmail" onChange={(event) => setEmail(event.target.value)} />

                <input type="password" placeholder="Senha*" value={password} id="cadPassword" onChange={(event) => setPassword(event.target.value)} />

                <FormControl component="fieldset">
                    <FormLabel component="legend">Cargo*</FormLabel>
                    <RadioGroup aria-label="" name="gender1" value={role} onChange={(event) => setRole(event.target.value)}>
                        <FormControlLabel value="hall" control={<Radio />} label="Atendente" />
                        <FormControlLabel value="cook" control={<Radio />} label="Cozinheiro" />
                    </RadioGroup>
                </FormControl>

                <button className="btnRegister" onClick={btnRegister}>Acessar</button>


                <footer> © Desenvolvido por <a href="https://github.com/CamilaKikuchi" target="_blank">Camila Kikuchi</a>, <a href="https://github.com/giomadeira" target="_blank">Giovana Madeira</a>, <a href="https://github.com/julianaads" target="_blank">Juliana Souza</a></footer>


            </form>

        </div>
        

    );
}
  export default Register;