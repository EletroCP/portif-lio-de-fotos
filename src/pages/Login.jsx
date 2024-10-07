import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import camIcont from '../rsc/camicon.png'
import '../css/Login.css'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [hasError ,setHasError] = useState(false);

  const loginHandler = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, login, password);
      
      const token = await userCredential.user.getIdToken();
      
      localStorage.setItem('authToken', token);
      setHasError(false);
      navigate('/adm');
    } catch (error) {
      setHasError(true);
    }
  };

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
        <input type="text" placeholder="Login" id="login" onChange={({target: {value}}) => setLogin(value)}/>
        <div id="password-container">
          <input type={ visible ? 'text' : 'password' } placeholder="Senha" id="password" onChange={({target: {value}}) => setPassword(value)}/>
          <FaEye onClick={viewHandlle} id="eye"/>
        </div>
        { hasError ? <p>Email ou senha incorretos</p> : <></>}
        <input type="button" value='Entrar' id="submit" onClick={loginHandler}/>
      </div>
    </div>
  )
};

export default Login;