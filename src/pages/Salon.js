import '../style/salon.css'
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Mesas from '../components/Mesas';

const Salon = () => {
    const numeroDeMesas = 20;
    const mesas = [];

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
              <Mesas 
                mesa={mesa}
              />
            ))}
          </div>
        </main>
        <Footer/>
      </div>
    );
};

export default Salon;