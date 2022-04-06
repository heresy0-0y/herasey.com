import styled from "styled-components";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background-image: radial-gradient(
    95rem at right top,
    hsla(249, 65%, 35%, 1),
    hsla(248, 52%, 39%, 1)
  );
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  border-bottom-color: hsla(168, 47%, 59%, 1);
  border-bottom: 1px groove;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 5rem;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #bbdbb4;
  margin: 1rem;
  font-family: Montserrat;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;

`;

export const LinkedInIcon = styled(FiLinkedin)`
  margin: 0.5rem 0 0.5rem 0.5rem;
  font-size: 2rem;
  list-style: none;
  &:hover {
    transition: all .1s ease-in;
    text-shadow: 1px 1px hsla(28, 78%, 75%, .5);
    box-shadow: 0 0 2.5px 2.6px 0.1px hsla(28, 78%, 77%, .5);
  }

`

export const GithubIcon = styled(FiGithub)`
  margin: 0.5rem 0 0.5rem 0.5rem;
  font-size: 2rem;
  list-style: none;
  &:hover {
    transition: all .1s ease-in;
    text-shadow: 1px 1px hsla(28, 78%, 75%, .5);
    box-shadow: 0 0 2.5px 2.6px 0.1px hsla(28, 78%, 77%, .5);
  }
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
  flex-direction: row;
  justify-content: space-around;
  margin-left: 50%;

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
  height: 5rem;
  border-bottom: 2px solid transparent;
  list-style: none;

  &:hover {
    transition: all .1s ease-in;
    border-bottom: 2px solid hsla(28, 78%, 77%, .4);
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
  justify-content: space-around;
  margin-right: 1rem;
  height: 100%;
  &:hover {
    transition: all .1s ease;

  }

  @media screen and (max-width: 769px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: hsla(28, 58%, 47%, .44);
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
