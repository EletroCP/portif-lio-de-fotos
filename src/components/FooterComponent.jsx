import React from "react";
import '../css/FooterGalery.css'
import heartFooter from '../rsc/heartFooter.png'
const FooterComponent = () => {
  return (
    <footer>
      <div id="footer-main-container">
        <p id="footer-content">© 2024</p>
        <img src={heartFooter} alt="Corações decorativos" id="footer-heart"/>
      </div>
    </footer>
  );
};

export default FooterComponent;