import React from 'react';
import BotinBurger from './BotinBurger.png';
import styles from './logo.module.css';


const Logo = () => {
    return(
        <figure>
            <img src={BotinBurger} className={styles.img}/>
        </figure>
    )
}

export default Logo;