import { Card } from "./Card";
import "./room_card.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useAuth } from "../../hooks";
import { useNavigate } from "react-router";

export const RoomCard = ({ rooms }) => {
  const { user } = useAuth(firebase.auth());
  const navigate = useNavigate();

  const addToRoom = async (roomId) => {
    await firebase
      .firestore()
      .collection("Rooms")
      .doc(roomId)
      .update({
        memberList: firebase.firestore.FieldValue.arrayUnion({
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        }),
        audience: firebase.firestore.FieldValue.arrayUnion({
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        }),
      });
    navigate(`/chatroom/${roomId}`);
  };

  return (
    <div className="flex flex-column flex-wrap items-center justify-center">
      {rooms &&
        rooms.map(({ topic, id }) => {
          return <Card key={id} topic={topic} id={id} callback={addToRoom} />;
        })}
    </div>
  );
};

