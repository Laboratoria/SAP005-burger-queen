
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

const Login = () => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ role, setRole ] = useState('');

	useEffect(() => {
		fetch('https://lab-api-bq.herokuapp.com/users/', {
			method: 'POST',
			headers: {
				accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: `email=${email}&password=${password}&role=${role}&restaurant=ArtBurger&name=${name}`,
		})
			.then((response) => response.json())
			.then((json) => console.log(json));
	});
	const handleLog = (event) => {
		event.preventDefault();
	};

	return (
		<form>
			<div>
				<input
					type="text"
					name="name"
					value={name}
					placeholder="Nome *"
					onChange={(event) => setName(event.target.value)}
				/>
			</div>
			<div>
				<input
					type="text"
					name="email"
					value={email}
					placeholder="E-mail *"
					onChange={(event) => setEmail(event.target.value)}
				/>
			</div>
			<div>
				<input
					type="password"
					name="password"
					value={password}
					placeholder="Senha *"
					onChange={(event) => setPassword(event.target.value)}
				/>
			</div>

			<select value={role} onChange={(event) => setRole(event.target.value)}>
				<option>Função</option>
				<option value="role">Cozinha</option>
				<option value="role">Salão</option>
			</select>

			<div>
				<button type="submit" onClick={(event) => handleLog(event)}>
					Cadastrar
				</button>
			</div>
		</form>
	);
};

export default Login;