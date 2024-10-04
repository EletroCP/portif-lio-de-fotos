import React from "react";
import HeaderAdmComponent from "../admComponents/HeaderAdmComponent";
import UploadImage from "../admComponents/UploadImage";
import GaleryContainer from "../admComponents/GaleryContainer";

const App = () => {
  return (
    <div>
      <HeaderAdmComponent/>
      <UploadImage />
      <h1 id="album-title">Fotos da Shiva</h1>
      <GaleryContainer />
    </div>
  );
};

export default App;