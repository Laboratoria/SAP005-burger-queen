/* eslint-disable react/jsx-no-duplicate-props */
import React, { Fragment, useState, useEffect } from 'react'
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
  const [burgerMeat, setBurgerMeat] = useState('')
  const [burgerChicken, setBurgerChicken] = useState('')
  const [burgerVeggie, setBurgerVeggie] = useState('')
  const [extraCheese, setExtraCheese] = useState('')
  const [extraEgg, setExtraEgg] = useState('')


  useEffect(() => {
    const storeProducts = async () => {
      const response = await getProducts()
      setProducts(response)
    }
    storeProducts()
  }, [])

  return (
    <Fragment>
      {/*<header>
        <Navbar />
      </header>
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
                  () => {
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
                  () => {
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

        <section className='section-breakfast' className={checkedMenu === 'breakfast' ? '' : 'hide'}>
          <div className='div-container-menu-section'>
            <MenuSection
              menuSectionTitle='Lanches'
              products={products.filter((product) => product.name === 'Misto quente')}
              onClick={
                () => {
                  console.log('misto')
                }
              }
            />
            <MenuSection
              menuSectionTitle='Bebidas'
              products={products.filter((product) => product.name !== 'Misto quente' && product.type === 'breakfast')}
              onClick={
                () => {
                  console.log('bebida-quente')
                }
              }
            />
          </div>
        </section>
        <section className='section-all-day' className={checkedMenu === 'all-day' ? '' : 'hide'}>
          <div className='div-container-menu-section'>
            <MenuSection
              menuSectionTitle='Hambúrgueres'
              products={products.filter((product) => product.sub_type === 'hamburguer' && (product.id === 33 || product.id === 42))}
              onClick={
                () => {
                  setShowModal(true)
                }
              }
            />
            <MenuSection
              menuSectionTitle='Acompanhamentos'
              products={products.filter((product) => product.sub_type === 'side')}
              onClick={
                () => {
                  console.log('acompanhamento')
                }
              }
            />
            <MenuSection
              menuSectionTitle='Bebidas'
              products={products.filter((product) => product.sub_type === 'drinks')}
              onClick={
                () => {
                  console.log('bebidas-frias')
                }
              }
            />
          </div>
        </section>
      </main>*/}
      <OrderSection />
      <ReactModal
        className='modal'
        isOpen={showModal}
        contentLabel='Minimal Modal Example'
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
                    setBurgerMeat()
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
                    setBurgerChicken()
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
                    setBurgerVeggie()
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
                inputRequired
                inputId='cheese'
                inputClassName='radio-button-modal-option'
                inputType='radio'
                inputName='radio-extra'
                inputValue='cheese'
                inputOnChange={
                  () => {
                    setExtraCheese()
                  }
                }
              />
              <div className='radio-tile-modal-option'>
                <label htmlFor='radio-extra' className='radio-tile-label-modal-option'>Queijo</label>
              </div>
            </div>

            <div className='input-container-modal-option'>
              <Input
                inputRequired
                inputId='egg'
                inputClassName='radio-button-modal-option'
                inputType='radio'
                inputName='radio-extra'
                inputValue='egg'
                inputOnChange={
                  () => {
                    setExtraEgg()
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
                  async (event) => {
                    event.preventDefault()
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
