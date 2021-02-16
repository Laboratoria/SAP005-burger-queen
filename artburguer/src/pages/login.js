import { React, useState } from 'react';
import logo from '../img/Logo.jpg';
import '../App.css';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBFooter } from 'mdbreact';
import { Link } from 'react-router-dom';

const AppLogin = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	function login(event) {
		let canLogin = false;
		let emailOk = false;
		let passwordOk = false;

		if (email.length === 0) {
			alert('Email está em branco!');
		} else {
			emailOk = true;
		}

		if (password.length === 0) {
			alert('Password deve ser preenchido!');
		} else {
			passwordOk = true;
		}

		if (emailOk === true && passwordOk === true) {
			canLogin = true;
		}

		if (canLogin === true) {
			event.preventDefault();
			fetch('https://lab-api-bq.herokuapp.com/auth', {
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
	}
	return (
		<MDBRow>
			<MDBCol md="12">
				<form>
					<img src={logo} className="App-logo" alt="logo" />

					<div className="App-formInput">
						<MDBInput
							label="Email *"
							icon="envelope"
							group
							type="email"
							validate
							error="wrong"
							success="right"
							onChange={(event) => setEmail(event.target.value)}
						/>
						<MDBInput
							label="Senha *"
							icon="lock"
							group
							type="password"
							validate
							onChange={(event) => setPassword(event.target.value)}
						/>
					</div>

					<div className="text-center py-4 mt-3 ">
						<MDBBtn className="App-btn" color="orange" type="submit" onClick={login}>
							Efetuar login
						</MDBBtn>
					</div>

					<p className="App-funcionario">Funcionário novo?</p>
					<Link to='/register' className="App-funcionario">Cadastre-se</Link>
				</form>

				<div>
					<MDBContainer className="App-footerlogin">
						&copy; {new Date().getFullYear()} Projeto desenvolvido por:{' '}
						<a href="https://github.com/KarineFrontelli/"> Karine Frontelli </a> e{' '}
						<a href="https://github.com/rebecaCanesin"> Rebeca Canesin</a>
					</MDBContainer>
				</div>
			</MDBCol>
		</MDBRow>
	);
};
export default AppLogin;
