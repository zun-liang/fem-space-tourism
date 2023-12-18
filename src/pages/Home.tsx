import styled from "styled-components";

import BGDesktop from "../assets/home/background-home-desktop.jpg";
import BGMobile from "../assets/home/background-home-mobile.jpg";
import BGTablet from "../assets/home/background-home-tablet.jpg";
import { SharedSection } from "../assets/styles/SharedStyles";

const HomeContainer = styled(SharedSection)`
  background-image: url(${BGMobile});
  @media (min-width: 560px) {
    background-image: url(${BGTablet});
  }
  @media (min-width: 720px) {
    padding: 4rem 4rem 8rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: end;
    column-gap: 1rem;
  }
  @media (min-width: 1024px) {
    background-image: url(${BGDesktop});
  }
`;
const TextContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 720px) {
    text-align: left;
    align-items: flex-start;
  }
`;
const StyledH1 = styled.h1`
  text-transform: uppercase;
  font-family: "Bellefair", serif;
  font-size: 4.8rem;
  letter-spacing: 4px;
  @media (min-width: 1024px) {
    font-size: 5rem;
  }
`;
const StyledH2 = styled.h2`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1rem;
  font-weight: normal;
  letter-spacing: 5px;
  text-transform: uppercase;
  @media (min-width: 560px) {
    margin-top: 3rem;
  }
  @media (min-width: 720px) {
    font-size: 1.7rem;
    line-height: 1.5;
    margin-top: 0;
  }
`;
const StyledP = styled.p`
  line-height: 1.5;
  @media (min-width: 560px) {
    width: 85%;
    font-size: 0.9rem;
  }
  @media (min-width: 720px) {
    line-height: 2;
  }
`;
const Circle = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 260px;
  height: 260px;
  display: grid;
  place-items: center;
  margin-top: 5rem;
  outline: 0px solid transparent;
  transition: outline 1s ease-in;
  & > span {
    color: black;
    text-transform: uppercase;
    font-family: "Bellefair", serif;
    font-size: 2rem;
  }
  &:hover {
    outline: 65px solid rgba(255, 255, 255, 0.1);
    transition: outline 1s ease-out;
  }
  @media (min-width: 720px) {
    margin-top: 0;
    justify-self: center;
    & > span {
      font-size: 1.8rem;
    }
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <TextContainer>
        <StyledH2>So, you want to travel to</StyledH2>
        <StyledH1>Space</StyledH1>
        <StyledP>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </StyledP>
      </TextContainer>
      <Circle>
        <span>Explore</span>
      </Circle>
    </HomeContainer>
  );
};

export default Home;
