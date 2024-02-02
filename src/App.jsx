import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/login";
import InicioPage from "./pages/inicio";
import DashBoardPage from "./pages/dashboard";
import NavegationBar from "./components/NavBar/NavBarContainer";

export default function App() {
  return (
    <BrowserRouter>
      <NavegationBar />
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Dashboard" element={<DashBoardPage />} />
      </Routes>
    </BrowserRouter>
  );
}
