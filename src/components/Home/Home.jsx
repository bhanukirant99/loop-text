import React from "react";
import { Navbar, SearchFilter, RoomTabs, RoomCard,CreateRoom,CreateRoomModal } from "../";

import "./home.css";
export const Home = () => {
  return (
    <div>
      {/* <Navbar />
      <SearchFilter />
      <RoomTabs />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <CreateRoom/>  */}
      <CreateRoomModal/>
    </div>
  );
};
