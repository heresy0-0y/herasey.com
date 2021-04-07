import styled from "styled-components";
import { TiHomeOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background-image: radial-gradient(95rem at right top, hsla(249, 65%, 35%, 1), hsla(248, 52%, 39%, 1));
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  border-bottom-color: hsla(168, 47%, 59%, 1);
  border-bottom: 1px groove;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #bbdbb4;
  cursor: pointer;
  font-family: Montserrat;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;

  &:focus {
    border-bottom: 1px solid;
    z-index: 1;
    background-color: hsla(168, 47%, 59%, 1);
  transition: all 0.3s ease;
  outline: none;
  }
`;

export const NavIcon = styled(TiHomeOutline)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 769px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 769px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    transition: all 0.4s ease;
    border-bottom: 2px solid #7a5b60;
    text-shadow: 1.5px 0px 1.2px #538082, 1px -1px .1px #538082;
    box-shadow: 0 0 2.5px 2.6px .1px #538082;
  }

  @media screen and (max-width: 769px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 769px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLinks = styled(Link)`
  color: #bbdbb4;
  display: flex;
  font-family: font-family: 'Montserrat Alternates', sans-serif; 
  font-size: 1.7rem;
  align-items: center;
  text-decoration: none;
  
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
    transition: all 1s ease-in-out;


  }
  &:focus {
    border-bottom: 1px solid;
    z-index: 1;
    background-color: #7a5b60;
  transition: all 0.3s ease;
  outline: none;
  }

  &:active {
    hsla(189, 21%, 58%, 1);
  }


  @media screen and (max-width: 769px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #7a5b60;
      transition: all 0.3s ease;
    }

    
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;

  outline: none;
`;
