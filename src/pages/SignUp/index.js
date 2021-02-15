import React from 'react';
import Header from '../../components/HeaderLogin/index.js';
import Footer from '../../components/Footer/index.js';
import FormCadastro from '../../components/FormCadastro/index.js';
import '../../Styles/SignUp.css';

function Cadastro() {
  return (
    <div className="page-cadastro">
      <Header />
      <FormCadastro />
      <Footer/>
    </div>
  );
}

export default Cadastro;