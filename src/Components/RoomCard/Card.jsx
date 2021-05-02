import React from "react";

export const Card = ({topic}) => {
  return (
    <div className="room-card flex flex-row items-center justify-center  w-96  h-52  mx-5 my-3 shadow rounded-lg relative bg-gray-100">
      <div className="room-card-content ">
        <img src='/images/live-streaming.svg' className='room-badge material-icons absolute' alt='live feed'/>
        <h1 className="room-name text-3xl ">{topic}</h1>
      </div>
    </div>
  );
};
