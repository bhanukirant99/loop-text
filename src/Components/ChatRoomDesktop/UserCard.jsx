import React from "react";

export const UserCard = ({ userName }) => {
  return (
    <div className="user-card flex flex-row justify-evenly items-center ">
      <span className="material-icons text-4xl p-2">account_circle</span>
      <p className=" text-3xl text-black">{userName}</p>
    </div>
  );
};
