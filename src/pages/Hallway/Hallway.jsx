import {
  Navbar,
  SearchFilter,
  RoomTabs,
  RoomCard,
  CreateRoom,
  CreateRoomModal,
} from "../../Components";

export const Hallway = () => {
  return (
    <div>
      <Navbar />
      <SearchFilter />
      <RoomTabs />
      <RoomCard />
      <CreateRoom />
      {/* <CreateRoomModal/> */}
    </div>
  );
};
