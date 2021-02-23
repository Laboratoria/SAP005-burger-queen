
import { React, useState } from "react";
import './Hall.css'
import { useHistory } from "react-router-dom";
import { } from "react-icons/md";
import Header from '../../components/Header/Header.js';
import Button from '../../components/Button/Button.js';
import Input from '../../components/Input/Input.js';


const Hall = () => {
    const history = useHistory();

    const [client, setClient] = useState('');
    const [menu, setMenu] = useState([]);
    const [table, setTable] = useState('');

    const breakfast = () => {

    }

    const burger = () => {

    }

    const sendKitchen = () => {

    }

    return (
        <>
        <div className="hall-lab">
        <Header/>
        </div>
            <div className="hall-page">
                <div className="hall-left">
                    <div className="button-breakfast">
                        <Button onClick={(e) => { e.preventDefault(); breakfast() }}
                            children='Menu café da manhã'/>
                        
                    </div>

                    <div className="button-burger">
                        <Button onClick={(e) => { e.preventDefault(); burger() }}
                            children='Menu hamburguers'/>
                    </div>

                    <div className='pedido'>
                    </div>

                    <div className='menu'>
                        <div className='item-menu'>
                        </div>
                    </div>

                    <div className="button-send">
                    <Button onClick={(e) => { e.preventDefault(); sendKitchen() }}
                    children='Enviar Pedido'/>
                    </div>
                    {/* 
            <div className="client-name">
            <Input
                type="name"
                placeholder="Nome do cliente"
                required value={client}
                onChange={(e) => setClient(e.target.value)} />
            </div> */}
                </div>
            </div>
        </>
    );
}


export default Hall; 

