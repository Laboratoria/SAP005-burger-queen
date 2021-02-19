import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import React, { useState } from 'react';
import './index.css';

const menuHamburger = [
    {
        id: 'Word Of Burger',
        name: 'Word Of Burger',
        thumb: '/assets/1.jpg',
        description: 'O Word Of Burger, contem hambúrger, queijo, tomate, maionese e cheddar.',
        price: 23.00
    },
    {
        id: 'Game Of Burguer',
        name: 'Game Of Burguer',
        thumb: '/assets/2.jpg',
        description: 'O Game Of Burguer, contem 180 gramas de carne, rúcula, tomate e geléia de pimenta caseira.',
        price:25.60
    },
    {
        id: 'X-Chewbacca',
        name: 'X-Chewbacca',
        thumb: '/assets/3.jpg',
        description: 'O X-Chewbacca preparado com hambúrguer, queijo cheddar, cebola caramelizada.',
        price: 24.65
    },
    {
        id: 'The Legend of Burger',
        name: 'The Legend of Burger',
        thumb: '/assets/4.jpg',
        description: 'O The Legend of Burger contem hambúrger, queijo, alface, cebola e maionese',
        price: 20.00
    },
    {
        id: 'quinn',
        name: 'Quinn Ergon',
        thumb: '/assets/5.jpg'
    },
    {
        id: 'quinn',
        name: 'Quinn Ergon',
        thumb: '/assets/6.jpg'
    },
    {
        id: 'quinn',
        name: 'Quinn Ergon',
        thumb: '/assets/7.jpg'
    },
    {
        id: 'The Walking Egg',
        name: 'The Walking Egg',
        thumb: '/assets/8.jpg',
        description: 'O The Walking Egg com hambúguer, ovo, tomate, alface, cebola, bacon e molho barbecue.'
    },
    {
        id: 'Bacon Brad',
        name: 'Bacon Brad',
        thumb: '/assets/9.jpg',
        description: 'O Bacon Brad, com hambúrguer, cebola, alface, tomate, bacon e molho barbecue.'
    }
]

export const Menu = () => {
    const [hamburgers, updateHamburgers] = useState (menuHamburger);
    //const btnCard = document.getElementsByClassName('.front');
    //btnCard.addEventListener('click', clickCard);

    //const clickCard = () => {}

    return(
        <div className=''>
            <header className=''>
                <h1>Menu de Hamburgeres</h1>
                    {hamburgers.map(({id, name, thumb, description, price}, index) => {
                            return (
                                    <div className="flip-container">
                                        <div className="flipper">
                                            <div class="front">
                                                <li key={id }>
                                                    <div className="hamburgers-thumb">
                                                        <img src={thumb} alt={`${name} Thumb`} />
                                                    </div>
                                                    <h4>{ name }</h4>
                                                    <h4>R${ price }</h4>
                                                </li>
                                            </div>
                                            <div className="back">
                                                <li className="item">
                                                    <h4>{ name }</h4>
                                                    <p>{ description }</p>
                                                    <button onClick>Adicionar</button>
                                                </li>
                                            </div>  
                                        </div>
                                    </div>
                            );
                    })}
            </header>
            <main>
                <div className='requestedOrder'>
                    <div id='request'></div>
                </div>
            </main>
        </div>
    );
}

export default Menu;