import React from "react";

const HeaderComponent = () => {
  return (
    <div id="header-container">
      <div id="home-icon">

      </div>
      <div id="nav-container">
          <p className="nav-button">Sobre</p>
          <p className="nav-button">Fotos</p>
          <p className="nav-button">Editar</p>
      </div>
      <div id="author-name-container">
        <p id="author-label">Fotos tiradas por</p>
        <p id="author-name">Andrey</p>
      </div>
      <div id="patron-name-container">
        <p id="patron-label">Patrocinio</p>
        <p id="patron-name">Andrey</p>
      </div>
    </div>
  )
};

export default HeaderComponent;