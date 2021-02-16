import  React from 'react'
import {Link } from 'react-router-dom'

const Header = () => {

    return (

        <nav>
            <ul>
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
    )
}

export default Header




