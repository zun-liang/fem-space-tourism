import { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface SlideType {
  readonly $slide: boolean;
}

const StyledList = styled.ul<SlideType>`
  width: 70vw;
  height: 100%;
  background-color: hsl(var(--dark-color) / 0.95);
  position: absolute;
  right: 0;
  z-index: 2;
  padding: 6rem 2rem;
  transform: ${({ $slide }) => ($slide ? "translateX(0)" : "translateX(100%)")};
  transition: transform 500ms ease-in-out;
  @supports (backdrop-filter: blur(20px)) {
    background-color: hsl(var(--white) / 0.05);
    backdrop-filter: blur(20px);
  }
  @media (min-width: 560px) {
    width: auto;
    height: 90px;
    position: relative;
    top: 0;
    right: -1.5rem;
    margin-left: -1.5rem;
    padding: 0 2rem;
    z-index: 1;
    transform: translateX(0);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  @media (min-width: 720px) {
    padding: 0 3rem;
    gap: 2.5rem;
    right: -2.5rem;
    margin-left: -2.5rem;
  }
  @media (min-width: 1024px) {
    padding: 0 clamp(3.5rem, 4rem, 5rem);
    gap: 3rem;
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
  @media (min-width: 1024px) {
    font-size: 0.9rem;
  }
`;
const StyledLink = styled(NavLink)`
  width: 100%;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 10px;
  border-bottom: 3px solid transparent;
  display: flex;
  align-items: center;
  &:link,
  &:active,
  &:hover,
  &:visited {
    color: hsl(var(--white));
  }
  &:hover {
    border-bottom: 3px solid hsl(var(--white) / 0.5);
  }
  & > strong {
    margin-right: 10px;
    @media (min-width: 560px) {
      display: none;
    }
    @media (min-width: 720px) {
      display: inline;
    }
  }
  @media (min-width: 560px) {
    padding-bottom: 0px;
    height: 100%;
  }
`;

interface Props {
  slide: boolean;
  setSlide: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ slide, setSlide }: Props) => {
  const activeStyle = {
    borderBottom: "3px solid hsl(var(--white))",
  };
  const defaultStyle = {};
  const closeMenu = () => setSlide(false);
  return (
    <nav>
      <StyledList $slide={slide}>
        <StyledListItem>
          <StyledLink
            to="."
            onClick={closeMenu}
            style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
          >
            <strong>00</strong>
            HOME
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            to="destination"
            onClick={closeMenu}
            style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
          >
            <strong>01</strong>
            DESTINATION
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            to="crew"
            onClick={closeMenu}
            style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
          >
            <strong>02</strong>
            CREW
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            to="technology"
            onClick={closeMenu}
            style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
          >
            <strong>03</strong>
            TECHNOLOGY
          </StyledLink>
        </StyledListItem>
      </StyledList>
    </nav>
  );
};

export default Menu;
