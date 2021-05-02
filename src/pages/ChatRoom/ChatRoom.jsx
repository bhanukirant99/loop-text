import firebase from "firebase/app";
import "firebase/firestore";
import { ChatRoomNavbar } from "./ChatRoomNavbar";
import {Navbar} from '../../Components'
import { InputMessage } from "./InputMessage";
import { Message } from "./Message";
import { ChatRoomDesktop } from "../../Components";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

export const ChatRoom = () => {
  const { roomId } = useParams();
  const [roomTopic, setRoomTopic] = useState("");
  const [messages, setMessages] = useState([]);
  const [staged, setStaged] = useState([]);
  const [audience, setAudience] = useState([]);
  const [creatorId, setCreatorId] = useState("");

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

  return (
    <div>
      <ChatRoomDesktop
        messages={messages}
        staged={staged}
        audience={audience}
        roomId={roomId}
        creatorId={creatorId}
      />

      <div className="lg:hidden">
        <ChatRoomNavbar />
        <h1 className="text-2xl text-center pt-5 border-b-2 ">{roomTopic}</h1>
        <Message messages={messages} />
        <InputMessage />
      </div>
    </div>
  );
};
