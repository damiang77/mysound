import React, { Component, createContext } from "react";

export const LoginContext = createContext();

class LoginContextProvider extends Component {
    state = {
      isOpen: false,
      login: "Jerry",
    };
  
    toggleModal = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };
  
    render() {
      return (
        <LoginContext.Provider
          value={{ ...this.state, toggleModal: this.toggleModal }}>
          {this.props.children} 
        </LoginContext.Provider>
      );
    }
  }
  
  export default LoginContextProvider;