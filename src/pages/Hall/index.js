
import './Hall.css';
import React,{useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'

function Hall(){

    const history = useHistory()

    const routerBack = () => {
        history.push('/hall')
    }}