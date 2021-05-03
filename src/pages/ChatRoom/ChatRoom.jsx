import firebase from "firebase/app";
import "firebase/firestore";
import { ChatRoomNavbar } from "./ChatRoomNavbar";
import { Navbar } from "../../Components";
import { InputMessage } from "./InputMessage";
import { Message } from "./Message";
import { ChatRoomDesktop } from "../../Components";
import { Navigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import {Notification} from "../../Components/Notification/Notification"
import { useAuth } from "../../hooks";
import {v4 } from "uuid";

export const ChatRoom = () => {
  const navigate=useNavigate();
  const { roomId } = useParams();
  const [roomTopic, setRoomTopic] = useState("");
  const [messages, setMessages] = useState([]);
  const [staged, setStaged] = useState([]);
  const [audience, setAudience] = useState([]);
  const [creatorId, setCreatorId] = useState("");

  const {user}=useAuth(firebase.auth());

  useEffect(() => {
    firebase
      .firestore()
      .collection("Rooms")
      .doc(roomId)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.data().messages);
        setStaged(snapshot.data().stage);
        setAudience(snapshot.data().audience);
        setRoomTopic(snapshot.data().topic);
        setCreatorId(snapshot.data().creator);
      });
  }, []);

  const raiseHand =async ()=>{
    const users = await firebase.firestore().collection("users").where("uid", "==", creatorId).get();
    const data=users.docs.map((doc) => ({...doc.data(),
    id: doc.id}));
    // console.log(data[0].id);

    firebase
    .firestore()
    .collection("users")
    .doc(data[0].id)//Doc with creator id
    .update({
      notifications: firebase.firestore.FieldValue.arrayUnion({
        notificationId:v4(),
        type: "RAISE_HAND_REQUEST",
        roomId: roomId ,
        // uid:user.uid,
        user:{displayName:user.displayName,uid:user.uid,photoURL:user.photoURL},
        isRead: false
      })
  })
}

  const leaveRoom = async() =>{
  await  firebase
.firestore()
.collection("Rooms")
.doc(roomId)
.update({
  audience: firebase.firestore.FieldValue.arrayRemove({displayName:user.displayName,uid:user.uid,photoURL:user.photoURL}),
  stage: firebase.firestore.FieldValue.arrayRemove({displayName:user.displayName,uid:user.uid,photoURL:user.photoURL}),
});
navigate("/hallway");

  }
  return (
    <div>
      <Navbar />
      {/* <Notification/> */}
      <button onClick={raiseHand} style={{zIndex:"100",paddingTop:"4rem"}}>Raise hand</button>
      <button onClick={leaveRoom} style={{zIndex:"100",paddingTop:"8rem"}}>Leave Room</button>
      <ChatRoomDesktop
        messages={messages}
        staged={staged}
        audience={audience}
        roomId={roomId}
        creatorId={creatorId}
      />

      {/* <div className="lg:hidden">
        <ChatRoomNavbar />
        <h1 className="text-2xl text-center pt-20 border-b-2 ">{roomTopic}</h1>
        <Message messages={messages} />
        <InputMessage />
      </div> */}
    </div>
  );
};
