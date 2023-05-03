/* eslint-disable react/prop-types */
import React, { createContext } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
// const app = initializeApp(firebaseConfig);
export const AuthContext = createContext(null);
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProviders = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const user = { displayname: "messi" };
  const authInformation = {
    user,
    createUser,
    signIn,
  };
  return (
    <AuthContext.Provider value={authInformation}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;

///////

// import React, { createContext } from "react";
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";
// import app from "../firebase/firebase.config";
// import { useEffect } from "react";
// import { useState } from "react";

// export const AuthContext = createContext(null);

// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const signIn = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const logOut = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
//       console.log("logged in user inside auth state observer", loggedUser);
//       setUser(loggedUser);
//       setLoading(false);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   const authInfo = {
//     user,
//     loading,
//     createUser,
//     signIn,
//     logOut,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;
