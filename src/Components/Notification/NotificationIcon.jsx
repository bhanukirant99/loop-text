import React from "react";
import { NotificationModal } from "../../Components/Modals/NotificationModal";

export const NotificationIcon = () => {
  return (
    <div className="flex items-center">
      <span className="material-icons-round cursor-pointer pr-5 text-4xl">logout</span>
      <a href="#notification-modal">
        <span className="material-icons-outlined text-4xl lg:text-4xl pr-5">
          notifications
        </span>
      </a>
      <NotificationModal />
    </div>
  );
};
