import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

const MenuContainer = styled.ul`
  background-color: rgba(255, 255, 255, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  height: 60vh;
  z-index: 2;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;
const StyledListItem = styled.li`
  list-style: none;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  &:link,
  &:active,
  &:hover,
  &:visited {
    color: white;
  }
`;

interface Props {
  setMenu: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ setMenu }: Props) => {
  const closeMenu = () => setMenu(false);
  return (
    <MenuContainer>
      <StyledListItem>
        <StyledLink to="." onClick={closeMenu}>
          HOME
        </StyledLink>
      </StyledListItem>
      <StyledListItem>
        <StyledLink to="destination" onClick={closeMenu}>
          DESTINATION
        </StyledLink>
      </StyledListItem>
      <StyledListItem>
        <StyledLink to="crew" onClick={closeMenu}>
          CREW
        </StyledLink>
      </StyledListItem>
      <StyledListItem>
        <StyledLink to="technology" onClick={closeMenu}>
          TECHNOLOGY
        </StyledLink>
      </StyledListItem>
    </MenuContainer>
  );
};

export default Menu;
