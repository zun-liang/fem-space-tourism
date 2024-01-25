import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import BGDesktop from "../assets/destination/background-destination-desktop.jpg";
import BGMobile from "../assets/destination/background-destination-mobile.jpg";
import BGTablet from "../assets/destination/background-destination-tablet.jpg";
import {
  Article,
  Container,
  H2,
  H3,
  InputContainer,
  Label,
  P,
  RadioBtn,
  Section,
} from "../assets/styles/SharedStyles";

const DestinationPage = styled(Section)`
  background-image: url(${BGMobile});
  @media (min-width: 560px) {
    background-image: url(${BGTablet});
  }
  @media (min-width: 720px) {
    padding: 10rem 4rem 4rem;
    background-image: url(${BGDesktop});
    justify-content: flex-start;
  }
  @media (min-width: 1024px) {
    padding: 0 15%;
    justify-content: center;
  }
`;
const DestinationArticle = styled(Article)`
  gap: 2rem;
  @media (min-width: 720px) {
    display: grid;
    place-items: start;
    grid-template-columns: 40% 60%;
    grid-template-rows: 3rem repeat(1fr, 3);
    row-gap: 1rem;
    column-gap: 3rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 0;
  }
`;
const rotate = keyframes`
  0% {
      transform: rotate(0deg);
  }
  50% {
      transform: rotate(180deg);
  }
  100% {
      transform: rotate(360deg);
  }
`;
const StyledImg = styled.img`
  width: 65%;
  max-width: 20rem;
  animation: ${rotate} 180s linear infinite;
  @media (min-width: 720px) {
    grid-row: 1 / 5;
    width: 100%;
    max-width: auto;
    min-width: 13rem;
  }
`;
const ChoiceContainer = styled(InputContainer)`
  width: 60%;
  gap: 2rem;
  @media (min-width: 720px) {
    width: 100%;
    justify-content: flex-start;
    gap: 1.5rem;
  }
`;
const StyledLabel = styled(Label)`
  text-transform: uppercase;
  border-bottom: ${({ $selected }) =>
    $selected ? "3px solid hsl(var(--white))" : "3px solid transparent"};
  padding-bottom: 5px;
  letter-spacing: 3px;
  font-family: var(--font-2);
  color: hsl(var(--light-color));
  &:hover {
    border-bottom: 3px solid hsl(var(--white) / 0.5);
  }
`;
const StyledH3 = styled(H3)`
  font-size: 3.3rem;
  @media (min-width: 720px) {
    font-size: 4.5rem;
  }
`;
const StyledP = styled(P)`
  width: 80%;
  font-size: 0.95rem;
  @media (min-width: 720px) {
    width: 85%;
  }
  @media (min-width: 1024px) {
    width: 100%;
  }
`;
const StyledHr = styled.hr`
  width: 100%;
  border: 0.1px solid hsl(var(--white) / 0.1);
  @media (min-width: 720px) {
    width: 85%;
  }
`;
const DistanceTimeContainer = styled(Container)`
  gap: 2rem;
  @media (min-width: 720px) {
    grid-column: 2 / 3;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
const StyledItem = styled(P)`
  text-transform: uppercase;
  font-size: 0.9rem;
`;
const StyledItemContent = styled(StyledItem)`
  font-family: var(--font-3);
  font-weight: 400;
  font-size: 1.8rem;
  margin-top: 0.5rem;
  color: hsl(var(--white));
  @media (min-width: 720px) {
    font-size: 1.5rem;
  }
`;

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data.destinations;
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
    const relativePath = destination.images.png.replace("./", "/");
    const imgUrl = new URL(`${relativePath}`, import.meta.url).href;
    return (
      <DestinationArticle key={destination.name}>
        <StyledImg src={imgUrl} alt={destination.name} />
        <ChoiceContainer>
          <RadioBtn
            type="radio"
            id="moon"
            name="destination"
            value="moon"
            onChange={handleChange}
          />
          <StyledLabel htmlFor="moon" $selected={destinationChoice === "moon"}>
            Moon
          </StyledLabel>
          <RadioBtn
            type="radio"
            id="mars"
            name="destination"
            value="mars"
            onChange={handleChange}
          />
          <StyledLabel htmlFor="mars" $selected={destinationChoice === "mars"}>
            Mars
          </StyledLabel>
          <RadioBtn
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
          <RadioBtn
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
      <H2>
        <strong>01</strong> Pick your destination
      </H2>
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
