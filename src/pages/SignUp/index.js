import { Link } from 'react-router-dom';
import '../../Styles/Cadastro.css';
import Header from '../../components/HeaderLogin/index.js';
import Footer from '../../components/Footer/index.js';


function Cadastro() {
  return (
    <div className="page-cadastro">

      <Header/>

      <form className="form-cadastro">
        <label>
          Nome:
          <input type="text" name='nome' className='input-text'/>
        </label>

        <label>
          E-mail:
          <input type="text" name='email' className='input-text' />
        </label>

        <label>
          Senha:
          <input type="password" name='senha' className='input-text' />
        </label>

        <section className='option-setor'>
        <p className='setor'>Setor:</p>
          <label>
            <input type="radio" value="cozinha" name="role" className='input-radio'/>
            Cozinha
          </label>

          <label>
            <input type="radio" value="salão" name="role" className='input-radio' />
            Salão
          </label>
        </section>

        <label>
          Restaurante:
          <input type="text" name='nomeRestaurante' className='input-text'/>
        </label>

        <button type='submit' value='enviar' className='btn-cadastrar'><Link to='/'>CADASTRAR</Link></button>
      </form>

      <Footer/>
      
    </div>
  );
}

export default Cadastro;
