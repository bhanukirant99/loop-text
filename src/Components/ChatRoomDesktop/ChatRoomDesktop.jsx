import { Stage } from "./Stage";
import { Chat } from "./Chat";
import { Audience } from "./Audience";

import "./chat_room_desktop.css";
export const ChatRoomDesktop = ({messages,staged,audience,roomId}) => {
  return (
    <div className="chat_room_desktop_main">
      <Stage text="Stage" staged={staged} roomId={roomId}/>
      <Chat messages={messages} roomId={roomId}/>
      <Audience text="Audience" audience={audience} roomId={roomId}/>
    </div>
  );
};
