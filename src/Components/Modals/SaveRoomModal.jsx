import { Button } from "..";
import "./modal.css";
import firebase from "firebase/app";
import {useAuth} from "../../hooks";
import {useNavigate} from "react-router-dom"; 
import "firebase/firestore";
import "firebase/auth";

export const SaveRoomModal = ({roomId}) => {
    const {user}=useAuth(firebase.auth());
    const navigate=useNavigate();
    const saveRoom = async () => {
        await firebase
        .firestore()
        .collection("Rooms")
        .doc(roomId)
        .update({
          audience:[],
          stage: [],
          status:"PAST",
        });
      navigate("/hallway");
    };
    const discardRoom =async()=>{
        await firebase
        .firestore()
        .collection("Rooms")
        .doc(roomId)
        .delete()
      navigate("/hallway");
    }
    
  return (
    <div id ="SaveRoomModal" className="SaveRoomModal flex flex-col justify-center">
      <div className=" border w-72 p-5  ">
        <p className="text-white text-center text-1xl">Do you Want to Save the room?</p>
        <div className="dialog-actions flex flex-row justify-center mt-2">
         <Button onClickFunction={saveRoom}
            primary="bg-green-500 text-white w-3/5 h-10 text-1xl mx-3"
            text="Save"
          />
       <Button onClickFunction={discardRoom}
            primary="bg-red-500 text-white w-3/5 h-10 text-1xl "
            text="Discard"
          /> 
        </div>
      </div>
    </div>
  );
};