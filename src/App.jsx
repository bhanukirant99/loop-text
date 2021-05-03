import "./App.css";
import { Landing, Hallway, ChatRoom } from "./pages";
import { Routes, Route, useNavigate } from "react-router-dom";
import { PrivateRoute } from "./Components";
import { useEffect } from "react";
import { useAuth } from "./hooks";
import firebase from "firebase/app";
import "firebase/auth";

const App = () => {
  const navigate = useNavigate();
  const { user } = useAuth(firebase.auth());

  useEffect(() => {
    user && navigate("/hallway");
  }, [user]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <PrivateRoute path="/hallway" element={<Hallway />} />
        <PrivateRoute path="/chatroom/:roomId" element={<ChatRoom />} />
      </Routes>
    </div>
  );
};

export default App;
