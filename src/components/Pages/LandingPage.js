import React from "react";
import styled from "styled-components";
import img from "../../assets/hero.jpg";
import logo from "../../assets/logo.png";
import LastSongs from "../LastSongs/LastSongs";

const LandingPage = () => {
  const Hero = styled.header`
    width: 100%;
    height: 415px;
    border-top: 8px solid #f7b22c;
    background-image: url(${img});
    background-size: cover;
    background-position: center center;
   text-align: center;
  `;
  const HeroMenu = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

  `;
  const Logo = styled.img`
    width: 100px;
    height: 17px;
  
  `;

  const bgColor = {
    background: "#F2F2F6",
  };

  const Button = styled.button`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background: ${(props) => (props.primary ? "#F7B22C" : "transparent")};
    color: ${(props) => (props.primary ? "black" : "white")};
    border: ${(props) => props.primary ? "2px solid #F7B22C" : "2px solid #FFF"};
    font-size: 12px;
    padding: 7px 15px;
    border-radius: 3px;
    margin-left: 10px;
  `;

  const HeroText = styled.h1`
    color: #FFF;
    font-size: 24px;
    text-align: center;
    max-width: 240px;
    margin: 0 auto;
  `;

  return (
    <div className="container-flud" style={bgColor}>
      <div className="row">
        <div className="container">
          <div className="row">
            <Hero>
              <HeroMenu>
                <Logo src={logo} />
                <div>
                  <Button>Sign In</Button>
                  <Button primary>Create account</Button>
                </div>
              </HeroMenu>
              <HeroText>Share your passion with the world</HeroText>
            </Hero>
          </div>
          <div className="row">
            <LastSongs/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
