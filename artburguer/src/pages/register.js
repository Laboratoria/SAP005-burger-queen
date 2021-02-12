import { React, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ role, setRole ] = useState('');

	function logar(event) {
		event.preventDefault();
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
	}

	return (
		<div>
			<header>
				<nav>
					<Link to="/">Login</Link>
					<Link to="/register">Cadastro</Link>
					<Link to="/orders">Pedidos</Link>
				</nav>
			</header>
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
					<option value="Cozinha">Cozinha</option>
					<option value="Salão">Salão</option>
				</select>

				<div>
					<button type="submit" onClick={logar}>
						Cadastrar
					</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
