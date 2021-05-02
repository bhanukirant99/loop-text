import { ChatRoomNavbar } from "./ChatRoomNavbar";
import { InputMessage } from "./InputMessage";
import { Message } from "./Message";
import { ChatRoomDesktop } from "../../Components";

export const ChatRoom = () => {
  return (
    <div>
      <ChatRoomDesktop />

      <div className="lg:hidden">
        <ChatRoomNavbar />
        <h1 className="text-2xl text-center pt-5 border-b-2 ">Room Name</h1>
        <Message />
        <InputMessage />
      </div>
    </div>
  );
};
