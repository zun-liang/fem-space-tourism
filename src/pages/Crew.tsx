import styled from "styled-components";
import BGMobile from "../assets/crew/background-crew-mobile.jpg";
import BGTablet from "../assets/crew/background-crew-tablet.jpg";
import BGDesktop from "../assets/crew/background-crew-desktop.jpg";

const CrewContainer = styled.section`
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
const Crew = () => {
  return <CrewContainer></CrewContainer>;
};

export default Crew;
