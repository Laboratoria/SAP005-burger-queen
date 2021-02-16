import React from 'react';
import { useHistory } from 'react-router-dom'
import './Confirm.css';
import Footer from '../../components/Footer/Footer';

function Confirm() {

  const history = useHistory()

  const routerConfirm = () => {
    history.push('/Login')
  }

  return (
    <>
    <div className="Confirm">
      <div className="logo">
      <img src="img/logo1.png" alt="logo-app" />
      </div>
      <h1 className="Confirm-sucess"> Cadastro realizado com sucesso!</h1>
      <button className="Confirm-btn" onClick={routerConfirm}>Login</button>
    </div>
    <Footer />
    </>
  );
}

export default Confirm;