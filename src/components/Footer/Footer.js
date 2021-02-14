import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer-p'>Desenvolvido por
        <a
          className='footer-link'
          href='https://github.com/CarolineSCosta'
          target='_blank'
          rel='noopener noreferrer'
        >
          CarolineCosta
        </a> 
        </p> e <p className='footer-p'>
        <a className='footer-link'
          href='https://github.com/Elis-ctrl'
          target='_blank'
          rel='noopener noreferrer'
        >
          ElisBrasil
        </a>
      </p>
    </footer>
  )
}
export default Footer;
