import React,{useState}  from 'react';
import '../App.css';
import './LoginForm.css';
import  {yupResolver}  from '@hookform/resolvers/yup';
import schema from './ValidationLogin';
import {useForm} from 'react-hook-form';
import Logo from './Logo';
import {useHistory} from 'react-router-dom'
//import {Button} from './Button';


function LoginForm() {
    const history = useHistory()

    const routerHall=()=>{
    history.push('/hall')
    }
    const routerKitchen=()=>{
    history.push('/kitchen')
    }

        const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema)
    });

    //const onSubmit = ({email, password}) => {
    //console.log(`Email: ${email}, password: ${password}`);
    //alert('Sucesso, nenem');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const data = {
        "email": email,
        "password": password,
        "role": role,
        "restaurant": 'subsolo'
        };
    

    return (
        <div className='loginForm-container'>
            <div className='loginForm-content-wrapper'>
            <section className='loginForm-content-logo'>
                    <Logo />
            <form className='loginForm-content-form' >
                <label htmlFor='email'>Email</label>
                <input 
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    type='text'
                    id='email' 
                    name='email' 
                    ref={register}
                />
                {errors.email?.message}<br />
                <label htmlFor='password'>Senha</label>
                <input 
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    type='password' 
                    id='password'
                    name='password' 
                    ref={register} 
                />
                <select 
                    onChange={(event) => setRole(event.target.value)}
                    value={role}
                    name='role' 
                    ref={register}
                >
                    <option value=''>Cargo</option>
                    <option value='kitchen'>Cozinha</option>
                    <option value='hall'>Salão</option>
                </select>
                {errors.password?.message}<br />
                <input type='submit' onClick={(e) =>{
                    e.preventDefault()
                    fetch('https://lab-api-bq.herokuapp.com/users', {
                    method: 'POST', // or 'PUT'
                    headers:{
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'accept': 'application/json'
                        },
                    body: `email=${email}&password=${password}&role=${role}&restaurant=subsolo`
                    })
                    .then(response => response.json())
                    .then(json => {
                    console.log('Success:', json)
                    const token = json.token    
                    const tokenUser = localStorage.setItem("token", token)
                    if(tokenUser!== null && json.role === "hall") {
                    routerHall()
                    }
                    if(tokenUser!== null && json.role === "kitchen") {
                    routerKitchen()
                    }
                    })
                    console.log(password)
                    console.log(email)
                }}/>
                {/*<Button type='submit' buttonStyle='button-unClicked'>Entrar</Button>*/}
            </form>
            </section>
            </div>
        </div>

    );
}
    export default LoginForm;