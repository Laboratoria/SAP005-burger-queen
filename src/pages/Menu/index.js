import React, { useState } from 'react';
import './index.css';

export const Menu = () => {
    const token = localStorage.getItem('token');
    const [hamburgers, updateHamburgers] = useState([]); //Hamburgeres
    const [order, updateOrder] = useState([]); //
    const [cafeMenu, updateCafeMenu] = useState([]); //CardapioCafe
    const [accompaniment, updateAaccompaniment] = useState([]);//acompanhamento
    const [drinks, updateDrinks] = useState([]);//bebida
    const [orderItems, updateOrderItems] = useState([]);//resumo do pedido
    const [excludedProduct, updateExcludeProduct] = useState([]);//excluir produto 
    const [amount, updateAmount] = useState([]); //total do produto
    const [productPrice, updateProductPrice] = useState([]); //preco do produto

        fetch('https://lab-api-bq.herokuapp.com/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
        }, [])
        .then(response => response.json())
        .then(data => {
            const itens = data;
            const coffeeItems = itens.filter(products => products.type.includes('breakfast'));
            const burgers = itens.filter(products => products.sub_type.includes('hamburguer'));
            const sideDish = itens.filter(products => products.sub_type.includes('side'));
            const drink = itens.filter(products => products.sub_type.includes('drinks'));
            updateDrinks(drink);
            updateAaccompaniment(sideDish);
            updateHamburgers(burgers);
            updateCafeMenu(coffeeItems);
        }, [])
    .catch(error => console.log('error', error));

    const addItems = (product) => {
        updateOrderItems([...orderItems, product]);
        updateProductPrice([...productPrice, product.price]);
    }

    const totalSum = (product) => {
        updateAmount(productPrice.reduce((total, num) => total + num));
    }

    const deleteItems = (product) => {
        updateAmount(productPrice.slice(orderItems.indexOf(product), 1));
        updateExcludeProduct(orderItems.slice(orderItems.indexOf(product), 1));
        totalSum();
    }

    const submitOrder = () => {
        const requestedProduct = orderItems.map((product) => {
            return(
                {
                    id:product.id,
                    quantity:1
                }
            )
        })

        const quantity = requestedProduct.reduce(function (a,b) {
            a[b.id] = a[b.id] || [];
            a[b.id].push(b);
            return a;
        }, Object.create(null));

        const productList = [];
        for (const [key, value] of Object.entries(quantity)){
            productList.push({
                id: key,
                quantity: value.length
            });
        }

        updateOrder({...order, 'products': productList });
        console.log(order);
    }
    
    return(
        <div>
            <div>
                <label>Nome:</label>
                <input name='name' type='text' onChange={(e) => updateOrder({...order, 'client': e.target.value})} />
                <label>Numero da mesa:</label> 
                <input name='table' type='number' onChange={(e) => updateOrder({...order, 'table': e.target.value})} />
            </div>
            <div>
            <h1>Café da manhã</h1>
            {cafeMenu.map((product) => {
                return(
                    <div className='container'>
                        <div className='card'>
                            <div class="card-container">
                                <li key={product.id }>
                                    <div className="hamburgers-thumb">
                                        <img src={product.image} alt={`${product.name} Thumb`} />
                                    </div>
                                    <p>{ product.name }</p>
                                    <p>R${ product.price }</p>
                                    <button onClick={() => addItems(product)}>Adicionar</button>
                                </li>
                            </div>
                        </div>
                    </div>
                );
            })}
            </div>
            <div>
            <h1>Hamburgueres</h1>
            {hamburgers.map((product) => {
                return(
                    <div className='container'>
                        <div className='card'>
                            <div class="card-container">
                                <li key={product.id }>
                                    <div className="hamburgers-thumb">
                                        <img src={product.image} alt={`${product.name} Thumb`} />
                                    </div>
                                    <p>{ product.name }</p>
                                    <p>{ product.complement}</p>
                                    <p>R${ product.price }</p>
                                    <button onClick={() => addItems(product)}>Adicionar</button>
                                </li>
                            </div>
                        </div>
                    </div>
                );
            })}
            </div>

            <div>
            <h1>Acompanhamentos</h1>
            {accompaniment.map((product) => {
                return(
                    <div className='container'>
                        <div className='card'>
                            <div class="card-container">
                                <li key={product.id }>
                                    <div className="hamburgers-thumb">
                                        <img src={product.image} alt={`${product.name} Thumb`} />
                                    </div>
                                    <p>{ product.name }</p>
                                    <p>R${ product.price }</p>
                                    <button onClick={() => addItems(product)}>Adicionar</button>
                                </li>
                            </div>
                        </div>
                    </div>
                );
            })}
            </div>

            <div>
            <h1>Bebidas</h1>
            {drinks.map((product) => {
                return(
                    <div className='container'>
                        <div className='card'>
                            <div class="card-container">
                                <li key={product.id }>
                                    <div className="hamburgers-thumb">
                                        <img src={product.image} alt={`${product.name} Thumb`} />
                                    </div>
                                    <p>{ product.name }</p>
                                    <p>R${ product.price }</p>
                                    <button onClick={() => addItems(product)}>Adicionar</button>
                                </li>
                            </div>
                        </div>
                    </div>
                );
            })}
            </div>

            <div>
            <h1>Produtos adicionados</h1>
            {orderItems.map((product, index) => {
                return(
                    <div className='container'>
                        <div className='card'>
                            <div class="card-container">
                                <li key={ index }>
                                    <div className="hamburgers-thumb">
                                        <img src={product.image} alt={`${product.name} Thumb`} />
                                    </div>
                                    <p>{ product.name }</p>
                                    <p>{ product.complement === 'null' ? '' : product.complement }</p>
                                    <p>R${ product.price }</p>
                                    <button onClick={() => deleteItems(product)}>Excluir</button>
                                </li>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div>
                <h3>Total</h3>
                <h3>R${amount}</h3>
                <button onClick={() => totalSum()}>Totalizar itens</button>
                <button onClick={() => submitOrder()}>Finalizar pedido</button>
            </div>
            </div>

            

        </div>
    );
}

export default Menu;