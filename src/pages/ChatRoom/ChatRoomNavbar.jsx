export const ChatRoomNavbar = () => {
  return (
    <div className="chat_room_navbar fixed w-full z-10 bg-gray-400 flex flex-row justify-between border-b-2 p-1 shadow items-center">
      <span className="material-icons text-2xl">arrow_back </span>
      <span className="text-2xl">Leave Room</span>
      <span className="material-icons text-2xl">mic</span>
      <span className="material-icons text-2xl">person</span>
      <span className="material-icons text-2xl">pan_tool</span>
      <span className="material-icons text-32xl">notifications</span>
    </div>
  );
};
