import { Button } from "..";
import "./modal.css";
export const DialogModal = ({ msg }) => {
  return (
    <div id="modal" className="modal flex flex-col justify-center">
      <div className="dialog-content border w-72 p-5  ">
        <p className="text-white text-center text-1xl">{msg}</p>
        <div className="dialog-actions flex flex-row justify-center mt-2">
          <a href="#save-chat-modal">
            <Button
              primary="bg-green-500 text-white w-2/5 h-10 text-1xl mx-3"
              text="Yes"
            />
          </a>
          <a href="#close">
            <Button
              primary="bg-red-500 text-white w-2/5 h-10 text-1xl "
              text="No"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
