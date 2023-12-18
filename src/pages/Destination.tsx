import { useState } from "react";
import styled from "styled-components";

import BGDesktop from "../assets/destination/background-destination-desktop.jpg";
import BGMobile from "../assets/destination/background-destination-mobile.jpg";
import BGTablet from "../assets/destination/background-destination-tablet.jpg";
import { SharedSection } from "../assets/styles/SharedStyles";
import { useLoaderData } from "react-router-dom";

const DestinationsContainer = styled(SharedSection)`
  height: auto;
  min-height: 100vh;
  background-image: url(${BGMobile});
  padding: 6.5rem 2rem 4rem;
  gap: 2rem;
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
const StyledH2 = styled.h2`
  text-transform: uppercase;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1rem;
  font-weight: normal;
  letter-spacing: 5px;
  & > span {
    color: gray;
    font-weight: bold;
  }
  @media (min-width: 560px) {
    margin-top: 1rem;
    font-size: 1.1rem;
  }
  @media (min-width: 720px) {
    font-size: 1.5rem;
    margin-top: 3.5rem;
    align-self: flex-start;
  }
`;
const StyledH3 = styled.h3`
  text-transform: uppercase;
  font-family: "Bellefair", sans-serif;
  font-size: 3.3rem;
  font-weight: normal;
  letter-spacing: 5px;
  @media (min-width: 720px) {
    font-size: 4.5rem;
  }
`;
const StyledList = styled.ul`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
`;
const StyledListItem = styled.li`
  list-style: none;
  text-transform: uppercase;
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 3px;
  cursor: pointer;
  &:hover {
    text-decoration: 3px underline gray;
    text-underline-offset: 10px;
  }
`;
const DestinationContainer = styled.section`
  display: grid;
  place-items: center;
  gap: 2rem;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  @media (min-width: 720px) {
    place-items: start;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3rem repeat(1fr, 3);
    & > div {
      grid-column: 2 / 3;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
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
`;

// eslint-disable-next-line react-refresh/only-export-components
export const loader = () => {
  return fetch("/data.json")
    .then((res) => res.json())
    .then((data) => {
      return data.destinations;
    });
};

interface Destination {
  name: string;
  images: { png: string };
  description: string;
  distance: string;
  travel: string;
}
const Destination = () => {
  const [destination, setDestination] = useState<string>("moon");
  const data = useLoaderData() as Destination[];
  const destinationsArr = data.map((destination: Destination) => {
    const baseUrl = window.location.href.replace("/destination", "/src");
    const relativePath = destination.images.png.replace("./", "");
    const imgUrl = new URL(`${baseUrl}/${relativePath}`, import.meta.url).href;
    return (
      <DestinationContainer key={destination.name}>
        <StyledImg src={imgUrl} alt={destination.name} />
        <StyledList>
          <StyledListItem onClick={() => setDestination("moon")}>
            Moon
          </StyledListItem>
          <StyledListItem onClick={() => setDestination("mars")}>
            Mars
          </StyledListItem>
          <StyledListItem onClick={() => setDestination("europa")}>
            Europa
          </StyledListItem>
          <StyledListItem onClick={() => setDestination("titan")}>
            Titan
          </StyledListItem>
        </StyledList>
        <StyledH3>{destination.name}</StyledH3>
        <StyledP>{destination.description}</StyledP>
        <StyledHr />
        <div>
          <div>
            <StyledItem>Avg. distance</StyledItem>
            <StyledItemContent>{destination.distance}</StyledItemContent>
          </div>
          <div>
            <StyledItem>Est. travel time</StyledItem>
            <StyledItemContent>{destination.travel}</StyledItemContent>
          </div>
        </div>
      </DestinationContainer>
    );
  });

  return (
    <DestinationsContainer>
      <StyledH2>
        <span>01</span> Pick your destination
      </StyledH2>
      {destination === "moon"
        ? destinationsArr[0]
        : destination === "mars"
        ? destinationsArr[1]
        : destination === "europa"
        ? destinationsArr[2]
        : destinationsArr[3]}
    </DestinationsContainer>
  );
};

export default Destination;
