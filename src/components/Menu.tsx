import { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.nav``;
const StyledList = styled.ul`
  background-color: hsl(var(--white) / 0.05);
  backdrop-filter: blur(20px);
  position: absolute;
  right: 0;
  width: 70vw;
  height: 100%;
  z-index: 2;
  padding: 6rem 2rem;
  @media (min-width: 560px) {
    position: relative;
    top: 0;
    left: auto;
    right: -1.5rem;
    transform: translate(0, 0);
    width: auto;
    height: 100px;
    padding: 0 3rem;
    z-index: 1;
    border-radius: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  @media (min-width: 1024px) {
    padding: 0 5rem;
    height: 95px;
    gap: 3rem;
    right: -2.5rem;
  }
`;
const StyledListItem = styled.li`
  height: 4rem;
  list-style: none;
  font-family: var(--font-2);
  font-weight: 400;
  letter-spacing: 2px;
  display: flex;
  align-items: flex-end;
  @media (min-width: 560px) {
    font-size: 1rem;
    height: 100%;
    align-items: center;
  }
`;
const StyledLink = styled(NavLink)`
  width: 60%;
  height: 60%;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  &:hover {
    border-bottom: 3px solid hsl(var(--white) / 0.5);
  }
  &:link,
  &:active,
  &:hover,
  &:visited {
    color: hsl(var(--white));
  }
  & > span {
    font-weight: bold;
    margin-right: 10px;
    @media (min-width: 560px) {
      display: none;
    }
    @media (min-width: 1024px) {
      display: inline;
    }
  }
  @media (min-width: 560px) {
    width: 100%;
    height: 100%;
  }
`;

interface Props {
  setMenu: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ setMenu }: Props) => {
  const activeStyle = {
    borderBottom: "3px solid hsl(var(--white))",
  };
  const defaultStyle = {};
  const closeMenu = () => setMenu(false);
  return (
    <MenuContainer>
      <StyledList>
        <StyledListItem>
          <StyledLink
            to="."
            onClick={closeMenu}
            style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
          >
            <span>00</span>
            HOME
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            to="destination"
            onClick={closeMenu}
            style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
          >
            <span>01</span>
            DESTINATION
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            to="crew"
            onClick={closeMenu}
            style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
          >
            <span>02</span>
            CREW
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            to="technology"
            onClick={closeMenu}
            style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
          >
            <span>03</span>
            TECHNOLOGY
          </StyledLink>
        </StyledListItem>
      </StyledList>
    </MenuContainer>
  );
};

export default Menu;
