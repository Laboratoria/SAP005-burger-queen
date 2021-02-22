/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Menu from "../../containers/Menu";
import Cart from "../../containers/Cart";
import { USER } from "../../components/api";
import Logo from '../../images/logoLaranja.png';
import { MenuOrders, DivMenus, LogoHall } from '../../components/stylesMenu';
import { Link } from 'react-router-dom';


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
        <div>
            <Link to='/orders'>
                <button
                    style={{
                        'border': 'none',
                        'outline': 'none',
                        'backgroundColor': '#F57F17',
                        'textAlign': 'center',
                        'fontSize': '30px',
                        'color': '#fff',
                        'cursor': 'pointer',
                        'marginLeft': '990px',
                        'borderRadius': '0 0 10px 10px',
                        'height': '50px',     
                        'width':'200px',
                        'boxShadow': '9px 9px 19px #909092, -9px -9px 19px #fff'
                    }}
                >Pedidos
                    </button>
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
                <Cart
                    total={cartTotal}
                    menu={menuData}
                    cart={cartData}
                    reduceCart={reduceFromCart} />

            </MenuOrders>

        </DivMenus>
        </div>
    );
}

export default Hall;
