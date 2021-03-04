import React from 'react';
import "./Hall.css";
import Header from '../../components/Header/Header.js';
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

