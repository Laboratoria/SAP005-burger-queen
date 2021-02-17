import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeDevicesMenu = () => setClick(false);

    const showButton = () => {
    if (window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
    };

    useEffect(() => {
    showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
    <>
        <nav className='navbar-container'>
            <div className='navbar-container-wrapper'>
                <Link to='/' className='navbar-container-logo' onClick={closeDevicesMenu}>
                    Subsolo
                    {/*<i className='fas fa-hamburger'/>*/}
                </Link>
            <div className='navbar-container-menu__icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-ellipsis-v'} />
            </div>
            <ul className={click ? 'navbar-container-menu active' : 'navbar-container-menu'}>
                <li className='navbar-container-menu__item'>
                    <Link to='/' className='navbar-container-menu__links' onClick={closeDevicesMenu}>
                        Home
                    </Link>
                </li>
                <li className='navbar-container-menu__item'>
                    <Link to='/hall' className='navbar-container-menu__links'onClick={closeDevicesMenu}>
                        Salão
                    </Link>
                </li>
                <li className='navbar-container-menu__item'>
                    <Link to='/kitchen' className='navbar-container-menu__links' onClick={closeDevicesMenu}>
                        Cozinha
                    </Link>
                </li>
                <li className='navbar-container-menu__item'>
                    <Link to='/login' className='navbar-container-menu__links'onClick={closeDevicesMenu}>
                        Login
                    </Link>
                </li>
                <li>
                    <Link to='/signup' className='navbar-menu-links__devices' onClick={closeDevicesMenu}>
                        Cadastrar
                    </Link>
                </li>
            </ul>
                {button && <Button buttonStyle='button-Clicked'>Cadastrar</Button>}
            </div>
        </nav>
    </>
);
}

export default Navbar;