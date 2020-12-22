import React from 'react';
import facebook from '../../images/f.svg';
import github from '../../images/Vector.svg';
// import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p className="footer__title">&copy; 2020, Supersite Powered byt News API</p>
    <div className="footer__container">
      <ul className="footer__container-content footer__container-links">
        <li className="footer__container-item"><a className="footer__container-link" href="/">Home</a></li>
        <li className="footer__container-item"><a className="footer__container-link" href="https://practicum.yandex.com/" target="_blank" rel="noreferrer">Practicum by Yandex</a></li>
      </ul>
      <ul className="footer__container-content footer__container-icons">
        <li><a href="google.com" target="_blank" rel="noreferrer"><img src={github} alt="github" className=" footer__container-content_icon" /></a></li>
        <li><a href="google.com" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook" className="footer__container-content_icon" /></a></li>
      </ul>
    </div>

  </footer>
);

export default Footer;
