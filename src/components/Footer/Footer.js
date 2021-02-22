import React from 'react';
import './Footer.css';
import { GoOctoface } from "react-icons/go";

const Footer = () => (
  <footer>
    <p className="github">
      <GoOctoface/> Desenvolvido por <a href="https://github.com/ale-alves"><strong> Alessandra Alves </strong></a> e
      <a href="https://github.com/juliaterin"><strong> Julia Terin</strong></a>
    </p>
  </footer>
);
export default Footer;