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
} from "firebase/auth";
// const app = initializeApp(firebaseConfig);
export const AuthContext = createContext(null);

const auth = getAuth(app);
// eslint-disable-next-line react/prop-types

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

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
  const updateUserData = (photUrl) => {
    setLoading(true);
    console.log("updateuser is called");
    if (user) {
      return updateProfile(auth.user, {
        photoURL: photUrl,
      });
    }
  };

  const signInWithGoogle = () => {
    console.log("google is clicked");
    return signInWithPopup(auth, provider);
  };

  const signInWithGithub = () => {
    console.log("gihub is clicked");
    return;
  };
  // as we have to observe user state from external(firebase) so use useEffect

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("logged in user inside the authstate observer", loggedUser);
      setUser(loggedUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
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
