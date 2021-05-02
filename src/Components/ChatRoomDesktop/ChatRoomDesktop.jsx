import { Stage } from "./Stage";
import { Chat } from "./Chat";
import { Audience } from "./Audience";

import "./chat_room_desktop.css";
export const ChatRoomDesktop = () => {
  return (
    <div className="chat_room_desktop_main">
      <Stage text="Stage" />
      <Chat />
      <Audience text="Audience" />
    </div>
  );
};
