/* eslint-disable react/prop-types */
import React, { createContext } from "react";
import app from "../firebase/firebase.config";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
// const app = initializeApp(firebaseConfig);
export const AuthContext = createContext();

const auth = getAuth(app);
// eslint-disable-next-line react/prop-types

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleprovider = new GoogleAuthProvider();
  const gitprovider = new GithubAuthProvider();
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserData = (profile) => {
    // setLoading(true);
    // console.log("updateuser is called");

    return updateProfile(auth.currentUser, profile);
  };

  const signInWithGoogle = () => {
    console.log("google is clicked");
    setLoading(true);
    return signInWithPopup(auth, googleprovider);
  };

  const signInWithGithub = () => {
    setLoading(true);
    console.log("gihub is clicked");
    return signInWithPopup(auth, gitprovider);
  };
  // as we have to observe user state from external(firebase) so use useEffect

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      // console.log("logged in user inside the authstate observer", loggedUser);
      setLoading(false);
      setUser(loggedUser);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInformation = {
    user,
    createUser,
    signIn,
    updateUserData,
    logout,
    loading,
    signInWithGoogle,
    signInWithGithub,
  };
  return (
    <AuthContext.Provider value={authInformation}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;
