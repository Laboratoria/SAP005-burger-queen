import { React, useState } from 'react';
import './login.css';

import { MdEmail, MdLock, MdVisibility, MdVisibilityOff } from 'react-icons/md';

const Login = () => {

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ show, setShow ] = useState(false);

	function login(event) {
		event.preventDefault();
		fetch('https://lab-api-bq.herokuapp.com/auth/', {
			method: 'POST',
			headers: {
				accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: `email=${email}&password=${password}`
		})
			.then((response) => response.json())
			.then((json) => console.log(json));
	}

	const handleClick = (e) => {
		e.preventDefault();
		setShow(!show);
	};

	return (
		<div className="login">
			<div className="login-logo">
				<img src="imgs/logotipo.png"alt="logo-app"/>
			</div>
			<div className="login-right">
				<h1>Acessa App</h1>

				<div className="loginInputEmail">
					<MdEmail />
					<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>

				<div className="loginInputPassword">
					<MdLock />
					<input
						type={show ? 'text' : 'password'}
						placeholder="Senha"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<div className="registe-eye">
						{show ? (
							<MdVisibility size={20} onClick={handleClick} />
						) : (
							<MdVisibilityOff size={20} onClick={handleClick} />
						)}
					</div>
				</div>
				<button type="submit" onClick={login}>
					Entrar
				</button>
				<h4>Não tem uma conta?</h4>
				<button type="submit">
					<a href="./register/index.js"> Cadastra-se</a>{' '}
				</button>
			</div>
		</div>
	);
};

export default Login;

