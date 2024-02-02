import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/login";
import VentaPage from "./pages/venta";
import DashBoardPage from "./pages/dashboard";
import NavegationBar from "./components/NavBar/NavBarContainer";
import InventarioPage from "./pages/inventario";

export default function App() {
  return (
    <BrowserRouter>
      <NavegationBar />
      <Routes>
        <Route path="/" element={<DashBoardPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/venta" element={<VentaPage />} />
        <Route path="/Inventario" element={<InventarioPage />} />
      </Routes>
    </BrowserRouter>
  );
}
