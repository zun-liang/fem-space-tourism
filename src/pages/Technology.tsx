import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";

import {
  H2,
  H3,
  InputContainer,
  Label,
  RadioBtn,
  Section,
} from "../assets/styles/SharedStyles";
import BGDesktop from "../assets/technology/background-technology-desktop.jpg";
import BGMobile from "../assets/technology/background-technology-mobile.jpg";
import BGTablet from "../assets/technology/background-technology-tablet.jpg";

const TechnologyPage = styled(Section)`
  background-image: url(${BGMobile});
  gap: 3rem;
  padding: 6.5rem 0 4rem;
  @media (min-width: 560px) {
    background-image: url(${BGTablet});
  }
  @media (min-width: 720px) {
    padding: 2rem 0rem 2rem 5rem;
  }
  @media (min-width: 1024px) {
    background-image: url(${BGDesktop});
    padding: 2rem 6rem 3rem 10rem;
  }
`;
const TechnologyArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: 4rem 3fr 2fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 4rem 4fr 5fr;
    gap: 1rem;
  }
`;
const StyledImg = styled.img`
  width: 100%;
  object-fit: contain;
  @media (min-width: 720px) {
    grid-column: 3 / 4;
    grid-row: 1 / -1;
  }
  @media (min-width: 1024px) {
  }
`;
const ChoiceContainer = styled(InputContainer)`
  justify-content: center;
  gap: 1rem;
  @media (min-width: 720px) {
    width: 4rem;
    flex-direction: column;
  }
`;
const StyledLabel = styled(Label)`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid hsl(var(--white) / 0.25);
  background-color: ${({ $selected }) =>
    $selected ? "hsl(var(--white))" : "hsl(var(--white) / 0)"};
  color: ${({ $selected }) =>
    $selected ? "hsl(var(--dark-color))" : "hsl(var(--white))"};
  font-family: var(--font-3);
  font-weight: 400;
  &:hover {
    border: 1px solid hsl(var(--white));
  }
  @media (min-width: 720px) {
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    width: 3.5rem;
    height: 3.5rem;
    font-size: 1.8rem;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  @media (min-width: 720px) {
    align-items: flex-start;
  }
`;
const StyledH3 = styled(H3)`
  font-size: 1.5rem;
  letter-spacing: 0;
  margin-top: -2.3rem;
  @media (min-width: 720px) {
    font-size: 2.8rem;
  }
`;
const StyledH4 = styled.h4`
  text-transform: uppercase;
  font-family: var(--font-2);
  font-weight: 400;
  letter-spacing: 2px;
  font-size: 0.9rem;
  color: hsl(var(--light-color));
`;
const StyledP = styled.p`
  margin: -1rem 2.5rem 0;
  line-height: 1.5;
  text-align: center;
  font-size: 0.9rem;
  color: hsl(var(--light-color));
  @media (min-width: 720px) {
    margin: -1rem 0 0;
    font-size: 1rem;
    line-height: 2;
    text-align: left;
  }
  @media (min-width: 1024px) {
    font-size: 0.95rem;
  }
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
          src={screenWidth < 720 ? `${landscapeUrl}` : `${portraitUrl}`}
          alt={technology.name}
        />
        <ChoiceContainer>
          <RadioBtn
            type="radio"
            id="vehicle"
            name="technology"
            value="vehicle"
            onChange={handleChange}
          />
          <StyledLabel htmlFor="vehicle" $selected={techChoice === "vehicle"}>
            1
          </StyledLabel>
          <RadioBtn
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
          <RadioBtn
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
        <TextContainer>
          <StyledH4>The terminology...</StyledH4>
          <StyledH3>{technology.name}</StyledH3>
          <StyledP>{technology.description}</StyledP>
        </TextContainer>
      </TechnologyArticle>
    );
  });
  return (
    <TechnologyPage>
      <H2>
        <span>03</span> Space launch 101
      </H2>
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
