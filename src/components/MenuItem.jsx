import {BtnAdition, Products}  from '../components/stylesMenu';
function MenuItem({ name, flavor, complement, price, addToCart, sku }) {
    return (
        <Products>
            <span className="menu-text">
                <p>{`${name}`}</p>
                <p>{` ${flavor}`} </p>
                <p>{`${complement}`}</p>
                <p>{`R$ ${price},00`}</p>
            </span>
            <span className="menu-action">
                <BtnAdition onClick={() => addToCart(sku)} >+</BtnAdition>
            </span>
        </Products>
    )
}
export default MenuItem;