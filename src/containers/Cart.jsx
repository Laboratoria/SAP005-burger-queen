import {Textarea}  from '../components/stylesMenu';

function Cart({ total, cart, menu, reduceCart }) {
    return (
        <div id="cart">
            <h3>Item                      Qtd.                Valor</h3>
            <div id="cart-area">
                {
                    Object.keys(cart).map((sku, index) => (
                        <div className="cart-item" key={index}>
                            <span className="item-text"> {menu[sku].name} {menu[sku].flavor} {menu[sku].complement}  x <p className='order-qty'>{cart[sku]}</p></span>
                            <span className="item-total"> R$ {menu[sku].price},00</span>
                            <button className="remove-button" onClick={() => reduceCart(sku)}>-</button>
                        </div>
                    ))
                }
                <div id="cart-total">
                    <Textarea name="" id="" cols="40" rows="2" placeholder="observações" ></Textarea>
                    <div>
                        <span>Total</span>
                        <p>
                            R$ <span id="total-amount">{total},00</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;