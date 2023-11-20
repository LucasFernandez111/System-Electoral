import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Views/Login";
import DashBoard from "../Views/DashBoard";
import Register from "../Views/Register";
import Partidos from "../Views/Partidos";
import Votar from "../components/Votation";
import ProtectedRoutes from "./ProtectedRoutes";

import Alert from "../components/Alerts";

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/prueba" element={<Alert text={"hola"} />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/votar" element={<Votar />} />
        <Route path="/partidos-selection" element={<Partidos />} />
        <Route path="/inicio" element={<DashBoard />} />
      </Route>
    </Routes>
  );
};

export default Routers;
