/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Menu from "../../containers/Menu"
import Cart from "../../containers/Cart"
import { USER } from "../../components/api";


const Hall = () => {
    const [show, setShow] = useState(true)
    const [menuData, setMenuData] = useState({});
    const [cartData, setCartData] = useState({});
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(async function(token){
        const { url, options } = USER(token);
        const response = await fetch(url, options);
        const json = await response.json();
        setMenuData(json);
        // setMenuData(json);
        const breakfast = () => ( json.filter(item => item.type === 'breakfast'))
        setMenuData(breakfast)
    })

    // const breakfast = menuData.filter(item => item.type === 'breakfast')
    // setMenuData(breakfast)
    // const breakfast = menuData.slice(0, 4);
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

    return (
        <div id="menu-cart">
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
                       {/* {cafe} */}
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
