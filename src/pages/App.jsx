import React from "react";
import HeaderAdmComponent from "../admComponents/HeaderAdmComponent";
import UploadImage from "../components/UploadImage";
import GaleryContainer from "../admComponents/GaleryContainer";

const App = () => {
  return (
    <div>
      <HeaderAdmComponent/>
      <UploadImage />
      <GaleryContainer />
      <h1>Fotos da chiva</h1>
    </div>
  );
};

export default App;