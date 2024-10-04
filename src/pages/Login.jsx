import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import '../css/Login.css'

const Login = () => {
  const [visible, setVisible] = useState(false);
  
  const viewHandlle = () => {
    setVisible(!visible)
  };

  return (
    <div id="login-screen">
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