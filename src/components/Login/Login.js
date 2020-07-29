import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { LoginContext } from "../../Context/LoginContext";
import axios from "axios";
import Button from "../Button/Button";
import Api from "../../services/Api";

const Overlay = styled.div`
  position: absolute;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: hsla(0, 0%, 94.9%, 0.9);
`;
const LoginWindow = styled.div`
  position: absolute;
  z-index: 120;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: 80px;
  width: 450px;
  height: 400px;
  background: #fff;
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
const Input = styled.input`
  font-size: 14px;
  line-height: 24px;
  padding: 7px 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: block;
  width: 100%;
  margin-bottom: 15px;
  color: #333;
`;
const LoginHeader = styled.h4`
font-weight: bold;
font-size: 22px;
color: #333;
text-align: center;
margin-top:2rem;
margin-bottom:2rem;
`
const ErrorLogin = styled.div`
  width: 100%;
  color: red;
  padding: 10px;
`;

const Login = () => {
  const loginData = useContext(LoginContext);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    return () => {
      setIsError(false);
    };
  }, []);

  const postLogin = (e) => {
    e.preventDefault();

    Api.Auth.post(login, password)
      .then((result) => {
        if (result.status === 200) {
          loginData.setToken(result.data.jwt);
          loginData.setLogin(result.data.user.username);
          loginData.toggleModal();
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
  };

  if (loginData.isOpen) {
    return (
      <Overlay>
        <LoginWindow>
            <LoginHeader>Login to MYMUSIC</LoginHeader>
          <form>
            <label htmlFor="loginInput">Login</label>
            <Input
              id="loginInput"
              type="text"
              placeholder="Login"
              onChange={(e) => setLogin(e.target.value)}
            ></Input>
            <label htmlFor="passwordInput">Password</label>
            <Input
              id="passwordInput"
              type="text"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
            <div onClick={postLogin}>
              <Button type="submit" primary={true}>Login</Button>
            </div>
          </form>
          {isError && <ErrorLogin>Invalid login or password.</ErrorLogin>}
        </LoginWindow>
        <HideModalButton onClick={loginData.toggleModal}>X</HideModalButton>
      </Overlay>
    );
  }

  return null;
};

export default Login;
