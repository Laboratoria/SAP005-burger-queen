import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './Hall.css';

import Cardapio from '../../components/Cardapio'

function Hall(){
    const history = useHistory()
    const routerBack = () => {
        history.push('/')
    }

    const logout = () => {
        const token  = localStorage.getItem("token");
        localStorage.clear()
        routerBack()
    }

    const [cafe, setCafe] = useState('');
    const [menu, setMenu] = useState('');
    const token  = localStorage.getItem("token");

    useEffect (() => {
        fetch('https://lab-api-bq.herokuapp.com/products/', {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization':`${token}`
            },
        })
            .then((response) => response.json()).then((json) => {
                const breakfast = json.filter(item => item.type === 'breakfast')
                const allDay = json.filter(item => item.type === 'all-day')
                setCafe(breakfast)
                setMenu(allDay)
                
                console.log(json);
            })
    }, []);
    
  
    
    return(
        <div className="App">
             <button className="btnExit" onClick={logout}>Logout</button>

            <div className="cafe">
                <h1>Café da Manhã</h1>
            <Cardapio className="container-cafe" title="" array={cafe} />
            </div>

            <div className="allDay">
                <h1>Almoço e Jantar</h1>
            <Cardapio className="container-allDay" title="" array={menu} />
            </div>
        </div>    
    );
};
 export default Hall;