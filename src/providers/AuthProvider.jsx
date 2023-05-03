import React, { createContext } from "react";
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProviders = ({ children }) => {
  const signIn = (email, password) => {};
  const user = { displayname: "messi" };
  const authInformation = {
    user,
  };
  return (
    <AuthContext.Provider value={authInformation}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;
