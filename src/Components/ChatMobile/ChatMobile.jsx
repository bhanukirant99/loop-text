import { ChatBubble } from "../ChatRoomDesktop/ChatBubble";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../hooks";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { v4 } from "uuid";
export const ChatMobile = ({ messages, roomId }) => {
  const [text, setText] = useState("");
  const { user } = useAuth(firebase.auth());

  const scrollRef = useRef();

  useEffect(() => {
    scrollRef?.current &&
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    await firebase
      .firestore()
      .collection("Rooms")
      .doc(roomId)
      .update({
        messages: firebase.firestore.FieldValue.arrayUnion({
          msgId: v4(),
          uid: user.uid,
          sentAt: firebase.firestore.Timestamp.now(),
          text: text,
          displayName: user.displayName,
          photoURL: user.photoURL,
        }),
      });
    setText("");
  };
  return (
    <div className="chat flex flex-col justify-end  pt-10 ">
      <div className="flex flex-col justify-end">
        <div className="bg-gray-50 w-full   clip-scroll">
          {messages.map((msgItem) => (
            <div key={msgItem.msgId} className="ml-3">
              <ChatBubble
                userName="Maddy"
                timeStamp="Today at 07:19"
                photoURL={msgItem.photoURL}
              />
              <p className="flex flex-row justify-center items-center w-2/5">
                {msgItem.text}
              </p>
            </div>
          ))}
          <div ref={scrollRef}></div>
        </div>
      </div>
      <div className="w-full">
        <form onSubmit={sendMessage} className="flex flex-row w-full">
          <input
            type="text"
            className="p-3 w-full flex-grow outline-none"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button type="submit">
            <span className="material-icons-round">send</span>
          </button>
        </form>
      </div>
    </div>
  );
};
