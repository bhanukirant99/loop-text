import { Navigate, useLocation } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { useAuth } from "../../hooks/useAuth";
import "./Landing.css";

export const Landing = () => {
  const location = useLocation();
  const path = location.state?.from;
  const { user, isUserLoggedIn, loading } = useAuth(firebase.auth());

  console.log({ user, isUserLoggedIn, loading });

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  return (
    <div className="landing  flex flex-col items-center justify-evenly lg:justify-center">
      <h1 className="text-5xl lg:text-8xl">LoopText</h1>
      <span className="text-4xl mt-12">
        Never Miss the live conversation again!
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

{
  /* <Navbar /> */
}
// {path && <span>Login to continue to {path}</span>}
//       This is the landing page.
//       {isUserLoggedIn && <span>You are logged in.</span>}
//       <div>
//         <button onClick={signInWithGoogle}>Sign in with Google</button>
//       </div>
{
  /* <Button primary="bg-blue-500 text-white w-2/5 h-20 text-3xl" text='Login'/> */
}
