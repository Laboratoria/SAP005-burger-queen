import { React, useState, Component } from 'react';
// import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

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
		<MDBContainer>
			<MDBRow>
				<MDBCol md="12">
					<form>
						<p className="h4 text-center" color="cyan">
							ArtBurger
						</p>
						<div className="grey-text">
							<MDBInput
								label="Seu nome"
								icon="user"
								group
								type="text"
								validate
								error="wrong"
								success="right"
								onChange={(event) => setName(event.target.value)}
							/>
							<MDBInput
								label="Seu email"
								icon="envelope"
								group
								type="email"
								validate
								error="wrong"
								success="right"
								onChange={(event) => setEmail(event.target.value)}
							/>
							{/* <MDBInput
								label="Confirme Seu email"
								icon="exclamation-triangle"
								group
								type="email"
								validate
								error="wrong"
								success="right"
							/> */}
							<MDBInput
								label="Senha"
								icon="lock"
								group
								type="password"
								validate
								onChange={(event) => setPassword(event.target.value)}
							/>
							{/* <MDBInput
								label="Confirme sua senha"
								icon="exclamation-triangle"
								group
								type="password"
								validate
							/> */}
						</div>

						<div className="text-center py-4 mt-3">
							<MDBBtn
								color="amber"
								value={role}
								onClick={(event) => setRole(event.target.value)}
								value="Cozinha"
							>
								Cozinha
							</MDBBtn>
							<MDBBtn
								color="amber"
								value={role}
								onClick={(event) => setRole(event.target.value)}
								value="Salão"
							>
								Salão
							</MDBBtn>
						</div>

						<div className="text-center py-4 mt-3 ">
							<MDBBtn color="cyan" type="submit" onClick={logar}>
								Cadastrar
							</MDBBtn>
						</div>
					</form>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};

// <div>
// 	<header>
// 		<nav>
// 			<Link to="/">Login</Link>
// 			<Link to="/register">Cadastro</Link>
// 			<Link to="/orders">Pedidos</Link>

export default Register;
