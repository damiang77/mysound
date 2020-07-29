import React from "react";
import styled from "styled-components";
import img from "../assets/hero.jpg";
import logo from "../assets/logo.png";
import LastSongs from "../components/LastSongs/LastSongs";
import signUpBg from "../assets/bg-signup.jpg";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

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


const HeroText = styled.h1`
color: #fff;
font-size: 24px;
text-align: center;
max-width: 260px;
margin: 0 auto;
font-weight: bold;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const SignUpWrapper = styled.div`
width: 100%;
height: 292px;
display: flex;
align-items: center;
justify-content: flex-end;
background-image: url(${signUpBg});
background-size: cover;
background-position: center center;
`;
const SignUpText = styled.div`
font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
font-weight: bold;
font-size: 24px;
margin-right: 150px;
text-align: center;
color: #fff;
max-width: 400px;
`;
const Footer = styled.div`
width: 100%;
height: 160px;
display: flex;
align-items: center;
justify-content: center;
background-color: #fff;
color:#333;
font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
font-weight: bold;
font-size: 16px;
`


const LandingPage = () => {
 
  return (
    <div className="container-flud" style={bgColor}>
      <div className="container">
        <div className="row">
          <Hero>
            <HeroMenu>
              <Logo src={logo} />
              <div>
                <Link to="/music">
                <Button>Sign In</Button>
                </Link>
                <Button primary={true}>Create account</Button>
              </div>
            </HeroMenu>
            <HeroText>Share your music with the world</HeroText>
          </Hero>
        </div>
        <div className="row">
          <LastSongs />
        </div>
        <div className="row">
          <SignUpWrapper>
            <SignUpText>
              Thanks for listening. Now join in. Share your music for free.
              <Button primary>Create account</Button>
            </SignUpText>
          </SignUpWrapper>
        </div>
        <div className="row">
            <Footer>
                MYSOUND
            </Footer>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
