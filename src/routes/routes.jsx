import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Views/Login";
import DashBoard from "../Views/DashBoard";
import Register from "../Views/Register";
import Partidos from "../Views/Partidos";
import Votar from "../components/Votation";
import Profile from "../components/Profile";
import ProtectedRoutes from "./ProtectedRoutes";

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/votar" element={<Votar />} />
        <Route path="/partidos-selection" element={<Partidos />} />
        <Route path="/inicio" element={<DashBoard />} />
        <Route path="/prueba" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default Routers;
