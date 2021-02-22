import React from 'react';

const Button = (props) => {
    return (
    <button data-index={props.index} 
    className={props.style} 
    onClick={props.onClick}>{props.children} {props.price}</button>
    );
}

export default Button;