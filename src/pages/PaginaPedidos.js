import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";

function PaginaPedidos(){
    const {mesa} = useParams();
    let history = useHistory();
    let token = localStorage.getItem("token");
    const atendente = localStorage.getItem("atendente");
    const [loading, setLoading] = useState(true);

    const [menuCafe, setMenuCafe] = useState([]);
    const [menuAlmoco, setMenuAlmoco] = useState([]);

    const [menus, setMenus] = useState(true);

    const [extras, setExtras] = useState();

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
        };

        fetch('https://lab-api-bq.herokuapp.com/products', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const products = data;

                products.forEach(item => {
                    if(item.name === "hambuguer simples") {
                        return item.name = "Hambúrguer Simples";
                    } else if(item.name === "hambuguer duplo") {
                    return item.name = "Hambúrguer Duplo";
                    }
                })
        
                const slice1 = products.slice(0,5);
                const slice2 = products.slice(22);
                let listaDeProdutosSemRepeticao = [];
                listaDeProdutosSemRepeticao = listaDeProdutosSemRepeticao.concat(slice1, products[13], slice2);
                
                const listaCafeDaManha = listaDeProdutosSemRepeticao.slice(0,4);
                setMenuCafe(listaCafeDaManha);
            
                const listaAlmoco = listaDeProdutosSemRepeticao.slice(4,12);
                setMenuAlmoco(listaAlmoco);
                
                setLoading(false);
            })   
        
    }, [token]);

    return (
        <main>
            {loading ? 
            (
                <p>Carregando</p>
            ) : (
                <>
                <p>Atendente: {atendente}</p>
                <input type="button" value="Voltar" onClick={() => {
                    history.push({
                    pathname: `/salao`,
                    })
                }}/>

                <p>Pedido Mesa {mesa}</p>

                <input 
                    type="text" 
                    placeholder="Nome do Cliente"
                />

                <button onClick={() => setMenus(true)}>Café da Manhã</button>

                <button onClick={() => setMenus(false)}>Almoço/Jantar</button>

            
                {menus ? (
                    <ul className="lista-menu">
                        {menuCafe.map((produto, index) => (
                            <li key={index}>
                                <label>{`${produto.name} R$${produto.price}`}</label>
                                <input 
                                    type="button"
                                    value="Adicionar"
                                />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <ul className="lista-menu">
                        {menuAlmoco.map((produto, index) => (
                            <li key={index}>
                                <label>{`${produto.name} R$${produto.price}`}</label>
                                <input
                                    id={produto.name}
                                    type="button"
                                    value="Adicionar"
                                    onClick={(event) => {
                                        event.target.id === "Hambúrguer Simples" ? setExtras("oi") : <p></p>
                                    }}
                                />
                            </li>
                        ))}
                    </ul>
                )}   
                
                </>
            )
        }
        </main>       
    )
}

export default PaginaPedidos;