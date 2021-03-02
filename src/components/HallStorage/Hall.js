import React,{useState}  from 'react';
//import {MenuTab} from '../HallStorage/MenuTab';
import {FormsButton} from '../FormsStorage/FormsButtons';



const data=()=>{
    fetch('https://lab-api-bq.herokuapp.com/products', {
    method: 'GET',
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        'accept': 'application/json',
        },
    })
    .then((response)=> response.json())
    .then((json)=>{
        console.log(json)
    })
}
export const HallTst= () =>{
    return(
        <>
        <FormsButton onClick={()=>{data();}}>Cadastrar</FormsButton>
        </>
    )
}