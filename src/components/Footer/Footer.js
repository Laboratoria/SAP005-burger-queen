import React from 'react';
import './footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer-text'>Desenvolvido por&nbsp;
        <a
          classnsme='footer-link'
          href='https://github.com/CarolineSCosta'
          title='gitHub'
          target='_blank'
          rel='noopener noreferrer'
        >Caroline Costa
        </a> &nbsp;&&nbsp;
        <a className='footer-link'
          href='https://github.com/Elis-ctrl'
          title='gitHub'
          target='_blank'
          rel='noopener noreferrer'
        >Elis Brasil
        </a>
      </p>
    </footer>
  )
}
