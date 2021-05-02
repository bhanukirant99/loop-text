import React from "react";

export const Filter = () => {
  return (
    <select className="lg:py-5 lg:w-40 ">
      <option className="text-center">CHOOSE FILTER</option>
      <option value="1">ACTIVE ROOM</option>
      <option value="2">PAST ROOM</option>
    </select>
  );
};
