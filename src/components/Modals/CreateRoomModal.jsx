import "./modal.css";
import { Button } from "..";
export const CreateRoomModal = () => {
  return (
    <div className="modal ">
      <div className="modal-content flex flex-col items-center w-full    ">
        <form action="" className='lg:w-2/5 '>
          <h1 className='text-center text-3xl text-white mb-4'>CREATE ROOM</h1>
          <div className="mb-4 px-3">
            <input
              className="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Topic"
            />
          </div>
          <div className="mb-4 px-3">
            <input
              className="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Description"
            />
          </div>

          <div className="mb-4 px-3">
            <span className="text-sm text-white lg:text-2xl">Select Room Privacy</span>
          </div>
          <div className="mb-4 px-3">
            <label className="inline-flex items-center">
              <input
                type="radio"
               
                name="accountType"
                
              />
              <span className="ml-2 text-white lg:text-2xl">Private</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                
                name="accountType"
               
              />
              <span className="ml-2 text-white lg:text-2xl">Public</span>
            </label>
          </div>
         
          <div className="flex items-center justify-center p-2 lg:py-5">
          <Button
        primary="bg-blue-500  text-white w-4/5 h-10 text-1xl lg:text-2xl  rounded-md   "
        text="CREATE"
      />
          </div>
        </form>
      </div>
    </div>
  );
};
