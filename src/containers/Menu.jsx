import MenuItem from "../components/MenuItem";

function Menu({ menu, addToCart }) {


    return (
        <div id="menu">
            <h2>Menu</h2>
            <div id="menu-area">
                {
                    Object.keys(menu).map((key, index) => (
                        <MenuItem
                            name={menu[key].name}
                            flavor={menu[key].flavor}
                            complement={menu[key].complement}
                            price={menu[key].price}
                            addToCart={addToCart}
                            sku={key}


                        />



                    ))
                }

            </div>
        </div>
    );
}

export default Menu;