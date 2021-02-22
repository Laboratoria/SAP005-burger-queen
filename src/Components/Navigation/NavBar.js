import  React from 'react';
import {Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const Header = () => {

    return (
        <header>                    
            <nav className={styles.conteiner}>
                <ul className={styles.navigation}>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                    <li>
                        <Link to="/Register">Register</Link>
                    </li>
                    <li>
                        <Link to="/Hall">Hall</Link>
                    </li>
                    <li>
                        <Link to="/Kitchen">Kitchen</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header




