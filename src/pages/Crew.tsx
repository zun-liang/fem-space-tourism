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

const CrewPage = styled(Section)`
  height: auto;
  min-height: 100vh;
  background-image: url(${BGMobile});
  gap: 3rem;
  @media (min-width: 560px) {
    background-image: url(${BGTablet});
  }
  @media (min-width: 1024px) {
    background-image: url(${BGDesktop});
  }
`;
const StyledH2 = styled(H2)``;
const CrewArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;
const StyledImg = styled.img`
  width: 65%;
`;
const ChoiceContainer = styled(InputContainer)`
  justify-content: center;
  gap: 15px;
`;
const StyledRadioBtn = styled(RadioBtn)``;
const StyledLabel = styled(Label)`
  width: 15px;
  height: 15px;
  background-color: ${({ $selected }) => ($selected ? "white" : "gray")};
  border-radius: 50%;
`;
const Role = styled.h4`
  text-transform: uppercase;
  font-family: "Bellefair", sans-serif;
`;
const StyledH3 = styled(H3)`
  font-size: 1.5rem;
  letter-spacing: 0;
  margin-top: -2.3rem;
`;
const StyledP = styled.p`
  text-align: center;
  line-height: 1.5;
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
        <StyledImg src={imgUrl} alt={crew.name} />
        <ChoiceContainer>
          <StyledRadioBtn
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
          <StyledRadioBtn
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
          <StyledRadioBtn
            type="radio"
            id="pilot"
            name="crew"
            value="pilot"
            onChange={handleChange}
          />
          <StyledLabel htmlFor="pilot" $selected={crewChoice === "pilot"} />
          <StyledRadioBtn
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
        <Role>{crew.role}</Role>
        <StyledH3>{crew.name}</StyledH3>
        <StyledP>{crew.bio}</StyledP>
      </CrewArticle>
    );
  });
  return (
    <CrewPage>
      <StyledH2>
        <span>02</span>Meet your crew
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
