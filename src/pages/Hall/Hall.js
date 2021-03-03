import React from 'react';
import "./Hall.css";
// import { useHistory } from "react-router-dom";
// import { } from "react-icons/md";
import Header from '../../components/Header/Header.js';
// import LeftColumn from '../../components/LeftColumn/LeftColumn.js';
// import Button from '../../components/Button/Button.js';
import Menu from '../../components/Menu/Menu';


function Hall() {
    return (
        <>
            <div className="hall-page">
                <Header />
                <Menu />

            </div>
        </>
    );
}

export default Hall;

