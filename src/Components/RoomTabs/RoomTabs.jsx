import { Button } from "..";
import "./room_tabs.css";
export const RoomTabs = ({setFilter}) => {
  return (
    <div className="room-tabs flex justify-center my-6 ">
      <Button
        primary="bg-blue-500 text-white w-2/5 lg:w-52 h-10 text-1xl mx-1 outline-none focus:outline-none"
        text="Public Rooms"
        onClickFunction={() => setFilter("PUBLIC")}
      />
      <Button
        primary="bg-blue-500 text-white w-2/5 lg:w-52 h-10 text-1xl outline-none focus:outline-none"
        text="Private Rooms"
        onClickFunction={() => setFilter("PRIVATE")}
      />
    </div>
  );
};
