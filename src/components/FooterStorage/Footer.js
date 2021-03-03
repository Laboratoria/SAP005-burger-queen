import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footerPage-container'>
        <section className='footerPage-content'>
            <div className='footerPage-content-wrapper'>
                <span className='footerPage-content-allRights'>
                    © Copyright 2020 - Subsolo {/*- endereço do site*/}
                </span>
                <div className='footerPage-content-socialDevs'>
                <Link to='/' className='footerPage-content-socialDevs__render'>
                    Carina Rocha
                    <i className='fab fa-github' />
                </Link>
                </div>
                <div className='footerPage-content-socialDevs'>
                <Link to='/' className='footerPage-content-socialDevs__render'>
                    Luiza Nunes
                    <i className='fab fa-github' />
                </Link>
                </div>
            </div>
        </section>
    </div>
);
}

export default Footer;