import { Fragment } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { getOrders } from '../../../services/services'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
//import Button from '../button/button'
import './order-info.css'

export const OrderInfo = () => {

  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <section className='card-order-info'>

          <p className='order-status'>{getOrders.status}</p>

          <div className='order-info'>
            <p className='table'>Mesa:{getOrders.table}</p>
            < FaUserAlt className='icon' /> <p className='client-name'>{getOrders.client_Name}</p>
            <div className='order-products'>
              <p className='products-name'>{getOrders.products.qtd}</p>
              <p className='products-price'>{getOrders.products.name}</p>
            </div>
            {/* <Button>
          name='delivery'
          className='btn-order'
          type='submit'
          onClick={}
        </Button> */}
          </div>

        </section>

      </main>
      <Footer />
    </Fragment>
  )
}
