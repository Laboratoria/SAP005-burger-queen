import React from "react";
import '../style/footer.css'

function Footer() {
    return (
        <>
            <footer>
                <p className="footer-text">Projeto desenvolvido por
                <a className="footer-link" href="https://www.linkedin.com/in/anaclaragf/" alt="Ana Clara LinkedIn" target="_blank"> Ana Clara</a> e
                <a className="footer-link" href="https://www.linkedin.com/in/kauanaagostini/" alt="Kauana LinkedIn" target="_blank"> Kauana </a> 
                durante o Bootcamp da
                <a className="footer-link" href="https://www.laboratoria.la/" alt="Site Laboratória" target="_blank"> Laboratória</a>
                .</p>
            </footer>
        </>
    );
  }
  
export default Footer;