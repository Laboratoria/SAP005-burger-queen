import React, { useState } from 'react';
import './App.js';
import './App.css';

const App = () => {
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
		<form>
			<div>
				<p>
					<input
						type="text"
						name="email"
						value={email}
						placeholder="E-mail *"
						onChange={(event) => setEmail(event.target.value)}
					/>
				</p>
			</div>
			<div>
				<p>
					<input
						type="password"
						name="password"
						value={password}
						placeholder="Senha *"
						onChange={(event) => setPassword(event.target.value)}
					/>
				</p>
			</div>

			<div>
				<p>
					<button type="submit" onClick={logar}>
						Logar
					</button>
				</p>
			</div>
		</form>
	);
};

export default App;
