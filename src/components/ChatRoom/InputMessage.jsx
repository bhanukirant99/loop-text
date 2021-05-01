import React from "react";

export const InputMessage = () => {
  return (
    <div className="flex flex-row  border rounded-lg px-5 mt-28">
      <input type="text" className='w-full px-5' />
      <span className="material-icons text-4xl">send</span>
    </div>
  );
};
