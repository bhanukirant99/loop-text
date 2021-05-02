import { Navigate, useLocation } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { useAuth } from "../../hooks/useAuth";
import "./Landing.css";

export const Landing = () => {
  const location = useLocation();
  const path = location.state?.from;
  const { user, isUserLoggedIn, loading } = useAuth(firebase.auth());

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  return (
    <div className="landing  flex flex-col items-center justify-evenly lg:justify-center ">
      <img src='/images/logo2.png' alt='logo'/>
      <span className="text-3xl mt-10">
      </span>

      {isUserLoggedIn ? (
        <span>You are logged in.</span>
      ) : (
        <span>You are logged out.</span>
      )}

      {isUserLoggedIn && path && <Navigate to={path} replace />}

      <img
        src="/images/sign_in.png"
        alt="sign-in"
        className="w-72 shadow-lg lg:w-96 rounded lg:mt-72 cursor-pointer"
        onClick={signInWithGoogle}
      />
    </div>
  );
};


