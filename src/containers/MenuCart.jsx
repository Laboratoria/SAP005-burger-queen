import Menu from "./Menu";
import Cart from "./Cart"
import { useState, useEffect } from "react";

function MenuCart() {
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

    const [menuData, setMenuData] = useState({
        
        "1": {
            productName: "pri",
            price: 199
        },
        "2": {
            productName: "suelen",
            price: 699
        },
        "3": {
            productName: "silveira",
            price: 1999
        },
    });

    const [cartData, setCartData] = useState({});
    const [cartTotal, setCartTotal] = useState(0);


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
    
    return (<div id="menu-cart">
        <Menu
            menu={menuData}
            addToCart={addToCart} />
        <Cart
            total={cartTotal}
            menu={menuData}
            cart={cartData}
            reduceCart={reduceFromCart} />
    </div>
    );
}

export default MenuCart;