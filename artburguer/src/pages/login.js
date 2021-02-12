import { React, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	function logar(event) {
		event.preventDefault();
		fetch('https://lab-api-bq.herokuapp.com/auth/', {
			method: 'POST',
			headers: {
				accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: `email=${email}&password=${password}`,
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

				<div>
					<button type="submit" onClick={logar}>
						Logar
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
