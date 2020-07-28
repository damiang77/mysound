import React, { useContext } from "react";
import styled from "styled-components";
import { LoginContext } from "../../Context/LoginContext";

const Login = () => {
  const loginModal = useContext(LoginContext);

  const Overlay = styled.div`
    position: absolute;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: hsla(0,0%,94.9%,.9);
  `;
  const LoginWindow = styled.div`
    position: absolute;
    z-index: 120;
    left: 0;
    right: 0;
    margin: auto;
    margin-top: 80px;
    width: 450px;
    height: 600px;
    background: #FFF;
    padding: 25px;
  `;
  const HideModalButton = styled.div`
    position: absolute;
    right: 40px;
    top: 20px;
    color: #333;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  `;

  if (loginModal.isOpen) {
    return (
      <Overlay onClick={loginModal.toggleModal}>
        <LoginWindow></LoginWindow>
        <HideModalButton onClick={loginModal.toggleModal}>X</HideModalButton>
      </Overlay>
    );
  }

  return null;
};

export default Login;
