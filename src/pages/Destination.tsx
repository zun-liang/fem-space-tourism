import styled from "styled-components";
import BGMobile from "../assets/destination/background-destination-mobile.jpg";
import BGTablet from "../assets/destination/background-destination-tablet.jpg";
import BGDesktop from "../assets/destination/background-destination-desktop.jpg";
import Moon from "../assets/destination/image-moon.png";

const DestinationContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${BGMobile});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    background-image: url(${BGTablet});
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
`;
const StyledH3 = styled.h3`
  text-transform: uppercase;
  font-family: "Bellefair", sans-serif;
  font-size: 3rem;
  font-weight: normal;
  letter-spacing: 5px;
`;
const StyledList = styled.ul`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
`;
const StyledListItem = styled.li`
  list-style: none;
  text-transform: uppercase;
  font-family: "Barlow Condensed", sans-serif;
`;
const StyledImg = styled.img`
  transform: scale(0.63);
`;
const StyledP = styled.p``;
const Destination = () => {
  return (
    <DestinationContainer>
      <StyledH2>
        <span>01</span> Pick your destination
      </StyledH2>
      <StyledImg src={Moon} alt="moon" />
      <StyledList>
        <StyledListItem>Moon</StyledListItem>
        <StyledListItem>Mars</StyledListItem>
        <StyledListItem>Europa</StyledListItem>
        <StyledListItem>Titan</StyledListItem>
      </StyledList>
      <StyledH3>Moon</StyledH3>
      <StyledP>
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </StyledP>
    </DestinationContainer>
  );
};

export default Destination;
