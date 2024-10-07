import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import Photos from "../components/Photos";
import FooterComponent from "../components/FooterComponent";
import AboutComponent from "../components/AboutComponent";
import '../css/Galery.css'

const Galery = () => {
return(
  <div>
    <HeaderComponent />
    <AboutComponent />
    <Photos />
    <FooterComponent />
  </div>
)
};

export default Galery;