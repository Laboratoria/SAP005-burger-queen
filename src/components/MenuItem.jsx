function MenuItem({name, flavor, complement, price, addToCart, sku}) {
    return(
        <div className="menu-item">
            <span className="menu-text">{`${name} ${flavor} ${complement} - R$${price},00`}</span>
            <span className="menu-action">
                <button onClick={() => addToCart(sku)} >+</button>
            </span>
        </div>
    )
}
export default MenuItem;