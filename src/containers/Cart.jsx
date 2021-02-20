function Cart({total, cart, menu, reduceCart}) {
    return (
        <div id="cart">
            <h2>Cart</h2>
            <div id="cart-area">
                {
                    Object.keys(cart).map((sku, index) => (
                        <div className="cart-item" key={index}>
                            <span className="item-text"> {menu[sku].name} {menu[sku].flavor} {menu[sku].complement}  x {cart[sku]}</span>
                            <span className="item-total"> R${menu[sku].price}</span>
                            <button className="remove-button" onClick={() => reduceCart(sku)}>-</button> 
                        </div>
                    ))
                }
                <div id="cart-total">
                    <div>
                        <span>Total</span>
                        <p>
                            R$<span id="total-amount">{total}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;