import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import camIcont from '../rsc/camicon.png'
import '../css/Login.css'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [visible, setVisible] = useState(false);
  
  const viewHandlle = () => {
    setVisible(!visible)
  };

  const navigate = useNavigate();

  return (
    <div id="login-screen">
      <div id="home-icon-container">
          <img src={camIcont} alt="Icone de câmera" id="camicon" onClick={() => navigate('/')}/>
        </div>
      <div id="login-container">
        <input type="text" placeholder="Login" id="login"/>
        <div id="password-container">
          <input type={ visible ? 'text' : 'password' } placeholder="Senha" id="password" />
          <FaEye onClick={viewHandlle} id="eye"/>
        </div>
        <input type="button" value='Entrar' id="submit"/>
      </div>
    </div>
  )
};

export default Login;