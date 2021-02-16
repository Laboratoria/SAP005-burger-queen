import '../style/salon.css'
import React from 'react';
import { useHistory } from 'react-router-dom';
import Mesa from '../images/Ícones/mesa-laranja.png'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Salon = () => {
    let history = useHistory();
    const numeroDeMesas = 20;
    const mesas = [];
    const atendente = localStorage.getItem("atendente");

    for(let i = 0; i < numeroDeMesas; i++) {
      mesas.push(`${[i+1]}`)
    }

    return (
      <div className="Salon">
        <Header/>
        <main>
          <p className="buttons-header">Escolha a mesa para qual deseja fazer o pedido:</p>

          <div className="mesas">
            {mesas.map((mesa) => (
              <label key={mesa} className="buttons-todas-mesas">
                <img key={`img ${mesa}`} className="mesa-img" alt="imagem-mesa" src={Mesa} />
                <input 
                  type="button"
                  value={`Mesa ${mesa}`}
                  key={`button ${mesa}`}
                  className="button-mesa"
                  onClick={(event) => {
                    history.push({
                      pathname: `/pedidos/${mesa}`,
                      mesa: event.target.value
                    });
                  }} 
                />
              </label>
          ))}
          </div>
          
        </main>
        <Footer/>
      </div>
    );
};

export default Salon;