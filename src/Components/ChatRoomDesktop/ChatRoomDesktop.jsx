import { Stage } from "./Stage";
import { Chat } from "./Chat";
import { Audience } from "./Audience";

import "./chat_room_desktop.css";
export const ChatRoomDesktop = ({
  messages,
  staged,
  audience,
  roomId,
  creatorId,
}) => {
  return (
    <div className="chat_room_desktop_main">
      <Stage staged={staged} roomId={roomId} creatorId={creatorId} />
      <Chat messages={messages} roomId={roomId} />
      <Audience audience={audience} roomId={roomId} creatorId={creatorId} />
    </div>
  );
};
