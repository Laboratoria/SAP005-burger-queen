import React from 'react';
import '../style/salon.css'
import { useHistory } from 'react-router-dom';
import Mesa from '../images/Ícones/mesa-laranja.png'

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
        <header className="Salon-header">
        </header>

        <main>
          <p className="nome-atendente">Atendente: {atendente}</p>
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
                    });
                  }} 
                />
              </label>
          ))}
          </div>
          
        </main>
      </div>
    );
};

export default Salon;