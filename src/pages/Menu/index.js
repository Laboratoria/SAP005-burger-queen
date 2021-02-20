import React, { useState } from 'react';
import './index.css';

export const Menu = () => {
    const [hamburgers, updateData] = useState ([]);

    let token = localStorage.getItem('token');
    console.log(token);

        const myHeader = new Headers();
        myHeader.append('Authorization', token);
        
        fetch('https://lab-api-bq.herokuapp.com/products', {
            method: 'GET',
            headers: myHeader,
            body: JSON.stringify()
        })
        .then(response => response.json())
        .then((response) => {
            updateData(response);
        }, [])
        .then(response => console.log(response))
        .catch(error => console.log('error', error));

    
    return(
        <div>
            <h1>Menu</h1>
            {hamburgers.map(({id, name, price, image}) => {
                return(
                    <div className='container'>
                        <div className='card'>
                            <div class="card-container">
                                <li key={id }>
                                    <div className="hamburgers-thumb">
                                        <img src={image} alt={`${name} Thumb`} />
                                    </div>
                                    <p>{ name }</p>
                                    <p>R${ price }</p>
                                    <button id='submitItem'>Adicionar</button>
                                </li>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Menu;