import React from "react";
import './Footer.css'

function Footer() {
    return (
        <>
            <footer>
                <p className="footer-text">Projeto desenvolvido por
                <a className="footer-link" href="https://github.com/KarinaFS" alt="github Karina Ferreira Santos" target="_blank"> Karina Santos</a> e
                <a className="footer-link" href="https://github.com/RoSapia" alt="github Robera Vieira Sapia" target="_blank"> Roberta Sapia </a> 
                durante o Bootcamp da
                <a className="footer-link" href="https://www.laboratoria.la/" alt="Site Laboratória" target="_blank"> Laboratória</a>
                .</p>
            </footer>
        </>
    );
  }
  
export default Footer;