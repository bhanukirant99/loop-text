import React from "react";
import { Navbar, SearchFilter, RoomTabs, RoomCard,CreateRoom,CreateRoomModal,Notification,DialogModal,InviteModal } from "../";

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
      <CreateRoom/> 
      <CreateRoomModal/>
      <Notification roomText="ReactJs" nameText="Maddy"/>
      <Notification roomText="Mongoose" nameText="Kushank"/>
      <Notification roomText="FireBase" nameText="Janki"/>
      <Notification/>
      <Notification/>
      <DialogModal msg="Do you really want to close?"/> */}
      <InviteModal headerText="Staged Audience" />
      
    </div>
  );
};
