import {Button} from "../";
import './room_tabs.css'
export const RoomTabs = () => {
    return (
        <div className="room-tabs flex justify-center my-6">
        <Button
          primary="btn btn-blue w-2/5 h-10 text-1xl mx-1"
          text="Public Rooms"
        />
        <Button
          primary="btn btn-blue w-2/5 h-10 text-1xl"
          text="Private Rooms"
        />
      </div>
    )
}
