import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import Photos from "../components/Photos";
import FooterComponent from "../components/FooterComponent";
import AboutComponent from "../components/AboutComponent";
import '../css/Galery.css'
import Video from "../components/Videos";

const Galery = () => {
return(
  <div>
    <HeaderComponent />
    <AboutComponent />
    <Photos />
    <Video />
    <FooterComponent />
  </div>
)
};

export default Galery;