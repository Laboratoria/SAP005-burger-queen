import { React, useState } from "react";
import "./Hall.css";
import { useHistory } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Header from '../../components/Header/Header.js';
import Button from '../../components/Button/Button.js';
import Input from "../../components/Input/Input";

const Hall = () => {
    const tokenUser = localStorage.getItem('token');
    const [menuCoffe, setMenucoffe] = useState([]);


    

    

// const history = useHistory();

// const [client, setClient] = useState("");
// const [menu, setMenu] = useState([]);
// const [table, setTable] = useState("");
// const [order, setOrder] = useState([]);

// let token = localStorage.getItem('token');

// var myHeaders = new Headers();
// myHeaders.append(
//     "Authorization", token
// );


// var requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow",
// };

// fetch("https://lab-api-bq.herokuapp.com/products", requestOptions)
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.log("error", error));

// const breakfast = () => { };

// const burger = () => { };

// const sendKitchen = () => { };

return(
        <>
        <div className="hall-lab">
            <Header />
            <div className='info-client'>
                <label>
                    Nome:
                <Input
                        type='text'
                        name='nome'
                        className='input'
                        required
                        onChange={(event) =>
                            setOrder({ ...order, client: event.target.value })
                        }
                    />
                </label>
                <label>
                    Mesa:
                <Input
                        type='text'
                        name='mesa'
                        className='input'
                        required
                        onChange={(event) =>
                            setOrder({ ...order, table: event.target.value })
                        }
                    />
                </label>
            </div>
        </div>
        <div className="hall-page">
            <div className="hall-left">
                <div className="button-breakfast">
                    <Button
                        children="Menu - Café da manhã"
                        onClick={() => handleAdd()}
                        
                    />
                </div>

                <table className='itens'>
                <tbody>
                    <tr>
                        <th>Café da Manhã</th>
                        <th>Preço</th>
                    </tr>
                    {menuCoffe.map((produto) => (
                        <tr key={produto.id}>
                            <td>{produto.name}</td>
                            <td>R$ {produto.price},00</td>
                            <td>
                                <button onClick={() => handleAdd(produto)}>+</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>

                <div className="button-burger">
                    <Button
                        children="Menu - Burgers"
                        onClick={() => handleAdd()}
                    />
                </div>
                
            <table className='itens'>
                <tbody>
                    <tr>
                        <th>Hambúrgueres</th>
                        <th>Adicionais</th>
                        <th>Preço</th>
                    </tr>
                    {burgers.map((produto) => (
                        <tr key={produto.id}>
                            <td>{produto.name + ' ' + produto.flavor}</td>
                            <td>{produto.complement === 'null' ? '' : produto.complement}</td>
                            <td>R$ {produto.price},00</td>
                            <td>
                                {/* <button onClick={() => handleAdd(produto)}>+</button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


            
                </div>
                <table className='itens'>
                <tbody>
                    <tr>
                        <th>Acompanhamentos</th>
                        <th>Preço</th>
                    </tr>
                    {snacks.map((produto) => (
                        <tr key={produto.id}>
                            <td>{produto.name}</td>
                            <td>R$ {produto.price},00</td>
                            <td>
                                <button onClick={() => handleAdd(produto)}>+</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table className='itens'>
                <tbody>
                    <tr>
                        <th>Bebidas</th>
                        <th>Preço</th>
                    </tr>
                    {drinks.map((produto) => (
                        <tr key={produto.id}>
                            <td>{produto.name}</td>
                            <td>R$ {produto.price},00</td>
                            <td>
                                <button onClick={() => handleAdd(produto)}>+</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        <div className="pedido">
            <h1>Resumo Pedido</h1>
            <table className='itens'>
                <tbody>
                    <tr>
                        <th>Qtde</th>
                        <th>Ítem</th>
                        <th>Complemento</th>
                        <th>Adicionais</th>
                        <th>Preço</th>
                    </tr>
                    {orderSummary.map((product, index) => (
                        <tr key={index}>
                            <td>1</td>
                            <td>{product.name}</td>
                            <td>{product.flavor === 'null' ? '' : product.flavor}</td>
                            <td>{product.complement === 'null' ? '' : product.complement}</td>
                            <td>R$ {product.price},00</td>
                            <td>
                                <button>
                                    <MdDelete
                                    onClick={() => handleDelet(product)}/>
                                </button>
                            </td>
                        </tr>
                    ))}
                    <tr className='total'>
                        <th className='item-total'>
                            <h4>Total:</h4>
                        </th>
                        <th className='item-total'>
                            <h4>R$ {finalPrice},00</h4>
                        </th>
                        <th>
                            <button onClick={() => handleSum()}>SOMAR</button>
                        </th>
                        <th>
                            <button onClick={() => handleSubmit()}>FINALIZAR</button>
                        </th>
                    </tr>
                </tbody>
                </table>
        </div>
        <div className="button-send">
                    <Button
                        onClick={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                        children="Enviar Pedido"
                    />
        </div>
    </>
    );
};

export default Hall;
