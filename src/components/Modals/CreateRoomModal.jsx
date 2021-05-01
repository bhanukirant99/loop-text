import "./modal.css";
import { Button } from "..";
export const CreateRoomModal = () => {
  return (
    <div className="modal">
      <div className="modal-content flex flex-col items-center justify-around  ">
        <form action="" className=''>
          <h1 className='text-center text-3xl text-white mb-4'>CREATE ROOM</h1>
          <div className="mb-4 px-3">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Topic"
            />
          </div>
          <div className="mb-4 px-3">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Description"
            />
          </div>

          <div className="mb-4 px-3">
            <span className="text-sm text-white">Select Room Privacy</span>
          </div>
          <div className="mb-4 px-3">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="accountType"
                value="1"
              />
              <span className="ml-2 text-white">Private</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="form-radio"
                name="accountType"
                value="2"
              />
              <span className="ml-2 text-white">Public</span>
            </label>
          </div>
         
          <div className="flex items-center justify-between p-2">
          <Button
        primary="btn btn-blue w-2/5 h-10 text-1xl rounded-md  fixed-btn-center w-96 "
        text="CREATE"
      />
          </div>
        </form>
      </div>
    </div>
  );
};
