import styled from "styled-components";
import BGMobile from "../assets/home/background-home-mobile.jpg";
import BGTablet from "../assets/home/background-home-tablet.jpg";
import BGDesktop from "../assets/home/background-home-desktop.jpg";

const HomeContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${BGMobile});
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 600px) {
    background-image: url(${BGTablet});
  }
  @media (min-width: 1024px) {
    background-image: url(${BGDesktop});
  }
`;
const Home = () => {
  return <HomeContainer></HomeContainer>;
};

export default Home;
