import { StageModal } from "../../Components/Modals/StageModal";
import { AudienceModal } from "../../Components/Modals/AudienceModal";
import { NotificationModal } from "../../Components/Modals/NotificationModal";
import { DialogModal } from "../../Components/Modals/DialogModal";
import { SaveChatModal } from "../../Components/Modals/SaveChatModal";

export const ChatRoomNavbar = () => {
  return (
    <div className="chat_room_navbar fixed w-full z-10 bg-gray-400 flex flex-row justify-between border-b-2 p-1 shadow items-center">
      <a href="#modal">
        <span className="material-icons text-2xl text-red-700">arrow_back</span>
      </a>
      <span className="text-2xl">{"Room name"}</span>

      <a href="#stage-modal">
        <span className="material-icons text-2xl">mic</span>
      </a>
      <a href="#audience-modal">
        <span className="material-icons text-2xl">person</span>
      </a>

      <span className="material-icons text-2xl">pan_tool</span>

      <a href="#notification-modal">
        <span className="material-icons text-32xl">notifications</span>
      </a>
      <DialogModal />
      <SaveChatModal />
      <StageModal />
      <AudienceModal />
      <NotificationModal />
    </div>
  );
};
