import { Link } from 'react-router-dom';

export const Login = () => {
    console.log('Login');
    return (
        <>
            <input type="texto"/>
            <input type="password"/>
            <button id="btn-submit">Enviar</button>
            <Link to="/register">Cadastre-se</Link>
        </>
    );
};