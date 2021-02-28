import { BtnAdition, Products, Name, Complement, SpamMenuItem, SpanFlavor, SpanName } from '../components/stylesMenu';
function MenuItem({ name, flavor, complement, price, addToCart, sku }) {
    return (
        <Products>
            <SpamMenuItem>
                <SpanName className="menu-text">
                    <Name>{`${name}`}</Name>
                    <p>{`R$ ${price},00`}</p>
                </SpanName>
                <SpanFlavor>
                    <p>{` ${flavor}`} </p>
                    <Complement>{`${complement}`}</Complement>
                </SpanFlavor>
            </SpamMenuItem>
            <span className="menu-action">
                <BtnAdition onClick={() => addToCart(sku)}>+</BtnAdition>
            </span>
        </Products>
    )
}
export default MenuItem;