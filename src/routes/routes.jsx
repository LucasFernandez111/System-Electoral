import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";

import CardPost from "../components/CardPost";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/inicio" element={<DashBoard />} />
      <Route path="/prueba" element={<CardPost></CardPost>} />
    </Routes>
  );
};

export default Routers;
