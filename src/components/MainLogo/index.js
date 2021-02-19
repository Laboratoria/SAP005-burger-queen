import React from 'react';
import BotinBurger from './BotinBurger.png';
import style from './style.css';

const Logo = () => {
    return(
        <figure>
            <img src={BotinBurger} className={style.MainLogo}/>
        </figure>
    )
}

export default Logo;