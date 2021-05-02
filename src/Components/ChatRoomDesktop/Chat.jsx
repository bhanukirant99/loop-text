import { ChatBubble } from "./ChatBubble";
import {useState} from "react";
import {useAuth} from "../../hooks"
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {v4} from "uuid";
export const Chat = ({messages,roomId}) => {
  const [text,setText]=useState("");
  const {user}=useAuth(firebase.auth())

  const sendMessage=(e)=>{
    e.preventDefault();
    firebase.firestore()
    .collection('Rooms')
    .doc(roomId).update({
      messages: firebase.firestore.FieldValue.arrayUnion({
        msgId:v4(),
        uid: user.uid,
        sentAt: firebase.firestore.Timestamp.now(),
        text: text,
        displayName:user.displayName,
        photoURL:user.photoURL
      })
  });
  }
  return (
    <div className="chat  flex flex-col justify-end  h-4/5  mt-36 ">
      <div className="chatBubble-main w-full  bg-gray-50 ">
        {
          messages.map((msgItem)=><ChatBubble
          userName="Maddy"
          timeStamp="Today at 07:19"
          photoURL={msgItem.photoURL}
          message={msgItem.text}
        />)
        }
        {/* <ChatBubble
          userName="Maddy"
          timeStamp="Today at 07:19"
          message="Hello World "
        /> */}
        {/* <p className="flex flex-row justify-center w-72">Hello World</p> */}
      </div>

      <div className="input-message border w-full flex flex-row items-center  justify-end ">
      <form onSubmit={sendMessage}>
        <input type="text" className=" p-2 flex-grow outline-none" value={text} onChange={(e)=>{setText(e.target.value)}}/>
        <button type="submit"><span className="material-icons-round">send</span></button>
      </form>
      </div>
    </div>
  );
};
