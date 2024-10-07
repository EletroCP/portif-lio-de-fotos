import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderAdmComponent from "../admComponents/HeaderAdmComponent";
import UploadImage from "../admComponents/UploadImage";
import GaleryContainer from "../admComponents/GaleryContainer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      navigate("/login");
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });

    unsubscribe();
  }, [navigate]);

  return (
    <div>
      <HeaderAdmComponent />
      <UploadImage />
      <h1 id="album-title">Fotos da Shiva</h1>
      <GaleryContainer />
    </div>
  );
};

export default App;
