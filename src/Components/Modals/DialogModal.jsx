import { Button } from "..";
import "./modal.css";
import {SaveChatModal} from '../Modals/SaveChatModal'
export const DialogModal = ({ msg }) => {
  return (
    <>
    <div id="modal" className="modal flex flex-col justify-center">
      <div className="dialog-content border w-72 p-5  ">
        <p className="text-white  text-1xl">Do you really want to close</p>
        <div className="dialog-actions flex flex-row justify-center mt-2">
          <a href="#SaveChatModal" className=' w-3/5 '>
            <Button
              primary="bg-green-500 text-white w-2/5 h-10 text-1xl "
              text="Yes"
            />
          </a>
          <a href="#close" className=' w-3/5'>
            <Button
              primary="bg-red-500 text-white w-2/5 h-10 text-1xl "
              text="No"
            />
          </a>
        </div>
      </div>
      
    </div>
    <SaveChatModal/>
    </>
  );
};
