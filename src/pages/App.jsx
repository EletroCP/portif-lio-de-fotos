import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderAdmComponent from "../admComponents/HeaderAdmComponent";
import UploadImage from "../admComponents/UploadImage";
import GaleryContainer from "../admComponents/GaleryContainer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

const App = () => {
  const navigate = useNavigate();
  //utilizar o loading, para uma futura tela de carregamento
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      navigate("/login");
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
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
