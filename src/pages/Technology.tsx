import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";

import {
  H2,
  Section,
  InputContainer,
  RadioBtn,
  Label,
  H3,
} from "../assets/styles/SharedStyles";
import BGDesktop from "../assets/technology/background-technology-desktop.jpg";
import BGMobile from "../assets/technology/background-technology-mobile.jpg";
import BGTablet from "../assets/technology/background-technology-tablet.jpg";

const TechnologyPage = styled(Section)`
  background-image: url(${BGMobile});
  gap: 3rem;
  padding: 2rem 0;
  @media (min-width: 560px) {
    background-image: url(${BGTablet});
  }
  @media (min-width: 1024px) {
    background-image: url(${BGDesktop});
  }
`;
const StyledH2 = styled(H2)``;
const TechnologyArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const StyledImg = styled.img`
  width: 100%;
  object-fit: contain;
`;
const ChoiceContainer = styled(InputContainer)`
  justify-content: center;
  gap: 1rem;
`;
const StyledRadioBtn = styled(RadioBtn)``;
const StyledLabel = styled(Label)`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid gray;
  background-color: ${({ $selected }) => ($selected ? "white" : "")};
  color: ${({ $selected }) => ($selected ? "black" : "white")};
  font-family: "Bellefair", sans-serif;
  &:hover {
    border: 1px solid white;
  }
  @media (min-width: 720px) {
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    width: 4rem;
    height: 4rem;
    font-size: 1.8rem;
  }
`;
const StyledH3 = styled(H3)`
  font-size: 1.5rem;
  letter-spacing: 0;
  margin-top: -1.5rem;
`;
const StyledH4 = styled.h4`
  text-transform: uppercase;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 400;
  letter-spacing: 2px;
  font-size: 0.9rem;
`;
const StyledP = styled.p`
  margin: 0 2rem;
  line-height: 1.5;
  text-align: center;
`;

// eslint-disable-next-line react-refresh/only-export-components
export const loader = () => {
  return fetch("/data.json")
    .then((res) => res.json())
    .then((data) => data.technology);
};

interface Props {
  screenWidth: number;
}
interface Technology {
  name: string;
  images: { portrait: string; landscape: string };
  description: string;
}

const Technology = ({ screenWidth }: Props) => {
  const [techChoice, setTechChoice] = useState<string>("vehicle");
  const data = useLoaderData() as Technology[];
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTechChoice(event.target.value);

  const technologyArr = data.map((technology) => {
    const baseUrl = window.location.href.replace("/technology", "/src");
    const relativePathPortrait = technology.images.portrait.replace("./", "/");
    const relativePathLandscape = technology.images.landscape.replace(
      "./",
      "/"
    );
    const portraitUrl = new URL(
      `${baseUrl}${relativePathPortrait}`,
      import.meta.url
    ).href;
    const landscapeUrl = new URL(
      `${baseUrl}${relativePathLandscape}`,
      import.meta.url
    ).href;
    return (
      <TechnologyArticle key={technology.name}>
        <StyledImg
          src={screenWidth < 1024 ? `${landscapeUrl}` : `${portraitUrl}`}
          alt={technology.name}
        />
        <ChoiceContainer>
          <StyledRadioBtn
            type="radio"
            id="vehicle"
            name="technology"
            value="vehicle"
            onChange={handleChange}
          />
          <StyledLabel htmlFor="vehicle" $selected={techChoice === "vehicle"}>
            1
          </StyledLabel>
          <StyledRadioBtn
            type="radio"
            id="spaceport"
            name="technology"
            value="spaceport"
            onChange={handleChange}
          />
          <StyledLabel
            htmlFor="spaceport"
            $selected={techChoice === "spaceport"}
          >
            2
          </StyledLabel>
          <StyledRadioBtn
            type="radio"
            id="capsule"
            name="technology"
            value="capsule"
            onChange={handleChange}
          />
          <StyledLabel htmlFor="capsule" $selected={techChoice === "capsule"}>
            3
          </StyledLabel>
        </ChoiceContainer>
        <StyledH4>The terminology...</StyledH4>
        <StyledH3>{technology.name}</StyledH3>
        <StyledP>{technology.description}</StyledP>
      </TechnologyArticle>
    );
  });
  return (
    <TechnologyPage>
      <StyledH2>
        <span>03</span> Space launch 101
      </StyledH2>
      {techChoice === "vehicle"
        ? technologyArr[0]
        : techChoice === "spaceport"
        ? technologyArr[1]
        : techChoice === "capsule"
        ? technologyArr[2]
        : technologyArr[3]}
    </TechnologyPage>
  );
};

export default Technology;
