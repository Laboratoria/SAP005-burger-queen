import React,{useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './Hall.css';



function Hall(){
    const history = useHistory()
    const routerBack = () => {
        history.push('/')
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
             <button className="btnExit" onClick={ routerBack}>Sair</button>

             <div className="container-allDay">
          {
              menu && menu.map((item) => (
                  <div className="containerMenu">
                  <h1 className="divName">{item.name}</h1>,
                  <h1 className="divPrice">R${item.price},00</h1>
                 </div>
                  
              ))
          }
          </div>

          <div className="container-cafe">
          {
              cafe && cafe.map((item) => (
                  <div className="containerMenu">
                  <h1 className="divName">{item.name}</h1>,
                  <h1 className="divPrice">R${item.price},00</h1>
                 </div>
                  
              ))
          }
          </div>
          
          
        </div>    
    );
};
 export default Hall;