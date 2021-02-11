import { Link } from 'react-router-dom';
export const Register = () => {
    return (
      <>
        <h2>Cadastre-se</h2>
        <h2>Nome</h2>
        <input type="name"/>
        <h2>Email</h2>
        <input type="email"/>
        <h2>Ocupação</h2>
        <input type="text"/>
        <h2>Senha</h2>
        <input type="password"/>
        <h2>Confirme sua senha</h2>
        <input type="password"/>
        <button id="btn-submit">Cadastrar</button>
        <Link to="/">Voltar</Link>
      </>
    );
  };


  