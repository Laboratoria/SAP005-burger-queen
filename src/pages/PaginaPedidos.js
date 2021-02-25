import '../style/paginapedidos.css'
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Adicionar from '../images/Ícones/add-close.png';
import Vaca from '../images/Ícones/vaca.png';
import Frango from '../images/Ícones/frango.png';
import Veggie from '../images/Ícones/planta.png';
import Ovo from '../images/Ícones/ovo.png';
import Queijo from '../images/Ícones/queijo.png';
import Loading from '../components/Loading';

function PaginaPedidos(){
    const {mesa} = useParams();
    let history = useHistory();
    let token = localStorage.getItem("token");
    const atendente = localStorage.getItem("atendente");
    const [loading, setLoading] = useState(true);

    const [menuCafe, setMenuCafe] = useState([]);
    const [menuAlmoco, setMenuAlmoco] = useState([]);

    const [menus, setMenus] = useState(true);

    const [openExtrasBurgerSimples, setOpenExtrasBurgerSimples] = useState(false)
    const [openExtrasBurgerDuplo, setOpenExtrasBurgerDuplo] = useState(false)
    const [extrasBurgerSimples, setExtrasBurgerSimples] = useState('');
    const [extrasBurgerDuplo, setExtrasBurgerDuplo] = useState('');
    const [selectedBurger, setSelectedBurger] = useState({
        name: null,
        flavor: null,
        complement: null
    });
    const [resumoPedido, setResumoPedido] = useState([]);
    const [fazerPedido, setFazerPedido] = useState({"table": mesa});
    const [produtosPedido, setProdutosPedido] = useState([]);
    const [quantidade, setQuantidade] = useState(0);
    const [precoTotal, setPrecoTotal] = useState([0]);

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
                const slice1 = products.slice(0,5);
                const slice2 = products.slice(22);
                const slice3 = products.slice(4,7);
                const slice4 = products.slice(13,16);
                let listaDeProdutosSemRepeticao = [];
                listaDeProdutosSemRepeticao = listaDeProdutosSemRepeticao.concat(slice1, products[13], slice2);
                
                const listaCafeDaManha = listaDeProdutosSemRepeticao.slice(0,4);
                setMenuCafe(listaCafeDaManha);
                
                const listaAlmoco = listaDeProdutosSemRepeticao.slice(4,12);
                setMenuAlmoco(listaAlmoco);
                
                setLoading(false);
            })   
        
    }, [token]);

    const hamburguers = [{name: "carne", img: Vaca, label: "carne"}, {name: "frango", img: Frango, label: "frango"}, {name: "vegetariano", img: Veggie, label: "veggie"},];
    const adicionais = [{name: "ovo", img: Ovo}, {name:"queijo", img: Queijo}];

    function extras() {
        return (
          <>
            <section className="opcoes-burguer">
              <p className="titulo-extras">Hambúrguer</p>
              <section className="img-input-extras">
              {hamburguers.map(tipoHamburguer => (
                <>
                  <input
                    key={tipoHamburguer.name}
                    type="radio"
                    name="escolher-hamburguer"
                    id={tipoHamburguer.name}
                    onChange={(event) => {
                      console.log(event.target.id);
                      setSelectedBurger(selectedBurger.flavor = event.currentTarget.id);
                      setSelectedBurger({...selectedBurger, flavor: event.currentTarget.id});
                    }}
                  />
                  <label for={tipoHamburguer.name}>
                    <img className="img-button-extra" alt={tipoHamburguer.name} src={tipoHamburguer.img} />
                  {tipoHamburguer.label}</label>
                </>
              ))}
              </section>
            </section>
            <section className="opcoes-adicionais">
              <p className="titulo-extras">Adicionais R$1</p>
              <section className="img-input-extras">
              {adicionais.map((tipoAdicional, index) => (
                <>
                  <input
                    key={index}
                    type="radio"
                    name="escolher-adicional"
                    id={tipoAdicional.name}
                    onChange={(event) => {
                      console.log(event.target.id)
                      setSelectedBurger({...selectedBurger, complement: event.currentTarget.id});
                    }}
                  />
                  <label for={tipoAdicional.name} key={index}>
                    <img className="img-button-extra" alt={tipoAdicional.name} src={tipoAdicional.img} />
                  {tipoAdicional.name}</label>
                </> 
              ))}
              </section>
            </section>
          </>
        )
    }

    function handleExtras(event) {
        if(event.target.id === "Hambúrguer simples"){
            if(openExtrasBurgerSimples === true){
                setOpenExtrasBurgerSimples(false);
                event.currentTarget.classList.remove("rotate");
            } else {
                event.currentTarget.classList.add("rotate");
                setExtrasBurgerSimples(extras);
                setOpenExtrasBurgerSimples(true);
            }
        }
        if(event.target.id === "Hambúrguer duplo"){
            if(openExtrasBurgerDuplo === true){
                setOpenExtrasBurgerDuplo(false);
                event.currentTarget.classList.remove("rotate");
            } else {
                event.currentTarget.classList.add("rotate");
                setExtrasBurgerDuplo(extras);
                setOpenExtrasBurgerDuplo(true);
            }
        }
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
    <>
      <Header />
        <main className="pagina-pedido">
            {loading ? 
            (
              <Loading />
            ) : (
                <>
                  <section className="menu-escolha">
                    <section className="buttons-menu-escolha">
                      <button className="button-menu-escolha" onClick={() => setMenus(true)}>Café da Manhã</button>
                      <button className="button-menu-escolha" onClick={() => setMenus(false)}>Almoço/Jantar</button>
                    </section>
                
                    {menus ? (
                      <ul className="lista-menu">
                        {menuCafe.map((produto, index) => (
                          <li key={index} className={`item-lista-menu ${index}`}>
                            <label>{`${produto.name} R$${produto.price}`}</label>
                            <input
                              className="button-adicionar"
                              id={produto.name}
                              type="image"
                              alt="button-adicionar"
                              src={Adicionar}
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
                          <li key={index} className="item-lista-menu">
                            <label>{`${produto.name} R$${produto.price}`}</label>
                            <input
                              className="button-adicionar"
                              id={produto.name}
                              type="image"
                              alt="button-adicionar"
                              src={Adicionar}
                              name={produto.id}
                              onClick={(event) => {
                                handleExtras(event);
                                // if(produto.name === "Hambúrguer simples" || produto.name === "Hambúrguer duplo"){
                                //   setSelectedBurger(selectedBurger.name = event.currentTarget.id);
                                //   setSelectedBurger({...selectedBurger, name: event.currentTarget.id});
                                // } else {
                                //   setPedido([...pedido, {name: event.currentTarget.id, id: event.currentTarget.name, qtd: 1}])
                                //   pedido.map((item) => (
                                //     item.name === event.currentTarget.id ? (
                                //       setPedido([...pedido, {name: item.name, id: event.currentTarget.name, qtd: item.qtd++}]) 
                                //     ) : (
                                //       null
                                //     )
                                //   ))
                                // }                                        
                              }}
                            />
                            {openExtrasBurgerSimples === true && produto.name === "Hambúrguer simples" && <section className="menu-extras">{extrasBurgerSimples}</section>}
                            {openExtrasBurgerDuplo === true && produto.name === "Hambúrguer duplo" && <section className="menu-extras">{extrasBurgerDuplo}</section>}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>

                  <section className="resumo-pedido">
                    <p className="titulo-resumo-pedido">Resumo do Pedido</p>
                    <p className="infos-resumo-pedido">Atendente: {atendente} | Mesa {mesa}</p>
                    <input className="cliente-resumo-pedido"
                      type="text" 
                      placeholder="Nome do Cliente"
                      onChange={(event) => {
                        setFazerPedido({...fazerPedido, "client": event.target.value})
                      }}
                    />

                    {resumoPedido !== [] && 
                      <>
                        <section className="titulo-lista-pedido">
                          <label>Item/Valor</label>
                          <label>Quantidade</label> 
                        </section>
                        <ul className="lista-pedido">
                        {resumoPedido.map((item, index) => (
                          <>
                            <li className="item-lista-pedido" key={index}>
                              <label>{item.name} R${item.price}</label>
                            </li>
                          </>
                        ))}
                        </ul>
                        <p className="total-resumo-pedido">TOTAL: R${somarPrecoTotal(precoTotal)}</p>
                        <section className="buttons-resumo-pedido">
                          <input className="button-resumo-pedido"
                            type="button"
                            value="Enviar Pedido"
                            onClick={() => {
                              setFazerPedido({...fazerPedido, "products": produtosPedido});
                            }}
                          />
                          <input className="button-resumo-pedido"
                            type="button"
                            value="Limpar Pedido"
                            onClick={() => {
                              setPrecoTotal([0]);
                              setResumoPedido([]);
                              setProdutosPedido([]);
                            }}
                          />
                        </section>
                      </>
                    }
                  </section>
                </>
              )
            }
        </main>
        <Footer />
        </>   
    )
}

export default PaginaPedidos;