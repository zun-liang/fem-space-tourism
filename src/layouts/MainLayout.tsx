import Close from "../assets/shared/icon-close.svg?react";
import Hamburger from "../assets/shared/icon-hamburger.svg?react";
import Logo from "../assets/shared/logo.svg?react";
import { Dispatch, SetStateAction, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Menu from "../components/Menu";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Header = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 2rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
  @media (min-width: 560px) {
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
  z-index: 3;
`;

interface Props {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
  screenWidth: number;
}

const MainLayout = ({ menu, setMenu, screenWidth }: Props) => {
  const [slide, setSlide] = useState(false);
  const toggleMenu = () => setSlide((prev) => !prev);
  return (
    <MainContainer>
      <Header>
        <StyledLogo />
        {screenWidth >= 720 && <StyledHr />}
        {menu && screenWidth < 560 && <StyledClose onClick={toggleMenu} />}
        {!menu && screenWidth < 560 && <StyledHamburger onClick={toggleMenu} />}
        {screenWidth >= 560 && <Menu slide={slide} setMenu={setMenu} />}
      </Header>
      {menu && screenWidth < 560 && <Menu slide={slide} setMenu={setMenu} />}
      <main>
        <Outlet />
      </main>
    </MainContainer>
  );
};

export default MainLayout;
