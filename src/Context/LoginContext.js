import React, { Component, createContext } from "react";

export const LoginContext = createContext();

class LoginContextProvider extends Component {
  state = {
    isOpen: false,
    token: "",
    login: "",
  };

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  setToken = (token) => {
    localStorage.setItem("token", token);
    this.setState({ token: token });
  };
  setLogin = (login) => {
    this.setState({ login: login });
  };
  logout = () =>{
    this.setState({ login: "", token: "" });
    localStorage.removeItem("token");
  }

  render() {
    return (
      <LoginContext.Provider
        value={{
          ...this.state,
          toggleModal: this.toggleModal,
          setToken: this.setToken,
          setLogin: this.setLogin,
          logout: this.logout
        }}
      >
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default LoginContextProvider;
