import React from "react";
import { Button } from "../";
export const NotificationModal = ({ roomText, nameText }) => {
  return (
    <div
      id="notification-modal"
      className="notification-modal flex flex-col justify-center"
    >
      <a href="#close" className=" fixed right-4 top-4" title="Close">
        <span className="material-icons-round text-white hover:text-red-500">
          close
        </span>
      </a>
      <div className="notification flex flex-row justify-center">
        <div className="notification-card border p-3 m-5 bg-gray-50">
          <div className="notification-content">
            <p>{`You are invited to Room ${roomText} By ${nameText}`}</p>
          </div>
          <div className="notification-actions flex flex-row justify-end mt-2">
            <Button
              primary="bg-green-500 text-white w-1/5 h-10 text-1xl mx-3"
              text="Accept"
            />
            <Button
              primary="bg-red-500 text-white w-1/5 h-10 text-1xl "
              text="Deny"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
