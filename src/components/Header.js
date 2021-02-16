import '../style/header.css'
import React from "react";
import { useHistory } from "react-router-dom";
import logoBack from '../images/Logo-sem-nome-amarelo.png'
import logout from '../images/Ícones/sair-amarelo.png'


function Header() {
    const atendente = localStorage.getItem("atendente");
    const history = useHistory()

    const handleNavigate = (event, path) => {
        event.preventDefault()
        history.push(path)
    }
    return (
        <>
            <header>
                <img className="img-header" src={logoBack} onClick={(event) => handleNavigate(event, '/salao')}></img>
                <section className="header-input">
                    <input 
                        id="fazer-pedido"
                        type="radio"
                        name="pages"
                        value="/salao"
                        onChange={(event) => handleNavigate(event, event.target.value)}
                    ></input>
                    <label for="fazer-pedido">Fazer Pedido</label>
                    <input
                        id="lista-de-pedidos"
                        type="radio"
                        name="pages"
                        value="/lista"
                        onChange={(event) => handleNavigate(event, event.target.value)}
                    ></input>
                    <label for="lista-de-pedidos">Lista de Pedidos</label>
                    <input 
                        id="pedidos-entregues"
                        type="radio"
                        name="pages"
                        value="/entregue"
                        onChange={(event) => handleNavigate(event, event.target.value)}
                    ></input>
                    <label for="pedidos-entregues">Pedidos Entregues</label>
                </section>
                <img className="img-header" src={logout} onClick={(event) => handleNavigate(event, '/')}></img>
            </header>
            <p className="nome-atendente">Atendente: {atendente}</p>
        </>
    );
  }
  
export default Header;