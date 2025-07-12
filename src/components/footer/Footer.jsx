import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">SAI TEJA</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
          <a href="#experience" className="footer__link">Experience</a>
          </li>

         
        </ul>

        <div className="footer__social">
          <a href="https://www.linkedin.com/in/sai-teja-gajula-3459661b1/" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="uil uil-linkedin"></i>
          </a>  

          <a href="https://github.com/saitejagajula" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="uil uil-github"></i>
          </a> 
          
          <a href="" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="uil uil-instagram"></i>
          </a> 
        </div>

        <span className="footer__copy">
          &#169; saitejagajula. All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer