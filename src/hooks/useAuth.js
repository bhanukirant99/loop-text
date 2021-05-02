import { useContext } from "react";
import { AuthContext } from "../contexts";

export const useAuth = () => {
  const { auth, user, loading, isUserLoggedIn } = useContext(AuthContext);

  return { auth, user, loading, isUserLoggedIn };
};
