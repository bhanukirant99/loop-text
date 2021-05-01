import { Button } from "../";
export const CreateRoom = () => {
  return (
 <div className="flex justify-center z-10 lg:flex lg:justify-center  ">

 
      <Button
        primary="bg-blue-500 text-white w-2/5 h-10 text-1xl  fixed-btn-center fixed top "
        text="Create Room"
      />
       <Button
        primary=" bg-blue-500 text-white w-2/5 lg:w-48 lg:rounded-md lg:mt-10 h-20 text-1xl outline-none focus:outline-none"
        text="Create Room"
      />
    </div>
  );
};
