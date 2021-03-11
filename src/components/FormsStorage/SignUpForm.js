import React,{useState}  from 'react';
import '../../../src/App.css';
import {FormsContainer} from '../FormsStorage/FormsContainer';
import {Forms} from '../FormsStorage/Forms';
import {Inputs} from '../FormsStorage/Inputs';
import {FormsButton} from '../FormsStorage/FormsButtons';
//import './SignUpForm.css';
import {yupResolver}  from '@hookform/resolvers/yup';
import schema from '../ValidationStorage/ValidationSingUp';
import { useForm } from 'react-hook-form';
import Logo from '../LogoStorage/Logo';
import {useHistory} from 'react-router-dom'



export const SignUpForm= ()=> {
    const {register, handleSubmit, errors} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });
    const [nome, setName] = useState('');
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

    const onSubmit = ()=>{
        alert('Sucesso, nenem');
    }
    
    const data=()=>{
        fetch('https://lab-api-bq.herokuapp.com/users', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'accept': 'application/json'
                    },
            body: `email=${email}&password=${password}&role=${role}&restaurant=subsolo&name=${nome}`
            })
            .then((response) => response.json())
            .then((json)=> {
            const token = json.token    
            const tokenUser = localStorage.setItem("token", token)
            if(tokenUser!== null && json.role === "hall") {
                routerHall()
            }
            if(tokenUser!== null && json.role === "kitchen") {
                routerKitchen()
                }
            })
    }
    return(
        <FormsContainer>
            <Logo/>
            <Forms onSubmit={handleSubmit(onSubmit)}>
                <Inputs
                    onChange={(event) => setName(event.target.value)}
                    value={nome}
                    type='text'
                    id='name' 
                    name='name' 
                    ref={register}
                    label='Name'
                    helperText={errors.name?.message}
                />
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
                <FormsButton onClick={()=>{data();}}>Cadastrar</FormsButton>
            </Forms>
        </FormsContainer>
    );
};

/*function SignUpForm() {
    const history = useHistory()

    const routerHall=()=>{
    history.push('/hall')
  }
  const routerKitchen=()=>{
    history.push('/kitchen')
  }

    const {register, handleSubmit, errors, clearErrors} = useForm({
        resolver: yupResolver(schema)
    });

    //const onSubmit = ({nome, surname, email, password, passwordconfirm}) => {
        //console.log(`Name: ${nome}, Surname: ${surname}, email: ${email},
        //password: ${password}, password confirmed as: ${passwordconfirm}`);
        //alert('Sucesso, nenem');

        const [nome, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [role, setRole] = useState('');

        const data = {
            "email": email,
            "password": password,
            "role": role,
            "restaurant": 'subsolo',
            "name": nome
            };


    return (
        <div className='signUpForm-container'>
            <div className='signUpForm-content-wrapper'>
                <section className='signUpForm-content-logo'>
                    <Logo />
            <form className='signUpForm-content-form' >
                <label htmlFor='nome'>Nome</label>
                <input
                    onChange={(event) => setName(event.target.value)}
                    value={nome}
                    type='text'
                    id='nome' 
                    name='nome' 
                    ref={register}
                />
                {errors.nome?.message}<br />
                <label htmlFor='surname'>Sobrenome</label>
                <input 
                    type='text'
                    id='surname' 
                    name='surname' 
                    ref={register}
                />
                {errors.surname?.message}<br />
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
                <label htmlFor='passwordconfirm'>Confirme a senha</label>
                <input 
                    type='passwordconfirm' 
                    id='passwordconfirm'
                    name='passwordconfirm' 
                    ref={register} 
                />
                <label htmlFor='category'>Local</label>
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
                <input type='submit'  onClick={(e) =>{
                    e.preventDefault()
                    fetch('https://lab-api-bq.herokuapp.com/users', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'accept': 'application/json'
                    },
                    body: `email=${email}&password=${password}&role=${role}&restaurant=subsolo&name=${nome}`
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
                    console.log(nome)
                    console.log(password)
                    console.log(email)
                    console.log(role)
                    }}/>
                <button type="button" onClick={() => clearErrors()}>Limpar erros</button>
                {errors.passwordconfirm?.message}<br />
            </form>
            </section>
        </div>
    </div>
    );
}
    export default SignUpForm; */