import { Button } from "..";
import "./modal.css";
import {SaveChatModal} from '../Modals/SaveChatModal'
import firebase from "firebase/app";
import {useAuth} from "../../hooks";
import {useNavigate} from "react-router-dom"; 
import "firebase/firestore";
import "firebase/auth";
export const DialogModal = ({ msg ,roomId ,creatorId}) => {
  const {user}=useAuth(firebase.auth());
  const navigate=useNavigate();
  const leaveRoom = async () => {
      await firebase
      .firestore()
      .collection("Rooms")
      .doc(roomId)
      .update({
        audience: firebase.firestore.FieldValue.arrayRemove({
          displayName: user.displayName,
          uid: user.uid,
          photoURL: user.photoURL,
        }),
        stage: firebase.firestore.FieldValue.arrayRemove({
    
          displayName: user.displayName,
          uid: user.uid,
          photoURL: user.photoURL,
        }),
      });
    navigate("/hallway");
  };
  return (
    <>
    <div id="modal" className="modal flex flex-col justify-center">
      <div className="dialog-content border w-72 p-5  ">
        <p className="text-white  text-1xl">Do you really want to close</p>
        <div className="dialog-actions flex flex-row justify-center mt-2">
          <a href="#SaveChatModal" className=' w-3/5 '>
            <Button
              primary="bg-green-500 text-white w-2/5 h-10 text-1xl "
              onClickFunction={leaveRoom}
              text="Yes"
            />
          </a>
          <a href="#close" className=' w-3/5'>
            <Button
              primary="bg-red-500 text-white w-2/5 h-10 text-1xl "
              text="No"
            />
          </a>
        </div>
      </div>
      
    </div>
    <SaveChatModal/>
    </>
  );
};
