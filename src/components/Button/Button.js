import React from "react";
import styled from "styled-components";


const ButtonStyled = styled.button`
font-family: Verdana, Geneva, Tahoma, sans-serif;
background: ${(props) => (props.primary ? "#F7B22C" : "transparent")};
color: ${(props) => (props.primary ? "black" : "white")};
border: ${(props) =>
  props.primary ? "2px solid #F7B22C" : "2px solid #FFF"};
font-size: 12px;
padding: 4px 15px;
border-radius: 3px;
height:29px;
margin-right: ${(props) => (props.primary ? "0px" : "10px" )};
`;

const Button = ({ children, primary }) => {

 
  if (primary === true) {
    return <ButtonStyled primary>{children}</ButtonStyled>;
  } else {
    return <ButtonStyled>{children}</ButtonStyled>;
  }
};

export default Button;
