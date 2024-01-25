import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import BGDesktop from "../assets/home/background-home-desktop.jpg";
import BGMobile from "../assets/home/background-home-mobile.jpg";
import BGTablet from "../assets/home/background-home-tablet.jpg";
import { Article, H2, P, Section } from "../assets/styles/SharedStyles";

const HomePage = styled(Section)`
  min-height: auto;
  padding: 2rem 2rem 2rem;
  background-image: url(${BGMobile});
  gap: 1rem;
  @media (min-height: 321px) {
    padding: 6rem 2rem 0;
    height: var(--app-height);
    min-height: auto;
    gap: 2rem;
  }
  @media (min-width: 560px) {
    background-image: url(${BGTablet});
  }
  @media (min-width: 720px) {
    background-image: url(${BGDesktop});
    padding: 4rem 4rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    column-gap: 1rem;
  }
  @media (min-width: 1024px) {
    padding: 4rem 15% 0;
  }
`;
const HomeArticle = styled(Article)`
  text-align: center;
  @media (min-width: 720px) {
    text-align: left;
    align-items: flex-start;
  }
`;
const StyledH1 = styled.h1`
  text-transform: uppercase;
  font-family: var(--font-3);
  font-weight: 400;
  font-size: 4.8rem;
  letter-spacing: 4px;
  @media (min-width: 1024px) {
    font-size: 6.5rem;
  }
`;
const StyledH2 = styled(H2)`
  color: hsl(var(--light-color));
  @media (min-width: 560px) {
    margin-top: 3rem;
    font-size: 1rem;
  }
  @media (min-width: 720px) {
    font-size: 1.4rem;
    line-height: 1.5;
    margin-top: 0;
  }
`;
const StyledP = styled(P)`
  max-width: 450px;
  @media (min-width: 560px) {
    width: 85%;
    max-width: 540px;
    font-size: 0.9rem;
  }
  @media (min-width: 720px) {
    width: 100%;
    max-width: auto;
    font-size: 1rem;
  }
`;
const Circle = styled.div`
  width: 150px;
  height: 150px;
  background-color: hsl(var(--white));
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  place-items: center;
  outline: 0px solid transparent;
  transition: outline 1s ease-in;
  &:hover {
    outline: 65px solid hsl(var(--white) / 0.1);
    transition: outline 1s ease-out;
  }
  & > span {
    color: hsl(var(--dark-color));
    text-transform: uppercase;
    font-family: var(--font-3);
    font-weight: 400;
    font-size: 2rem;
  }
  @media (min-width: 321px) {
    width: 260px;
    height: 260px;
    margin-top: 2rem;
  }
  @media (min-width: 720px) {
    margin-top: 3rem;
    justify-self: center;
    & > span {
      font-size: 1.8rem;
    }
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const goExplore = () => navigate("destination");
  return (
    <HomePage>
      <HomeArticle>
        <StyledH2>So, you want to travel to</StyledH2>
        <StyledH1>Space</StyledH1>
        <StyledP>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </StyledP>
      </HomeArticle>
      <Circle onClick={goExplore}>
        <span>Explore</span>
      </Circle>
    </HomePage>
  );
};

export default Home;
