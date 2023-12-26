import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";

import BGDesktop from "../assets/destination/background-destination-desktop.jpg";
import BGMobile from "../assets/destination/background-destination-mobile.jpg";
import BGTablet from "../assets/destination/background-destination-tablet.jpg";
import {
  H2,
  H3,
  InputContainer,
  Label,
  RadioBtn,
  Section,
} from "../assets/styles/SharedStyles";

const DestinationPage = styled(Section)`
  background-image: url(${BGMobile});
  @media (min-width: 560px) {
    background-image: url(${BGTablet});
  }
  @media (min-width: 720px) {
    padding: 6.5rem 4rem 4rem;
  }
  @media (min-width: 1024px) {
    background-image: url(${BGDesktop});
  }
`;
const StyledH2 = styled(H2)``;
const DestinationArticle = styled.article`
  display: grid;
  place-items: center;
  gap: 2rem;
  @media (min-width: 720px) {
    place-items: start;
    grid-template-columns: 40% 60%;
    grid-template-rows: 3rem repeat(1fr, 3);
    & > div {
    }
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const DistanceTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media (min-width: 720px) {
    grid-column: 2 / 3;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
const StyledImg = styled.img`
  width: 65%;
  max-width: 20rem;
  animation: 180s linear infinite rotate;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media (min-width: 720px) {
    grid-row: 1 / 5;
    min-width: 13rem;
  }
`;
const ChoiceContainer = styled(InputContainer)`
  gap: 2rem;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  @media (min-width: 720px) {
    gap: 1.5rem;
  }
`;
const StyledRadioBtn = styled(RadioBtn)``;
const StyledLabel = styled(Label)`
  text-transform: uppercase;
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 3px;
  text-decoration: ${({ $selected }) =>
    $selected ? "3px underline white" : "3px underline transparent"};
  text-underline-offset: 10px;
  &:hover {
    text-decoration: 3px underline gray;
  }
`;
const StyledH3 = styled(H3)`
  font-size: 3.3rem;
  @media (min-width: 720px) {
    font-size: 4.5rem;
  }
`;
const StyledP = styled.p`
  line-height: 1.5;
  text-align: center;
  font-size: 0.95rem;
  @media (min-width: 720px) {
    text-align: left;
    line-height: 2;
    width: 85%;
  }
`;
const StyledHr = styled.hr`
  width: 100%;
  border: 0.1px solid gray;
  margin: 1rem 0;
`;
const StyledItem = styled.p`
  text-transform: uppercase;
  font-size: 0.9rem;
  text-align: center;
  @media (min-width: 720px) {
    text-align: left;
  }
`;
const StyledItemContent = styled(StyledItem)`
  font-family: "Bellefair", sans-serif;
  font-size: 1.8rem;
  margin-top: 0.5rem;
  @media (min-width: 720px) {
    font-size: 1.5rem;
  }
`;

// eslint-disable-next-line react-refresh/only-export-components
export const loader = () => {
  return fetch("/data.json")
    .then((res) => res.json())
    .then((data) => data.destinations);
};

interface Destination {
  name: string;
  images: { png: string };
  description: string;
  distance: string;
  travel: string;
}

const Destination = () => {
  const [destinationChoice, setDestinationChoice] = useState<string>("moon");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setDestinationChoice(event.target.value);

  const data = useLoaderData() as Destination[];
  const destinationsArr = data.map((destination: Destination) => {
    const baseUrl = window.location.href.replace("/destination", "/src");
    const relativePath = destination.images.png.replace("./", "/");
    const imgUrl = new URL(`${baseUrl}${relativePath}`, import.meta.url).href;
    return (
      <DestinationArticle key={destination.name}>
        <StyledImg src={imgUrl} alt={destination.name} />
        <ChoiceContainer>
          <StyledRadioBtn
            type="radio"
            id="moon"
            name="destination"
            value="moon"
            onChange={handleChange}
          />
          <StyledLabel htmlFor="moon" $selected={destinationChoice === "moon"}>
            Moon
          </StyledLabel>
          <StyledRadioBtn
            type="radio"
            id="mars"
            name="destination"
            value="mars"
            onChange={handleChange}
          />
          <StyledLabel htmlFor="mars" $selected={destinationChoice === "mars"}>
            Mars
          </StyledLabel>
          <StyledRadioBtn
            type="radio"
            id="europa"
            name="destination"
            value="europa"
            onChange={handleChange}
          />
          <StyledLabel
            htmlFor="europa"
            $selected={destinationChoice === "europa"}
          >
            Europa
          </StyledLabel>
          <StyledRadioBtn
            type="radio"
            id="titan"
            name="destination"
            value="titan"
            onChange={handleChange}
          />
          <StyledLabel
            htmlFor="titan"
            $selected={destinationChoice === "titan"}
          >
            Titan
          </StyledLabel>
        </ChoiceContainer>
        <StyledH3>{destination.name}</StyledH3>
        <StyledP>{destination.description}</StyledP>
        <StyledHr />
        <DistanceTimeContainer>
          <div>
            <StyledItem>Avg. distance</StyledItem>
            <StyledItemContent>{destination.distance}</StyledItemContent>
          </div>
          <div>
            <StyledItem>Est. travel time</StyledItem>
            <StyledItemContent>{destination.travel}</StyledItemContent>
          </div>
        </DistanceTimeContainer>
      </DestinationArticle>
    );
  });

  return (
    <DestinationPage>
      <StyledH2>
        <span>01</span> Pick your destination
      </StyledH2>
      {destinationChoice === "moon"
        ? destinationsArr[0]
        : destinationChoice === "mars"
        ? destinationsArr[1]
        : destinationChoice === "europa"
        ? destinationsArr[2]
        : destinationsArr[3]}
    </DestinationPage>
  );
};

export default Destination;
