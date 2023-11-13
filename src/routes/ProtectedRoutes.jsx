import React from "react";
import storage from "../storage/storage";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const authUser = storage.get("authUser");

  if (!authUser) return <Navigate to={"/login"} />;

  return <Outlet />;
};

export default ProtectedRoutes;
