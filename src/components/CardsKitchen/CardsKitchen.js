// import React, { useEffect, useState, useCallback } from 'react';
// import { useHistory, Link } from "react-router-dom";
// import Button from '../../components/Button/Button.js'


// const CardsKitchen = (props) => {




// function CardsKitchen() {
//     useEffect(() => {
//         getOrders()
//     }, [])

//     const status = sessionStorage.getItem("status");
//     const back = sessionStorage.getItem("back");

//     const history = useHistory()
//     const menu = (e) => {
//         e.preventDefault();
//         history.push(`/${back}`);
//     }

//     const routerStatus = () => {
//         history.push('/status');
//     }

//     const token = localStorage.getItem("token");
//     const [orders, setOrders] = useState('');

//     const getOrders = () => {
//         if (status) {
//             fetch("https://lab-api-bq.herokuapp.com/orders", {
//                 headers: {
//                     "accept": "application/json",
//                     "Authorization": `${token}`
//                 },

//             })
//                 .then((response) => response.json())
//                 .then((json) => {
//                     const order = json.filter(item => item.status === status)
//                     setOrders(order)
//                     console.log(order)
//                 })
//         } else {
//             fetch("https://lab-api-bq.herokuapp.com/orders", {
//                 headers: {
//                     "accept": "application/json",
//                     "Authorization": `${token}`
//                 },

//             })
//                 .then((response) => response.json())
//                 .then((json) => {
//                     setOrders(json)
//                 })
//         }
//     }

//     return (
//         <div className="GetAllOrders">
//             <div className="SalaoHeader">
//                 {orders && orders.map((item) => (
//                     <TemplateGetOrders
//                         divClassName="logout"
//                         divKey={Math.random()}
//                         divOnClick={() => {
//                             sessionStorage.setItem("itemId", item.id)
//                             routerStatus()
//                         }}
//                         divClassName="cards"
//                         itemStatus={item.status}
//                         clientNameKey={Math.random()}
//                         clientName={item.client_name}
//                         itemIdKey={Math.random()}
//                         itemId={item.id}
//                         itemCreatedAtKey={Math.random()}
//                         itemCreatedAt={item.createdAt}
//                     />
//                 ))}
//             </div>
//             <Button
//                 buttonOnClick={(e) => menu(e)}
//                 buttonText="Voltar"
//             />
//         </div>
//     )
// }


//     return (
//         <section>
//             {props.clientOrder.map((order) => (
//                 <div className="cards">
//                     <p className="cards-order-iten">{order.item} R${order.price},00</p>
//                     <p className="cards-order-client">Cliente: {props.customer}</p>
//                     <p className="cards-order-table">Mesa: {props.table}</p>
//                     <p className="cards-order-status">Status: {props.status}</p>
//                 </div>
//             ))}
//             <p>{props.time}</p>
//             <div>
//                 <Button title='Pedido Pronto' />
//             </div>
//         </section>
//     );
// }

// export default CardsKitchen;