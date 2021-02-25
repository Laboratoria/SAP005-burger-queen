import '../style/paginapedidos.css'
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ErrorModal from '../components/ModalError';
import Adicionar from '../images/Ícones/add-close.png';
import Vaca from '../images/Ícones/vaca.png';
import Frango from '../images/Ícones/frango.png';
import Veggie from '../images/Ícones/planta.png';
import Ovo from '../images/Ícones/ovo.png';
import Queijo from '../images/Ícones/queijo.png';
import Lixeira from '../images/Ícones/lixo.png';
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

    const [listaCompletaDeProdutos, setListaCompletaDeProdutos] = useState("");
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
    const [fazerPedido, setFazerPedido] = useState({"client": "", "table": mesa, "products": []});
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

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

                const products = data;
                setListaCompletaDeProdutos(data)

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
        return array.reduce((total, item) => total + (item.qtd*item.price), 0);
    }

    React.useEffect(() => {
        console.log(resumoPedido);
        // console.log(fazerPedido)

      }, [resumoPedido, fazerPedido])

  return (
    <>
      {isModalVisible ? (<ErrorModal onClose={() => setIsModalVisible(false)}>{errorMessage}</ErrorModal>) : null}
      <Header />
        <main className="pagina-pedido">
            {loading ? 
            (
              <Loading />
            ) : (
                <>
                <input 
                    type="button" 
                    value="Voltar" 
                    onClick={() => {
                        history.push({
                        pathname: `/salao`,
                        })
                    }}
                />

                <section className="menu-escolha">
                <section className="buttons-menu-escolha">
                    <button className="button-menu-escolha" onClick={() => setMenus(true)}>Café da Manhã</button>
                    <button className="button-menu-escolha" onClick={() => setMenus(false)}>Almoço/Jantar</button>
                </section>

            
                {menus ? (
                    <ul className="lista-menu">
                        {menuCafe.map((produto, index) => (
                            <li key={index} className="item-lista-menu">
                                <label>{`${produto.name} R$${produto.price} `}</label>
                                <input
                                    className="button-adicionar"
                                    id={produto.name}
                                    type="image"
                                    alt="button-adicionar"
                                    src={Adicionar}
                                    onClick={() => {
                                        if(!resumoPedido.some(pedido => pedido.name === menuCafe[index].name)){
                                            setResumoPedido([...resumoPedido, {"id": menuCafe[index].id, "name": menuCafe[index].name, "price": menuCafe[index].price, "qtd": 1}]);
                                        } else {
                                            resumoPedido.map((produto, i) => {
                                                if(produto.name === menuCafe[index].name) {
                                                  resumoPedido[i].qtd++; 
                                                  setResumoPedido([...resumoPedido]);
                                                }
                                            })
                                        }
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
                                if(produto.name === "Hambúrguer simples" || produto.name === "Hambúrguer duplo"){
                                  setSelectedBurger(selectedBurger.name = event.currentTarget.id);
                                  setSelectedBurger({...selectedBurger, name: event.currentTarget.id});
                                } else {
                                  if(!resumoPedido.some(pedido => pedido.name === menuAlmoco[index].name)){
                                    setResumoPedido([...resumoPedido, {"id": menuAlmoco[index].id, "name": menuAlmoco[index].name, "price": menuAlmoco[index].price, "qtd": 1}]);
                                  } else {
                                    resumoPedido.map((produto, i) => {
                                        if(produto.name === menuAlmoco[index].name) {
                                          resumoPedido[i].qtd++; 
                                          setResumoPedido([...resumoPedido]);
                                        }
                                    })
                                  }
                                }                                        
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
                                <label>{item.qtd}x {item.name} R${item.price*item.qtd}</label>
                                <input
                                    className="button-manipular-qtd"
                                    id="diminuir-qtd"
                                    type="button"
                                    value="-"
                                    onClick={() => {
                                      if(item.qtd > 1 && item.name === resumoPedido[index].name) {
                                        resumoPedido[index].qtd--; 
                                        setResumoPedido([...resumoPedido]);
                                      } else if(item.name === resumoPedido[index].name && item.qtd === 1) {
                                        resumoPedido.splice(index, 1);
                                        setResumoPedido([...resumoPedido]);
                                      } 
                                    }}
                                />
                                <label>{item.qtd}</label>
                                <input
                                    className="button-manipular-qtd"
                                    id="aumentar-qtd"
                                    type="button"
                                    value="+"
                                    onClick={() => {
                                      if(item.name === resumoPedido[index].name) {
                                        resumoPedido[index].qtd++; 
                                        setResumoPedido([...resumoPedido]);
                                      }
                                    }}
                                />
                                <input
                                    className="button-excluir-item"
                                    id="excluir-item"
                                    type="image"
                                    src={Lixeira}
                                    alt="icone-lixeira"
                                    onClick={() => {
                                      resumoPedido.splice(index, 1);
                                      setResumoPedido([...resumoPedido]);
                                    }}
                                />
                            </li>
                          </>
                        ))}
                        </ul>
                        <p className="total-resumo-pedido">TOTAL: R${somarPrecoTotal(resumoPedido)}</p>
                        <section className="buttons-resumo-pedido">
                          <input className="button-resumo-pedido"
                            type="button"
                            value="Enviar Pedido"
                            onClick={() => {
                              if(fazerPedido.client !== "") {
                                const products = resumoPedido.map(produto => {
                                  return {"id": produto.id, "qtd": produto.qtd};
                                });
  
                                fazerPedido.products = products;
  
                                const requestOptions = {
                                  method: 'POST',
                                  headers: { 
                                      'Content-Type': 'application/json',
                                      'Authorization': `${token}`,
                                  },
                                  body: JSON.stringify(fazerPedido),
                                };
                      
                                fetch('https://lab-api-bq.herokuapp.com/orders', requestOptions)
                                    .then(response => response.json())
                                    .then(data => {
                                      if(data.id !== undefined){
                                        console.log(data);
                                      } else {
                                        setIsModalVisible(true)
                                        setErrorMessage(`${data.message}`)
                                      }
                                    })
                              }else{
                                setIsModalVisible(true);
                                setErrorMessage("Preencha o nome do cliente!");
                              }
                            }} 
                          />

                          <input className="button-resumo-pedido"
                            type="button"
                            value="Limpar Pedido"
                            onClick={() => {
                              setResumoPedido([]);
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