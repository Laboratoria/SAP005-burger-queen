import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['button-unClicked', 'button-Clicked'];

const SIZES = ['button-medium', 'btn-large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)? buttonStyle: STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/signup' className='button-devices'>
      <button
        className={`button ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};