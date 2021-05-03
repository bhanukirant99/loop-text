import React from "react";

export const InputMessage = () => {
  return (
    <div className="flex flex-row fixed bottom-0.5  border rounded-lg px-5 mt-28">
      <input type="text" className="w-full px-5" />
      <span className="material-icons-round text-4xl">send</span>
    </div>
  );
};
