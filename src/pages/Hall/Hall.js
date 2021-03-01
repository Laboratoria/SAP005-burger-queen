import React from 'react';
import "./Hall.css";
// import { useHistory } from "react-router-dom";
// import { } from "react-icons/md";
import Header from '../../components/Header/Header.js';
// import LeftColumn from '../../components/LeftColumn/LeftColumn.js';
// import Button from '../../components/Button/Button.js';
import Menu from '../../components/Menu/Menu';
import Order from '../../components/Order/Order';




function Hall() {
    return (
        <>
            <div className="hall-page">
                <Header />
                <Menu />
                <Order />

            </div>
        </>
    );
}

export default Hall;

