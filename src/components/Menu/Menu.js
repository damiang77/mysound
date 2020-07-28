import React, { useContext } from "react";
import styled from "styled-components";
import logoBlack from "../../assets/logoBlack.png";
import { NavLink, Link } from "react-router-dom";
import "./MenuStyle.css";
import Button from "../Button/Button";
import { LoginContext } from "../../Context/LoginContext";

const Menu = () => {
  
    const loginModal = useContext(LoginContext);

  const MenuBackground = styled.nav`
    width: 100%;
    height: 46px;
    background: #333333;
  `;
  const LogoWrapper = styled.div`
    width: 160px;
    height: 46px;
    background: #f7b22c;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  `;
  const Logo = styled.img`
    width: 101px;
    height: 17px;
  `;

  const ContentWrapper = styled.div`
    height: 46px;
    display: flex;
    width: 100%;
    justify-content: space-between;
  `;

  const MenuLeft = styled.div`
    height: 46px;
    width: 50%;
    display: flex;
  `;

  const MenuRight = styled.div`
    height: 46px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `;

  const MenuItem = styled.div`
    width: 90px;
    height: 46px;
    color: white;
    font-weight: bold;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    border-right: 1px solid #111;
  `;

  return (
    <MenuBackground>
      <div className="container">
        <div className="row">
          <ContentWrapper>
            <MenuLeft>
              <Link to="/">
                <LogoWrapper>
                  <Logo src={logoBlack} />
                </LogoWrapper>
              </Link>
              <NavLink to="/music" activeClassName="active">
                <MenuItem>Home</MenuItem>
              </NavLink>
              <NavLink to="/uploads" activeClassName="active">
                <MenuItem>Uploads</MenuItem>
              </NavLink>
            </MenuLeft>

            <MenuRight>
              <div onClick={loginModal.toggleModal}>
                <Button>Sign In</Button>
              </div>

              <Button primary={true}>Create account</Button>
            </MenuRight>
          </ContentWrapper>
        </div>
      </div>
    </MenuBackground>
  );
};

export default Menu;
