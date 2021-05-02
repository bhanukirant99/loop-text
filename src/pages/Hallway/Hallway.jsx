import {
  Navbar,
  SearchFilter,
  RoomTabs,
  RoomCard,
  CreateRoom,
  CreateRoomModal,
} from "../../Components";
import firebase from 'firebase/app';
import "firebase/firestore";
import { useSnapshotCollection } from "../../hooks/useSnapshotCollection";

export const Hallway = () => {
 
  const {data}=useSnapshotCollection(firebase.firestore().collection("Rooms"));
 
  return (
    <div>
      <Navbar />
      <SearchFilter />
      <RoomTabs />
      <RoomCard rooms={data}/>
      <CreateRoom />
      <CreateRoomModal/>
    </div>
  );
};
