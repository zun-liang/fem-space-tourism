import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Logo from "./assets/shared/logo.svg?react";
import Hamburger from "./assets/shared/icon-hamburger.svg?react";
import Close from "./assets/shared/icon-close.svg?react";
import { Dispatch, SetStateAction } from "react";
import Menu from "./components/Menu";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Header = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledBr = styled.br`
  width: 100px;
  color: white;
`;
const StyledLogo = styled(Logo)``;
const StyledHamburger = styled(Hamburger)`
  transform: scale(1.5);
  cursor: pointer;
`;
const StyledClose = styled(Close)`
  transform: scale(1.5);
`;

interface Props {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
}
const MainLayout = ({ menu, setMenu }: Props) => {
  const toggleMenu = () => setMenu((prev: boolean) => !prev);
  return (
    <MainContainer>
      <Header>
        <StyledLogo />
        <StyledBr />
        {menu ? (
          <StyledClose onClick={toggleMenu} />
        ) : (
          <StyledHamburger onClick={toggleMenu} />
        )}
      </Header>
      {menu && <Menu setMenu={setMenu} />}
      <main>
        <Outlet />
      </main>
    </MainContainer>
  );
};

export default MainLayout;
