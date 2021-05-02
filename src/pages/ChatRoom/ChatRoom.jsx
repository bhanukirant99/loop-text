import firebase from "firebase/app";
import "firebase/firestore";
import { ChatRoomNavbar } from "./ChatRoomNavbar";
import { InputMessage } from "./InputMessage";
import { Message } from "./Message";
import { ChatRoomDesktop } from "../../Components";
import { useLocation, useParams } from "react-router";
import { useEffect,useState } from "react";

export const ChatRoom = () => {
 const {roomId}= useParams();
 const [roomTopic,setRoomTopic]=useState("");
 const [messages,setMessages]=useState([]);
  const [staged,setStaged]=useState([]);
  const [audience,setAudience]=useState([]);
 useEffect(()=>{
  firebase.firestore().collection("Rooms").doc(roomId).onSnapshot((snapshot)=>{
    setMessages(snapshot.data().messages);
    setStaged(snapshot.data().stagedList);
    setAudience(snapshot.data().audience);
    setRoomTopic(snapshot.data().topic);
  })
},[])

  return (
    <div>
      <ChatRoomDesktop messages={messages}/>

      <div className="lg:hidden">
        <ChatRoomNavbar />
        <h1 className="text-2xl text-center pt-5 border-b-2 ">{roomTopic}</h1>
        <Message messages={messages}/>
        <InputMessage />
      </div>
    </div>
  );
};
