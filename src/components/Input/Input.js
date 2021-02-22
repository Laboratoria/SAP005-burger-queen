import React from 'react';

const Input = (props) => {
    return <input placeholder= {props.title} 
    className={props.style} 
    type={props.type} 
    onChange={props.onChange}></input>
}

export default Input;