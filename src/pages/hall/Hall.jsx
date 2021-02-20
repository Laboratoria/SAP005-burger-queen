import { useState } from "react";

import Menu from "../../containers/Menu"
import Cart from "../../containers/Cart"
import { useEffect } from "react";

const Hall = () => {
    const [show, setShow] = useState(true)
    // const [show, setShow] = useState(true)
    //     //const [menu, setMenu] = useState([]);
    //     // let token = localStorage.getItem("token");

    //     // useEffect(() => {
    //     //     fetch('https://lab-api-bq.herokuapp.com/products', {
    //     //         method: 'GET',
    //     //         headers: {
    //     //             'access-control': 'allow-origin',
    //     //             'Content-Type': 'application/json',
    //     //             'Authorization': `${token}`
    //     //         },

    //     //     })
    //     //         .then(response => response.json())
    //     //         .then((response) => {
    //     //             setMenu(response)
    //     //         })
    //     // })

    //     // const data = [];
    //     // for (const menus of menu) {
    //     //     data.push(
    //     //         <div key={menus.id}>
    //     //             <p>{menus.name}</p>
    //     //             <p>R${menus.price},00</p>
    //     //             <p>{menus.flavor}</p>
    //     //             <p>{menus.complement}</p>
    //     //             <button className='btn-adition'>+</button>
    //     //         </div>
    //     //     )
    //     // }
    //     // const breakfast = data.slice(0, 4);
    //     // const allDay = data.slice(4, 29);



    //     // if (breakfast){
    //     //     <p>deu certo</p>
    //     // } else {<p>null</p>}
    //     return (
    //         <div>
    //             <div className="container">
    //                 <div id="app-holder">
    //                     <div>
    //                         <MenuCart  />
    //                     </div>
    //                 </div>
    //             </div>

    //             <h1>
    //                 Aqui é Hall
    //                 </h1>
    //             <p>Menu</p>
    //             <div className='menus'></div>
    //             <div className='Cardapio'>

    // <button onClick={() => setShow(true)}>Café da Manhã</button>
    // <button onClick={() => setShow(false)}>Hamburgueria</button>
    // {
    //     show ?
    //         <div>
    //             {/* {breakfast} */}

    //         </div>
    //         :
    //         <div>
    //             {/* {allDay} */}

    //         </div>
    // }
    //             </div>
    //         </div>
    //     )
    // }
    const [menuData, setMenuData] = useState({});
    const [cartData, setCartData] = useState({});
    const [cartTotal, setCartTotal] = useState(0);

    let token = localStorage.getItem("token");
    useEffect(() => {
        fetch('https://lab-api-bq.herokuapp.com/products', {
            method: 'GET',
            headers: {
                'access-control': 'allow-origin',
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },

        })
            .then(response => response.json())
            .then((response) => {
                setMenuData(response)
            })
    })




    // const breakfast = menuData.slice(0, 4);
    // const allDay = menuData.slice(4, 29);

    useEffect(() => {
        let total = 0;
        Object.keys(cartData).map((sku) => {
            let qty = cartData[sku];
            let price = menuData[sku].price;
            return (total += qty * price);

        })
        setCartTotal(total);

    }, [cartData])
    const addToCart = sku => {
        let newCart = { ...cartData };

        if (sku in cartData) {
            newCart[sku] += 1;
        }
        else {
            newCart[sku] = 1;
        }

        setCartData(newCart);
    };

    const reduceFromCart = sku => {
        let newCart = { ...cartData };

        if (sku in cartData) {
            newCart[sku] -= 1;

            if (newCart[sku] < 1) delete newCart[sku];
        }
        setCartData(newCart);
    };

    // const breakfast = () => menuData.slice(0, 4);
    // const allDay = () => menuData.slice(4, 29);

    

    return (<div id="menu-cart">
        <Menu
            menu={menuData}
            addToCart={addToCart} />
        <Cart
            total={cartTotal}
            menu={menuData}
            cart={cartData}
            reduceCart={reduceFromCart} />
        <button onClick={() => setShow(true)}>Café da Manhã</button>
        <button onClick={() => setShow(false)}>Hamburgueria</button>
        {
            show ?
                <div>
                    {/* {menuData.slice(0, 4)} */}

                </div>
                :
                <div>
                    {/* {menuData.slice(4, 29)} */}

                </div>
        }
    </div>
    );
}

export default Hall;
