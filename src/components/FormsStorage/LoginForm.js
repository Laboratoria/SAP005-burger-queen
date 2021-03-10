import React,{useState}  from 'react';
import '../../../src/App.css';
import {FormsContainer} from '../FormsStorage/FormsContainer';
import {Forms} from '../FormsStorage/Forms';
import {Inputs} from '../FormsStorage/Inputs';
import {FormsButton} from '../FormsStorage/FormsButtons';
//import './LoginForm.css';
import  {yupResolver}  from '@hookform/resolvers/yup';
import  schema from '../ValidationStorage/ValidationLogin';
import {useForm} from 'react-hook-form';
import Logo from '../LogoStorage/Logo';
import {useHistory} from 'react-router-dom';
import KitchenIcon from '@material-ui/icons/Kitchen';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from  '@material-ui/core/FormLabel'
import Checkbox from '@material-ui/core/Checkbox';
//import {Button} from './Button';


export const LoginForm=()=> {
    const {register, handleSubmit, errors} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const history = useHistory();
    const routerHall=()=>{
        history.push('/hall')
    }
    const routerKitchen=()=>{
        history.push('/kitchen')
    }

    const onSubmit=()=>{
        alert('sucesso, baby')
    }
    const data=()=>{
        fetch('https://lab-api-bq.herokuapp.com/auth', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'accept': 'application/json'
                },
            body: `email=${email}&password=${password}&role=${role}`
            })
            .then((response) => response.json())
            .then((json)=> {
            const token = json.token    
            const tokenUser = localStorage.setItem("token", token)
            if(tokenUser!== null && json.role === "hall") {
                    routerHall()
                    console.log(token)
                }
            if(tokenUser!== null && json.role=== "kitchen") {
                    routerKitchen()
                }
            })
        }
        return(
            <FormsContainer>
                <Logo/>
                <Forms onSubmit={handleSubmit(onSubmit)}>
                    <Inputs
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                        type='text'
                        id='email' 
                        name='email' 
                        ref={register}
                        label='Email'
                        helperText={errors.email?.message}
                    />
                    <Inputs
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                        type='password' 
                        id='password'
                        name='password' 
                        ref={register}
                        label='Senha'
                        helperText={errors.password?.message}
                    />
                <FormLabel 
                component="legend"
                onChange={(event) => setRole(event.target.value)}
                value={role}
                name='role' 
                ref={register}
                >
                    Local
                </FormLabel>
                <FormControlLabel
                    control={<Checkbox icon={<KitchenIcon/>} 
                    checkedIcon={<KitchenIcon />} name="checkedH" />}
                    label="Cozinha"
                    value='kitchen'
                    color='secondary'
                />
                <FormControlLabel
                    control={<Checkbox icon={<RestaurantIcon/>} 
                    checkedIcon={<RestaurantIcon />} name="checkedH" />}
                    label="Salão"
                    value='hall'
                    color='secondary'
                />
                <FormsButton onClick={()=>{data()}}>Logar</FormsButton>
            </Forms>
        </FormsContainer>
    );
};



    /*function LoginForm() {
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
                <Button type='submit' buttonStyle='button-unClicked'>Entrar</Button>
                </form>
                </section>
                </div>
            </div>
    
        );
    }
        export default LoginForm; */