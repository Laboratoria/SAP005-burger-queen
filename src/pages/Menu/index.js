import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import React, { useState } from 'react';

const menuHamburger = [
    {
        id: 'gary',
        name: 'Gary Goodspeed',
        thumb: '/assets/1.jpg'
    },
    {
        id: 'Game Of Burguer',
        name: 'Game Of Burguer',
        thumb: '/assets/2.jpg',
        description: 'O Game Of Burguer, com 180 gramas de carne, rúcula, tomate e geléia de pimenta caseira.'
    },
    {
        id: 'X-Chewbacca',
        name: 'X-Chewbacca',
        thumb: '/assets/3.jpg',
        description: 'O X-Chewbacca preparado com hambúrguer, queijo cheddar, cebola caramelizada.'
    },
    {
        id: 'mooncake',
        name: 'Mooncake',
        thumb: '/assets/4.jpg'
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

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(hamburgers);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        updateHamburgers(items);
    }
    return(
        <div className=''>
            <header className=''>
                <h1>Menu de Hamburgeres</h1>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId='hamburgers'> 
                        {(provided) => (
                            <ul className='hamburgers' {...provided.droppableProps} ref={provided.innerRef}>
                                {hamburgers.map(({id, name, thumb, description}, index) => {
                                    return (
                                        <Draggable key={id} draggableId={id} index={index}>
                                            {(provided) => (
                                                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <div className="hamburgers-thumb">
                                                        <img src={thumb} alt={`${name} Thumb`} />
                                                    </div>
                                                    <h3>{ name }</h3>
                                                    <p>{ description }</p>
                                                </li>
                                            )}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>
            </header>
        </div>
    );
}

export default Menu;