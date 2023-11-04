import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";
import Register from "../pages/Register";
import Partidos from "../pages/Partidos";

import CardPost from "../components/CardPost";
const Routers = () => {
  return (
    <Routes>
      <Route path="/partidos-selection" element={<Partidos />} />
       <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/inicio" element={<DashBoard />} />
      <Route path="/prueba" element={<CardPost></CardPost>} />
    </Routes>
  );
};

export default Routers;
