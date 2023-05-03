/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  // to apply private route we have to check if user is available or not
  // to do it observe user state change in authContext

  const { user } = useContext(AuthContext);
  const location = useLocation();
  const from = location?.state?.from?.pathName || "/";
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
