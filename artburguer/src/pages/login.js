import { React, useState } from 'react';
import logo from '../img/Logo.jpg';
import '../App.css';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';


const AppLogin = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
    
  function login(event) {
    let canLogin = false;
    let emailOk  = false;
    let passwordOk  = false;

    if(email.length===0){
      alert("Email está em branco!")
    }else{
      emailOk  = true;
    }

    if(password.length===0){
      alert("Password deve ser preenchido!")
    }else{
      passwordOk = true;
    }

    if (emailOk === true && passwordOk === true){
      canLogin  = true;
		}	

    if(canLogin===true){
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
  <MDBContainer>
    <MDBRow>
      <MDBCol md="12">
        <form>
          <img src={logo} className="App-logo" alt="logo" />
         
          
          <div className="grey-text">
            <MDBInput label="Email *" icon="envelope" group type="email" validate error="wrong" success="right" onChange={(event) => setEmail(event.target.value)}/>
            <MDBInput label="Senha *" icon="lock" group type="password" validate onChange={(event) => setPassword(event.target.value)}/>
          </div>

          <div className="text-center py-4 mt-3 " >
            <MDBBtn color="cyan" type="submit" onClick={login}>Efetuar login</MDBBtn>
          </div>

        </form>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  );
};
export default AppLogin;



// import React from 'react';
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
// import logo from '../img/logoburger.jpeg';
// import useForm from '../Hooks/useForm';
// // import { BrowserRouter as Router, withRouter } from "react-router-dom";

// function Login() {
// 	const email = useForm('email');
// 	const password = useForm('password');
// 	const nome = useForm();

// 	console.log(email);
// 	console.log(password);

// 	function handleSubmit(event) {
// 		event.preventDefault();
// 		if (email.validacao() && password.validacao() && nome.validacao) {
// 			console.log('enviou');
// 		} else {
// 			console.log('Não enviar');
// 		}
// 	}

// 	function logar(event) {
// 		event.preventDefault();
// 		fetch('https://lab-api-bq.herokuapp.com/auth/', {
// 			method: 'POST',
// 			headers: {
// 				accept: 'application/json',
// 				'Content-Type': 'application/x-www-form-urlencoded',
// 			},
// 			body: `email=${email}&password=${password}`,
// 		}).then((response) => response.json());
// 		// 	.then((json) => { console.log(json);
// 		// 	if(json.role === 'Salão') {
// 		// 		routerSalao();
// 		// 	}
// 		// 	if(json.role === "Cozinha") {
// 		// 		routerCozinha();
// 		// 	}
// 		// })
// 	}

// 	return (
// 		<MDBContainer>
// 			<MDBRow>
// 				<MDBCol className="form" md="12">
// 					<img src={logo} alt="logo ArtBurger" className="logo" />
// 					<form className="input" onSubmit={handleSubmit}>
// 						<MDBInput className="detalhes" label="Nome" icon="user" id="nome" type="text" {...nome} />

// 						<MDBInput
// 							className="detalhes"
// 							label="Email"
// 							icon="envelope"
// 							id="email"
// 							{...email}
// 							type="email"
// 						/>

// 						{/* <MDBInput
// 							label="Confirm your email"
// 							icon="exclamation-triangle"
// 							group
// 							type="email"
// 							validate
// 							error="wrong"
// 							success="right"
// 						/> */}
// 						<MDBInput
// 							className="detalhes"
// 							label="Sua senha"
// 							icon="lock"
// 							id="password"
// 							type="password"
// 							{...password}
// 						/>

// 						{/* <MDBInput
// 							label="Confirm Your password"
// 							icon="exclamation-triangle"
// 							group
// 							type="password"
// 							validate
// 						/> */}

// 						<div className="text-center py-4 mt-3 ">
// 							<MDBBtn color="green" type="submit" onClick={logar}>
// 								Login
// 							</MDBBtn>
// 						</div>
// 						<p className="text-center">Funcionário novo? Cadastre-se</p>
// 					</form>
// 				</MDBCol>
// 			</MDBRow>
// 			<div className="footer">
// 				<footer>
// 					<p>Projeto desenvolvido por </p>
// 				</footer>
// 			</div>
// 		</MDBContainer>
// 	);
// }

// export default Login;
