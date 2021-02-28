import React, { Fragment, useCallback, useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import MenuSection from '../../components/menu-section/menu-section'
import Navbar from '../../components/Navbar/Navbar'
import OrderSection from '../../components/order-section/order-section'
import { getProducts } from '../../services/index'
import './style.css'

export const NewOrder = () => {

  const [showModal, setShowModal] = useState(false)
  const [products, setProducts] = useState([])
  const [checkedMenu, setCheckedMenu] = useState('all-day')
  const [burgerType, setBurgerType] = useState([])
  const [burgerFlavor, setBurgerFlavor] = useState('')
  const [burgerExtra, setBurgerExtra] = useState(null)

  const [orderItems, setOrderItems] = useState([])

  const storeProducts = useCallback(async () => {
    const products = await getProducts();
    setProducts(products)
  }, []);

  useEffect(() => {
    storeProducts();
  });


  const addOrUpdateOrderItem = useCallback(
    (event) => {
      const newOrderItens = [...orderItems]
      const productId = event.target.attributes['id'].value
      const orderItem = newOrderItens.filter((orderItem) => orderItem.product_id === productId)[0]
      if (orderItem !== null && orderItem !== undefined) {
        orderItem.product_quantity = Number(orderItem.product_quantity) + 1
        newOrderItens.splice(newOrderItens.findIndex(orderItem => orderItem.product_id === productId), 1)
        newOrderItens.push(orderItem)
      } else {
        newOrderItens.push(
          {
            'product_id': event.target.attributes['id'].value,
            'product_name': event.target.attributes['name'].value,
            'product_price': event.target.attributes['price'].value,
            'product_quantity': 1
          }
        )
      }
      setOrderItems(newOrderItens)
    }, [orderItems])

  const incrementQuantity = useCallback((event) => {
    event.preventDefault()
    const idMap = event.target.attributes['id']
    if (idMap) {
      const productId = event.target.attributes['id'].value
      const newOrderItens = [...orderItems]
      const orderItem = newOrderItens.filter((orderItem) => orderItem.product_id === productId)[0]
      newOrderItens.splice(newOrderItens.findIndex(orderItem => orderItem.product_id === productId), 1)
      orderItem.product_quantity = Number(orderItem.product_quantity) + 1
      newOrderItens.push(orderItem)
      setOrderItems(newOrderItens)
    }
  }, [orderItems])

  const decrementQuantity = useCallback((event) => {
    event.preventDefault()
    const idMap = event.target.attributes['id']
    if (idMap) {
      const productId = event.target.attributes['id'].value
      const newOrderItens = [...orderItems]
      const orderItem = newOrderItens.filter((orderItem) => orderItem.product_id === productId)[0]
      if (orderItem.product_quantity !== 1) {
        newOrderItens.splice(newOrderItens.findIndex(orderItem => orderItem.product_id === productId), 1)
        orderItem.product_quantity = Number(orderItem.product_quantity) - 1
        newOrderItens.push(orderItem)
        setOrderItems(newOrderItens)
      }
    }
  }, [orderItems])

  const deleteOrderItem = useCallback((event) => {
    const idMap = event.target.attributes['id']
    if (idMap) {
      event.preventDefault()
      const productId = event.target.attributes['id'].value
      const newOrderItens = [...orderItems]
      newOrderItens.splice(newOrderItens.findIndex(orderItem => orderItem.product_id === productId), 1)
      setOrderItems(newOrderItens)
    }
  }, [orderItems])

  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      {
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

          <section className={checkedMenu === 'breakfast' ? 'section-breakfast' : 'hide section-breakfast'}>
            <div className='div-container-menu-section'>
              <MenuSection
                menuSectionTitle='Lanches'
                products={products.filter((product) => product.name === 'Misto quente')}
                onClick={
                  (event) => {
                    event.preventDefault()
                    addOrUpdateOrderItem(event)
                  }
                }
              />
              <MenuSection
                menuSectionTitle='Bebidas'
                products={products.filter(product => product.name !== 'Misto quente' && product.type === 'breakfast')}
                onClick={
                  (event) => {
                    event.preventDefault()
                    addOrUpdateOrderItem(event)
                  }
                }
              />
            </div>
          </section>
          <section className={checkedMenu === 'all-day' ? 'section-all-day' : 'hide section-all-day'}>
            <div className='div-container-menu-section'>
              <MenuSection
                menuSectionTitle='Hambúrgueres'
                products={
                  products.filter((product) => product.id === 33 || product.id === 42)
                }
                onClick={
                  (event) => {
                    event.preventDefault()
                    const productId = event.target.attributes['id'].value
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
                    addOrUpdateOrderItem(event)
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

        remove={
          (event) => {
            event.preventDefault()
            deleteOrderItem(event)
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
                inputChecked='meat'
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
                inputId='no-extra'
                inputClassName='radio-button-modal-option'
                inputType='radio'
                inputName='radio-extra'
                inputValue='no-extra'
                inputChecked='no-extra'
                inputOnChange={
                  () => {
                    setBurgerExtra(null)
                  }
                }
              />
              <div className='radio-tile-modal-option'>
                <label htmlFor='radio-extra' className='radio-tile-label-modal-option'>Sem Adicionais</label>
              </div>
            </div>

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
                  useCallback((event) => {
                    event.preventDefault()
                    const selected = products
                      .filter(product => product.name === 'Hambúrguer ' + burgerType)
                      .filter(product => product.flavor === burgerFlavor)
                      .filter(product => product.complement === burgerExtra)[0]
                    const newOrderItens = [...orderItems]
                    const orderItem = newOrderItens.filter((orderItem) => orderItem.product_id === selected.id)[0]

                    if (orderItem !== null && orderItem !== undefined) {
                      orderItem.product_quantity = Number(orderItem.product_quantity) + 1
                      newOrderItens.splice(newOrderItens.findIndex(orderItem => orderItem.product_id === selected.id), 1)
                      newOrderItens.push(orderItem)
                    } else {
                      newOrderItens.push(
                        {
                          'product_id': String(selected.id),
                          'product_name': selected.name + selected.flavor + `${selected.complement}`,
                          'product_price': selected.price,
                          'product_quantity': 1
                        }
                      )
                    }
                    setOrderItems(newOrderItens)
                    setShowModal(false)
                  }, [burgerType, burgerFlavor, burgerExtra, orderItems, products])
                }
              />
            </div>

          </div>
        </div>
      </ReactModal>
    </Fragment>
  )
}
