/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";
const PrivateRoute = ({ children }) => {
  // to apply private route we have to check if user is available or not
  // to do it observe user state change in authContext

  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathName || "/";

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
