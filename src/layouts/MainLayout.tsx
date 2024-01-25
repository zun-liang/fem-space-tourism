import Close from "../assets/shared/icon-close.svg?react";
import Hamburger from "../assets/shared/icon-hamburger.svg?react";
import Logo from "../assets/shared/logo.svg?react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Menu from "../components/Menu";

const MainContainer = styled.div`
  width: 100vw;
  height: var(--app-height);
  position: relative;
  overflow-x: hidden;
`;
const Header = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  padding: 2rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 560px) {
    position: relative;
    height: calc(90px + 3rem);
    padding: 0 1.5rem;
  }
  @media (min-width: 720px) {
    padding: 1.5rem 2.5rem;
  }
`;
const StyledHr = styled.hr`
  width: 100%;
  border: 0.1px solid hsl(var(--white) / 0.25);
`;
const StyledLogo = styled(Logo)`
  min-width: 50px;
  margin-right: 1rem;
`;
const StyledHamburger = styled(Hamburger)`
  cursor: pointer;
`;
const StyledClose = styled(Close)`
  cursor: pointer;
  position: absolute;
  top: 2.8rem;
  right: 1.5rem;
`;

interface Props {
  screenWidth: number;
}

const MainLayout = ({ screenWidth }: Props) => {
  const [slide, setSlide] = useState(false);
  const toggleSlide = () => setSlide((prev) => !prev);
  return (
    <MainContainer>
      <Header>
        <StyledLogo />
        {screenWidth >= 720 && <StyledHr />}
        {slide && screenWidth < 560 && <StyledClose onClick={toggleSlide} />}
        {!slide && screenWidth < 560 && (
          <StyledHamburger onClick={toggleSlide} />
        )}
        {screenWidth >= 560 && (
          <Menu slide={slide} setSlide={setSlide} screenWidth={screenWidth} />
        )}
      </Header>
      {screenWidth < 560 && (
        <Menu slide={slide} setSlide={setSlide} screenWidth={screenWidth} />
      )}
      <main>
        <Outlet />
      </main>
    </MainContainer>
  );
};

export default MainLayout;
