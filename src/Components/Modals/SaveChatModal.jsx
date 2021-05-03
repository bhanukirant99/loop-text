import { Button } from "..";
import "./modal.css";
export const SaveChatModal = () => {
  return (
    <div id ="SaveChatModal" className="SaveChatModal flex flex-col justify-center">
      <div className=" border w-72 p-5  ">
        <p className="text-white text-center text-1xl">Do you really want to close</p>
        <div className="dialog-actions flex flex-row justify-center mt-2">
          <a href='#SaveChatModal' className='w-3/5'><Button
            primary="bg-green-500 text-white w-3/5 h-10 text-1xl mx-3"
            text="Save"
          /></a>
         <a href='#close' className='w-5/5'><Button
            primary="bg-red-500 text-white w-5/5 h-10 text-1xl "
            text="Discard"
          /></a> 
        </div>
      </div>
    </div>
  );
};