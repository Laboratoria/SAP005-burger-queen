import { React, useState } from 'react';

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import logo from '../Logo.jpg';
// import { BrowserRouter as Router, withRouter } from "react-router-dom";

function Login() {
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
		}).then((response) => response.json());
		// 	.then((json) => { console.log(json);
		// 	if(json.role === 'Salão') {
		// 		routerSalao();
		// 	}
		// 	if(json.role === "Cozinha") {
		// 		routerCozinha();
		// 	}
		// })
	}

	return (
		<MDBContainer>
			<MDBRow>
				<MDBCol md="10">
					<img src={logo} alt="logo.jpg" />
					<form className="form-login">
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
							label="Confirm your email"
							icon="exclamation-triangle"
							group
							type="email"
							validate
							error="wrong"
							success="right"
						/> */}
						<MDBInput
							label="Your password"
							icon="lock"
							group
							type="password"
							validate
							onChange={(event) => setPassword(event.target.value)}
						/>
						{/* <MDBInput
							label="Confirm Your password"
							icon="exclamation-triangle"
							group
							type="password"
							validate
						/> */}

						<div className="text-center py-4 mt-3 ">
							<MDBBtn color="cyan" type="submit" onClick={logar}>
								Login
							</MDBBtn>
						</div>
					</form>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
}

export default Login;
