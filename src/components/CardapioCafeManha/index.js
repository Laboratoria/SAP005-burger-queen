import '../../Styles/CardapioCafeDaManha.css';
import Trash from '../../assets/trash.png';
import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';


const CardapioCafeManha = () => {
  const tokenUser = localStorage.getItem('token');
  const [CardapioCafe, setCardapioCafe] = useState([]);
  const [hamburgueres, setHamburgueres] = useState([]);
  const [acompanhamentos, setAcompanhamentos] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [resumoPedido, setResumoPedido] = useState([]);
  const [order, setOrder] = useState({});
  const [produtoExcluído, setProdutoExcluído] = useState([])
  const [precoTotal, setPrecoTotal] = useState([])
  const [precosProdutos, setPrecosProdutos] = useState([])


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

  const handleAdicionar = async(produto) => {
    setResumoPedido([...resumoPedido, produto])
    setPrecosProdutos([...precosProdutos, produto.price])
    
  }

  useEffect(() => {
    setOrder({ ...order, 'product': resumoPedido })
    }, [resumoPedido])
  

  const handleExcluir = (produto) => {
    setPrecoTotal(precosProdutos.splice(resumoPedido.indexOf(produto), 1))
    setProdutoExcluído(resumoPedido.splice(resumoPedido.indexOf(produto), 1))
    handleSomar();
  }

  const handleSomar = () => {
    setPrecoTotal(precosProdutos.reduce((total, num) => total + num))
  }

  const handleSubmit = () => {
    const produtoApi = resumoPedido.map((produto) => {
      return (
        {
          id: produto.id,
          qtd: 1
        }
      )
    })

    const qtd = produtoApi.reduce(function (r, a) {
      r[a.id] = r[a.id] || [];
      r[a.id].push(a);
      return r;
    }, Object.create(null));

    const arrayProdutos = [];
    for (const [key, value] of Object.entries(qtd)) {
      arrayProdutos.push({
        id: key,
        qtd: value.length
      });
    }
    
    setOrder({ ...order, 'product': arrayProdutos })

    console.log(order)

    fetch('https://lab-api-bq.herokuapp.com/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${tokenUser}`
      },
      body: JSON.stringify(order)
    })
      .then((response) => {
        response.json()
      })  
      .then(data => {
        console.log(data)
      })
  }

  return (
    <div>

      <div className='info-client'>
        <label>
          Nome:
            <input type='text' name='nome' className='' required onChange={(event) => setOrder({ ...order, 'client': event.target.value })
          } />
        </label>
        <label>
          Mesa:
            <input type='text' name='mesa' className='' required onChange={(event) => setOrder({ ...order, 'table': event.target.value })
          } />
        </label>
      </div>

      <table className='itens'>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Preço</th>
          </tr>
          {CardapioCafe.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.name}</td>
              <td>R$ {produto.price},00</td>
              <td>
                <button onClick={() => handleAdicionar(produto)}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className='itens'>
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
                <button onClick={() => handleAdicionar(produto)}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className='itens'>
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
                <button onClick={() => handleAdicionar(produto)}>+</button>
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
          {bebidas.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.name}</td>
              <td>R$ {produto.price},00</td>
              <td>
                <button onClick={() => handleAdicionar(produto)}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className='itens'>
        <tbody>
          <tr>
            <th>Qtde</th>
            <th>Ítem</th>
            <th>Adicionais</th>
            <th>Preço</th>
          </tr>
          {resumoPedido.map((produto, index) => (
            <tr key={index}>
              <td>1</td>
              <td>{produto.name}</td>
              <td>{produto.complement === 'null' ? '' : produto.complement}</td>
              <td>R$ {produto.price},00</td>
              <td>
                <button><img className='icon-trash' src={Trash} alt='icon-trash' onClick={() => handleExcluir(produto)} /></button>
              </td>
            </tr>
          ))}
          <tr className='total'>
            <th className='item-total'><h4>Total:</h4></th>
            <th className='item-total'><h4>R$ {precoTotal},00</h4></th>
            <th><button onClick={() => handleSomar()}>Somar</button></th>
            <th><button onClick={() => handleSubmit()}>FINALIZAR</button></th>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default CardapioCafeManha;