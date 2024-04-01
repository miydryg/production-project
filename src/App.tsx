import React, { Suspense, useContext, useState } from "react";
import { Counter } from "./components/Counter";
import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { ThemeContext, Themes } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { themes, toggleThemes } = useTheme();
  return (
    <div className={classNames("app", {}, [themes])}>
      <Link to={"/"}>Головна</Link>
      <Link to={"/about"}>Про нас</Link>
      <button onClick={toggleThemes}>toggle</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
