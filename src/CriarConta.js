import React, { useState, useEffect } from "react";

function CriarConta() {
  const [signupInfo, setSignupInfo] = useState({"restaurant":"acka burguer"});

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signupInfo)
    };

    fetch('https://lab-api-bq.herokuapp.com/users', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nome"
          onChange={(event) => setSignupInfo({ ...signupInfo, "name": event.target.value })} 
        />
         
        <input 
          type="text" 
          placeholder="E-mail"
          onChange={(event) => setSignupInfo({ ...signupInfo, "email": event.target.value })} 
        />

        <input 
          type="password" 
          placeholder="Senha"
          onChange={(event) => setSignupInfo({ ...signupInfo, "password": event.target.value })} 
        />
        
        <p>Em qual setor você trabalha?</p>
        <label>
            <input 
            type="radio"
            value="cozinha"
            name="role"
            onChange={(event) => setSignupInfo({ ...signupInfo, "role": event.target.value })} 
            />
            Cozinha
        </label>

        <label>
            <input 
            type="radio"
            value="salao"
            name="role"
            onChange={(event) => setSignupInfo({ ...signupInfo, "role": event.target.value })} 
            />
            Salão
        </label>
       

        <button 
          type="submit" 
          value="Submit"
        >
          REGISTRAR-SE
        </button>
      </form>

        <p>
            Já tem uma conta? <a href="./">Faça login!</a>
        </p>
    </div>
  );
}

export default CriarConta;
