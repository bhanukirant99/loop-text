import { Stage } from "./Stage";
import {Message} from '../ChatRoom/Message'
import {InputMessage} from '../ChatRoom/InputMessage'
export const ChatRoomDesktop = () => {
  return (
    <div>
      <Stage iconName="" text="Stage" />
      <h1 className="text-2xl text-center pt-5 border-b-2 ">Room Name</h1>
      <Message />
      <InputMessage />
      <Stage iconName="" text="Audience" />
    </div>
  );
};
