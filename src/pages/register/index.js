import React,{ useState } from "react";
import { useHistory } from "react-router-dom";

 const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  

  const routerLogin = () => {
    history.push("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
 
    fetch("https://lab-api-bq.herokuapp.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    
     
    },
    // body: `&email=${email}&password=${password}&role=${role}& $restaurant:Botin Burger=&name=${name}`,
    body: JSON.stringify({email,password,role,restaurant:"Botin Burger",name})
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
     
           routerLogin();
    });
  };

  return (

    <div>
      <h1>Cadastro</h1>

    <form className="login" onSubmit={handleSubmit}> 
     
      
      <label htmlFor="nome">"Nome"</label>
        <input
          className="login"
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        
        />
        <label htmlFor="email">Email</label>
        <input
          className="login"
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          
        />
        
          <label htmlFor="passowrd">Senha </label>
          <input
          className="login"
          id="password"
          type="password"
          
          value={password}
          onChange={(event) => setPassword(event.target.value)}
      
        />

        <p>Por Favor marque o seu setor:</p>
        <input type="radio" id="kitchen" name="radio" value={(role, "kitchen")}
        onClick={(e) => setRole(e.target.value)}/>
         <label htmlFor="kitchen">Kitchen</label>

        <input type="radio" id="Hall" name="radio" value={(role, "Hall")}
        onClick={(e) => setRole(e.target.value)}/>
         <label htmlFor="Hall">Hall</label>

         <button type="submit" id="button" onClick={handleSubmit}>
          Cadastrar
        </button>
       
      
  </form>
    </div>

    
  );
};
export default Register