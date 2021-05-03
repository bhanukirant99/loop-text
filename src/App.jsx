import "./App.css";
import { Landing, Hallway,ChatRoom} from "./pages";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./Components";
import { useEffect } from "react";

const App = () => {

  useEffect(
    ()=>{
      
    }
  )
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
