import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../hooks";
import firebase from "firebase/app";
import "firebase/auth";

export const PrivateRoute = (props) => {
  const { isUserLoggedIn, loading } = useAuth(firebase.auth());
  
  return (
    <div>
      {loading ? (
        <span>Loading...</span>
      ) : isUserLoggedIn ? (
        <Route {...props} />
      ) : (
        <Navigate to="/" state={{ from: props.path }} replace />
      )}
    </div>
  );
};
