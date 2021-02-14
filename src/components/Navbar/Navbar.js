import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css';
import { FaUserCircle } from 'react-icons/fa'
import { FaRegClock } from 'react-icons/fa'
import { GiKnifeFork } from 'react-icons/gi'
import { FaDoorOpen } from 'react-icons/fa'

export const Navbar = () => {
  return (
    <Fragment>
      <navbar className='responsive-wrap-navbar'>
        <p className='label-nav'><FaUserCircle className='icon-nav' /><br />Carol Costa</p>
        <Link className='link' to='/signup'><p className='label-nav'><FaRegClock className='icon-nav' /><br />Status Pedidos</p></Link>
        <Link className='link' to='/signup'><p className='label-nav'><GiKnifeFork className='icon-nav' /><br />Novo Pedido</p></Link>
        <Link className='link' to='/'><p className='label-nav'><FaDoorOpen className='icon-nav' /><br />Sair</p></Link>
      </navbar>
    </Fragment>
  )
}
