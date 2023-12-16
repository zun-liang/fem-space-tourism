import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Destination from "./pages/Destination";
import MainLayout from "./MainLayout";
import styled from "styled-components";

import "./App.css";

const AppContainer = styled.div`
  width: 100%;
  height: var(--app-height);
`;

const App = () => {
  const [menu, setMenu] = useState<boolean>(false);

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
      <Route path="/" element={<MainLayout menu={menu} setMenu={setMenu} />}>
        <Route index element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
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
