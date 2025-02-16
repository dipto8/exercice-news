import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // Register
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Signed in
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Signed Out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // check if (user currently signIn)
  useEffect(() => {
    const Observer = onAuthStateChanged(auth, (currentUser) => {
      console.log("User in the Auth State changed", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => Observer();
  }, []);

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    loading
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
