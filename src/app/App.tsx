import React, { Suspense, useContext, useState } from "react";
import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/provider/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import AppRouter from "./provider/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { themes, toggleThemes } = useTheme();
  return (
    <div className={classNames("app", {}, [themes])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleThemes}>
        toggle!!!!!!!!!!!!!!!!!!!!!
      </button>
    </div>
  );
};

export default App;
