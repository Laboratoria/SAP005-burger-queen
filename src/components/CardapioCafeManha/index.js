import React, { useEffect, useState } from 'react';

const CardapioCafeManha = () => {
  const tokenUser = localStorage.getItem('token');
  // const [clientInfo, setClientInfo] = useState({});
  const [CardapioCafe, setCardapioCafe] = useState([]);
  const [hamburgueres, setHamburgueres] = useState([]);
  const [acompanhamentos, setAcompanhamentos] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [resumoPedido, setResumoPedido] = useState([{ Products :	[]}]);
  
  
  useEffect(() => {
    fetch('https://lab-api-bq.herokuapp.com/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${tokenUser}`
      },
    })
      .then(response => response.json())
      .then(data => {
        const products = data;
        const produtosCafe = products.filter(itens => itens.type.includes('breakfast'));
        setCardapioCafe(produtosCafe);
        const hamburgueres = products.filter(itens => itens.sub_type.includes('hamburguer'));
        setHamburgueres(hamburgueres);
        const acompanhamentos = products.filter(itens => itens.sub_type.includes('side'));
        setAcompanhamentos(acompanhamentos);
        const bebidas = products.filter(itens => itens.sub_type.includes('drinks'));
        setBebidas(bebidas);
      })
  }, [])

  const handleAdicionar = (produto) => {
    console.log(produto)
    setResumoPedido([ ...resumoPedido, { Products :	[produto]}])
  }

  const handleResumo = () => {
    console.log(resumoPedido)
  }



  // const handleSubmit = () => {

  //   fetch('https://lab-api-bq.herokuapp.com/orders', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(clientInfo)
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       const order = data;
  //       console.log(order)
  //     })
  // }

  return (
    <div>
      <label>
        Nome:
          <input type='text' name='nome' className='' required /*onChange={(event) => setClientInfo({ 'client': event.target.value })
        }*/ />
      </label>
      <label>
        Mesa:
          <input type='text' name='mesa' className='' required /*onChange={(event) => setClientInfo({ 'table': event.target.value })
        }*/ />
      </label>
      <table>
        <tbody>
          <tr>
            <th>Ítem</th>
            <th>Preço</th>
          </tr>
          {CardapioCafe.map((produto) => (
            <tr key={produto.id}>
              <td >{produto.name}</td>
              <td>R$ {produto.price},00</td>
              <td>
                <button onClick={() => handleAdicionar(produto)}>Adicionar</button>
              </td>
            </tr>
          ))}
          <button onClick={() => handleResumo()}>Resumo</button>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <th>Hambúrgueres</th>
            <th>Adicionais</th>
            <th>Preço</th>
          </tr>
          {hamburgueres.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.name + " " + produto.flavor}</td>
              <td>{produto.complement === 'null' ? '' : produto.complement}</td>
              <td>R$ {produto.price},00</td>
              <td>
                <button>Adicionar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <th>Acompanhamentos</th>
            <th>Preço</th>
          </tr>
          {acompanhamentos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.name}</td>
              <td>R$ {produto.price},00</td>
              <td>
                <button>Adicionar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <th>Bebidas</th>
            <th>Preço</th>
          </tr>
          {bebidas.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.name}</td>
              <td>R$ {produto.price},00</td>
              <td>
                <button>Adicionar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h3>Resumo do Pedido</h3>
        <table>
          <tbody>
            <tr>
              <th>Quantidade</th>
              <th>Ítem</th>
              <th>Preço</th>
            </tr>
            {/* {resumoPedido.map((produto) => (
              <tr>
                <td></td>
                <td>{produto.name}</td>
                <td>{produto.price}</td>
                <td>
                  <button>Excluir</button>
                </td>
              </tr>
            ))}; */}
            <tr>
              <th>Total</th>
              <th>R$ 0,00</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div >
  )
};

export default CardapioCafeManha;
