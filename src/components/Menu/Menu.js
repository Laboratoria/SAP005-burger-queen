import { React, useState } from "react";

const [productName, setProductName] = useState("");
const [productPrice, setProductPrice] = useState("");
const [productType, setProductType] = useState("");

fetch("https://lab-api-bq.herokuapp.com/products", {
    method: "GET",
    headers: {
        accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `name=${productName}&price=${productPrice}&type=${productType}&restaurant=LaBurger`,
})
.then((response) => {
    return response.json()
})
    .then((json) => {
        console.log(json);
        
        setProductName("");
        setProductPrice("");
        setProductType("");
    });