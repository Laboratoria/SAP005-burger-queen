import React, { Fragment, useState, useEffect, useCallback } from 'react'
import { getProducts } from '../../services/index'
import Button from '../../components/Button/Button'
import Navbar from '../../components/Navbar/Navbar'
//import MenuItens from '../../components/menu-itens/menu-itens'
import OrderItens from '../../components/order-itens/order-itens'
import OrderSection from '../../components/order-section/order-section'
import ReactModal from 'react-modal'
import Input from '../../components/Input/Input'
import MenuSection from '../../components/menu-section/menu-section'
import './style.css'

export const NewOrder = () => {

  const [showModal, setShowModal] = useState(false)
  const [products, setProducts] = useState([])
  const [checkedMenu, setCheckedMenu] = useState('all-day')
  const [simpleBurger, setSimpleBurger] = useState({})
  const [doubleBurger, setDoubleBurger] = useState({})
  const [drinks, setDrinks] = useState([])
  const [misto, setMisto] = useState({})
  const [burgerType, setBurgerType] = useState([])
  const [burgerFlavor, setBurgerFlavor] = useState('')
  const [burgerExtra, setBurgerExtra] = useState(null)
  const [orderItems, setOrderItems] = useState([])

  const storeProducts = useCallback(async () => {
    const products = await getProducts();
    setProducts(products)
    setSimpleBurger(products.find((product) => product.id === 33));
    setDoubleBurger(products.find((product) => product.id === 42));
    setDrinks(
      products.filter(
        (product) =>
          product.name !== 'Misto quente' && product.type === 'breakfast'
      )
    );
    setMisto(products.find((product) => product.name === 'Misto quente'));
  }, []);
  useEffect(() => {
    storeProducts();
  }, [storeProducts]);

  const addOrUpdateOrderItem = (event) => {
    const newArray = [...orderItems]
    const productId = event.target.attributes['value'].value
    const orderItem = newArray.filter((orderItem) => orderItem.product_id === productId)[0]
    if (orderItem !== null && orderItem !== undefined) {
      orderItem.product_quantity = Number(orderItem.product_quantity) + 1
      newArray.splice(newArray.findIndex(orderItem => orderItem.product_id === productId), 1)
      newArray.push(orderItem)
    } else {
      newArray.push(
        {
          'product_id': event.target.attributes['value'].value,
          'product_name': event.target.attributes['description'].value,
          'product_price': event.target.attributes['price'].value,
          'product_quantity': 1
        }
      )
    }
    setOrderItems(newArray)
  }

  const incrementQuantity = (event) => {
    const productId = event.target.attributes['value'].value
    const newArray = [...orderItems]
    const orderItem = newArray.filter((orderItem) => orderItem.product_id === productId)[0]
    newArray.splice(newArray.findIndex(orderItem => orderItem.product_id === productId), 1)
    orderItem.product_quantity = Number(orderItem.product_quantity) + 1
    newArray.push(orderItem)
    setOrderItems(newArray)
  }

  const decrementQuantity = (event) => {
    const productId = event.target.attributes['value'].value
    const newArray = [...orderItems]
    const orderItem = newArray.filter((orderItem) => orderItem.product_id === productId)[0]
    if (orderItem.product_quantity !== 1) {
      newArray.splice(newArray.findIndex(orderItem => orderItem.product_id === productId), 1)
      orderItem.product_quantity = Number(orderItem.product_quantity) - 1
      newArray.push(orderItem)
      setOrderItems(newArray)
    }
  }

  const deletePOrderItem = (event) => {
    const productId = event.target.attributes['value'].value
    const newArray = [...orderItems]
    const orderItem = newArray.filter((orderItem) => orderItem.product_id === productId)[0]
    newArray.splice(newArray.findIndex(orderItem => orderItem.product_id === productId), 1)
    setOrderItems(newArray)
  }

  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      {products.length > 0 && simpleBurger && doubleBurger && misto && drinks.length > 0 &&
        <main>
          <div className='container-menu'>
            <div className='radio-tile-group-menu'>
              <div className='input-container-menu'>
                <Input
                  inputId='breakfast'
                  inputClassName='radio-button-menu'
                  inputType='radio'
                  inputName='radio'
                  inputValue='breakfast'
                  inputChecked={checkedMenu === 'breakfast'}
                  inputOnChange={
                    (event) => {
                      event.preventDefault()
                      setCheckedMenu('breakfast')
                    }
                  }
                />
                <div className='radio-tile-menu'>
                  <label htmlFor='breakfast' className='radio-tile-label-menu'>Café da manhã</label>
                </div>
              </div>
              <div className='input-container-menu'>
                <Input
                  inputId='all-day'
                  inputClassName='radio-button-menu'
                  inputType='radio'
                  inputName='radio'
                  inputValue='all-day'
                  inputChecked={checkedMenu === 'all-day'}
                  inputOnChange={
                    (event) => {
                      event.preventDefault()
                      setCheckedMenu('all-day')
                    }
                  }
                />
                <div className='radio-tile-menu'>
                  <label htmlFor='all-day' className='radio-tile-label-menu'>Almoço/Jantar</label>
                </div>
              </div>
            </div>
          </div>

          <section className={checkedMenu === 'breakfast' ? 'section-breakfast' : 'hide, section-breakfast'}>
            <div className='div-container-menu-section'>
              <MenuSection
                menuSectionTitle='Lanches'
                products={[misto]}
                onClick={
                  (event) => {
                    event.preventDefault()
                    console.log('misto ')
                  }
                }
              />
              <MenuSection
                menuSectionTitle='Bebidas'
                products={drinks}
                onClick={
                  (event) => {
                    event.preventDefault()
                    console.log('bebida-quente')
                  }
                }
              />
            </div>
          </section>
          <section className={checkedMenu === 'all-day' ? 'section-all-day' : 'hide, section-all-day'}>
            <div className='div-container-menu-section'>
              <MenuSection
                menuSectionTitle='Hambúrgueres'
                products={
                  [simpleBurger, doubleBurger]
                }
                onClick={
                  (event) => {
                    event.preventDefault()
                    const productId = event.target.attributes['value'].value
                    setBurgerType(productId === '33' ? 'simples' : 'duplo')
                    setShowModal(true)

                  }
                }
              />
              <MenuSection
                menuSectionTitle='Acompanhamentos'
                products={products.filter((product) => product.sub_type === 'side')}
                onClick={
                  (event) => {
                    event.preventDefault()
                    addOrUpdateOrderItem(event)
                  }

                }
              />
              <MenuSection
                menuSectionTitle='Bebidas'
                products={products.filter((product) => product.sub_type === 'drinks')}
                onClick={
                  (event) => {
                    event.preventDefault()
                    console.log('bebidas-frias')
                  }
                }
              />
            </div>
          </section>
        </main>}
      <OrderSection
        items={orderItems}
        plus={
          (event) => {
            event.preventDefault()
            incrementQuantity(event)
          }
        }
        minus={
          (event) => {
            event.preventDefault()
            decrementQuantity(event)
          }
        }
      />
      <ReactModal
        className='modal'
        isOpen={showModal}
        contentLabel='Minimal Modal Example'
        id="modal"
      >
        <p>Escolha o tipo do hambúrguer:</p>
        <div className='container-modal-option'>
          <div className='radio-tile-modal-option'>

            <div className='input-container-modal-option'>
              <Input
                inputRequired
                inputId='meat'
                inputClassName='radio-button-modal-option'
                inputType='radio'
                inputName='radio-burger-type'
                inputValue='meat'
                inputOnChange={
                  () => {
                    setBurgerFlavor('carne')
                  }
                }
              />
              <div className='radio-tile-modal-option'>
                <label htmlFor='radio-burger-type' className='radio-tile-label-modal-option'>Carne</label>
              </div>
            </div>

            <div className='input-container-modal-option'>
              <Input
                inputRequired
                inputId='chicken'
                inputClassName='radio-button-modal-option'
                inputType='radio'
                inputName='radio-burger-type'
                inputValue='chicken'
                inputOnChange={
                  () => {
                    setBurgerFlavor('frango')
                  }
                }
              />
              <div className='radio-tile-modal-option'>
                <label htmlFor='radio-burger-type' className='radio-tile-label-modal-option'>Frango</label>
              </div>
            </div>

            <div className='input-container-modal-option'>
              <Input
                inputRequired
                inputId='veggie'
                inputClassName='radio-button-modal-option'
                inputType='radio'
                inputName='radio-burger-type'
                inputValue='veggie'
                inputOnChange={
                  () => {
                    setBurgerFlavor('vegetariano')
                  }
                }
              />
              <div className='radio-tile-modal-option'>
                <label htmlFor='radio-burger-type' className='radio-tile-label-modal-option'>Vegetariano</label>
              </div>
            </div>
          </div>
        </div>

        <p>Adicionais + R$1,00:</p><br />
        <div className='container-modal-option'>
          <div className='radio-tile-modal-option'>

            <div className='input-container-modal-option'>
              <Input
                inputId='cheese'
                inputClassName='radio-button-modal-option'
                inputType='radio'
                inputName='radio-extra'
                inputValue='cheese'
                inputOnChange={
                  () => {
                    setBurgerExtra('queijo')
                  }
                }
              />
              <div className='radio-tile-modal-option'>
                <label htmlFor='radio-extra' className='radio-tile-label-modal-option'>Queijo</label>
              </div>
            </div>

            <div className='input-container-modal-option'>
              <Input
                inputId='egg'
                inputClassName='radio-button-modal-option'
                inputType='radio'
                inputName='radio-extra'
                inputValue='egg'
                inputOnChange={
                  () => {
                    setBurgerExtra('ovo')
                  }
                }
              />
              <div className='radio-tile-modal-option'>
                <label htmlFor='radio-extra' className='radio-tile-label-modal-option'>Ovo</label>
              </div>
            </div>

            <div>
              <Button
                name='Cancelar'
                className='btn-cancel'
                type='submit'
                onClick={
                  () => {
                    setShowModal(false)
                  }
                }
              />
              <Button
                name='Confirmar'
                className='btn-confirm'
                type='submit'
                onClick={
                  (event) => {
                    event.preventDefault()
                    const selected = products
                      .filter(product => product.name === 'Hambúrguer ' + burgerType)
                      .filter(product => product.flavor === burgerFlavor)
                      .filter(product => product.complement === burgerExtra)[0]
                    const newArray = [...orderItems]
                    const orderItem = newArray.filter((orderItem) => orderItem.product_id === selected.id)[0]

                    if (orderItem !== null && orderItem !== undefined) {
                      orderItem.product_quantity = Number(orderItem.product_quantity) + 1
                      newArray.splice(newArray.findIndex(orderItem => orderItem.product_id === selected.id), 1)
                      newArray.push(orderItem)
                    } else {
                      newArray.push(
                        {
                          'product_id': String(selected.id),
                          'product_name': selected.name + ' de ' + selected.flavor + ' com ' + selected.complement,
                          'product_price': selected.price,
                          'product_quantity': 1
                        }
                      )
                    }
                    setOrderItems(newArray)
                    setShowModal(false)

                  }
                }
              />
            </div>

          </div>
        </div>
      </ReactModal>
    </Fragment>
  )
}
