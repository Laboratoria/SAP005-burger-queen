import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { FaRegClock } from 'react-icons/fa'
import { GiKnifeFork } from 'react-icons/gi'
import { FaDoorOpen } from 'react-icons/fa'
import './navbar.css'

export default function Navbar() {
  return (
    <Fragment>
      <header className='responsive-wrap-navbar'>
        <p className='label-nav'><FaUserCircle className='icon-nav' /><br />{localStorage.getItem('userName')}</p>
        <Link className='link' to='/status-order'><p className='label-nav'><FaRegClock className='icon-nav' /><br />Status Pedidos</p></Link>
        {
          localStorage.getItem('userRole') === 'hall'
            ? <Link Link className='link' to='/new-order'><p className='label-nav'><GiKnifeFork className='icon-nav' /><br />Novo Pedido</p></Link>
            : null
        }
        <Link className='link' to='/'><p className='label-nav'><FaDoorOpen className='icon-nav' /><br />Sair</p></Link>
      </header>
    </Fragment >
  )
}
