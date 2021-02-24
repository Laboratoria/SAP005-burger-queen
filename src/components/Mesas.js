import React from "react";
import '../style/salon.css'
import { useHistory } from "react-router-dom";
import Mesa from '../images/Ícones/mesa-laranja.png'


function Mesas({mesa}) {
    const history = useHistory()

    return (
        <>
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
        </>
    );
  }
  
export default Mesas;