import React, { createContext } from "react";
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";

const AuthContext = createContext(null);
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProviders = ({ children }) => {
  const authInformation = {
    name: "a",
  };
  return (
    <AuthContext.Provider value={authInformation}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;
