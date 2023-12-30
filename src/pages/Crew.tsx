import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";

import BGDesktop from "../assets/crew/background-crew-desktop.jpg";
import BGMobile from "../assets/crew/background-crew-mobile.jpg";
import BGTablet from "../assets/crew/background-crew-tablet.jpg";
import {
  H2,
  H3,
  InputContainer,
  Label,
  RadioBtn,
  Section,
} from "../assets/styles/SharedStyles";
import { LabelProps } from "../interfaces";

const CrewPage = styled(Section)`
  height: auto;
  min-height: 100vh;
  background-image: url(${BGMobile});
  gap: 3rem;
  @media (min-width: 560px) {
    padding: 6.5rem 1.5rem 1rem;
    background-image: url(${BGTablet});
  }
  @media (min-width: 720px) {
    padding: 6.5rem 2rem 1rem;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media (min-width: 1024px) {
    background-image: url(${BGDesktop});
    padding: 6.5rem 10rem 15rem;
  }
`;
const StyledH2 = styled(H2)`
  @media (min-width: 560px) {
    align-self: flex-start;
  }
  @media (min-width: 720px) {
    font-size: 1.5rem;
  }
`;
const CrewArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  @media (min-width: 560px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
  @media (min-width: 720px) {
    align-items: flex-start;
    width: 60%;
    height: 320px;
  }
`;
const StyledImg = styled.img<LabelProps>`
  width: 280px;
  height: 380px;
  object-fit: contain;
  object-position: right bottom;
  @media (min-width: 560px) {
    width: 320px;
    height: 435px;
  }
  @media (min-width: 720px) {
    width: 40vw;
    height: auto;
    max-width: 50vw;
    position: absolute;
    bottom: 0rem;
    right: 2rem;
  }
  @media (min-width: 1024px) {
    width: ${({ $selected }) => ($selected ? "30vw" : "35vw")};
    bottom: -7rem;
    right: ${({ $selected }) => ($selected ? "6rem" : "3rem")};
  }
`;
const ChoiceContainer = styled(InputContainer)`
  justify-content: center;
  gap: 15px;
  @media (min-width: 720px) {
    position: absolute;
    bottom: 1rem;
    left: 3rem;
    justify-content: flex-start;
    width: auto;
  }
  @media (min-width: 1024px) {
    left: 10rem;
    bottom: -4rem;
  }
`;
const StyledLabel = styled(Label)`
  width: 15px;
  height: 15px;
  background-color: ${({ $selected }) =>
    $selected ? "hsl(var(--white))" : "hsl(var(--white) / 0.25)"};
  border-radius: 50%;
  &:hover {
    background-color: hsl(var(--white) / 0.5);
  }
  @media (min-width: 720px) {
    width: 18px;
    height: 18px;
  }
`;
const TextContainer = styled.div`
  margin-top: -1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  @media (min-width: 560px) {
    width: 90%;
  }
  @media (min-width: 720px) {
    align-items: flex-start;
  }
`;
const Role = styled.h4`
  text-transform: uppercase;
  font-family: var(--font-3);
  font-weight: 400;
  color: hsl(var(--white) / 0.5);
  @media (min-width: 560px) {
    font-size: 1.3rem;
  }
  @media (min-width: 720px) {
    font-size: 1.65rem;
  }
`;
const StyledH3 = styled(H3)`
  font-size: 1.5rem;
  letter-spacing: 0;
  margin-top: -2.3rem;
  @media (min-width: 560px) {
    font-size: 2.2rem;
  }
  @media (min-width: 720px) {
    font-size: 3rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.6rem;
  }
`;
const StyledP = styled.p`
  text-align: center;
  line-height: 1.5;
  margin-top: -1rem;
  font-size: 0.9rem;
  color: hsl(var(--light-color));
  @media (min-width: 560px) {
    height: 5rem;
  }
  @media (min-width: 720px) {
    text-align: left;
    line-height: 2;
    font-size: 1rem;
  }
`;

// eslint-disable-next-line react-refresh/only-export-components
export const loader = () => {
  return fetch("/data.json")
    .then((res) => res.json())
    .then((data) => data.crew);
};

interface Crew {
  name: string;
  images: { png: string };
  role: string;
  bio: string;
}

const Crew = () => {
  const [crewChoice, setCrewChoice] = useState<string>("commander");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCrewChoice(event.target.value);

  const data = useLoaderData() as Crew[];
  const crewArr = data.map((crew) => {
    const baseUrl = window.location.href.replace("/crew", "/src");
    const relativePath = crew.images.png.replace("./", "/");
    const imgUrl = new URL(`${baseUrl}${relativePath}`, import.meta.url).href;
    return (
      <CrewArticle key={crew.name}>
        <StyledImg
          src={imgUrl}
          alt={crew.name}
          $selected={crewChoice === "specialist"}
        />
        <ChoiceContainer>
          <RadioBtn
            type="radio"
            id="commander"
            name="crew"
            value="commander"
            onChange={handleChange}
          />
          <StyledLabel
            htmlFor="commander"
            $selected={crewChoice === "commander"}
          />
          <RadioBtn
            type="radio"
            id="specialist"
            name="crew"
            value="specialist"
            onChange={handleChange}
          />
          <StyledLabel
            htmlFor="specialist"
            $selected={crewChoice === "specialist"}
          />
          <RadioBtn
            type="radio"
            id="pilot"
            name="crew"
            value="pilot"
            onChange={handleChange}
          />
          <StyledLabel htmlFor="pilot" $selected={crewChoice === "pilot"} />
          <RadioBtn
            type="radio"
            id="engineer"
            name="crew"
            value="engineer"
            onChange={handleChange}
          />
          <StyledLabel
            htmlFor="engineer"
            $selected={crewChoice === "engineer"}
          />
        </ChoiceContainer>
        <TextContainer>
          <Role>{crew.role}</Role>
          <StyledH3>{crew.name}</StyledH3>
          <StyledP>{crew.bio}</StyledP>
        </TextContainer>
      </CrewArticle>
    );
  });
  return (
    <CrewPage>
      <StyledH2>
        <span>02 </span>Meet your crew
      </StyledH2>
      {crewChoice === "commander"
        ? crewArr[0]
        : crewChoice === "specialist"
        ? crewArr[1]
        : crewChoice === "pilot"
        ? crewArr[2]
        : crewArr[3]}
    </CrewPage>
  );
};

export default Crew;
