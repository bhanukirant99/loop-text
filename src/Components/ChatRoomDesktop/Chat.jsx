import { ChatBubble } from "./ChatBubble";
import { useState } from "react";
import { useAuth } from "../../hooks";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { v4 } from "uuid";
export const Chat = ({ messages, roomId }) => {
  const [text, setText] = useState("");
  const { user } = useAuth(firebase.auth());

  const sendMessage = (e) => {
    e.preventDefault();
    firebase
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
  };
  return (
    <div className="chat flex flex-col">
      <div className="bg-gray-50 ml-8 z-10 w-full">
        {messages.map((msgItem) => (
          <div key={msgItem.msgId}>
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
      </div>

      <div className="">
        <form
          onSubmit={sendMessage}
          className="flex flex-row"
        >
          <input
            type="text"
            className="p-3 w-3/4 flex-grow outline-none"
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
