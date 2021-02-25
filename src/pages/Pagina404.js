import '../style/pagina404.css'
import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Header from '../components/Header';

function Pagina404() {
    const history = useHistory()

    const handleNavigate = (event, path) => {
        event.preventDefault()
        history.push(path)
    }

    return (
        <>
            <main className="error404-container">
                <p className="error404-title">Ops!!!</p>
                <p className="error404-message">Essa página não existe!</p>
                <p className="error404-message"> Voltar para </p>
                <button className="error404-button" onClick={(event) => handleNavigate(event, "/")}>Login</button>
                <Logo />
            </main>
            <Footer />
        </>
    );
}

export default Pagina404;