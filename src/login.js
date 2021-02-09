function Login() {   
    function cadBtn(e) {
      e.preventDefault();
      fetch('https://lab-api-bq.herokuapp.com/users/', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          alert('Usuário criado com sucesso');        
        })
    };
  
    return (
      <div className="App">
        <h1 className="Login">Entrar</h1>
        <form className="LoginInput">
          
          <label htmlFor="loginInputEmail">E-mail:</label>
          <input type="text" placeholder="E-mail" className="cadInput" id="loginInputEmail"></input>
  
          <label htmlFor="loginInputPassword">Senha:</label>
          <input type="text" placeholder="Senha" className="cadInput" id="loginInputPassword"></input>  
         
          <button className="btnLogin" onClick={cadBtn}>Cadastrar</button>
        </form>
      </div>
    );
  }
  
  export default Login;
  