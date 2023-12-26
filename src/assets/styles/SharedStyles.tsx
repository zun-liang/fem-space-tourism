/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";

import { LabelProps } from "../../interfaces";

export const Section = styled.section`
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding: 6.5rem 2rem 4rem;
  gap: 2rem;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const H2 = styled.h2`
  text-transform: uppercase;
  font-family: var(--font-2);
  font-size: 1rem;
  font-weight: normal;
  letter-spacing: 5px;
  & > span {
    color: hsl(var(--white) / 0.25);
    font-weight: bold;
  }
  @media (min-width: 560px) {
    margin-top: 1rem;
    font-size: 1.1rem;
  }
  @media (min-width: 720px) {
    font-size: 1.5rem;
    margin-top: 4.5rem;
    align-self: flex-start;
  }
`;
export const H3 = styled.h3`
  text-transform: uppercase;
  font-family: var(--font-3);
  font-weight: 400;
  letter-spacing: 5px;
`;
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
export const RadioBtn = styled.input`
  display: none;
`;
export const Label = styled.label<LabelProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const ScreenReader = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect() (0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;
