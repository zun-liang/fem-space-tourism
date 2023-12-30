import Close from "./assets/shared/icon-close.svg?react";
import Hamburger from "./assets/shared/icon-hamburger.svg?react";
import Logo from "./assets/shared/logo.svg?react";
import { Dispatch, SetStateAction } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Menu from "./components/Menu";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Header = styled.header`
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1024px) {
    height: auto;
    padding: 1.7rem 2.5rem;
  }
`;
const StyledHr = styled.hr`
  width: 45%;
  border: 0.1px solid hsl(var(--white) / 0.25);
  position: relative;
  left: 5rem;
  margin-left: -5rem;
  z-index: 2;
`;
const StyledLogo = styled(Logo)`
  min-width: 50px;
`;
const StyledHamburger = styled(Hamburger)`
  cursor: pointer;
`;
const StyledClose = styled(Close)`
  cursor: pointer;
  position: absolute;
  top: 2rem;
  right: 1.5rem;
  z-index: 3;
`;

interface Props {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
  screenWidth: number;
}
const MainLayout = ({ menu, setMenu, screenWidth }: Props) => {
  const toggleMenu = () => setMenu((prev: boolean) => !prev);
  return (
    <MainContainer>
      <Header>
        <StyledLogo />
        {screenWidth >= 1024 && <StyledHr />}
        {menu && screenWidth < 600 && <StyledClose onClick={toggleMenu} />}
        {!menu && screenWidth < 600 && <StyledHamburger onClick={toggleMenu} />}
        {screenWidth >= 600 && <Menu setMenu={setMenu} />}
      </Header>
      {menu && screenWidth < 600 && <Menu setMenu={setMenu} />}
      <main>
        <Outlet />
      </main>
    </MainContainer>
  );
};

export default MainLayout;
