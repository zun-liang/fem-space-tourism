import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import styled from "styled-components";

import MainLayout from "./layouts/MainLayout";
import Crew, { loader as crewLoader } from "./pages/Crew";
import Destination, { loader as destinationLoader } from "./pages/Destination";
import Home from "./pages/Home";
import Technology, { loader as technologyLoader } from "./pages/Technology";

import "./App.css";

const AppContainer = styled.div`
  width: 100%;
  height: var(--app-height);
`;

const App = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const updateScreenWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, [screenWidth]);

  const setAppHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };
  useEffect(() => {
    window.addEventListener("resize", setAppHeight);
    setAppHeight();
    return () => window.removeEventListener("resize", setAppHeight);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <MainLayout menu={menu} setMenu={setMenu} screenWidth={screenWidth} />
        }
      >
        <Route index element={<Home />} />
        <Route
          path="destination"
          element={<Destination />}
          loader={destinationLoader}
        />
        <Route path="crew" element={<Crew />} loader={crewLoader} />
        <Route
          path="technology"
          element={<Technology screenWidth={screenWidth} />}
          loader={technologyLoader}
        />
      </Route>
    )
  );
  return (
    <AppContainer>
      <RouterProvider router={router} />
    </AppContainer>
  );
};

export default App;
