import React from "react";
import styled from "styled-components";
const Button = ({ children, primary }) => {

  const Button = styled.button`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background: ${(props) => (props.primary ? "#F7B22C" : "transparent")};
    color: ${(props) => (props.primary ? "black" : "white")};
    border: ${(props) =>
      props.primary ? "2px solid #F7B22C" : "2px solid #FFF"};
    font-size: 12px;
    padding: 4px 15px;
    border-radius: 3px;
    margin-left: 10px;
    height:29px;
  `;
  if (primary === true) {
    return <Button primary>{children}</Button>;
  } else {
    return <Button>{children}</Button>;
  }
};

export default Button;
