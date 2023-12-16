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
  text-align: center;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    background-image: url(${BGTablet});
  }
  @media (min-width: 700px) {
    text-align: left;
    padding: 35% 4rem 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 5rem 5rem 1fr;
    column-gap: 2rem;
  }
  @media (min-width: 1024px) {
    background-image: url(${BGDesktop});
  }
`;
const StyledH1 = styled.h1`
  text-transform: uppercase;
  font-family: "Bellefair", serif;
  font-size: 4.5rem;
`;
const StyledH2 = styled.h2`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1rem;
  font-weight: normal;
  letter-spacing: 5px;
  text-transform: uppercase;
  @media (min-width: 700px) {
    font-size: 1.7rem;
    line-height: 1.5;
  }
`;
const StyledP = styled.p`
  line-height: 1.5;
  @media (min-width: 700px) {
    line-height: 2;
  }
`;
const Circle = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  & > span {
    color: black;
    text-transform: uppercase;
    font-family: "Bellefair", serif;
    font-size: 2rem;
  }
  @media (min-width: 700px) {
    margin-top: 0;
    grid-column: 2 / 3;
    grid-row: 1 / 4;
    justify-self: center;
    align-self: end;
    & > span {
      font-size: 1.8rem;
    }
  }
`;
// tablet and desktop styles not done yet

const Home = () => {
  return (
    <HomeContainer>
      <StyledH2>So, you want to travel to</StyledH2>
      <StyledH1>Space</StyledH1>
      <StyledP>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </StyledP>
      <Circle>
        <span>Explore</span>
      </Circle>
    </HomeContainer>
  );
};

export default Home;
