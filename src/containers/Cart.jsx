import { Textarea, SpamQtd, ProductsOrders, SpanNameOrders, SpanFlavor, DivTotal, Complement, Soma, Total, Itens } from '../components/stylesMenu';
function Cart({ total, cart, menu, reduceCart }) {
    return (
        <div id="cart">
            <SpamQtd>
                <Itens>Item</Itens>
                <p></p>
                <p></p>
                <Itens>Qtd.</Itens>
                <p></p>
                <Itens>Valor</Itens>
            </SpamQtd>
            <div id="cart-area">
                {
                    Object.keys(cart).map((sku, index) => (
                        <ProductsOrders className="cart-item" key={index}>
                            <SpanNameOrders className="item-text">
                                <Itens>{menu[sku].name}</Itens>
                                <Itens>{cart[sku]}</Itens>
                                <span className="item-total"> 
                                R$ {menu[sku].price},00 
                                <button className="remove-button" onClick={() => reduceCart(sku)}>-</button>
                                </span>
                            </SpanNameOrders>
                            <SpanFlavor>
                                <Itens>{menu[sku].flavor}</Itens>
                                <Complement>{menu[sku].complement} </Complement>
                            </SpanFlavor>


                        </ProductsOrders >
                    ))
                }
                <div id="cart-total">

                    <Textarea name="" id="" cols="47" rows="2" placeholder="observações" ></Textarea>
                    <DivTotal>
                        <Total>Total </Total>
                        <Soma>
                            R$ <span id="total-amount">{total},00</span>
                        </Soma>
                    </DivTotal>
                </div>
            </div>
        </div>
    );
}

export default Cart;