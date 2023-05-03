/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  // to apply private route we have to check if user is available or not
  // to do it observe user state change in authContext

  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
