import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logoburger from '../../img/logoburger.png';
import './Lounge.css'

export const CreateOrder = () => {

    let token = localStorage.getItem('token');
    const [client, setClient] = useState('');
    const [table, setTable] = useState('');
    const [products, setProducts] = useState([]);
    const [options, setOptions] = useState("breakfast");
    const breakfast =
        products.length > 0 && products.filter(({ type }) => type === "breakfast");
    const lunch =
        products.length > 0 &&
        products.filter(({ sub_type }) => sub_type === "hamburguer");
    const drinks =
        products.length > 0 &&
        products.filter(({ sub_type }) => sub_type === "drinks");
    const side =
        products.length > 0 &&
        products.filter(({ sub_type }) => sub_type === "side");



    const handleClient = (event) => {
        setClient(event.target.value);
    }
    const handleTable = (event) => {
        setTable(event.target.value);
    };
    const route = useHistory();
    const loungeRoute = () => {
        route.push('/Lounge')
    }

    function BackBtn(event) {
        event.preventDefault();
        loungeRoute();
    }

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://lab-api-bq.herokuapp.com/products", requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            
        }, [token])});
    
    function getProducts(options) {
        switch (options) {
            case "breakfast":
                return breakfast ? (
                    breakfast.map((item, index) => (
                        <ul className="menu-list">
                            onClick={() => {
                                handleClick(item);
                            }}
                            key={index}
                            img={item.image}
                            name={item.name}
                            complement={item.complement}
                            price={item.price}
                            flavor={item.flavor}
                        </ul>
                    ))
            )break}
    }
}; 