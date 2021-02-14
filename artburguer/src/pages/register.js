import { React, useState } from 'react';
import logo from '../img/Logo.jpg';
import '../App.css';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';


const App = () => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ emailConfirm, setEmailConfirm ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ passwordConfirm, setPasswordConfirm ] = useState('');
	const [ role, setRole ] = useState('');

	function cadastrar(event) {
		let canRegister = false;
		let nameOk = false;
		let emailOk = false;
		let passwordOk = false;

		if (name.length === 0) {
			alert('Nome deve conter um valor!');
		} else {
			nameOk = true;
		}

		if (email !== emailConfirm) {
			alert('Email não confere!');
		} else {
			emailOk = true;
		}

		if (password !== passwordConfirm) {
			alert('Password não estão iguais!');
		} else {
			passwordOk = true;
		}

		if (nameOk === true && emailOk === true && passwordOk === true) {
			canRegister = true;
		}

		if (canRegister === true) {
			event.preventDefault();
			fetch('https://lab-api-bq.herokuapp.com/users/', {
				method: 'POST',
				headers: {
					accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: `email=${email}&password=${password}&role=${role}&restaurant=ArtBurger&name=${name}`,
			})
				.then(function(response) {
					if (response.status === 200) {
						alert('Cadastro efetuado com sucesso!');
					}
					response.json();
				})
				.then(function(json) {
					console.log(json);
				});
		}
	}
	return (
		<MDBContainer>
			<MDBRow>
				<MDBCol md="12">
					<form>
						<img src={logo} className="App-logo" alt="logo" />
				

						<div className="grey-text">
							<MDBInput
								label="Your name"
								icon="user"
								group
								type="text"
								validate
								error="wrong"
								success="right"
								onChange={(event) => setName(event.target.value)}
							/>
							<MDBInput
								label="Your email"
								icon="envelope"
								group
								type="email"
								validate
								error="wrong"
								success="right"
								onChange={(event) => setEmail(event.target.value)}
							/>
							<MDBInput
								label="Confirm your email"
								icon="exclamation-triangle"
								group
								type="email"
								validate
								error="wrong"
								success="right"
								onChange={(event) => setEmailConfirm(event.target.value)}
							/>
							<MDBInput
								label="Your password"
								icon="lock"
								group
								type="password"
								validate
								onChange={(event) => setPassword(event.target.value)}
							/>
							<MDBInput
								label="Confirm Your password"
								icon="exclamation-triangle"
								group
								type="password"
								validate
								onChange={(event) => setPasswordConfirm(event.target.value)}
							/>
						</div>

						<div className="text-center py-4 mt-3">
							<MDBBtn color="amber" onClick={(event) => setRole('Cozinha')}>
								Cozinha
							</MDBBtn>
							<MDBBtn color="amber" onClick={(event) => setRole('Salão')}>
								Salão
							</MDBBtn>
						</div>

						<div className="text-center py-4 mt-3 ">
							<MDBBtn color="cyan" type="submit" onClick={cadastrar}>
								Register
							</MDBBtn>
						</div>
					</form>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};
export default App;

// import { React, useState, Component } from 'react';
//  import { Link } from 'react-router-dom';
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
// import logo from '../img/Logo.jpg';
// import '../App.css';

// const Register = () => {
// 	const [ name, setName ] = useState('');
// 	const [ email, setEmail ] = useState('');
// 	const [ password, setPassword ] = useState('');
// 	const [ role, setRole ] = useState('');

// 	function logar(event) {
// 		event.preventDefault();
// 		fetch('https://lab-api-bq.herokuapp.com/users/', {
// 			method: 'POST',
// 			headers: {
// 				accept: 'application/json',
// 				'Content-Type': 'application/x-www-form-urlencoded',
// 			},
// 			body: `email=${email}&password=${password}&role=${role}&restaurant=ArtBurger&name=${name}`,
// 		})
// 			.then((response) => response.json())
// 			.then((json) => console.log(json));
// 	}
// 	return (
// 		<MDBContainer>
// 			<MDBRow className="form">
// 				<MDBCol md="12">
// 					<img src={logo} alt="logo ArtBurger" className="logo" />
// 					<form>
// 						<p className="h4 text-center" color="cyan" />
// 						<div className="grey-text">
// 							<MDBInput
// 								className="detalhes"
// 								label="Seu nome"
// 								icon="user"
// 								group
// 								type="text"
// 								validate
// 								error="wrong"
// 								success="right"
// 								onChange={(event) => setName(event.target.value)}
// 							/>
// 							<MDBInput
// 								className="detalhes"
// 								label="Seu email"
// 								icon="envelope"
// 								group
// 								type="email"
// 								validate
// 								error="wrong"
// 								success="right"
// 								onChange={(event) => setEmail(event.target.value)}
// 							/>
// 							{/* <MDBInput
// 								label="Confirme Seu email"
// 								icon="exclamation-triangle"
// 								group
// 								type="email"
// 								validate
// 								error="wrong"
// 								success="right"
// 							/> */}
// 							<MDBInput
// 								className="detalhes"
// 								label="Senha"
// 								icon="lock"
// 								group
// 								type="password"
// 								validate
// 								onChange={(event) => setPassword(event.target.value)}
// 							/>
// 							{/* <MDBInput
// 								label="Confirme sua senha"
// 								icon="exclamation-triangle"
// 								group
// 								type="password"
// 								validate
// 							/> */}
// 						</div>
// 						<p className="text-center">Qual sua aréa de atuação?</p>
// 						<div className="text-center py-4 mt-3">
// 							<MDBBtn
// 								color="blue"
// 								value={role}
// 								onClick={(event) => setRole(event.target.value)}
// 								value="Cozinha"
// 							>
// 								Cozinha
// 							</MDBBtn>

// 							<MDBBtn
// 								color="blue"
// 								value={role}
// 								onClick={(event) => setRole(event.target.value)}
// 								value="Salão"
// 							>
// 								Salão
// 							</MDBBtn>
// 						</div>

// 						<div className="text-center py-4 mt-3 ">
// 							<MDBBtn color="green" type="submit" onClick={logar}>
// 								Cadastrar
// 							</MDBBtn>
// 						</div>
// 					</form>
// 				</MDBCol>
// 			</MDBRow>
// 		</MDBContainer>
// 	);
// };

// // <div>
// // 	<header>
// // 		<nav>
// // 			<Link to="/">Login</Link>
// // 			<Link to="/register">Cadastro</Link>
// // 			<Link to="/orders">Pedidos</Link>

// export default Register;
