import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logoburger from '../../img/logoburger.png';
import add from '../../img/add.png';
import './Lounge.css'

export const CreateOrder = () => {
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');
  let token = localStorage.getItem('token')
  const [menuCafe, setMenuCafe] = useState([]);
  const [menuAlmoco, setMenuAlmoco] = useState([]);
  const [loading, setLoading] = useState(true);
  const [precoTotal, setPrecoTotal] = useState([0]);
  const [resumoPedido, setResumoPedido] = useState([]);
  const [produtosPedido, setProdutosPedido] = useState([]);
   const [fazerPedido, setFazerPedido] = useState({"table": table});
  
  

  const [menus, setMenus] = useState(true);

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

    //const raw = "";

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      //body: raw,
      redirect: 'follow'
    };

    fetch("https://lab-api-bq.herokuapp.com/products", requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const products = data;

        const slice1 = products.slice(0, 5);
        const slice2 = products.slice(22);
        let listaDeProdutosSemRepeticao = [];
        listaDeProdutosSemRepeticao = listaDeProdutosSemRepeticao.concat(slice1, products[13], slice2);

        const listaCafeDaManha = listaDeProdutosSemRepeticao.slice(0, 4);
        setMenuCafe(listaCafeDaManha);

        const listaAlmoco = listaDeProdutosSemRepeticao.slice(4, 12);
        setMenuAlmoco(listaAlmoco);

        setLoading(false);
      })

  }, [token]);

  const handleSendKitchen = (event) => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token);

    const raw = JSON.stringify({ "client": client, "table": table, "products": [{ "id": 29, "qtd": 1 }, { "id": 30, "qtd": 1 }, { "id": 40, "qtd": 1 }] });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://lab-api-bq.herokuapp.com/orders", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  function somarPrecoTotal(array) {
    const soma = ((total, num) => total+num);
    return array.reduce(soma);
}

React.useEffect(() => {
  console.log(resumoPedido);
  console.log(fazerPedido)
  console.log(precoTotal);
}, [precoTotal, resumoPedido, fazerPedido])

  return (
    <div className="container">
      <header>
        <img src={logoburger} className="logoburger" alt="logoburger" />
        <h1>MENU</h1>
      </header>
      <h1>Criar Pedido</h1>
      <div className="row">
        <div className="col">
          <input type="text" className="form-control" placeholder="Cliente" aria-label="Cliente" onChange={handleClient}
            value={client}
            required />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Mesa" aria-label="Mesa" onChange={handleTable}
            value={table}
            required />
        </div>
        {loading ? 
            (
                <p>Carregando</p>
            ) : (
                <>
                
               


                <button onClick={() => setMenus(true)}>Café da Manhã</button>

                <button onClick={() => setMenus(false)}>Almoço/Jantar</button>

            
                {menus ? (
                    <ul className="lista-menu">
                        {menuCafe.map((produto, index) => (
                            <li key={index}>
                                <label>{`${produto.name} R$${produto.price}`}</label>
                                <input
                                    className="add-btn"
                                    id={produto.name}
                                    type="image"
                                    alt="add-button"
                                    src={add}
                                   
                                    onClick={() => {
                                        setPrecoTotal([...precoTotal, menuCafe[index].price]);
                                        setResumoPedido([...resumoPedido, {"name": menuCafe[index].name, "price": menuCafe[index].price}]);
                                        setProdutosPedido([...produtosPedido, {"id": menuCafe[index].id, "qtd": 1}]);
                                    }}
                                />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <ul className="lista-menu">
                        {menuAlmoco.map((produto, index) => (
                            <li key={index}>
                                <p>{`${produto.name} R$${produto.price}`}</p>
                                <input
                                    className="add-btn"
                                    id={produto.name}
                                    type="image"
                                    alt="add-button"
                                    src={add}
                                    
                                    
                                    name={produto.id}
                                    onClick={(event) => {
                                                                    
                                    }}
                                />
                                
                            </li>
                        ))}
                    </ul>
                )}

                {resumoPedido !== [] && <>
                    {resumoPedido.map((item, index) => (
                        <div key={index}>
                            <p>{item.name}</p>
                            <p>R${item.price}</p>
                        </div>
                        ))}
                        <p>TOTAL: R${somarPrecoTotal(precoTotal)}</p>                     
                        
                        <input
                        className="btn"
                            type="button"
                            value="Excluir pedido"
                            onClick={() => {
                                setPrecoTotal([0]);
                                setResumoPedido([]);
                                setProdutosPedido([]);
                            }}
                        />
                    </>
                }

                </>
            )
        }
         
    

      </div>
      <button id="back-btn" onClick={BackBtn}>Voltar</ button>
      <button className="btn" onClick={handleSendKitchen}>Enviar para cozinha</button>
    </div>

  )

};
