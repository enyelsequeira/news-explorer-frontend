import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../images/f.svg';
import github from '../../images/Vector.svg';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p className="footer__title"> &copy; 2020, Supersite Powered byt News API</p>
    <ul className="footer__items">
      <div className="footer__items-links">
        <li>
          <Link className="footer__items_links-title" to="/">Home</Link>
        </li>
        <li>
          <Link className="footer__items_links-title" to="/">Practicum by Yandex</Link>
        </li>
      </div>
      <a className="footer__items-icons" href="google.com">
        <img src={facebook} alt="title" />
      </a>
      <a className="footer__items-icons" href="google.com">
        <img src={github} alt="tesxt" />
      </a>
    </ul>

  </footer>
);

export default Footer;
