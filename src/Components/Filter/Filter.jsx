import React from "react";

export const Filter = ({ setStatus }) => {
  return (
    <select
      className="lg:py-5 lg:w-40"
      onChange={(e) => {
        switch (e.target.value) {
          case "1":
            setStatus("ACTIVE");
            break;

          case "2":
            setStatus("PAST");
            break;

          default:
            break;
        }
      }}
    >
      <option className="text-center">CHOOSE FILTER</option>
      <option value="1">ACTIVE ROOM</option>
      <option value="2">PAST ROOM</option>
    </select>
  );
};
