// // import React, { useEffect, useState } from 'react';

// // const Order = () => {
// //     const [resumoPedido, setResumoPedido] = useState([]);
// //     const [fazerPedido, setFazerPedido] = useState({"client": "", "table": mesa, "products": []});




// //     <section className="resumo-pedido">
// //         <p className="titulo-resumo-pedido">Resumo do Pedido</p>
// //         <p className="infos-resumo-pedido">Atendente: {atendente} | Mesa {mesa}</p>
// //         <input className="cliente-resumo-pedido"
// //             type="text"
// //             placeholder="Nome do Cliente"
// //             onChange={(event) => {
// //                 setFazerPedido({ ...fazerPedido, "client": event.target.value })
// //             }}
// //         />




// // return (

// {
//     orderSummary !== [] &&
//     <>
//         <section className="titulo-lista-pedido">
//             <label>Item/Valor</label>
//             <label>Quantidade</label>
//         </section>
//         <ul className="lista-pedido">
//             {orderSummary.map((item, index) => (
//                 <>
//                     <li className="item-lista-pedido" key={index}>
//                         <label>
//                             {typeof item.name === "string" ? item.name : item.name.map((item) => <><label>{item.name}</label> <label>{item.flavor}</label> <label>{item.complement}</label></>)}
//                             {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price * item.qtd)}
//                         </label>
//                         <input
//                             className="button-manipular-qtd"
//                             id="diminuir-qtd"
//                             type="button"
//                             value="-"
//                             onClick={() => {
//                                 if (item.qtd > 1 && item.name === orderSummary[index].name) {
//                                     orderSummary[index].qtd--;
//                                     ([...orderSummary]);
//                                 } else if (item.name === orderSummary[index].name && item.qtd === 1) {
//                                     orderSummary.splice(index, 1);
//                                     setOrderSummary([...orderSummary]);
//                                 }
//                             }}
//                         />
//                         <label>{item.qtd}</label>
//                         <input
//                             className="button-manipular-qtd"
//                             id="aumentar-qtd"
//                             type="button"
//                             value="+"
//                             onClick={() => {
//                                 if (item.name === orderSummary[index].name) {
//                                     orderSummary[index].qtd++;
//                                     setOrderSummary([...orderSummary]);
//                                 }
//                             }}
//                         />
//                         <input
//                             className="button-excluir-item"
//                             id="excluir-item"
//                             type="image"
//                             src={Lixeira}
//                             alt="icone-lixeira"
//                             onClick={() => {
//                                 orderSummary.splice(index, 1);
//                                 setOrderSummary([...orderSummary]);
//                             }}
//                         />
//                     </li>
//                 </>
//             ))}
//         </ul>
//       }
//     )}
//     </>
//   )
// }

//         )

// export default Order,