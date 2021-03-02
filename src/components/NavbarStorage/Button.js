import React from 'react';
import '../NavbarStorage/Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['button-unClicked', 'button-Clicked'];


export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)? buttonStyle: STYLES[0];

    return (
        <Link to='/signup' className='button-devices'>
            <button
            className={`button ${checkButtonStyle}`} 
            onClick={onClick}
            type={type}
            >
            {children}
            </button>
        </Link>
        );
    };

