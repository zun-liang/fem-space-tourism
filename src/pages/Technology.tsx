import styled from "styled-components";
import BGMobile from "../assets/technology/background-technology-mobile.jpg";
import BGTablet from "../assets/technology/background-technology-tablet.jpg";
import BGDesktop from "../assets/technology/background-technology-desktop.jpg";

const TechnologyContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${BGMobile});
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 560px) {
    background-image: url(${BGTablet});
  }
  @media (min-width: 1024px) {
    background-image: url(${BGDesktop});
  }
`;
const Technology = () => {
  return <TechnologyContainer></TechnologyContainer>;
};

export default Technology;
