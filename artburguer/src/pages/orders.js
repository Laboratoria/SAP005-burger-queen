import React from "react";
import { Link } from 'react-router-dom';

const Orders = () =>{
    return(
        <div>
            <header>
                <nav>
                    <Link to='/'>Login</Link>
                    <Link to='/register'>Cadastro</Link>
                    <Link to='/orders'>Pedidos</Link>
                </nav>
            </header>
            <h1>Orders</h1>
            <Link to='/orders'></Link>
        </div>
    )
    
    
};

export default Orders;