/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Menu from "../../containers/Menu";
import Cart from "../../containers/Cart";
import Logo from '../../images/logoLaranja.png';
import { USER } from "../../components/api";
import { MenuOrders, DivMenus, LogoHall } from '../../components/stylesMenu';

const Hall = () => {
    const [menuData, setMenuData] = useState({});
    const [cartData, setCartData] = useState({});
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(async function (token) {
        const { url, options } = USER(token);
        const response = await fetch(url, options);
        const json = await response.json();
        setMenuData(json);
    })

    useEffect(() => {
        let total = (0);
        Object.keys(cartData).map((sku) => {
            let qty = (cartData[sku]);
            let price = (menuData[sku].price);
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
        <div>
            <Link to='/orders'>
                <ButtonPedidos>Pedidos</ButtonPedidos>
            </Link>
            <LogoHall src={Logo} alt='' width='400' />
            {/* <MenuTitulo>Menu</MenuTitulo> */}
            <DivMenus>
            <div>
                <Menu
                    menu={menuData}
                    addToCart={addToCart} />
            </div>
            <MenuOrders>
                <form action="submit">
                    <Cart
                        total={cartTotal}
                        menu={menuData}
                        cart={cartData}
                        reduceCart={reduceFromCart} 
                    />
                </form>
            </MenuOrders>
        </DivMenus>
        </div>
    );
}

export default Hall;
