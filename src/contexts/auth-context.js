import { createContext, useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyBL5r5ym775zGClYTphPUA8zn4tvPZ--M4",
  authDomain: "looptext-70c07.firebaseapp.com",
  projectId: "looptext-70c07",
  storageBucket: "looptext-70c07.appspot.com",
  messagingSenderId: "55173207228",
  appId: "1:55173207228:web:97203631080c63619eecb9",
  measurementId: "G-M3YXEWGJ07",
});

const auth = firebase.auth();

export const AuthContext = createContext();

const useAuth = (auth) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    const unsubscribe = auth.onAuthStateChanged((userData) =>
      setUser(userData)
    );
    return () => unsubscribe();
  }, []);

  return { user, isUserLoggedIn: user ? true : false, loading };
};

export const AuthProvider = ({ children }) => {
  const { user, loading, isUserLoggedIn } = useAuth(auth);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isUserLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
